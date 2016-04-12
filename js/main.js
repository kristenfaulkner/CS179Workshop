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
		if(localStorage){

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

function setLocalID(id) {
	localStorage.set('reminderID', id);
}
function loadContacts() {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	for (i = 0; i < contacts.length; i++) {
		$('#kinList').append('<li><a href="dataPage.html?reminderID=' +
			contacts[i].reminderID +
			'" + 'onclick=setstorageId(' + contacts[i].reminderID' + 'class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-reminderID=' +
			contacts[i].reminderID + '>' + contacts[i].firstName + " " + contacts[i].lastName + '</a></li>');
	}
}

function clearValue() {
	$(".textInput").val("");
}

function addReminder(newReminder) {
	var contacts = JSON.parse(localStorage.getItem('reminderList'));
	newReminder.reminderID = contacts.length;
	contacts = contacts.append (newReminder);
	localStorage.reminderList = contacts;
}

function alertHello() {
	alert("hello!");
}
$(document).ready(function(){
	setVariables();
	loadContacts();
});
