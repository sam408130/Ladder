angular.module('Ladder.directives',[])
.directive('booklist',function(){

	return {

		template:'<div id="book">' + 
						'<ul>' +
					        '<li ng-repeat="book in booklist track by $index" ng-click="AddBook()">' +
								'<img src="{{book.coverImage.url}}" alt="">' +
					    		'<p>Name: {{book.bookname}}</p>' +
					    		'<p>Read Page: {{book.currentPage}}</p>' +
					    		'<p>Progress: {{book.progress}}</p>' +
					    		'<p>Total Page: {{book.totalPages}}</p>' +
					        '</li>' +
					        '<li ng-click="AddBook()"><img ng-src="img/addbook.png" alt=""></li>'+
						'</ul>' +
					'</div>',
		replace:true
	}
})