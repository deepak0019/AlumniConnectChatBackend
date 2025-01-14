const mongoose = require('mongoose')

connectDB = async() => {
await mongoose.connect(process.env.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
})
.then(console.log("connection success!!"))
.catch((err)=>{
    console.log("No db connection!!")
    console.log(err);
    process.exit();
});
}


module.exports = connectDB;

