# E-LEARNING MANAGEMENT SYSTEM
- this is a full stack E-learning web application where users can register , login , browse the course and enroll in the courses and view their enrolled courses
- It uses a MERN STACK (MongoDB , Express.js , React.js , Node.js).

# TECH STACK
   # Frontend
     - React.js
     - React Router
     - Axios
     - CSS
   # Backend
     - Node.js
     - Express.js
     - MongoDB
     - JWT(Authentication)
     - bycrpt(Password Hashing)
     - Mongoose(MongoDB) 

# FOLDER STRUCTURE 

  |- client/   # react frontend

     |- src/ 
          |- components/ 
               |- Navbar
               |- Footer
          |- pages/
               |- Register
               |- courses
               |- login
               |-  MyCourses
          |- App.jsx
          |- index.js
     |- public/

   |- server /

     |- models/
        |- courses.js
        |- users.js
     |- routes/
        |- Auth.js
        |- course.js
    |- server.js
    |- seedCourses.js
    |- .env

# FEATURES
     - Authentication
         - user can register and login using email and password
         - After login user will be redirected to courses only after login
        
    - Courses
        - User can view the list of available course
        - Enroll in a course
        - Enrolled courses are saved in MongoDB
        - "My Courses"  page displays all user-enrolled courses.

 # Setup
   - For frontend
     - cd client
     - npm install
     - npm start
   - For backend
     - cd server
     - npm init -y
     - node server.js