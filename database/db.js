import {Sequelize} from 'sequelize';
//mysql://@us-cdbr-east-05.cleardb.net/heroku_f6323bb80339f8b?reconnect=true
const db = new Sequelize('heroku_f6323bb80339f8b', 'b82c79e6a90f7d', '690be15b', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
})

 
export default db;