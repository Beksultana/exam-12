const mongoose = require('mongoose');
const config = require('./config');
const nanoid = require('nanoid');

const User = require('./models/User');
const Image = require('./models/Images');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }


    const user = await User.create(
        {
            username: 'user',
            password: '123',
            role: 'user',
            token: nanoid()
        },
        {
            username: 'admin',
            password: '123',
            role: 'admin',
            token: nanoid()
        },
    );

    await Image.create(
        {
            user: user[0]._id,
            title: "Fox (nature)",
            img: 'fox.jpg'
        },
        {
            user: user[0]._id,
            title: "Nature, mountains, landscape",
            img: 'nature2.jpg'
        },
        {
            user: user[0]._id,
            title: "Nature, mountains, landscape",
            img: 'nature1.jpg'
        },
        {
            user: user[1]._id,
            title: "Nature, water, flowers, plants",
            img: 'nature3.jpg'
        },
        {
            user: user[1]._id,
            title: "Nature, water, animals",
            img: 'nature4.jpg'
        },
        {
            user: user[1]._id,
            title: "Nature, plants, tree",
            img: 'nature5.jpg'
        },
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong', error)
});