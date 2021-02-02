function copy(that){
  var inp = document.createElement('input');
  var title = that.children[0].getAttribute("title");
  console.log("Copy:", title);
  document.body.appendChild(inp)
  inp.value = title
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  alert('Код скопирован  -  ' + title + '     вставте его в текстовое поле');
}
