var editor = db.people.find({"job":"Editor"})
editor
var where = {"job":"Editor"}
where
var upd = {$unset: {email:""}}
upd
db.people.updateMany(where,upd)