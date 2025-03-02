import { ClubsModel } from "../models/clubs-models";
import fs from "fs/promises" // para leitura de JSON se quiser


export const database: ClubsModel[] = [
    {"id": 1, "name": "Manchester City"},
    {"id": 2, "name": "Arsenal"},
    {"id": 3, "name": "Liverpool"},
    {"id": 4, "name": "Aston Villa"},
    {"id": 5, "name": "Real Madrid"},
    {"id": 6, "name": "Barcelona"},
    {"id": 7, "name": "Girona"},
    {"id": 8, "name": "Atlético de Madrid"},
    {"id": 9, "name": "Internazionale"},
    {"id": 10, "name": "AC Milan"},
    {"id": 11, "name": "Juventus"},
    {"id": 12, "name": "Bologna"},
    {"id": 13, "name": "Atalanta"},
    {"id": 14, "name": "Paris Saint-Germain"},
    {"id": 15, "name": "Brest"},
    {"id": 16, "name": "Monaco"},
    {"id": 17, "name": "Lille"},
    {"id": 18, "name": "Sporting"},
    {"id": 19, "name": "Benfica"},
    {"id": 20, "name": "PSV Eindhoven"},
    {"id": 21, "name": "Feyenoord"},
    {"id": 22, "name": "Sturm Graz"},
    {"id": 23, "name": "RB Salzburg"},
    {"id": 24, "name": "Celtic"},
    {"id": 25, "name": "Club Brugge"},
    {"id": 26, "name": "Shakhtar Donetsk"},
    {"id": 27, "name": "Estrela Vermelha"},
    {"id": 28, "name": "Young Boys"},
    {"id": 29, "name": "Sparta Praga"},
    {"id": 30, "name": "Dínamo Zagreb"},
    {"id": 31, "name": "Slovan Bratislava"},
    {"id": 32, "name": "Bayer Leverkusen"},
    {"id": 33, "name": "Stuttgart"},
    {"id": 34, "name": "Bayern de Munique"},
    {"id": 35, "name": "RB Leipzig"},
    {"id": 36, "name": "Borussia Dortmund"}
];


export const findAllClubs = async (): Promise<ClubsModel[]> => {
    /*const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubsModel[] = JSON.parse(data)
    return clubs -- Opcional incluir leitura de JSON se tiver arquivo a parte*/
    return database
}

export const findClubById = async (id: number): Promise<ClubsModel | undefined> => {
    return database.find( club => club.id === id)
}

export const insertClub = async (club: ClubsModel) => {
    database.push(club)
}

export const deleteOneClub = async (id: number) => {
    const index = database.findIndex(club => club.id === id)

    if (index !== -1) {
        database.splice(index, 1)
    }
}