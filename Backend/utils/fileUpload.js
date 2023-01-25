const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'uploads'); 
    },
    filename: (req,file,cb) =>{
        cb(null, new Date().toISOString().replace(/:/g,"-") + "-"  + file.originalname);
    }
});

//Specify file format that can be saved
function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/png' || file.mimetype === 'image.jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } 
    else {
        cb(null, false);
    }
}

const upload = multer({storage, fileFilter});


module.exports = {
    upload,
}