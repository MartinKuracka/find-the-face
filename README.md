# App that will find face in the picure

This project was created as a sample to show different posibilities of Web Apps. It is fully responsive.
User has to create account in order to be able to use the app. 
Firstly it was built and tested locally and then it was deployed to Heroku as an sample project App.
I have found out thet initial loading of user information after login can sometimes take several seconds due to starting of the server.
It also shows basic form data validation for email and password on user register. (correct email format using @ and password at least 6 characters long)


## After logging IN

The App will show users name and the number of pictures he has submitted.

## Resources and tools used

Front-End:

This App was built using ReactJS, NodeJS and ExpressJS, for basic styling I have used Tachyons library.

For face detection I have used the Clarifai API that is free to use, but ocassionally can be down due to constant updates. If the App is not working try again later as this might be the case. 

Back-End:

Server was built using ExpressJS and NodeJS, for communication is used JSON and the database is PostgeSQL.
Passwords are saved encrypted using BCRYPT library, querries to the server are done by using KNEX.
Server as well as DB is deployed on HEROKU.

Feel free to try the App or explore the code. Any suggestions or comments are welcome. 
