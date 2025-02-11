import ImageKit from 'imagekit';
import dummybooks from '../dummybooks.json'
import { books } from './schema';
import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

config({ path: ".env.local" });
const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle({client: sql});

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,    
})
const uploadToImageKit = async(url: string, fileName: string, folder: string) => {
    try {
        //console.log(`Uploading file from: ${url}`); 
        const response = await imagekit.upload({
            file: url,
            fileName,
            folder,
        });
        return response.filePath;
    } catch(error) {
        console.error("Error uploading image to ImageKit:", error);
    }
}

const seed = async () => {
    console.log('Seeding data...');

    try {
        for(const book of dummybooks) {
            const coverUrl = (await uploadToImageKit(book.coverUrl, `${book.title}.jpg`, "/books/covers")) as string;            
            // const coverUrl = (await uploadToImageKit("https://example.com/images/cover.jpg", `${book.title}.jpg`, "/books/covers")) as string;
            console.log(coverUrl);
            const videoUrl = (await uploadToImageKit(book.videoUrl, `${book.title}.mp4`, "/books/videos")) as string;
            console.log(videoUrl);

            await db.insert(books).values({
                ...book,
                coverUrl,
                videoUrl,
            });
        }
        console.log("Data seeded successfully!");
    }catch(error) {
        console.log("Error seeding data:", error);
    }
};

seed();