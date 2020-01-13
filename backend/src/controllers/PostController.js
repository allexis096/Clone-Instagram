const Post = require('../models/Post');
const sharp = require('sharp'); //permite manipular imagens
const path = require('path');
const fs = require('fs'); //file system do node

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt') //os novos posts sempre vao ficar em cima

        return res.json(posts);
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body; //destructuring => recura as inf das variaveis
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )

        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post); //vai emitir os dados para todos os usuarios da aplicacao

        return res.json(post);
    }
};