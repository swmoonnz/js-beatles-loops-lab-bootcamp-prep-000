function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++)
    {var string =`${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array
}