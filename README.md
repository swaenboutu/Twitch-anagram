# Twitch-anagram

This project is a mini-game created for my Twitch channel [http://twitch.tv/swaenlive](http://twitch.tv/swaenlive). The aim is for viewers to find the right word based on the anagram displayed on the screen.

## Getting started

This is a [Next.js](https://nextjs.org/) project.

First, launch the development server:

``bash
npm run start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can then build a stand-alone version:

``bash
npm run build
```

Then all you have to do is import the local file as a local web source in OBS

*Note*: don't forget to click "Refresh browser when scene becomes active".

## Key files

Here are the files you'll probably need to update to make it work on your own Twitch channel

`/consts/variables.js`

This file contains :

1. The list of channels whose chat you want to read to get the winner
2. The display times for each step (search time, time to display the correct answer)

The list of words (and definitions) used to create anagrams is defined in :

`./consts/dictionary.js`

All display colors are defined in the file

`/css/variables.css`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
