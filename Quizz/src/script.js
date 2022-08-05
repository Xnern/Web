let score = 0;
let index = 1;

$(document).ready(function() {

    $("button").filter('.theme').click(function() {
        ChangeTheme(this);
        $('h2').text(this.value);
        $('#theme').text(this.value);
    });

    $("#start-button").click(function() {
        //cacher le start menu et afficher le jeu
        cacherFin();
        cacherMenu();
        afficherJeu();
        verifiTheme();
    });

    $("#restart-button").click(function() {
        //cacher le start menu et afficher le jeu
        cacherFin();
        afficherJeu();
        verifiTheme();
    });

    $("button").filter('.reponse').click(function() {
        if (this.value == 1) {
            $(this).animate({backgroundColor: "#2FF417"}, 'slow');
            score++;
        }else{
            $(this).animate({backgroundColor: "#F51818"}, 'slow');
        }
        $("#number-question").text(index + 1);
        index++;
        if(indexMax()){
            cacherJeu();
            afficherFin();
            $("#resultats").text("Vous avez fait " + score +"/" + questionsGeo.length + " bonnes réponses");
        }
        verifiTheme();
    
    });

});


function affichageQuestion(questionMatiere) {
    quest = questionMatiere[index - 1];
    $("#question").text(quest.question);
    $("#reponse1").text(quest.reponse.ville);
    $("#reponse1").val(quest.reponse.value);
    $("#reponse2").text(quest.reponse2.ville);
    $("#reponse2").val(quest.reponse2.value);
    $("#reponse3").text(quest.reponse3.ville);
    $("#reponse3").val(quest.reponse3.value);
    
};


// Changer le display du menu
function cacherMenu(){
    $("#start-menu").hide();
}

function afficherMenu(){
    $("#start-menu").show();
}


// Changer le display du Jeu
function afficherJeu(){
    $("#play-menu").show();
}

function cacherJeu(){
    $("#play-menu").hide();
}

// Changer le display de fin
function afficherFin(){
    $("#end-menu").show(); 
}

function cacherFin(){
    $("#end-menu").hide();
    index = 1;
    score = 0;
    $("#number-question").text(index);
}

// Test et si possible change le theme et donc le quizz
function ChangeTheme(button){
    if($("#start-menu").display == null && $("h2").text() != button.value){
        cacherJeu();
        afficherMenu();
        cacherFin();
        score = 0;
        index = 1;
        $("#number-question").text(index);
    }
}

function verifiTheme() {
    if ($("#theme").text() == "Géographie") {
        affichageQuestion(questionsGeo);
    }
    if ($("#theme").text() == "Histoire") {
        affichageQuestion(questionsHist);
    }
    if ($("#theme").text() == "Mathématiques") {
        affichageQuestion(questionsMath);
    }
}

function indexMax() {
    return index == 6;
}




//Création des question et réponses pour le thème Géographie

qG1 = {
    question: "Quelle est la capitale de la France ?",
    reponse: {
        ville: "Paris",
        value: "1",
    },
    reponse2: {
        ville: "Lyon",
        value: "0",
    },
    reponse3: {
        ville: "Marseille",
        value: "0",
    }
}

qG2 = {
    question: "Quelle est la capitale de l'Angleterre ?",
    reponse: {
        ville: "Manchester",
        value: "0",
    },
    reponse2: {
        ville: "Londre",
        value: "1",
    },
    reponse3: {
        ville: "New York",
        value: "0",
    }
}

qG3 = {
    question: "Quelle est la capitale du Brésil ?",
    reponse: {
        ville: "Rio de Janeiro",
        value: "0",
    },
    reponse2: {
        ville: "Porto Alegre",
        value: "0",
    },
    reponse3: {
        ville: "Brazilia",
        value: "1",
    }
}

qG4 = {
    question: "Quelle est la capitale de l’Afghanistan ?",
    reponse: {
        ville: "Kaboul",
        value: "1",
    },
    reponse2: {
        ville: "Kandahar",
        value: "0",
    },
    reponse3: {
        ville: "Téhéran",
        value: "0",
    }
}

qG5 = {
    question: "Quelle est la capitale de la Bulgarie ?",
    reponse: {
        ville: "Varna",
        value: "0",
    },
    reponse2: {
        ville: "Odessa",
        value: "0",
    },
    reponse3: {
        ville: "Sofia",
        value: "1",
    }
}

let questionsGeo = [qG1, qG2, qG3, qG4, qG5];


//Création des question et réponses pour le thème Histoire

qH1 = {
    question: "Qui est l’inventeur du téléphone ?",
    reponse: {
        ville: "Alexander Graham Bell",
        value: "1",
    },
    reponse2: {
        ville: "Charles Goodyear",
        value: "0",
    },
    reponse3: {
        ville: "Albert Black Dick",
        value: "0",
    }
}

qH2 = {
    question: "Laquelle de ces inventions est la plus ancienne ?",
    reponse: {
        ville: "La machine à additionner",
        value: "0",
    },
    reponse2: {
        ville: "L’hélice",
        value: "0",
    },
    reponse3: {
        ville: "La lunette astronomique",
        value: "1",
    }
}

qH3 = {
    question: "Quelle invention doit-on à Louis Pasteur ?",
    reponse: {
        ville: "Le vaccin BCG",
        value: "0",
    },
    reponse2: {
        ville: "Le vaccin contre variole",
        value: "0",
    },
    reponse3: {
        ville: "Le vaccin contre la rage",
        value: "1",
    }
}

qH4 = {
    question: "Laquelle de ces inventions est française ?",
    reponse: {
        ville: "Le paratonnerre",
        value: "0",
    },
    reponse2: {
        ville: "Le bateau à vapeur",
        value: "1",
    },
    reponse3: {
        ville: "Le pneu",
        value: "0",
    }
}

qH5 = {
    question: "En quelle année le français Joseph Cugnot met-il au point l’invention de l’automobile ?",
    reponse: {
        ville: "1800",
        value: "0",
    },
    reponse2: {
        ville: "1830",
        value: "0",
    },
    reponse3: {
        ville: "1770",
        value: "1",
    }
}

let questionsHist = [qH1, qH2, qH3, qH4, qH5];

//Création des question et réponses pour le thème Mathématiques

qM1 = {
    question: "1+1",
    reponse: {
        ville: "11",
        value: "0",
    },
    reponse2: {
        ville: "7",
        value: "0",
    },
    reponse3: {
        ville: "2",
        value: "1",
    }
}

qM2 = {
    question: "7*3",
    reponse: {
        ville: "21",
        value: "1",
    },
    reponse2: {
        ville: "14",
        value: "0",
    },
    reponse3: {
        ville: "85",
        value: "0",
    }
}

qM3 = {
    question: "7+8+9+4",
    reponse: {
        ville: "28",
        value: "1",
    },
    reponse2: {
        ville: "29",
        value: "0",
    },
    reponse3: {
        ville: "27",
        value: "0",
    }
}

qM4 = {
    question: "7*7+8",
    reponse: {
        ville: "77",
        value: "0",
    },
    reponse2: {
        ville: "57",
        value: "1",
    },
    reponse3: {
        ville: "87",
        value: "0",
    }
}

qM5 = {
    question: "1*100*40*5",
    reponse: {
        ville: "18000",
        value: "0",
    },
    reponse2: {
        ville: "200000",
        value: "0",
    },
    reponse3: {
        ville: "20000",
        value: "1",
    }
}

let questionsMath = [qM1, qM2, qM3, qM4, qM5];