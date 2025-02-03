let ipic = document.querySelector(".pic");
let iname = document.querySelector(".name");
let idec = document.querySelector(".dec");
let iprice = document.querySelector(".price");
let bcreate = document.querySelector(".create");

const api = axios.create({
  baseURL: "https://679a1456747b09cdcccd9892.mockapi.io",
});

function createCard() {
  if (ipic.value && iname.value && idec.value && iprice.value ){
    api
      .post("/hello", {
        name: iname.value,
        dec: idec.value,
        price: iprice.value,
        pic: ipic.value,
      })
      .then((res) => location.reload());
  }else{
    alert("Please fill in all fields");
  }
}
