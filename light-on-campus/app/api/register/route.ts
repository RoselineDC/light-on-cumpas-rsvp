import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Retrieve Supabase environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Validate environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables are not set.');
    return NextResponse.json(
      { error: 'Supabase URL and/or Anon Key are not configured. Please check your .env.local file.' },
      { status: 500 }
    );
  }

  // Initialize Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { full_name, email, student_id, university_name, phone_number, dietary_restrictions, how_heard } = await request.json();

    // Basic server-side validation
    if (!full_name || !email || !university_name) {
      return NextResponse.json({ error: 'Full Name, Email, and University Name are required.' }, { status: 400 });
    }

    const { error } = await supabase
      .from('registrations')
      .insert([
        {
          full_name,
          email,
          student_id,
          university_name,
          phone_number,
          dietary_restrictions,
          how_heard,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration successful!' }, { status: 201 });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}