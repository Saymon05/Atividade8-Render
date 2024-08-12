import { Sequelize } from "sequelize";

//const sequelize = new Sequelize("mysql://root:root@localhost:3306/dewii2024");
//const sequelize = new Sequelize("mysql://root:root@localhost:3306/atividade7");
const sequelize = new Sequelize("postgresql://user_db:XWhPTwmlo30KdLDb0XuUgebaTEfWXN1l@dpg-cqt83ed6l47c73aht3p0-a/veiculos_aaie");
//const sequelize = new Sequelize("mysql://root@localhost:3306/dewii2024node");

sequelize.sync();


export default sequelize;