# Twitch-anagram

This project is a mini-game created for my Twitch channel [http://twitch.tv/swaenlive](http://twitch.tv/swaenlive). The aim is for viewers to find the right word based on the anagram displayed on the screen.
This project is openSource and free to use, if you're doing so please notify me so I can brag :D

# How it works

## viewer side

On the viewer side, the only thing to do is to find the anagram and write the solution in Twitch chat.

## streamer side

On the streamer side, you should include a **compiled version** of this project as a "*Brower source*" in your streaming software (such as OBS or streamElements). 

*Note*: don't forget to click "Refresh browser when scene becomes active".

But befor you do so, here are the few things you have to set :
* The `channels` in `varibles.js` file must contains the name of the Twitch channels you want to use this project on
* The `durations` in `variables.js` file must contains all the duration we need :
    * `timeToSearch` is the maximum duration the viewers will have to get the answer
    * `displayAnswerDuration` is the duration during which the solution (and the definition) will be displayed


The project is using **Github Gists** file  (https://gist.github.com/) to store the menus that will be displayed in the webpage. In order to make it work you should set :

* The `UUID` of you're own Gists in `githubGistsinfos` in the `variables.js` file
* The `filename` of the file you've created on your Gists in the `variables.js` file
Here is how should the content of the file looks like :
```
[
  ["Word","The definition of the word that will be display once the time ends"],
  ["Another","Another word definition"],
]
```

*Note* : You can find a full dictionary (in french) in the `dictionaryExample.txt` in he `consts` directory of this project. Juste copy/past it on the Gists you want to use.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
