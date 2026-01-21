import * as z from "zod";


export const GroupMemberRoleSchema = z.enum([
    "admin",
    "member",
    "owner",
]);
export type GroupMemberRole = z.infer<typeof GroupMemberRoleSchema>;

export const UserSexSchema = z.enum([
    "female",
    "male",
    "unknown",
]);
export type UserSex = z.infer<typeof UserSexSchema>;

export const SenderSchema = z.object({
    "age": z.union([z.number(), z.null()]).optional(),
    "card": z.union([z.null(), z.string()]).optional(),
    "level": z.union([z.null(), z.string()]).optional(),
    "nickname": z.string(),
    "role": z.union([GroupMemberRoleSchema, z.null()]).optional(),
    "sex": z.union([UserSexSchema, z.null()]).optional(),
    "user_id": z.number(),
});
export type Sender = z.infer<typeof SenderSchema>;

export const MsgInfoSchema = z.object({
    "font": z.number(),
    "group_id": z.union([z.number(), z.null()]).optional(),
    "message": z.string(),
    "message_format": z.string(),
    "message_id": z.number(),
    "message_seq": z.number(),
    "message_type": z.string(),
    "post_type": z.string(),
    "raw_message": z.string(),
    "real_id": z.number(),
    "real_seq": z.string(),
    "self_id": z.number(),
    "sender": SenderSchema,
    "sub_type": z.string(),
    "time": z.number(),
    "user_id": z.number(),
});
export type MsgInfo = z.infer<typeof MsgInfoSchema>;
