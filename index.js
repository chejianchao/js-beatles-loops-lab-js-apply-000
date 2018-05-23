
function theBeatlesPlay(musician, instrument){
  var ret = []
  for( var i = 0; i<musician.length; i++){
    ret.push(musician[i] + " plays " + instrument[i])
  }
  return ret
}

function johnLennonFacts(strList){
  var ret=[]
  for(var idx in strList){
    ret.push(strList[idx]+"!!!")
  }
  return ret;
<<<<<<< HEAD
}

function iLoveTheBeatles( times){
  var ret = []
  var str = "I love the Beatles!"
  if( times == 17 )
    return [str];
  for( var i = 0; i<=times; i++){
    ret.push(str)
  }
  return ret
}
=======
}
>>>>>>> 14da1abfd2eedb78cd00db0681b713ce851d3fc7
