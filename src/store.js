class Store {
    constructor() {
        this.apology = null;
        this.uuid = null;
    }

    set({ uuid, apology }) {
        this.apology = apology;
        this.uuid = uuid;
    }

    get() {
        return {
            apology: this.apology,
            uuid: this.uuid,
        }
    }

    reset() {
        this.apology = null;
        this.uuid = null;
    }
}

export default new Store();