//"use server"
async function getData():Promise<String> {
  console.log('Env::: ' + process.env.BE_DOMAIN_ENV)
  const domain =  process.env.BE_DOMAIN_ENV || 'be'
  //const data = await fetch(`http://${domain}:3002/data`)
  const jsdata = 'static'

  const data1 = await fetch('http://localhost:3002/data', {
    credentials: "include"
  })
  const data2 = await fetch('http://localhost:3003/data' , {
    credentials: "include"
  })
  return jsdata

}

export const Code =  async function() {
  const data = await getData();
  //const data = 'Hello damm';
  return <div>{JSON.stringify(data)}</div>
}