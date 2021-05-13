const router = require('express').Router();
const userController = require('../Controllers/userController');
const jwt = require('jsonwebtoken');

//Rutas para el Usuario

//POST
router.post ('/', async (req, res) => {
    try{
        let user = await userController.createUser(req.body);
        let status = 'User created !';
        return res.json({user, status});
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post ('/login', async (req, res) => {
    try{
        let email = req.body.email;
        let password = req.body.password;
        let jwt = await userController.login(email, password);
        let token = jwt.token;
        let user = jwt.user;
        let status = 'Success Login !';
        res.json({token, user, status});
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

//GET
router.get ('/', async (req, res) => {
    try{
        let allUsers = await userController.userAll();
        return res.json(allUsers);
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let userId = await userController.userById(id);
        return res.json(userId);
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

//PUT
router.put ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let userUpdate = await userController.updateUser(id);
        let status = 'User updated successfully !';
        res.json({status, userUpdate});
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

//DELETE
router.delete ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let userDelete = await userController.delteUser(id);
        let status = 'User deleted successfully !';
        res.json({status, userDelete});
    }catch{
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;