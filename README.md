# App that will find face in the picure

This project was created as a sample to show different posibilities of Web Apps.
User has to create account in order to be able to use the app. 
Firstly it was built and tested locally and then it was deployed to Heroku as an sample project App.


## After logging IN

The App will show users name and the number of pictures he has submitted.

## Resources and tools used

Front-End:

This App was built using ReactJS, NodeJS and ExpressJS

For face detection I have used the Clarifai API that is free to use, but ocassionally can be down due to constant updates. If the App is not working try again later as this might be the case. 

Back-End:

Server was built using ExpressJS and NodeJS, for communication is used JSON and the database is PostgeSQL.
Passwords are saved encrypted using BCRYPT library, querries to the server are done by using KNEX.
Server as well as DB is deployed on HEROKU.

Feel free to try the App or explore the code. Any suggestions or comments are welcome. 
