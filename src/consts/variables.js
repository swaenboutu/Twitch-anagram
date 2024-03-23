// Name of the Twitch channel(s) you want to read th chat
const channels = [
    "redswaen",
    "swaenlive"
];

// Url Of the Github Gists file containing all the menu
const githubGistsinfos = {
    "UUID":``, 
    "filename" : "dictionary.json"
};


// timeToSearch : The time users have to get the right answer (in seconds)
// displayAnswerDuration: The duration you want to display the right word and the definition of the word (in seconds)
const durations = {"timeToSearch":35, "displayAnswerDuration":30}; 

export {channels, githubGistsinfos, durations};
