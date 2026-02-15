# Valentine's Date Proposal App ❤️

A beautiful, interactive, and customizable Valentine's Day proposal website. Create personalized pages for your special someone with dynamic content, animations, and background music.

![Preview](https://i.imgur.com/K7I4q5c.png) *(Add your own screenshot here)*

## ✨ Features

- **Personalized Creation**: Create a unique valentine by entering your names.
- **Dynamic Content**:
  - **Landing Page**: Customized greeting with particle effects.
  - **Memories**: A carousel of your special moments.
  - **The Question**: An interactive "Will you be my Valentine?" section with a playful "No" button.
  - **Final Message**: A celebration screen with confetti and a custom message.
- **Shareable Links**: Generates a unique URL for each valentine (e.g., `your-site.com/xyz123`).
- **Background Music**: Adds a romantic touch with a toggleable music player.
- **Responsive Design**: Looks great on mobile and desktop.
- **Secure**: Uses Firebase for database storage and environment variables for API keys.

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Firebase Firestore** (Database)
- **React Router** (Navigation)
- **React Confetti** (Celebration effects)

## 🚀 Getting Started

### Prerequisites

1.  **Node.js** installed (v16+).
2.  A **Google Firebase** account.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/valentines-proposal.git
    cd valentines-proposal
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your Firebase configuration keys (see Firebase Setup below):
      ```env
      VITE_FIREBASE_API_KEY=your_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
      ```

4.  **Add Music**:
    - Place your favorite romantic song in the `public/` folder and name it `music.mp3`.

5.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 🔥 Firebase Setup

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project.
3.  **Enable Firestore Database**:
    - Go to **Build** > **Firestore Database**.
    - Click **Create Database**.
    - Start in **Test Mode** (for development) or **Production Mode** (recommended for public deployment).
4.  **Set Security Rules** (Important for Production):
    Go to the **Rules** tab in Firestore and paste this:
    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /valentines/{valentineId} {
          allow get: if true;        // Anyone can read
          allow create: if true;     // Anyone can create
          allow update, delete: if false; // Prevent edits/deletes
        }
      }
    }
    ```
5.  **Get API Keys**:
    - Go to **Project Settings** (gear icon).
    - Scroll down to "Your apps" > "Web app".
    - Copy the configuration object values into your `.env` file.

## 🌍 Deployment

### Vercel (Recommended)

1.  Push your code to GitHub.
2.  Go to [Vercel](https://vercel.com) and import your repository.
3.  **Environment Variables**: In the Vercel dashboard for your project, go to **Settings** > **Environment Variables** and add all the `VITE_FIREBASE_...` keys from your `.env` file.
4.  Click **Deploy**.

**Note on Routing**: Since this requires client-side routing, add a `vercel.json` file to the root if you encounter 404 errors on refresh:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Netlify

1.  Push to GitHub.
2.  Import to Netlify.
3.  Set **Build Command** to `npm run build` and **Publish Directory** to `dist`.
4.  Add Environment Variables in **Site Settings** > **Build & Deploy** > **Environment**.
5.  Add a `_redirects` file in `public/` folder with `/* /index.html 200` to fix routing issues.

## 📝 Usage

1.  **Home Page (`/`)**: Enter your name and your partner's name.
2.  **Creation**: The app directs you to the editor where you can customize the texts (optional).
3.  **Share**: Generate the link and copy it.
4.  **View**: Send the link to your special someone!

---

Made with ❤️ by [Your Name]
