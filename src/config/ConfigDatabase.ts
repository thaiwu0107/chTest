
export const Dbconfig = {
    database: 'my_db',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    modelPaths: [
        __dirname + '/src/models/orm'
    ],
    operatorsAliases: false,
    pool: {
        max: 30,
        min: 10,
        idle: 15000
    }
};
