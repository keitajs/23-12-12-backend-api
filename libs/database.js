import { Sequelize } from 'sequelize'
import chalk from 'chalk'
import { config } from 'dotenv'
config()

const db = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: 'mysql',
  logging: (msg) => { console.log(chalk.bgBlueBright(' SEQUELIZE ') + ' ' + msg.split(': ')[1]) }
});

export default db