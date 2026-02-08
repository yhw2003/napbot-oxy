import * as z from "zod";

export const LlmChoiceSchema = z.object({
    index: z.int(),
    message: z.object({
        role: z.string(),
        content: z.string(),
    })
})

export const LlmReturnSchema = z.object({
    id: z.string(),
    object: z.string(),
    created: z.int(),
    choices: z.array(LlmChoiceSchema)
})

type LlmReturn = z.infer<typeof LlmReturnSchema>