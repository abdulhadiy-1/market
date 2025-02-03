let product1 = JSON.parse(localStorage.getItem("buyed_prod"));
let products = document.querySelector(".products");
function show() {
  product1.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://img.freepik.com/free-photo/creative-crystal-lens-ball-photography-lake-with-greenery-around-dawn_181624-29379.jpg" alt="" />
      <div class="info">
      <h2 class="name">${element.name}</h2>
      <p class="desc">${element.dec}</p>
      <p class="price">${element.price}$</p>
      <button class="del" onclick="del(${element.id})">delete</button>
      </div>
    `;
    products.appendChild(card);
  });
}
function del(id) {
  product1 = product1.filter((y) => y.id != id);
  localStorage.setItem("buyed_prod", JSON.stringify(product1));
  location.reload();
}
show();
console.log(product1);
