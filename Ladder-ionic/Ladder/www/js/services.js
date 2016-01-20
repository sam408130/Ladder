angular.module('ladder.services',[])

.factory('HttpFactory',function($http){
	/* 网络请求 */
	var send = function(config){

		config.headers = {

			"X-LC-Id":"O464Qx9BzqtawEg6dMoXusF2-gzGzoHsz",
			"X-LC-Key":"Eke0KKHlQokaGwLNOgG2nevx"
		};

		config.url = "https://api.leancloud.cn/1.1/call/" + config.url;
		var http = $http(config);

		/*  catch error */

		return http;
	}

	return {
		send:send
	}

})
