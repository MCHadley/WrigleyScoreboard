$('document').ready(function(){
  ajaxCall();
});

function ajaxCall(){
  var mlb = 'http://gd.mlb.com/components/game/mlb/year_2019/month_06/day_25/master_scoreboard.json';
  $.ajax({
    url: mlb,
    dataType: 'json',
    success: function(data){
      var rawInning = data.data.games.game[0].linescore.inning
      var homeTeam = data.data.games.game[0].home_team_city;
      var awayTeam = data.data.games.game[0].away_team_city;
      var i = rawInning.length;
      var iCount = 0;
      // console.log(rawInning)
      for(iCount; iCount < i; iCount++) {
          homeScore = rawInning[iCount].home;
          awayScore = rawInning[iCount].away;
          var inningNum = iCount + 1;
          console.log("Inning: "+ inningNum)
          console.log(homeTeam + ": "+ homeScore)
          console.log(awayTeam + ": "+ awayScore)
          // debugger;
      }
    }

  })
}