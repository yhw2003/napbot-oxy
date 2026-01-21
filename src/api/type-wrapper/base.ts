import { z } from "zod";

export const ApiBaseSchema = z.object({
    status: z.string(),
    retcode: z.int(),
    data: z.any()
})

export type ApiBase = z.infer<typeof ApiBaseSchema>;

