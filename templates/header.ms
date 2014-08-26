<!-- 
<div class="container-fluid">
  <section>
    <a href="#" class="pull-left">
      <img src="assets/img/ts_logo_230x53.png" alt="Telecom Slovenia">
    </a>
  </section>
</div>
 -->
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="#" style="padding-top: 4px;">
        <!-- Telemedicina -->
        <img src="assets/img/ts_logo_230x53.png" height="40" alt="Telecom Slovenia">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        
        <li class="active">
          <a href="#">Domov</a>
        </li>
        <li>
          <a href="#">Novice</a>
        </li>
        <li>
          <a href="#">Bolezni</a>
        </li>
        <li>
          <a href="#">Video</a>
        </li>
        <li>
          <a href="#">Ustanove</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>

        <!-- for registered users only -->
        {{#authorised}}
          <li>
          <a href="#">Vprašaj</a>
        </li>
        <li>
          <a href="#">Naročanje</a>
        </li>
        {{/authorised}}

        </ul>
        <!--  -->

      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Iskaj">
        </div>
        <button type="submit" class="btn btn-default">
          <span class="glyphicon glyphicon-search">
        </button>
      </form>
      
      <ul class="nav navbar-nav navbar-right">
        {{^authorised}}
        <li><a href="#">Prijava</a></li>
        {{/authorised}}
        {{#authorised}}
        <li>
          <img src="assets/img/avatar3_50.jpg" width="80%" class="avatar-rounded" style="margin-top: 5px;" alt="">
        </li>
        <li><a href="#">Odjava</a></li>
        {{/authorised}}
      </ul>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>