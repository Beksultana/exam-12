const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }


    await User.create(
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

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong', error)
});