# Primal Games Marketplace
## Getting Started
Welcome to the Primal games project, in order to run the program, you will need to navigate to the main directory and the backend directory on three separate console windows. Make sure that you do both the backend and the main part of the program to ensure that it works on your system.

Members : 
- Peter Nelson Subrata - 2502023562
- Vincent Yono
- Justin Theofilus Yonathan

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
npx expo start --tunnel
```
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

Once you have completed these steps in all three console windows, the program should be running and ready for use.
You can also verify the status of the program by visiting the url displayed on the expo development server.

Please make sure that you have all the dependencies installed for this program to run. If you face any issues, feel free to raise an issue on the Github repository.
