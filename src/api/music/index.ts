import request from "@/utils/request";

interface ISearchMusicParams {
    name: string;
    offset?: number;
    limit?: number;
}

export const searchMusic = (params: ISearchMusicParams) => request.get('/music/searchMusic', { params })


interface ISaveMusicParams {
    id: string;
}
export const saveMusic = (params: ISaveMusicParams) => request.get('/music/saveMusic', { params })