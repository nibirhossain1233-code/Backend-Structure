const { default: mongoose } = require("mongoose");

const dbConnect = async ()=>{
try {
  await mongoose.connect(process.env.DB_URL);
  console.log("BD connected successfully!");
  
} catch (error) {
  console.log(error.message);
  
}
} 

module.exports = dbConnect;