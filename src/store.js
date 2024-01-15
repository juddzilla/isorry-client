class Store {
    constructor() {
        this.apology = null;
        this.uuid = null;
        this.loggedIn = false;
    }

    authed() {
        return this.loggedIn;
    }

    get() {
        return {
            apology: this.apology,
            uuid: this.uuid,
        }
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    reset() {
        this.apology = null;
        this.uuid = null;
    }


    set({ uuid, apology }) {
        this.apology = apology;
        this.uuid = uuid;
    }
}

export default new Store();