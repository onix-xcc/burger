# burger
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and log them by using MySQL, Node, Express, and Handlebars in an MVC pattern.


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
│   ├── assets
│   │	├── css
│   │   │   └── burger_style.css
|   |   |
│   │   ├── img
│   │   │   └── burger.png
|   |   |   └── burgerBackground.png
|   |   |
│   │   └── js
│   │   	 └── burgers.js
│   │
│   └── test.html
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

