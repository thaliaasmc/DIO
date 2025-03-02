import { response } from "express";
import { PlayersModel } from "../models/player-model";
import * as playerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"
import { StatisticsModels } from "../models/statistics-model";

export const getPlayerService = async() => {
    const data = await playerRepository.findAllPlayers();

    let response = null

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response

}

export const getPlayerByIdService = async (id: number) => {

    const data = await playerRepository.findPlayerById(id)

    let response = null

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = HttpResponse.noContent()
    }

    return response

}

export const createPlayerService = async (player: PlayersModel) => {

    let response = null

    if (Object.keys(player).length != 0) {
        response = await playerRepository.insertPlayer(player)
        response = await HttpResponse.created()

    } else {
        response = await HttpResponse.badRequest({message: "No Data or Incomplete Data"})
        
    }
    return  response
}

export const deletePlayerService = async (id: number) => {
    let response = null

    if (playerRepository.database.findIndex(player => player.id === id) === -1) {
        response = await HttpResponse.badRequest({message: "Player Not Found"})
    } else {
        await playerRepository.deleteOnePlayer(id)
        response = HttpResponse.ok({message: "Deleted"})
    }

    return response
}

export const updatePlayerService = async(id: number, statistics: StatisticsModels) => {
    const data = await playerRepository.findAndModifyOnePlayer(id, statistics)
    let response = null

    if (!data || Object.keys(data).length === 0 ) {
        response = await HttpResponse.badRequest({message: "Player Not Found"})    
    } else {
        response = await HttpResponse.ok({message: "Player updated"})
    }

    return response
}