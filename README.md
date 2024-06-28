# ✨Chat App Using Node.js, Socket.io & SQL 
This Chat App is a real-time messaging application built using Node.js, Socket.io, and MySQL. It provides instant messaging, secure and reliable communication, and a user-friendly interface. The app is fully mobile-responsive, ensuring a seamless chatting experience on any device.


## Features

- ✨ Real-Time Messaging: Instantly send and receive messages in real-time!
- 🗃️ MySQL Database: Store usernames, messages, and timestamps.
- 📱 Mobile Responsive: Seamless chatting experience on any device!
- 🔒 Secure & Reliable: Ensuring safe and consistent communication!
- 🎨 User-Friendly UI: Easy to use with an intuitive interface!


![Screenshot 2024-06-28 120335](https://github.com/ARO369/nodejs-chat-app/assets/106620231/ab5328ce-3256-4b02-a8cd-b9380ebb1156)



## Tech Stack

- **Node.js** - For server-side logic
- **Socket.io** - For real-time communication
- **MySQL** - For storing data

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository
    ```sh
    git clone https://github.com/ARO369/nodejs-chat-app
    ```
2. Navigate to the project directory
    ```sh
    cd nodejs-chat-app
    ```
3. Install server dependencies
    ```sh
    npm install
    ```


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


## Usage

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action. You can send and receive messages in real-time, and the chat history is stored in the MySQL database.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

Thank you for checking out the Chat App! Crafted an engaging and secure platform for real-time communication. If you have any feedback, suggestions, or just want to say hi, feel free to reach out.

---

Made with ❤️ by Aaradhya Pathak
