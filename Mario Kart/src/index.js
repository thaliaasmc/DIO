class Characters {
    name;
    speed;
    maneuverability;
    power;
    points;

    constructor(name, speed, maneuverability, power, points) {
        this.name = name;
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power;
        this.points = points;
    }
}

mario = new Characters('Mario', 4, 3, 2, 0);
bowser = new Characters('Bowser', 5, 2, 5, 0);
peach = new Characters('Peach', 3, 4, 2, 0);
luigi = new Characters('Luigi', 3, 4, 4, 0);
yoshi = new Characters('Yoshi', 2, 4, 3, 0);
donkeyKong = new Characters('Donkey Kong', 2, 2, 5, 0);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function raceTrack() {
    track = Math.floor(Math.random() * 3) + 1;
    if (track == 1) {
        return 'RETA'
    } else if (track == 2) {
        return 'CURVA'
    } else if (track == 3) {
        return 'CONFRONTO'
    }
}

function multiplierRace(track, player01) {
    dice = rollDice()
    if (track == 'RETA') {
        return {
            name: player01.name,
            point: player01.speed,
            dice: dice,
            total: player01.speed + dice,
            type: 'Velocidade'
        }
    } else if (track == 'CURVA') {
        return {
            name: player01.name,
            point: player01.maneuverability,
            dice: dice,
            total: player01.maneuverability + dice,
            type: 'Manobrabilidade'
        }
    } else if (track == 'CONFRONTO') {
        return {
            name: player01.name,
            point: player01.power,
            dice: dice,
            total: player01.power + dice,
            type: 'Confronto'
        }
    } else {
        return 'Não localizado';
    }
}

async function returnDiceValueMessage(player01points, player02points, track) {
    console.log(`${player01points.name} 🎲 rolou um dado de ${track} ${player01points.dice} + ${player01points.point} = ${player01points.total}\n${player02points.name} 🎲 rolou um dado de ${track} ${player02points.dice} + ${player02points.point} = ${player02points.total}`);
}

async function declareWinner(player01, player02) {
    console.log("Resultado final")
    console.log(`${player01.name}: ${player01.points} ponto(s)`)
    console.log(`${player02.name}: ${player02.points} ponto(s)`)
    if (player01.points > player02.points) {
        console.log(`\n${player01.name} venceu a corrida! Parabéns 🏆`);
    } else if (player02.points > player01.points) {
        console.log(`\n${player02.name} venceu a corrida! Parabéns 🏆`);
    } else {
        console.log('A corrida terminou em empate');
    }
}

function race(player01, player02) {
    console.log(`🏁 🚨 Corrida entre ${player01.name} e ${player02.name} começando...\n`);
    for (i = 1; i <= 5; i++) {
        track = raceTrack();
        console.log(`🏁 Rodada ${i}\nBloco: ${track}`);
        if (track == 'CONFRONTO') {
            console.log(`${player01.name} confrontou com ${player02.name} 🥊`);
        }
        pointsplayer1 = multiplierRace(track, player01);
        pointsplayer2 = multiplierRace(track, player02);
        returnDiceValueMessage(pointsplayer1, pointsplayer2, track);

        if (pointsplayer1.total > pointsplayer2.total && track != 'CONFRONTO') {
            console.log(`${player01.name} marcou um ponto!`);
        } else if (pointsplayer2.total > pointsplayer1.total && track != 'CONFRONTO'){
            console.log(`${player02.name} marcou um ponto!`);
        } else if (pointsplayer1.total > pointsplayer2.total && track == 'CONFRONTO' && player02.points > 0) {
            console.log(`${player01.name} venceu o confronto! ${player02.name} perdeu um ponto 🐢`);
        } else if (pointsplayer2.total > pointsplayer1.total && track == 'CONFRONTO' && player01.points > 0) {
            console.log(`${player02.name} venceu o confronto! ${player01.name} perdeu um ponto 🐢`);
        }  else if (pointsplayer1.total > pointsplayer2.total && track == 'CONFRONTO' && player02.points === 0) {
            console.log(`${player01.name} venceu o confronto! ${player02.name} não perde ponto, pois tem zero 🐢`);
        } else if (pointsplayer2.total > pointsplayer1.total && track == 'CONFRONTO' && player01.points === 0) {
            console.log(`${player02.name} venceu o confronto! ${player01.name} não perde ponto, pois tem zero 🐢`);
        } else if (pointsplayer2.total === pointsplayer1.total && track == 'CONFRONTO') {
            console.log('Confronto empatado. Nenhum ponto foi perdido');
        } else (
            console.log('Rodada empatada, ninguém pontua!') // criar funçção
        )

        if (track == 'RETA' || track == 'CURVA') {
            if (pointsplayer1.total > pointsplayer2.total) {
                player01.points = player01.points + 1;
            } else if (pointsplayer2.total > pointsplayer1.total) {
                player02.points = player02.points + 1;
            }
        } else if (track == 'CONFRONTO') {
            if (pointsplayer1.total < pointsplayer2.total && player01.points > 0) {
                player01.points = player01.points - 1;
            } else if (pointsplayer2.total < pointsplayer1.total && player02.points > 0) {
                player02.points = player02.points - 1;
            }
        }
            
        console.log("-------------------------------------------------");
    }
    
    declareWinner(player01, player02)
}

(async function main() {
    race(luigi, bowser);
})();