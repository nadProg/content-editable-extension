import browser from 'webextension-polyfill';

const getActiveTab = async () => {
  const tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs[0];
};

const getPageEditableStateFunc = () => {
  return document.body.contentEditable === 'true';
};

export const getPageEditableState = async (): Promise<boolean | undefined> => {
  const activeTab = await getActiveTab();

  if (!activeTab.id) {
    return;
  }

  const [{result}] = await browser.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: getPageEditableStateFunc,
  });
  return !!result;
};

const switchPageEditableFunc = () => {
  const currentContentEditable = document.body.contentEditable === 'true';
  document.body.contentEditable = currentContentEditable ? 'inherit' : 'true';
};

export const switchPageEditable = async (): Promise<void> => {
  const activeTab = await getActiveTab();

  if (!activeTab.id) {
    return;
  }

  await browser.scripting.executeScript({
    target: {
      tabId: activeTab.id,
    },
    func: switchPageEditableFunc,
  });
};



