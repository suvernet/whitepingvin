function copy(that){
  var inp = document.createElement('input');
  var alt = that.children[0].getAttribute("alt");
  console.log("Copy:", alt);
  document.body.appendChild(inp)
  inp.value = alt
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  alert('Код скопирован  -  ' + alt + '     вставте его в текстовое поле');
}

