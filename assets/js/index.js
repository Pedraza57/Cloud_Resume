//JavaScript Code (Code Resume)
// Counter for views 
// Counter for views 
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://kdtlkyhmajd2sqe4xqjksdsjqu0qmykh.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
