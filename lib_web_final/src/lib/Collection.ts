import axios from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, P> {
    models: T[] = [];
    events = new Eventing();

    constructor(
        private readonly apiUrl: string,
        private deserialize: (json: P) => T
    ) {}

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    fetch() {
        axios.get(this.apiUrl)
            .then(response => {
                response.data.forEach((props: P) => {
                    const model = this.deserialize(props);
                    this.models.push(model);
                })
                this.trigger('change');
            })
    }
}