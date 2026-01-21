import { MsgInfo } from "../type-wrapper/msg";

export interface SSEHandle {
    feed(msgInfo: MsgInfo): void
}

export const PrintSSEHandle: SSEHandle = {
    feed: (msgInfo) => {
        console.log(`Recieved msg from: ${msgInfo.sender.nickname}, content: ${msgInfo.message}`)
    }
}