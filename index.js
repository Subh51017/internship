const express=require("express"); 
const morgan=require("morgan");
const cors=require("cors"); 
const app=express(); 
const data=require("./data.json");

app.use(cors()); 
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(morgan("tiny"));
app.use(express.json());

app.get("/get-user",(req,res)=>{
    const Userdata=data;
    return res.send({
        data:Userdata,
        status:true,
    });
});

app.get("/get-user-by-id/:id",(req,res)=>{
    let id=Number(req.params.id);
    let userFound=data.find((d)=>d.id==id);
    if(!userFound){
        return res.send({
            data:"user not found",
            status:false,
        });
    }
    return res.send({
        data:userFound,
        status:true,
    });
});

app.delete("/get-user-by-id/:id",(req,res)=>{
    let id=Number(req.params.id);
    let userFound=data.find((d)=>d.id==id);
    if(!userFound){
        return res.send({
            data:"user not found",
            status:false,
        });
    }
    let updatedUser=data.filter((d)=>d.id!=id);
    return res.send({
        data:updatedUser,
        status:true,
    });
});

app.post("/create-user",(req,res)=>{
    let id=req.body.id;
    if(!id){
        return res.send({
            data:"user id is missing",
            status:false,
        });
    }
    let userFound=data.find((d)=>d.id==id);
    if(userFound){
        return res.send({
            data:"user id exists",
            status:false,
        });
    }
    let newData=[...data,{...req.body}];
    return res.send({
        data:newData,
        status:true,
    });
});

app.listen(8000,()=>{ 
    console.log("server running on 8000 port no...");
});
/*
app.get("/",(req,res)=>{
    console.log(res.query);
    return res.send("hello World");
});
app.post("/",(req,res)=>{
    return res.send({
        name:"Hello"
    });
});
app.post("/:id",(req,res)=>{
    console.log(res.params);
    return res.send({
        text:"response from delete request"
    });
});*/
