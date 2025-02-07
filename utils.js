const getActiveTab = async () => {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs[0];
};

const getPageEditableStateFunc = () => {
  return document.body.contentEditable === 'true';
};

export const getPageEditableState = async () => {
  const activeTab = await getActiveTab();
  const [{result}] = await chrome.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: getPageEditableStateFunc,
  });
  return result;
};

const switchPageEditableFunc = () => {
  const currentContentEditable = document.body.contentEditable === 'true';
  document.body.contentEditable = currentContentEditable ? 'inherit' : 'true';
};

export const switchPageEditable = async () => {
  const activeTab = await getActiveTab();
  await chrome.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: switchPageEditableFunc,
  });
};



