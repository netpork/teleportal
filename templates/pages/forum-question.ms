<div class="container">

	<div class="row">
		<div class="col-md-1 right-text">
			<span class="glyphicon glyphicon-user forum-avatar"></span>	
			<div class="avatar-user-text">{{author}}</div>
		</div>
		<div class="col-md-11">
			<div class="panel panel-primary">
				<div class="panel-heading">
			    	<h3 class="panel-title">{{title}}</h3>
			  	</div>
			  	<div class="panel-body">
			    	{{question}}
			  	</div>
			</div>
		</div>
	</div>	

	{{#answer1_author}}
		<div class="row">
			<div class="col-md-1 right-text">
				<span class="glyphicon glyphicon-comment forum-avatar"></span>	
				<div class="avatar-user-text">{{answer1_author}}</div>
			</div>
			<div class="col-md-11">
				<div class="panel panel-info">
					<div class="panel-heading">
				    	<h3 class="panel-title">{{answer1_title}}</h3>
				  	</div>
				  	<div class="panel-body">
				    	{{answer1_text}}
				  	</div>
				</div>
			</div>
		</div>	


		<div class="row">
			<div class="col-md-1 right-text">
				<span class="glyphicon glyphicon-user forum-avatar"></span>	
				<div class="avatar-user-text">{{answer2_author}}</div>
			</div>
			<div class="col-md-11">
				<div class="panel panel-primary">
					<div class="panel-heading">
				    	<h3 class="panel-title">{{answer2_title}}</h3>
				  	</div>
				  	<div class="panel-body">
				    	{{answer2_text}}
				  	</div>
				</div>
			</div>
		</div>	
	{{/answer1_author}}


		<div class="row">
			<div class="col-md-1 right-text">
				<span class="glyphicon glyphicon-share-alt forum-avatar"></span>	
			</div>
			<div class="col-md-11">
				<div class="panel panel-default">
					<div class="panel-heading">
				    	<h3 class="panel-title">Odgovori</h3>
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

<section class="telecom-footer"></section>
