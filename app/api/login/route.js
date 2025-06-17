import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email }).exec();

    if (!existingUser) {
      return NextResponse.json({
        success: false,
        message: "User with this email does not exist",
      });
    }

    console.log("User found:", existingUser);
    console.log("Attempting to validate password for user:", password);

    const isPasswordValid = existingUser.password === password;

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Invalid password",
      });
    }

    return NextResponse.json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Error with user login", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while logging in",
    });
  }
}
