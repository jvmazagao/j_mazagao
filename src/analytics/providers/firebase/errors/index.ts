export interface FirebaseStartupError extends Error {
  name: string;
  message: string;
  stack?: string;
}