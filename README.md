# burger
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and log them by using MySQL, Node, Express, and Handlebars in an MVC pattern.

# Links
Heroku link: 
Github repo:


# Requirements

* Node
* MySQL Workbench
* The installation of the following NPM packages:
    * Express [npm i express]
    * Handlebars [npm i express-handlebars]
    * MySQL [npm i mysql]

# Directory Structure

```
burger
│
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── public
│   └── assets
│    	├── css
│       │   └── burger_style.css
|       |
│       ├── img
|       |   ├── readme-screens
|       |   |   ├──eatDaBurgerInstructions.gif
|       |   |   └──mySQLdbInAction.gif
|       |   |
│       │   ├── burgerFavIcon.png
|       |   ├── BurgerBackground.png
|       |   └── burgerSimpleBackground.png
|       |
│       └── js
│       	 └── burgers.js
│
├── views
|   ├── index.handlebars
|   │
|   └── layouts
|       |
|       └── main.handlebars
|
├── package.json
│
└── server.js
```

# Instructions

1- Open Heroku link or download/clone repository locally(if so, make sure to install the packages required for it to work).

2-<img width="960" alt="mysql" src="https://raw.githubusercontent.com/onix-xcc/burger/master/public/assets/img/readme-screens/eatDaBurgerInstructions.gif">

# Under the Hood 

Meanwhile in the MySQL database table
<img width="960" alt="mysql" src="https://raw.githubusercontent.com/onix-xcc/burger/master/public/assets/img/readme-screens/mySQLdbInAction.gif">
* Notice as to when the burger is added on the website it creates an entry in the database table.
* When pressing the utensils icon the burger database value of devoured goes from 0 to 1 to change it's devoured value from false to true.
* When pressing the trash icon, the burger is removed from the table altogether.




