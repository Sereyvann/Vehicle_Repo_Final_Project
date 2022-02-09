const mongoose = require('mongoose')

const vehicleRepoSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    condition:{
        type: String,
        required: true,
        default: "used"
    }

})

module.exports = mongoose.model("vehicl_Repo", vehicleRepoSchema)