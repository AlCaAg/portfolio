var initData = function() {
	var skill_html = 87;
	var skill_css = 87;
	var skill_php = 90;
	var skill_js = 87;
	var skill_jq = 73;
	var skill_ajax = 60;
	var skill_bt = 60;
	var skill_mysql = 70;

	$("#s_html .progress-bar").attr("aria-valuenow", skill_html);
	$("#s_css .progress-bar").attr("aria-valuenow", skill_css);
	$("#s_php .progress-bar").attr("aria-valuenow", skill_php);
	$("#s_js .progress-bar").attr("aria-valuenow", skill_js);
	$("#s_jq .progress-bar").attr("aria-valuenow", skill_jq);
	$("#s_ajax .progress-bar").attr("aria-valuenow", skill_ajax);
	$("#s_bt .progress-bar").attr("aria-valuenow", skill_bt);
	$("#s_mysql .progress-bar").attr("aria-valuenow", skill_mysql);
}

var initSkills = function() {
	$(window).scroll(function() {
		if( $(window).scrollTop()+$(window).height() >= $("#skills").position().top ){
			$('.progress-bar').each(function(){
        $(this).animate({ width:$(this).attr('aria-valuenow') + "%" },2000);
    	});
		}
	});
}

var changeLanguage = function(value) {
	if(value == "es") {
		$("title").html("Alejandro Castaño Agudelo - Portafolio");
		$("button.navbar-toggle").html("<span class='sr-only'>Cambiar navegación</span> Menú <i class='fa fa-bars'></i>");
		$("a.navbar-brand").html("Portafolio");
		$("a#page1").html("Proyectos");
		$("a#page2").html("Sobre");
		$("a#page3").html("Contacto");
		$("span.skills").html("Ingeniero Electrónico - Desarrolador Web");
		$("#portfolio h2").html("Proyectos");
		$("#about h2").html("Sobre");
		$("#about p").html("Ingeniero Electrónico de la Universidad de Antioquia, con un excelente sentido de pertenencia. Me preocupa mucho la puntualidad, orden y calidad de una tarea que deba realizar. Me apasiona la tecnología y por eso estoy siempre pendiente de los últimos avances en dispositivos e investigaciones.");
		$("#about h3").html("Habilidades de programación");
		$("#contact h2").html("Contáctame");
		$("#contact #row_name label").html("Nombre");
		$("#contact #row_email label").html("Correo");
		$("#contact #row_phone label").html("Número telefonico");
		$("#contact #row_message label").html("Mensaje");
		$("#contact #row_name input#name").attr("placeholder", "Nombre");
		$("#contact #row_email input#email").attr("placeholder", "Correo");
		$("#contact #row_phone input#phone").attr("placeholder", "Número telefonico");
		$("#contact #row_message textarea#message").attr("placeholder", "Mensaje");
		$("#contact button.btn").html("Enviar");
		$("footer #loca h3").html("Ubicación");
		$("footer #social h3").html("En la Web");
		$("footer #lang_change h3").html("Cambiar idioma");

		console.log("Cambiar idioma modal a español");
		console.log($("#portfolioModal1 p#info_modal").html());
		$("#portfolioModal1 p.info_modal").html("Instalación, soporte y creación de contenido para el sistema de revistas de codigo abierto OJS (Open Journal System) de la Universidad de Antioquia.");
		$("#portfolioModal1 p a").html("Visitar sitio");
		$("#portfolioModal1 ul").html("<li>Fecha: <strong>Octubre 2016 a Julio 2017</strong></li><li>Servicio: <strong>Soporte y creación de contenido Web</strong></li>");
		$("#portfolioModal1 button").html("<i class='fa fa-times'></i> Cerrar");
		$("#portfolioModal2 h2").html("Desarrollo Web");
		$("#portfolioModal2 p-info_modal").html("Página web creada para el Programa de Integración a las Tecnologias de la Universidad de Antioquia, el cual hace uso  del software cURL para la consulta de información.");
		$("#portfolioModal2 p a").html("Visitar sitio");
		$("#portfolioModal2 ul").html("<li>Fecha:	<strong>Noviembre 2016</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
		$("#portfolioModal2 button").html("<i class='fa fa-times'></i> Cerrar");
	}
	else if(value == "en") {
		$("title").html("Alejandro Castaño Agudelo - Portfolio");
		$("button.navbar-toggle").html("<span class='sr-only'>Toggle navigation</span> Menu <i class='fa fa-bars'></i>");
		$("a.navbar-brand").html("Portfolio");
		$("a#page1").html("Projects");
		$("a#page2").html("About");
		$("a#page3").html("Contact");
		$("span.skills").html("Electronic Engineer - Web Developer");
		$("#portfolio h2").html("Projects");
		$("#about h2").html("About");
		$("#about p").html("Electronic Engineer from the University of Antioquia, with an excellent sense of belonging. I am very concerned about the punctuality, order and quality of a task that must be performed. I am passionate about technology and that is why I am always aware of the latest advances in devices and research.");
		$("#about h3").html("Programming skills");
		$("#contact h2").html("Contact Me");
		$("#contact #row_name label").html("Name");
		$("#contact #row_email label").html("Email");
		$("#contact #row_phone label").html("Phone Number");
		$("#contact #row_message label").html("Message");
		$("#contact #row_name input#name").attr("placeholder", "Name");
		$("#contact #row_email input#email").attr("placeholder", "Email");
		$("#contact #row_phone input#phone").attr("placeholder", "Phone Number");
		$("#contact #row_message textarea#message").attr("placeholder", "Message");
		$("#contact button.btn").html("Send");
		$("footer #loca h3").html("Location");
		$("footer #social h3").html("Aroung the Web");
		$("footer #lang_change h3").html("Change language");
		$("#portfolioModal1 p#info_modal").html("Installation, support and creation of content for the OJS (Open Journal System) of the University of Antioquia.");
		$("#portfolioModal1 p a").html("Visit site");
		$("#portfolioModal1 ul").html("<li>Date: <strong>October 2016 to July 2017</strong></li><li>Service: <strong>Web support and development</strong></li>");
		$("#portfolioModal1 button").html("<i class='fa fa-times'></i> Close");
		$("#portfolioModal2 h2").html("Web Development");
		$("#portfolioModal2 p#info_modal").html("Website created for the Programa de Integración a las Tecnologias of the University of Antioquia, which uses cURL software to query information.");
		$("#portfolioModal2 p a").html("Visit site");
		$("#portfolioModal2 ul").html("<li>Date:	<strong>November 2016</strong></li><li>Service: <strong>Web development</strong></li>");
		$("#portfolioModal2 button").html("<i class='fa fa-times'></i> Close");
	}
}

$('document').ready(function () {
	initData();
	initSkills();
});