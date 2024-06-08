import {defineConfig} from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({path: '.env'});

if(!process.env.DATABASE_URL){
    console.log("🚨 Cannot find Database URL")
}

export default defineConfig({
    schema: './src/app/lib/supabase/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials:{
        url: process.env.DATABASE_URL || '',
        port: 5432,
        database: 'postgres',
        host: 'aws-0-ap-southeast-1.pooler.supabase.com',
        user: 'postgres.mqfucddewuigxsddyfon',
        password: process.env.PW || '',
    }, 
})