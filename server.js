
import app from './src/app.js' 
const port = process.env.PORT || 3333;

// const http = require("http")
// const port = 3000;




//modo antigo sem express
// const rotas = {
//   '/':'Curso de Node',
//   '/livros':'Entrei na pagina de livros',
//   '/autores': 'Listagem de autores',
//   '/test': 'ola mundo',
  
// }

// const server = http.createServer((req,res) =>{
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(rotas[req.url]);
// })


// server.listen(port,() => {
//   console.log(`escutando na porta ${port}`)
// })

app.listen(port,() => {
  console.log(`escutando na porta ${port}`)
})