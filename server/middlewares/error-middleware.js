const errorMiddleware = (err,req,res,next) =>{
    const status=err.status || 500;
    const message=err.message || "ERROR FROM BACKEND"
    const extraMessage=err.extraMessage || "BACKED ERROR"

    return res.status(status).send({msg:{message,extraMessage}})
}

module.exports = errorMiddleware;