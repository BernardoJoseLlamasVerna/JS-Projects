document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object:
  const xhr = new XMLHttpRequest();

  // OPEN: we specify the type of request:
  xhr.open('GET', 'data.txt', true);

  // Optional: used for spinners/loaders
  xhr.onprogress = function() {
    // to get to know the readyState Values:
    console.log('READYSTATE', xhr.readyState);
  }
  
  xhr.onload = function () {
    // to get to know the readyState Values:
    console.log('READYSTATE', xhr.readyState);

    if(this.status === 200) {
      console.log(this.responseText);
    }
  }

  /*xhr.onreadystatechange = function () {
    // to get to know the readyState Values:
    console.log('READYSTATE', xhr.readyState);

    if(this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }*/

  xhr.send();
}