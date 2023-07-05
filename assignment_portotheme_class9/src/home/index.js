//<!-- ========== Client Logo Slider Start From Here ========== -->//
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

//<!-- ========== Client Logo Slider End From Here ========== -->//

//<!-- ========== Latest Post Slider Start From Here ========== -->//

const latest_posts = document.getElementById("latest_posts");

let post = "";

posts.map((item, index) => {
  post += `
  <div class="row post_container">
  <div class=" left_post_container col-lg-6 mb-4 mb-lg-0">
    <article>
      <div class="row">
        <div class="col-auto pr-0">
          <div class="date">
            <span class="day font-weight-extra-bold">${item[0].post_time.date}</span>
            <span class="month text-1">${item[0].post_time.month}</span>
          </div>
        </div>
        <div class="col pl-1">
          <h4 class="text-primary text-4">
            <a class="d-block"
              href="blog-post.html">${item[0].title}</a>
          </h4>
          <p class="pr-4 mb-0">
            ${item[0].content}
          </p>
          <a href="https://www.okler.net/"
            class="read-more text-color-dark font-weight-semibold text-2">read more
            <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>
        </div>
      </div>
    </article>
  </div>
  <div class="right_post_container col-lg-6">
    <article>
      <div class="row">
        <div class="col-auto pr-0">
          <div class="date">
            <span class="day font-weight-extra-bold">${item[1].post_time.date}</span>
            <span class="month text-1">${item[1].post_time.month}</span>
          </div>
        </div>
        <div class="col pl-1">
          <h4 class="text-primary text-4">
            <a class="d-block"
              href="blog-post.html">${item[1].title}</a>
          </h4>
          <p class="pr-4 mb-0">
            ${item[1].content}
          </p>
          <a href="https://www.okler.net/"
            class="read-more text-color-dark font-weight-semibold text-2">read more
            <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>
        </div>
      </div>
    </article>
  </div>
</div>
  `;
});

latest_posts.innerHTML = post;

//<!-- ========== Latest Post Slider End From Here ========== -->//

//<!-- ==========  Testimonial Start From Here ========== -->//
const testimonial_container = document.getElementById("testimonial_container");
let testimonial = "";
testimonials.map((item, index) => {
  testimonial += `
  <div>
  <div class="col">
    <div class="testimonial testimonial-primary">
      <blockquote>
        <p class="mb-0">
          ${item.content}
        </p>
      </blockquote>
      <div class="testimonial-arrow-down"></div>
      <div class="testimonial-author">
        <div class="testimonial-author-thumbnail">
          <img src="${item.client.img}" class="rounded-circle" alt="" />
        </div>
        <p>
          <strong>${item.client.name}</strong>
          <span>${item.client.desg}</span>
        </p>
      </div>
    </div>
  </div>
</div>
  `;
});
testimonial_container.innerHTML = testimonial;

//<!-- ==========  Testimonial End From Here ========== -->//

//<!-- ========== Features Start From Here ========== -->//
//get left container
const features_left_container = document.querySelector(
  ".features_left_container"
);
// get right container
const features_right_container = document.querySelector(
  ".features_right_container"
);

// fetch data for left container
let left_feature = "";
features[0].map((feature, i) => {
  left_feature += `
    <div class="feature-box feature-box-style-2">
    <div class="feature-box-icon">
      <i class="icons ${feature.icon} text-color-primary"></i>
    </div>
    <div class="feature-box-info">
      <h4 class="font-weight-bold text-4-5 mb-1">
        ${feature.title}
      </h4>
      <p class="mb-4">
       ${feature.desc}
      </p>
    </div>
    </div>
`;
});
features_left_container.innerHTML = left_feature;
// fetch data for  right container
let right_feature = "";
features[1].map((feature, i) => {
  right_feature += `
    <div class="feature-box feature-box-style-2">
    <div class="feature-box-icon">
      <i class="icons ${feature.icon} text-color-primary"></i>
    </div>
    <div class="feature-box-info">
      <h4 class="font-weight-bold text-4-5 mb-1">
        ${feature.title}
      </h4>
      <p class="mb-4">
       ${feature.desc}
      </p>
    </div>
    </div>
`;
});
features_right_container.innerHTML = right_feature;

//<!-- ========== Features End From Here ========== -->//

//<!-- ==========  Accordion Start From Here ========== -->//
const accordion = document.getElementById("accordion");
let accordionlist = "";
accordions.map((item, i) => {
  accordionlist += `
  
  <div class="card card-default">
                <div class="card-header">
                  <h4 class="card-title m-0">
                    <a class="accordion-toggle text-color-dark font-weight-bold"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#${item.acc_id()}">
                      <i class="icons ${item.icon} text-color-primary"></i>
                      ${item.title}
                    </a>
                  </h4>
                </div>
              
                <div id="${item.acc_id()}"
                  class="collapse show">
                  <div class="card-body text-2">
                    <p>
                     ${item.description}</p>
                    </p>
                    <p class="mb-0">
                      Adipiscing elit phasellus blanit ma...
                      <a href="#"
                        class="d-block text-color-dark font-weight-semibold pt-4">read more
                        <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>
                    </p>
                  </div>
                </div>
              </div>`;
});
accordion.innerHTML = accordionlist;

//<!-- ==========  Accordion End From Here ========== -->//
