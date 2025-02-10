import mongoose from 'mongoose'

const DataSchema=mongoose.Schema({
        categoryName:{type:String,unique:true,required:true},
        categoryImg:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const CategoryModel=mongoose.model('categories',DataSchema)

export default CategoryModel