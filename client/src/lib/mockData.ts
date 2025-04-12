export interface Provider {
  id: number;
  name: string;
  location: string;
  specialties: string[];
  rating: number;
  imageUrl: string;
}

export interface Procedure {
  id: number;
  name: string;
  description: string;
  cost: number;
  duration: string;
  imageUrl: string;
}

export interface Payment {
  id: string;
  patientId: string;
  providerId: number;
  procedureId: number;
  amount: number;
  currencyCode: string;
  status: 'pending' | 'completed' | 'failed';
  transactionHash?: string;
  createdAt: string;
}

// Healthcare providers
export const providers: Provider[] = [
  {
    id: 1,
    name: "Bangkok International Hospital",
    location: "Bangkok, Thailand",
    specialties: ["Orthopedics", "Cardiology", "Plastic Surgery"],
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Seoul Medical Center",
    location: "Seoul, South Korea",
    specialties: ["Dental", "Dermatology", "Cosmetic Surgery"],
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Medellin Health Clinic",
    location: "Medellin, Colombia",
    specialties: ["Dental", "Bariatric Surgery", "Joint Replacement"],
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Mumbai Premier Hospital",
    location: "Mumbai, India",
    specialties: ["Cardiology", "Fertility Treatment", "Oncology"],
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Medical procedures
export const procedures: Procedure[] = [
  {
    id: 1,
    name: "Knee Replacement Surgery",
    description: "Full joint replacement with titanium prosthesis",
    cost: 12500,
    duration: "4-5 day stay",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dental Implants (Full Set)",
    description: "Complete dental restoration with premium implants",
    cost: 4800,
    duration: "3 visits",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "LASIK Eye Surgery",
    description: "Advanced laser vision correction for both eyes",
    cost: 1950,
    duration: "Outpatient",
    imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
