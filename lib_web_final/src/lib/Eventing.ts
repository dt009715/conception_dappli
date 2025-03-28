export type CallbackFn = () => void

export class Eventing {
    events: { [key: string] : CallbackFn[] } = {};

    on = (eventName: string, callback: CallbackFn) => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string) => {
        const handlers = this.events[eventName];
        
        if(!handlers || !handlers.length) return;

        handlers.forEach(callback => {
            callback();
        })
    }
}