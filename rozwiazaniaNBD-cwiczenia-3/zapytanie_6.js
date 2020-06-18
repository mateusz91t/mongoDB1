db.people.find({first_name:"Mateusz"})db.people.insert({
    "sex" : "Female",
    "first_name" : "Mateusz",
    "last_name" : "Trzuskowski",
    "job" : "Support Manager",
    "email" : "s21960@pjwstk.edu.pl",
    "location" : {
        "city" : "Kielce",
        "address" : {
            "streetname" : "Jakas",
            "streetnumber" : "20"
        }
    },
    "description" : "lalaal",
    "height" : 152.38,
    "weight" : 66.81,
    "birth_date" : ISODate("1991-09-28T02:55:03.000Z"),
    "nationality" : "Poland",
    "credit" : [ 
        {
            "type" : "switch",
            "number" : "6759888939100098699",
            "currency" : "COP",
            "balance" : 5117.06
        }
    ]
})