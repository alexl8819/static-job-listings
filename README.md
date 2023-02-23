# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Live Site URL: [Static Job Listings](https://slightlyfunctional.gitlab.io/static-job-listings/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Bundler

## Continued development

This is the first project using Vite. I decided to switch it up and play with Vue 3 since I hadn't used the framework since Vue 2 several years ago. It doesn't seem too difficult to use, however I find its only really meant to be used for large projects (fullstack) as it feels a bit overkill. Parcel seems to be the perfect mix in terms of simplicity (the no configuration is a huge selling point, IMO) for SPA development. I look forward to trying out esbuild when its matured and ready for use on web apps. For the app, I decided to use a reactive wrapper around a Set instead of a regular array to hold the "filter" values because the data structure naturally limits duplicate values (i.e no need to check if a value already exists before appending). The only problem I came across was that I found that a v-model could be used for watching child component changes however the documentation didn't seem to demonstrate it being capable for more than primitive types (i.e string), therefore I decided to emit events to detect changes and implement them in the parent component which seemed aligned to the Vue way of doing things but didn't seem elegant to me. If you know how to properly implement this, feel free to comment on the frontend mentor page or open a issue.

## Author

- Website - [slightlyfunctional.com](https://slightlyfunctional.com)
- Frontend Mentor - [@slightlyfunctional](https://www.frontendmentor.io/profile/slightlyfunctional)
