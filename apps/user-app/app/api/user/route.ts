const { PrismaClient } = require("@repo/db/client")
import { NextResponse } from "next/server";

const client = new PrismaClient();

export const GET = async ()=>{
    const response = await client.user.deleteMany({
    })
    console.log(response);
    return NextResponse.json({
        msg: "user created"
    })
}