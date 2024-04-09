import { NextResponse } from "next/server";

import {db} from '@/src/lib/db'

export const POST = async (req:Request) => {
    try {
        const body = await req.json()
        const {id, email_addresses, first_name, image_url } = body?.data

        const email = email_addresses[0]?.email_address

        await db.user.upsert({
            where:{ clerkId: id},
            update:{
                email,
                name: first_name,
                profileImage: image_url,
            },
            create:{
                clerkId: id,
                email,
                name: first_name || "",
                profileImage: image_url || ""
            }
        })

        return new NextResponse('User updated in database successfully',{ status:200})
    } catch (error) {
        console.log("Erron updating database: ", error);
        return new NextResponse("Erron updating database", {status:500})
        
    }
}