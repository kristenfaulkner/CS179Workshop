 // ( function( $ ) {
// $( document ).ready(function() {
// $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
// 	$('#cssmenu #menu-button').on('click', function(){
// 		var menu = $(this).next('ul');
// 		if (menu.hasClass('open')) {
// 			menu.removeClass('open');
// 		}
// 		else {
// 			menu.addClass('open');
// 		}
// 	});
// });
// } )( jQuery );
function setVariables() {
		if (localStorage) {

			// If so, set local variables
			var reminderList = [
				{reminderID: 0, firstName: "Kristen",  lastName: "Faulkner", frequency: "day",  communicationType: ["text, photo, article"], active: 1},
				{reminderID: 1, firstName: "Amelia",   lastName: "Miller",   frequency: "day",  communicationType: ["text, video, article"], active: 1},
				{reminderID: 2, firstName: "Xingchi",   lastName: "Dai",      frequency: "month",communicationType: ["text, photo, music"],   active: 1},
				{reminderID: 3, firstName: "Joan",     lastName: "Zhang",    frequency: "week", communicationType: ["photo, music, video"],  active: 1},
				{reminderID: 4, firstName: "Krzysztof",lastName: "Gajos",    frequency: "week", communicationType: ["text, photo, video"],   active: 1},
				{reminderID: 5, firstName: "Ofra",     lastName: "Amir",     frequency: "month",communicationType: ["photo, music, video"],  active: 1},
				{reminderID: 6, firstName: "Rakesh",   lastName: "Khurana",  frequency: "week", communicationType: ["text, music, article"], active: 1}
			];
			localStorage.setItem('reminderList', JSON.stringify(reminderList));

			// Here is the variable for activity page
			var activity = [
				{contents: "You sent a video request to Kristen"},
				{contents: "You received a picture request from Joan"},
				{contents: "You sent a picture request to Ofra"},
				{contents: "You received a text from Ofra"}
			];
			localStorage.setItem('activityList',JSON.stringify(activity));


		//  If local storage is not working, alert user
		} else {
			alert("Sorry, this app will not work because you do not have local storage!");
		}
}

function loadKinContacts() {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	$('#kinList').html("");
	for (i = 0; i < contacts.length; i++) {
		$('#kinList').append('<li><a href="dataPage.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + contacts[i].firstName + " " + contacts[i].lastName + '</a></li>');
	}
}

function loadRequestContacts() {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	$('#requestList').innerHTML = "";
	for (i = 0; i < contacts.length; i++) {
	$('#requestList').append('<li><a href="mediaType.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + contacts[i].firstName + " " + contacts[i].lastName + '</a></li>');
	}
}

function clearValue() {
	$(".textInput").val("");
}

function addReminder(newReminder) {
	var contacts = localStorage.getItem('reminderList');
	newReminder.reminderID = contacts.length;
	contacts = contacts.push(newReminder);
	localStorage.reminderList = contacts;
}

function saveNewContact() {
	var contacts = JSON.parse(localStorage.reminderList);
	var newReminder = {
		reminderID: contacts.length,
		firstName: $("#fname").val(),
		lastName: $("#lname").val(),
		phoneNumber: $("#phoneNum").val(),
		frequency: $("#newReminderFrequency :radio:checked").val(),
		communicationType: $('input[type=checkbox]:checked').map(function(_, el) {
    				return $(el).val();
					}).get(),
		active: 1
	};
	contacts.push(newReminder);
	localStorage.setItem('reminderList', JSON.stringify(contacts));
}


function saveGroupContact() {
	var contacts = JSON.parse(localStorage.reminderList);
		console.log("I made it here");
	var newReminder = {
		reminderID: contacts.length,
		firstName: $("#groupname").val(),
		lastName: "",
		phoneNumber: "N/A",
		frequency: $("#newReminderFrequency :radio:checked").val(),
		communicationType: $('input[type=checkbox]:checked').map(function(_, el) {
    				return $(el).val();
					}).get(),
		active: 1
	};
	contacts.push(newReminder);
	localStorage.setItem('reminderList', JSON.stringify(contacts));
}

function saveSyncedContact() {
	var contacts = JSON.parse(localStorage.reminderList);
	var newReminder = {
		reminderID: contacts.length,
		firstName: $("#selectSyncContact :radio:checked").val().split(" ")[0],
		lastName: $("#selectSyncContact :radio:checked").val().split(" ")[1],
		phoneNumber: "N/A",
		frequency: $("#syncedContactFrequency :radio:checked").val(),
		communicationType: $('input[type=checkbox]:checked').map(function(_, el) {
    				return $(el).val();
					}).get(),
		active: 1
	};
	contacts.push(newReminder);
	localStorage.setItem('reminderList', JSON.stringify(contacts));
}

function displaySavedContact() {
	var contacts = JSON.parse(localStorage.reminderList);
	var newContact = contacts[contacts.length - 1];
	$("#contactInfo").append('<p><strong>First Name:</strong> ' + newContact.firstName + '</p>');
	$("#contactInfo").append('<p><strong>Last Name:</strong>  ' + newContact.lastName + '</p>');
	$("#contactInfo").append('<p><strong>Phone Number:</strong>  ' + newContact.phoneNumber + '</p>');
	$("#contactInfo").append('<p><strong>Frequency:</strong>  ' + newContact.frequency + '</p>');
	$("#contactInfo").append('<p><strong>Type:</strong>  ' + newContact.communicationType + '</p>');
}

// This is the function to load the activity list
function loadActivityList(){
	var contents = JSON.parse(localStorage.getItem('activityList'));
	$('#activityList').html("");
	for (i = 0; i < contents.length; i++) {
	$('#activityList').append('<li><a href="" class="ui-btn">'+contents[i].contents+'</a></li>');
	}
}

function addActivity(){
	//push the content into the localStorage
	var contents = JSON.parse(localStorage.activityList);
	var newActivity = [{
		contents : "[new] You sent a text to Mom"}];
	for (i=0; i<contents.length;i++){
		newActivity.push(contents[i]);
	}

	localStorage.setItem('activityList', JSON.stringify(newActivity));

}



$(document).ready(function(){
		setVariables();
});

$(document).on('pageshow', '#myKin' ,function(){
		loadKinContacts();
});
$(document).on('pageshow', '#sendRequest' ,function(){
		loadRequestContacts();
});

$(document).on('pageshow', '#savedReminder' ,function(){
		displaySavedContact();
});

$(document).on('pageshow', '#addContact' ,function(){
	$("#saveReminderButton").click(function() {
		saveNewContact();
	});
});

$(document).on('pageshow', '#addGroupContact' ,function(){
	$("#saveReminderButton").click(function() {
		saveGroupContact();
	});
});

$(document).on('pageshow', '#groupPrefs' ,function(){
	$("#savegroupButton").click(function() {
		alert("hi");
		saveGroupContact();
	});
});

$(document).on('pageshow', '#syncContact' ,function(){
	$("#syncContactButton").click(function() {
		saveSyncedContact();
	});
});

$(document).on('pageshow', '#activity' ,function(){
	loadActivityList();
});
