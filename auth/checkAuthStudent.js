const jwt=require('jsonwebtoken');
const keys=require('../config/keys');
const JWT_KEY=keys.JWT_KEY;

module.exports=(req,res,next)=>{
  try{const token=req.headers.authorization.split(" ")[1];
  const decoded=jwt.verify(token,JWT_KEY);

  if(decoded.userType==='student'){
      req.userData=decoded;
      next();
      console.log(decoded.userType);

  }else{
      return res.status(401).json('Not a '+ decoded.userType+' !')
  }
  }catch (e) {
      return res.status(401).json({
          message:'Auth Failed'
      })
  }

};