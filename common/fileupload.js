// const aws = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');

module.exports = () => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/courses')
    },
    filename: function (req, file, cb) {
      // file.fieldname + '-' +
      cb(null,Date.now())
    }
  })
  const upload = multer({storage}).single('avatar');
  return upload;
}





// aws.config.update({
//   secretAccessKey:process.env.AWS_ACCESS_SECRET,
//   accessKeyId:process.env.AWS_ACCESS_ID,
//   region:'us-east-1'
// })
// const s3 = new aws.S3();
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_S3_BUCKET,
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: 'other_products'});
//     },
//     key: function (req, file, cb) {
//       cb(null,`other_products/${Date.now().toString()}`)
//     }
//   })
// });
// module.exports = upload;
