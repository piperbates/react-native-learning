# Pokemon Game Mobile App

This is a remake of my 151 Pokemon game but as a mobile app, as part of a project to learn React Native.

## Starting the app

Prerequisites: You'll either need an android / iOS emulator, or a device with android / iOS installed. 

1. Clone the repo on your local machine
2. In the terminal run:
     2.a Run `npm install`,
     2.b Run `npx expo start`
3. Follow the instructions in your terminal, depending on how you're running the app in an emulator or device.

My short term goal is to get this up on Expo so it can be downloaded and tested.

## Some todos and big picture goals:

* __Functionality__ Once you type a word into the input box in the game mode, I'd like it to make a little ding noise if the input is a not-yet-guessed Pokemon, and have the Pokemon show up in the list depending on it's position in the Pokedex. (This probably doesn't make sense if you don't understand Pokemon but explaining that is not in the scope of this project ;D)

* __Timer or no timer?__ In my original webapp for this project I had a 15 minute timer that started as soon as the user started typing in the input box, mostly because I was trying to clone the Sporkle pokemon quiz. I'm not sure the timer would work well as a feature in a mobile application, and feedback I had on the webapp showed that most people actually preferred to guess the Pokemon in a more relaxed manner. Perhaps I'm weird, I quite liked the challenge of "how many can you guess in 15 minutes". If there's a huge viral outcry for putting the timer back in, perhaps I'll add a timed mode for the hardcore ~~nerds~~ enthusiasts.

If I do make a timed mode it'd be fun to make a little leader board of who beat it in the shortest time. That I will win, because I'm clearly the only person who cares about timed mode. No, I'm not sulking, leave me alone.

* __About Screen__: This is probably going to end up being a modal that you can access by tapping my name, which is eventually going to be an icon of my face. Game logic is more fun than making about modals, though.

* EVENTUALLY I'd like to throw this onto the Play Store and maybe even the Apple Store (maybe I should look into copyright for that though, don't wanna get sued by Nintendo, even if it would be a free app), but considering this is a For Shits and Giggles learning project that's not my primary concern. It'll happen one day.
