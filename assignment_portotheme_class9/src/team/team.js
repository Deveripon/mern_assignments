const nav_category = document.getElementById("team_catergory");
let category = `<li class="nav-item active" data-option-value="*">
    <a class="nav-link text-1 text-uppercase active" href="#">Show All</a>
</li>`;

team_category.map((item, index) => {
	let splitted = item.split(" ");
	let joined_item = splitted.join("-").toLowerCase();

	category += `<li class="nav-item" data-option-value=".${joined_item}">
							<a class="nav-link text-1 text-uppercase" href="#">${item}</a>
						</li>`;
});

nav_category.innerHTML = category;
