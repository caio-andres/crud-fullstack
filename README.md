# CRUD

### Technologies Used

#### `Front-end`

- **Programming Language:** JavaScript
- **Libraries:**
  - React.js
  - Axios
  - styled-components

#### `Back-end`

- **Programming Language:** JavaScript
- **Runtime Environment:** Node.js
- **Libraries:**
  - Dotenv
  - MySQL
- **Framework:** Express.js

#### `Database`

- **Relational:** MySQL

# Getting Started

### `Run Front-end:`

#### _Open the terminal_

```powershell
cd front-end
```

```powershell
npm install
```

```powershell
npm start
```

### `Run Back-end:`

#### _Open a second terminal without close the first terminal_

```powershell
cd back-end
```

```powershell
npm install
```

```powershell
npm init -y
```

### _Create a file called .env in back-end folder, then copy the configurations bellow and paste in .env file, following the instructions in parentheses:_

```
HOST=localhost
USER=(username)
PASSWORD=(password)
DATABASE=(database name)
```

### _Back to the second terminal again_

```powershell
npm start
```

# Architecture Overview

### Back-end:

- Developed in Node.js with the Express framework.
- Structured with a `routes` folder to manage API routes, with a `users.js` file to handle CRUD methods related to users.
- Utilization of a `controllers` folder to contain business logic, with a `user.js` file to define functions for each CRUD operation.

### Front-end:

- Developed in React to create the user interface.
- Structured with a `components` folder to organize reusable components, including a form and a grid to display data.
- Utilization of a `styles` folder to manage global application styling, with a `global.js` file to define common styles.

### Communication between back-end and front-end:

- The front-end makes HTTP requests to the back-end through endpoints defined in routes.
- Requests are handled in the back-end by methods defined in controllers, which interact with business logic and the database as necessary.
- The back-end returns responses to the front-end, which uses them to update the user interface as appropriate.

### Architecture Benefits:

- Clear separation of responsibilities between front-end and back-end, facilitating system maintenance and scalability.
- Reusability of components in the front-end and business logic in the back-end, promoting clean and modular code.
- Utilization of modern technologies such as React and Node.js to create a robust and efficient application.

# Routes

| Method | Route | Description                                       |
| ------ | ----- | ------------------------------------------------- |
| GET    | /     | Return the created users datas from database.     |
| POST   | /     | Adds a new user from data provided from the grid. |
| PUT    | /:id  | Updates the user data based on their ID.          |
| DELETE | /:id  | Deletes a user based on their ID.                 |

# Mind Map

### Miro

<p>Mind Map created in Miro, thinking at final user experience. Simple and direct.</p>

# Task Management Software

### Trello

## Methodology

### KanBan

&darr; `Task Steps` &darr;

### Backlog

The Backlog is a list of tasks, features, or items that need to be completed in the future. It represents a collection of ideas or requirements that have not yet been started.

### Doing

Doing represents the tasks that are currently being worked on by the team. These tasks are actively being implemented or developed.

### Testing

Testing is the phase where the completed tasks are assessed for quality and functionality. It involves running tests to ensure that the implemented features meet the specified requirements and work as intended.

### Code Review

Code Review is a process where code changes made by developers are reviewed by other team members. It ensures that the code adheres to coding standards, is maintainable, and does not introduce any potential issues or bugs.

### Done

Done represents the tasks that have been completed and meet the acceptance criteria. These tasks are ready to be delivered or deployed to the end-users or stakeholders.

# Project Developer and README Author

```
@caio_andress
```

<div style="display: flex; gap: 10px">

<a href="https://tiktok.com/@caio_andres">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>
</a>

<a href="https://instagram.com/caio_andress">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
</a>

<a href="https://youtube.com/@caio_andress">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
</a>

<a href="linkedin.com/in/caio-porto-oliveira">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
</a>

<a href="https://github.com/caio-andres">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
</a>

<a href="mailto: contact.caioandres@gmail.com">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
</a>

</div>
