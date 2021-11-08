# Daily Catch 🎣

Daily catch is an application I built for keeping track of what bugs and fish are out right now for you to catch, as well as other daily tasks available to you in Animal Crossing: New Horizons.

## Roadmap 🗺️

There are a few features I definitely want to add:

- Edge-cases
  - Currently, there's a few edge cases that the current implementation doesn't reflect. For instance, this program only shows King Salmon as available in the river, though technically they're only in the river on 9/15-9/30, and are in the ocean mouth on 9/1-9/14. Small things, but they should be accounted for if this tool is to be accurate, and this is going to be one of, if not the first update I push.
- Bugs!!!
- Deep-sea creatures!
- Meteor shower days
  - these would require a town seed, and I'll have to look into if something like [MeteoNook](https://wuffs.org/acnh/weather/) provides an API (it is open-source, so hopefully I can work from that.)
  - if I can access meteonook seeds, I would also want to have the background of the site show the weather in your town (it's already colored based on the current hour)
- Toggle caught bugs/fish
  - somewhere, have a way to select all fish/bugs you've already caught, and hide those from the main page, resulting in it only showing you what new creatures you can currently catch.
- Rarity
- Prerequisites
  - some creatures are only out during rain, or other conditions, and to have those accounted better/at all would be nice.
  - Currently, when I see a rain/snow prequisite, I'm going to add an emoji in the `Location` tag, though I hope to have a more clean approach (ideally a `Conditions` tag or similar, which would add [an mdi design](https://icon-sets.iconify.design/mdi/weather-pouring/) somewhere beside the entry) in the future.
  - Prior to a town seed integration, I'll likely mark effected creatures with an icon (raindrop or similar), but afterwards, I would like to have them show on the list only if all conditions are met.
- Add option to sort by creaturepedia entry #, opposed to alphabetically
  - This shouldn't be too hard, I just need to go into creaturepedia (or pull up on a wiki) and find the index number for each fish/bug.
- Better webpage layout
  - Specifically, I want to have some nice, yet unobtrusive menus, as well as have the site more visually appealing on desktop / landscape views, apposed to the phone-centric layout it currently has (although I also do not want to jeopardize the mobile layout in any way, as I see this being the way the majority of users access the app)

There's also some lower-priority features that I would like to add to this some time. In no particular order:

- have a "later today" section for fish/bugs that aren't available yet, but will be that night.
  - I probably want to implement this after I implement toggling caught creatures, since it could be redundant and clutterful otherwise.
  - I also would like to give the user the option to "remind me when this fish is out", which would send the user a notification at the hour the fish comes out. 
- shadow size for fish
- price for bug/fish in bells
  - it would be nice to have normal timmy-tommy prices, as well as what flick and chuck would pay.
- support for other animal crossing games
  - implementing that shouldn't be difficult, but it would be a lot of work
- Support toggling 12/24hr and Northern/Southern hemispheres
- Icons for location
  - I would like to either find, make, or commission icons for the different locations creatures can be found, so that it's less text and more visual information.

If you have any requests, suggestions, ideas, or find any issues, **please [open an issue](https://github.com/shawnshyguy/Daily-Catch/issues)**!

If you want to contribute at all, **please feel free to [make a PR](https://github.com/shawnshyguy/Daily-Catch/pulls)**!

## Notes 📝

This project is obviously not affiliated with, or endorsed by Nintendo in any way. Also, this is largely a project I'm using to practice my JavaScript, so I know the code isn't the best (and I could probably do without the `File` in the arrays). If you want to fix or optimize anything here, feel free to do a pull request.

## Credits 📜

<!-- - MeteoNook for weather in background-->
- [Animal Crossing Wiki](https://animalcrossing.fandom.com/wiki/Animal_Crossing_Wiki) contributors for seasonality and TOD info
- [Iconify](https://iconify.design/)/[Material Design Icons](https://github.com/Templarian/MaterialDesign) for UI icons