window.onload = function(){

  console.log(VK);
  VK.init(function(){isWorking}, function(){isNotWorking});
};

let isWorking = function(){
  alert("Работает!");
};

let isNotWorking= function(){
  alert("Не работает!");
};
