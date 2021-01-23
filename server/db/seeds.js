use eggs_and_baskets;

db.dropDatabase();
db.eggs.insertMany(
    [

        {
            weight: 100,
            laid: "21-07-2020"
        }, 
        {
            weight: 150,
            laid: "25-06-2020"
        }, 
        {
            weight: 110,
            laid: "30-06-2019"
        }

    ]
);

db.baskets.insertMany(
    [
        {
            name: "First Basket",
            eggs: []
        }, 
        {
            name: "Second Basket",
            eggs: []
        }
    ]
);