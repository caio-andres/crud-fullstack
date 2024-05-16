import mysql from "mysql";
import { configDotenv } from "dotenv";

export const db = ({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})
