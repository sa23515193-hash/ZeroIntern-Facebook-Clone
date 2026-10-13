
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

const globalForPostgres = globalThis as typeof globalThis & {
  postgresPool?: Pool;
};

export const db =
  globalForPostgres.postgresPool ??
  new Pool({
    connectionString,
    ssl: connectionString
      ? { rejectUnauthorized: false }
      : undefined,
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPostgres.postgresPool = db;
}
