const mongoose = require("mongoose")
const config  = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect("mongodb://localhost:27017/GEF", config)