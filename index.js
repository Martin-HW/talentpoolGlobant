console.log("im here");

let toPrint = document.getElementById("myElement");

// fetch("http://localhost:5000/users/")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     console.log(one);
//     one.innerHTML = res.map((val, ind, arr) => {
//       const { id, name, place } = val;
//       return `
//         <ul>
//             <li>ID: ${id}</li>
//             <li>NAME: ${name}</li>
//             <li>PLACE: ${place}</li>
//         </ul>
//       `;
//     });
//   });

const myFetchedFunction = async () => {
  try {
    let var1 = await fetch("http://localhost:5000/users");
    let var2 = await var1.json();
    toPrint.innerHTML = var2.map((val, ind, arr) => {
      const { id, name, place } = val;
      return `
        <ul>
            <li>ID: ${id}</li>
            <li>NAME: ${name}</li>
           <li>PLACE: ${place}</li>
         </ul>
        `;
    });
  } catch (e) {
    console.log(e);
  }
};
myFetchedFunction();
