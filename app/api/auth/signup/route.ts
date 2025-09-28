import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // Handle signup logic here
  console.log({ email, password });
  return NextResponse.json({ message: 'Signup successful' });
}
