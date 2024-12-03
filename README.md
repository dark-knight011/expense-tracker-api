# Expense Tracker API 📊

A simple RESTful API for tracking personal expenses. Users can register, log in, manage their expenses, and view spending summaries. Built with Node.js, Express, MongoDB, and JWT for secure authentication.

## Features 🚀

- **User Authentication** 🔐: Register and log in with JWT-based authentication.
- **Expense Tracking** 💸: Add, update, and delete income/expense records.
- **Monthly Summary** 📅: View total income, expenses, and remaining balance for the month.
- **Security** 🔒: Password hashing with bcrypt, JWT for authentication.

## Tech Stack 🛠️

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for building REST APIs
- **MongoDB**: Database for storing user and transaction data
- **Mongoose**: MongoDB Object Data Modeling (ODM)
- **JWT**: Authentication with JSON Web Tokens
- **bcrypt.js**: Password hashing
- **dotenv**: Manage environment variables

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation 🛠️

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/expense-tracker-api.git
    cd expense-tracker-api
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure environment variables**:

    Create a `.env` file in the root directory:

    ```env
    MONGO_URI=your-mongo-database-uri
    JWT_SECRET=your-jwt-secret
    PORT=5000
    ```

## Usage 🖥️

1. **Start the server**:

    ```bash
    npm run dev
    ```

2. The server will run on [http://localhost:5000](http://localhost:5000).

3. You can test the API using tools like **Postman** or **Insomnia**.

## Contributing 🤝

We welcome contributions to improve the Expense Tracker API! To contribute:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch: `git checkout -b feature/your-feature`.
4. Make your changes and commit: `git commit -m 'Add new feature or fix bug'`.
5. Push to the branch: `git push origin feature/your-feature`.
6. Submit a pull request to the main repository.

For a list of contributors, check out the [Contributors section on GitHub](https://github.com/your-username/expense-tracker-api/graphs/contributors).

## License 📜

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact 📞

For inquiries or support, please contact:

**Abhinav**  
📧 [darkbytecodes@gmail.com](mailto:darkbytecodes@gmail.com)

---