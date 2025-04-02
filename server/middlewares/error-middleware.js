const errorMiddleware = (err,req,res,next) =>{
    const status=err.status || 500;
    const message=err.message || "ERROR FROM BACKEND"
    const extraMessage=err.extraMessage || "BACKEND ERROR"

    return res.status(status).send({message,extraMessage});
}

module.exports = errorMiddleware;