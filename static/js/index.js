/**
 * Adiciona uma nova entrada de texto dentro de um
 * novo item na lista de afazeres.
 */
function addToDo() {
  // cria 2 novos elementos HTML
  var newListItem = document.createElement('li');
  var newToDoInput = document.createElement('input');
  newToDoInput.className = 'todo-input';

  // adiciona o newToDoInput como filho do newListItem
  // <li><input class="todo-input" /></li>
  // nesse ponto do código, os elementos criados ainda não estão sendo exibidos.
  newListItem.append(newToDoInput);

  // pega a lista pelo ID "todo-list"
  var toDoList = document.getElementById('todo-list');

  // adiciona os elementos criados anteriormente para dentro da lista.
  // agora sim esses elementos serão exibidos no HTML.
  toDoList.append(newListItem);
}

/**
 * Pega a referência de todos os campos de texto e
 * imprime eles no console.
 */
function printToDos() {
  // pega todos os elementos que possuam a classe 'todo-input'
  var inputs = document.getElementsByClassName('todo-input');
  var inputsArr = Array.from(inputs); // transforma em array, agora podemos *percorrer* ele

  // define uma *função que vai ser chamada por outra função* (callback)
  function imprimeValor(input) {
    console.log(input.value);
  }

  // para cada elemento dentro do array, executa a função imprimeValor
  // passando como parâmetro o "elemento da vez".
  //
  // note que eu não estou executando a função (não tem () depois da função),
  // estou apenas passando a função como parâmetro.
  inputsArr.forEach(imprimeValor);

  // seria a mesma coisa de fazer:
  // inputsArr.forEach(function imprimeValor(input) {
  //   console.log(input.value);
  // })
}
