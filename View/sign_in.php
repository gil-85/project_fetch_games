  <!-- Header -->
  <?php

    $mainCss = '../Asset/css/main.css';
    $connexionCss = '../Asset/css/connexion.css';

    $mainJs = '../Asset/js/main.js';
    $cryptoJS = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
    $connexionJs = '../Asset/js/connexion.js';

    $title = 'SIGN IN';

    include_once('Templates/header.php')
  ?>
  <div class="content-primary" id="content">
    <h2>Sign in</h2>
    <form action="../index.php" id="display_column">
      <input type="email" placeholder="EMAIL" autocomplete="email" required>
      <input type="password" placeholder="PASSWORD" autocomplete="" required>
      <input type="password" placeholder="CONFIRM PASSWORD"  autocomplete="" required>
        <input type="submit" value="ENTER">
    </form>
    <div class="a-btn above-footer">
      <p>Already an account : <a href="log_in.php">Log in</a>
      </p>
    </div>
    <p id="p-error_message"></p> 
  </div>
  <!-- footer -->
  <?php
    include_once('Templates/footer.php')
  ?>
</body>
</html>