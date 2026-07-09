# Hospital Management System (HMS) ERP Architecture
**Project:** WellNest Hospital ERP

This document defines a secure, clean, and maintainable MERN backend architecture for the Hospital Management System. It is designed to map exactly 1-to-1 with the React frontend views and data structures we have built.

---

## 1. Architecture Summary

The ERP is built as a modern MERN application:
* **Frontend:** React + Vite + React Router (Already Built).
* **Backend:** Node.js + Express.
* **Database:** MongoDB.

Key goals:
* **Security first:** authentication, authorization, input validation.
* **Clean code:** modular controllers mapping exactly to frontend pages.
* **Scalability:** versioned APIs.

---

## 2. Backend Folder Structure

```text
BackEnd/
├── server.js
├── config/
│   └── db.js
├── routes/
│   ├── dashboard.js
│   ├── appointments.js
│   ├── patients.js
│   ├── doctors.js
│   ├── departments.js
│   ├── schedule.js
│   ├── payments.js
│   ├── inventory.js
│   └── messages.js
├── controllers/
│   ├── dashboardController.js
│   ├── appointmentController.js
│   ├── patientController.js
│   ├── doctorController.js
│   ├── departmentController.js
│   ├── scheduleController.js
│   ├── paymentController.js
│   ├── inventoryController.js
│   └── messageController.js
├── models/
│   ├── DashboardStat.js
│   ├── Appointment.js
│   ├── Patient.js
│   ├── Doctor.js
│   ├── Department.js
│   ├── Schedule.js
│   ├── Invoice.js
│   ├── Inventory.js
│   └── Message.js
└── utils/
    ├── apiResponse.js
    └── errorHandler.js
```

---

## 3. Core Models (Mapped Exactly to Frontend Data)

To support the React frontend seamlessly, the MongoDB schemas will directly reflect the UI data arrays:

### `DashboardStats` (For `Dashboard.jsx`)
* Supports the top-row widgets and chart data.
* `totalInvoice`, `totalPatients`, `appointmentsCount`, `bedroomCount`
* `patientOverviewChartData` (Child, Adult, Elderly counts)
* `revenueChartData` (Income, Expense)

### `Appointment` (For `Appointments.jsx`)
* `appointmentId`: String (e.g., 'APT-001')
* `patient`: String
* `doctor`: String
* `dept`: String
* `date`: String (e.g., '12 Jul 2028')
* `time`: String
* `status`: Enum ['Upcoming', 'In Progress', 'Completed']

### `Patient` (For `Patients.jsx`)
* `patientId`: String (e.g., 'PT-1001')
* `name`: String
* `age`: Number
* `gender`: String
* `bloodGroup`: String
* `phone`: String
* `lastVisit`: String

### `Doctor` (For `Doctors.jsx`)
* `doctorId`: String (e.g., 'DR-001')
* `name`: String
* `special`: String
* `exp`: String (e.g., '12 Years')
* `rating`: Number
* `status`: Enum ['Available', 'On Leave', 'In Surgery']
* `patients`: Number

### `Department` (For `Departments.jsx`)
* `departmentId`: String (e.g., 'DEP-01')
* `name`: String
* `head`: String
* `doctorsCount`: Number
* `patientsCount`: Number

### `Schedule` (For `Schedule.jsx`)
* `time`: String (e.g., '08:00 AM - 09:00 AM')
* `task`: String
* `doctor`: String (e.g., 'All Staff' or 'Dr. Petra Winsburry')
* `type`: Enum ['meeting', 'consultation', 'surgery']

### `Invoice` (For `Payments.jsx`)
* `invoiceId`: String (e.g., 'INV-2028-001')
* `patient`: String
* `amount`: String (e.g., '$450.00')
* `date`: String
* `status`: Enum ['Paid', 'Pending']
* `method`: Enum ['Stripe', 'Insurance', 'Credit Card']

### `Inventory` (For `Inventory.jsx`)
* `itemId`: String (e.g., 'INV-501')
* `item`: String
* `category`: Enum ['Pharmacy', 'Supplies', 'Medical Devices']
* `stock`: Number
* `unit`: String (e.g., 'Tablets', 'Boxes')
* `status`: Enum ['In Stock', 'Low Stock', 'Out of Stock']
* `location`: String

### `Message` (For `Messages.jsx`)
* `messageId`: Number
* `to`: String
* `type`: Enum ['SMS', 'Email']
* `message`: String
* `time`: String
* `status`: Enum ['Sent', 'Delivered', 'Read']

---

## 4. API Endpoints

The API routes will directly serve the pages we built:

* `GET /api/dashboard` -> Returns stats for `Dashboard.jsx`
* `GET /api/appointments` -> Returns data for `Appointments.jsx`
* `GET /api/patients` -> Returns data for `Patients.jsx`
* `GET /api/doctors` -> Returns data for `Doctors.jsx`
* `GET /api/departments` -> Returns data for `Departments.jsx`
* `GET /api/schedule` -> Returns data for `Schedule.jsx`
* `GET /api/payments` -> Returns data for `Payments.jsx`
* `GET /api/inventory` -> Returns data for `Inventory.jsx`
* `GET /api/messages` -> Returns data for `Messages.jsx`

*(Standard POST/PUT/DELETE endpoints will also exist for adding/editing records on each page).*

---

## 5. Next Steps

To implement this perfectly synced backend:
1. Initialize the `BackEnd` Node.js folder.
2. Create the exact Mongoose Models listed above.
3. Create a unified database seed script that populates the DB with the exact dummy data currently hardcoded in the React frontend.
4. Hook up the React frontend `useEffect` calls to fetch from these new API endpoints.
