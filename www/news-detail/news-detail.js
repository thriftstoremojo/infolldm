(function() {
	'use strict';

	angular.module('infoApp.newsDetail', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/news-detail/:newsId', {
			templateUrl: 'news-detail/news-detail.html',
			controller: 'NewsDetailController'
		});
	}])

	.controller('NewsDetailController', ['$routeParams', function($routeParams) {
		$('body').removeClass('background-apostle');
		$('#header-title').html('<a href="#/news-list">Noticias</a>');
		$('#header').removeClass('hidden');

		var articleHtml = '',
			baseUrl = 'http://54.210.16.162/noticiasWeb/',
			data = [
				{
					idnoticia: 1,
					titulo: "La Luz del Mundo da bienvenida a las delegeciones nacionales y extrangeras.",
					descripcion: "Es el ofrecimiento de las acciones, emociones y deseos del alma, hecho a Dios en el nombre y por la mediación del Señor Jesucris- to; también es la comunicación del corazón con Dios mediante el auxilio del Espíritu Santo.",
					fecha: "2015-08-11 09:06:01.0",
					fuente: "Externa",
					urlMain: "imgs/imagen1.jpg",
					url: "imgs/imagen2.jpg"
				}
			],
			newsId = $routeParams.newsId;

		var commentCount = 4,
			noteCount = 12,
			viewCount = 23;

		$.ajax(baseUrl + 'servletNoticias?service=noticiaXid&id=' + newsId)
			.done(function(data) {
			var responseData = $.parseJSON(data),
				date = moment(responseData[0].fecha).format('D MMMM YYYY'),
				imageUrl = baseUrl + responseData[0].urlMain;

			articleHtml += '<div class="news-list-header" style="background-image: url(' + imageUrl + ');"></div>' +
				'<div class="news-article">' +
					'<h2 class="news-title">' + responseData[0].titulo + '</h2>' +
					'<div>' + responseData[0].articulo + '</div>' +
					'<p class="news-image-holder"><img src="' + baseUrl + responseData[0].url + '"></p>' +
					'<div class="news-source-footer">' +
						'<div class="news-source-icon news-source-icon-' + responseData[0].fuente + '"></div>' +
						'<div class="news-source-title">' + responseData[0].fuente + '</div>' +
					'</div>' +
					'<div class="news-source-meta text-right">' +
						'<div class="pull-left"><span class="icon icon-clock"></span>' + date + '</div>' +
						'<span class="icon icon-view"></span> ' + viewCount +
						'<span class="icon icon-comments"></span> ' + commentCount +
					'</div>' +
				'</div>';

			$('#news-detail').html(articleHtml);
		});
	}]);
})();