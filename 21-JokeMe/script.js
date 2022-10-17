const getAllCat = async () => {
  let res = await fetch("https://api.chucknorris.io/jokes/categories");
  let cat = await res.json();
  let html = "<option selected>Select Category</option>";
  for (let i = 0; i < cat.length; i++) {
    html += ` <option value="${cat[i]}">${cat[i]}</option>`;
  }
  document.getElementById("cat").innerHTML = html;
};
getAllCat();
const getJoke = async (e) => {
  // e.preventDefault();
  document.getElementById("res").innerHTML = `
    <div class="d-flex justify-content-center py-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
</div>
    `;
  let name = document.getElementById("name").value;
  let cat = document.getElementById("cat").value;
  if (name === "" || cat === "Select Category") {
    document.getElementById("res").innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Please Fill the data!</strong> You should check in on some of those fields above.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    `;
    return;
  }
  console.log(name + " " + cat);
  let res = await fetch(
    "https://api.chucknorris.io/jokes/random?name=" + name + "&category=" + cat
  );
  let data = await res.json();
  let html = `
    <div class="container mx-auto border-top rounded-3 bor my-4 text-center bg-primary text-white bg-opacity-50">
    <h1 class="fw-bold py-3 ">Joke</h1>
    <h4 class="py-3">${data.value}</h4> 
</div>
    `;
  document.getElementById("res").innerHTML = html;
};
