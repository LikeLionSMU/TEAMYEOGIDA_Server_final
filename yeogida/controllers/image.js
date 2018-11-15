var aws = require('aws-sdk');
var multer = require('multer');
var multerS3=require('multer-s3');
aws.config.loadFromPath('./awsconfig.json');
var s3 = new aws.S3();
var storageS3 = multerS3({
  s3: s3,
  bucket: 'like-lion-yeogida',
  acl: 'public-read',
  key: function (req, file, callback) {
    console.log(file);
    var fname = Date.now() + '_' + file.originalname;
    callback(null, fname);
  }
});
exports.uploadSingle = multer({storage: storageS3,limits:{fileSize:100000000}}).single('productimage');
