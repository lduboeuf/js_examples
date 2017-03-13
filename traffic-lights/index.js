//V2: ajout gestion orange
//on defini un cycle de 1en1 4 vert, 1 orange, 4 rouge
//refactoring

var $fnord = document.getElementById('feux-nord');
var $fouest = document.getElementById('feux-est');
var $fest = document.getElementById('feux-ouest');
var $fsud = document.getElementById('feux-sud');

var $btnStart = document.getElementById('start-stop');

//init feux gauche et droite au vert


var toggleLightClass = function(NSLightState, WELightState){
  $fnord.classList.add(NSLightState);
  $fsud.classList.add(NSLightState);

  $fouest.classList.add(WELightState);
  $fest.classList.add(WELightState);
}

var currentCycle = 0;


var init = function(){
  var $feux = document.querySelectorAll('.feux');
  for (var i =0; i < $feux.length; i++){
    $feux[i].classList.remove('rouge','vert','orange');
  }
}


var toggleLight = function(){

  if (currentCycle == 11) currentCycle = 0;
  currentCycle ++; //
  console.log(currentCycle);

  //on reinitialize les feux a 'rien'
  init();


  //on change l'état des feux vert passe au rouge, rouge passe au vert
  if ( currentCycle < 5){
    toggleLightClass('vert','rouge');
  }else if (currentCycle == 5 ){
    toggleLightClass('orange','rouge');
  }else if (currentCycle > 5 && currentCycle <= 10){
    toggleLightClass('rouge','vert');
  }else if (currentCycle == 11){
    toggleLightClass('rouge','orange');
  }


}

var idInterval = null;
$btnStart.onclick = function(){
  if (idInterval==null){
    idInterval = setInterval(toggleLight, 1000); //lancer la fonction toutes les n mili-secondes
    $btnStart.innerHTML = 'Stop';
  }else{
    clearInterval(idInterval);
    idInterval = null;
    init();
    $btnStart.innerHTML = 'Start';
  }

}
