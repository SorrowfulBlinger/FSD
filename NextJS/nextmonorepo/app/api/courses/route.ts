
export async function GET(req) {  //Artifical wait 
  // Artificail wait  
    await new Promise((c) => setTimeout(c,2000))
    return Response.json({
        "courses": ["Hello Next" , "Hello TS", "Hello Spring", "Hello Java"]
      }, {
        status: 200
      })
}