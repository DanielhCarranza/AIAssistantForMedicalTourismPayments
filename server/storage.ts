import { 
  users, 
  providers, 
  procedures, 
  payments, 
  type User, 
  type InsertUser,
  type Provider,
  type InsertProvider,
  type Procedure,
  type InsertProcedure,
  type Payment,
  type InsertPayment
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Provider methods
  getProvider(id: number): Promise<Provider | undefined>;
  getProviders(): Promise<Provider[]>;
  createProvider(provider: InsertProvider): Promise<Provider>;
  
  // Procedure methods
  getProcedure(id: number): Promise<Procedure | undefined>;
  getProceduresByProvider(providerId: number): Promise<Procedure[]>;
  createProcedure(procedure: InsertProcedure): Promise<Procedure>;
  
  // Payment methods
  getPayment(id: number): Promise<Payment | undefined>;
  getPaymentsByUser(userId: number): Promise<Payment[]>;
  getPaymentsByProvider(providerId: number): Promise<Payment[]>;
  createPayment(payment: InsertPayment): Promise<Payment>;
  updatePaymentStatus(id: number, status: string): Promise<Payment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private providers: Map<number, Provider>;
  private procedures: Map<number, Procedure>;
  private payments: Map<number, Payment>;
  private currentUserId: number;
  private currentProviderId: number;
  private currentProcedureId: number;
  private currentPaymentId: number;

  constructor() {
    this.users = new Map();
    this.providers = new Map();
    this.procedures = new Map();
    this.payments = new Map();
    this.currentUserId = 1;
    this.currentProviderId = 1;
    this.currentProcedureId = 1;
    this.currentPaymentId = 1;
    
    // Initialize with some mock data
    this.initializeMockData();
  }

  private initializeMockData() {
    // Create providers
    const provider1: Provider = {
      id: this.currentProviderId++,
      userId: null,
      name: "Bangkok International Hospital",
      location: "Bangkok, Thailand",
      specialties: ["Orthopedics", "Cardiology", "Plastic Surgery"],
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    
    const provider2: Provider = {
      id: this.currentProviderId++,
      userId: null,
      name: "Seoul Medical Center",
      location: "Seoul, South Korea",
      specialties: ["Dental", "Dermatology", "Cosmetic Surgery"],
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    
    // Add providers to map
    this.providers.set(provider1.id, provider1);
    this.providers.set(provider2.id, provider2);
    
    // Create procedures
    const procedure1: Procedure = {
      id: this.currentProcedureId++,
      providerId: provider1.id,
      name: "Knee Replacement Surgery",
      description: "Full joint replacement with titanium prosthesis",
      cost: 12500,
      duration: "4-5 day stay",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    
    const procedure2: Procedure = {
      id: this.currentProcedureId++,
      providerId: provider2.id,
      name: "Dental Implants (Full Set)",
      description: "Complete dental restoration with premium implants",
      cost: 4800,
      duration: "3 visits",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    
    // Add procedures to map
    this.procedures.set(procedure1.id, procedure1);
    this.procedures.set(procedure2.id, procedure2);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Provider methods
  async getProvider(id: number): Promise<Provider | undefined> {
    return this.providers.get(id);
  }
  
  async getProviders(): Promise<Provider[]> {
    return Array.from(this.providers.values());
  }
  
  async createProvider(insertProvider: InsertProvider): Promise<Provider> {
    const id = this.currentProviderId++;
    const provider: Provider = { ...insertProvider, id };
    this.providers.set(id, provider);
    return provider;
  }
  
  // Procedure methods
  async getProcedure(id: number): Promise<Procedure | undefined> {
    return this.procedures.get(id);
  }
  
  async getProceduresByProvider(providerId: number): Promise<Procedure[]> {
    return Array.from(this.procedures.values()).filter(
      (procedure) => procedure.providerId === providerId
    );
  }
  
  async createProcedure(insertProcedure: InsertProcedure): Promise<Procedure> {
    const id = this.currentProcedureId++;
    const procedure: Procedure = { ...insertProcedure, id };
    this.procedures.set(id, procedure);
    return procedure;
  }
  
  // Payment methods
  async getPayment(id: number): Promise<Payment | undefined> {
    return this.payments.get(id);
  }
  
  async getPaymentsByUser(userId: number): Promise<Payment[]> {
    return Array.from(this.payments.values()).filter(
      (payment) => payment.userId === userId
    );
  }
  
  async getPaymentsByProvider(providerId: number): Promise<Payment[]> {
    return Array.from(this.payments.values()).filter(
      (payment) => payment.providerId === providerId
    );
  }
  
  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = this.currentPaymentId++;
    const payment: Payment = { ...insertPayment, id };
    this.payments.set(id, payment);
    return payment;
  }
  
  async updatePaymentStatus(id: number, status: string): Promise<Payment | undefined> {
    const payment = this.payments.get(id);
    if (payment) {
      const updatedPayment = { ...payment, status };
      this.payments.set(id, updatedPayment);
      return updatedPayment;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
