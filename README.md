<img width="1400" alt="Monosnap Github Profile Header Generator 2023-07-20 23-09-34" src="https://github.com/descope-sample-apps/angular-webjs-sample-app/assets/32936811/9d6584d3-abcf-4d0a-9735-b07f4f81bbf9">

---

This sample app is an open-source sample app, built with Nuxt 3 and Tailwind CSS. This app also utilizes the Descope Vue SDK, to handle authentication.

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
git clone https://github.com/YourUsername/descope-angular-app.git
```

2. Install dependencies:

```bash
cd descope-angular-app
npm install
```

3. Setup environment variables:

- Create a `environment.ts` file at the root of the project.
- Fill in the variable `descopeProjectId` with your Project ID from [Project Settings](https://app.descope.com/settings/project) in the Console.

```javascript
export const environment = {
  production: false,
  descopeProjectId: "<Descope Project ID>",
};
```

```
git clone https://github.com/vercel/nuxt3-kitchen-sink.git
cd nuxt3-kitchen-sink
pnpm i
pnpm dev
```

## Running the Application 🚀

To start the application, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## Issue Reporting ⚠️

This project is a simple demonstration of integrating Descope into an Angular application. For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
