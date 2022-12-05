<?php
if (is_ajax()) {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  $email_to = "test@test.com";
  $subject = "Message from Lorena theme";

  $body = "Name: ".$name."\n";
  $body .= "Email: ".$email."\n";
  $body .= "Company: ".$company."\n";
  $body .= "Message ".$message."\n";

  $success = mail($email_to, $subject, $body, "From: ".$email);

  if($success) {
    $sent = "success";
  } else {
    $sent = "error";
  }
  return json_encode($sent);
}

function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
