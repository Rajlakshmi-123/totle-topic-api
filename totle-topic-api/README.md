Topic Retrieval API — Coding Assignment (TOTLE Backend Intern Round 1)

This project is a simple Node.js + Express API that retrieves topics from a JSON file with search and sorting functionality.
Features
GET endpoint:

/api/topics?search=<query>&sort=name


Case-insensitive search

Sort by name (ascending) — Bonus feature

Proper error handling (400, 500)

JSON file with 5+ topics

totle-topic-api/
   ├── data/
   │     └── topics.json
   ├── src/
   │     └── index.js
   ├── package.json
   └── README.md

How to Run

Install dependencies:

npm install


Start server:

npm start


Open in browser/Postman:

Search topics:

http://localhost:3000/api/topics?search=node


Search + Sort:

http://localhost:3000/api/topics?search=a&sort=name

💡 API Responses
✔ 200 Success
[
  { "id": 2, "name": "Node.js Fundamentals", "category": "Backend" }
]

❌ 400 Error
{ "error": "Query parameter 'search' is required" }

❌ 500 Error
{ "error": "Internal Server Error" }

🎥 2-Minute Video Explanation

👉 Video Link: <https://youtu.be/4sXB-A1_vvw?si=kcYHphUHlUCmtmtF>

🔗 GitHub Repository

👉 Repo Link: <paste your GitHub repo link here>

👤 Submitted By

Raj Lakshmi
Backend Developer Intern — TOTLE (Unstop Round 1)