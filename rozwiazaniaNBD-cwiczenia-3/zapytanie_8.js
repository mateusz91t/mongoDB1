var moscow = {"location.city":"Moscow"}
moscow
db.people.updateMany(moscow,{$set:{"location.city":"Moskwa"}})