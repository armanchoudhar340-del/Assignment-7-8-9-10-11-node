# User Management API (POST, GET, PATCH & DELETE)

## Assignment 9

An Express.js and MongoDB REST API implementing **Create (POST)**, **Read (GET)**, **Update (PATCH)**, and **Delete (DELETE)** operations using Mongoose, organized with a clean modular MVC-style architecture.

## Project Structure

```text
ASSIGEMENT-9/
├── model/
│   └── userModel.js          # Mongoose model compiled from userSchema
├── router/
│   └── userRouter.js         # Express router handling CRUD endpoints
├── schema/
│   └── userSchema.js         # Mongoose schema definition with validation rules
├── SCREENSHOT/               # Execution screenshots for server, API tests, and DB
├── package.json              # Project configuration and dependencies
├── package-lock.json         # Locked dependency tree
├── server.js                 # Application entry point and database connection
└── README.md                 # Project documentation
```

---

## API Endpoints & Examples

### 1. Create User (`POST /api/users`)
**Request:**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users`
- **Body (JSON):**
```json
{
  "name": "Arman Chaudhary",
  "email": "arman.chaudhary@example.com",
  "age": 21,
  "course": "BCA"
}
```

**Response (`201 Created`):**
```json
{
  "message": "User created successfully",
  "user": {
    "name": "Arman Chaudhary",
    "email": "arman.chaudhary@example.com",
    "age": 21,
    "course": "BCA",
    "_id": "<user_id>",
    "__v": 0
  }
}
```

---

### 2. Get All Users (`GET /api/users`)
**Request:**
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/users`

**Response (`200 OK`):**
```json
{
  "message": "Users fetched successfully",
  "users": [
    {
      "_id": "<user_id>",
      "name": "Arman Chaudhary",
      "email": "arman.chaudhary@example.com",
      "age": 21,
      "course": "BCA",
      "__v": 0
    }
  ]
}
```

---

### 3. Update User (`PATCH /api/users/:id`)
**Request:**
- **Method:** `PATCH`
- **URL:** `http://localhost:5000/api/users/<user_id>`
- **Body (JSON):**
```json
{
  "age": 23,
  "course": "MCA"
}
```

**Response (`200 OK`):**
```json
{
  "message": "User updated successfully",
  "user": {
    "_id": "<user_id>",
    "name": "Arman Chaudhary",
    "email": "arman.chaudhary@example.com",
    "age": 23,
    "course": "MCA",
    "__v": 0
  }
}
```

---

### 4. Delete User (`DELETE /api/users/:id`)
**Request:**
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/users/<user_id>`

**Response (`200 OK`):**
```json
{
  "message": "User deleted successfully"
}
```

---

## Screenshots Checklist

1. **Server Startup**: Terminal showing `Server running on port 5000` and `MongoDB connected successfully`.
2. **Update User API (PATCH)**: Thunder Client showing `PATCH /api/users/:id` with `200 OK` response.
3. **MongoDB Compass Verification (Updated User)**: MongoDB Compass displaying document with updated `age: 23` and `course: "MCA"`.
4. **Delete User API (DELETE)**: Thunder Client showing `DELETE /api/users/:id` with `200 OK` response.
5. **MongoDB Compass Verification (Deleted User)**: MongoDB Compass showing the user document has been deleted.
