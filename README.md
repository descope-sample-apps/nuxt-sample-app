<img width="1400" alt="Monosnap Github Profile Header Generator 2023-07-20 23-09-34" src="https://github.com/descope-sample-apps/angular-webjs-sample-app/assets/32936811/9d6584d3-abcf-4d0a-9735-b07f4f81bbf9">

---

This sample app is an open-source sample app, built with Nuxt 3 and Tailwind CSS. This app utilizes the [NuxtAuth](https://github.com/sidebase/nuxt-auth), to handle authentication.

Look at the [Nuxt 3 documentation](https://nuxt.com) to learn more.

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnuxt3-kitchen-sink&project-name=nuxt3&repository-name=nuxt3&demo-title=Nuxt%203%20Kitchen%20Sink&demo-url=https%3A%2F%2Fnuxt3-kitchen-sink.vercel.app%2F&demo-image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1673746665%2Fnuxt3_pkwbk6.png)

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Issue Reporting](#issue-reporting)

## Features ✨

- **Descope Login**: Users can login with their Descope credentials.
- **User Dashboard**: After logging in, users are redirected to a dashboard which displays their information fetched using the Descope SDK.
- **Navbar**: A navigation bar that includes a login/logout button, which adjusts its display based on whether a user is logged in or not.

## Installation 💿

> **Note:** If you don't already have the Angular CLI, install it before you follow the rest of the guide. You can do so with the following command: `npm install -g @angular/cli`

1. Clone the repository:

```bash
git clone https://github.com/descope-sample-apps/nuxt-sample-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Setup environment variables:

Use the `.env.example` file in the repo, and change the name to `.env`. Then, fill in the following variables with your own information:

1. **Nuxt Secret** - You must use a 32-bit generated secret. You can generate this secret by running the following command:

```bash
openssl rand -base64 32
```

or by going to this [site](https://generate-secret.vercel.app/32).

2. **Origin** - Assign this environment variable to match the correct environment you're using (e.g. `http://localhost:3000`).

3. **Descope Project ID** - Descope Project ID you can find under [Project Settings](https://app.descope.com/settings/project), in the console.

4. **Descope Access Key** - Access Key you can generate under [Access Keys](https://app.descope.com/accesskeys), in the console.

## Running the Application 🚀

To start the application, run:

```bash
npm run dev
```

Navigate to `http://localhost:3000/` in your browser.

## Issue Reporting ⚠️

This project is a simple demonstration of integrating Descope into an Nuxt 3 application. For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
