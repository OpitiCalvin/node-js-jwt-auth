module.exports = {
    HOST: 'localhost',
    USER: 'gisadmin',
    PASSWORD: 'gis@admin1',
    DB: 'node_auth_db',
    dialect: "postgres",
    pool: {
        max: 5, // max number of connections to db
        min: 0, // min number of connections to db
        acquire: 30000, // max time (milliseconds) that a pool will try to get connection before throwing an error
        idle: 10000 // max time (milliseconds) that a connection can be idle before being released
    }
};