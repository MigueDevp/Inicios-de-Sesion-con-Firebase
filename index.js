var express=require("express");
var app=express();

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",express.static(path.join(__dirname,"/web")));

var port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("JALANDO AL 100% -> http://localhost:"+port);
});