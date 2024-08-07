import request from "@/utils/request";

export const searchMusic = params => request.post('/music/searchMusic', params)
