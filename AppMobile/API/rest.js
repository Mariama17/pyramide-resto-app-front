const apiURL = 'http://yvandev.fr:1998';

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
        body: JSON.stringify(data),
      })
        .then(response => {
          resolve(response.json());
        })
        .catch(err => reject(err));
    });
  },

  addUser(data) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      fetch(apiURL + '/user', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
      })
        .then(response => {
          resolve(response);
        })
        .catch(err => reject(err));
    });
  },

  getFoodOfCurrentDay() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Authorization', token);
    return new Promise((resolve, reject) => {
      fetch(apiURL + '/food/day', {
        method: 'GET',
        headers: myHeaders,
      })
        .then(response => {
          resolve(response.json());
        })
        .catch(err => reject(err));
    });
  },

  getFoodOfCurrentWeek() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Authorization', token);
    return new Promise((resolve, reject) => {
      fetch(apiURL + '/food/week', {
        method: 'GET',
        headers: myHeaders,
      })
        .then(response => {
          resolve(response.json());
        })
        .catch(err => reject(err));
    });
  },

  getImagesFood(idFood) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Authorization', token);
    return new Promise((resolve, reject) => {
      fetch(apiURL + '/imageFood/id/' + idFood, {
        method: 'GET',
        headers: myHeaders,
      })
        .then(response => {
          resolve(response.json());
        })
        .catch(err => reject(err));
    });
  },

  getUser(token) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);
    return new Promise((resolve, reject) => {
      fetch(apiURL + '/user/token/' + token, {
        method: 'GET',
        headers: myHeaders,
      })
        .then(response => {
          resolve(response.json());
        })
        .catch(err => reject(err));
    });
  },
};

export default rest;
