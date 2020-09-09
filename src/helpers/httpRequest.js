export default class httpRequest {
    constructor(url, requestOptions = {}) {
        this.url = url;
        this.requestOptions = { 
            headers: {
                'Content-Type': 'application/json'
            },
            ...requestOptions
         };
    }

    async get() {
        return this.startHttpCall(this.url, this.requestOptions);
    }

    async post(payload = {}) {
        this.requestOptions.method = 'POST';
        this.requestOptions.body = JSON.stringify(payload);

        console.log('Payload of POST request:', payload);
        return this.startHttpCall(this.url, this.requestOptions);
    }

    async patch(payload = {}) {
        this.requestOptions.method = 'PATCH';
        this.requestOptions.body = JSON.stringify(payload);

        console.log('Payload of PATCH request:', payload);
        return this.startHttpCall(this.url, this.requestOptions);
    }

    async delete(payload = {}) {
        this.requestOptions.method = 'DELETE';
        this.requestOptions.body = JSON.stringify(payload);

        console.log('Payload of DELETE request:', payload);
        return this.startHttpCall(this.url, this.requestOptions);
    }

    async startHttpCall(url, requestOptions) {
        return new Promise(async(resolve, reject) => {
            fetch(url, requestOptions)
                .then(async (res) => {
                    const responseJSON = await res.json();

                    if(res.status !== 200) {
                        throw new Error(responseJSON.errorType);
                    }

                    resolve(responseJSON);
                })
                .catch(async (error) => {
                    console.log(error);

                    reject(error);
                });
        });
    }
}