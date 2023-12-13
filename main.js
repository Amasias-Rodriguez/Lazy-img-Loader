const imgLoad = url =>
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = () => {
            if (request.statuus === 200) {
                resolve(request, response);
            } else {
                reject(Error(`Image don't load succesfully [Error Code: ${request, statusText}]`))
            }
        };
        request.onerror = () => {
            reject(Error('There was a network error'))
        };
        request.send();
    });

const imageGoesHere = document.getElementById('imageGoesHere');
const myImage = new Image();

imgLoad('large-image.png')
    .then(response => {
        const imageURL = window.URL.createObjectURL(response);
        myImage.src = imageURL;
        imageGoesHere.appendChild(myImage);
        alert('Image loaded');
    })
    .catch(error => alert(error));