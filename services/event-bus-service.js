export const eventBus = new Vue()

export const SHOW_MSG = 'show-msg';

export function showMsg(txt, type='success', link) {
    console.log('from eventBus showMsg(msg)');
    eventBus.$emit(SHOW_MSG, { txt, type , link})
}