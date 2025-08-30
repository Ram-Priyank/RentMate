🏠 RentMate – Online Rental Platform

RentMate is an online rental platform that connects property owners and tenants (renters) directly without brokers. Owners can list properties (apartments, houses, shops, offices, villas, farmhouses), while renters can search, view details, chat, and book properties online.

The system also includes an Admin Panel for property verification, user management, and complaint handling.

🚀 Tech Stack

Frontend (Mobile App): React Native (Expo)

Backend: Node.js + Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Admin Panel (Web): React.js (or Next.js)

Payments: Razorpay / Stripe / UPI Integration

Hosting: Vercel / Netlify (frontend), Heroku / Render (backend), MongoDB Atlas

📌 Features
👤 Renter Module

Register/Login

Search & filter properties

View property details

Contact owner (chat/inquiry)

Book property & make payments

Rate property & leave reviews

🏡 Owner Module

Register/Login

Upload new property with images & documents

Edit/Delete property

Toggle availability (Available/Rented)

View inquiries from renters

🛡️ Admin Module (Web Panel)

Approve/Reject property listings

Verify owner documents

Manage users (block/unblock)

Handle complaints

Generate reports (users, listings, bookings)

🏗️ Project Structure
RentMate/
│── backend/              # Express.js + MongoDB backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── server.js         # App entry point
│
│── mobile-app/           # React Native (Expo) app
│   ├── screens/          # Home, Login, Property, Chat, Payments
│   ├── components/       # UI components
│   ├── navigation/       # React Navigation setup
│   └── App.js            # Main entry file
│
│── admin-panel/          # React.js (Web Panel for Admins)
│   ├── pages/            # Dashboard, Users, Properties, Complaints
│   └── components/       # Sidebar, Charts, Tables
│
└── README.md

⚙️ Installation
1️⃣ Backend (Node + Express)
cd backend
npm install
npm start

2️⃣ Mobile App (React Native + Expo)
cd mobile-app
npm install
npx expo start


Scan the QR code with the Expo Go app on your phone.

3️⃣ Admin Panel (React.js)
cd admin-panel
npm install
npm start

📊 Database Schema (MongoDB)

Users: user_id, name, email, password, phone, role, status

Properties: property_id, owner_id, title, description, type, location, price, images, documents, availability

Bookings: booking_id, property_id, renter_id, start_date, end_date, status, payment_status

Payments: payment_id, booking_id, amount, method, status, transaction_id

Chats: chat_id, renter_id, owner_id, message, timestamp

Reviews: review_id, renter_id, property_id, rating, comment

Complaints: complaint_id, user_id, description, status

📌 Future Enhancements

Push notifications for new messages & bookings

AI-based property recommendations

Multi-language support

Tenant verification (KYC with Aadhaar/PAN)