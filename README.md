# ExamSQAR - Exam Conductor

## Description

This MERN-stack based application allows teachers create, conduct, manage MCQ-based remote exams with ease, and lets students to participate in them.

## Features

* For Teachers
    * Create/Edit exams specifying title, desc, time window, duration
    * Publish scores
    * View exam list/history
    * Add/Edit/Delete questions to exams
    * Specify text, points, max attempts to each question with the capability of unlimited attempts
    * Specify as many options for each question, with single or multiple correct answers
    * **Markdown support** for question text and exam description
    * View submissions from students under each exam
    * Open each student's submission and view attempted answers
    * Automatic and instant grading of submissions
    * Generate and download gradesheets in CSV or HTML format
    * Share the exam to students just by copying the link
* For Students
    * Will be shown statuses like "Too early", "Too late", or solid duration depending on window & provided duration
    * Participate in exam by one click
    * View remaining time as countdown timer
    * Select the question option choices and submit to attempt
    * Answerscript view will automatically vanish when duration ends
    * View results (attempted options, correct options, and scores) when teacher publishes score


## Technical Aspects

Even though the backend is built on ExpressJS, I made a microframework on top ExpressJS called **express-extend**. Sole purpose was to easily compose route-attached controller functions with JWT authentication guarding, request input (url param, query param, body value) validation and conversion with help of **Typescript decorators**.

An excerpt from the backend codebase:

I decided to not use mongoose in this project in order to gain some raw control over database queries. So, I did made my own small custom middleware for mongodb.

Please note that as this project was intended for demo showcasing, this doesn't come with email verification on registration feature.

## Running (On Local Machine)

In the local machine configuration, the react pages are served using the same server the backend api run on. As for such, the react build output directory is copied upon build. You don't have to manually copy/move it, the provided does it automatically for you.

## Run the project:

1. Installation process - server

```bash
cd exco-backend
npm i

# create .env file and configure bellow field
PORT=""
DB_URL =""
DB_NAME =""
COMBINED=TRUE
JWT_SECRET=""

```
2. Installation process - client

```bash
cd exco-frontend
npm i

# create .env file and configure bellow field
REACT_APP_BASE_API_URL =http://localhost:8080/

```

Then run the server:

```bash
#For both exco-backend & exco-frontend
npm run start
```