# Django + PostgreSQL + React Three Fiber Boilerplate

🚀 **Dockerized boilerplate** combining **Django**, **PostgreSQL**, and **React Three Fiber (R3F)**, designed with an **API-first architecture** and a modern development workflow.

This project uses **Docker Compose** and **VS Code Dev Containers** to provide a clean, reproducible development environment that closely resembles a real production setup.

> ⚠️ Currently focused on **development mode**.  
> A production-ready configuration is under active development.

---

## ✨ Features

- 🐍 Django backend (API-only)
- 🧠 PostgreSQL database
- 🎮 React + React Three Fiber (Three.js)
- ⚡ Vite with hot-reload
- 🐳 Fully Dockerized
- 🧩 Dev Containers support
- 🔐 Environment-based configuration
- ☁️ AWS-ready

---

## 🏗️ Architecture Overview

Frontend (React + R3F + Vite)
↓ API calls
Backend (Django API)
↓
PostgreSQL

Frontend and backend are fully decoupled and communicate **only via API**, following modern web architecture best practices.

---

## 🚀 Getting Started (Development)

### 1️⃣ Clone the repository
```bash
git clone git@github.com:Vaquerizo/django-postgresql-R3F-boilerplate.git
cd django-postgresql-R3F-boilerplate
```
2️⃣ Create your environment file
```bash
cp .env.example .env
```
3️⃣ Install frontend dependencies
Node.js must be installed on your system.
```bash
npm install
```
4️⃣ Build the containers
```bash
docker compose --profile dev build --no-cache
```
5️⃣ Open the VS Code Dev Container
```text
Ctrl + Shift + P
Dev Containers: Build and Open Container
```
6️⃣ Start the containers
```bash
docker compose --env-file .env --profile dev up --remove-orphans
```
7️⃣ Run the Django development server
```bash
docker compose --env-file .env --profile dev exec web bash
python manage.py runserver 0.0.0.0:8000
```
8️⃣ View the 3D frontend
Open in your browser:
```text
http://localhost:5173/test-r3f-view
You should see a React Three Fiber 3D scene rendered in the browser.
```
☁️ AWS Notes
Designed to run on Amazon AWS

May require an .aws configuration file depending on deployment. You can obtain this file with this code:
```bash
aws configure sso
```
*AWS credentials are never committed

📌 Status
✅ Development environment ready

🚧 Production setup in progress
