<?php session_start(); ?>
<!-- Header -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php
  $cssFiles = [
      isset($indexMainCss) ? $indexMainCss : null,
      isset($mainCss) ? $mainCss : null,

      isset($listCss) ? $listCss : null,
      isset($detailCss) ? $detailCss : null,
      isset($connexionCss) ? $connexionCss : null,
      isset($researchCss) ? $researchCss : null
   ];

  $jsFiles = [
      isset($cryptoJS) ? $cryptoJS: null,
     
      isset($indexMainJs) ? $indexMainJs: null,
      isset($mainJs) ? $mainJs: null,

      isset($indexJs) ? $indexJs : null,
      isset($listJs) ? $listJs : null,
      isset($detailJs) ? $detailJs : null,
      isset($signInJs) ? $signInJs : null,
      isset($researchJs) ? $researchJs : null
  ];

  foreach ($cssFiles as $cssFile) {
    if ($cssFile) {
      echo '<link rel="stylesheet" href="' . $cssFile . '">
      <!-- Line break -->';
    }
  }

  foreach ($jsFiles as $jsFile) {
    if ($jsFile) {
      echo '<script src="' . $jsFile . '" defer></script>
      <!-- Line break -->';
    }
  }
  ?>

<title><?=$title?></title>
</head>
<body>
  <header>
    <h1>Project Games api</h1>
    <?php
      if (isset($_SESSION['logname'])) {
        echo '_logname: ' . $_SESSION['logname'];
        echo '<br> _email: ' . $_SESSION['email'];
        echo '<br> _password: ' . $_SESSION['password'];
        echo ' _avatar: ' . $_SESSION['avatar'];
      } else {
        echo 'logname is not set';
      }
    ?>
  </header>