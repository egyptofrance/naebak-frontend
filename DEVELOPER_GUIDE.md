> **Note:** This document is a work-in-progress and will be updated as the project evolves.

# Naebak Frontend: Developer Guide

**Version:** 1.0.0  
**Last Updated:** September 26, 2025  
**Author:** Manus AI

---

## 1. Project Overview

The **Naebak Frontend** is the main user interface for the Naebak platform. It is a modern, responsive web application built with Next.js and React.

### **Key Features:**

-   **User Dashboard:** Provides a personalized dashboard for users.
-   **News Feed:** Displays the latest news and updates.
-   **Complaint Submission:** Allows users to submit and track complaints.
-   **Candidate Profiles:** Displays profiles of political candidates.

### **Technology Stack:**

-   **Framework:** Next.js
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **State Management:** Redux Toolkit

---

## 2. Local Development Setup

### **Prerequisites:**

-   Node.js 18+
-   Yarn

### **Installation:**

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/egyptofrance/naebak-frontend.git
    cd naebak-frontend
    ```

2.  **Install dependencies:**

    ```bash
    yarn install
    ```

3.  **Configure environment variables:**

    Create a `.env.local` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4.  **Start the development server:**

    ```bash
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

---

## 3. Running Tests

To run the test suite, use the following command:

```bash
yarn test
```

---

## 4. Building for Production

To build the application for production, use the following command:

```bash
yarn build
```

---

## 5. Deployment

The application is designed to be deployed on Vercel or a similar platform that supports Next.js.

---

## 6. Dependencies

Key dependencies are listed in the `package.json` file. Use Yarn to manage dependencies.

---

## 7. Contribution Guidelines

Please follow the coding standards and pull request templates defined in the central documentation hub. All contributions must pass the test suite and include relevant documentation updates.
