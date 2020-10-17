# Medical Services

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ioanniskousis/medical-services">
    <img src="./app/assets/images/screen-shots/microverse.png" alt="Microverse Logo" width="80" height="80">
  </a>
  
  <h3 align="center">The Medical Center Services Application</h3>
  
  <p align="center">
    This project is the Final Assessment on the Microverse curriculum program
    <br />
    <a href="https://github.com/ioanniskousis/medical-services"><strong>Explore the docs</strong></a>
    <br />
    <a href="https://medical-services-jgk.herokuapp.com">Live Demo On Heroku</a>
    <br />
    <a href="https://www.loom.com/share/c0904f53e7ed4176a39029d0bba58339">Video Presentaion on Loom</a>
    <br />
    <a href="https://github.com/ioanniskousis/medical-services/issues">Report Bug</a>
    <span> - </span>
    <a href="https://github.com/ioanniskousis/medical-services/issues">Request Feature</a>
  </p>
</p>

### This is a demonstration of Medical Center Services system, providing a booking system by logged in users

list of services and an instrument's profile view. It connects to the **Financial Modeling Prep API**  to download data

<hr />

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Screen Shots](#screen-shots)
- [About the Project](#about-the-project)
- [Application Instructions](#application-instructions)
- [Live Version](#live-version)
- [System Requierments](#system-requierments)
- [Development](#development)
- [Dependencies](#dependencies)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Screen Shots

### Home
<img src="./app/assets/images/screen-shots/home.png" alt="home.png" width="320">
<img src="./app/assets/images/screen-shots/home-land.png" alt="home-land.png" width="800">
<hr />

### Services
<img src="./app/assets/images/screen-shots/services.png" alt="services.png" width="320">
<hr />

### Doctors
<img src="./app/assets/images/screen-shots/doctors.png" alt="doctors.png" width="800">
<img src="./app/assets/images/screen-shots/doctorsslide.png" alt="list.png" width="800">
<hr />

### Booking
<img src="./app/assets/images/screen-shots/bookings-index.png" alt="bookings-index.png" width="320">
<img src="./app/assets/images/screen-shots/bookings-index-land.png" alt="bookings-index-land.png" width="800">
<img src="./app/assets/images/screen-shots/bookings-new.png" alt="bookings-new.png" width="320">
<img src="./app/assets/images/screen-shots/bookings-new-land.png" alt="bookings-new-land.png" width="800">
<img src="./app/assets/images/screen-shots/bookings-edit-land.png" alt="bookings-edit-land.png" width="800">
<hr />

### Sign
<img src="./app/assets/images/screen-shots/login.png" alt="login.png" width="320">
<img src="./app/assets/images/screen-shots/signup.png" alt="signup.png" width="320">
<hr />

<!-- ABOUT THE PROJECT -->

## About The Project

The project was created as a rails application configured to react using the --webpack=react key  

1. The user logs in the app, only by typing the username (a proper authenticated login is not a mandatory requirement, but it is in the nice-to-have list)
2. The user is presented with a list of motorcycle models that can be checked
3. The user selects a model and access to the model detail page
4. In the model detail page, the user can decide to reserve an appointment to try this model: the user has to select a date and city (username and model are autofilled)
5. You have a page to check the list of appointments of the user

You should follow the guidelines of the given design, including:

- colors (use a similar color palette)
- typographies: font face, size and weight (if the font is not openly accessible, use a similar one)
- layout: composition and space between elements

While developing the project, you should follow the best practices that you already learned in the previous projects, like setting-up a code linter, using gitflow, testing business logic, writing good commit messages and an informative README.

You can access all the design info (color, typography, layouts) in this link:

[https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)

Design idea by [Murat Korkmaz on Behance](https://www.behance.net/muratk)

The [Creative Commons license of the design](https://creativecommons.org/licenses/by-nc-nd/4.0/) requires that you give appropriate credit to the author. Therefore, you must do it in the README of your project.

Technical mandatory requirements of the project:

- The project is a tablet web app
- The database should have at least 2 tables — in this example, motorcycle models and appointments, i.e., the appointments can be accessed by all users unless you implement a proper user authentication (more on this later)
- You should use Postgres as your database
- For the back-end you will use Ruby on Rails
    - You will create a REST API to manage database resources, in this case, measurements (things to measure could be added manually to the database or from an admin panel)
- For the front-end you will use React
    - Connects to the back-end API to send and receive domain data
    - With routes for each of the screens, so the user can easily go back and forward
    - Using redux to store info used across the app, like the username
- The project will be deployed and accessible online

Here is a list of nice-to-have requirements, from which you should choose at least 1 to build:

- Implement proper user authentication from the front-end to the server
- Create a user table in your database, so that a given user could only access the appointments they have
- Create an admin panel to create / update / delete motorcycle models
- Make the app responsive, creating both mobile and desktop versions, following design guidelines
- You could implement transitions to make user experience better
- You can implement the lifestyle page
- Create a full documentation for your API
    - Be professional, your API should be easy to understand by the people who might want to use it. Remember about the documentation. You should be able to generate it. See these articles for inspiration but feel free to use any tool you like.
        - [https://guides.rubyonrails.org/api_documentation_guidelines.html](https://guides.rubyonrails.org/api_documentation_guidelines.html)
        - [https://rollout.io/blog/producing-documentation-for-your-rails-api/](https://rollout.io/blog/producing-documentation-for-your-rails-api/))
        
<hr/>

<!-- ABOUT THE PROJECT -->

## Application Instructions
  In the entry page, select a Stock Exchange at the top-right to filter symbols or let All Exchanges to show all symbols  
  Click a symbol's panel to show Symbol's Profile page  

<hr/>

## Live Version

### [Live Demo On Heroku](https://medical-services-jgk.herokuapp.com)
### [Video Presentaion](https://www.loom.com/share/c0904f53e7ed4176a39029d0bba58339)
<hr/>

## System Requierments

- JavaScript Enabled
- You need to Disable Cross-Origin-Restrictions from your browser if you want to open the index.html from your file system without using a server.

<hr/>

## Development

- Clone the project

```
  https://github.com/ioanniskousis/medical-services.git

  Use VSCode and Live Server to show index.html
  Since webpack is used, run 'npm run build' on you terminal before opening  
  run : npm start to open the project using localhost:3000  
```

<hr/>

## Dependencies

please run

```
  npm run build
```

to comply with the dependencies held in package.json

<hr/>

## Built With

This project was built using these technologies.

- React
- Redux
- API (Financial Modeling Prep)
- CSS3
- webpack
- Git - GitHub
- ESLint
- Stylelint
- heroku

<hr/>

<!-- CONTACT -->

## Contributors

:bust_in_silhouette:
## Ioannis Kousis

- Github: [@ioanniskousis](https://github.com/ioanniskousis)
- Twitter: [@ioanniskousis](https://twitter.com/ioanniskousis)
- Linkedin: [Ioannis Kousis](https://www.linkedin.com/in/jgkousis)
- E-mail: jgkousis@gmail.com
​
<hr/>
<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Microverse](https://www.microverse.org/)
- [Thanks to **Nelson Sakwa on Behance** for their design inspiration](https://www.behance.net/sakwadesignstudio)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ioanniskousis/medical-services.svg?style=flat-square
[contributors-url]: https://github.com/ioanniskousis/medical-services/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ioanniskousis/medical-services.svg?style=flat-square
[forks-url]: https://github.com/ioanniskousis/medical-services/network/members
[stars-shield]: https://img.shields.io/github/stars/ioanniskousis/medical-services.svg?style=flat-square
[stars-url]: https://github.com/ioanniskousis/medical-services/stargazers
[issues-shield]: https://img.shields.io/github/issues/ioanniskousis/medical-services.svg?style=flat-square
[issues-url]: https://github.com/ioanniskousis/medical-services/issues


#===============================
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
