## Description

APIs have been created for storing a data with an object that has name and age which returns an id for that data. 

That id can be used to get that data

If not id is passed and when a request id made all the data is returned. 

Note: All the data will be deleted if the server stops

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## APIs

1. Post request to create a data
    URL: "http://localhost:3000/"
    Type: POST
    Content-type: "application/json"
    Data: 
    ```JSON
      {
        name: "Pragadeesh",
        age: 25
      }
    ```

    Response:
    ```JSON
      {
        id: "bb83546e-225b-45d7-b8c5-46a0eeba1efb"
      }
    ```
  
  Note: if using postman, make sure add `content-type` as `application/json` in the headers

2. Get request to get all data
    URL: "http://localhost:3000/"
    Type: GET

    Response: 
    ```JSON
      {
          "bb83546e-225b-45d7-b8c5-46a0eeba1efb": {
              "name": "Pragageesh",
              "age": 25
          }
      }
    ```

3. Get request to get individual data
    URL: "http://localhost:3000/65cf69f6-0c0a-4977-a8af-8ce84e470bb0"
    Type: GET

    Response: 
    ```JSON
      {
        "name": "Pragageesh",
        "age": 25
      }
    ```