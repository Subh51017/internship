const express=require("express"); 
const morgan=require("morgan");
const cors=require("cors"); 
const app=express(); 
const{default: mongoose}=require("mongoose");

app.use(cors()); 
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(morgan("tiny"));
app.use(express.json());

app.listen(8000,()=>{ 
    console.clear();
    console.log("server running on 8000 port no...");
    mongoose.connect(
        "mongodb+srv://root:root@backend.ltwzius.mongodb.net/ecommerce?retryWrites=true&w=majority"
    )
    .then(()=>console.log("DB connected"))
    .catch((e)=>console.log(e));
});
