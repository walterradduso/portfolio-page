import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://api.github.com';
  const response = await fetch(`${apiUrl}/user/repos?visibility=public`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch public repositories');
  }

  const data = await response.json();

  return NextResponse.json({ data });
}
