<!DOCTYPE html>
<html>
<head>
	<title>Page Title</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
<!--- Create Reminder page ------------------------------------------>
<div data-role="page" id="myKin">

	<div data-role="header">
		<!--Header -->
		<h1>Create Reminder</h1>
	</div>

	<div data-role="content">

	<form method="post" action="savedreminder.php" name="reminderInfo">

        <div class="fieldcontain" data-role="controlgroup">
        <legend>How often do you want to communicate?</legend>
        <input type="radio" name="radio-choice-day" id="radio-choice-v-2a" value="Once a day" checked="checked">
        <label for="radio-choice-v-2a">Once a day</label>
        <input type="radio" name="radio-choice-week" id="radio-choice-v-2b" value="Once a week">
        <label for="radio-choice-v-2b">Once a week</label>
        <input type="radio" name="radio-choice-month" id="radio-choice-v-2c" value="Once a month">
        <label for="radio-choice-v-2c">Once a month</label>
    </div>


    <div class="fieldcontain" data-role="controlgroup">
        <legend>What type of communication you want to share?</legend>
        <input type="checkbox" name="type[]" id="checkbox-v-2a" value="Text">
        <label for="checkbox-v-2a">Text</label>
        <input type="checkbox" name="type[]" id="checkbox-v-2b" value="Photo">
        <label for="checkbox-v-2b">Photo</label>
        <input type="checkbox" name="type[]" id="checkbox-v-2c" value="Music">
        <label for="checkbox-v-2c">Music</label>
        <input type="checkbox" name="type[]" id="checkbox-v-2d" value="Video">
        <label for="checkbox-v-2d">Video</label>
        <input type="checkbox" name="type[]" id="checkbox-v-2e" value="Article">
        <label for="checkbox-v-2e">Article</label>
    </div>
		<div class="fieldcontain">
    	<input type="submit" value="Save">
	</div>

</form>
		</div>

		<div data-role="navbar" data-iconpos="top">
			<ul>
				<li><a href="myKin.html" class="ui-btn" data-icon="user">My Reminders</a></li>
				<li><a href="newReminderView1.html" class="ui-btn" data-icon="plus">Add Reminders</a></li>
				<li><a href="sendRequest.html" class="ui-btn" data-icon="forward">Send Request</a></li>
				<li><a href="activity.html" class="ui-btn" data-icon="grid">Activity</a></li>
			</ul>
	</div>
	<!-- /content -->


</div><!-- /Create Reminder page -->

</body>
</html>
