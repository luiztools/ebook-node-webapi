//3.1
mongod --dbpath C:\mongo\data

//3.2
mongo

//3.3
show databases

//3.4
use workshop

//3.5
show collections

//3.6
db.customers.find()

//3.7
db.customers.insert({ nome: "Luiz", idade: 32 })

//3.8
db.customers.find({uf: "RS"})

//3.9
db.customers.update({nome: "Luiz"}, {nome: "Luiz", idade: 32, uf: "RS"})

//3.10
db.customers.deleteOne({nome: "Luiz"})

