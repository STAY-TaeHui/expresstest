const express=require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT||5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([{
        "id": 1,
        "name": "홍길동",
        "birthday": "123125"
    }, 
    {
        "id": 2,
        "name": "홍상삼",
        "birthday": "343453"
    }, 
    {
        "id": 3,
        "name": "홍준표",
        "birthday": "564731"
    }
    ]);
});
app.listen(port, ()=> console.log(`Listengin on port ${port}`));