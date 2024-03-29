import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const productId = req.nextUrl.searchParams.get("productId");

  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
