
const validate = (schema) => async(req,res,next) =>{
    try{
        const ParsedBody = await schema.parseAsync(req.body);
        req.body=ParsedBody;
        next()
    }
    catch(e){
        console.log(e)
        const status=422;
        const message=e.errors[0].message;
        const extraMessage =e.errors[0].message;

        // console.log(e);
        const error = {
            status,
            message,
            extraMessage
        }
        console.log(error);
        next(error);
    }
}

module.exports = validate;