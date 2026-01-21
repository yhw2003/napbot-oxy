import { apiCaller } from "./caller";
import { ApiBase, ApiBaseSchema } from "./type-wrapper/base";

export async function getStrangerInfo(userId: number): Promise<ApiBase> {
    let data =await apiCaller.post("/get_stranger_info", {
        user_id: userId
    });
    let data_wrap = ApiBaseSchema.parse(data.data);
    return data_wrap;
}