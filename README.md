# Welcome to Create.ai 👋
Create.ai is an AI Content Creation Platform which generates high quality content leveraging the power of AI.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="./client/src/assets/preview/1.png" alt="" width="825"/>
  <img src="./client/src/assets/preview/3.png" alt="" width="825"/>
  <img src="./client/src/assets/preview/2.png" alt="" width="825"/>
</div>

## Get Started
1. Clone the repository
```bash
git clone https://github.com/LEELAMANOHARGUDIVADA/create.ai-web.git
```

2. Navigate to client directory and install dependencies
```bash
cd client
npm install
```

3. Add a .env file in the root directory of client folder and add the below environment variables
```bash
VITE_API_URL='your-server-url'
```

4. Navigate to server directory and install dependencies
```bash
cd server
npm install
```

5. Add a .env file in the root directory of server folder and add the below environment variables
```bash
PORT=8000
MONGODB_URI="your-mongodb-uri"
CLIENT_URL="your-client-url"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id",
GITHUB_CLIENT_SECRET="your-github-secret"
FACEBOOK_APP_ID=your-facebook-app-id
FACEBOOK_APP_SECRET=your-facebook-app-secret
JWT_SECRET="your-jwt-secret"
EMAIL_USER="your-email-id",
EMAIL_PASSWORD="your-email-app-password"
```

6. Now, you can start your client and server in their respective directories by running the command.
```bash
npm run dev
```

# API Documentation

## Overview

This document provides an overview of the API routes, models, and controllers used in this project.

## Server Setup
-**File:** [server/index.js](server/index.js)
-**Description:** The `index.js` file sets up the core server for the application, handling configuration, routes, and authentication. It initializes the Express server, integrates environment variables, and connects to MongoDB. It also configures authentication via Passport.js using Google, GitHub, and Facebook OAuth strategies. Below are the key components of the server setup:

**Environment Variables**:
Loads environment variables using the `dotenv `package for secure management of sensitive data such as API keys and database URIs.

**Express Setup**:
Initializes an Express application with essential middlewares like `express.json()` for JSON parsing, `cors()` for Cross-Origin Resource Sharing, and express-session for handling session management.

**Passport Authentication**:
Configures Passport.js with strategies for `Google`, `GitHub`, and `Facebook` authentication.

**Google OAuth2**: Allows users to sign in via their Google account.
**GitHub OAuth2**: Allows users to sign in via their GitHub account.
**Facebook OAuth**: Allows users to sign in via their Facebook account.
**Session Management**:
Configures session handling using express-session to manage user sessions and provide stateful authentication across requests.

**API Routes**:
Defines the `/api/user` route for user-related operations, connected to the UserRoutes.js file. Authentication routes like `/auth/google`, `/auth/facebook`, and `/auth/github` are defined for third-party authentication.

**User Serialization**:
Uses `passport.serializeUser()` and `passport.deserializeUser()` to handle storing and retrieving user sessions.

**MongoDB Connection**:
Connects to MongoDB using a utility function `connectDB()` located in db/connectdb.js, ensuring the database is ready when the server starts.

**Server Initialization**:
The server listens on a port defined in the `.env` file, and upon starting, it establishes the connection to the MongoDB database and logs a confirmation message.

## Database

### MongoDB Connection

- **File:** [server/db.js](server/db.js)
- **Description:** Connects to the MongoDB database using Mongoose

## Models

### User Model

- **File:** [server/models/UserSchema.js](server/models/UserSchema.js)

| Field            | Type    | Description                  |
| ---------------- | ------- | ---------------------------- |
| firstName        | String  | User's first name            |
| lastName         | String  | User's last name             |
| email            | String  | User's email                 |
| password         | String  | User's password              |
| verificationCode | String  | Otp received on User's email |
| isNewUser        | String  | Returns true if new user     |
| isVerified       | Boolean | User's verification status   |

## Routes

### User Routes

- **File:** [server/routes/UserRoutes.js](server/routes/UserRoutes.js)
- **Controller:** [server/controllers/UserController.js](server/controllers/UserController.js)

| Route                   | Method | Description                      |
| ----------------------- | ------ | -------------------------------- |
| `/api/user/register`    | POST   | Register a new user              |
| `/api/user/verifyOtp`   | POST   | Verify OTP for user registration |

## Controllers

### User Controller

- **File:** [server/controllers/UserController.js](server/controllers/UserController.js)

| Function      | Description                                           |
| ------------- | ----------------------------------------------------- |
| `register`    | Registers a new user and sends OTP for verification   |
| `verifyOtp`   | Verifies the OTP sent to the user's phone number      |
| `login`       | login a user with email and password                  |

## Auth Controller

- **File:** [server/controllers/AuthController.js](server/controllers/AuthController.js)

| Function      | Description                                              |
| ------------- | -------------------------------------------------------- |
| `GoogleSignIn`| After Successful Google Signin creates a new user in db  |

## Node Mailer

### Node Mailer Configuration

- **File:** [server/nodemailer/nodemailer.config.js](server/nodemailer/nodemailer.config.js)

```bash
import nodemailer from "nodemailer"


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'your-email-id',
        pass: 'your-app-password'
    }
});

export default transporter;
```
### Emails

- **File:** [server/nodemailer/emails.js](server/nodemailer/emails.js)
- **Description:** Sends Verification Otp to user's email

### JWT Utility

- **File:** [server/utils/jwt.js](server/utils/jwt.js)
- **Description:** Generates JWT tokens for user authentication.

