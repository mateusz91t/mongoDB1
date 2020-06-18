var antonio = db.people.find({"first_name":"Antonio"})
antonio
var where = {"first_name":"Antonio"}
where
db.people.updateMany(where,{$set:{hobby:"pingpong"}})