const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({ //quais colunas estao disponiveis no banco de dados
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true, //criar um campo em cada regristro, armazena uma data em cada campo.
});

module.exports = mongoose.model('Post', PostSchema);