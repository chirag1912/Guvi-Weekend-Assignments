const express= require("express");
const app= express();

const middleware= require('./middleware/logger.js');
const room = require('./room.js');
const Customer=require('./Customer.js');

app.use(express.json());	//use express. json such that res.status(200)
app.use(middleware);  

//app.use(room);
//app.use(Customer);

const port=3000;
let users=[];

app.listen(port,()=>console.log("Application Started and Running on Port No."+port));

//Using Room Module:

//Date:"2012-04-21T18:25:43.511Z",      //ISO 8601 format;
//const Customer=[];

app.get("/create-room",(req,res)=>{
    res.status(200).json({
        msg:"Room Data:",
        room
})
});

app.post("/book-room",(req,res)=>{          //book-room req from postman;
    Customer.push(req.body);
    //res.send()    //pushing from server side the info we got from the customer;
   console.log(Customer);
})

let Cust_name;
let dupl_Cust=false;
    let Cust_size=Customer.length;
    for(i=0;i<Cust_size;i++){
        for(j=0;j<Cust_size-1;j++){       //To check with all other;
            var d1 = new Date(Customer[i].Date);
            var d2= new Date(Customer[j].Date);
            if(d1.getDate()==d2.getDate && d1.getTime()==d2.getTime()){
                Cust_name=Customer[j].name;
                dupl_Cust=true;     
                console.log("Duplicate Customer"+Cust_name);
                break;
            }
        }
    }

app.get("/CheckRoomBooking",(req,res)=>{
    if(dupl_Cust==true){
        res.status(200).json({
            msg:"Room Booking Cannot be done on given Date and Time",
        })
    }else{
        res.status(200).json({
            msg:"Room Booking details:",
            Customer
        })
    }
    console.log(Customer);
})

//app.use(roomsBooking);
roomsBooking=[{
    roomName:Customer[0].name,
    bookStatus:"true",
    Cust_Name:Customer[0].name,
    dateofBooking:Customer[0].Date,
    startTime:Customer[0].startTime,
    endTime:Customer[0].endTime
}]

custData=roomsBooking;

app.get("/RoomswithBooking",(req,res)=>{
    res.status(200).json({
        msg:"List of Rooms booked:",
        roomsBooking        
    })
})

app.get("/CustList",(req,res)=>{
    res.status(200).json({
        msg:"List of Rooms booked:",
        custData       
    })
})

