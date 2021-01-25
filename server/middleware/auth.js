export default class Auth {
    static authenticateCall(req, res, next){
        if(!req.header('api-key') 
            || req.header('api-key') !== process.env.API_KEY){
                res.status(403).json({
                    "message": "You are not authorized to view this api."
                })
            }
        next()
    }
}
