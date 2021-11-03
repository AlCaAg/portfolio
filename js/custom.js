var establecerAtributo = function(selector, llave, valor) {
    let item = document.querySelector(selector);
    item.setAttribute(llave, valor);
}

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
    var skillAngular = 75;

    establecerAtributo("#s_java .progress-bar", "style", "width: " + skillJava + "%");
    establecerAtributo("#s_javaEE .progress-bar", "style", "width: " + skillJavaEE + "%");
    establecerAtributo("#s_html .progress-bar", "style", "width: " + skillHTML + "%");
    establecerAtributo("#s_css .progress-bar", "style", "width: " + skillCSS + "%");
    establecerAtributo("#s_js .progress-bar", "style", "width: " + skillJS + "%");
    establecerAtributo("#s_sql .progress-bar", "style", "width: " + skillSQL + "%");
    establecerAtributo("#s_linux .progress-bar", "style", "width: " + skillLinux + "%");
    establecerAtributo("#s_azure .progress-bar", "style", "width: " + skillAzure + "%");
    establecerAtributo("#s_docker .progress-bar", "style", "width: " + skillDocker + "%");
    establecerAtributo("#s_scrum .progress-bar", "style", "width: " + skillScrum + "%");
    establecerAtributo("#s_git .progress-bar", "style", "width: " + skillGit + "%");
    establecerAtributo("#s_spring .progress-bar", "style", "width: " + skillSpring + "%");
    establecerAtributo("#s_springBoot .progress-bar", "style", "width: " + skillSpringBoot + "%");
    establecerAtributo("#s_terraform .progress-bar", "style", "width: " + skillTerraform + "%");
    establecerAtributo("#s_wildfly .progress-bar", "style", "width: " + skillWildfly + "%");
    establecerAtributo("#s_weblogic .progress-bar", "style", "width: " + skillWeblogic + "%");
    establecerAtributo("#s_arquitectura .progress-bar", "style", "width: " + skillArquitectura + "%");
    establecerAtributo("#s_angular .progress-bar", "style", "width: " + skillAngular + "%");
}

var reemplazarHtml = function(selector, texto) {
    let item = document.querySelector(selector);
    item.innerHTML = texto;
}

var changeLanguage = function(value) {
    if (value == "es") {
        reemplazarHtml("title", "Alejandro Castaño Agudelo - Portafolio")
        reemplazarHtml("button.navbar-toggle", "<span class='sr-only'>Cambiar navegación</span> Menú <i class='fa fa-bars'></i>");
        reemplazarHtml("a.navbar-brand", "Portafolio");
        reemplazarHtml("a#page1", "Proyectos");
        reemplazarHtml("a#page2", "Sobre");
        reemplazarHtml("a#page3", "Contacto");
        reemplazarHtml("span.skills", "Desarrollador de Software / Ingeniero Electrónico");
        reemplazarHtml("#portfolio h2", "Proyectos");
        reemplazarHtml("#about h2", "Sobre");
        reemplazarHtml("#about p", "Ingeniero Electrónico con un excelente sentido de pertenencia. Me preocupa mucho la puntualidad, orden y calidad de una tarea que deba realizar. Me apasiona la tecnología y por eso estoy pendiente de los últimos avances en programación y dispositivos.");
        reemplazarHtml("#about h3", "Habilidades");
        reemplazarHtml("#contact h2", "Contáctame");
        reemplazarHtml("#contact #info1 h3", "Número telefonico");
        reemplazarHtml("#contact #info2 h3", "Correo");
        reemplazarHtml("footer #loca h3", "Ubicación");
        reemplazarHtml("footer #social h3", "En la Web");
        reemplazarHtml("footer #lang_change h3", "Cambiar idioma");

        reemplazarHtml("#portfolioModal1 p.info_modal", "Instalación, soporte y creación de contenido para el sistema de revistas de codigo abierto OJS (Open Journal System) de la Universidad de Antioquia.");
        reemplazarHtml("#portfolioModal1 ul.info-empresa", "<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Octubre 2015 a Julio 2016</strong></li><li>Servicio: <strong>Soporte y creación de contenido Web</strong></li>");
        reemplazarHtml("#portfolioModal1 h4.subtitulo", "Habilidades");
        reemplazarHtml("#portfolioModal1 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal1 button", "<i class='fa fa-times'></i> Cerrar");

        reemplazarHtml("#portfolioModal2 h2", "Desarrollo Web");
        reemplazarHtml("#portfolioModal2 p.info_modal", "Página web creada para el Programa de Integración a las Tecnologias de la Universidad de Antioquia, el cual hace uso CURL para la consulta de información.");
        reemplazarHtml("#portfolioModal2 ul.info-empresa", "<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Noviembre 2015</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        reemplazarHtml("#portfolioModal2 h4.subtitulo", "Habilidades");
        reemplazarHtml("#portfolioModal2 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal2 button", "<i class='fa fa-times'></i> Cerrar");

        reemplazarHtml("#portfolioModal3 h2", "Desarrollo Web");
        reemplazarHtml("#portfolioModal3 p.info_modal", "Página web creada para la supervisión y análisis de condiciones climáticas que puedan interferir con el rumbo de aviones de la Fuerza Aérea Colombiana.");
        reemplazarHtml("#portfolioModal3 ul.info-empresa", "<li>Empresa: <strong>Fuerza Aerea Colombiana</strong></li><li>Fecha: <strong>Febrero 2017 a Julio 2017</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        reemplazarHtml("#portfolioModal3 h4.subtitulo", "Habilidades");
        reemplazarHtml("#portfolioModal3 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal3 button", "<i class='fa fa-times'></i> Cerrar");

        reemplazarHtml("#portfolioModal4 h2", "Desarrollo de Software");
        reemplazarHtml("#portfolioModal4 p.info_modal", "Desarrollo y soporte de funcionalidades para el sistema de gestión de máquinas en linea SMOL y SMOL Central.");
        reemplazarHtml("#portfolioModal4 ul.info-empresa", "<li>Empresa: <strong>Intelligent Electronic Solutions</strong></li><li>Fecha: <strong>Julio de 2017 a Diciembre de 2019</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        reemplazarHtml("#portfolioModal4 h4.subtitulo", "Habilidades");
        reemplazarHtml("#portfolioModal4 ul.info-habilidades", "<li class=\"list-group-item\">Java</li><li class=\"list-group-item\">JavaEE</li><li class=\"list-group-item\">PostgreSQL</li><li class=\"list-group-item\">Wildfly</li><li class=\"list-group-item\">Docker</li><li class=\"list-group-item\">Primefaces</li>");
        reemplazarHtml("#portfolioModal4 button", "<i class='fa fa-times'></i> Cerrar");

        reemplazarHtml("#portfolioModal5 h2", "Desarrollo de Software");
        reemplazarHtml("#portfolioModal5 p.info_modal", "Desarrollo y soporte de funcionalidades para las aplicaciones base de los equipos de tecnología de Suramericana.");
        reemplazarHtml("#portfolioModal5 ul.info-empresa", "<li>Empresa: <strong>Ceiba Software House / Suramericana</strong></li><li>Fecha: <strong>Junio de 2020 a Actualidad</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        reemplazarHtml("#portfolioModal5 h4.subtitulo", "Habilidades");
        reemplazarHtml("#portfolioModal5 ul.info-habilidades", "<li class=\"list-group-item\">Java</li><li class=\"list-group-item\">JavaEE</li><li class=\"list-group-item\">Spring</li><li class=\"list-group-item\">Spring Boot</li><li class=\"list-group-item\">Oracle DB</li><li class=\"list-group-item\">Weblogic</li><li class=\"list-group-item\">Azure</li><li class=\"list-group-item\">PostgreSQL</li><li class=\"list-group-item\">Angular</li><li class=\"list-group-item\">Terraform</li><li class=\"list-group-item\">GWT</li><li class=\"list-group-item\">Docker</li>");
        reemplazarHtml("#portfolioModal5 button", "<i class='fa fa-times'></i> Cerrar");
    } else if (value == "en") {
        reemplazarHtml("title", "Alejandro Castaño Agudelo - Portfolio");
        reemplazarHtml("button.navbar-toggle", "<span class='sr-only'>Toggle navigation</span> Menu <i class='fa fa-bars'></i>");
        reemplazarHtml("a.navbar-brand", "Portfolio");
        reemplazarHtml("a#page1", "Projects");
        reemplazarHtml("a#page2", "About");
        reemplazarHtml("a#page3", "Contact");
        reemplazarHtml("span.skills", "Software Developer / Electronic Engineer");
        reemplazarHtml("#portfolio h2", "Projects");
        reemplazarHtml("#about h2", "About");

        reemplazarHtml("#about p", "Electronic Engineer with a good sense of belonging. I am very concerned about the punctuality, order and quality of a task that must be performed. I am passionate about technology and that is why I am always aware of the latest advances in software and hardware.");
        reemplazarHtml("#about h3", "Skills");
        reemplazarHtml("#contact h2", "Contact Me");
        reemplazarHtml("#contact #info1 h3", "Phone number");
        reemplazarHtml("#contact #info2 h3", "Email");
        reemplazarHtml("footer #loca h3", "Location");
        reemplazarHtml("footer #social h3", "Aroung the Web");
        reemplazarHtml("footer #lang_change h3", "Change language");

        reemplazarHtml("#portfolioModal1 p.info_modal", "Installation, support and creation of content for the OJS (Open Journal System) of the University of Antioquia.");
        reemplazarHtml("#portfolioModal1 p a", "Visit site");
        reemplazarHtml("#portfolioModal1 ul.info-empresa", "<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date: <strong>October 2015 to July 2016</strong></li><li>Service: <strong>Web support and development</strong></li>");
        reemplazarHtml("#portfolioModal1 h4.subtitulo", "Skills");
        reemplazarHtml("#portfolioModal1 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal1 button", "<i class='fa fa-times'></i> Close");

        reemplazarHtml("#portfolioModal2 h2", "Web Development");
        reemplazarHtml("#portfolioModal2 p.info_modal", "Website created for the Programa de Integración a las Tecnologias of the University of Antioquia, which uses cURL software to query information.");
        reemplazarHtml("#portfolioModal2 p a", "Visit site");
        reemplazarHtml("#portfolioModal2 ul.info-empresa", "<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date:	<strong>November 2015</strong></li><li>Service: <strong>Web development</strong></li>");
        reemplazarHtml("#portfolioModal2 h4.subtitulo", "Skills");
        reemplazarHtml("#portfolioModal2 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal2 button", "<i class='fa fa-times'></i> Close");

        reemplazarHtml("#portfolioModal3 h2", "Web Development");
        reemplazarHtml("#portfolioModal3 p.info_modal", "Website created for the supervision and analysis of climatic conditions that may interfere with the course of aircraft of the Fuerza Aerea Colombiana.");
        reemplazarHtml("#portfolioModal3 ul.info-empresa", "<li>Company: <strong>Fuerza Aerea Colombiana</strong></li><li>Date: <strong>February 2017 to July 2017</strong></li><li>Service: <strong>Web Development</strong></li>");
        reemplazarHtml("#portfolioModal3 h4.subtitulo", "Skills");
        reemplazarHtml("#portfolioModal3 ul.info-habilidades", "<li class=\"list-group-item\">HTML</li><li class=\"list-group-item\">CSS</li><li class=\"list-group-item\">Javascript</li><li class=\"list-group-item\">PHP</li>");
        reemplazarHtml("#portfolioModal3 button", "<i class='fa fa-times'></i> Close");

        reemplazarHtml("#portfolioModal4 h2", "Software Development");
        reemplazarHtml("#portfolioModal4 p.info_modal", "Development and support of features for the online machine management system SMOL and SMOL Central");
        reemplazarHtml("#portfolioModal4 ul.info-empresa", "<li>Company: <strong>Intelligent Electronic Solutions</strong></li><li>Date: <strong>July 2017 to December 2019</strong></li><li>Service: <strong>Software Development</strong></li>");
        reemplazarHtml("#portfolioModal4 h4.subtitulo", "Skills");
        reemplazarHtml("#portfolioModal4 ul.info-habilidades", "<li class=\"list-group-item\">Java</li><li class=\"list-group-item\">JavaEE</li><li class=\"list-group-item\">PostgreSQL</li><li class=\"list-group-item\">Wildfly</li><li class=\"list-group-item\">Docker</li><li class=\"list-group-item\">Primefaces</li>");
        reemplazarHtml("#portfolioModal4 button", "<i class='fa fa-times'></i> Close");

        reemplazarHtml("#portfolioModal5 h2", "Software Development");
        reemplazarHtml("#portfolioModal5 p.info_modal", "Development and support of features for base applications of development teams of Suramericana.");
        reemplazarHtml("#portfolioModal5 ul.info-empresa", "<li>Company: <strong>Ceiba Software House / Suramericana</strong></li><li>Date: <strong>June 2020 to Present</strong></li><li>Service: <strong>Software Development</strong></li>");
        reemplazarHtml("#portfolioModal5 h4.subtitulo", "Skills");
        reemplazarHtml("#portfolioModal5 ul.info-habilidades", "<li class=\"list-group-item\">Java</li><li class=\"list-group-item\">JavaEE</li><li class=\"list-group-item\">Spring</li><li class=\"list-group-item\">Spring Boot</li><li class=\"list-group-item\">Oracle DB</li><li class=\"list-group-item\">Weblogic</li><li class=\"list-group-item\">Azure</li><li class=\"list-group-item\">PostgreSQL</li><li class=\"list-group-item\">Angular</li><li class=\"list-group-item\">Terraform</li><li class=\"list-group-item\">GWT</li><li class=\"list-group-item\">Docker</li>");
        reemplazarHtml("#portfolioModal5 button", "<i class='fa fa-times'></i> Close");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    initData();
    changeLanguage("es");
});