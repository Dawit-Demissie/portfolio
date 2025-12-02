
//exports configuration settings for the contact-backend application
module.exports = {
    port: process.env.PORT || 3000, 
    db: {
        host: process.env.host || 'localhost',
        port: process.env.user|| 'root',
        name: process.env. database|| 'portfolio' ,
        password: process.env.password || '',   
    },
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key'
};
