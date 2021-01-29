var p = '<img src="https://git.whitepingvin.ru/img/smile/';
var u = '" border="0" />';
if(document.getElementsByClassName == undefined) {
  var smiles = $('#comments').find('.comment-content')
} else {
  var smiles = document.getElementById('comments').getElementsByClassName('comment-content')
}
for (key in smiles) {
  var smile = smiles[key]
  if (smile.innerHTML) {
    smile.innerHTML = smile.innerHTML.replace(/(:-?|=)\)|(:smile:)/ig, p+"smile_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:-?|=)\(|(:sad:)/ig, p+"sad_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(;)\)|(:wink:)/ig, p+"wink_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:z)|(:ne-a:)/ig, p+"nea_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:D)|(:biggrin:)/g, p+"biggrin_mini2.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(8-0)|(:dirol:)/ig, p+"dirol_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:p)|(:blum:)/ig, p+"blum_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(%;)|(:cray:)/ig, p+"cray_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(XD)|(:lol:)/g, p+"lol_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(_@)|(:pardon:)/ig, p+"0B3_dGXEjBVdPanJLakJPdFhWTlE"+u);
    smile.innerHTML = smile.innerHTML.replace(/:wacko:/g, p+"wacko_mini2.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(O_o)|(:chok:)/g, p+"chok_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:beer:/g, p+"0B3_dGXEjBVdPRDA0NmtESkcxcWs"+u);
    smile.innerHTML = smile.innerHTML.replace(/:friends:/g, p+"0B3_dGXEjBVdPekFjWmFoVXpZWTA"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:help:)|(:sos:)/g, p+"0B3_dGXEjBVdPNE1XdzNnS1B6Rjg"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:fool:)|(:idiot:)|(:wall:)/g, p+"0B3_dGXEjBVdPWFNoQ1FMZHhOWHM"+u);
    smile.innerHTML = smile.innerHTML.replace(/:thanks:/g, p+"0B3_dGXEjBVdPU09uUWpuTUZnSUU"+u);
    smile.innerHTML = smile.innerHTML.replace(/:rtfm:/g, p+"0B3_dGXEjBVdPTm92TEJ6TVZNeVE"+u);
    smile.innerHTML = smile.innerHTML.replace(/(@\()|(:angry:)|(:mad:)/g, p+"0B3_dGXEjBVdPVEpGZE4tMWZRX1E"+u);
    smile.innerHTML = smile.innerHTML.replace(/:gigi:/g, p+"0B3_dGXEjBVdPZFdoT0FaQ3Ita1E"+u);
  }
}
