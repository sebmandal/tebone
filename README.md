# TypeScript Express Backend 1 (TEB1)

- [Introduction](#introduction)
- [What's included in the examples?](#example-features)
- [For developers](#developers-❤)

### Introduction

🦚 This project was designed with developers in mind. Managing an Express application is easier than ever!

📲 To see the latest features and commits on this repo, check out the [working-branch](https://github.com/sebmandal/tebone/tree/working-branch) branch.

###### 👆🏼 If it doesn't exist, no changes are being made at the moment.

### Example features

📥 To experience the examples included in this template, try the following URLs (they're all linked on the index page)

| What is this page?  | The URL to the page               |
| ------------------- | --------------------------------- |
| Index Page          | localhost:3000/                   |
| About Page          | localhost:3000/about              |
| Contact Page        | localhost:3000/contact            |
| Full Employees API  | localhost:3000/api/employees      |
| Employee of index 0 | localhost:3000/api/employees?id=0 |
| Employee of index 1 | localhost:3000/api/employees?id=1 |

### Developers ❤

📑 How to clone and run this on your own machine (index page links all example URLs):

```bash
git clone https://github.com/sebmandal/tebone.git
cd tebone
npm install
npm start
```

👨🏻‍💻 To add your own pages to your application follow these 3 steps, then run/restart the application: (try to replicate how the examples work)

###### If I see it fit, I can make a simple tutorial video about creating a page. May come soon!

| Creating a page | Description                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1.              | Create a directory inside the src/ folder, where you will store your TS pages.                                              |
| 2.              | Add a (yourFileName).ts in said directory, (see examples and follow) and have it export default an object of type PageType. |
| 3.              | Create a .pug file in the views/ directory, and link it in the res.render() in your Typescript file.                        |
