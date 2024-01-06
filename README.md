Psychological Clinic
==========================

## Description

As it is said it's a website for psychological clinic, which is a **business card-style website**. 
You could **schedule appointments** with your preferred therapists and **calculate the cost** for your entire healing journey including (promos in it :D). 
All content on the website is available in Polish.

****

The main features this project has are
+ scheduling, deleting appointments
+ checking therapists' caledar
+ calculator for costs of therapy 
+ highlighting design to *promote* the company's services.

****

## Architecture 

This application is made of 2 services. Frontend is in *front* service and backend is in *back* service. They are connected by **REST API**. I use **TypeScript 4.9** as static types to maintain clear coding.

### Frontend

For this project I use **React 18.2** library with **NextJS 13** to have Single Page Application. Used technology are **SASS**, formik, yup, MUI icon, axios, qs and other minor tools.

### Backend

My backend depends on Strapi CMS. It has 2 ences (Appointments and Therapists).

****

## Setup

Required version of Node.js: v18.16.0.
To run this project, install it locally using yarn:

```
$ cd front
$ yarn install
$ yarn run dev
```

and on another console

```
$ cd back
$ yarn install
$ yarn run develop
```

****
### License

MIT License

Copyright (c) 2024 Psychological Clinic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
