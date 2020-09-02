<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
	  <title>Passwort</title
       <meta http-equiv="content-type" content="text/html;">
  </head>
	     <body>
		       <form action=''method='POST'>
            Benutzer: <input type="text"  name="user" autocomplete="off" required><br><br>
            Passwort: <input type="password"  name="pass" autocomplete="off" required><br><br>
            <input type="submit" name="login" value="login">
          </form>
          <?php
            if (isset($_POST['login']))
            {
              $user = $_POST['user'];
              $pass = hash('sha265',$_POST['pass']);

              echo "
              <br><hr><br>
              $user<br>
              $pass
              ";
            }
           ?>


	     </body>
</html>
