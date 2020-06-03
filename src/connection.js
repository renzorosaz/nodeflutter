var mongoose = requiere('mongoose')

mongoose.connect('mongodb://localhost:27017/storedb',{
    useNewUrlPaerser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then( db =>console.log('Connection estalishe successfully'))
