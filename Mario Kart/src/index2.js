const player01 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
}

const player02 = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
}

const player03 = {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0
}

const player04 = {
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}

const player05 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
}

const player06 = {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
    // Math.flor = arrendondar para número inteiro;
    // Math.random = sortear número aleatório de 0 a 1
    // * 6 = transforma de 0 a 5
    // + 1 inclui 1 no intervalo, removendo o zero e incluindo o 6
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = 'RETA';          
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
            result = 'CONFRONTO'
            break;
    }

    return result;
}

async function logRoll(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (i = 1; i <= 5; i++) {
        console.log(`🏁 Rodada ${i}`);
        let block = await getRandomBlock();
        console.log (`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();
    
    let totalSkill1 = 0;
    let totalSkill2 = 0;

    if (block === 'RETA') {
        totalSkill1 = diceResult1 + character1.velocidade;
        totalSkill2 = diceResult2 + character2.velocidade;

        await logRoll(character1.nome, block, diceResult1, character1.velocidade);
        await logRoll(character2.nome, block, diceResult2, character2.velocidade);

    } if (block === 'CURVA') {
        totalSkill1 = diceResult1 + character1.manobrabilidade;
        totalSkill2 = diceResult2 + character2.manobrabilidade;

        await logRoll(character1.nome, block, diceResult1, character1.manobrabilidade);
        await logRoll(character2.nome, block, diceResult2, character2.manobrabilidade);

    } if (block === 'CONFRONTO') {
        let powerResult1 = diceResult1 + character1.poder;
        let powerResult2 = diceResult2 + character2.poder;

        console.log(`${character1.nome} confrontou com ${character2.nome} 🥊`);

        await logRoll(character1.nome, block, diceResult1, character1.poder); 
        await logRoll(character2.nome, block, diceResult2, character2.poder);

        if (powerResult1 > powerResult2 && character2.pontos > 0) {
            character2.pontos--;
            console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu um ponto 🐢`)
        }

        if (powerResult2 > powerResult1 && character2.pontos > 0) {
            character1.pontos--;
            console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu um ponto 🐢`)
        }

        character2.pontos -= powerResult1 > powerResult2 && character2.pontos > 0 ? 1 : 0; // if ternário - mesma coisa que o de baixo

        character1.pontos -= powerResult2 > powerResult1 && character1.pontos > 0 ? 1 : 0;

        console.log(powerResult2 === powerResult1 ? "Confronto empatado. Nenhum ponto foi perdido" : "");
        }
        
        if (totalSkill1 > totalSkill2) {
            console.log(`${character1.nome} marcou um ponto!`)
            character1.pontos =  character1.pontos + 1;
        }  else if (totalSkill2 > totalSkill1) {
            console.log(`${character2.nome} marcou um ponto!`)
            character2.pontos =  character2.pontos + 1;
        }
        console.log("-------------------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final")
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`)
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`)
    if (character1.pontos > character2.pontos) {
        console.log(`\n${character1.nome} venceu a corrida! Parabéns 🏆`);
    } else if (character2.pontos > character1.pontos) {
        console.log(`\n${character2.nome} venceu a corrida! Parabéns 🏆`);
    } else {
        console.log('A corrida terminou em empate');
    }
}

(async function main() {
    console.log(`🏁 🚨 Corrida entre ${player01.nome} e ${player02.nome} começando...\n`);
    await playRaceEngine(player01, player02); 
    declareWinner(player01, player02)// await = esperar essa função, antes de rodar as outras.
})();