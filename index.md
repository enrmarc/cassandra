---
layout: default
---

<body class="animated fadeIn">
  <!--div class="announcement animated delayed fadeInDown">
    <h3>Some important announcement<a href="">...</a></h3>
  </div-->

  <div class="container cf">
    <div class="col col-1-2 left">
      <div class="content animated fadeIn delayed">
        <span class="cassy">Cassandra</span>
        <img src="assets/img/cassandra_big.png" class="logo--cassy" alt="logo cassandra">
        <h2>Autobuses de Palencia</h2>
        <p>Consulta los horarios de los autobuses urbanos de <strong>Palencia</strong> desde tu móvil.</p>

        <a href="https://play.google.com/store/apps/details?id=org.coyotev.cassandra" class="download">
           <img src="assets/img/store.png" class="appstore">
         </a>
      </div>

      <div class="footer">
        <a class="twitter" href="https://play.google.com/store/apps/details?id=org.coyotev.cassandra">Descarga</a>
        <a class="support" href="http://github.com/enrmarc/cassandra">GitHub</a>
        <a class="legal" href="#">Info</a>
      </div>
    </div>

    <div class="col col-1-2 right" style="xanimation-delay: -75s;">
      <div class="content animated fadeIn delayed">
        <div>
          <img src="assets/img/shoot1.png">
          <!--video class="video--app" id="" autoplay="" muted="" preload="auto">
            <source src="images/video.mp4" type="video/mp4">
          </video-->
        </div>
      </div>

      <div class="footer">
        <span class="align-center">
          © 2013
          <a class="twitter" href="http://github.com/enrmarc">enrmarc</a>
        </span>
      </div>
    </div>
  </div>

  {% include overlay.html %}
  {% include analytics.html %}

  <script src="assets/js/jquery.js"></script>
  <script src="assets/js/app.js"></script>
</body>