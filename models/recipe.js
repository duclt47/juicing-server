var mongoose = require('mongoose');
var Schema = mongoose.Schema;
export const recipeSchema = new Schema({
    id: Number,
    name: String,
    decription: String,
    material: Array,
    guide: Array
});


var SomeModel = mongoose.model('RecipeModel', recipeSchema );
