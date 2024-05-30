//Server side rendering

async function getData():Promise<string[]> {
  const resp = await fetch("http://localhost:3000/api/courses",{
    method : "GET",
    headers : {}
  })
  let data = await resp.json();
  return data.courses;

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const courses = ["a", "b", "c"];
  //     resolve(["aaa", "sss"]);
  //   }, 5000);
  // });
}

// Async component
export default async function Home() {
  let courses:string[] = await getData();
  //let courses = ["a", "b", "c"];
  return (
    <div className="mt-10 flex justify-center text-center sm:rounded-lg">
      <table className="w-[600px] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Our Courses
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of NextJS courses designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-3 py-6">
                      Course name
                  </th>
              </tr>
          </thead>
          <tbody>
            {courses.map((c, index) => {
            //return <h1 key={index}> {c} </h1>;
            return <tr key= {index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th key= {index} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {c}
                  </th>
              </tr>
            })}
              
              
          </tbody>
      </table>
    </div>
  );






}
