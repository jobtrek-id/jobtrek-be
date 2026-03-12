# JobTrek Backend API 🚀

REST API Backend untuk JobTrek - Job Application Tracking System. Dibangun dengan Node.js, Express, dan MySQL.

## 📋 Fitur

- ✅ **User Management** - Kelola data user
- 📊 **Job Application Tracking** - CRUD untuk lamaran pekerjaan
- 🏢 **Company Management** - Referensi data perusahaan
- 🔄 **Status Tracking** - Track status lamaran (Success, Failed, On Process, Registered)
- 📝 **Notes & Contract Type** - Catat detail lamaran

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 4.19.2
- **Database**: MySQL (mysql2)
- **Environment**: dotenv

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/jobtrek-id/jobtrek-be.git
cd jobtrek-be

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan konfigurasi database Anda
```

## ⚙️ Environment Variables

Buat file `.env` dengan konfigurasi berikut:

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_DATABASE=jobtrek

# Server
APP_PORT=3030
```

## 🗄️ Database Structure

### Tables

**user**
```sql
CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);
```

**job_application**
```sql
CREATE TABLE job_application (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT,
  id_company INT,
  id_status INT,
  position VARCHAR(255),
  id_contract INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**ref_company**
```sql
CREATE TABLE ref_company (
  id INT PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(255)
);
```

## 🚀 Running

```bash
# Development
npm start

# API akan berjalan di http://localhost:3030
```

## 📡 API Endpoints

### Health Check
```
GET /
```
Response: `"The API is Running"`

### User Endpoints
```
POST /user
Body: { "id": "user_id" }
```
Get user data by ID

### Job Application Endpoints

**Get Job Applications**
```
POST /job/select
Body: { "id": "user_id" }
```
Get all job applications for a user

**Insert Job Application**
```
POST /job/insert
Body: {
  "companyName": "Company Name",
  "position": "Software Engineer",
  "notes": "Application notes",
  "idStatus": 1,
  "idContract": 1
}
```

**Update User**
```
POST /job/update
Body: {
  "id": "user_id",
  "name": "Updated Name",
  "email": "updated@email.com"
}
```

**Delete User**
```
POST /job/delete
Body: { "id": "user_id" }
```

## 🔧 Status Types

| ID | Status |
|----|--------|
| 0  | All |
| 1  | Success |
| 2  | Failed |
| 3  | On Process |
| 4  | Registered |

## 🐛 Known Issues

- `jobDelete` endpoint menghapus user instead of job application
- `jobInsert` belum mengaitkan application dengan user (missing `id_user`)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Made with ❤️ by [JobTrek Team](https://github.com/jobtrek-id)
