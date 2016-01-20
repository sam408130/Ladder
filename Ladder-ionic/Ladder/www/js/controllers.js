angular.module('ladder.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

//图书列表
.controller('BooklistCtrl',function($scope,HttpFactory){
    $scope.title = "Ladder";
    

    HttpFactory.send({
      url:'booklist',
      method:'get'
    }).success(function(response){
      $scope.booklist = response.result;
      console.log($scope.booklist);
    });



})

//添加图书
.controller('AddBookCtrl',function($scope,$ionicLoading,HttpFactory,$timeout,$state){
    $scope.bookCover = '../img/bookcover.png';
    $scope.book = {};

    var HUD = function(template){

      $ionicLoading.show({
          template:template
      })

      $timeout(function(){
            $ionicLoading.hide()
        },1500);
    };


    $scope.uploadBookcover = function(file,errFiles){

        var url = URL.createObjectURL(file);
        if (url){

            $ionicLoading.show({template:"上传中..."});
            lrz(url).then(function(rst){
                var avFile = new AV.File('coverImage.png',rst);
                avFile.save().then(function(fileobj){
                    $scope.book.coverImage = fileobj.id;
                    $scope.bookCover = url;
                    $ionicLoading.hide();
                    HUD('Upload Success');
                })
                
            })

        }


    };

    $scope.Upload = function(){
        if(!$scope.book.name){
            HUD('Please input the name of the book!');
        }else if(!$scope.book.totalPages){
            HUD('Please input the totalPages of the book!');
        }else if(!$scope.book.coverImage){
            HUD('Please upload the coverImage of the book!')
        }else{
            console.log($scope.book);
            HttpFactory.send({
              url:'addbook',
              method:'post',
              data:$scope.book
            }).success(function(result){
              console.log(result);
            })
        }



    };
})



