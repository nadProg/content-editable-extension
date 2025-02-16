import {z} from "zod";

export type SetIconMessage = {
  type: "set-icon";
  active: boolean | undefined;
}

const SetIconMessageSchema = z.object({
  type: z.literal('set-icon'),
  active: z.boolean().optional(),
});

export const isSetIconMessage = (message: unknown): message is SetIconMessage => {
  return SetIconMessageSchema.safeParse(message).success;
};

export const createSetIconMessage = ({active}: { active: boolean | undefined }): SetIconMessage => ({
  type: 'set-icon',
  active,
});
