//data can be search with name or mobile number or blood group
// if data searchd by name: output will be donor details with donation history
// if data searchd by mobile : output will be donor details with donation history
//if  data searchd be blood group : output will show avaiable blood donors and upcoming blood donors
// if searched result not match All blood donors will be show in table

// logic:
//blood donors will be available after 120 days of his last blood donation date
// blood donor status will be upcoming blood donor  when only 30 days or less than 30 days remain from 120 days of his last blood donation date.
// for more precise search query data key and searched input need to be lowercase to match easily
///////////////////////////////////////////////////////////////////////////////////////////////////
//search with key
let search_key = prompt(
	"Enter search key to search available blood donors. default search option is Name, Mobile Number ,Location, Blood Group. Example: (Ripon Miah / 01913509868 / dhaka / o+ve"
);
//make the serach key lowercase to match easily
let search_key_lower = search_key.toLowerCase();

const filterd_donors = blood_donor.filter(
	(donors) =>
		donors.blood_group.toLowerCase() === search_key_lower ||
		donors.cell.toLowerCase() === search_key_lower ||
		donors.name.toLowerCase() === search_key_lower ||
		donors.location.toLowerCase() === search_key_lower
);

//===================lets find the donor is availabe or not=============================
//=======================================================================================

let last_donate_day_duration;
blood_donor.map((donor) => {
	const start_date = new Date(donor.last_donate_date);
	const current_date = new Date();
	const time_difference = current_date.getTime() - start_date.getTime();
	last_donate_day_duration = Math.floor(time_difference / (1000 * 3600 * 24));
	if (last_donate_day_duration >= 120) {
		donor.is_available = true;
		donor.massage = `Yes ! Available`;
	} else if (last_donate_day_duration >= 90) {
		donor.is_available = false;
		donor.massage = `Upcoming Donor. will be available after ${
			120 - last_donate_day_duration
		} days`;
		donor.days_remaining = 120 - last_donate_day_duration;
	} else {
		donor.is_available = false;
		donor.massage = `Not Available. will be available after ${
			120 - last_donate_day_duration
		} days`;
		donor.days_remaining = 120 - last_donate_day_duration;
	}
});
//==============================================================================
// lets show the detailed data of blood donor when it serached by name
//===============================================================================
let donations_history;
let donors_name;
let search_key_type;

const filterd_blood_donors_name = [];

filterd_donors.map((donor) => {
	if (donor.name.toLowerCase() === search_key_lower) {
		filterd_blood_donors_name.push(donor);
		search_key_type = "name";
	}
});

//lets  show the data to console
if (filterd_blood_donors_name.length > 0) {
	console.log("Blood Donor ");
	console.table(filterd_blood_donors_name);

	filterd_blood_donors_name.map((donors) => {
		donations_history = donors.donations;
		donors_name = donors.name;
	});
	console.log(`Donations History of ${donors_name}`);
	console.table(donations_history);
}
//==============================================================================
// lets show the detailed data of blood donor when it serached by name
//==============================================================================

const filterd_blood_donors_cell = [];

filterd_donors.map((donor) => {
	if (donor.cell.toLowerCase() === search_key_lower) {
		filterd_blood_donors_cell.push(donor);
		search_key_type = "cell";
	}
});

//lets  show the data to console
if (filterd_blood_donors_cell.length > 0) {
	console.log("Blood Donor ");
	console.table(filterd_blood_donors_cell);

	filterd_blood_donors_cell.map((donors) => {
		donations_history = donors.donations;
		donors_name = donors.name;
	});
	console.log(`Donations History of ${donors_name}`);
	console.table(donations_history);
}

//=============================================================================
// lsets show the data of blood donors when it will searched by blood group
//=============================================================================

const filterd_blood_donors_group = [];

filterd_donors.map((donor) => {
	if (donor.blood_group.toLowerCase() === search_key_lower) {
		filterd_blood_donors_group.push(donor);
		search_key_type = "blood_group";
	}
});
//lets  show the data to console
let avalable_donors = [];
let upcoming_donors = [];
if (filterd_blood_donors_group.length > 0) {
	filterd_blood_donors_group.map((donors) => {
		if (donors.is_available === true) {
			avalable_donors.push(donors);
		}
		if (donors.days_remaining > 0 && donors.days_remaining <= 30) {
			upcoming_donors.push(donors);
		}
	});
	if (avalable_donors.length > 0) {
		console.log(`==== Available blood donors ====`);
		console.table(avalable_donors);
	} else {
		console.log("No available blood donor");
	}

	if (upcoming_donors.length > 0) {
		console.log(`==== Upcoming blood donors ====`);
		console.table(upcoming_donors);
	} else {
		console.log("No Upcoming blood donor");
	}
}

//=============================================================================
// lsets show the data of blood donors when it will searched by Location
//=============================================================================

const filterd_blood_donors_location = [];

filterd_donors.map((donor) => {
	if (donor.location.toLowerCase() === search_key_lower) {
		filterd_blood_donors_location.push(donor);
		search_key_type = "location";
	}
});

//lets  show the data to console

if (filterd_blood_donors_location.length > 0) {
	filterd_blood_donors_location.map((donors) => {
		if (donors.is_available === true) {
			avalable_donors.push(donors);
		}
		if (donors.days_remaining > 0 && donors.days_remaining <= 30) {
			upcoming_donors.push(donors);
		}
	});
	if (avalable_donors.length > 0) {
		console.log(`==== Available blood donors ====`);
		console.table(avalable_donors);
	} else {
		console.log("No available blood donor");
	}

	if (upcoming_donors.length > 0) {
		console.log(`==== Upcoming blood donors ====`);
		console.table(upcoming_donors);
	} else {
		console.log("No Upcoming blood donor");
	}
}
//====================================lests show all blood donor==========================================

if (search_key_type === "name" || search_key_type === "cell") {
} else {
	let all_donors = [];
	blood_donor.map((donor) => {
		all_donors.push(donor);
	});
	if (avalable_donors.length == 0 && upcoming_donors.length == 0) {
		console.log(
			"You have entered a wrong keyword. Please Search with Name /cell / location / blood group"
		);
		console.log("=== All blood donor ===");
		console.table(all_donors);
	}
}
