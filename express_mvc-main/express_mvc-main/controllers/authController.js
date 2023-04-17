const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users=data
    }
}


const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const fsPromises = require('fs').promises;
const path=require('path')

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' })
    const foundUser = userDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); //unauthorized
    // Evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // create JWTs
        const acessToken = jwt.sign(
            {
                "username": foundUser.username
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            {
                "username": foundUser.username
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const otherUsers = userDB.users.filter(person => person.username !== foundUser.username);
        const currentUser={}
        res.json({'success':`User ${user} is logged in!`})
    }
    else {
        res.sendStatus(401);
    }
}

module.exports={handleLogin}