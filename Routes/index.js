const express = require('express'); //intanciando o express
const router = express.Router(); //instanciando a route

router.get('/', (req, res) => {
    return res.send({message: `Tudo ok com o método GET da raiz!`})
});

router.post('/', (req, res) => {
    return res.send({message: `Tudo ok com o método POST da raiz!`})
});

module.exports = router;