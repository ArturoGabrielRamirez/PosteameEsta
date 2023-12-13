"use server"

import { revalidatePath } from "next/cache";

export const createNewPost = async (data : any) => {
    const request = await fetch("http://localhost:3000/api/postIt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();
    revalidatePath("/")
    return response
};
