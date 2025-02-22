import { FilterPodcastModel } from "../models/responsePodcast";
import { repositoryPodcast } from "../repositories/podcastsRepository"
import { StatusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {

    let responseFormart: FilterPodcastModel = {
        statusCode: 0,
        body: []
    } 
    const queryString = podcastName?.split("?p=")[1] ?? ""

    const data = await repositoryPodcast(queryString);

    responseFormart = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data
    }

    return responseFormart
}