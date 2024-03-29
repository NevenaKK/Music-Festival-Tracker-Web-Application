# Festivals

This repository contains a web application developed using Spring Boot, React, and Bootstrap frameworks for tracking music performances.

## Features

- **Entities:**
  - Festival: Unique identifier (ID), Name (textual value, required, unique)
  - Performer: Unique identifier (ID), Name (textual value, required, unique), Genre (textual value, required), Country of Origin (textual value, required), Number of Members (positive number, required)
  - Performance: Unique identifier (ID), Festival (relationship to Festival class, each performance belongs to only one festival), Performer (relationship to Performer class, each performance has only one performer)

- **Implemented REST API:**
  - `GET /api/festivals` - Fetch all festivals
  - `GET /api/performers` - Fetch all performers
  - `POST /api/performers` - Add a new performer (for admins)
  - `GET /api/performances` - Fetch all performances
  - `POST /api/performances` - Add a new performance (for admins and users)
  - `PUT /api/performances/{id}` - Modify an existing performance (for admins and users)
  - `DELETE /api/performances/{id}` - Delete an existing performance (for admins)

- **API Validation:**
  - Country of Origin must be a string with a minimum of 4 characters
  - Number of Members must be a positive number

## Installation

1. Clone this repository to your local machine.
2. Navigate to the backend directory and run the Spring Boot application.
3. Navigate to the frontend directory and run the React application.

## Usage

- Admins have access to all functionalities, including adding, modifying, and deleting performers and performances.
- Users can add new performances and modify existing performances.
- Only logged-in users have access to the application. Users log in via the login page.

- **Admin Credentials:**
    - Username: miroslav
    - Password: miroslav

- **User Credentials:**
    - Username: petar
    - Password: petar

## Additional Notes

- Ensure that the backend and frontend are both running to access the full functionality of the application.
- Test data for the database is provided along with the solution.
- HTTPS configuration is not required for this project.



