import {getPageEditableState, switchPageEditable} from './utils';

const triggerNode = document.querySelector('.trigger');

if (!triggerNode) {
    throw new Error('Trigger node not found');
}

const updateTrigger = async () => {
    const pageEditableState = await getPageEditableState();
    triggerNode.classList.remove('trigger--on', 'trigger--off');
    triggerNode.classList.add(pageEditableState ? 'trigger--on' : 'trigger--off');
};

const onTriggerClick = async () => {
    await switchPageEditable();
    await updateTrigger();
};

triggerNode.addEventListener('click', onTriggerClick);

updateTrigger();
