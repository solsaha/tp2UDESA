<!-- Include Head -->
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link width="" rel="shortcut icon" href="./images/logo-mercado-liebre.jpg" />
	
	<title> Mercado Liebre Argentina</title>
	<!-- Font Awesome Stylesheet -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
	<!-- Bootstrap Grid Stylesheet -->
	<link rel="stylesheet" href="./css/bootstrap-grid.min.css">
	<!-- Own Stylesheet -->
	<link rel="stylesheet" href="./css/app.css">
</head>
<body>
	<!-- Header -->



    <header class="main-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="img-logo col-2 col-md-3">
                    <a href="index.ejs" class="main-header_home-link">
						<img src="/images/LogoSAFUL.jpeg">
					</a>
				</div>
	
				<div class="col-7 col-md-6">
					<form action="/product/id/2" method="GET" class="search-form">
						<input type="text" name="search" placeholder="Buscá tu buzo" class="search-form_input">
						<button type="submit" class="search-form_button"><i class="fas fa-search"></i></button>
					</form>
				</div>
                </div>
	
			<button class="btn-toggle-navbar">
				<i class="fas fa-bars"></i>
			</button>
	
			<nav class="main-navbar">
				<ul class="left-navbar">
					<li><a href="/">Todos los productos</a></li>
					<li><a href="productedit">Cargar/Borrar productos</a></li>
				</ul>
	
				<ul class="right-navbar">
					<li><a href="users">
							Mi perfil <i class="fas fa-user"></i>
						</a>
					</li>
					<li>
						<form action="/" method="GET">
							<button class="logout" type="submit">
								Cerrar sesión <i class="fas fa-sign-in-alt"></i>
							</button>
						</form>
					</li>
				    
				</ul>
			</nav>
		</div>
	</header>
	<!-- /Header -->

		<a href="/login">Ingresar <i class="far fa-address-card"></i></a>
		<a href="/register">Registrate<i class="fas fa-sign-in-alt"></i></a>
