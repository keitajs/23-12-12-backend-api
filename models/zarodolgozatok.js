import { DataTypes } from "sequelize"
import db from '../libs/database.js'

const zarodolgozatok = db.define('zarodolgozatoks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nev: { type: DataTypes.STRING(128), allowNull: false },
    zarodolgozatcim: { type: DataTypes.STRING(128), allowNull: false },
    rovidleiras: { type: DataTypes.STRING(256), allowNull: false },
    leadasidatum: { type: DataTypes.DATE, allowNull: false },
    konzulensnev: { type: DataTypes.STRING(128), allowNull: false },
    ertekeles: { type: DataTypes.INTEGER, allowNull: false }
}, { createdAt: false, updatedAt: false });

(async () => {
  await db.sync()
})()

export default zarodolgozatok