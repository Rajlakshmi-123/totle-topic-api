# Totle Topic API

Small Express API to retrieve topics by name.

Quick run (from repository root):

```bash
# Install dependencies for the inner project
npm run install

# Start the API (forwards to inner project)
npm start
```

Direct commands (from the inner folder `totle-topic-api`):

```bash
cd totle-topic-api
npm install
npm run start
```

Example requests:

```bash
# Search for "node"
curl "http://localhost:3000/api/topics?search=node"

# Search and sort by name
curl "http://localhost:3000/api/topics?search=react&sort=name"

# Get all topics (no search parameter required now)
curl "http://localhost:3000/api/topics"
```

Notes:
- A top-level `package.json` forwards `start` and `install` to the inner project to make running from the repository root easier.
- The API returns all topics when `search` is omitted.
