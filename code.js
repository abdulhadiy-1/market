let cards = document.querySelector(".cards");
const api = axios.create({
  baseURL: "https://679a1456747b09cdcccd9892.mockapi.io",
});
function showCard(arr) {
  arr.forEach((e) => {
    cards.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
          <div class="img_name">
            <img
              src="https://img.freepik.com/free-photo/creative-crystal-lens-ball-photography-lake-with-greenery-around-dawn_181624-29379.jpg"
              alt=""
              class="pic"
            />
            <h2 class="name">${e.name}</h2>
          </div>
          <p class="desc">${e.dec}</p>
          <div class="price_btn">
            <p class="price">${e.price}$</p>
            <div class="btn">
              <button class="bbuy" onclick="buyprod(${e.id})">buy</button>
              <button class="bdel" onclick="delprod(${e.id})">delete</button>
              <button class="buodate" >update</button>
            </div>
          </div>
        </div>`
    );
  });
}

function buyprod(e) {
  let arr = [];
  if (localStorage.getItem("buyed_prod")) {
    arr = JSON.parse(localStorage.getItem("buyed_prod"));
  }

  api
    .get(`/hello/${e}`)
    .then((prod) => {
      let product = prod.data;
      let exists = arr.some((p) => p.id === product.id);
        
      if (!exists) {
        arr.push(product);
        localStorage.setItem("buyed_prod", JSON.stringify(arr));
      }
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
}

function delprod(id){
    api.delete(`/hello/${id}`).then((res) => location.reload())
    arr = JSON.parse(localStorage.getItem("buyed_prod"));
    arr = arr.filter(item => item.id !== id)
}

api.get("/hello").then((res) => showCard(res.data));
