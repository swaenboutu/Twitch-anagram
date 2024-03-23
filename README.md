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

* The `UUID` of you're own Gists in `githubGistsinfos` in `the variables.js` file
* The `filename` of the file you've created on your Gists in the `variables.js` file
Here is how should the content of the file looks like :
```
[
  ["Word","The definition of the word that will be display once the time ends"],
  ["Another","Another word definition"],
]
```

*Note* : You can find a full dictionary (in french) in the `dictionaryExample.txt` in he `consts` directory of this project. Juste copy/past it on the Gists you want to use.

This is a [Next.js](https://nextjs.org/) project.

First, launch the development server:

```bash
npm run start

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can then build a stand-alone version:

```bash
npm run build
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
