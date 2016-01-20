
angular.module('Ladder.controllers',[])

.controller('mainCtrl',function($scope,HttpFactory,$state){
	$scope.title = "Ladder";
	

	HttpFactory.send({
		url:'booklist',
		method:'get'
	}).success(function(response){
		$scope.booklist = response.result;
		console.log($scope.booklist);
	});

	$scope.AddBook = function(){
		$state.go('home.addbook');
	};


})

.controller('addbookCtrl',function($scope,HttpFactory,$state){
	$scope.bookCover = '../img/bookcover.png';
	$scope.uploadBookcover = function(file,errFiles){

        var url = URL.createObjectURL(file);
        if (url){

            $ionicLoading.show({template:"上传中..."});
            lrz(url).then(function(rst){
                $scope.AuthParams.BusinessFile = rst.base64;
                $scope.BusinessLicensePhoto = rst.base64;
                $ionicLoading.hide();
            })

        }


    };
})