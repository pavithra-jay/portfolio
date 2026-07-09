import { z } from "zod";

export const contactSchema = z.object({
  from_name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters.")
    .max(40, "Name cannot exceed 40 characters.")
    .regex(
      /^[A-Za-z\s]+$/,
      "Only letters and spaces are allowed."
    ),

  from_email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(20, "Message should be at least 20 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
});