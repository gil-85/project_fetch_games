<!-- Header -->
  <?php
    $indexMainCss = 'Asset/css/main.css';
    
    $indexMainJs = 'Asset/js/main.js';
    $indexJs = 'Asset/js/index.js';

    $title = 'HOME';

    include_once('View/Templates/header.php')
  ?>
  <div class="content-primary" id="content"> 
    <h2>Home</h2>
    <nav id="display_column">
      <a href="View/research.php">RESEARCH</a>
      <button id="btn-mode">LIGHT THEME</button> 
      <a href="View/sign_in.php" class="link-connexion">SIGN IN</a>
      <a href="View/log_in.php" class="link-connexion">LOG IN</a>
      <a href="View/list.php" id="link_favories" class="ghost">FAVORIES</a> 
      <button class="ghost" id="btn-disconnect">DISCONNECT
      </button>
    </nav>
  </div>
  <!-- footer -->
  <?php
    include_once('View/Templates/footer.php')
  ?>

</body>
</html>