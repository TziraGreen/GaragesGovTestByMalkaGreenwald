# Angular-Node-MongoDB Project

This project consists of a Node server, an Angular client, and MongoDB.

The Node server side fetches garages data from a government API, retrieves garages data from the MongoDB database, and saves selected garages to the database.

The Angular client side contains a multiselect component that takes the garage data from a government API and displays their names.

The user selects in the multi-select component the names of the garages whose data he wishes to add to the database and there is a table that shows the user which garages he chose to add to the database.

(as soon as the user clicks on the add button, the table is updated with the new garages that were selected and added to the database).

### Visually it looks like this:
#### Before adding data to the Mongo database:
![image](https://github.com/user-attachments/assets/3b275fca-843a-4e1e-ab2f-fec8020ebc4f)

#### After adding data to the Mongo database:
![image](https://github.com/user-attachments/assets/8b2b2772-bb12-400f-ac35-16d538f52d90)

### How do you run and install the project? lets start:

To install this application, run the following command:
```
git clone "https://github.com/TziraGreen/GaragesGovTestByMalkaGreenwald"
```

Then open the gov-garages-client and gov-garages-backend folders separately on VSCODE.
## Node.ts Server - gov-garages-backend (Backend)
run on terminal :
```
npm i
```

then :

```
npm run dev
```

#### the server side run on http://localhost:5000 (from env file)

## mongoDB compass (DB)

Open MongoDB compass and write this in the URI:
```
mongodb://localhost:27017/garages_db
```

## Angular Client - gov-garages-client (Frontend)
run on terminal :
```
npm i
```

then: 

```
npm start
```

#### the client side run on http://localhost:4200


### Finish

After these actions you should be able to run the project.
Thanks.


