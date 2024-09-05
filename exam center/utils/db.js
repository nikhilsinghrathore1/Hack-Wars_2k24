import { config as dotenvConfig } from 'dotenv';
dotenvConfig(); 

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.NEXT_PUBLIC_DIRZZLE_DB_URL);

// Initialize drizzle with neon and schema
export const db = drizzle(sql, { schema });
