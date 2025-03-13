const randomNumber = new Promise((resolve, reject) => {
  const url = 'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
  let request = new XMLHttpRequest();

  request.open('GET', url);
  request.onload = function() {
     if (request.status == '200') {
        resolve(request.response);
     } else {
        reject(Error(request.statusText)); 
     }
  };

  request.onerror = function() {
     reject(Error('Error fetching data.'));
  };

  request.send();
});

randomNumber
.then((res) => {
  console.log("Success");
  console.log("Random number: ", res);
})
.catch((err) => {
  console.log("Error: ", err.message);
})