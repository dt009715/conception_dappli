import { User } from "./User";
import { UserEditView } from "./UserEdit";
import { UserFormView } from "./UserForm";

const root = document.getElementById('root');
const userEdit = new UserEditView(
    root!,
    User.buildUser({name: "Jane Doe", age: 34})
);

userEdit.render();
console.log(userEdit);
