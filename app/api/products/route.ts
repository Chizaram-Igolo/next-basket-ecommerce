import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const limit = req.nextUrl.searchParams.get("limit");
  const skip = req.nextUrl.searchParams.get("skip");

  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
