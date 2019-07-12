'use strict'
const fs   = require('fs');
const jwt  = require('jsonwebtoken');

// PRIVATE and PUBLIC key
const privateKEY  = fs.readFileSync(__dirname +'/../keys/private.key', 'utf8');
const publicKEY  = fs.readFileSync(__dirname +'/../keys/public.key', 'utf8');
const duration='2h';
const issuer='Piktorlabs corp';
const subject='piktorlabs@corp.com';

const sign=function(payload,$Option={}){
 
  // Token signing options
  var signOptions = {
    issuer:  issuer,
    subject:  subject,
    audience:  $Option.audience,
    expiresIn:  duration,    // 2 hour validity
    algorithm:  "RS256"    
  };

  return jwt.sign(payload, privateKEY, signOptions);
}

const verify=function(token, $Option){

    var verifyOptions = {
        issuer:  issuer,
        subject:  subject,
        audience:  $Option.audience,
        expiresIn:  duration,
        algorithm:  ["RS256"]
    };
     try{
       return jwt.verify(token, publicKEY, verifyOptions);
     }catch (err){
       return err;
     }
  }

const decode=function(token){
    return jwt.decode(token, {complete: true});
 }

module.exports={sign,verify,decode};