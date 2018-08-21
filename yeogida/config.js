var Sequelize = require('Sequelize');
// var sequelize = new Sequelize('yeogida','root','jihae',
//   {
//     // 'host' : 'yeogida.cbdgg8cil0ro.ap-southeast-1.rds.amazonaws.com',
//     host: 'localhost',
//     dialect: 'mysql'
//   }
// );
var sequelize = new Sequelize('yeogida','moonsun','201611070',
  {
    'host' : 'yeogida.cbdgg8cil0ro.ap-southeast-1.rds.amazonaws.com',
    'dialect' : 'mysql',
    'pool': {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000,
      maxIdleTime: 120000
}
});

var profile=sequelize.define('profile',{
  personpid: {
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  phone : Sequelize.INTEGER,
  kakaonickname:Sequelize.STRING,
  token :Sequelize.STRING,
  email:Sequelize.STRING,
  kakaopid:Sequelize.STRING
}, {
  timestamps : false,
  tableName: profile
});

var productinfo=sequelize.define('productinfo', {
  productpid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  productimage: Sequelize.STRING, //사진이미지 경로텍스트
  productname: Sequelize.STRING, //판매 펜션이름
  productaddress_x : Sequelize.FLOAT,// 주소 x좌표
  productaddress_y : Sequelize.FLOAT,
  productUrl: Sequelize.STRING,
  productdate_s: Sequelize.DATE,
  productdate_e: Sequelize.DATE,
  productaddress : Sequelize.STRING,
  formerprice: Sequelize.INTEGER,
  productprice :Sequelize.INTEGER,
  producthit: Sequelize.INTEGER,
  checker : Sequelize.BOOLEAN,
  personpid: Sequelize.INTEGER,
  text:Sequelize.TEXT,
  productphone:Sequelize.INTEGER,

  //hotelphonenumber: Sequelize.STRING//펜션전번
}, {
    timestamps:false,
    tableName:productinfo

//  description: Sequelize.TEXT,사용자 텍스트
});
profile.sync();
productinfo.sync();

module.exports={
  profile:profile,
  productinfo :productinfo,
};
