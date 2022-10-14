import {API_KEY} from "./config.js";

var inputField = document.querySelector("#input-field");
var translateBtn = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://google-translate1.p.rapidapi.com/language/translate/v2";

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something's wrong with the server! Please try again after some time.");
}

function clickHandler() {
    var inputText = inputField.value; // taking input

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputText);
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };

    // calling server for processing
    fetch(serverURL, options)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.data.translations[0].translatedText;
            outputDiv.innerText = translatedText; // output
        })
        .catch(err => errorHandler(err));
}

translateBtn.addEventListener("click", clickHandler);