// dynamic team category menu
const nav_category = document.getElementById("team_catergory");
let category = `<li class="nav-item active" data-option-value="*">
    <a class="nav-link text-1 text-uppercase active" href="#">Show All</a>
</li>`;

team_category.map((item, index) => {
  //String manupulation for data filter
  let splitted = item.split(" ");
  let joined_item = splitted.join("-").toLowerCase();
  //====================================================

  category += `<li class="nav-item" data-option-value=".${joined_item}">
    <a class="nav-link text-1 text-uppercase" href="#">${item}</a>
</li>`;
});

nav_category.innerHTML = category;
//==============================================================//

//dynamic team members=============================================
const team_list = document.getElementById("team-list");

let team_members = "";
team_member.map((member, index) => {
  //string manupulation for data filter
  let splitted = member.category.split(" ");
  let joined_item = splitted.join("-").toLowerCase();
  //======================================================
  team_members += `<div class="col-12 col-sm-6 col-lg-3 team_member isotope-item ${joined_item}">
    <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
        <span class="thumb-info-wrapper">
            <a href="about-me.html">
                <img id="team-img" src="${
                  member.photo
                }" class="img-fluid" alt="" />
                <span class="thumb-info-title">
                    <span class="thumb-info-inner">${member.name}</span>
                    <span class="thumb-info-type">${member.skill}</span>
                </span>
            </a>
        </span>
        <span class="thumb-info-caption">
            <span class="thumb-info-caption-text">${member.desc}</span>
            <span id="social-icon-box" class="thumb-info-social-icons mb-4">


                ${
                  `facebook` in member.social
                    ? `<a target="_blank" href="${member.social.facebook}"><i
                        class="fab fa-facebook-f"></i><span>Facebook</span></a>`
                    : ""
                }
                ${
                  `linkedin` in member.social
                    ? `<a href="${member.social.linkedin}">
                    <i class="fab fa-linkedin-in"></i>
                    <span>Linkedin</span>
                </a>`
                    : ""
                }
                ${
                  `twitter` in member.social
                    ? `<a href="${member.social.twitter}">
                    <i class="fab fa-twitter"></i>
                    <span>Twitter</span>
                </a>`
                    : ""
                }


            </span>
        </span>
    </span>
</div>`;
});

team_list.innerHTML = team_members;
