# App name: Eatabout

Live app: https://eatabout-app.balayaydemir.now.sh/

Technologies used: HTML, CSS, Javascript, Postgresql, NodeJS, Express, ReactJS, Firebase (for photo upload)

## Summary: 
    Eatabout is an app that allows you to track restaurants you want to visit and those you have already visited.
    As a user, you can add a wishlist or visited restaurant, give your visited restaurants a rating, add photos of 
    dishes that you have eaten at a visited restaurant, and filter your lists by city, cuisine, and rating. The purpose
    of Eatabout is to give the user a simple interface for keeping track of this information so that they can find information
    on restaurants they have been to or ones they want to go to on the fly.

## Components: 
    All non-route components are located in the src directory in a folder titled components. Below is a description of the purpose of each component: 
        - CuisineBreakdown: renders pie chart on stats route 
        - EditEntryForm: renders edit entry form 
        - Header: renders nav bar in main App component 
        - ItemsEaten: renders each item added to the following forms: add new restaurant, edit entry, move to visited
        - Loading: renders loading indicator 
        - MoveToVisitedForm: renders the move to visited form 
        - Rating: renders star rating on all forms 
        - RestaurantEntries: renders each entry on a visited restaurant when expanded 
        - SignupForm: renders signup form at the end of landing page 
        - VisitedItem: renders each visited item 
        - WishlistItem: renders each wishlist item 

## Routes: 
    Each route is labeled below in screenshots 

## Services: 
    All API call functions live in the src directory in a folder titled services. 
        - token-service: all functions for auth tokens - used primary in auth-api-service 
        - auth-api-service: all user authentication and user sign up functions 
        - restaurant-api-service: all CRUD functions for the application 


## Screenshots:

Landing Page (located in Routes folder)
![Landing page](https://imgur.com/3YLE3m2.png)

Landing Page - expand on hover
![Landing page - expand on hover](https://imgur.com/aUdRfMe.png)

Demo Login (located in Routes folder)
![Demo login](https://imgur.com/4p6b1sG.png)

Home - User restaurants (located in Routes folder under RestaurantListPage)
![Home - restaurants page](https://imgur.com/wz0WyIm.png)

Expanded Lists
![Home - restaurants page - expanded](https://imgur.com/AQ1145f.png)

Move wishlist restaurant to visited 
![Home - restaurants page - expanded - move to visited](https://imgur.com/GVjzDoY.png)

Filter restaurants
![Home - restaurants page - expanded - filter](https://imgur.com/CVQfUEG.png)

Visited restaurant - expanded
![Home - restaurants page - expanded - visited](https://imgur.com/KMmEc4m.png)

Add new visit form (located in Routes folder)
![Home - restaurants page - expanded - visited - add new visit](https://imgur.com/afMdaqA.png)

Add restaurant - wishlist
![add new restaurant - wishlist](https://imgur.com/5KE09g1.png)

Add restaurant - visited
![add new restaurant - visited](https://imgur.com/a6DoiYZ.png)

User Stats page (located in Routes folder)
![stats page](https://imgur.com/Lzyz4jW.png)



