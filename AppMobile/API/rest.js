const apiURL = 'http://192.168.1.166:1998'

const rest = {
    // login (data) {
	// 	let myHeaders = new Headers();
	// 	myHeaders.append('Content-Type', 'application/json');
    //     let requestOptions = {
	// 		method: 'POST',
	// 		headers: myHeaders,
	// 		body: JSON.stringify(data)
    //     };
    //     return fetch(apiURL + '/login', requestOptions);
    // },

login(data) {
        let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            fetch(apiURL + '/login', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(data)
            }).then((response) => {resolve(response.json());})
            .catch((err) => reject(err));
        }) 
    },
    
    addUser(data){
        let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            fetch(apiURL + '/user', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(data)
            }).then((response) => {resolve(response);})
            .catch((err) => reject(err));
        }) 

    }
}


export default rest;