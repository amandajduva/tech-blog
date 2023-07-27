# tech-blog
A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts. Follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Usage and Installation

To use this project, you will need Node.js, Express.js, express-handlebars, MySQL2, Sequelize, dotenv, bcrypt, express-session, and connect-session-sequelize. Please be sure to start the database by running SOURCE schema.sql before staring the server. You may also seed the database with the existing seeds files of dummy data to create existing posts. Please follow the instructions on this [GitHub Repository](https://github.com/femke77/seeds.git) to correctly use the provided seeding with fakerjs. To start the server, run node server.js or npm run start. 

Link to the [deployed application](https://desolate-forest-87014-6a91b6febab4.herokuapp.com/). 

Screenshot of deployed application:
![deployed application]()

## Credits

While I wrote the code for this application, I received support from a tutor with logic and fakerjs. 

## License

Please refer to the LICENSE in the repo.