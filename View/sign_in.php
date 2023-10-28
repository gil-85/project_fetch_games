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
      <input type="password" placeholder="PASSWORD" autocomplete="new-password" required>
      <input type="password" placeholder="CONFIRM PASSWORD" autocomplete="new-password" required>
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
          <div>(</div>
          <div>&nbsp;</div>
          <div>-</div>
          <div>_</div>
          <div>-</div>
          <div>&nbsp;</div>
          <div>)</div>
        </div>
      </div>
      
      <div class="d-grid_2" id="d-avatars_list">
        <div class="d-grid_2_input-hand">

          <div class="d-d-input_avatar">

            <div class="d-input_avatar">
              <button id="prev_side">&lt;</button>
              <span id="side">( )</span>
              <button id="next_side">&gt;</button>
            </div>
            <div class="d-input_avatar">
              <button id="prev_eyes">&lt;</button>
              <span id="eyes">- -</span>
              <button id="next_eyes">&gt;</button>
            </div>
            <div class="d-input_avatar">
              <button id="prev_mouth">&lt;</button>
              <span id="mouth">_</span>
              <button id="next_mouth">&gt;</button>
            </div>
            <div class="d-input_avatar">
              <button id="prev_bkg">&lt;</button>
              <span id="bkg">Bkg-clr</span>
              <button id="next_bkg">&gt;</button>
            </div>

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