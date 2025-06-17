import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { name, email, phone, password } = await req.json();

  if (!name || !email || !password || !phone) {
    console.error("Missing required fields for registration");
    return NextResponse.json({
      success: false,
      message: "name, email, phone, and password are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
      console.error("User with this email already exists");
      return NextResponse.json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const newUser = new User({ name, email, phone, password });
    await newUser.save();

    console.log("User registered successfully");

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while registering the user",
    });
  }
}
