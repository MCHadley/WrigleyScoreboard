$('document').ready(function(){
  ajaxCall();
});

function ajaxCall(){
  var mlb = 'http://gd.mlb.com/components/game/mlb/year_2019/month_06/day_24/master_scoreboard.json';
  $('#scores').append('<table id="teams"></table>');
  $.ajax({
    url: mlb,
    dataType: 'json',
    success: function(data){
      var games = data.data.games.game;
      $.each(games, function(i,v){
        var rawInning = games[i].linescore.inning
        var homeTeam = games[i].home_team_city;
        var awayTeam = games[i].away_team_city;
        var rawLength = rawInning.length;
        var iCount = 0
        $('#teams').append('<tbody><tr><th id="'+ awayTeam +'">'+ awayTeam +'</th></tr><tr><th id="'+ homeTeam +'">'+ homeTeam +'</th></tr></tbody>');
        // console.log(rawInning)
        for(iCount; iCount < rawLength; iCount++) {
            homeScore = rawInning[iCount].home;
            awayScore = rawInning[iCount].away;
            var inningNum = iCount + 1;
            console.log("Inning: "+ inningNum);
            console.log(homeTeam + ": "+ homeScore)
            console.log(awayTeam + ": "+ awayScore)
            // debugger;
        }
      })
    }
  })
}


// var mlb = 'http://gd.mlb.com/components/game/mlb/year_'
//   mlb += year
//   mlb += '/month_'
//   mlb += month
//   mlb += '/day_'
//   mlb += day
//   mlb += '/master_scoreboard.json'