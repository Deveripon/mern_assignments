//lets get the search data from the user
const search_promt = prompt(
	`Type how you want to search for a Blood Donor. Query types are (Blood Group , Mobile Number , Name , Location) Available`
);
//===================//lets filter the search query//=============================
//=======================================================================================
let search;
let search_type;
if (search_promt.toLowerCase() === "blood group") {
	search_type = "blood group";
	search = prompt(
		`Type What blood group donor you want to search.(ex: o+ve,a+ve,)`
	);
} else if (search_promt.toLowerCase() === "mobile number") {
	search_type = "mobile number";
	search = prompt(`Type mobile number of donor`);
} else if (search_promt.toLowerCase() === "name") {
	search_type = "name";
	search = prompt(`Type the name of donor`);
} else if (search_promt.toLowerCase() === "location") {
	search_type = "location";
	search = prompt(`Type the location where you want a donor`);
} else {
	alert("invalid search type");
}
//lets make lower case of search words
const lower_search = search.toLowerCase();

//===================lets find the donor is availabe or not=============================
//=======================================================================================

let date_difference;
let remaining_days;
blood_donor.map((donor) => {
	const start_date = new Date(donor.last_donate_date);
	const current_date = new Date();
	const time_difference = current_date.getTime() - start_date.getTime();
	date_difference = Math.floor(time_difference / (1000 * 3600 * 24));
	if (date_difference >= 120) {
		donor.is_available = true;
		donor.massage = `Yes ! Available`;
	} else if (date_difference >= 90) {
		donor.is_available = false;
		donor.massage = `Upcoming Donor. will be available after ${
			120 - date_difference
		} days`;
		donor.days_remaining = 120 - date_difference;
	} else {
		donor.is_available = false;
		donor.massage = `Not Available. will be available after ${
			120 - date_difference
		} days`;
		donor.days_remaining = 120 - date_difference;
	}
});

//lets show donor list based on users search
let availabe_donors = [];
let upcoming_blood_donors = [];

//lets filter the blood donor by blood group=======================================
let filter_blood_group;
if (search_type == "blood group") {
	filter_blood_group = blood_donor.filter(
		(donor) => donor.blood_group.toLowerCase() === lower_search
	);
}
//
/**
 * filtered data maping for blood group
 */

filter_blood_group.map((donor) => {
	if (donor.blood_group.toLowerCase() !== lower_search) {
		console.log(`No one available of this ${search} blood group`);
	} else {
		if (donor.is_available == true) {
			availabe_donors.push(donor);
		} else if (donor.days_remaining <= 30) {
			upcoming_blood_donors.push(donor);
		}
	}
});

//=====================================================================================

//lets filter the name
let filter_name;
if (search_type == "name") {
	filter_name = blood_donor.filter(
		(donor) => donor.name.toLowerCase() === lower_search
	);
}

//lets filter the location
let filter_location;
if (search_type == "location") {
	filter_location = blood_donor.filter(
		(donor) => donor.location.toLowerCase() === search.toLowerCase()
	);
}

//================================================================

//===========Lets find the donate history based on name and show data =========
let donate_history;

if (filter_name !== search) {
	console.log(`No data found for ${search}`);
} else {
	filter_name.map((donor) => {
		if (donor.donations.length > 0) {
			donate_history = donor.donations.map((history) => {
				return history;
			});
		}
	});
	console.log(`= Data of ${search} =`);
	console.table(filter_name);
	console.log(`= Donation histoty of ${search} =`);
	console.table(donate_history);
}

//=======================================================

//==================================================================================
//=================Filterd data mapping for location

//==================================================================================//
/**
 * Mapping to show all data.
 * @type {Object}
 * @variable all_donors
 */

let all_donors = [];
blood_donor.map((donor) => {
	all_donors.push(donor);
});

//======================================Show Data to Console=================================
//===========================================================================================

if (availabe_donors.length > 0) {
	console.log(`= Availabe Blood Donors of ${search} =`);
	console.table(availabe_donors);
} else {
	console.log(`= No Availabe Blood Donors of ${search} =`);
}
if (upcoming_blood_donors.length > 0) {
	console.log(`= Upcoming Blood Donors of ${search} =`);
	console.table(upcoming_blood_donors);
} else {
	console.log(`= No Upcoming Blood Donors of ${search} =`);
}
if (upcoming_blood_donors.length === 0 && availabe_donors.length === 0) {
	console.log(`= No Available or Upcoming Blood Donors of ${search} =`);
	console.log(`= All Blood Donors =`);
	console.table(all_donors);
}
//===================================================================================================
//====================================================================================================
