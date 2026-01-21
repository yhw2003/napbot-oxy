import { getStrangerInfo } from "./api/get_stranger_info";

const data = await getStrangerInfo(321612813)

console.log(data.status)
