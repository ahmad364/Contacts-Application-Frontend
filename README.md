# Contacts Application

## Prerequisites

- **Node.js**: Ensure you have Node.js version 16 installed. You can check your current Node.js version by running:

  node -v

  If you need to install Node.js version 16, follow the steps below.

### Installing Node.js Version 16 Using nvm

1. **Install nvm**: Follow the installation instructions from the [nvm GitHub repository](https://github.com/nvm-sh/nvm#install--update-script).

2. **Verify nvm installation**: Close and reopen your terminal, then run:

    nvm --version

3. **Install Node.js version 16**:

    nvm install 16

4. **Use Node.js version 16**:

    nvm use 16

5. **Set Node.js version 16 as the default version**:

    nvm alias default 16

6. **Verify the Node.js version**:

    node -v

    This should output a version number starting with `v16`.

## Getting Started

### Cloning the Repository

First, clone the repository to your local machine using Git:

git clone https://github.com/your-username/your-repository.git

Navigate into the project directory:

cd your-repository

### Installing Dependencies

Install the project dependencies using npm (make sure you are in the project directory):

npm install

### Running the Application

To start the development server, run:

npm start

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

### Additional Scripts

- **Build**: To build the application for production, run:

  npm run build

- **Test**: To run tests, use:

  npm test

## Troubleshooting

If you encounter any issues, ensure you are using Node.js version 16 by running:

node -v

If the version is not 16, follow the steps in the [Installing Node.js Version 16 Using nvm](#installing-nodejs-version-16-using-nvm) section to switch to the correct version.
