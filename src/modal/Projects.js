import mongoose from ".mongoose"
const {Schema}=mongoose 

const ProjectSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required: true
    },
    tech:{
        type:[String]
    }
})
module.exports = mongoose.models.Project || mongoose.model("Project", ProjectSchema)