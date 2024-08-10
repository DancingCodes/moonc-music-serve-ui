import request from "@/utils/request";
import { IApiResponse } from "@/types/api";
import { IMusic } from "@/types/music";


export interface IsearchMusicForWYParams {
    name: string;
    pageNo?: number;
    pageSize?: number;
}

interface ISearchMusicForWYResponse {
    total: number;
    list: IMusic[]
}


export const searchMusicForWY = (params: IsearchMusicForWYParams): Promise<IApiResponse<ISearchMusicForWYResponse>> => request.get('/music/searchMusicForWY', { params })


interface ISaveMusicParams {
    id: number;
}
export const saveMusic = (params: ISaveMusicParams): Promise<IApiResponse<boolean>> => request.get('/music/saveMusic', { params })