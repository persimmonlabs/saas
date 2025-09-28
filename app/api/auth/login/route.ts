import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // Handle login logic here
  console.log({ email, password });
  return NextResponse.json({ message: 'Login successful' });
}
