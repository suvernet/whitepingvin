var p = '<img src="https://suvernet.github.io/whitepingvin/img/smile/';
var u = '" border="0" />';
if(document.getElementsByClassName == undefined) {
  var smiles = $('#comments').find('.comment-content')
} else {
  var smiles = document.getElementById('comments').getElementsByClassName('comment-content')
}
for (key in smiles) {
  var smile = smiles[key]
  if (smile.innerHTML) {
    smile.innerHTML = smile.innerHTML.replace(/:smile:/ig, p+"smile_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:sad:/ig, p+"sad_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:wink:/ig, p+"wink_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:ne-a:/ig, p+"nea_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:biggrin:/g, p+"biggrin_mini2.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:dirol:/ig, p+"dirol_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:blum:/ig, p+"blum_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:cray:/ig, p+"cray_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:rofl:/g, p+"rofl_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:pardon:/ig, p+"pardon_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:wacko:/g, p+"wacko_mini2.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:chok:/g, p+"chok_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:drink:/g, p+"drink2_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:yahoo:/g, p+"yahoo_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:help:/g, p+"help_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:dash:/g, p+"dash_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:dance:/g, p+"dance_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:mail:/g, p+"mail1_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:music:/g, p+"music_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:clapping:/g, p+"clapping_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:sorry:/g, p+"sorry_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:stop:/g, p+"stop_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:unknw:/g, p+"unknw_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:yes:/g, p+"yes_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:laugh:/g, p+"laugh_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:greeting:/g, p+"greeting_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:good:/g, p+"good_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:ok:/g, p+"ok_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:crazy:/g, p+"crazy_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:blush:/g, p+"blush_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:angel:/g, p+"angel_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:new_russian:/g, p+"new_russian_mini.gif"+u);
    smile.innerHTML = smile.innerHTML.replace(/:bye:/g, p+"bye_mini.gif"+u);
  }
}
