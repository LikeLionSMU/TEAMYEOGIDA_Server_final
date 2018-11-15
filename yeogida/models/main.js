var productinfo = require("../config/database").productinfo;

exports.main = (sortinfo)=>{
  // 지역
  var area = sortinfo.area;
  // 검색어
  var word = sortinfo.word;

  // 최신 인기 마감임박
  var standard;

  switch (sortinfo.standard){
    case "latest":
      standard = [["productpid", "DESC"]];
      break;
    case "hit":
      standard = [["producthit", "DESC"]];
      break;
    case "date":
      standard = [["productdate_s","ASC"]];
      break;
  }

  var select = productinfo.findAll({
      attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage',' productaddress'],
      where : {
        // 사용기한이 지나지 않은 상품들만 노출
        productdate_s : {gt : new Date()},
        // 지역
        productaddress : {like : '%'+area+'%'},
        // 검색어
        $or : [
          {productaddress : {like : '%'+word+'%'}},
          {productname : {like : '%'+word+'%'}}
        ],
        // 판매되지 않은 상품만 노출
        checker : 0
      },
      // 정렬
      order : standard
    })
    .then((data)=>{
      var result=[];
      for (var i=0;i<data.length;i++){
        result[i] = data[i].dataValues;
      }
      return result;
    });

  return select;
};
