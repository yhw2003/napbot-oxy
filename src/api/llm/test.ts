import { llmCaller } from "../caller";
import { BaseLLMRequest } from "./type-wrapper/base";
import { LlmReturnSchema } from "./type-wrapper/llm-return";

export async function helloMsg(): Promise<string> {
    const req = new BaseLLMRequest("Hello")
    const args = req.toArgs();
    const res = await llmCaller.post("/chat/completions", args)
    const data = LlmReturnSchema.parse(res.data);
    return data.choices[0].message.content
}