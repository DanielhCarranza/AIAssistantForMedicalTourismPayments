import { pgTable, text, serial, integer, boolean, numeric, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  walletAddress: text("wallet_address"),
  email: text("email"),
  isProvider: boolean("is_provider").default(false),
});

// Healthcare Providers table
export const providers = pgTable("providers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  location: text("location").notNull(),
  specialties: text("specialties").array(),
  rating: numeric("rating").default("0"),
  imageUrl: text("image_url"),
});

// Medical Procedures table
export const procedures = pgTable("procedures", {
  id: serial("id").primaryKey(),
  providerId: integer("provider_id").references(() => providers.id),
  name: text("name").notNull(),
  description: text("description"),
  cost: numeric("cost").notNull(),
  duration: text("duration"),
  imageUrl: text("image_url"),
});

// Payments table
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  providerId: integer("provider_id").references(() => providers.id),
  procedureId: integer("procedure_id").references(() => procedures.id),
  amount: numeric("amount").notNull(),
  currencyCode: varchar("currency_code", { length: 10 }).notNull(),
  status: text("status").notNull(), // pending, completed, failed
  transactionHash: text("transaction_hash"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas for data validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  walletAddress: true,
  email: true,
  isProvider: true,
});

export const insertProviderSchema = createInsertSchema(providers).pick({
  userId: true,
  name: true,
  location: true,
  specialties: true,
  rating: true,
  imageUrl: true,
});

export const insertProcedureSchema = createInsertSchema(procedures).pick({
  providerId: true,
  name: true,
  description: true,
  cost: true,
  duration: true,
  imageUrl: true,
});

export const insertPaymentSchema = createInsertSchema(payments).pick({
  userId: true,
  providerId: true,
  procedureId: true,
  amount: true,
  currencyCode: true,
  status: true,
  transactionHash: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProvider = z.infer<typeof insertProviderSchema>;
export type Provider = typeof providers.$inferSelect;

export type InsertProcedure = z.infer<typeof insertProcedureSchema>;
export type Procedure = typeof procedures.$inferSelect;

export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type Payment = typeof payments.$inferSelect;
