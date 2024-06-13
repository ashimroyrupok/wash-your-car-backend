import dotenv from "dotenv";

dotenv.config();


export default {
  database_uri: process.env.DB_URI,
  port:process.env.PORT
};
