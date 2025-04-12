import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPaymentSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/providers", async (req: Request, res: Response) => {
    try {
      const providers = await storage.getProviders();
      res.json(providers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch providers" });
    }
  });

  app.get("/api/providers/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const provider = await storage.getProvider(id);
      
      if (!provider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      
      res.json(provider);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch provider" });
    }
  });

  app.get("/api/providers/:id/procedures", async (req: Request, res: Response) => {
    try {
      const providerId = parseInt(req.params.id);
      const procedures = await storage.getProceduresByProvider(providerId);
      res.json(procedures);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch procedures" });
    }
  });

  app.get("/api/procedures/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const procedure = await storage.getProcedure(id);
      
      if (!procedure) {
        return res.status(404).json({ message: "Procedure not found" });
      }
      
      res.json(procedure);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch procedure" });
    }
  });

  app.post("/api/payments", async (req: Request, res: Response) => {
    try {
      const paymentData = insertPaymentSchema.parse(req.body);
      const payment = await storage.createPayment(paymentData);
      res.status(201).json(payment);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      res.status(500).json({ message: "Failed to create payment" });
    }
  });

  app.get("/api/payments/provider/:id", async (req: Request, res: Response) => {
    try {
      const providerId = parseInt(req.params.id);
      const payments = await storage.getPaymentsByProvider(providerId);
      res.json(payments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch payments" });
    }
  });

  app.patch("/api/payments/:id/status", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || !['pending', 'completed', 'failed'].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      
      const payment = await storage.updatePaymentStatus(id, status);
      
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      
      res.json(payment);
    } catch (error) {
      res.status(500).json({ message: "Failed to update payment status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
