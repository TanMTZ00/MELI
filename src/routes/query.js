const { Router } = require('express');
const router = Router();

const query = require('../products.json');
//console.log(query);

router.get('/', (req, res) => {
    res.json(query);
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    const item = query.item.find(item => item.id == id)

    if (item) {
        res.json(item)
    } else {
        res.status(404).end()
    }   
});

module.exports = router;