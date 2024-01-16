
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
        .then(async (res) => {
            console.log('res.s', res.status);
            if ([400, 401, 403, 404, 420].includes(res.status)) {
                return [{ error: 'Not Authorized', statusCode: res.status }, null];
            }
            return [null, await res.json()];
        })   
        .catch(err => {
            console.log('FETCH GET ERR', err);
            return [{ error: err }, null];
        });
    }

    async post(url, data) {        
        function getCSRFToken() {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    if (cookie.substring(0, 10) == ('csrftoken' + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(10));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        return fetch(`${this.api}/${url}`, 
            { 
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': getCSRFToken(document.cookie),
                },
                method: 'POST',
            }
        )
        .then(res => res.json())        
        .then(res => [null, res])
        .catch(err => {
            console.log('FETCH POST ERR', err);
            return [err, null];
        });
    }
}

export default new Fetch()