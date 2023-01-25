'use strict';


const  getVideo = async (req, res, next) => {
    
   
    try {

        res.sendFile('Videos.html', { root: 'public' });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getVideo
}