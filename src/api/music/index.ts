import request from "@/utils/request";
import { IApiResponse } from "@/types/api";
import { IMusic } from "@/types/music";


interface ISearchMusicParams {
    name: string;
    offset?: number;
    limit?: number;
}

interface ISearchMusicResponse {
    total: number;
    list: IMusic[]
}


export const searchMusic = (params: ISearchMusicParams): Promise<IApiResponse<ISearchMusicResponse>> => request.get('/music/searchMusic', { params })


interface ISaveMusicParams {
    id: number;
}
export const saveMusic = (params: ISaveMusicParams): Promise<IApiResponse<boolean>> => request.get('/music/saveMusic', { params })