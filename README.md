# Welcome to Create.ai 👋
Create.ai is an AI Content Creation Platform which generates high quality content leveraging the power of AI.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="./client/src/assets/preview/1.png" alt="" width="800"/>
  <img src="./client/src/assets/preview/2.png" alt="" width="800"/>
  <img src="./client/src/assets/preview/3.png" alt="" width="800"/>
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

## API Documentation

