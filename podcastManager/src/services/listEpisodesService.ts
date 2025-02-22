import { FilterPodcastModel } from "../models/responsePodcast";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {

    let responseFormart: FilterPodcastModel = {
        statusCode: 0,
        body: []
    } 

    const data = await repositoryPodcast();

    responseFormart = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data
    }
    
    responseFormart.body = data
    
    return responseFormart
}