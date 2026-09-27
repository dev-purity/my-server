const express = require (express)
//cors
const cors = require ('cors');
//create express app
const app = express();
const port = 6666
app.use(express.json);

app.get("/",(req,res)=>{
    res.send("api is ready to use");
})
app.listen(port,()=>{
    console.log("server is running on port $ {port}")
})