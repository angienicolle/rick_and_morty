const http = require ('http');
const {getCharById} = require('./controllers/getCharById')
// const characters = require ('./utils/data'); //para traer los personajes

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){ //si la url incluye ese link
        // console.log(req.url.split('/').at(-1))
       const id = req.url.split('/').at(-1)[0] //capturamos el id
       
       getCharById(res,Number(id));

    //    let characterFind = characters.find((char)=> char.id === Number(id)) //comparando el id de la url con el archivo
    // res.writeHead(200,{'Content-type':'application/json'}).end(JSON.stringify(characterFind))
    }

}).listen(3001)