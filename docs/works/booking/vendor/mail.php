<?php

$c = true;

$admin_email  = 'kubris@mail.ru';
$email_from   = 'administrator@kubris.site';
$project_name = trim(htmlentities($_POST['project_name']));
$form_subject = trim(htmlentities($_POST['form_subject']));

// $_POST['name'] = trim(htmlentities($_POST['name']));
// $_POST['time'] = trim(htmlentities($_POST['time']));
// $_POST['food'] = trim(htmlentities($_POST['food']));
// $_POST['number_people'] = trim(htmlentities($_POST['number_people']));

foreach ($_POST as $key => $value) {
	if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "email_from") {
		$message .= "
			" . (($c = !$c) ? '<tr>' : 
			'<tr style="background-color: #f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'> <b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
	}
}

$message = "
	<table style='width: 100%;'>$message</table>
	";

// Function to save User data in file
function send_user_data_in_txt_file($message) 	{
	$f = fopen('../vendor/form_fill.html', 'a+');
	fwrite($f, date('Y-m-d H:i:s') . "\n");
	fwrite($f, $message);
	fwrite($f, "\n" . "\n" . "\n" . "\n");
}

function adopt($txt) {
	return '=?UTF-8?B?' . base64_encode($txt) . '?=';
}

$headers = "MIME-Version: 1.0".PHP_EOL.
"Content-Type: text/html; charset=utf-8".PHP_EOL.
'From: '.adopt($project_name).'<'.$email_from.'>'.PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

send_user_data_in_txt_file($message);

echo '
	<h2>Заявка принята!</h2>
	<p>Мы ожидаем только Ваш подтверждающий&nbsp;звонок</p>
	<button onclick="location.reload()">Закрыть</button>
	';
exit;
?>