# DEALE BEER CHALLENGE

Deale is organizing the next team building. The idea is to celebrate a Beer party together, but some team members don't know anything about beer so the team requires a web application to learn some beer characteristics.
The application should consist of two views. The first view should list the beers and the second view should show the details of a selected beer.
The application should be a Single Page Application so that the navigation is done always client-side, without completely refreshing the whole document.

## Specifications
1. Retrieve data from PUNK API: https://punkapi.com/documentation/v2
- Get beer list from the URL: https://api.punkapi.com/v2/beers.
- To get a specified beer details by id:
https://api.punkapi.com/v2/beers?ids={id}

## 
$ npm install
$ npm start

##
| GET | [beers] | Get all the beers from the DB 
<br/>
| GET | /:id    | { beer } | Get the a single 
| GET | /random | { beer } | Get a random beer from the DB   
 


