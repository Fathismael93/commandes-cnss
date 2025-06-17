import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";

export async function POST(req) {
  await dbConnect()
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error(`Database connection failed: ${error.message}`);
    });
}
