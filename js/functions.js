$('document').ready(function(){
  getScore();
  displayResults();
});


function getScore(){
  var d = new Date();
  var year = d.getFullYear();
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');;
  var url = 'http://gd.mlb.com/components/game/mlb/year_'
  url += year
  url += '/month_'
  url += month
  url += '/day_'
  url += day
  url += '/master_scoreboard.json'
  console.log(url);
  $.getJSON(url, displayResults)
}

function displayResults(dataFromServer){
  var results = dataFromServer.data.games.game;
  var i = 0;
  $.each(results, function(resultsIndex, resultsValue){
    var gameIndex = resultsIndex;
    var gameObj = resultsValue;
    var awayTeam = gameObj.away_team_city;
    var homeTeam = gameObj.home_team_city;
    var league = gameObj.league;
    var linescore = gameObj.linescore;
    var inning = linescore.inning;
    for(i; i < 8; i++){
      console.log(i);
      var awayScore = inning[i].away;
    }
    console.log(awayScore);
    // $('#away').append(awayTeam + ': ' + awayScore + '<br>');
    // console.log(awayTeam);
  })
}



// $.each(inning, function(index, value){
//   var inNum = index;
//   var away = value.away;
//   var home = value.home;
// })