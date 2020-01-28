//alert('Hello Javascript'); //tạo hộp thoại hiển thị trên trang index
//console.log('hello Javascript'); //hiển thị trong mội trường console
//document.write('Hello Javascript'); //hiển thị nội dung lên body của trang index

var todos = [];

function onAddClick() {
    var newTodo = document.getElementById('newTodo').value;
    todos.push(newTodo);

    updateTodoList();
    document.getElementById('newTodo').value = '';
}

function updateTodoList() {
    var eleTodoList = document.getElementById('todo-list');
    eleTodoList.innerHTML = '';
    for(var i = 0; i < todos.length; i++) {
        eleTodoList.innerHTML += '<li onclick="onTodoClick(' + i + ')">' + todos[i] + '</li>';
    }
}

function onTodoClick(index) {
    todos.splice(index, 1);
    updateTodoList();
}