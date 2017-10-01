function addItem () {
  var item = document.createElement('li');
  var list = document.getElementById('list');
  item.innerHTML = 'item ' + list.children.length;
  list.append(item);
}

document.getElementById('button').addEventListener('click', addItem);
