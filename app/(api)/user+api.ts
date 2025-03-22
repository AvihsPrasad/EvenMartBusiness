import { neon } from '@neondatabase/serverless';

if (!process.env.NEON_DB_URL) {
    throw new Error('NEON_DATABASE_URL must be a Neon postgres connection string')
}
const sql = neon(`${process.env.NEON_DB_URL}`);

export async function POST(request: Request) {
    // debugger;
    try {
      const sql = neon(`${process.env.NEON_DB_URL}`);
      const { clerkId,firstname,lastname,email } = await request.json();
      // console.log(email,firstname,lastname,clerkId)
  
      if (!clerkId || !firstname|| !lastname) {
        return Response.json(
          { error: "Missing required fields" },
          { status: 400 },
        );
      }
  
      const response = await sql`INSERT INTO users (email,firstname,lastname,clerk_id) VALUES (
        ${email},
        ${firstname},
        ${lastname},
        ${clerkId}
      );`;
  
      return new Response(JSON.stringify({ data: response }), {
        status: 201,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  