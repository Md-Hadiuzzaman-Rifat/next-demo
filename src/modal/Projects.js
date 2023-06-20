import mongoose from ".mongoose"
const {Schema}=mongoose 

const ProjectSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required: true
    },
    technology:{
        type:[String]
    }
})
module.exports = mongoose.models.Project || mongoose.model("Project", ProjectSchema)