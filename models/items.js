const mongoose=require("mongoose");

const itemSchema= mongoose.Schema({
  idowner: String,
  name: String,
  link: String,
  count: String,
  body: String,
  comments:Array,
})
const item= mongoose.model("item",itemSchema);

module.exports=item;
