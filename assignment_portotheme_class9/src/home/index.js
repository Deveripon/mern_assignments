const client_slider = document.getElementById("client_slider");

let client = "";
clients.map((item, index) => {
  client += ` 
   <div class="client-logo-area">
     <img class="img-fluid client-logo"
     src="${item.logo}"
     alt="" />
  </div>`;
});
client_slider.innerHTML = client;
