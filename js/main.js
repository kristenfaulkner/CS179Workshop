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
				{reminderID: 2, firstName: "Xinchi",   lastName: "Dai",      frequency: "month",communicationType: ["text, photo, music"],   active: 1},
				{reminderID: 3, firstName: "Joan",     lastName: "Zhang",    frequency: "week", communicationType: ["photo, music, video"],  active: 1},
				{reminderID: 4, firstName: "Krzysztof",lastName: "Gajos",    frequency: "week", communicationType: ["text, photo, video"],   active: 1},
				{reminderID: 5, firstName: "Ofra",     lastName: "Amir",     frequency: "month",communicationType: ["photo, music, video"],  active: 1},
				{reminderID: 6, firstName: "Rakesh",   lastName: "Khurana",  frequency: "week", communicationType: ["text, music, article"], active: 1}
			];
			localStorage.setItem('reminderList', JSON.stringify(reminderList));

		//  If local storage is not working, alert user
		} else {
			alert("Sorry, this app will not work because you do not have local storage!");
		}
}

function loadContacts() {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	$('#kinList').innerHTML = "";
	for (i = 0; i < contacts.length; i++) {
		$('#kinList').append('<li><a href="dataPage.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + contacts[i].firstName + " " + contacts[i].lastName + '</a></li>');
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

function saveInfo() {
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

function displaySavedContact() {
	//alert("working!");
	var contacts = JSON.parse(localStorage.reminderList);
	var newContact = contacts[contacts.length - 1];
	$("#contactInfo").append('<p><strong>First Name:</strong> ' + newContact.firstName + '</p>');
	$("#contactInfo").append('<p><strong>Last Name:</strong>  ' + newContact.lastName + '</p>');
	$("#contactInfo").append('<p><strong>Phone Number:</strong>  ' + newContact.phoneNumber + '</p>');
	$("#contactInfo").append('<p><strong>Frequency:</strong>  ' + newContact.frequency + '</p>');
	$("#contactInfo").append('<p><strong>Type:</strong>  ' + newContact.communicationType + '</p>');
}

$(document).ready(function(){
		setVariables();
});

$(document).on('pageshow', '#myKin' ,function(){
		loadContacts();
});

$(document).on('pageshow', '#savedReminder' ,function(){
		displaySavedContact();
});

$(document).on('pageshow', '#addContact' ,function(){
	$("#saveReminderButton").click(function() {
		saveInfo();
	});
});
