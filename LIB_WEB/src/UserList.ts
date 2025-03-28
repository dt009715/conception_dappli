import { Collection } from "./lib/Collection";
import { View } from "./lib/View";
import { User, UserProps } from "./User";

export class UserListView extends View<User, UserProps> {
  collection: Collection<User, UserProps>;
  selectedUserId: string | null = null;

  constructor(parent: Element, user: User) {
    super(parent, user);
    this.collection = User.buildUserCollection();
    this.initCollection();
  }

  initCollection(): void {}

  eventsMap(): { [key: string]: () => void } {}

  onUserSelect = (): void => {};

  template(): string {}

  renderUserOptions(): string {}
}
