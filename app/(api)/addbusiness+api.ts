import { neon } from '@neondatabase/serverless';

if (!process.env.NEON_DB_URL) {
    throw new Error('NEON_DATABASE_URL must be a Neon postgres connection string')
}
const sql = neon(`${process.env.NEON_DB_URL}`);

export async function POST(request: Request) {
    // debugger;
    try {
      const sql = neon(`${process.env.NEON_DB_URL}`);
      const {Email,brandName,city,state,country,address,phone,location,description,businessImage,Category,clerk_id} = await request.json();
      console.log(Email,brandName,city,state,country,address,phone,location,description,businessImage,Category,clerk_id)
      if (!Email||!brandName||!city || !state || !country || !address || !phone || !location || !description || !businessImage || !Category ||!clerk_id) {
        return Response.json(
          { error: "Missing required fields" },
          { status: 400 },
        );
      }
  
      const response = await sql`INSERT INTO vendors (
    email,
    brandname,
    city,
    state,
    country,
    address,
    phonenumber,
    location,
    description,
    business_image,
    cat_id,
    clerk_id
      ) VALUES (
        ${Email},
        ${brandName},
        ${city},
        ${state},
        ${country},
        ${address},
        ${phone},
        ${location},
        ${description},
        ${businessImage},
        ${Category},
        ${clerk_id}
      )RETURNING *;`;
  
      return new Response(JSON.stringify({ data: response }), {
        status: 201,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  