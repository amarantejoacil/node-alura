import mongoose from "mongoose";
import nodemon from "nodemon";

const autorSchema = new mongoose.Schema(
{
  id:{type:String},
  nome:{type:String, required:true},
  nacionalidade:{Type:String}
},
{
  versionKey:false
}
)

const autores = mongoose.model("autores", autorSchema)
export default autores;