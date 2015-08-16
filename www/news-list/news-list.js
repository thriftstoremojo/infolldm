(function() {
	'use strict';

	angular.module('infoApp.newsList', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/news-list', {
			templateUrl: 'news-list/news-list.html',
			controller: 'NewsListController'
		});
	}])

	.controller('NewsListController', [function() {
		$('body').removeClass('background-apostle');
		$('#header-title').text('Noticias');
		$('#header').removeClass('hidden');
		
		var baseUrl = 'http://54.210.16.162/noticiasWeb/',
			data = [
				{
					"idnoticia":1,
					"titulo":"La Luz del Mundo da bienvenida a las delegeciones nacionales y extrangeras.",
					"descripcion":"Es el ofrecimiento de las acciones, emociones y deseos del alma, hecho a Dios en el nombre y por la mediación del Señor Jesucris- to; también es la comunicación del corazón con Dios mediante el auxilio del Espíritu Santo.",
					"fecha":"2015-08-11 09:06:01.0",
					"fuente":"Externa",
					"urlMain":"imgs/imagen1.jpg",
					"url":"imgs/imagen2.jpg"},
				{
					"idnoticia":2,
					"titulo":"￼Comienzan los temas Doctrinales en la Santa Convocación.",
					"descripcion":"El miércoles 6 de mayo, el Apóstol de Jesucristo, Naasón Joaquín García, salió de su casa –en la colonia Hermosa Provincia–, con dirección a Silao, Guanajuato, donde tendrá verificativo la Reunión Internacional de Jóvenes Misioneros 2015, a la que él ha convocado. El reloj marcaba las 11:20 a.m.",
					"fecha":"2015-08-11 09:06:01.0",
					"fuente":"Local",
					"urlMain":"imgs/imagen3.jpg",
					"url":"imgs/imagen4.jpg"
				}
			],
			newsHtml = '';

		var commentCount = 4,
			noteCount = 12,
			viewCount = 23;

		$.ajax(baseUrl + 'servletNoticias?service=noticias')
			.done(function(data) {
				var responseData = $.parseJSON(data);

				for (var i = 0; i < responseData.length; i++) {
					var date = moment(responseData[0].fecha).format('D MMMM YYYY'),
						imageUrl = baseUrl + responseData[i].urlMain;

					newsHtml += '<li>' +
							'<a class="news-link" href="#/news-detail/' + responseData[i].idnoticia + '">' +
								'<div class="news-list-header" style="background-image: url(' + imageUrl + ');">' +
									'<div class="news-list-gradient">' +
										'<h2 class="news-list-title">' + responseData[i].titulo + '</h2>' +
									'</div>' +
								'</div>' +
							'</a>' +
							'<div class="news-list-description">' +
								'<div class="news-list-source">' +
									'<div class="news-source-icon news-source-icon-' + responseData[i].fuente + '"></div>' +
									'<div class="news-source-title">' + responseData[i].fuente + '</div>' +
									'<div class="news-source-meta"><span class="icon icon-notes"></span>' + noteCount + ' notas</div>' +
								'</div>' +
								'<p>' + responseData[i].descripcion + '</p>' +
								'<div class="news-source-meta text-right">' +
									'<div class="pull-left"><span class="icon icon-clock"></span>' + date + '</div>' +
									'<span class="icon icon-view"></span> ' + viewCount +
									' <span class="icon icon-comments"></span> ' + commentCount +
								'</div>' +
							'</div>' +
						'</li>';
				}

				$('#news-list').html(newsHtml);
		});
	}]);
})();