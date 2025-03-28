import { View } from "./lib/View";
import { User, UserProps } from "./User";
import { UserFormView } from "./UserForm";
import { UserDetailView } from "./UserShow";

export class UserEditView extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void; } {
        return {}
    }

    regionsMap(): { [key: string]: string; } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }

    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
    }

    attachSubViews(): void {
        new UserFormView(this.regions.userForm, this.model).render()
        new UserDetailView(this.regions.userShow, this.model).render()
    }
}