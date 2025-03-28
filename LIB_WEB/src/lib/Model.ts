import { HasId, IModelAttributes, IModelEvents, IModelSync } from "./interfaces";

export abstract class Model<P extends HasId> {
    constructor(
        private attributes: IModelAttributes<P>,
        private events: IModelEvents,
        private sync: IModelSync<P>
    ) {}

    get get() {
        return this.attributes.get
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    set(update: P) {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch() {
        const id = this.get('id');
        if(!id) throw new Error("Cannot fetch without ID");
        
        this.sync
                .fetch(id)
                .then(response => {
                    this.set(response.data)
                })
    }

    save() {
        this.sync.save(this.attributes.getAll())
                .then(response => {
                    this.trigger('save')
                })
                .catch(() => {
                    this.trigger('error')
                })
    }
}