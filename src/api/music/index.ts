import request from "@/utils/request";
import { IApiResponse } from "@/types/api";
import { IMusic } from "@/types/music";


export interface IsearchMusicByWYParams {
    name: string;
    pageNo?: number;
    pageSize?: number;
}

interface ISearchMusicByWYResponse {
    total: number;
    list: IMusic[]
}


export const searchMusicByWY = (params: IsearchMusicByWYParams): Promise<IApiResponse<ISearchMusicByWYResponse>> => request.get('/music/searchMusicByWY', { params })


interface ISaveMusicParams {
    id: number;
}
export const saveMusic = (params: ISaveMusicParams): Promise<IApiResponse<boolean>> => request.get('/music/saveMusic', { params })