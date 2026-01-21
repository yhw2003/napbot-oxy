
import { PrintSSEHandle } from "./api/handle/sse-handle";
import { startSSEListen } from "./start-sse";

console.log("Hello napbox-oxy")
startSSEListen(PrintSSEHandle)