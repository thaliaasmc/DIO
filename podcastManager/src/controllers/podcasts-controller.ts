import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/listEpisodesService"
import { serviceFilterEpisodes } from "../services/filterEpisodesService";
import { StatusCode } from "../utils/statusCode";
import { ContentType } from "../utils/content";
import { FilterPodcastModel } from "../models/responsePodcast";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {
    const content: FilterPodcastModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {'Content-type': ContentType.JSON});
    response.end(JSON.stringify(content.body))
};

export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) => {

    
    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);
    response.writeHead(content.statusCode, {'Content-type': ContentType.JSON});
    response.end(JSON.stringify(content.body))
};