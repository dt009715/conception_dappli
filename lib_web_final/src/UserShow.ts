import { View } from "./lib/View";
import { User, UserProps } from "./User";

export class UserDetailView extends View<User, UserProps> {
    template(): string {
        return `
            <div>
                <h1>User Details</h1>
                <h3>Nom: ${this.model.get('name')}</h3>
                <h3>Age: ${this.model.get('age')}</h3>
            </div>
        `
    }

    eventsMap(): { [key: string]: () => void; } {
        return {};
    }
}