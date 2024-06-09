import { NextRequest, NextResponse } from "next/server";
import User from "../../database/model/User";

export function GET() {
  return Response.json({ page: "Home" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const user = await User.findOne();
  return Response.json(user);
}
