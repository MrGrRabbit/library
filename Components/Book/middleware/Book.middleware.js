const multer = require('multer');
const { uuidPhoto } = require('./uuidGeneration');;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        callback(null, uuidPhoto);
    }
});


module.exports = multer({ storage });