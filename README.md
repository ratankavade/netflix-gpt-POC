# Netflix-GPT
## Description
This is a react application where I try to make application like Netflix. I have added some key features of react like Hooks, Forms, Validations, fetch API's, Custome Hooks, Redux, etc.
I have used the TMDB (The Movie Database) api's to fech different types of movies list and tailwind CSS for styles, also to register user I used the firebase database.

### Sign In / Sign Up
For background image and for logo I used the netflix images. On landing page user can see the login page. If user is not resgisted then needs to do Sign Up first then using registerd credentials user can login via Sign In screen. Here I have apply validations for registerd user ID and password. For Sign In, Sign Up, Logout I have used the firebase api's and database.
![Screen Shot 2024-04-22 at 1 07 09 PM](https://github.com/ratankavade/netflix-gpt-POC/assets/84063556/e158d3e7-63c4-486c-a88b-cf85b8393d42)
![Screen Shot 2024-04-22 at 1 08 34 PM](https://github.com/ratankavade/netflix-gpt-POC/assets/84063556/5e7992a6-84c5-49c4-adce-05fa4b7ce3d6)


### Browse Screen
Once user logged in it will redirect to Browse Screen. To store user details I used Redux store. In browse screen user can see the name of logged in user in header. GPT search button, use name and sign out button will only visible on header once user logged in. A background vedio will play automatically on mute and the name and overview of latest movie will appear on screen.
User can see the list of Now Playing movies, Top Rated movies, Popular movies and upcomming movies on screen with horizontal scroll bar. I have get this data from TMDB through api's and store them in different slice of Redux store.
![Screen Shot 2024-04-22 at 1 09 38 PM](https://github.com/ratankavade/netflix-gpt-POC/assets/84063556/9c5778bd-87f5-49c8-bd63-b193ec26898c)
![Screen Shot 2024-04-22 at 1 10 24 PM](https://github.com/ratankavade/netflix-gpt-POC/assets/84063556/145d86eb-32fb-4993-8f3f-f9f00e7be399)


### GPT Search
User will redirect to GPT Search screen once click on GPT Search page. GPT Search button will toggle between GPT Search and Back to Home button. On this screen user will see the serch bar container. 
GPT seach functionality is in progress now..
![Screen Shot 2024-04-22 at 1 12 00 PM](https://github.com/ratankavade/netflix-gpt-POC/assets/84063556/78aae409-033b-42fb-b7b5-1e1956ec7575)


# How to install and run the project
## git clone
Clone the respective git repository by selecting respective branch. Ex. git clone -b <branch_name> <repository_url>

## npm install
Run the npm install command inside main folder.

## npm run start
Start application compilation by running npm run start command and run application in browser. If 3000 port is availabe this application will run on http://localhost:3000/
