import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    console.error("Missing required fields for login");
    return NextResponse.json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email }).exec();

    if (!existingUser) {
      console.error("User with this email does not exist");
      return NextResponse.json({
        success: false,
        message: "User with this email does not exist",
      });
    }

    const isPasswordValid = existingUser.password === password;

    if (!isPasswordValid) {
      console.error("Invalid password for user", email);
      return NextResponse.json({
        success: false,
        message: "Invalid password",
      });
    } else {
      console.log("User logged in successfully", email);
      return NextResponse.json({
        success: true,
        message: "User logged in successfully",
      });
    }
  } catch (error) {
    console.error("Error with user login", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while logging in",
    });
  }
}
