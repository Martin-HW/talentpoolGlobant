console.log("im here");

let one = document.getElementById("myElement");

fetch("http://localhost:5000/users/")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    console.log(one);
    one.innerHTML = res.map((val, ind, arr) => {
      const { id, name, place } = val;
      return `
        <ul>
            <li>ID: ${id}</li>
            <li>NAME: ${name}</li>
            <li>PLACE: ${place}</li>
        </ul>
      `;
    });
  });
