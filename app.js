//IMPORT core
var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.set('port', process.env.PORT || 3000);

var mongoClient = require('mongodb').MongoClient;
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog')


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/catalog', catalogRouter); 
mongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
    if (err) throw err;
    //neu thanh cong thi log ra thong bao
    console.log('Connected');
    var Schema = mongoose.Schema;
    const recipeSchema = new Schema({
        id: Number,
        name: String,
        decription: String,
        material: Array,
        guide: Array
    });
    console.log('aaa');

    
    var SomeModel = mongoose.model('RecipeModel', recipeSchema );
    var awesome_instance = new SomeModel({
        id: 1,
        name: 'cam ep',
        decription: 'cong thuc nuoc cam',
        material: '1 qua cam',
        guide: 'vat cam bo hat',
    })
    console.log('aaaaaaa');

    awesome_instance.save((err) => {
        if (err) {
            console.log('err')
            return handleError(err);   
        }
        console.log('saved')
    })
});
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/catalog', catalogRouter); 
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});