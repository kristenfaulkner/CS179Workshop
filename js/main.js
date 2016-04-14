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
				{reminderID: 0, firstName: "Kristen",  lastName: "Faulkner", frequency: "day",   type: ["text, photo, article"], active: 1},
				{reminderID: 1, firstName: "Amelia",   lastName: "Miller",   frequency: "day",   type: ["text, video, article"], active: 1},
				{reminderID: 2, firstName: "Xinchi",   lastName: "Dai",      frequency: "month", type: ["text, photo, music"],   active: 1},
				{reminderID: 3, firstName: "Joan",     lastName: "Zhang",    frequency: "week",  type: ["photo, music, video"],  active: 1},
				{reminderID: 4, firstName: "Krzysztof",lastName: "Gajos",    frequency: "week",  type: ["text, photo, video"],   active: 1},
				{reminderID: 5, firstName: "Ofra",     lastName: "Amir",     frequency: "month", type: ["photo, music, video"],  active: 1},
				{reminderID: 6, firstName: "Rakesh",   lastName: "Khurana",  frequency: "week",  type: ["text, music, article"], active: 1}
			];
			localStorage.setItem('reminderList', JSON.stringify(reminderList));

		//  If local storage is not working, alert user
		} else {
			alert("Sorry, this app will not work because you do not have local storage!");
		}
}

function loadContacts() {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	//$('#kinList').innerHTML = "";
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
	alert("insidefunction!");
	var newReminder = {
		reminderID: contacts.length,
		firstName: $("#fName").val(),
		lastName: $("#lname").val(),
		phoneNumber: $("#phoneNum").val(),
		frequency: $("#newReminderFrequency :radio:checked").val(),
		type: $('input[type=checkbox]:checked').map(function(_, el) {
    				return $(el).val();
					}).get(),
		active: 1
	};
	contacts.push(newReminder);
	localStorage.setItem('reminderList', JSON.stringify(contacts));
}

$(document).ready(function(){
		setVariables();
});

$(document).on('pageshow', '#myKin' ,function(){
		loadContacts();
});

$(document).on('pageshow', '#addContact' ,function(){
	$("#saveReminderButton").click(function() {
		alert("hello!");
		saveInfo();
	});
});
