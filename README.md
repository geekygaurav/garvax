✨ React + Redux + Saga Boilerplate ✨

Hey folks! I have brought to you the coolest trio in the trend of mobile application technologies. Yes, you guessed it right. We can already smell the popularity of React getting higher these days and also Redux which proved to be a strong supporting framework for React. But what's the interesting thing about GARVAX?. I have used the Sagas middleware.

Now I am not the first one to do this, actually many have started to use Saga. But I made this boilerplate especially for those who are noobs to the react-native world and want to kickstart developing an application to learn. The configurations are also understandable if you have a basic knowledge of react-native and javascript. You're good to go. 😁

About
------
RN version used in this project is 0.59. This project is developed from scratch using react-native cli. I haven't used many third party libraries in this project because I wanted boilerplate to be lite and simple without making complicated code so that others can easily get familiar and also can modify/implement their own changes by forking this repo.😎

Folder structure
----------------
├── Assets
│   ├── Garvax.png
│   └── Garvaxlogo.png
├── Buisness
│   └── Interactions.js
├── Component
│   ├── InputField.js
│   ├── ProfileContent.js
│   ├── ProfileHeader.js
│   ├── ProfileNavbar.js
│   └── README.md
├── Container
│   ├── Brew.js
│   ├── GitHubUser.js
│   ├── Guru.js
│   ├── Home.js
│   ├── LaunchScreen.js
│   ├── Profile.js
│   ├── README.md
│   └── Styles
│       ├── BrewStyle.js
│       ├── GitHubUserStyle.js
│       ├── GuruStyle.js
│       ├── HomeStyle.js
│       ├── LaunchScreenStyles.js
│       └── ProfileStyle.js
├── Fixtures
│   ├── Beer.json
│   ├── README.md
│   ├── StarkInfo.json
│   └── User.json
├── Images
│   ├── Images.js
│   └── README.md
├── Metrics
│   ├── Colors.js
│   ├── README.md
│   ├── Styles.js
│   └── index.js
├── Navigation
│   └── Navigation.js
├── Redux
│   ├── README.md
│   └── Reducer
│       ├── BeerRedux.js
│       ├── GithubUserRedux.js
│       ├── GuruRedux.js
│       ├── index.js
│       └── indexReducer.js
├── Saga
│   ├── BeerSaga.js
│   ├── GithubUserSaga.js
│   ├── GuruSaga.js
│   ├── README.md
│   └── index.js
└── Service
    ├── Api.js
    └── README.md
Assets
------
Basically you can put all your assets here. Even if you want to include .ttf fonts or anything, you can put up here.

**PROTIP!! Make sure you maintain a proper folder structure as well as nomenclature and don't mess up with your assets. 😉

Business
--------
This is a business layer where you can save all the necessary business logic and functionalities in one place so that you can use it from anywhere inside the project.

Component
---------
Tada! This is a significant important folder. You can store re-usable components over here and use it across the project. Remember that react strongly supports the idea of components re-usability.

**Note Mostly components are regarded as child components that deals with props and not state variable

Container
---------
Here comes the actual folder which contains all the screens. In other words, we can call it as parent components.

Fixtures
--------
Well, this is not so important folder but at the same time very handy to use. Suppose you are doing development and you don't have actual APIs to develop. In that case, you can form your own JSON files and keep it here and use it exactly you would have used for API response. Once you get the real API just replace it in your component. This will not hinder your development. Cool isn't it? 👍

Images
------
Image component layer where you will already make your images ## JS ready and import in your component. This will prevent you from writing same syntax again and again. 😌

Metrics
--------
This one also a very useful folder, where you want to globalize your application style, fonts, etc. It will keep consistency to your project all over regarding the UI.

Navigation
---------
Well, we can say it as a library for our application. We can import all the screens and keep them here.

**NOTE In this project we have used Stack navigator. Anyhow you can modify this file to create your own navigator and customize. You can visit React navigation for more information.

Redux
-----
This is our redux folder and we keep all the reducer in one place. If you want to know more about how redux works you can go to Redux official site to know more.

**Note If you are creating any reducer, don't forget to import it in the index.js file.

Saga
----
Our middleware lives right here and operates. If you want to explore more about how saga works, please go here, you will have an idea. Parallelly you can tally with our boilerplate saga configuration so that you have a clear picture.

Service
-------
This is our API endpoints saving file and we can export it any place and perform fetch functions.
