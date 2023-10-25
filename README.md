# nodejs-chat-app
This is a chat app build with node js and socket.io. It has also connected with database which is sql using mysql to store the names of user and messages with their timestamps.

# User Guide
dependencies:
npm init
npm i socket.io
npm i mysql2

# Create Databse in sql workbenck
step 1) create table
use chatappdb;
CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sender VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

step 2) View table
SELECT * FROM messages;

step 3) Remove Data from table
TRUNCATE TABLE messages;

# Feel Free to Contact me
Email: aaradhyapathakofficial@gmail.com
Linkedin: https://www.linkedin.com/in/aaradhyapathak/
