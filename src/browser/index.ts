const getActiveTab = async () => {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs.at(0);
};

const getIsPageEditableInjection = () => {
  return document.body.contentEditable === 'true';
};

export const getIsPageEditable = async (): Promise<boolean | undefined> => {
  const activeTab = await getActiveTab();

  if (!activeTab?.id) {
    return;
  }

  const [{ result }] = await chrome.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: getIsPageEditableInjection,
  });

  return !!result;
};

const switchPageEditableInjection = () => {
  const currentContentEditable = document.body.contentEditable === 'true';
  document.body.contentEditable = currentContentEditable ? 'inherit' : 'true';
};

export const switchPageEditable = async (): Promise<void> => {
  const activeTab = await getActiveTab();

  if (!activeTab?.id) {
    return;
  }

  await chrome.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: switchPageEditableInjection,
  });
};

export const sendRuntimeMessage = <M>(message: M) => {
  return chrome.runtime.sendMessage(message);
};

export const setExtensionIcon = ({ path }: { path: Record<number, string> }) => {
  return chrome.action.setIcon({ path });
};
