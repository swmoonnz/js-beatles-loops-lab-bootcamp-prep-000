function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++)
    {var string =`${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

function iLoveTheBeatles(number)