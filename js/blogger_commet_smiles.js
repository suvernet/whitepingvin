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
    smile.innerHTML = smile.innerHTML.replace(/(:-?|=)\)/ig, p+"smile_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:-?|=)\(|(:nothappy:)/ig, p+"sad_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(;)\)|(:wink:)/ig, p+"wink_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:z)|(:ne-a:)/ig, p+"0B3_dGXEjBVdPendKYVdYUGMyVUk"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:D)|(:big_smile:)/g, p+"0B3_dGXEjBVdPVjZ2NklUMHVjd3c"+u);
    smile.innerHTML = smile.innerHTML.replace(/(8-0)|(:boom:)/ig, p+"0B3_dGXEjBVdPaEUtLXNkRlRZcVE"+u);
    smile.innerHTML = smile.innerHTML.replace(/(:p)|(:tease:)/ig, p+"0B3_dGXEjBVdPa1E2Y3NLU0dkWUk"+u);
    smile.innerHTML = smile.innerHTML.replace(/(%;)|(:cry:)/ig, p+"0B3_dGXEjBVdPT3pmaHZkUEFTWFU"+u);
    smile.innerHTML = smile.innerHTML.replace(/(XD)|(:lol:)/g, p+"0B3_dGXEjBVdPZmtUenZORDlqRms"+u);
    smile.innerHTML = smile.innerHTML.replace(/(_@)|(:pardon:)/ig, p+"0B3_dGXEjBVdPanJLakJPdFhWTlE"+u);
    smile.innerHTML = smile.innerHTML.replace(/:crazy:/g, p+"0B3_dGXEjBVdPOERQWXNUREZUT0U"+u);
    smile.innerHTML = smile.innerHTML.replace(/(O_o)|(:tik:)/g, p+"0B3_dGXEjBVdPbm4zdjVqV1I5TU0"+u);
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
