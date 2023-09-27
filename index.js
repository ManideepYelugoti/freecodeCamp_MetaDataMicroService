let express = require('express');
let cors = require('cors');
require('dotenv').config();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })

let app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{

  console.log(req.file);
res.json({name:req.file.originalname,type:req.file.mimetype,size:req.file.size})
})




const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
