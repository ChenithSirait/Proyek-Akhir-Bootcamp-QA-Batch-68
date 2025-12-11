# Proyek-Akhir-Bootcamp-QA-Batch-68

Ini adalah proyek akhir bootcamp QA Batch 68 yang menggunakan **Cypress** untuk melakukan otomatisasi pengujian pada website demo OrangeHRM.

🔗 Website yang diuji: [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)
Link YouTube Hasil Pengujian https://youtu.be/i7KGTlPqDoc?si=UjyLCGGG7AYxwmgi

## 📌 Tujuan Proyek

Mengautomasi skenario pengujian pada beberapa fitur utama seperti:
- Login
- Forgot Password
- Menu Directory (search & reset)
- Validasi UI menggunakan Page Object Model (POM)
- Monitoring request API menggunakan `cy.intercept()`

---

## 🗂️ Struktur Folder

Proyek-Akhir-Bootcamp-QA-Batch-68/
├── cypress/
│ ├── e2e/ # Berisi file test case
│ │ └── TC_DIRECTORY/ # Test case untuk fitur Directory
│ ├── fixtures/ # Data dummy untuk pengujian
│ │ └── Data/ # Data login, directory, dll
│ ├── support/
│ │ ├── commands.js
│ │ └── pageComponent/ # Page Object (LoginPage, DirectoryPage, dll)
├── cypress.config.js # Konfigurasi Cypress
├── package.json # Info dependencies dan script
└── README.md # Dokumentasi proyek ini

##  Cara Konfigurasi & Menjalankan Proyek

### 1. Clone repository ini

```bash
git clone https://github.com/ChenithSirait/Proyek-Akhir-Bootcamp-QA-Batch-68.git
cd Proyek-Akhir-Bootcamp-QA-Batch-68

### 2. Install dependencies
npm install
3. Jalankan Cypress
Mode GUI (Interactive)
npx cypress open
Mode Headless (CLI)
npx cypress run

Fitur yang Diuji

1. TC_001_LOGIN_POSITIVE
2. TC_002_LOGIN_NEGATIVE
3. TC_003_LOGIN_EMPTY_FIELDS
4. TC_004_LOGOUT
5. TC_005_FORGOT-PASSWORD
6. TC_006_RESET_EMPLOYEE
7. TC_007_SEARCH_EMPLOYEE

📄 Contoh Menjalankan Tes Spesifik
npx cypress run --spec "cypress/e2e/TC_LOGIN/TC_001_LOGIN_POSITIVE.cy.js"


 Teknologi yang Digunakan
Cypress: Framework E2E testing berbasis JavaScript

Mocha & Chai: Test runner & assertion library

Page Object Model (POM): Struktur pengujian yang modular dan reusable

Intercept (cy.intercept): Monitoring dan validasi request API

.gitignore yang Disarankan
Agar file tidak penting tidak ikut terupload ke repo:
node_modules/
cypress/screenshots/
cypress/videos/
.env

👤 Author
Chenith Sirait
Bootcamp QA Batch 68 - Sanbercode
📧 GitHub: ChenithSirait
