const client_slider = document.getElementById("client_slider");

let client = "";
clients.map((item, index) => {
  client += ` 
   <div>
     <img class="img-fluid"
     src="${item.logo}"
     alt="" />
  </div>`;
});
client_slider.innerHTML = client;
