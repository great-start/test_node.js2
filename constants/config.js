import dotenv from 'dotenv/config';

const config = {
    PORT: process.env.PORT || 5500,
    DB_PATH: process.env.DB_PATH,
}

export const {PORT, DB_PATH} = config;