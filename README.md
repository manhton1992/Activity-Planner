# FWE-WS19-754346-HA1
# Activity Planner

The aim of this application is to carry out activities which we would like to carry out soon.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them?  
- [Node.js](https://nodejs.org/docs/latest/api/)  
- [npm](https://www.npmjs.com/package/npm-api)
- [express](https://expressjs.com/de/api.html)
- [MongoDb](https://mongoosejs.com/)
### Installing  
- Clone the project from gitlab  
```sh
$ git clone https://code.fbi.h-da.de/istmtnguy/fwe-ss19-754346-ha1.git
```
- Go the the folder
```sh
cd fwe-ss19-754346-ha1
```
- Install all dependencies
```sh
$ npm install
````
## Usage  
- Start program  
```sh
npm run dev
```
 - URIs relative to http://localhost:3000/api
The program has following endpoints: 

| Method  | HTTP request | Description |
| ---- | ---------------- | ----------------------------------|
| list  |  GET /activityPlanners| Returns a list of all activities. |
| list  | GET /activityPlanners/activity:id  | Return a single activity with given id. If there is no activity that has matching id, nothing is returned. |
| list  |  GET /activityPlanners/upcomming | Returns a list of all upcomming activities. |
| list  |  GET /activityPlanners/past | Returns a list of all finished activities. |
| list  |  GET /activityPlanners/download | Download a list of all activities as a csv file. |
| insert  |  POST /activityPlanners| Create a new activity. The newly created activity is returned. |
| delete  |  DELETE /activityPlanners/activity:id | Delete a activity with the given id. The newly deleted activity is returned. |
| update  |  PUT /activityPlanners/activity:id | Update a activity with the given id. The newly updated activity is returned. |
| list  |  GET /users | Returns a list of all users. |
|list  | GET/holidays | Return a list of holidays in Germany.  |

## Running the tests

There are 2 options to test the program: 
 - Testing with Postman
 - Running automated test

### Test with Postman
- Download file postman_collection.json in folder fwe-ss19-754346-ha1/src\exportFile and import this file to Postman and tests with different endpoints can be executed

### Running automated tests
You can run automated tests with npm
```sh
$ npm run test
```
## Authors

* **Manh Ton Nguyen** 



