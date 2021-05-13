const router = require('express').Router();
const articleController = require('../Controllers/articleController');

//Rutas para los artículos
//POST
router.post ('/', async (req, res) => {
    try{
        let createArticle = await articleController.createArticle(req.body);
        let status = 'Article created !';
        res.json({createArticle, status})
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//GET
router.get ('/', async (req, res) => {
    try{
        let allArticles = await articleController.allArticles();
        res.json(allArticles);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
})

router.get ('/:name', async (req, res) => {
    try{
        let name = req.params.name;
        let findByName = await articleController.articleByName(name);
        res.json(findByName);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let articleId = await articleController.articleById(id);
        res.json(articleId);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//PUT
router.put ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let articleUpdate = await articleController.updateArticle(id);
        let status = 'Article updated successfully !';
        res.json({articleUpdate, status});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//DELETE
router.delete ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let articleDelete = await articleController.deleteArticle(id);
        let status = 'Article deleted successfully !';
        res.json({articleDelete, status});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
})

module.exports = router;