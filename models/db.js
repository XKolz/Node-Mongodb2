
const mongoose = require("mongoose")

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/StudentDB", {

    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log("Connected succeeded")
    } else {
        console.log("Error in connection" +err)
    }
});

require("./student.model");
