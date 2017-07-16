<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//validate

if(empty($name)||empty($visitor_email))
{
    echo "name and email fields are mandatory";
    exit;
}

$email_from = 'lluismather@hotmail.co.uk';
$email_subject = 'new form submission';
$email_body = 'you have received a new message from the user $name'.
    'email address: $visitor_email\n'.
    'message: \n $message'.

$to = 'lluismather@hotmail.co.uk';
$headers = 'from: $email_from \r\n';

mail($to,$email_subject,$email_body,$headers);
header('Location: contactSubmitted.html');

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

?>