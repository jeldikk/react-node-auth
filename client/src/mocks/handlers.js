import {http, HttpResponse} from "msw";

export const handlers = [
    http.post("/api/v1/auth/register", async ({request}) => {
        const userPayload = await request.json();
        // console.log({userPayload})
        return HttpResponse.json({message: "create response"}, {status: 201})
    })
]