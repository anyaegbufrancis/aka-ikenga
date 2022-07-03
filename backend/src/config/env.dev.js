const dotenv = require('dotenv');

dotenv.config({path: "/root/aka-ikenga/.env"});

const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const serverPort = process.env.SERVER_PORT;
const clientOriginUrl = process.env.FRONT_END_URL;
const db_host = process.env.DB_HOST
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASS
const db_name = process.env.DB_NAME

if (!audience) {
    throw new Error(
        '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
    );
}

if (!domain) {
    throw new Error(
        '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
    );
}

if (!serverPort) {
    throw new Error(
        '.env is missing the definition of a API_PORT environmental variable'
    );
}

if (!clientOriginUrl) {
    throw new Error(
        '.env is missing the definition of a APP_ORIGIN environmental variable'
    );
}
if (!db_host) {
    throw new Error(
        '.env is missing definition of DB HOST IP Address'
    );
}
if (!db_user) {
    throw new Error(
        '.env is missing definition of DB USERNAME'
    );
}
if (!db_password) {
    throw new Error(
        '.env is missing definition of DB PASSWORD'
    );
}
if (!db_name) {
    throw new Error(
        '.env is missing definition of DB NAME'
    );
}

const clientOrigins = ['http://localhost:3040'];

module.exports = {
    audience,
    domain,
    serverPort,
    clientOriginUrl,
    clientOrigins,
    db_host,
    db_user,
    db_password,
    db_name
};
