'use strict';


const  getTrueClientIp = async (req, res, next) => {
    
   
    try {

        const headers = JSON.stringify(req.headers);
        const header = JSON.parse(headers);
        console.log(header['True-Client-IP']);
        res.status(200).json(header['True-Client-IP']);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getTrueClientIp
}