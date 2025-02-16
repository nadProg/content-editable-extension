import {isSetIconMessage} from "../messages/set-icon-message";
import {getIsPageEditable, setExtensionIcon as setExtensionIconByPath} from "../browser";
import {getIconPath} from "./icon";

const setExtensionIcon = ({active}: { active: boolean | undefined }) => {
  return setExtensionIconByPath({path: getIconPath({active: active})})
};

const onTabActivated = async () => {
  const active = await getIsPageEditable().catch(() => false);
  await setExtensionIcon({active});
};

const onSetIconMessage = async (message: unknown) => {
  if (isSetIconMessage(message)) {
    await setExtensionIcon(message);
  }
}

chrome.tabs.onActivated.addListener(onTabActivated);

chrome.runtime.onMessage.addListener(onSetIconMessage);
