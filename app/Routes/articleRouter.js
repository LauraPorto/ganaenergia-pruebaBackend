const router = require('express').Router();
const articleController = require('../Controllers/articleController');

//Rutas para los artículos
//POST
router.post ('/', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
})

//GET
router.get ('/', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
})

router.get ('/:name', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get ('/:id', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

//PUT
router.put ('/:id', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

//DELETE
router.delete ('/:id', async (req, res) => {
    try{

    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
})

module.exports = router;