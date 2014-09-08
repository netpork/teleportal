<section>
	<div class="container-fluid">
		<div class="pull-left">
			<div class="col-md-4">
				<canvas id="weather" width="64" height="64"></canvas>
			</div>
			<div class="col-md-4" style="color: silver;">
				<h5>Sreda</h5>
				<h5>30.08.2014.</h5>
			</div>
		</div>

		<div class="pull-right" data-target="#stats" data-toggle="collapse" style="margin-right: 15px; cursor: pointer;">
			<span class="glyphicon glyphicon-stats"></span>
			<b class="caret"></b>
		</div>
	</div>
</section>

<section id="stats" class="collapse">
	<div class="container-fluid">
		<div class="stats-bar">
			<div class="stat-container flat">
				<h6>PRIJAVLJENIH</h6>
				<h5><strong>150</strong></h4>
				<span id="stats-registered"></span>
			</div>
			<div class="stat-container flat">
				<h6>REGISTRIRANIH</h6>
				<h5><strong>15.034</strong></h4>
				<span class="stats-up">13.6%</span>
			</div>
			<div class="stat-container flat">
				<h6>REG. ZDRAVNIKOV</h6>
				<h5><strong>43</strong></h4>
				<span class="stats-same">0%</span>
			</div>
		</div>
	</div>
</section>

<section id="domov-carousel">
	<div class="container-fluid" style="background-color: #dcf3f9;">
		
		<div class="col-md-offset-2 col-md-8">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
			<!--   
			  <ol class="carousel-indicators">
			    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
			  </ol>
			 -->
			  <!-- Wrapper for slides -->
			  <div class="carousel-inner">
			    <div class="item active">
			      <img src="assets/img/news_1.jpg" alt="...">
			      <div class="carousel-caption">
					<h3>Celjska bolnišnica pridelala izgubo, toda dosegla nižje cene zdravil z novimi javnimi naročili</h3>
					<p>
						Celjska bolnišnica je v polletju poslovala z 830.000 evrov izgube, prihodki pa so porasli za 0,6 odstotka, na 44,1 milijona evrov.
					</p>
			      	<a class="btn btn-xs btn-primary pull-right" href="#">Več</a>
			      </div>
			    </div>

			    <div class="item">
			      <img src="assets/img/news_2.jpg" alt="...">
			      <div class="carousel-caption">
			        <h3>Dojenje znižuje tveganje za poporodno depresijo</h3>
			        <p>Obsežna raziskava, v kateri je sodelovalo 14.000 mater, je pokazala, da lahko dojenje za polovico zmanjša tveganje za poporodno depresijo.</p>
			      	<a class="btn btn-xs btn-primary pull-right" href="#">Več</a>
			      </div>
			    </div>
			  
			    <div class="item">
			      <img src="assets/img/news_3.jpg" alt="...">
			      <div class="carousel-caption">
			        <h3>Jeseni končno e-recepti pri vseh zdravnikih na primarni ravni in v vseh lekarnah</h3>
			        <p>
						Na ministrstvu za zdravje načrtujejo, da bodo na začetku jeseni v projekt eRecept vključili vse lekarne.
			        </p>
			      	<a class="btn btn-xs btn-primary pull-right" href="#">Več</a>
			      </div>
			    </div>

			  </div>

			  <!-- Controls -->
			  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
			    <span class="glyphicon glyphicon-chevron-left"></span>
			  </a>
			  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
			    <span class="glyphicon glyphicon-chevron-right"></span>
			  </a>
			</div>
		</div>
		
	</div>
</section>

<!-- icons -->
<section style="margin-top: 20px;">
	<div class="container-fluid">
		<div class="row center-block">
			<span class="col-md-offset-2 col-md-2 image-thumbnails">
				<a href="#/bolezni/sladkorna">
					<img src="assets/img/diabetes.png" class="img-responsive" alt="">
					<h4>Diabetes</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/hiv">
					<img src="assets/img/hiv.png" class="img-responsive" alt="">
					<h4>HIV</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/acc-holersterol">
					<img src="assets/img/holesterol.png" class="img-responsive" alt="">
					<h4>Holesterol</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/acc-depresija">
					<img src="assets/img/depresija.png" class="img-responsive" alt="">
					<h4>Depresija</h4>
				</a>
			</span>
		</div>		

		<div class="row" style="margin-top: 10px;">
			<span class="col-md-offset-2 col-md-2 image-thumbnails">
				<a href="#/bolezni/odvisnost">
					<img src="assets/img/odvisnost.png" class="img-responsive" alt="">
					<h4>Odvisnost</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/karies">
					<img src="assets/img/zobozdravstvo.png" class="img-responsive" alt="">
					<h4>Karies</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/acc-tlak">
					<img src="assets/img/tlak.png" class="img-responsive" alt="">
					<h4>Krvni tlak</h4>
				</a>
			</span>
			<span class="col-md-2 image-thumbnails">
				<a href="#/bolezni/pneumonija">
					<img src="assets/img/pneumonija.png" class="img-responsive" alt="">
					<h4>Pljučnica</h4>
				</a>
			</span>
		</div>		
	</div>
</section>

<!-- last / most read -->
<section style="margin-top: 20px;">
	
	<div class="container-fluid">
		<div class="col-md-6">
			<p class="home-header bg-info">Zadnje dodane</p>
			<div class="media">
				<a href="#/novice-view/Zadnje dodane" class="pull-left">
					<img src="assets/img/avatar1_50.jpg" alt="" class="media-object avatar-rounded">
				</a>
				<div class="media-body">
					<h4 class="media-heading"><a href="#/novice-view/Zadnje dodane">Za volan le spočiti in naspani</a></h4>
					Zaspanost je vzrok za več kot desetino prometnih nesreč. Na pot pojdite torej le spočiti in naspani, če med vožnjo začutite utrujenost ali zaspanost, pa takoj ustavite.
				</div>
			</div>
			<div class="media">
				<a href="#/novice-view/Zadnje dodane" class="pull-left">
					<img src="assets/img/avatar3_50.jpg" alt="" class="media-object avatar-rounded">
				</a>
				<div class="media-body">
					<h4 class="media-heading"><a href="#/novice-view/Zadnje dodane">V boj proti okuženim klopom tudi z brezplačno aplikacijo Klop SOS</a></h4>
					Sprehod po gozdu ali delo na vrtu se lahko kaj hitro konča z neželenim vbodom klopa, ki je lahko nevaren, saj lahko klop prenaša več bolezni, pri nas predvsem klopni meningoencefalitis in lymsko boreliozo. Obolevnost za klopnim meningoencefalitisom lahko odslej na enostaven način preverite z aplikacijo Klop SOS.
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<p class="home-header bg-info">Najbolj brane</p>
			<div class="media">
				<a href="#/novice-view/Najbolj brane" class="pull-left">
					<img src="assets/img/avatar_50.jpg" alt="" class="media-object avatar-rounded">
				</a>
				<div class="media-body">
					<h4 class="media-heading"><a href="#/novice-view/Najbolj brane">Zehanje – mehanizem za ohlajanje možganov?</a></h4>
					Pogostost zehanja je odvisna od temperature okolja, kažejo raziskave pri ptičih, podganah, opicah in ljudeh. Zehanje napoveduje dvig temperature v možganih.
				</div>
			</div>
			<div class="media">
				<a href="#/novice-view/Najbolj brane" class="pull-left">
					<img src="assets/img/avatar4_50.jpg" alt="" class="media-object avatar-rounded">
				</a>
				<div class="media-body">
					<h4 class="media-heading"><a href="#/novice-view/Najbolj brane">Peteršilj velja za eno najbolj zdravilnih zelišč</a></h4>
					Peteršilj je danes poznan tako v kulinariki kot domači lekarni in zdravstvenih učinkovinah, medtem ko je moral biti v Homerjevih časih na vsaki slavnostni pojedini, saj so se bali zastrupitev.
				</div>
			</div>

		</div>
	</div>
</section>

<section class="telecom-footer"></section>