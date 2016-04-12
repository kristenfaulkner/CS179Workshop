<!DOCTYPE html>
<html>
<head>
	<title>Create New Reminder</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
	<h1 style="text-align: center;">Your reminder has been saved!</h1>
	<br>
	<p>Name: <?php echo $_POST["firstName"]; $_POST["lastName"]; ?><br></p>
	<p>Phone Number: <?php echo $_POST["phoneNumber"]; ?></p><br>
	<p> Frequency: <?php echo $_POST["radio-choice-day"]; echo $_POST["radio-choice-week"]; echo $_POST["radio-choice-month"]; ?></p>p>
  <p> Type: <?php echo implode(',',$_POST['type']); ?></p>
	<br>
	 <div data-role="navbar" data-iconpos="top">
			<ul>
				<li><a href="myKin.html" class="ui-btn" data-icon="user">My Reminders</a></li>
				<li><a href="newReminderView1.html" class="ui-btn" data-icon="plus">Add Reminders</a></li>
				<li><a href="sendRequest.html" class="ui-btn" data-icon="forward">Send Request</a></li>
				<li><a href="activity.html" class="ui-btn" data-icon="grid">Activity</a></li>
			</ul>
		</div>
</body>
</html>
