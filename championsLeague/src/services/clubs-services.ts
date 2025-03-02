import { ClubsModel } from "../models/clubs-models"
import * as clubRepository  from "../repositories/clubs-repository"
import * as HttpResponse from "../utils/http-helper"

export const getClubsService = async() => {
    const data = await clubRepository.findAllClubs();

    let response = null

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response

}

export const getClubByIdService = async (id: number) => {

    const data = await clubRepository.findClubById(id)

    let response = null

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = HttpResponse.noContent()
    }

    return response

}

export const createClubService = async (club: ClubsModel) => {

    let response = null

    if (Object.keys(club).length != 0) {
        response = await clubRepository.insertClub(club)
        response = await HttpResponse.created()

    } else {
        response = await HttpResponse.badRequest({message: "No Data or Incomplete Data"})
        
    }
    return  response
}

export const deleteClubService = async (id: number) => {
    let response = null

    if (clubRepository.database.findIndex(club => club.id === id) === -1) {
        response = await HttpResponse.badRequest({message: "Club Not Found"})
    } else {
        await clubRepository.deleteOneClub(id)
        response = HttpResponse.ok({message: "Deleted"})
    }

    return response
}