<?php

if($_POST["submit"]) {
    $recipient="glenns@usf.edu";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["glenns@usf.edu"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>

<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Contact form to email</title>
</head>

<body>

    <?=$thankYou ?>

    <!-- Got this code at:   https://htmldog.com/techniques/formtoemail/
Got this code at: I substituted FormToPhpToEmail.php for 
contact.php in two places as the name of the file 
, FormToPhpToEmail.php instead of contact.php, and 
in the html portion, action="FormToPhpToEmail.php" intead of
action="contact.php".   -->

    <form method="post" action="https://www.imapbook.com/wp1/FormToPhpToEmail.php">
        <label>Name:</label>
        <input name="sender">

        <label>Email address:</label>
        <input name="senderEmail">

        <label>Message:</label>
        <textarea rows="5" cols="20" name="message"></textarea>

        <input type="submit" name="submit">
    </form>

</body>

</html>