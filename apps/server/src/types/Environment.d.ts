export interface Bindings {
  DB: D1Database;
  GOOGLE_AUTH_CLIENT_ID: string;
  GOOGLE_AUTH_SECRET: string;
  GOOGLE_AUTH_REDIRECT_URL: string;
}

export interface Environment {
  Bindings: Bindings;
}
