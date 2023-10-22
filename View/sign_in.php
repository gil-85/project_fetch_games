  <!-- Header -->
  <?php
    require_once("../Controller/dbh.php");

    
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
      <input type="text" placeholder="LOG NAME" autocomplete="username" maxlength="16" required>
      <input type="password" placeholder="PASSWORD" required>
      <input type="password" placeholder="CONFIRM PASSWORD" required>
      <button type="button" id="avatars">AVATAR<span class="avatarSet">( -_- )</span></button>

      
      <input type="submit" value="ENTER">
    </form>
    <div class="a-btn above-footer">
      <p>Already an account : <a href="log_in.php">Log in</a>
      </p>
    </div>
    <p id="p-error_message"></p> 
  </div>

      <!-- ////     AVATARS    //// -->
      <div class="ghost" id="e_avatars_e">
      
      <div class="d-grid_1" id="d-avatar_selected">
        <div id="d-element_avatar">
        
          <span>(</span><span>-</span><span>_</span><span>-</span><span>)</span>
           
          
         
        </div>
      </div>
      
      <div class="d-grid_2" id="d-avatars_list">
      <div class="d-grid_2_input-hand">

        <div class="d-d-input_avatar">

          <div class="d-input_avatar">
            <button>&lt;</button>
            <p>( &emsp;)</p>
            <button>&gt;</button>
          </div>
          <div class="d-input_avatar">
            <button>&lt;</button>
            <p>- &nbsp;-</p>
            <button>&gt;</button>
          </div>
          <div class="d-input_avatar">
            <button>&lt;</button>
            <p>_</p>
            <button>&gt;</button>
          </div>
          <div class="d-input_avatar">
            <button>&lt;</button>
            <p>Bkg-clr</p>
            <button>&gt;</button>
          </div>

        </div>



      </div>
      
      <div class="d-grid_3">
        <div class="a-btn">
          <button id="e_avatars">[ O ]</button>
        </div>
      </div>
      
    </div>


  <!-- footer -->
  <?php
    include_once('Templates/footer.php')
  ?>
</body>
</html>