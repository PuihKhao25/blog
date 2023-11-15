class AuthController {
    SignUp = (req, res) => {
        res.send('hello Sign Up authControllers')
    }
}

module.exports =  new AuthController