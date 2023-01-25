'use strict';


const  getImages = async (req, res, next) => {
    
   
    try {

        res.sendFile('Images.html', { root: 'public' });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getImages
}