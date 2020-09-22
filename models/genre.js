var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}]
  }
);

// Tạo hàm ảo lấy URL của sách
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Xuất mô hình
module.exports = mongoose.model('Genre', GenreSchema);