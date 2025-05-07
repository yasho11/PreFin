//config/database.ts

import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'myapp',
});
