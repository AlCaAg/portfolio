var establecerAtributo = function(selector, llave, valor) {
    let item = document.querySelector(selector);
    item.setAttribute(llave, valor);
}

var initData = function() {
    var skillJava = 95;
    var skillJavaEE = 95;
    var skillHTML = 60;
    var skillCSS = 60;
    var skillJS = 60;
    var skillSQL = 85;
    var skillLinux = 75;
    var skillAzure = 60;
    var skillDocker = 85;
    var skillGit = 85;
    var skillSpring = 95;
    var skillSpringBoot = 95;
    var skillTerraform = 60;
    var skillWildfly = 60;
    var skillWeblogic = 60;
    var skillArquitectura = 60;
    var skillAngular = 60;
    var skillAWS = 75;

    establecerAtributo("#s_java .progress-bar", "style", "width: " + skillJava + "%");
    establecerAtributo("#s_javaEE .progress-bar", "style", "width: " + skillJavaEE + "%");
    establecerAtributo("#s_html .progress-bar", "style", "width: " + skillHTML + "%");
    establecerAtributo("#s_css .progress-bar", "style", "width: " + skillCSS + "%");
    establecerAtributo("#s_js .progress-bar", "style", "width: " + skillJS + "%");
    establecerAtributo("#s_sql .progress-bar", "style", "width: " + skillSQL + "%");
    establecerAtributo("#s_linux .progress-bar", "style", "width: " + skillLinux + "%");
    establecerAtributo("#s_azure .progress-bar", "style", "width: " + skillAzure + "%");
    establecerAtributo("#s_docker .progress-bar", "style", "width: " + skillDocker + "%");
    establecerAtributo("#s_aws .progress-bar", "style", "width: " + skillAWS + "%");
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
    console.log(selector);
    console.log(texto);
    let item = document.querySelector(selector);
    item.innerHTML = texto;
}

var reemplazarHabilidades = function(selector, idioma) {
    if (idioma === "es") {
        reemplazarHtml(selector, "Habilidades");
    } else if (idioma === "en") {
        reemplazarHtml(selector, "Skills");
    }
}

var reemplazarBotonCerrar = function(selector, idioma) {
    if (idioma === "es") {
        reemplazarHtml(selector, "<i class='fa fa-times'></i> Cerrar");
    } else if (idioma === "en") {
        reemplazarHtml(selector, "<i class='fa fa-times'></i> Close");
    }
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

        reemplazarHtml("#modalOJS p.info_modal", "Instalación, soporte y creación de contenido para el sistema de revistas de codigo abierto OJS (Open Journal System) de la Universidad de Antioquia.");
        reemplazarHtml("#modalOJS ul.info-empresa", "<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Octubre 2015 a Julio 2016</strong></li><li>Servicio: <strong>Soporte y creación de contenido Web</strong></li>");
        reemplazarHabilidades('#modalOJS h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalOJS button", "es");

        reemplazarHtml("#modalUdeA h2", "Desarrollo Web");
        reemplazarHtml("#modalUdeA p.info_modal", "Página web creada para el Programa de Integración a las Tecnologias de la Universidad de Antioquia, el cual hace uso CURL para la consulta de información.");
        reemplazarHtml("#modalUdeA ul.info-empresa", "<li>Empresa: <strong>Universidad de Antioquia</strong></li><li>Fecha: <strong>Noviembre 2015</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        reemplazarHabilidades('#modalUdeA h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalUdeA button", "es");

        reemplazarHtml("#modalFAC h2", "Desarrollo Web");
        reemplazarHtml("#modalFAC p.info_modal", "Página web creada para la supervisión y análisis de condiciones climáticas que puedan interferir con el rumbo de aviones de la Fuerza Aérea Colombiana.");
        reemplazarHtml("#modalFAC ul.info-empresa", "<li>Empresa: <strong>Fuerza Aerea Colombiana</strong></li><li>Fecha: <strong>Febrero 2017 a Julio 2017</strong></li><li>Servicio: <strong>Desarrollo Web</strong></li>");
        reemplazarHabilidades('#modalFAC h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalFAC button", "es");

        reemplazarHtml("#modalIES h2", "Desarrollo de Software");
        reemplazarHtml("#modalIES p.info_modal", "Desarrollo y soporte de funcionalidades para el sistema de gestión de máquinas en linea SMOL y SMOL Central.");
        reemplazarHtml("#modalIES ul.info-empresa", "<li>Empresa: <strong>Intelligent Electronic Solutions</strong></li><li>Fecha: <strong>Julio 2017 a Diciembre 2019</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        reemplazarHabilidades('#modalIES h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalIES button", "es");

        reemplazarHtml("#modalSura h2", "Desarrollo de Software");
        reemplazarHtml("#modalSura p.info_modal", "Desarrollo y soporte de funcionalidades para las aplicaciones base de los equipos de tecnología de Suramericana.");
        reemplazarHtml("#modalSura ul.info-empresa", "<li>Empresa: <strong>Ceiba Software House / Suramericana</strong></li><li>Fecha: <strong>Junio 2020 a Febrero 2022</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        reemplazarHabilidades('#modalSura h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalSura button", "es");

        reemplazarHtml("#modalLulo h2", "Desarrollo de Software");
        reemplazarHtml("#modalLulo p.info_modal", "Backend developer en squad de procesos backoffice, validación de listas de riesgo y generación de tarjeta");
        reemplazarHtml("#modalLulo ul.info-empresa", "<li>Empresa: <strong>Lulo Bank</strong></li><li>Fecha: <strong>Febrero 2022 a Actualidad</strong></li><li>Servicio: <strong>Desarrollo de Software</strong></li>");
        reemplazarHabilidades('#modalLulo h4.subtitulo', 'es');
        reemplazarBotonCerrar("#modalLulo button", "es");
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

        reemplazarHtml("#modalOJS p.info_modal", "Installation, support and creation of content for the OJS (Open Journal System) of the University of Antioquia.");
        reemplazarHtml("#modalOJS ul.info-empresa", "<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date: <strong>October 2015 to July 2016</strong></li><li>Service: <strong>Web support and development</strong></li>");
        reemplazarHabilidades('#modalOJS h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalOJS button", "en");

        reemplazarHtml("#modalUdeA h2", "Web Development");
        reemplazarHtml("#modalUdeA p.info_modal", "Website created for the Programa de Integración a las Tecnologias of the University of Antioquia, which uses cURL software to query information.");
        reemplazarHtml("#modalUdeA ul.info-empresa", "<li>Company: <strong>Universidad de Antioquia</strong></li><li>Date:	<strong>November 2015</strong></li><li>Service: <strong>Web development</strong></li>");
        reemplazarHabilidades('#modalUdeA h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalUdeA button", "en");

        reemplazarHtml("#modalFAC h2", "Web Development");
        reemplazarHtml("#modalFAC p.info_modal", "Website created for the supervision and analysis of climatic conditions that may interfere with the course of aircraft of the Fuerza Aerea Colombiana.");
        reemplazarHtml("#modalFAC ul.info-empresa", "<li>Company: <strong>Fuerza Aerea Colombiana</strong></li><li>Date: <strong>February 2017 to July 2017</strong></li><li>Service: <strong>Web Development</strong></li>");
        reemplazarHabilidades('#modalFAC h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalFAC button", "en");

        reemplazarHtml("#modalIES h2", "Software Development");
        reemplazarHtml("#modalIES p.info_modal", "Development and support of features for the online machine management system SMOL and SMOL Central");
        reemplazarHtml("#modalIES ul.info-empresa", "<li>Company: <strong>Intelligent Electronic Solutions</strong></li><li>Date: <strong>July 2017 to December 2019</strong></li><li>Service: <strong>Software Development</strong></li>");
        reemplazarHabilidades('#modalIES h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalIES button", "en");

        reemplazarHtml("#modalSura h2", "Software Development");
        reemplazarHtml("#modalSura p.info_modal", "Development and support of features for base applications of development teams of Suramericana.");
        reemplazarHtml("#modalSura ul.info-empresa", "<li>Company: <strong>Ceiba Software House / Suramericana</strong></li><li>Date: <strong>June 2020 to February 2022</strong></li><li>Service: <strong>Software Development</strong></li>");
        reemplazarHabilidades('#modalSura h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalSura button", "en");

        reemplazarHtml("#modalLulo h2", "Software Development");
        reemplazarHtml("#modalLulo p.info_modal", "Backend developer on backoffice process squad, risk list validation and card generation process");
        reemplazarHtml("#modalLulo ul.info-empresa", "<li>Company: <strong>Lulo Bank</strong></li><li>Fecha: <strong>February 2022 to Present</strong></li><li>Service: <strong>Software Development</strong></li>");
        reemplazarHabilidades('#modalLulo h4.subtitulo', 'en');
        reemplazarBotonCerrar("#modalLulo button", "en");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    initData();
    changeLanguage("es");
});
