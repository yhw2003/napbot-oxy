import { apiCaller } from "./api/caller";
import { createParser, type EventSourceMessage, type ParseError } from "eventsource-parser";
import type { AxiosResponse } from "axios";
import type { Readable } from "node:stream";
import { MsgInfoSchema } from "./api/type-wrapper/msg";
import { SSEHandle } from "./api/handle/sse-handle";

export async function startSSEListen(handle: SSEHandle): Promise<void> {
  console.log("Connecting SSE via POST /_events ...");

  const res: AxiosResponse<Readable> = await apiCaller.get("/_events", {
    responseType: "stream",
    timeout: 0, // SSE 长连接：必须禁用超时
    headers: {
      Accept: "text/event-stream",
    },
  });

  if (res.status !== 200) {
    throw new Error(`SSE connect failed: ${res.status} ${res.statusText}`);
  }

  const stream = res.data;

  const parser = createParser({
    onEvent(event: EventSourceMessage) {
        try {
            let dw = MsgInfoSchema.parse(JSON.parse(event.data));
            handle.feed(dw)
        } catch(e: any) {
            console.log(e)
        }
    },

    onRetry(retryInterval: number) {
      // 服务端发送 retry: xxx 时触发
      console.log("server retry interval (ms):", retryInterval);
    },

    onError(error: ParseError) {
      // 解析出错（例如无效字段/无效 retry）
      console.error("SSE parse error:", error);
    },
  });

  stream.on("data", (chunk: Buffer) => {
    console.log("sse recved")
    parser.feed(chunk.toString("utf8"));
  });

  stream.on("end", () => {
    console.log("SSE stream ended by server");
    process.exit(0);
  });

  stream.on("error", (err) => {
    console.error("SSE stream error:", err);
    process.exit(1);
  });

  console.log("SSE connected.");
}
