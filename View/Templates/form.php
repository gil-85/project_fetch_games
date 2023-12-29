<?php
$lognameValue = '';
$avatarValue = '( -_- )';

if (isset($_SESSION['email'])) {
   $lognameValue = $_SESSION['logname'];
   $avatarValue = $_SESSION['avatar'];
   $avatarValue = preg_replace('/\d.*$/', '', $avatarValue);

}
?>

<input type="text" placeholder="LOG NAME" value="user_4" autocomplete="logname" maxlength="16" name="logname" value="<?= $lognameValue ?>" required>
<button type="button" id="avatar">AVATAR<span class="avatarSet"><?=$avatarValue?></span></button>
