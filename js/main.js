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
			if (!localStorage.reminderList) {
				var reminderList = [
					{name: "Kristen Faulkner"},
					{name: "Amelia Miller"},
					{name: "Xinchi Dai"},
					{name: "Joan Zhang"},
					{name: "Krzysztof Gajos"},
					{name: "Ofra Amir"},
					{name: "Rakesh Khurana"}
				];
				localStorage.setItem('reminderList', reminderList);
			}

		//  If local storage is not working, alert user
		} else {
			alert("Sorry, this app will not work because you do not have local storage!");
		}
}
function loadContacts() {
	var reminderList = localStorage.getItem('reminderList').split(",");
	for (i = 0; i < reminderList.length; i++) {
		console.log(reminderList[i]);
		}
	// console.log(contacts);
	// for (i = 0; i < contacts.length; i++) {
	// 	$('#kinList').append('<li><a href="dataPage.html">' + contacts[i] + '</a></li>');
	// }
}

function clearValue() {
	$(".textInput").val("");
}

$(document).ready(function(){
	setVariables();
	loadContacts();
});
