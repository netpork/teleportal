<section>
	<div class="container">
		

	<div class="row">
		<div class="col-md-12">
			<ol class="breadcrumb">
				  <li><a href="#">{{spec}}</a></li>
				  <li><a href="#">Zdravnik</a></li>
			</ol>
		</div>
	</div>


		<div class="row">
			<div class="col-md-12">		
				<div class="media">
					<a class="pull-left" href="#">
						<img class="media-object img-thumbnail" src="assets/img/{{picture}}" style="height: 200px"alt="...">
					</a>
				<div class="media-body">
						<div class="row">
							<div class="col-md-4">
								<h3 class="media-heading">{{name}}</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Specializacija:</p>
							</div>
							<div class="col-md-8">
								<p class="text-primary">{{spec}}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Mesto zaposlitve:</p>
							</div>
							<div class="col-md-8">
								<p class="text-primary">{{place}}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Opis:</p>
							</div>
							<div class="col-md-8">
								<p class="text-primary">{{description}}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Telefon:</p>
							</div>
							<div class="col-md-8">
								<p class="text-primary">{{tel}}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Fax:</p>
							</div>
							<div class="col-md-8">
								<p class="text-primary">{{fax}}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<p class="text-muted">Povprečna ocena:</p>
							</div>
							<div class="col-md-8">
								<p class="text-success"><strong>{{average}}</strong></p>
							</div>
						</div>
					
					</div>
				</div>

		</div>
	</div>


		<div class="row">
			<div class="col-md-9">
				<div class="panel panel-default">
					<div class="panel-heading">
				    	<h3 class="panel-title">Pošlji vprašanje >> {{spec}}</h3>
				  	</div>
				  	<div class="panel-body">
						<textarea class="form-control" rows="3"></textarea>
						<div style="margin-top: 10px;">
					  		<button type="button" class="btn btn-info pull-right">Pošlji</button>
						</div>
				  	</div>

				</div>
			</div>
		</div>	

	
	</div>

</section>

<section class="telecom-footer"></section>
