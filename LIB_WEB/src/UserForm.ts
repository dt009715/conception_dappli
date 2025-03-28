import { View } from './lib/View';
import { User, UserProps } from './User';

export class UserFormView extends View<User, UserProps> {

    template() {
        return `
            <div>
                <h1>User Form</h1>
                <label>Nom</label>
                <input/>
                <button class="set-name">Set Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save">Save</button>
            </div>
        `
    }

    eventsMap() : { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetRandomAge,
            'click:.set-name': this.onSetName,
            'click:.save': this.onSaveClick
        }
    }

    onSaveClick = () => {
        this.model.save()
    }

    onSetRandomAge = () => {
        this.model.set({age: Math.floor(Math.random() * 99 + 1)})
    }

    onSetName = () => {
        const input = this.parent.querySelector('input');
        if(input) {
            this.model.set({name: input.value});
        }
    }
}