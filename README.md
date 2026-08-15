## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

Install the dependencies for the frontend:

```bash
cd frontend
npm install
```

Then install the dependencies for the backend:

```bash
cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory and add the required environment variables, for example:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Make sure the MongoDB connection string points to a valid MongoDB database.

### 4. Start the backend

From the `backend` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

### 5. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

### 6. Open the application

Open the frontend URL in your browser and start creating and managing tasks.

---

## Notes, Decisions & Assumptions

I kept the task workflow intentionally simple: tasks move from To Do → In Progress → Done, and the UI only allows moving tasks forward through this flow. I also assumed that task priority can be changed independently from its status.

If I had more time, I would add authentication and user-specific tasks, stronger form validation, better loading and error states, confirmation modals, drag-and-drop task movement, and a more polished responsive design. I would also centralize the Axios configuration and improve API error handling across the application.

I spent roughly 4 hours building and testing the application.

One thing I found particularly interesting was designing the task movement flow around separate backend endpoints for updating task details and changing task status. It helped me better understand how frontend state, API responsibilities, and UI interactions can be separated cleanly.




## Application Flow

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  React Frontend │
                    └────────┬────────┘
                             │
                ┌────────────┼────────────┐
                │            │            │
                ▼            ▼            ▼
          Create Task    View Tasks   Task Details
                │            │            │
                └────────────┼────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Express API    │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │ Task Controller │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │    Mongoose     │
                    │      Model      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    MongoDB      │
                    └─────────────────┘
```

### Task Status Flow

```text
┌──────────┐
│  To Do   │
└────┬─────┘
     │
     │ Move Task
     ▼
┌──────────────┐
│ In Progress  │
└────┬─────────┘
     │
     │ Move Task
     ▼
┌──────────┐
│   Done   │
└──────────┘
```

The application follows a simple forward-moving workflow. Tasks can be moved from **To Do → In Progress → Done**.

### Task Management Flow

```text
User selects a task
        │
        ▼
┌───────────────────┐
│   Task Details    │
└─────────┬─────────┘
          │
     ┌────┼──────────────┐
     │    │              │
     ▼    ▼              ▼
   Edit  Change        Delete
 Details Status         Task
     │    │              │
     ▼    ▼              ▼
   PUT  PATCH          DELETE
     │    │              │
     └────┼──────────────┘
          ▼
      MongoDB
          │
          ▼
     Updated Board
```

---

## Folder Structure

```text
task-management/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── Board.jsx
│   │   │   ├── Column.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskDetails.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── taskModel.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
│
├── README.md
└── .gitignore
```

### Backend Request Flow

```text
HTTP Request
     │
     ▼
┌──────────────┐
│ Express      │
│ Route        │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Controller   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Mongoose     │
│ Model        │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ MongoDB      │
└──────┬───────┘
       │
       ▼
   Response
       │
       ▼
┌──────────────┐
│ React UI     │
└──────────────┘
```

## API Responsibilities

| Method | Endpoint                    | Purpose             |
| ------ | --------------------------- | ------------------- |
| POST   | `/api/task/create-task`     | Create a new task   |
| GET    | `/api/task/getAll-task`     | Get all tasks       |
| GET    | `/api/task/get-task/:id`    | Get a single task   |
| PUT    | `/api/task/update-task/:id` | Update task details |
| PATCH  | `/api/task/move-task/:id`   | Change task status  |
| DELETE | `/api/task/delete-task/:id` | Delete a task       |

The frontend communicates with the Express backend using Axios. The backend handles validation and database operations through Mongoose, while MongoDB persists the task data.
