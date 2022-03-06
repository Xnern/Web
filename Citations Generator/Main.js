var url = 'http://localhost:1010/';

document.getElementById("ajaxButton").addEventListener("click", makeRequest);

//Fonction qui envoie une requête
function makeRequest() {
    //On envoie une requête a l'url et on obtient la reponse dans la variable reponse
    fetch(url).then(function (response) {
        //Si la reponse est ok alors on prend le .json comme il est dans notre api
        if(response.ok) {
            response.json().then(function(json) {
                //Ensuite on recupere notre reponse dans une variable pour la manipuler
                var articles = json;
                //Chiffre aléatoire pour citations au hasard
                let random = getRandomInt(articles.length)
                let citation = document.getElementById("citation");
                console.log(articles[random]);
                //Prend citation dans l'objet
                citation.textContent = articles[random]["citation"];
                let auteur = document.getElementById("auteur");
                //Prend auteur dans l'objet
                auteur.textContent = articles[random]["auteur"];
            });
        }
    });
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = JSON.parse(httpRequest.responseText);
            console.log(response);
        } else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}






