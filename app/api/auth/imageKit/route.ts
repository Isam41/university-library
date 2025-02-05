import ImageKit from "imagekit";
import { NextResponse } from "next/server";
import config from "@/lib/config";

const { 
    env: {
    imagekit: {publicKey, privateKey, urlEndpoint },
    },
} = config;

const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
});


export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters());
}