import { Model } from "./lib/Model";
import { Attributes } from './lib/Attributes'
import { Eventing } from "./lib/Eventing";
import { Sync } from './lib/Sync'
import { Collection } from "./lib/Collection";

export interface UserProps {
    id?: string;
    name?: string;
    age?: number;
}

const apiUrl = 'http://localhost:3001/users'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps) {
        return new User(
            new Attributes(attrs),
            new Eventing(),
            new Sync(apiUrl)
        )
    }

    static buildUserCollection() {
        return new Collection(
            apiUrl, 
            (json: UserProps) => User.buildUser(json)
        )
    }
}