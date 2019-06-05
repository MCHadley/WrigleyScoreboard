$('document').ready
(function(){
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
  
  $.getJSON(url, displayResults)
}

function displayResults(dataFromServer){
  var results = dataFromServer.data.games.game;
  $.each(results, function(resultsIndex, resultsValue){
    var index = resultsIndex;
    var gameObj = resultsValue;
    var awayTeam = gameObj.away_team_city;
    var homeTeam = gameObj.home_team_city;
    var league = gameObj.league;
    var linescore = gameObj.linescore;
    var inning = linescore.inning;
    var innCount = inning.length;
    console.log(innCount);
  })
}