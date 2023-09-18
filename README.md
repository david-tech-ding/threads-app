## Mock Threads App

A full-stack MERN Threads application built using TypeScript and Express. It allows users to create and manage threads for discussions, and also to join communities to share relevant threads.

## Features

- User authentication and registration with Clerk.
- Handle file uploads with UploadThing.
- Create, read, update, and delete threads.
- Reply to threads.
- Join communities.
- View your activities.
- Search for users of threads.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB server running locally or accessible via a URL.

## Getting Started

# 1. Clone the repository:

   git clone [https://github.com/yourusername/threads-app.git](https://github.com/david-tech-ding/threads-app.git)

# 2. Install the project dependencies

- Navigate to the project folder `cd threads-app`.
- Run `npm install`.

3. Create a .env.local file in the project root and add the following environment variables:

- MONGODB_URI=your_mongodb_connection_string
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
- UPLOADTHING_SECRET=your_upload_thing_secret

## Run the deployment server

- Run command `npm run dev`. Then navigate to the localhost on your browser.
  
## Usage

- Register a new account with Clerk or log in using an existing account. If you are creating a new account, you will be prompted to complete an onboarding page.
- Start by creating a new thread by clicking on the 'Create Thread' button.
- Explore other features such as Search, Activities, amnd Communities.
- View your own profile page where you can see your biography, your threads, replies, and threads you are tagged in.
- Delete your own threads by clicking on the 'Bin' button.

## Built with
- Next.js
- React.js
- Express.js
- MongoDB
- TypeScript
- Tailwind CSS
