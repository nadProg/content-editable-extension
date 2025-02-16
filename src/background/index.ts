import {z} from "zod";
import {getIsPageEditable} from "../popup/browser";

type SetIconMessage = {
  type: "setIcon";
  active: boolean;
}

const SetIconMessageSchema = z.object({
  type: z.literal('setIcon'),
  active: z.boolean()
});

const isSetIconMessage = (message: unknown): message is SetIconMessage => {
  return SetIconMessageSchema.safeParse(message).success;
};

const getIconPath = ({active}: { active: boolean }) => active ? 'assets/active-icon.png' : 'assets/icon.png';

const onSetIconMessage = ({active}: { active: boolean }) => {
  return chrome.action.setIcon({path: getIconPath({active})});
};

chrome.tabs.onActivated.addListener(async () => {
  const isActive = await getIsPageEditable();
  await onSetIconMessage({ active: isActive ?? false });
});

chrome.runtime.onMessage.addListener(async (message: unknown) => {
  if (isSetIconMessage(message)) {
    await onSetIconMessage(message);
  }
});
