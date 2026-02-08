
import { PrintSSEHandle } from "./api/handle/sse-handle";
import { helloMsg } from "./api/llm/test";
import { startSSEListen } from "./start-sse";


// console.log(await helloMsg());
console.log("Hello napbox-oxy")
startSSEListen(PrintSSEHandle)