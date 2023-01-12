//4.1
npm i mongodb

//4.2
var indexRouter = require('./routes/index');
var customersRouter = require('./routes/customers');

//...

app.use('/', indexRouter);
app.use('/customers', customersRouter);

//4.3
const {MongoClient} = require("mongodb");
async function connect(){
    if(global.db) return global.db;
    const client = new MongoClient("mongodb://127.0.0.1:27017/");
    await client.connect();
    global.db = client.db("workshop");
    return global.db;
  }

//4.4
//definindo as rotas
/* GET customers listing. */
router.get('/', function(req, res, next) {
    res.json(connect());
});

//4.5
npm start

//4.6
router.get('/', async function(req, res, next) {
    try{
      const db = await connect();
      res.json(await db.collection("customers").find().toArray());
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//4.7
const {MongoClient, ObjectId} = require("mongodb");

//4.8
router.get('/:id?', async function(req, res, next) {
    try{
      const db = await connect();
      if(req.params.id)
        res.json(await db.collection("customers").findOne({_id: new ObjectId(req.params.id)}));
      else
        res.json(await db.collection("customers").find().toArray());
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
  })

//4.9
router.post('/', async function(req, res, next){
    try{
      const customer = req.body;
      const db = await connect();
      res.json(await db.collection("customers").insertOne(customer));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//4.10
router.put('/:id', async function(req, res, next){
    try{
      const customer = req.body;
      const db = await connect();
      res.json(await db.collection("customers").updateOne({_id: new ObjectId(req.params.id)}, {$set: customer }));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//4.11
router.delete('/:id', async function(req, res, next){
    try{
      const db = await connect();
      res.json(await db.collection("customers").deleteOne({_id: new ObjectId(req.params.id)}));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})