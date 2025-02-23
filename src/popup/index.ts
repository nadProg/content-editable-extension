import { createSetIconMessage } from '../messages/set-icon-message';
import { getIsPageEditable, sendRuntimeMessage, switchPageEditable } from '../browser';
import './index.css';

const HIDDEN = 'hidden';
const TRIGGER_ON = 'trigger--on';
const TRIGGER_OFF = 'trigger--off';

const triggerNode = document.querySelector<HTMLButtonElement>('.trigger');
const fallbackNode = document.querySelector('.fallback');

if (!triggerNode) {
  throw new Error('Trigger node not found');
}

if (!fallbackNode) {
  throw new Error('Fallback node not found');
}

const setUpdatingState = () => {
  triggerNode.disabled = true;
};

const removeUpdatingState = () => {
  triggerNode.disabled = false;
};

const setTriggerView = () => {
  triggerNode.classList.remove(HIDDEN);
  fallbackNode.classList.add(HIDDEN);
};

const setTriggerState = ({ on }: { on: boolean | undefined }) => {
  triggerNode.classList.remove(TRIGGER_ON, TRIGGER_OFF);
  triggerNode.classList.add(on ? TRIGGER_ON : TRIGGER_OFF);
};

const setFallbackView = () => {
  triggerNode.classList.add(HIDDEN);
  fallbackNode.classList.remove(HIDDEN);
};

const updateView = async () => {
  try {
    setUpdatingState();

    const isPageEditable = await getIsPageEditable();

    setTriggerView();
    setTriggerState({ on: isPageEditable });
    await sendRuntimeMessage(createSetIconMessage({ active: isPageEditable }));
  } catch {
    setFallbackView();
  } finally {
    removeUpdatingState();
  }
};

const onTriggerClick = async () => {
  await switchPageEditable();
  await updateView();
};

triggerNode.addEventListener('click', onTriggerClick);

updateView();
