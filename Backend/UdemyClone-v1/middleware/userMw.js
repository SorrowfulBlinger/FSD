const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./../config')

const authenticatedUserMw  = async (req, res, next) => {
    if(req.headers.authorization) {
        const decodedToken = await jwt.verify(req.headers.authorization, JWT_SECRET)
        console.log(decodedToken)
        if (decodedToken.name && !decodedToken.isAdmin) {
            req.name = decodedToken.name
            req.userIsAdmin = decodedToken.isAdmin
            next()
            return
        }
    }
    return res.status(401).json({
            reason : 'Not Authenticated'
    })
}

const authenticatedAdminMw  = async (req, res, next) => {
    if(req.headers.authorization) {
        const decodedToken = await jwt.verify(req.headers.authorization, JWT_SECRET)
        console.log(decodedToken)
        if (decodedToken.name && decodedToken.isAdmin) {
            req.name = decodedToken.name
            req.userIsAdmin = decodedToken.isAdmin
            next()
            return
        }
    }
    return res.status(401).json({
            reason : 'Not Authenticated'
    })
}

module.exports = {
    authenticatedAdminMw,
    authenticatedUserMw
}