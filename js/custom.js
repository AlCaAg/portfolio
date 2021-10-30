var initData = function() {
    var skillJava = 95;
    var skillJavaEE = 90;
    var skillHTML = 75;
    var skillCSS = 75;
    var skillJS = 75;
    var skillSQL = 85;
    var skillLinux = 75;
    var skillAzure = 75;
    var skillDocker = 85;
    var skillScrum = 80;
    var skillGit = 85;
    var skillSpring = 95;
    var skillSpringBoot = 95;
    var skillTerraform = 70;
    var skillWildfly = 70;
    var skillWeblogic = 70;
    var skillArquitectura = 75;

    $("#s_java .progress-bar").attr("aria-valuenow", skillJava);
    $("#s_javaEE .progress-bar").attr("aria-valuenow", skillJavaEE);
    $("#s_html .progress-bar").attr("aria-valuenow", skillHTML);
    $("#s_css .progress-bar").attr("aria-valuenow", skillCSS);
    $("#s_js .progress-bar").attr("aria-valuenow", skillJS);
    $("#s_sql .progress-bar").attr("aria-valuenow", skillSQL);
    $("#s_linux .progress-bar").attr("aria-valuenow", skillLinux);
    $("#s_azure .progress-bar").attr("aria-valuenow", skillAzure);
    $("#s_docker .progress-bar").attr("aria-valuenow", skillDocker);
    $("#s_scrum .progress-bar").attr("aria-valuenow", skillScrum);
    $("#s_git .progress-bar").attr("aria-valuenow", skillGit);
    $("#s_spring .progress-bar").attr("aria-valuenow", skillSpring);
    $("#s_springBoot .progress-bar").attr("aria-valuenow", skillSpringBoot);
    $("#s_terraform .progress-bar").attr("aria-valuenow", skillTerraform);
    $("#s_wildfly .progress-bar").attr("aria-valuenow", skillWildfly);
    $("#s_weblogic .progress-bar").attr("aria-valuenow", skillWeblogic);
    $("#s_arquitectura .progress-bar").attr("aria-valuenow", skillArquitectura);
}

var initSkills = function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $("#skills").position().top) {
            $('.progress-bar').each(function() {
                $(this).animate({ width: $(this).attr('aria-valuenow') + "%" }, 2000);
            });
        }
    });
}

var changeLanguage = function(value) {
    if (value == "es") {
        $("title").html("Alejandro Castaño Agudelo - Portafolio");
        $("button.navbar-toggle").html("<span class='sr-only'>Cambiar navegación</span> Menú <i class='fa fa-bars'></i>");
        $("a.navbar-brand").html("Portafolio");
        $("a#page1").html("Proyectos");
        $("a#page2").html("Sobre");
        $("a#page3").html("Contacto");
        $("span.skills").html("Desarrollador de Software / Ingeniero Electrónico");
        $("#portfolio h2").html("Proyectos");
        $("#about h2").html("Sobre");
        $("#about p").html("Ingeniero Electrónico con un excelente sentido de pertenencia. Me preocupa mucho la puntualidad, orden y calidad de una tarea que deba realizar. Me apasiona la tecnología y por eso estoy pendiente de los últimos avances en programación y dispositivos.");
        $("#about h3").html("Habilidades");
        $("#contact h2").html("Contáctame");
        $("#contact #info1 h3").html("Número telefonico");
        $("#contact #info2 h3").html("Correo");
        $("footer #loca h3").html("Ubicación");
        $("footer #social h3").html("En la Web");
        $("footer #lang_change h3").html("Cambiar idioma");

        $("#portfolioModal1 p.info_modal").html("Instalación, soporte y creación de contenido para el sistema de revistas de codigo abierto OJS (Open Journal System) de la Universidad de Antioquia.");
        $("#portfolioModal1 p a").html("Visitar sitio");
        $("#portfolioModal1 ul").html("<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Octubre 2015 a Julio 2016</strong></li><li>Servicio: <strong>Soporte y creación de contenido Web</strong></li>");
        $("#portfolioModal1 button").html("<i class='fa fa-times'></i> Cerrar");

        $("#portfolioModal2 h2").html("Desarrollo Web");
        $("#portfolioModal2 p.info_modal").html("Página web creada para el Programa de Integración a las Tecnologias de la Universidad de Antioquia, el cual hace uso  del software cURL para la consulta de información.");
        $("#portfolioModal2 p a").html("Visitar sitio");
        $("#portfolioModal2 ul").html("<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Noviembre 2015</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        $("#portfolioModal2 button").html("<i class='fa fa-times'></i> Cerrar");

        $("#portfolioModal3 h2").html("Desarrollo Web");
        $("#portfolioModal3 p.info_modal").html("Página web creada para la supervisión y análisis de condiciones climáticas que puedan interferir con el rumbo de aviones de la Fuerza Aérea Colombiana.");
        $("#portfolioModal3 ul").html("<li>Empresa: <strong>Fuerza Aerea Colombiana</strong></li><li>Fecha: <strong>Febrero 2017 a Julio 2017</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        $("#portfolioModal3 button").html("<i class='fa fa-times'></i> Cerrar");

        $("#portfolioModal4 h2").html("Desarrollo de Software");
        $("#portfolioModal4 p.info_modal").html("Desarrollo y soporte de funcionalidades para el sistema de gestión de máquinas en linea SMOL y SMOL Central.");
        $("#portfolioModal4 ul").html("<li>Empresa: <strong>Intelligent Electronic Solutions</strong></li><li>Fecha: <strong>Julio de 2017 a Diciembre de 2019</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        $("#portfolioModal4 button").html("<i class='fa fa-times'></i> Cerrar");

        $("#portfolioModal5 h2").html("Desarrollo de Software");
        $("#portfolioModal5 p.info_modal").html("Desarrollo y soporte de funcionalidades para las aplicaciones base de los equipos de tecnología de Suramericana.");
        $("#portfolioModal5 ul").html("<li>Empresa: <strong>Ceiba Software House / Suramericana</strong></li><li>Fecha: <strong>Junio de 2020 a Actualidad</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        $("#portfolioModal5 button").html("<i class='fa fa-times'></i> Cerrar");
    } else if (value == "en") {
        $("title").html("Alejandro Castaño Agudelo - Portfolio");
        $("button.navbar-toggle").html("<span class='sr-only'>Toggle navigation</span> Menu <i class='fa fa-bars'></i>");
        $("a.navbar-brand").html("Portfolio");
        $("a#page1").html("Projects");
        $("a#page2").html("About");
        $("a#page3").html("Contact");
        $("span.skills").html("Software Developer / Electronic Engineer");
        $("#portfolio h2").html("Projects");
        $("#about h2").html("About");

        $("#about p").html("Electronic Engineer with a good sense of belonging. I am very concerned about the punctuality, order and quality of a task that must be performed. I am passionate about technology and that is why I am always aware of the latest advances in software and hardware.");
        $("#about h3").html("Skills");
        $("#contact h2").html("Contact Me");
        $("#contact #info1 h3").html("Phone number");
        $("#contact #info2 h3").html("Email");
        $("footer #loca h3").html("Location");
        $("footer #social h3").html("Aroung the Web");
        $("footer #lang_change h3").html("Change language");

        $("#portfolioModal1 p.info_modal").html("Installation, support and creation of content for the OJS (Open Journal System) of the University of Antioquia.");
        $("#portfolioModal1 p a").html("Visit site");
        $("#portfolioModal1 ul").html("<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date: <strong>October 2015 to July 2016</strong></li><li>Service: <strong>Web support and development</strong></li>");
        $("#portfolioModal1 button").html("<i class='fa fa-times'></i> Close");

        $("#portfolioModal2 h2").html("Web Development");
        $("#portfolioModal2 p.info_modal").html("Website created for the Programa de Integración a las Tecnologias of the University of Antioquia, which uses cURL software to query information.");
        $("#portfolioModal2 p a").html("Visit site");
        $("#portfolioModal2 ul").html("<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date:	<strong>November 2015</strong></li><li>Service: <strong>Web development</strong></li>");
        $("#portfolioModal2 button").html("<i class='fa fa-times'></i> Close");

        $("#portfolioModal3 h2").html("Web Development");
        $("#portfolioModal3 p.info_modal").html("Website created for the supervision and analysis of climatic conditions that may interfere with the course of aircraft of the Fuerza Aerea Colombiana.");
        $("#portfolioModal3 ul").html("<li>Company: <strong>Fuerza Aerea Colombiana</strong></li><li>Date: <strong>February 2017 to July 2017</strong></li><li>Service: <strong>Web Development</strong></li>");
        $("#portfolioModal3 button").html("<i class='fa fa-times'></i> Close");

        $("#portfolioModal4 h2").html("Software Development");
        $("#portfolioModal4 p.info_modal").html("Development and support of features for the online machine management system SMOL and SMOL Central");
        $("#portfolioModal4 ul").html("<li>Company: <strong>Intelligent Electronic Solutions</strong></li><li>Date: <strong>July 2017 to December 2019</strong></li><li>Service: <strong>Software Development</strong></li>");
        $("#portfolioModal4 button").html("<i class='fa fa-times'></i> Close");

        $("#portfolioModal5 h2").html("Software Development");
        $("#portfolioModal5 p.info_modal").html("Development and support of features for base applications of development teams of Suramericana.");
        $("#portfolioModal5 ul").html("<li>Company: <strong>Ceiba Software House / Suramericana</strong></li><li>Date: <strong>June 2020 to Present</strong></li><li>Service: <strong>Software Development</strong></li>");
        $("#portfolioModal5 button").html("<i class='fa fa-times'></i> Close");
    }
}

$('document').ready(function() {
    initData();
    initSkills();
    changeLanguage("es");
});