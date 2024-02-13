class Store {
    constructor() {
        this.createdAt = null;
        this.reason = null;
        this.message = null;
        this.model = null;
        this.uuid = null;
        this.loggedIn = false;
    }

    get() {
        return {
            createdAt: this.createdAt,
            message: this.message,
            model: this.model,
            reason: this.reason,
            uuid: this.uuid,
        }
    }
    
    reset() {
        this.createdAt = null;
        this.message = null;
        this.model = null;
        this.reason = null;
        this.uuid = null;
    }


    set({ message, createdAt, model, reason, uuid }) {
        this.createdAt = createdAt;
        this.message = message;
        this.model = model;
        this.reason = reason;
        this.uuid = uuid;
    }
}

const store = new Store();

export default store;