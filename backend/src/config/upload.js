const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({ //salvar as imagens dentro do disco
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            callback(null, file.originalname);
        }
    })
};