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
			if (!localStorage.contacts) {
				var contactList = ["Kristen Faulkner", "Amelia Miller","Xinchi Dai",
												"Joan Zhang", "Krzysztof Gajos", "Ofra Amir","Rakesh Khurana"];
				localStorage.setItem('stickyData', contactList);
			}

		//  If local storage is not working, alert user
		} else {
			alert("Sorry, this app will not work because you do not have local storage!");
		}
}
function loadContacts() {
	var contacts = localStorage.getItem('contacts').split(",");
	for (i = 0; i < contacts.length; i++) {
		$('#kinList').append('<li><a href="dataPage.html">' + contacts[i] + '</a></li>');
	}
}

$(document).ready(function(){
	setVariables();
	loadContacts();
});
