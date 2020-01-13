const express = require('express'); //usar as rotas do servidor
const mongoose = require('mongoose'); //criar e manipular dados atraves do mongo
const path = require('path');
const cors = require('cors'); //permite que o backend se comunique com o frontend

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); //websockets => comunicacao em tempo real

mongoose.connect('mongodb+srv://...', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);

