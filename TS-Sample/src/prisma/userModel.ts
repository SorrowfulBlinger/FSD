import { PrismaClient } from "@prisma/client";
let dbClient:PrismaClient;

interface Post  {
    postId?: number
    content: string
    authorId?: Number
}

interface User {
    userId?:number
    name: string
    email: string
    posts?: Post[]
}

//initialise once else poor perf
export function setUpPrismaDB(): void{
    dbClient = new PrismaClient();
}

export async function addUser(input:User):Promise<User> {
    const userAdded = await dbClient.user.create({
        data: {
            name : input.name,
            email: input.email
        }
    })
    console.log('user added');
    return userAdded;
}

// async function addPostsForUser(input:User, posts:Post[]):Promise<void> {
//     const resp = await dbClient.user.update({
//         where: {
//             userId : input.userId
//         },
//         data : {
//             posts : {
//                 [
//                     {

//                     }
//                 ]
//             }
//         }
//     })
//     return;
// }