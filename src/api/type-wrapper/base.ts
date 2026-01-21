import * as z from "zod";

/**
 * 流式返回标记
 */
export const StreamFlagSchema = z.enum([
    "normal-action",
    "stream-action",
]);
export type Stream = z.infer<typeof StreamFlagSchema>;

/**
 * Api返回值的基础类
 */
export const ApiBaseSchema = z.object({
    "data": z.record(z.string(), z.any()),
    "echo": z.union([z.null(), z.string()]).optional(),
    "message": z.string(),
    "retcode": z.number(),
    "status": z.string(),
    /** 流式返回标记 */
    "stream": StreamFlagSchema,
    "wording": z.union([z.null(), z.string()]).optional(),
});z.any()


export type ApiBase = z.infer<typeof ApiBaseSchema>;
