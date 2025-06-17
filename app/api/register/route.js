import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";

export async function POST(req) {
  await dbConnect();

  const { name, email, phone, password } = await req.json();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return new Response("User already exists", { status: 409 });
    }

    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    return new Response("User registered successfully", { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
