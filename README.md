<div align="center">
  <a href="https://github.com/sebmandal/tebone" target="_blank">
    <img height="180" alt="tebone" src="https://cdn.discordapp.com/attachments/869843923428847666/872057443566383144/tebone.svg">
  </a>
</div>

### Table of contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Examples](#example-pages)
-   [For developers](#developers)

### Introduction

🦚 This project was designed with developers in mind. Managing an Express application is easier than ever!

📲 To see the latest features and commits on this repo, check out the [working-branch](https://github.com/sebmandal/tebone/tree/working-branch) branch.

###### 👆🏼 If it doesn't exist, no changes are being made at the moment.

### Features

-   tebone makes it extremely easy to add Express routes, whether that be a page or an API, etc.
-   tebone comes with example pages/an example API, so it's easy to see how you go about adding features yourselves.

### Example pages

📥 To experience the examples included in this template, try the following URLs (they're all linked on the index page)

| What is this page?  | The URL to the page               |
| ------------------- | --------------------------------- |
| Index Page          | localhost:3000/                   |
| About Page          | localhost:3000/about              |
| Contact Page        | localhost:3000/contact            |
| Full Employees API  | localhost:3000/api/employees      |
| Employee of index 0 | localhost:3000/api/employees?id=0 |
| Employee of index 1 | localhost:3000/api/employees?id=1 |

### Developers

📑 How to clone and run this on your own machine (index page links all example URLs):

```bash
git clone https://github.com/sebmandal/tebone.git
cd tebone
npm install
*optional: npm i pug
npm start
```

If you want to use EJS for your views, execute this command: `npm i pug` otherwise, do `npm install (your_preferred_view_engine)` and change Pug to you preferred view engine in index.ts (line 15:25)

👨🏻‍💻 To add your own pages to your application follow these 2 steps, then run/restart the application: (try to replicate how the examples work)

###### If I see it fit, I can make a simple tutorial video about creating a page. May come soon!

| Creating a page | Description                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1.              | Add a (yourFileName).ts in the routes/ directory, (see examples and follow) and have it export default an object of type PageType. |
| 2.              | Create a .pug file in the views/ directory, and link it in the res.render() in your TypeScript file.                               |
