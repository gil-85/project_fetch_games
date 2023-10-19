  <!-- Header -->
  <?php
    $mainCss = '../Asset/css/main.css';
    $listCss = '../Asset/css/list.css';

    $mainJs = '../Asset/js/main.js';
    $listJs = '../Asset/js/list.js';

    $title = 'LIST';

    include_once('Templates/header.php')
  ?>
  <div id="loading">LOADING</div>
  <div class="content-primary" id="content">
    <h2></h2>
  </div>
  <div class="a-btn above-footer">
    <button id="btn-load_more">Load more games</button>
  </div>
  <!-- footer -->
  <?php
    include_once('Templates/footer.php')
  ?>
</body>
</html>
