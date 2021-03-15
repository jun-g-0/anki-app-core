window.app = {
  fetchData: async () => {
    let method = document.getElementById('method').value;
    let resource = document.getElementById('resource').value;
    let pass = document.getElementById('pass').value;
    let reqbody = document.getElementById('reqbody').value;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let myPath = new Request(`http://localhost:3003/api/v1/${resource}${pass}`);
    let myInit =
      method === 'POST' || method === 'PUT'
        ? {
            method: method,
            headers: myHeaders,
            body: reqbody,
            mode: 'no-cors',
          }
        : {
            method: method,
            mode: 'no-cors',
          };
    console.log('myPath:', myPath);
    console.log('myInit:', myInit);

    // let result = await fetch(myPath, myInit);
    let result = await fetch(myPath, myInit).then((d) => {
      console.log(d.status);
      console.log(d);
      return d.json();
    });
    console.log(result);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
  },
  init: () => {
    const trigger = document.getElementById('trigger');
    trigger.addEventListener('click', window.app.fetchData);
  },
};

window.onload = window.app.init;
