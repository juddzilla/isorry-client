
class Fetch {
    constructor() {
        this.api = document.querySelector("meta[name='api']").getAttribute("content");
    }

    async get(url) {
        return fetch(`${this.api}/${url}`, 
            { 
                credentials: 'include',
            }
        )
        .then(res => res.json())   
        .then(res => [null, res])
        .catch(err => {
            console.log('ERR', err);
            return [err, null];
        });
    }

    async post(url, data) {        
        return fetch(`${this.api}/${url}`, 
            { 
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
            }
        )
        .then(res => res.json())        
        .catch(err => {
            console.log('ERR', err);
            return err;
        });
    }
}

export default new Fetch()