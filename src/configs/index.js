let mysql = require('mysql2');

const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: { 
        connection: mysql.createConnection({
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '123456',
            database: process.env.MYSQL_DB || 'qlqa'
        }),
        connect: function() {
            this.connection.connect((err) => {
                if (err) return console.error(err.message);
                // console.log('Connected to the MySQL server.');
            });
            return this.connection;
        }        
    }
};

module.exports = config;