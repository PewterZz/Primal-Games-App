# Primal Games Marketplace
## Getting Started
Welcome to the project, in order to run the program, you will need to navigate to the main directory and the backend directory on three separate console windows.

### Main Directory
Navigate to the main directory:
```
cd path/to/main/directory
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
Navigate to the backend directory:
```
cd path/to/backend/directory
```
Install the necessary packages:
```
npm install
```
Start the development server and the prisma studio:
```
nest start --watch
npx prisma studio
```  

Once you have completed these steps in all three console windows, the program should be running and ready for use.
You can also verify the status of the program by visiting the url displayed on the expo development server.

Please make sure that you have all the dependencies installed for this program to run. If you face any issues, feel free to raise an issue on the Github repository.
