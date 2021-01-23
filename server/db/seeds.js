/*  This file contains a script for mongo to run when the command 'npm run seeds' is given at the root of the server directory.
    It is important that this script runs when the application is first implemented locally, as it will do two things:-
        - Create the eggs_and_baskets database locally (Mongo automatically creates a db when the use keyword precedes a non-existent db).
        - Seeds this db with the starter data that was sent to me in JSON format
            - this means the app will have something to present on the front end on the get go.
    
    NB. once this has been run locally once, there should not really be a need to run it again - doing so will reset the db to only contain the seeds data.
*/

const { Db } = require("mongodb");

use eggs_and_baskets;

db.dropDatabase();
db.eggs.insertMany(
    [

        {
            id: 1,
            weight: 100,
            laid: "21-07-2020"
        }, 
        {
            id: 2,
            weight: 150,
            laid: "25-06-2020"
        }, 
        {
            id: 3,
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