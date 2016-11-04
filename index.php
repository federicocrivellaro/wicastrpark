
<html>

<head>
  <meta charset="UTF-8">
  <title>WiList</title>
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">


  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" href="assets/libraries/jquery/jquery-ui.min.css" media="screen" />
  <link rel="stylesheet" type="text/css" href="assets/libraries/roundSlider-1.3/roundslider.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
  <div class="pages">
    <div class="page active">
        <h1 class="title">
          Welcome to Crivellaro Park<br/><br/>
          Current Rule in the Park is:<br/>  
          DOGS CAN BE OFF LEADS
        </h1>

        <p>How do you feel about dogs?  Are you fine with them..</p>
        <form action="/post.php" method="post">
          <select value="1">
            <option value="1">running free</option>
            <option value="2">On leads</option>
            <option value="3">Big ones on leads</option>
            <option value="4">Prefer no dogs</option>
          </select>
          <button type="submit">SUBMIT</button>
        </form>
      <div class="counter"></div>
      <div id="barchart"></div>
    </div>
    <div class="page">
        <h1 class="title">
          Here is your park vote and ticket:<br/>
          
        </h1>
        
    </div>
  </div>  



  <!--
    <div class="feedback"></div>
    <div class="list"></div>-->

  <!-- build:js js/js.min.js-versioname- -->
  <script type="text/javascript" src="assets/libraries/jquery/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="assets/libraries/jquery/jquery-ui.min.js"></script>
  <script type="text/javascript" src="assets/libraries/d3/d3.min.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script type="text/javascript" src="js/dataCheckConversion.js"></script>
  <script type="text/javascript" src="js/form.js"></script>
  <script type="text/javascript" src="js/init.js"></script>

    <!-- /build -->

</body>


</html>
