import User from "./User";

export default class UserList {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(new User(user));
    }

    updateUser(id, user) {
        var userToUpdate = this.users.find( (user) => user.id === id );
        userToUpdate.username = user.username;
        userToUpdate.password = user.password;
    }

    getUserByUsername(username) {
        return this.users.find( (user) => user.username === username );
    }
}