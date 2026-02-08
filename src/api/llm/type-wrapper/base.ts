import { model } from "@/const"

export class LLMArgs {
    model: string
    messages: {
        role: string,
        content: string,
    }[]
    constructor(msg: {
        role: string,
        content: string,
    }[]) {
        this.messages = msg
        this.model = model
    }
}

export class BaseLLMRequest {
    content: string;
    constructor(content: string) {
        this.content = content
    }
    toArgs(): LLMArgs {
        return new LLMArgs([{role: "user", content: this.content}])
    }
}