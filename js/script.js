
/* ------------------------------------------------------- 

* Filename:     AngularJS
* Website:      http://www.shanidkv.com
* Description:  Shanidkv AngularJS blog
* Author:       Shanid KV shanidkannur@gmail.com

---------------------------------------------------------*/

function TodoCtrl($scope) {
  $scope.todos = [
    {text:'HTML5', status:true},
    {text:'CSS3', status:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, status:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.status ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.status) $scope.todos.push(todo);
    });
  };
}
