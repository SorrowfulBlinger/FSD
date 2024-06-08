"use client"

 function getData1():void {
  console.log('Async ajax calls 2')
  const jsdata = 'static'

  fetch('http://localhost:3002/data', {
    credentials: "include"
  })
  fetch('http://localhost:3003/data' , {
    credentials: "include"
  })

  // POST iwth headers , PUT, DEL will have preflights
  fetch('http://localhost:3003/pdata' , {
    method: "POST",
    credentials: "include",
    headers :{
      'x-req-id' : 'test'
    }
  })
}

export default function AsyncComp(){
  return (
    <div>
      <button onClick={getData1}>AsyncComp Component</button>
    </div>
  );
};
