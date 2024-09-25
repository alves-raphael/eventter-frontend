# Event List Front End - In All Media Challenge

## Requirements
In order to run this you need to have both node.js and npm installed. I personally used the node 21.0 version.

## Dependency installation and execution
after cloning the repository, open the directory in the terminal and run `npm install`. After the installation is finished, run `npm run dev` 

In the terminal will ne show the port which will be running the app, just like `localhost:1573`

### Observation
Make sure all the wordpress back is already setup before in order to work properly

## Technical decisions
### GraphQL
Created a `/graphql` folder to keep files most related with the graphql. Onde of the is the `setup.tsx` which is resposible for the graphql initalization. And The `Query.ts` file, which holds all the queries to graphql

### Types
I decide to use typescript to make the code less error prone and have all the benefits of type system.

I created the `types.ts` file to keep all the types used in the app, including the responses mapping from the API.