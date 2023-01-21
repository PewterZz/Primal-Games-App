# Primal Games Marketplace
## Getting Started
Welcome to the Primal games project, in order to run the program, you will need to navigate to the main directory and the backend directory on three separate console windows. Make sure that you do both the backend and the main part of the program to ensure that it works on your system.

Members : 
- Peter Nelson Subrata - 2502023562
- Vincent Yono
- Justin Theofilus Yonathan

Main Functions : 
- Making user profile
- Authenticating user
- Game page
- Searching for games
- Placing games in your personal cart
- Realistic payment methods
- transactions page
- friend searching
- friend page
- library page

Video demonstrations : 
- https://drive.google.com/file/d/1H0Ei7diVneWE9PGMJinyMHPfol_NLTVE/view?usp=sharing
- https://drive.google.com/file/d/1EatRrJJ-EOZGLcB8eLi8uGwBFyPW5jrB/view?usp=sharing  

Video Tutorial : 
- https://www.youtube.com/watch?v=jvL5Aa08u3c

### Main Directory
Navigate to the main directory (you will probably start out in the main directory so you can skip this step) :
```
cd Primal-Games-App
```
Install the necessary packages:
```
npm install
npm install @expo/cli
```
Start the development server:
```
npx expo start
```
If you are having trouble starting or connecting to it then use the one below instead.

```
npx expo start --tunnel
```  
To use the barcode that is provided you will need to install expo go from the app or play store and you will need to either scan the barcode on the app or from your camera directly. Keep in mind that the look of the app is going to be a little different as we have not completely considered all phone sizes.  
Before you run the npx expo start though you should go to node modules and remove instances of the ViewPropTypes import in react native and import it from deprecated react native props instead. This is located in the react-native-snap-carousel folder under the src. After that running the app should work. To make the app work with the database you need to do the steps below.

### Backend Directory
Navigate to the backend directory (start from the main directory) :
```
cd backend
```
Install the necessary packages:
```
npm install
```  
Before you run the development server you should make sure that the database url is correct. The database url is located in the backend directory under the prisma folder in a file named schema.prisma, this file contains the database url in line 10 of the file. The syntax for the url is "mysql://{user}:{password}@localhost:3306/primalgames".  
You need to also make sure that the server is up and running on port 3306 or whatever port you choose to start the server on. Once the server is up make sure that the server has a table for primalgames. You need to let prisma push and generate it's file for this to occur.  
```
npx prisma db push
npx prisma generate
```

Once you run these commands the table should appear in the database and from there you can move on.  

Start the development server and the prisma studio:
```
nest start --watch
npx prisma studio
```  

After you have started the development servers. The program should be able to start, however on your phone it is going to need to connect to your localhost database while being outside of the host machine.  
Thus we are going to use another way that can forward the localhost port into the web which is the use of ngrok.  
The easiest way to use ngrok is to download it's vscode extension and do ( ctrl + shift + p ) to open up the command palette. From there you need to search for ngrok by typing ">ngrok start". A window will pop up at the top of the screen that will ask for the port number you wish to forward. Type in port 3333 the port in which our Nest js api has the server on.  

Once this has been done, at the bottom of the screen to the right a pop up will show up that tells you that the server has started. You need to copy the link that it gives you and paste and replace the existing link into the file known as DatabaseConn.js in the main directory of the program. This should make the program start working properly all around. It is noted that at first the database will be completely empty and thus you will need to populate the database. You can do this manually in the web admin page that will popup when you run npx prisma studio or you can send json text via http request methods to send the information manually.

You can use this program in this drive to populate the database :  
https://drive.google.com/drive/folders/18zEXc5Fop0Ezsc1ezWRZRDo2EKLptKT6?usp=share_link

Once you have completed these steps in all three console windows, the program should be running and ready for use.
You can also verify the status of the program by visiting the url displayed on the expo development server.

Please make sure that you have all the dependencies installed for this program to run. If you face any issues, feel free to raise an issue on the Github repository.  

# Changes Made  

![alt text](path/to/Screenshot_20230121-163506_Expo_Go.jpg)

![alt text](path/to/Screenshot_20230121-163514_Expo_Go.jpg)
