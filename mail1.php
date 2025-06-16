<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: https://javatechrunner.online/index.html", true, 303);
    exit;
}

// Sanitize input
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    header("Location: https://javatechrunner.online/index.html?status=error&message=All fields are required", true, 303);
    exit;
}

// Prepare email
$recipient = "mail2activeshail@gmail.com";
$mailheader = "From: $name <$email>\r\n";
$mailheader .= "Reply-To: $email\r\n";
$mailheader .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_body = "Hi There,\n\n";
$email_body .= "You have a new enquiry from e-actuell.com\n\n";
$email_body .= "Client Name: $name\n";
$email_body .= "Client Email: $email\n";
$email_body .= "Subject: $subject\n";
$email_body .= "Message: $message\n";

// Send email
if (mail($recipient, $subject, $email_body, $mailheader)) {
    header("Location: https://javatechrunner.online/index.html?status=success&message=Thank you for contacting us. We will get back to you soon", true, 303);
} else {
    header("Location: https://javatechrunner.online/index.html?status=error&message=Failed to send message. Please try again later", true, 303);
}
exit;
