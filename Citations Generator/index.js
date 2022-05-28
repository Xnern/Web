const PORT = process.env.PORT || 1010;
const express = require('express');
const axios = require ('axios');
const cheerio = require ('cheerio');
const cors = require('cors');



const app = express();
app.use(cors())

console.log("Début");

const sites =[
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=2'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=3'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=4'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=5'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=6'
    },
    {
        adress: 'https://citation-celebre.leparisien.fr/citation/plein?page=7'
    },

]
const articles = []

sites.forEach(sites => {
    axios.get(sites.adress)
        .then(response => {

            const html = response.data

            const $ = cheerio.load(html)

            //On vise la div parents qui détient nos 2 elements qu'on veut
            $('.citation').each(function () {

                console.log("test 3");
                articles.push({
                    //On vise notre élément avec les .find qui vont au bon endroit
                    citation: $(this).find('div[class="laCitation"] > p > q > a').text(),
                    auteur: $(this).find('div[class="auteur"] > div > cite > a').text()
                })
            });
        })
})



app.get("/", (req, res) =>{
    res.json(articles)
})

app.listen(PORT,()=> console.log(`Server running on PORT ${PORT}`))
