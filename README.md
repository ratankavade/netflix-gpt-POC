# Netflix-GPT
## Description
This is a react application where I try to make application like Netflix. I have added some key features of react like Hooks, Forms, Validations, fetch API's, Custome Hooks, Redux, etc.
I have used the TMDB (The Movie Database) api's to fech different types of movies list and tailwind CSS for styles, also to register user I used the firebase database.

### Sign In / Sign Up
For background image and for logo I used the netflix images. On landing page user can see the login page. If user is not resgisted then needs to do Sign Up first then using registerd credentials user can login via Sign In screen. Here I have apply validations for registerd user ID and password. For Sign In, Sign Up, Logout I have used the firebase api's and database.

### Browse Screen
Once user logged in it will redirect to Browse Screen. To store user details I used Redux store. In browse screen user can see the name of logged in user in header. GPT search button, use name and sign out button will only visible on header once user logged in. A background vedio will play automatically on mute and the name and overview of latest movie will appear on screen.
User can see the list of Now Playing movies, Top Rated movies, Popular movies and upcomming movies on screen with horizontal scroll bar. I have get this data from TMDB through api's and store them in different slice of Redux store.

### GPT Search
User will redirect to GPT Search screen once click on GPT Search page. GPT Search button will toggle between GPT Search and Back to Home button. On this screen user will see the serch bar container. 
GPT seach functionality is in progress now
