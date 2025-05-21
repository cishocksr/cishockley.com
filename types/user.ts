export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  role?: "admin" | "editor" | "viewer";
  createdAt?: string;
  authProvider?: "github" | "google" | "email";

};
