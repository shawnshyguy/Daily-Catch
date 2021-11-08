
var fish = [
    {
        "Type": "Anchovy",
        "File": "anchovy.webp",
        "Location": "Sea",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Angelfish",
        "File": "angelfish.webp",
        "Location": "River",
        "Months": [5,6,7,8,9,10],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Arapaima",
        "File": "arapaima.webp",
        "Location": "River",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Arowana",
        "File": "arowana.webp",
        "Location": "River",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Barred Knifejaw",
        "File": "barred knifejaw.webp",
        "Location": "Ocean",
        "Months": [3,4,5,6,7,8,9,10,11],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Barreleye",
        "File": "barreleye.webp",
        "Location": "Ocean",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [21,22,23,0,1,2,3,4]
    },
    {
        "Type": "Betta",
        "File": "betta.webp",
        "Location": "River",
        "Months": [5,6,7,8,9,10],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Bitterling",
        "File": "bitterling.webp",
        "Location": "River",
        "Months": [11,12,1,2,3],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Black bass",
        "File": "black bass.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Blowfish",
        "File": "blowfish.webp",
        "Location": "Ocean",
        "Months": [11,12,1,2],
        "Hours": [21,22,23,0,1,2,3,4]
    },
    {
        "Type": "Blue Marlin",
        "File": "blue marlin.webp",
        "Location": "Pier",
        "Months": [11,12,1,2,3,4],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Bluegill",
        "File": "bluegill.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Butterfly fish",
        "File": "butterfly fish.webp",
        "Location": "Ocean",
        "Months": [4,5,6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Carp",
        "File": "carp.webp",
        "Location": "Holding Pond",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Catfish",
        "File": "catfish.webp",
        "Location": "Holding Pond",
        "Months": [5,6,7,8,9,10],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Char",
        "File": "char.webp",
        "Location": "River (Clifftop)",
        "Months": [3,4,5,6,9,10,11],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
        //edge case - mar-jun, is 16-9, but in sept-nov, it's all day.
        //for now, I'm keeping it conservative, but I can add an "if char"
        //type statement in fixedFish later.
    },
    {
        "Type": "Cherry Salmon",
        "File": "cherry salmon.webp",
        "Location": "River (Clifftop)",
        "Months": [3,4,5,6,9,10,11],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Clownfish",
        "File": "clownfish.webp",
        "Location": "Ocean",
        "Months": [4,5,6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Coelacanth",
        "File": "coelacanth.png",
        "Location": "Ocean 🌧️",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Crawfish",
        "File": "crawfish.webp",
        "Location": "Holding Pond",
        "Months": [4,5,6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        //this guy stops showing on 9/15, not 9/30.
    },
    {
        "Type": "Crucian Carp",
        "File": "crucian carp.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Dab",
        "File": "dab.webp",
        "Location": "Ocean",
        "Months": [10,11,12,1,2,3,4],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Dace",
        "File": "dace.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Dorado",
        "File": "dorado.webp",
        "Location": "River",
        "Months": [6,7,8,9],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Football fish",
        "File": "football fish.webp",
        "Location": "Ocean",
        "Months": [11,12,1,2,3],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Freshwater Goby",
        "File": "freshwater goby.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [19,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Frog",
        "File": "frog.webp",
        "Location": "Holding Pond",
        "Months": [5,6,7,8],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Gar",
        "File": "gar.webp",
        "Location": "River Pool",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Giant Snakehead",
        "File": "giant snakehead.webp",
        "Location": "Holding Pond",
        "Months": [6,7,8],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Giant Trevally",
        "File": "giant trevally.webp",
        "Location": "Pier",
        "Months": [5,6,7,8,9,10],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Golden Trout",
        "File": "golden trout.webp",
        "Location": "River (Clifftop)",
        "Months": [3,4,5],
        "Hours": [9,10,11]
    },
    {
        "Type": "Goldfish",
        "File": "goldfish.webp",
        "Location": "Holding Pond",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Great White Shark",
        "File": "great white shark.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Guppy",
        "File": "guppy.webp",
        "Location": "River",
        "Months": [4,5,6,7,8,9,10,11],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Hammerhead Shark",
        "File": "hammerhead shark.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Horse Mackerel",
        "File": "horse mackerel.webp",
        "Location": "Ocean",
        "Months": [0,1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Killifish",
        "File": "killifish.webp",
        "Location": "Holding Pond",
        "Months": [4,5,6,7,8],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "King Salmon",
        "File": "king salmon.webp",
        "Location": "River",
        //if day < 15 then location is ocean mouth
        "Months": [9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Koi",
        "File": "koi.webp",
        "Location": "Holding Pond",
        "Months": [0,1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Loach",
        "File": "loach.webp",
        "Location": "River",
        "Months": [3,4,5],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Mahi-Mahi",
        "File": "mahi-mahi.webp",
        "Location": "Pier",
        "Months": [5,6,7,8,9,10],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Mitten Crab",
        "File": "mitten crab.webp",
        "Location": "River",
        "Months": [9,10,11],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Moray Eel",
        "File": "moray eel.webp",
        "Location": "Ocean",
        "Months": [8,9,10],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Napoleonfish",
        "File": "napoleonfish.webp",
        "Location": "Ocean",
        "Months": [7,8],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Neon tetra",
        "File": "neon tetra.webp",
        "Location": "River",
        "Months": [4,5,6,7,8,9,10,11],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Nibble Fish",
        "File": "nibble fish.webp",
        "Location": "River",
        "Months": [5,6,7,8,9],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Oarfish",
        "File": "oarfish.webp",
        "Location": "Ocean",
        "Months": [12,1,2,3,4,5],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Ocean Sunfish",
        "File": "ocean sunfish.webp",
        "Location": "Ocean",
        "Months": [7,8,9],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Olive Flounder",
        "File": "olive flounder.webp",
        "Location": "Ocean",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Pale Chub",
        "File": "pale chub.webp",
        "Location": "River",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Pike",
        "File": "pike.webp",
        "Location": "River",
        "Months": [9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Piranha",
        "File": "piranha.webp",
        "Location": "River",
        "Months": [6,7,8,9],
        /*according to the fandom wiki, in gamecube and WW, its the entire month of
        september, but in n64/city folk/new leaf, its only until the 15th of sept.
        scrolling down, it shows the creaturepedia entry to show just june thru sept, 
        so that's what I'm going with, at least until someone shows me definitive proof
        of one or othe other*/
        "Hours":[0,1,2,3,4,9,10,11,12,13,14,15,16,21,22,23]
    },
    {
        "Type": "Pond Smelt",
        "File": "pond smelt.webp",
        "Location": "River",
        "Months": [12,1,2],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Pop-eyed Golfish",
        "File": "pop-eyed goldfish.webp",
        "Location": "Holding Pond",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Pufferfish",
        "File": "puffer fish.webp",
        "Location": "Ocean",
        "Months": [7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Rainbowfish",
        "File": "rainbowfish.webp",
        "Location": "River",
        "Months": [5,6,7,8,9,10],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Ranchu Goldfish",
        "File": "ranchu goldfish.webp",
        "Location": "Pond",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [9,10,11,12,13,14,15,16]
    },
    {
        "Type": "Ray",
        "File": "ray.webp",
        "Location": "Ocean",
        "Months": [8,9,10,11],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Red Snapper",
        "File": "red snapper.webp",
        "Location": "Ocean",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Ribbon Eel",
        "File": "ribbon eel.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9,10],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Saddled Bichir",
        "File": "saddled bichir.webp",
        "Location": "River",
        "Months": [6,7,8,9],
        "Hours": [21,22,23,0,1,2,3,4]
    },
    {
        "Type": "Salmon",
        "File": "salmon.webp",
        "Location": "River",
        //same issue as king salmon, in regards to location
        "Months": [9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Saw Shark",
        "File": "saw shark.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Sea Bass",
        "File": "sea bass.webp",
        "Location": "Ocean",
        "Months": [1,2,3,4,5,6,7,8,9,10,11,12],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Sea Butterfly",
        "File": "sea butterfly.webp",
        "Location": "Ocean",
        "Months": [12,1,2,3],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Seahorse",
        "File": "sea horse.webp",
        "Location": "Ocean",
        "Months": [4,5,6,7,8,9,10,11],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Snapping Turtle",
        "File": "snapping turtle.webp",
        "Location": "River",
        "Months": [4,5,6,7,8,9,10],
        "Hours": [21,22,23,0,1,2,3,4]
    },
    {
        "Type": "Soft-Shelled Turtle",
        "File": "soft-shelled turtle.webp",
        "Location": "River",
        "Months": [8,9],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Squid",
        "File": "squid.webp",
        "Location": "Ocean",
        "Months": [12,1,2,3,4,5,6,7,8],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Stringfish",
        "File": "stringfish.webp",
        "Location": "River (Clifftop)",
        "Months": [12,1,2,3],
        "Hours": [16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9]
    },
    {
        "Type": "Sturgeon",
        "File": "sturgeon.webp",
        "Location": "River mouth",
        "Months": [9,10,11,12,1,2,3],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Suckerfish",
        "File": "suckerfish.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Surgeonfish",
        "File": "surgeonfish.webp",
        "Location": "Ocean",
        "Months": [4,5,6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Sweetfish",
        "File": "sweetfish.webp",
        "Location": "River",
        "Months": [7,8,9],
        "Hours": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
        "Type": "Tadpole",
        "File": "tadpole.webp",
        "Location": "Holding Pond",
        "Months": [3,4,5,6,7],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Tilapia",
        "File": "tilapia.webp",
        "Location": "River",
        "Months": [6,7,8,9,10],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Tuna",
        "File": "tuna.webp",
        "Location": "Pier",
        "Months": [11,12,1,2,3,4],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Whale Shark",
        "File": "whale shark.webp",
        "Location": "Ocean",
        "Months": [6,7,8,9],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Yellow Perch",
        "File": "yellow perch.webp",
        "Location": "Ocean",
        "Months": [10,11,12,1,2,3],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        "Type": "Zebra Turkeyfish",
        "File": "zebra turkeyfish.webp",
        "Location": "Ocean",
        "Months": [4,5,6,7,8,9,10,11],
        "Hours": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    }
]


















//basic logic from hereon. if you're here to try and modify
//list entries, you're past where you need to do that.
//Thanks!
var today = new Date();
if (today.getHours()==23) {var hourFix = 0} else {var hourFix = (today.getHours()+1)}
/* if it is 4pm, fish available until 4pm are no longer available. therefore, the fish has
to be available until at least one hour later than the current hour. */
var fixedFish = [];
for (var element of fish) {
    if (element.Months.includes(today.getMonth()+1)) { //filters to only entries for this month
        if (element.Hours.includes(hourFix)) { //filters to only entries for this hour
            fixedFish.push(element)
        }
    }
}
