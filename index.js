var express = require('express')
const router = express.Router();
var app = express()

app.set('port', (process.env.PORT || 8000))
app.listen(app.get('port'))

app.set('view engine', 'html');

// por padrão o express irá procurar artefatos estáticos nesse diretório 'public'
// pode ser qualquer nome, é necessário existir no sistema de diretórios.
app.use(express.static('public'));

// Display the dashboard page
router.get("/", (req, res) => {
  // todos os links para css e js dentro do html serão carregados
  res.sendFile("galery.html", { root: __dirname });
});

app.use("/", router);


