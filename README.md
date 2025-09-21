# AuthenticationApp

A React Native Authentication App built with **Context API** and **React Navigation**, featuring **Splash Screen, Welcome Screen, Signup, Login, Home, and Bottom Tabs**.  
Authentication state is persisted using **AsyncStorage**.

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/saqibmerchant/Auth-App.git
cd AuthenticationApp


npm install
cd ios && pod install && cd ..
npm start
npm run android
npm run ios

src/
├── assets/images        # App icons & images
├── components           # Reusable UI components
├── context              # AuthContext (login, signup, logout)
├── navigation           # AppNavigator (stack + bottom tabs)
├── screens              # Screens (Splash, Welcome, Login, Signup, Home)

App Flow

Splash Screen

Shown at app startup with a small delay.

Automatically navigates to the Welcome Screen.

Welcome Screen

Two actions available:

Get Started → navigates to Signup Screen.

Sign In → navigates to Login Screen.

Signup Screen

User provides name, email, password.

Validations:

All fields required

Email must not be empty and should contain @

Password must be at least 6 characters

Data is stored securely in AsyncStorage (@user)

After signup, a session (@session) is also created.

Login Screen

User enters email and password.

Credentials are validated against the saved signup data in AsyncStorage.

If data matches → user is logged in and redirected to Home Screen.

If not → an alert is shown: Incorrect credentials.

Home Screen (with Bottom Tabs)

After successful login, user lands on the Home screen.

Bottom Tab Navigation includes:

Home

Profile

Settings

Custom tab icons are loaded from src/assets/images.

Logout

Clears only the session (@session), not the saved user (@user).

Redirects back to the Welcome screen.

Tech Used

React Native CLI

React Navigation (Stack + Bottom Tabs)

Context API for managing authentication state

AsyncStorage for storing user and session data

Custom Components: AppButton, AppInput, AppText

Custom Tab Icons from src/assets/image

Notes

A user must sign up first before logging in.

Session persists across app restarts using AsyncStorage.

Logout only ends the session; the registered user remains saved.

Author
Muhammad Saqib Yousud
https://github.com/saqibmerchant