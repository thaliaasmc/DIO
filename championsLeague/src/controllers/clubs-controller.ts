import { Request, Response } from "express"
import * as service from "../services/clubs-services"

export const getClubs = async (req: Request, res: Response) => {
    const response = await service.getClubsService()
    res.status(response.statusCode).json(response.body)
}

export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getClubByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postClub = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await service.createClubService(bodyValue);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deleteClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.deleteClubService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

