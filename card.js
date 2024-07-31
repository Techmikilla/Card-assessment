let url ="https://fakestoreapi.com/products";
let btn = document.getElementById("btn");
let img = document.getElementById("demoornot");
let h3 = document.getElementById("title");
let p = document.getElementById("price");
 async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    img.src = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    h3.innerHTML = "Round collar jacket for male";
    p.innerHTML="Price:$2000"

    "//if (img=="//./mech.jpeg"){
    //    img.src= "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
   // }
    //else {
     //   img.src="./mech.jpeg"
    //}
}
img.style.width = "200px" 
img.style.height = "200px"