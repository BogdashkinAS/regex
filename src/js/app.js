export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        const regex = /^(?!.*[-_]{2})(?!.*\d{4})[a-zA-Z0-9_-]+$/;
        if (!regex.test(this.username)) {
            return false;
        }
        return true;
    }
}
