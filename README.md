# Activity Tracker

## Description
Activity Tracker is a lightweight Node.js application that provides a simple REST API for tracking user activities. Users can add, view, and delete their current activities. This project is perfect for beginners looking to practice building RESTful APIs using Express.js and JSON for data storage.

## Features
- **Add Activity**: Users can log their current activity with their name and a description.
- **View All Activities**: Retrieve a list of all logged activities.
- **Delete Activity**: Remove a specific activity by its unique ID.
- **Data Storage**: Activities are stored in a JSON file for simplicity.

## Tech Info:
- **Node.js** <-- module stack
- **Express.js** <-- library
- **File System (fs)** <-- data handling

## Folder Structure
```
activity-tracker/
├── data/
│   └── activities.json
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── activityRoutes.js
│   ├── controllers/
│   │   └── activityController.js
├── package.json
├── README.md
```

## API Endpoints
### Base URL
```
http://localhost:3000/api/activities
```

### Endpoints
1. **Get All Activities**
   - **URL**: `GET /`
   - **Description**: Retrieves all activities.
   - **Response Example**:
     ```json
     [
       {
         "id": "1672507891234",
         "user": "John",
         "activity": "Reading a book",
         "timestamp": "2024-12-30T10:00:00.000Z"
       }
     ]
     ```

2. **Add Activity**
   - **URL**: `POST /`
   - **Description**: Adds a new activity.
   - **Request Body**:
     ```json
     {
       "user": "John",
       "activity": "Reading a book"
     }
     ```
   - **Response Example**:
     ```json
     {
       "id": "1672507891234",
       "user": "John",
       "activity": "Reading a book",
       "timestamp": "2024-12-30T10:00:00.000Z"
     }
     ```

3. **Delete Activity**
   - **URL**: `DELETE /:id`
   - **Description**: Deletes an activity by its ID.
   - **Response Example**:
     ```json
     {
       "message": "Activity deleted"
     }
     ```

## Installation and Usage

### Prerequisites
- Node.js installed on your system.

### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/activity-tracker.git
   cd activity-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node src/app.js
   ```

4. Test the API using a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/):
   - **Get all activities**:
     ```bash
     curl http://localhost:3000/api/activities
     ```
   - **Add an activity**:
     ```bash
     curl -X POST -H "Content-Type: application/json" -d '{"user": "John", "activity": "Reading a book"}' http://localhost:3000/api/activities
     ```
   - **Delete an activity**:
     ```bash
     curl -X DELETE http://localhost:3000/api/activities/1672507891234
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements. 🚀
