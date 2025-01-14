<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "vicerhatech@gmail.com"; // Replace with your email address
    $subject = "New Form Submission From Portfolio";
    
    // Collecting and sanitizing input data
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subjectInput = htmlspecialchars(strip_tags(trim($_POST['subject'])));
    $messageInput = htmlspecialchars(strip_tags(trim($_POST['message'])));
    
    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Construct the email message
    $message = "Name: $name\nEmail: $email\nSubject: $subjectInput\n\nMessage:\n$messageInput";
    $headers = "From: $email\r\nReply-To: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
