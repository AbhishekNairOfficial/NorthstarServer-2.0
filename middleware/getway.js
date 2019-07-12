const routes = require('../index.route');
const tokenMan=require('../server/token-manager/token-manager');


const unSecureRoute=['/login','/register'];
const checkRoute=function(req, res, next){
        if(unSecureRoute.includes(req.path)){
            return routes(req,res);
        }
    var token = req.body.token || req.query.token || req.headers['authorization'];

    if(token){
        token=token.split(' ')[1];

        try{
            let temp=tokenMan.verify(token,{audience:req.headers.host});

            if(temp.name=='JsonWebTokenError'){
                res.status(401).json({message:"Failed to authenticate url"});
                return;
            }

            return routes(req,res);

        }catch(err){
            res.status(401).json({message:"Failed to authenticate url"});
        }
    }else{
        res.status(401).json({message:"Failed to authenticate url"});
    }
}

module.exports={checkRoute};