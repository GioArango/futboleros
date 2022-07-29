
export const sortPlayers = ( arrPlayers ) => {
    
    arrPlayers.map( (player) => {
        if(player.statistics[0].games.position === 'Goalkeeper'){
            player.sort = 1;
        }
        if(player.statistics[0].games.position === 'Defender'){
            player.sort = 2;
        }
        if(player.statistics[0].games.position === 'Midfielder'){
            player.sort = 3;
        }
        if(player.statistics[0].games.position === 'Attacker'){
            player.sort = 4;
        }
    });

    arrPlayers.sort(function(a, b){
        if(a.sort < b.sort) { return -1; }
        if(a.sort > b.sort) { return 1; }
        return 0;
    });

    return arrPlayers;
}