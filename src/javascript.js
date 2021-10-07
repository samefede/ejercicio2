angular.module('ejercicioN2', [])
  .controller('ToDoControlador', function() {
    var lista = this;
    lista.toDos = [];
    lista.nextId = 1;

    lista.getNext = function () {
      var actual = lista.nextId;
      lista.nextId ++;
      return actual;
    }

    lista.addTodo = function() {
      lista.toDos.push({text:lista.todoText, done:false, id:lista.getNext()});
      lista.todoText = '';
    };

    lista.remaining = function() {
      var count = 0;
      angular.forEach(lista.toDos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
  });

  function refreshStyle(checkboxElem) {
    var id = checkboxElem.id.substring(2);
    var textStyle = checkboxElem.checked  ? 'line-through' : '';
    var element = document.getElementById("sp" + id);
    element.style.textDecoration = textStyle;
  }
