import { NextRequest, NextResponse } from "next/server";

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
