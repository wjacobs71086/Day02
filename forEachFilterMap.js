'use strict';
let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 3]];

const forwardMoves = moves.filter(function(value){
  //console.log('im cycling');
  
  return value[0] >= 0 && value[1] >= 0 ;
});
//console.log(forwardMoves);

const totalSteps = forwardMoves.map(function(value){
  return value[0] + value[1];

});

//console.log(totalSteps);

const eachMove = totalSteps.forEach(function(element,value,index){
  console.log(`Movement #${totalSteps[index]}: ${totalSteps[value]} steps.`);
});

//console.log(eachMove);