<?php
if(isset($_POST['submit'])) {
    $file = "data.json";
    $json_string = json_encode($_POST, JSON_PRETTY_PRINT);
    file_put_contents($file, $json_string, FILE_APPEND);
    header('Location: thanks.php'); 
}
?>
    <!doctype html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>JSON &amp; PHP: Write data into JSON from form submission</title>
        <link rel="stylesheet" href="_css/styles.css">
    </head>

    <body>
        <h1>JSON &amp; PHP:<br>
    Write data into JSON from form submission</h1>
        <div id="wrapper">
            <h3>If you submit some data in the form below, it will be stored in <a href="data.json">this JSON file</a>. Every submission adds data to the JSON file.</h3>
            <form name="form1" method="post" action="">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Your full name" autofocus required>
                </p>
                <p>
                    <label for="email">Email: </label>
                    <input type="email" name="email" id="email">
                </p>
                <p>
                    <label for="phone">Phone: </label>
                    <input type="tel" name="phone" id="phone">
                </p>
                <p>
                    <label for="dob">Date of birth: </label>
                    <input type="date" name="dob" id="dob">
                </p>
                <p>
                    <label for="coding">Coding (hrs/day): </label>
                    0
                    <input type="range" name="coding" id="coding" min="0" max="24"> 24
                </p>
                <p style="text-align: center;">
                    <input type="submit" name="submit" id="submit" value="Submit">
                </p>
            </form>
        </div>
    </body>

    </html>