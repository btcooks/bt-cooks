// ---------------------------------------------------------------------------
// Recipes imported from @bt.cooks on Instagram. Each entry mirrors one post:
//
//   id, title, date, category, image, instagramUrl, caption
//   description: one-line summary shown on cards
//   intro:       story/content paragraphs shown on the recipe page
//   prepTime/cookTime/servings: quick facts
//   ingredientGroups: named ingredient sections (falls back to ingredients)
//   steps, tips, gear, notes
// ---------------------------------------------------------------------------

const RECIPES = [
  {
    id: "rotisserie-herb-citrus-turkey",
    title: "Rotisserie Herb & Citrus Turkey",
    date: "2026-11-21",
    category: "Holiday",
    image: "images/recipes/rotisserie-herb-citrus-turkey.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DgA2hwqy6yf/",
    caption: "Rotisserie Herb & Citrus Turkey 🍊🔥🦃\n\nForget the oven. This turkey was made for the open fire!\n\nMarinated for 12–24 hours with fresh herbs, garlic, lemon, orange, and a blend of seasonings to soak up all that flavor. Then onto the Kamado Joe Joetisserie, slowly rotating over lump charcoal.\n\nHerb & Citrus Marinade\n13–14 lb turkey\n1 cup olive oil\n⅓ cup soy sauce\n1 onion, quartered (for inside the turkey)\nJuice of 1–2 lemons\nJuice of 1 large orange\n1 tsp lemon zest\n1 tsp orange zest\n½ cup finely chopped parsley\n¼ cup finely chopped sage\n2 tbsp finely chopped rosemary\n¼ cup finely chopped thyme\n2–3 green onions, sliced\n1 tbsp minced garlic\n2 tsp smoked paprika\n1 tsp paprika\n2 tsp salt\n1 tbsp chicken bouillon\n1 tsp black pepper\n\nInstructions\nMix all marinade ingredients until combined.\nGently loosen the turkey skin and work the marinade underneath and over the turkey.\nRefrigerate and marinate for 12–24 hours.\nSet up the Kamado Joe Joetisserie and cook at 350°F over lump charcoal.\nCook until the breast reaches 160°F and the thighs reach 170°F. Verify temperatures with a reliable thermometer and allow the turkey to rest before carving.\n\n#RotisserieTurkey #SmokedTurkey #ThanksgivingCooking #Thanksgiving #FoodReels",
    description: "Turkey marinated 12-24 hours in herb-citrus marinade, then rotisserie-roasted over lump charcoal.",
    intro: [
      "Forget the oven — this bird was made for the open fire. The whole idea is to give the turkey a long, unhurried bath in an herb-and-citrus marinade, then let it slowly rotate over lump charcoal so the skin bastes itself in its own fat the entire cook.",
      "The marinade leans on fresh parsley, sage, rosemary, and thyme with plenty of lemon and orange juice and zest, plus soy sauce and chicken bouillon for a deep savory backbone. Loosening the skin and working the marinade underneath is the move that puts flavor directly against the meat, not just on it.",
      "On the rotisserie, steady rotation and medium heat (around 350°F) mean no flare-ups, no pale spots, and crackling bronzed skin all the way around. It is the most hands-off way to cook a turkey and one of the most impressive things you can pull off in the backyard."
    ],
    prepTime: "45 min + 12-24 hr marinade",
    cookTime: "~3 hr",
    servings: "One 13-14 lb turkey",
    ingredientGroups: [
      {
        heading: "Herb & Citrus Marinade",
        items: [
          "13-14 lb turkey",
          "1 cup olive oil",
          "1/3 cup soy sauce",
          "1 onion, quartered (for inside the turkey)",
          "Juice of 1-2 lemons",
          "Juice of 1 large orange",
          "1 tsp lemon zest",
          "1 tsp orange zest",
          "1/2 cup finely chopped parsley",
          "1/4 cup finely chopped sage",
          "2 tbsp finely chopped rosemary",
          "1/4 cup finely chopped thyme",
          "2-3 green onions, sliced",
          "1 tbsp minced garlic",
          "2 tsp smoked paprika",
          "1 tsp paprika",
          "2 tsp salt",
          "1 tbsp chicken bouillon",
          "1 tsp black pepper"
        ]
      }
    ],
    steps: [
      "Mix all marinade ingredients until combined.",
      "Gently loosen the turkey skin and work the marinade underneath and over the turkey.",
      "Refrigerate and marinate for 12-24 hours.",
      "Set up the Kamado Joe Joetisserie and cook at 350°F over lump charcoal.",
      "Cook until the breast reaches 160°F and the thighs reach 170°F. Verify temperatures with a reliable thermometer and allow the turkey to rest before carving."
    ],
    tips: [
      "Slide your fingers under the skin slowly — you want to separate it from the meat without tearing it, so the marinade stays put.",
      "Start the marinade the night before; a full 24 hours makes a noticeable difference in the herb and citrus flavor.",
      "Trust the thermometer, not the clock. Pull the turkey at the target temps and let it rest before carving.",
      "Quartered onion goes inside the cavity — it perfumes the bird from the inside as it rotates."
    ],
    gear: ["Kamado Joe Big Joe III", "Kamado Joe Joetisserie", "The Good Charcoal lump charcoal"],
    notes: "Cooked on the Kamado Joe Big Joe III with The Good Charcoal lump charcoal."
  },
  {
    id: "filipino-pork-bbq-skewers",
    title: "Filipino-Style Pork BBQ Skewers",
    date: "2026-11-13",
    category: "Filipino & Islander",
    image: "images/recipes/filipino-pork-bbq-skewers.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DfstnoAPY2B/",
    caption: "Filipino-Style Pork BBQ Skewers 🇵🇭🔥\n\nSweet, sticky, smoky and way too easy. The secret is the banana ketchup and a splash of Sprite, which gives you that sticky-sweet char you can’t get from a bottle.\n\nMarinade for 3 lbs skinless pork belly:\n4 tbsp fish sauce\n2 tbsp oyster sauce\n2 tbsp light soy sauce\n2 tbsp banana ketchup\n½ can Sprite\n4 garlic cloves, minced\n3 green onion stalks, chopped\n1 knob ginger, minced\n1 tbsp sesame oil\n3 tbsp sugar\n2 tbsp honey\n1 tsp ground pepper\n\nMix it all up, marinate for 2–3 hours (or overnight if you’re patient), then skewer and grill over direct heat.\n\nSave this for your next cookout and send it to the friend who always brings the rice. Would you eat these or pass?\n\n#filipinofood #filipinobbq #porkbelly #grilling #foodreels",
    description: "Sweet, sticky, smoky pork belly skewers with a banana ketchup and Sprite marinade.",
    intro: [
      "This is Filipino barbecue the way it tastes at a street stall back home: thin-sliced pork belly threaded on skewers, grilled hot over direct coals, painted glossy with a sweet-savory marinade that chars into sticky caramelized edges.",
      "The magic combination is banana ketchup and a splash of Sprite. Banana ketchup brings that signature sweet-tangy Filipino BBQ base, and the soda adds just enough sugar and fizz to help the marinade cling and lacquer over the coals — a sticky-sweet char you can't get from a bottle of anything.",
      "Underneath all that sweetness, fish sauce, oyster sauce, soy, ginger, and garlic keep things deeply savory. It's a marinade you can mix up in five minutes, and it turns pork belly into the kind of skewer people hover around the grill for."
    ],
    prepTime: "25 min + 2-3 hr marinade",
    cookTime: "20 min",
    servings: "3 lbs pork belly",
    ingredientGroups: [
      {
        heading: "Marinade (for 3 lbs skinless pork belly)",
        items: [
          "3 lbs skinless pork belly",
          "4 tbsp fish sauce",
          "2 tbsp oyster sauce",
          "2 tbsp light soy sauce",
          "2 tbsp banana ketchup",
          "1/2 can Sprite",
          "4 garlic cloves, minced",
          "3 green onion stalks, chopped",
          "1 knob ginger, minced",
          "1 tbsp sesame oil",
          "3 tbsp sugar",
          "2 tbsp honey",
          "1 tsp ground pepper"
        ]
      }
    ],
    steps: [
      "Mix all the marinade ingredients together.",
      "Add the pork belly and marinate for 2-3 hours, or overnight if you're patient.",
      "Skewer and grill over direct heat until sticky and charred at the edges."
    ],
    tips: [
      "Slice the pork belly thin and even — about 1/4 inch — so it cooks through before the glaze burns.",
      "If you're using bamboo skewers, soak them in water for 30 minutes first so they don't catch fire.",
      "The sugar in this marinade means it browns fast. Grill over medium-hot coals and keep the skewers moving.",
      "Overnight marinating takes these from good to unforgettable if you can plan ahead."
    ],
    gear: ["Charcoal grill or kamado set up for direct heat"]
  },
  {
    id: "chuck-roast-burnt-ends",
    title: "Chuck Roast Burnt Ends",
    date: "2026-11-12",
    category: "BBQ",
    image: "images/recipes/chuck-roast-burnt-ends.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DfoGpS3JjMw/",
    caption: "Chuck Roast Burnt Ends 🥩🔥\n\nSticky, smoky, buttery, and loaded with maple BBQ goodness. These Chuck Roast Burnt Ends are proof you don’t need brisket to make incredible burnt ends!\n\nStarted with a 3 lb chuck roast, seasoned generously, then smoked over oak at 275°F until 165°F. Wrapped and cooked to 200°F before cubing and tossing with maple syrup, BBQ sauce, and butter.\n\nBack on the smoker until tender, sticky, and coated in that sweet, smoky glaze. Finished with another drizzle of maple syrup and BBQ sauce. Trust me, these bites are hard to stop eating!\n\nIngredients\n3 lb chuck roast\nYour favorite seasoning\n½ cup maple syrup\n½ cup BBQ sauce\n½ stick butter\n\n#BurntEnds #SmokedChuckRoast #BBQReels #BackyardBBQ #FoodReels",
    description: "Smoked chuck roast cubes tossed in maple BBQ glaze until sticky and buttery.",
    intro: [
      "Burnt ends without the brisket. Chuck roast has all the marbling that makes burnt ends great, it costs a fraction of a packer, and it's small enough to cook on a weeknight smoker session instead of an all-day project.",
      "The method is the classic two-stage play: smoke the whole roast over oak until it takes on deep color and bark, wrap it to push through the stall until fork-tender, then cube it and toss the pieces with maple syrup, BBQ sauce, and butter.",
      "Back on the smoker, those cubes re-crust and soak up the glaze until every piece is sticky, smoky, and buttery all at once. Finished with one more drizzle of maple and BBQ sauce, these are the bites that never make it to the plate — people eat them straight off the tray."
    ],
    prepTime: "15 min",
    cookTime: "~8 hr",
    servings: "6",
    ingredients: [
      "3 lb chuck roast",
      "Your favorite seasoning",
      "1/2 cup maple syrup",
      "1/2 cup BBQ sauce",
      "1/2 stick butter"
    ],
    steps: [
      "Season the chuck roast generously with your favorite seasoning.",
      "Smoke over oak at 275°F until the internal temp hits 165°F.",
      "Wrap and continue cooking to 200°F.",
      "Cube the roast and toss with maple syrup, BBQ sauce, and butter.",
      "Return to the smoker until tender, sticky, and coated in the glaze.",
      "Finish with another drizzle of maple syrup and BBQ sauce."
    ],
    tips: [
      "Cube the roast into roughly 1.5-inch pieces so every bite gets plenty of glazed surface area.",
      "Toss the cubes while everything is still hot — warm meat absorbs the maple-butter glaze better.",
      "The second smoke stage is short; you're setting the glaze and crisping the edges, not cooking the meat further.",
      "Serve them piled on white bread with pickles if you want the full burnt ends experience."
    ],
    gear: ["Kamado Joe Big Joe Konnected Joe", "MEATER Pro wireless thermometer", "The Good Charcoal lump charcoal"]
  },
  {
    id: "smoked-beef-back-ribs",
    title: "Smoked Beef Back Ribs",
    date: "2026-11-07",
    category: "BBQ",
    image: "images/recipes/smoked-beef-back-ribs.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DfceuNapjTH/",
    caption: "Smoked Beef Back Ribs 🔥🥩\n\nNot every beef rib needs to be a giant dino rib to bring BIG flavor. Don’t sleep on these!\n\nSmoked low and slow at 250°F over post oak for 4 hours, with a black truffle hot sauce binder and a bold blend of @blazingstarbbq All-In-One and @reservablends Surf n Turf. Finished with a BBQ glaze and a short rest. Smoky, tender, and packed with flavor! 🤤🔥\n\nSliced with the @benchmadeknifecompany Station Knife for that buttery smooth cut.\n\n#BeefRibs #BackyardBBQ #BBQReels #FoodReels",
    description: "Beef back ribs smoked 4 hours over post oak with a truffle hot sauce binder and BBQ glaze finish.",
    intro: [
      "Not every beef rib needs to be a giant dino rib to bring big flavor. Beef back ribs are the cut most people overlook — leaner than short ribs, quicker to cook, and when you smoke them properly, every bit as satisfying.",
      "The flavor build starts with a black truffle hot sauce as the binder. It's an unconventional move, but the truffle richness and slow heat give the rub something to grab onto and add an earthy depth that runs through the whole rack.",
      "From there it's four hours at 250°F over post oak — the classic beef wood — with a bold all-purpose rub blend doing the heavy lifting. A BBQ glaze at the end and a short rest give you smoky, tender ribs with a glossy finish and a buttery-smooth cut."
    ],
    prepTime: "15 min",
    cookTime: "4 hr",
    servings: "1 rack",
    ingredients: [
      "Beef back ribs",
      "Black truffle hot sauce (binder)",
      "BBQ All-In-One seasoning",
      "Surf n Turf seasoning",
      "BBQ glaze"
    ],
    steps: [
      "Coat the ribs with a black truffle hot sauce binder.",
      "Season generously with a blend of All-In-One and Surf n Turf seasoning.",
      "Smoke at 250°F over post oak for 4 hours.",
      "Finish with a BBQ glaze and let the ribs rest briefly before slicing."
    ],
    tips: [
      "Remove the membrane on the bone side before seasoning — it keeps the rub from penetrating and turns leathery when cooked.",
      "Post oak is the move for beef ribs; it's mild enough for a long cook but still gives that signature smoke ring and flavor.",
      "Don't rush the rest. Even 10-15 minutes on the board lets the juices settle back in before slicing.",
      "Look for bend, not just time: when the rack bends easily when lifted, they're ready."
    ],
    gear: ["Kamado Joe Big Joe III", "The Good Charcoal lump charcoal", "Benchmade Station Knife"]
  },
  {
    id: "cajun-honey-iberico-ribs",
    title: "Cajun Honey Iberico Pork Ribs",
    date: "2026-10-28",
    category: "Grilling",
    image: "images/recipes/cajun-honey-iberico-ribs.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DfDEgwjv52_/",
    caption: "This Iberico Pork Is on Another Level 🤤🔥🐖\n\nCajun Honey. Garlic Butter. Charcoal kissed perfection. 💰🔥\n\nI went heavy with @tfti.bbq Cajun Honey Seasoning, grilled this Iberico rib rack over lump charcoal, then finished it with homemade Cajun Honey Garlic Butter. Sweet heat, rich buttery flavor, and juicy pork in every bite. This is how you make pork unforgettable!\n\nCajun Honey Butter\n• 1 tbsp Cajun Honey Seasoning\n• 1 stick butter\n• 6 garlic cloves\n• 1 tbsp parsley\n\n#IbericoPork #CajunHoney #LiveFireCooking #BBQReels #FoodReels",
    description: "Iberico rib rack grilled over charcoal and finished with Cajun honey garlic butter.",
    intro: [
      "Iberico pork is on another level. The pigs roam and fatten on acorns, and the meat carries that rich, nutty, almost steak-like marbling — closer to wagyu than to the pork you grew up on.",
      "The cook is deliberately simple to let that meat shine: a heavy coat of Cajun honey seasoning, a hot lump-charcoal grill for that char-kissed exterior, and a homemade Cajun honey garlic butter melting over the top as it comes off the fire.",
      "The butter is the finisher — one stick, six cloves of garlic, parsley, and more of the seasoning, blended together. Sweet heat, rich butter, and juicy Iberico pork in every bite. This is how you make pork unforgettable."
    ],
    prepTime: "20 min",
    cookTime: "~1.5 hr",
    servings: "1 rib rack",
    ingredientGroups: [
      {
        heading: "For the ribs",
        items: [
          "1 Iberico rib rack",
          "Cajun Honey Seasoning, generous coat"
        ]
      },
      {
        heading: "Cajun Honey Garlic Butter",
        items: [
          "1 stick butter, softened",
          "1 tbsp Cajun Honey Seasoning",
          "6 garlic cloves, minced",
          "1 tbsp parsley, chopped"
        ]
      }
    ],
    steps: [
      "Make the Cajun honey butter: blend the softened butter, garlic, parsley, and Cajun honey seasoning until combined.",
      "Season the rib rack heavily with Cajun honey seasoning on all sides.",
      "Grill over lump charcoal until the internal temperature hits your target.",
      "Finish with the Cajun honey garlic butter and rest briefly before cutting."
    ],
    tips: [
      "Make the butter ahead and chill it in a log — it slices into pats that melt slowly over the hot ribs.",
      "Iberico pork is richer than regular pork, so pull it a little earlier than you'd think; the carryover does the rest.",
      "Baste or butter the ribs in the last few minutes only — garlic in direct heat burns fast and turns bitter.",
      "If you can't find Iberico, this butter treatment works great on a quality heritage-breed pork rack too."
    ],
    gear: ["Kamado Joe Jr.", "MEATER Pro wireless thermometer", "The Good Charcoal lump charcoal"]
  },
  {
    id: "smoked-braised-chuck-roast",
    title: "Smoked & Braised Chuck Roast",
    date: "2026-10-16",
    category: "BBQ",
    image: "images/recipes/smoked-braised-chuck-roast.jpg",
    instagramUrl: "https://www.instagram.com/bt.cooks/reel/DekJKaqJqJC/",
    caption: "This Chuck Roast Is FALL APART Tender 🤤🔥\n\nSmoked low and slow over oak, then braised until juicy, rich, and ridiculously tender. That smoky bark and savory beef broth? 🤌🔥 This is comfort food done right!\n\n🥩 Ingredients\n• 3 lbs chuck roast, cut into large cubes\n• @blazingstarbbq Beef Seasoning\n• 2 cups beef broth\n• 1 onion, sliced\n• 1 green bell pepper, sliced\n• Salt and pepper to taste\n\n🔥 How to make it\nSeason generously and let rest for 1 hour.\nSmoke indirect at 250°F for 2–3 hours.\nAdd to a pot with beef broth, onion, and bell pepper.\nCover and braise at 300°F for about 2 hours, until fork tender.\n\n#SmokedChuck #BraisedBeef #ChuckRoast #BBQRecipe #FoodReels",
    description: "Chuck roast smoked over oak, then braised with broth, onion, and bell pepper until fork tender.",
    intro: [
      "This is comfort food done right: chuck roast that gets the best of both worlds. First it spends a few hours in the smoker picking up that deep oak-smoked bark — the flavor you can't fake indoors.",
      "Then it goes into a pot with beef broth, sliced onion, and green bell pepper, and braises low and slow until the big cubes are fall-apart tender and the smoky bark has melted into the broth. What comes out is juicy, rich, and savory with that little caper emoji level of good.",
      "The two-stage method works because chuck is built for it: enough fat and connective tissue to stay juicy through a long braise, and enough beefy character to stand up to real wood smoke. Serve it over mashed potatoes, pile it on rice, or stuff it into tacos — it pulls the whole plate together no matter how you land it."
    ],
    prepTime: "1 hr rest",
    cookTime: "4-5 hr",
    servings: "6",
    ingredients: [
      "3 lbs chuck roast, cut into large cubes",
      "Beef seasoning",
      "2 cups beef broth",
      "1 onion, sliced",
      "1 green bell pepper, sliced",
      "Salt and pepper to taste"
    ],
    steps: [
      "Season generously and let rest for 1 hour.",
      "Smoke indirect at 250°F for 2-3 hours.",
      "Add to a pot with beef broth, onion, and bell pepper.",
      "Cover and braise at 300°F for about 2 hours, until fork tender."
    ],
    tips: [
      "Cut the roast into large cubes before smoking — more bark surface per bite and faster, more even braising later.",
      "Keep the braising liquid to about two-thirds up the meat; you want steam and simmer, not a full boil.",
      "Fork tender is the real doneness test — if the fork slides in with no resistance, stop cooking.",
      "The leftover braising liquid is liquid gold. Spoon it over whatever you're serving."
    ],
    gear: ["Kamado Joe Big Joe III", "The Good Charcoal lump charcoal"],
    notes: "Cooked on the Kamado Joe Big Joe III with The Good Charcoal lump charcoal."
  },
{
    "id":  "lemon-chipotle-crema-wings",
    "title":  "Lemon Chipotle Crema Wings",
    "date":  "2026-09-23",
    "category":  "Wings",
    "image":  "images/recipes/lemon-chipotle-crema-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemon Chipotle Crema Wings 🍗🔥 \n\nGrilled over lump charcoal at 375–400°F for 1 hr (flipping halfway). \n\nWings:\nCorn starch coat for crunch\nCarne Asada seasoning\n\nLemon Chipotle Crema:\n½ cup sour cream\n1 tbsp chipotle powder\nJuice + zest of ½ lemon\n1 garlic clove, minced\n½ tbsp kosher salt\n\n#CrispyWings #grilledwings #bbq #homecooking",
    "description":  "Grilled over lump charcoal at 375–400°F for 1 hr (flipping halfway). Wings: Corn starch coat for crunch Carne Asada seasoning",
    "likes":  113,
    "intro":  [
                  "Grilled over lump charcoal at 375–400°F for 1 hr (flipping halfway). Wings: Corn starch coat for crunch Carne Asada seasoning"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "cup sour cream",
                                               "1 tbsp chipotle powder",
                                               "Juice + zest of ½ lemon",
                                               "1 garlic clove, minced",
                                               "tbsp kosher salt"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "smoked-over-the-top-chili",
    "title":  "Smoked Over-the-Top Chili",
    "date":  "2026-08-07",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/smoked-over-the-top-chili.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Over-the-Top Chili 🥣🔥\n\nThis chili is loaded with layers of smoky, beefy flavor. The meat cooks right over the chili, letting all those juices and rendered fat drip down into the vegetables before everything comes together into one rich, hearty bowl.\n\nSeasoned with @blazingstarbbq All in One and Beef Seasoning, then smoked low and slow for that extra layer of flavor.\n\nIngredients\n\n* 2 lbs sweet Italian sausage\n* 3 lbs ground beef\n* 1/4 lb bacon, chopped\n* 1 green bell pepper, diced\n* 1 red bell pepper, diced\n* 1 orange bell pepper, diced\n* 1 yellow onion, diced\n* 6 cloves garlic, minced\n* 12 oz diced tomatoes\n* 25.4 oz tomato sauce\n* 1 tbsp cumin\n* 1 tbsp cayenne pepper\n* 1 tbsp black pepper\n* 2 tbsp chili powder\n* 1 cup beef broth\n* @blazingstarbbq All in One \u0026 Beef Seasoning\n\nMethod\n\n1. Sauté the bacon, peppers, onions, and garlic. Remove and set aside.\n2. Season the ground beef and sausage with @blazingstarbbq All in One and Beef Seasoning.\n3. Add the sautéed vegetables to a large pot or pan.\n4. Place a wire rack over the pot and arrange the ground beef and sausage on top.\n5. Smoke uncovered at 275°F over indirect heat for about 2 hours, or until the meat reaches 150°F.\n6. Break the ground beef into small crumbles and slice the sausage into 1-inch pieces. Add both to the chili along with the bacon.\n7. Add beef broth, tomato sauce, diced tomatoes, cumin, cayenne, black pepper, and chili powder. Mix well and adjust seasoning.\n8. Continue cooking for another 2 hours, or until the chili thickens. No need to add additional wood at this point.\n9. Skim off any excess fat and serve with diced onions, shredded cheese, and green onions.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n\n#SmokedChili #OverTheTopChili #ChiliRecipe #BBQRecipes #FoodReels",
    "description":  "This chili is loaded with layers of smoky, beefy flavor. The meat cooks right over the chili, letting all those juices and",
    "likes":  71,
    "intro":  [
                  "This chili is loaded with layers of smoky, beefy flavor. The meat cooks right over the chili, letting all those juices and rendered fat drip down into the vegetables before everything comes together into one rich, hearty bowl. Seasoned with @blazingstarbbq All in One and Beef Seasoning, then smoked low and slow for that extra layer of flavor."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 2 lbs sweet Italian sausage",
                                               "* 3 lbs ground beef",
                                               "* 1/4 lb bacon, chopped",
                                               "* 1 green bell pepper, diced",
                                               "* 1 red bell pepper, diced",
                                               "* 1 orange bell pepper, diced"
                                           ]
                             }
                         ],
    "steps":  [
                  "* 1 yellow onion, diced",
                  "* 6 cloves garlic, minced",
                  "* 12 oz diced tomatoes",
                  "* 25.4 oz tomato sauce",
                  "* 1 tbsp cumin",
                  "* 1 tbsp cayenne pepper",
                  "* 1 tbsp black pepper",
                  "* 2 tbsp chili powder",
                  "* 1 cup beef broth",
                  "* @blazingstarbbq All in One \u0026 Beef Seasoning",
                  "Sauté the bacon, peppers, onions, and garlic. Remove and set aside.",
                  "Season the ground beef and sausage with @blazingstarbbq All in One and Beef Seasoning.",
                  "Add the sautéed vegetables to a large pot or pan.",
                  "Place a wire rack over the pot and arrange the ground beef and sausage on top.",
                  "Smoke uncovered at 275°F over indirect heat for about 2 hours, or until the meat reaches 150°F.",
                  "Break the ground beef into small crumbles and slice the sausage into 1-inch pieces. Add both to the chili along with the bacon.",
                  "Add beef broth, tomato sauce, diced tomatoes, cumin, cayenne, black pepper, and chili powder. Mix well and adjust seasoning.",
                  "Continue cooking for another 2 hours, or until the chili thickens. No need to add additional wood at this point.",
                  "Skim off any excess fat and serve with diced onions, shredded cheese, and green onions."
              ]
},
{
    "id":  "lomo-saltado",
    "title":  "Lomo Saltado",
    "date":  "2026-07-28",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/lomo-saltado.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lomo Saltado 🇵🇪🔥\n\nOne of Peru’s most iconic dishes, Lomo Saltado brings together tender steak, crisp vegetables, and bold, savory flavors in one incredible stir-fry. Cooked over high heat, every bite is smoky, juicy, and packed with umami.\n\nServe it the traditional way with crispy French fries and steamed rice for the ultimate comfort meal.\n\nIngredients\n\nSteak\n\n* 2 lbs ribeye steaks or flap meat\n* Garlic powder\n* Ground cumin\n* Salt \u0026 pepper to taste (or season with @blazingstarbbq All in One)\n\nSaltado\n\n* Olive oil\n* 2 cloves garlic, minced\n* 1 medium red onion, sliced lengthwise\n* 2 tomatoes, sliced\n* 3 stalks green onions, cut into 2-inch pieces\n* 1 ají amarillo (or red bell pepper), sliced\n* 5–6 stems cilantro, chopped\n* 1 tbsp soy sauce\n* 1 tbsp Maggi seasoning\n* Salt \u0026 pepper to taste\n* French fries\n\nMethod\n\n1. Season the steaks with @blazingstarbbq All in One or your favorite steak seasoning.\n2. Grill or sear the steaks to your preferred doneness, about 5–6 minutes per side. Rest, then slice into strips.\n3. Heat a wok or large skillet over high heat. Add olive oil, then cook the onions, ají amarillo, tomatoes, and green onions until slightly softened but still crisp.\n4. Add the steak back to the wok along with the garlic, cilantro, soy sauce, and Maggi seasoning. Toss everything together for about 1 minute.\n5. Season with salt and pepper to taste.\n6. Serve immediately with crispy French fries and steamed rice.\n\n🔥 @kamadojoe Big Joe III \u0026 Carbon Steel Wok\n🪵 @thegoodcharcoal Lump Charcoal\n\n#LomoSaltado #PeruvianFood #SteakRecipes #WokCooking #FoodReels",
    "description":  "One of Peru’s most iconic dishes, Lomo Saltado brings together tender steak, crisp vegetables, and bold, savory flavors in one",
    "likes":  99,
    "intro":  [
                  "One of Peru’s most iconic dishes, Lomo Saltado brings together tender steak, crisp vegetables, and bold, savory flavors in one incredible stir-fry. Cooked over high heat, every bite is smoky, juicy, and packed with umami. Serve it the traditional way with crispy French fries and steamed rice for the ultimate comfort meal."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Steak",
                                               "* 2 lbs ribeye steaks or flap meat",
                                               "* Garlic powder",
                                               "* Ground cumin"
                                           ]
                             }
                         ],
    "steps":  [
                  "Saltado",
                  "* Olive oil",
                  "* 2 cloves garlic, minced",
                  "* 1 medium red onion, sliced lengthwise",
                  "* 2 tomatoes, sliced",
                  "* 3 stalks green onions, cut into 2-inch pieces",
                  "* 1 ají amarillo (or red bell pepper), sliced",
                  "* 5–6 stems cilantro, chopped",
                  "* 1 tbsp soy sauce",
                  "* 1 tbsp Maggi seasoning",
                  "* Salt \u0026 pepper to taste",
                  "* French fries",
                  "Season the steaks with @blazingstarbbq All in One or your favorite steak seasoning.",
                  "Grill or sear the steaks to your preferred doneness, about 5–6 minutes per side. Rest, then slice into strips.",
                  "Heat a wok or large skillet over high heat. Add olive oil, then cook the onions, ají amarillo, tomatoes, and green onions until slightly softened but still crisp.",
                  "Add the steak back to the wok along with the garlic, cilantro, soy sauce, and Maggi seasoning. Toss everything together for about 1 minute.",
                  "Season with salt and pepper to taste.",
                  "Serve immediately with crispy French fries and steamed rice."
              ]
},
{
    "id":  "pancit-canton",
    "title":  "Pancit Canton",
    "date":  "2026-07-21",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/pancit-canton.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pancit Canton 🇵🇭🔥\n\nThere’s a reason pancit is a staple at Filipino gatherings. Packed with savory flavors, tender noodles, and plenty of protein, this Pancit Canton is the perfect one-wok meal for feeding family and friends.\n\nPork, shrimp, Chinese sausage, and crisp vegetables are stir-fried over high heat, then tossed with egg noodles for a dish that’s smoky, satisfying, and full of flavor.\n\nIngredients\n\n* 1 packet flour stick noodles (blanched with soy sauce \u0026 salt)\n* 1 lb pork, thinly sliced\n* 2 Chinese sausages, sliced\n* 1 small onion, sliced\n* 6 garlic cloves, minced\n* 8–10 shrimp, peeled\n* 10–12 snap peas\n* 1–2 carrots, julienned\n* 1 small cabbage, chopped\n* 1 tbsp oyster sauce\n* 3 tbsp low-sodium soy sauce\n* Salt \u0026 pepper to taste\n\nMethod\n\n1. Blanch noodles in boiling water with soy sauce and salt. Drain and set aside.\n2. Season and sear the pork for 1–2 minutes per side. Remove from the wok.\n3. Cook the Chinese sausage and shrimp for about 1 minute per side. Set aside.\n4. Sauté the onions and garlic until fragrant.\n5. Add the snap peas, carrots, and cabbage. Stir-fry for about 2 minutes.\n6. Stir in the soy sauce and oyster sauce.\n7. Add the noodles, pork, Chinese sausage, and shrimp. Toss everything together until well combined.\n8. Season to taste and serve hot.\n\n🔥 @kamadojoe Big Joe III \u0026 Carbon Steel Wok\n🪵 @thegoodcharcoal Lump Charcoal\n\n#PancitCanton #FilipinoFood #WokCooking #EasyRecipes #FoodReels",
    "description":  "There’s a reason pancit is a staple at Filipino gatherings. Packed with savory flavors, tender noodles, and plenty of protein,",
    "likes":  97,
    "intro":  [
                  "There’s a reason pancit is a staple at Filipino gatherings. Packed with savory flavors, tender noodles, and plenty of protein, this Pancit Canton is the perfect one-wok meal for feeding family and friends. Pork, shrimp, Chinese sausage, and crisp vegetables are stir-fried over high heat, then tossed with egg noodles for a dish that’s smoky, satisfying, and full of flavor."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 packet flour stick noodles (blanched with soy sauce \u0026 salt)",
                                               "* 1 lb pork, thinly sliced",
                                               "* 2 Chinese sausages, sliced",
                                               "* 1 small onion, sliced",
                                               "* 6 garlic cloves, minced",
                                               "* 8–10 shrimp, peeled",
                                               "* 10–12 snap peas",
                                               "* 1–2 carrots, julienned"
                                           ]
                             }
                         ],
    "steps":  [
                  "* 1 small cabbage, chopped",
                  "* 1 tbsp oyster sauce",
                  "* 3 tbsp low-sodium soy sauce",
                  "* Salt \u0026 pepper to taste",
                  "Blanch noodles in boiling water with soy sauce and salt. Drain and set aside.",
                  "Season and sear the pork for 1–2 minutes per side. Remove from the wok.",
                  "Cook the Chinese sausage and shrimp for about 1 minute per side. Set aside.",
                  "Sauté the onions and garlic until fragrant.",
                  "Add the snap peas, carrots, and cabbage. Stir-fry for about 2 minutes.",
                  "Stir in the soy sauce and oyster sauce.",
                  "Add the noodles, pork, Chinese sausage, and shrimp. Toss everything together until well combined.",
                  "Season to taste and serve hot."
              ]
},
{
    "id":  "iberico-secreto-steaks-with-chimichurri",
    "title":  "Iberico Secreto Steaks with Chimichurri",
    "date":  "2026-06-10",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/iberico-secreto-steaks-with-chimichurri.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Secreto Steaks with Chimichurri 🥩🌿🔥\n\nSeasoned with @blazingstarbbq All in One and grilled over medium heat until perfectly caramelized. To finish, I grilled lemon slices and squeezed them over the sliced steak for a bright citrus kick that pairs perfectly with the richness of the pork.\n\nFinished with a fresh chimichurri loaded with herbs, garlic, and just enough heat to keep you coming back for another bite.\n\nChimichurri Ingredients\n\n* 1 cup parsley\n* 1 cup cilantro\n* 1 roasted red bell pepper, diced\n* 6 garlic cloves, chopped\n* 1 shallot, chopped\n* 1 cup extra virgin olive oil\n* ¼ cup red wine vinegar\n* 1 lemon, juiced\n* 1 tsp smoked paprika\n* 1 tsp chipotle powder\n* 1 tsp chili flakes\n* Salt \u0026 pepper to taste\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n\n#IbericoPork #SecretoSteak #Chimichurri #LiveFireCooking #bbq",
    "description":  "Seasoned with @blazingstarbbq All in One and grilled over medium heat until perfectly caramelized. To finish, I grilled lemon",
    "likes":  73,
    "intro":  [
                  "Seasoned with @blazingstarbbq All in One and grilled over medium heat until perfectly caramelized. To finish, I grilled lemon slices and squeezed them over the sliced steak for a bright citrus kick that pairs perfectly with the richness of the pork. Finished with a fresh chimichurri loaded with herbs, garlic, and just enough heat to keep you coming back for another bite. Chimichurri Ingredients * 1 cup parsley * 1 cup cilantro * 1 roasted red bell pepper, diced * 6 garlic cloves, chopped * 1 shallot, chopped * 1 cup extra virgin olive oil * ¼ cup red wine vinegar * 1 lemon, juiced"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 tsp chipotle powder",
                                               "* 1 tsp chili flakes"
                                           ]
                             }
                         ],
    "steps":  [
                  "* Salt \u0026 pepper to taste"
              ]
},
{
    "id":  "smoked-ribs",
    "title":  "Smoked Ribs",
    "date":  "2026-05-28",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Ribs 🔥🍯\n\nThese ribs came out sticky, smoky, and packed with flavor. Seasoned with @tfti.bbq Cajun Honey Rub for that perfect balance of savory heat and sweetness, then smoked over oak on the @kamadojoe Konnected Big Joe at 275°F until the bark set just right.\n\nWrapped in foil with butter, @zabs hot honey, brown sugar, and extra seasoning to braise and tenderize before going back on the grill to finish.\n\n1. Season ribs generously with Cajun Honey Rub.\n2. Smoke over oak at 275°F for 2.5 hours.\n3. Wrap in foil with butter, hot honey, brown sugar, and more seasoning.\n4. Continue cooking for another 1.5 hours until tender.\n\n🔥 @kamadojoe Konnected Big Joe\n🪵 @thegoodcharcoal Lump Charcoal\n\n#SmokedRibs #BBQRibs #HotHoney #LiveFireCooking #ribs",
    "description":  "These ribs came out sticky, smoky, and packed with flavor. Seasoned with @tfti.bbq Cajun Honey Rub for that perfect balance of",
    "likes":  210,
    "intro":  [
                  "These ribs came out sticky, smoky, and packed with flavor. Seasoned with @tfti.bbq Cajun Honey Rub for that perfect balance of savory heat and sweetness, then smoked over oak on the @kamadojoe Konnected Big Joe at 275°F until the bark set just right. Wrapped in foil with butter, @zabs hot honey, brown sugar, and extra seasoning to braise and tenderize before going back on the grill to finish."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Smoke over oak at 275°F for 2.5 hours.",
                  "Wrap in foil with butter, hot honey, brown sugar, and more seasoning.",
                  "Continue cooking for another 1.5 hours until tender."
              ]
},
{
    "id":  "simple-smash-burger",
    "title":  "Simple Smash Burger",
    "date":  "2026-05-26",
    "category":  "Other",
    "image":  "images/recipes/simple-smash-burger.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Simple Smash Burger 🍔🔥\n\nCrispy edges, melty cheese, and all the classic burger flavors done right. Two juicy patties seasoned with @blazingstarbbq Beef Rub smashed over high heat, stacked on a buttery brioche bun with American cheese, grilled onions, crisp lettuce, tomatoes, and my black truffle burger sauce.\n\nSimple ingredients, big flavor, and the kind of burger you’ll want to make on repeat.\n\nBlack Truffle Sauce\n* 1/4 cup @melindasfoods Black Truffle Hot Sauce\n* 1/4 cup ketchup\n* 1/2 cup mayo\n* 1 tbsp garlic powder\n* 1 tbsp onion powder\n* 2 tbsp relish\n\n🔥 @nomadgrills Portable Grill and Griddle\n🪵 @thegoodcharcoal Lump Charcoal\n\n#SmashBurger #BurgerNight #GriddleCooking #BurgerLovers #burgers",
    "description":  "Crispy edges, melty cheese, and all the classic burger flavors done right. Two juicy patties seasoned with @blazingstarbbq Beef",
    "likes":  139,
    "intro":  [
                  "Crispy edges, melty cheese, and all the classic burger flavors done right. Two juicy patties seasoned with @blazingstarbbq Beef Rub smashed over high heat, stacked on a buttery brioche bun with American cheese, grilled onions, crisp lettuce, tomatoes, and my black truffle burger sauce. Simple ingredients, big flavor, and the kind of burger you’ll want to make on repeat. Black Truffle Sauce"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1/4 cup ketchup",
                                               "* 1/2 cup mayo",
                                               "* 1 tbsp garlic powder",
                                               "* 1 tbsp onion powder",
                                               "* 2 tbsp relish"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "vietnamese-shaking-beef-b-l-c-l-c",
    "title":  "Vietnamese Shaking Beef (Bò Lúc Lắc)",
    "date":  "2026-05-14",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/vietnamese-shaking-beef-b-l-c-l-c.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Vietnamese Shaking Beef (Bò Lúc Lắc) 🔥🇻🇳\n\nTender ribeye seared over high heat for that signature smoky wok flavor. This Vietnamese classic is bold, savory, slightly sweet, and packed with umami in every bite.\n\nThe beef gets marinated with garlic, oyster sauce, fish sauce, and sesame oil, then quickly cooked hot and fast until perfectly caramelized on the outside while staying juicy in the center.\n\nServe it over rice with fresh veggies and you’ve got a meal that never misses.\n\nIngredients\n\n* 2 lbs ribeye steak, cut into 1-inch cubes\n* 2 tbsp minced garlic\n* 1.5 tbsp sugar\n* 2 tbsp oyster sauce\n* 1 tbsp fish sauce\n* 1 tbsp sesame oil\n* 1 tsp soy sauce\n\nMethod\n\n1. Combine all ingredients and marinate the beef for at least 1 hour.\n2. Heat a wok over high heat until smoking hot.\n3. Sear beef in batches until browned and caramelized on all sides.\n4. Serve immediately with rice and fresh vegetables.\n\n🔥 @kamadojoe Joe Jr. \u0026 Wok\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Boards\n\n#ShakingBeef #BoLucLac #VietnameseFood #WokCooking #homecooking",
    "description":  "Tender ribeye seared over high heat for that signature smoky wok flavor. This Vietnamese classic is bold, savory, slightly",
    "likes":  156,
    "intro":  [
                  "Tender ribeye seared over high heat for that signature smoky wok flavor. This Vietnamese classic is bold, savory, slightly sweet, and packed with umami in every bite. The beef gets marinated with garlic, oyster sauce, fish sauce, and sesame oil, then quickly cooked hot and fast until perfectly caramelized on the outside while staying juicy in the center. Serve it over rice with fresh veggies and you’ve got a meal that never misses."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 2 lbs ribeye steak, cut into 1-inch cubes",
                                               "* 2 tbsp minced garlic",
                                               "* 1.5 tbsp sugar",
                                               "* 2 tbsp oyster sauce",
                                               "* 1 tbsp fish sauce",
                                               "* 1 tbsp sesame oil",
                                               "* 1 tsp soy sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate the beef for at least 1 hour.",
                  "Heat a wok over high heat until smoking hot.",
                  "Sear beef in batches until browned and caramelized on all sides.",
                  "Serve immediately with rice and fresh vegetables."
              ]
},
{
    "id":  "filipino-bbq-chicken",
    "title":  "Filipino BBQ Chicken",
    "date":  "2026-04-26",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-bbq-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino BBQ Chicken 🇵🇭🔥\n\nEvery family has their own way of making Filipino BBQ, but we can all agree it always hits. Smoky, sweet, savory, and seriously delicious. Marinated chicken grilled over charcoal with that signature Filipino BBQ flavor and caramelized char you can’t stop picking at.\n\nThe banana ketchup, citrus, soy, and Sprite marinade gives it that classic sweet savory tang. Let it marinate overnight and the flavor gets even better.\n\nIngredients:\n\n* 4–5 lbs chicken legs or thighs\n* 1/2 cup soy sauce\n* 1/2 cup oyster sauce\n* 1/2 cup banana ketchup (or ketchup + 1/4 cup sugar)\n* 1 cup Sprite or 7 Up\n* 1 lemon or 6 calamansi, juiced\n* 4 garlic cloves, smashed\n* 2 stalks green onions, chopped\n* 1 tsp black pepper\n* Salt to taste \n\n1. Combine all ingredients and marinate chicken overnight.\n2. Grill over medium-high heat over charcoal.\n3. Grill until cooked through, basting with extra marinade throughout the cook if desired.\n4. Serve hot with steamed rice.\n\n#FilipinoBBQ #GrilledChicken #FilipinoFood #BBQChicken #PinoyFood",
    "description":  "Every family has their own way of making Filipino BBQ, but we can all agree it always hits. Smoky, sweet, savory, and seriously",
    "likes":  164,
    "intro":  [
                  "Every family has their own way of making Filipino BBQ, but we can all agree it always hits. Smoky, sweet, savory, and seriously delicious. Marinated chicken grilled over charcoal with that signature Filipino BBQ flavor and caramelized char you can’t stop picking at. The banana ketchup, citrus, soy, and Sprite marinade gives it that classic sweet savory tang. Let it marinate overnight and the flavor gets even better."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 4–5 lbs chicken legs or thighs",
                                               "* 1/2 cup soy sauce",
                                               "* 1/2 cup oyster sauce",
                                               "* 1/2 cup banana ketchup (or ketchup + 1/4 cup sugar)",
                                               "* 1 cup Sprite or 7 Up",
                                               "* 1 lemon or 6 calamansi, juiced",
                                               "* 4 garlic cloves, smashed",
                                               "* 2 stalks green onions, chopped",
                                               "* 1 tsp black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate chicken overnight.",
                  "Grill over medium-high heat over charcoal.",
                  "Grill until cooked through, basting with extra marinade throughout the cook if desired.",
                  "Serve hot with steamed rice."
              ]
},
{
    "id":  "peruvian-bbq-chicken-pollo-a-la-brasa",
    "title":  "Peruvian BBQ Chicken (Pollo a la Brasa)",
    "date":  "2026-04-13",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/peruvian-bbq-chicken-pollo-a-la-brasa.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Peruvian BBQ Chicken (Pollo a la Brasa) 🇵🇪🔥\n\nBold, smoky, and packed with flavor — this Pollo a la Brasa might be one of the best chickens you’ll throw on the grill. Crispy skin, juicy meat, and that signature charcoal flavor that hits every time.\n\nMarinated overnight in a rich blend of ají panca, garlic, spices, soy, and beer, then grilled low and steady until perfectly cooked through.\n\nThis is the kind of chicken that keeps you coming back for more.\n\nIngredients\n•\t1 whole chicken\n•\t½ cup ground ají panca chili pepper\n•\t1 head garlic, minced\n•\t1 tbsp ground cumin\n•\t1 tbsp sugar\n•\t2 tsp smoked paprika\n•\t2 tsp dried oregano\n•\t½ cup soy sauce\n•\t½ cup vegetable oil\n•\t1 lime, juiced\n•\t1 cup beer\n\nInstructions\n1.\tCombine all marinade ingredients and coat the chicken well. Marinate overnight.\n2.\tGrill over charcoal and your favorite wood at 300°F until the breast reaches 155°F.\n\n🔥 @kamadojoe Big Joe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n\n#PolloALaBrasa #PeruvianChicken #CharcoalGrill #livefirecooking #rotisserie",
    "description":  "Bold, smoky, and packed with flavor — this Pollo a la Brasa might be one of the best chickens you’ll throw on the grill. Crispy",
    "likes":  156,
    "intro":  [
                  "Bold, smoky, and packed with flavor — this Pollo a la Brasa might be one of the best chickens you’ll throw on the grill. Crispy skin, juicy meat, and that signature charcoal flavor that hits every time. Marinated overnight in a rich blend of ají panca, garlic, spices, soy, and beer, then grilled low and steady until perfectly cooked through. This is the kind of chicken that keeps you coming back for more."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "•\t1 whole chicken",
                                               "cup ground ají panca chili pepper",
                                               "1 head garlic, minced",
                                               "1 tbsp ground cumin",
                                               "1 tbsp sugar",
                                               "2 tsp smoked paprika",
                                               "2 tsp dried oregano",
                                               "cup soy sauce",
                                               "cup vegetable oil",
                                               "•\t1 lime, juiced",
                                               "1 cup beer"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all marinade ingredients and coat the chicken well. Marinate overnight.",
                  "Grill over charcoal and your favorite wood at 300°F until the breast reaches 155°F."
              ]
},
{
    "id":  "asian-style-grilled-pork-chops",
    "title":  "Asian-Style Grilled Pork Chops",
    "date":  "2026-04-01",
    "category":  "Pork",
    "image":  "images/recipes/asian-style-grilled-pork-chops.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Asian-Style Grilled Pork Chops 🐷🔥\n\nSavory, slightly sweet, and packed with umami. These pork chops soak up a bold marinade with garlic, ginger, and soy, then hit the grill for a perfect char over open flame.\n\nJuicy on the inside with that caramelized crust on the outside… this is one of those easy go-to recipes that always delivers.\n\nIngredients\n\t•\t2 lbs pork chops\n\t•\t3 stalks green onions, chopped\n\t•\t4 cloves garlic, finely chopped\n\t•\t2 tbsp fresh ginger, finely chopped\n\t•\t2 tbsp brown sugar\n\t•\t2 tsp pepper\n\t•\t2 tsp chicken bouillon powder\n\t•\t1 tbsp oyster sauce\n\t•\t1 tbsp fish sauce\n\t•\t1 tbsp light soy sauce\n\t•\t1 tbsp water\n\t•\t1 tbsp cooking oil\n\nMethod\n1.\tCombine all ingredients and mix well.\n2.\tMarinate for 4–6 hours (overnight preferred).\n3.\tGrill over direct heat until internal temp reaches 140°F.\n\n#GrilledPorkChops #AsianFlavors #BBQRecipes #LiveFireCooking #grillmadness",
    "description":  "Savory, slightly sweet, and packed with umami. These pork chops soak up a bold marinade with garlic, ginger, and soy, then hit",
    "likes":  83,
    "intro":  [
                  "Savory, slightly sweet, and packed with umami. These pork chops soak up a bold marinade with garlic, ginger, and soy, then hit the grill for a perfect char over open flame. Juicy on the inside with that caramelized crust on the outside… this is one of those easy go-to recipes that always delivers."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs pork chops",
                                               "3 stalks green onions, chopped",
                                               "4 cloves garlic, finely chopped",
                                               "2 tbsp fresh ginger, finely chopped",
                                               "2 tbsp brown sugar",
                                               "2 tsp pepper",
                                               "2 tsp chicken bouillon powder",
                                               "1 tbsp oyster sauce",
                                               "1 tbsp fish sauce",
                                               "1 tbsp light soy sauce",
                                               "1 tbsp water",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and mix well.",
                  "Marinate for 4–6 hours (overnight preferred).",
                  "Grill over direct heat until internal temp reaches 140°F."
              ]
},
{
    "id":  "tri-tip-queso-dip",
    "title":  "Tri-Tip Queso Dip",
    "date":  "2026-03-25",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/tri-tip-queso-dip.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Tri-Tip Queso Dip 🧀🔥\n\nMelty, cheesy, and loaded with smoky tri-tip! This queso dip is built for game day, cookouts, or anytime you need a crowd-pleaser.\n\nCreamy Velveeta, pepper jack, and cream cheese melted down with Rotel and jalapeños, then finished with smoky tri-tip for that extra punch of flavor. Served up with @smashkitchen tortilla chips for the perfect scoop every time.\n\nDon’t be surprised if this disappears fast.\n\nIngredients\n\t•\t2 jalapeños, diced\n\t•\t32 oz Velveeta cheese, cubed\n\t•\t8 oz pepper jack cheese, cut into chunks\n\t•\t1 block cream cheese, quartered\n\t•\t1 can Rotel tomatoes \u0026 chili\n\t•\t16 oz heavy cream\n\t•\tFavorite protein (ground beef, brisket, or tri-tip)\n\n#QuesoDip #TriTip #GameDayEats #CheeseLovers #GrillMadness",
    "description":  "Melty, cheesy, and loaded with smoky tri-tip! This queso dip is built for game day, cookouts, or anytime you need a",
    "likes":  143,
    "intro":  [
                  "Melty, cheesy, and loaded with smoky tri-tip! This queso dip is built for game day, cookouts, or anytime you need a crowd-pleaser. Creamy Velveeta, pepper jack, and cream cheese melted down with Rotel and jalapeños, then finished with smoky tri-tip for that extra punch of flavor. Served up with @smashkitchen tortilla chips for the perfect scoop every time. Don’t be surprised if this disappears fast."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "•\t2 jalapeños, diced",
                                               "32 oz Velveeta cheese, cubed",
                                               "8 oz pepper jack cheese, cut into chunks",
                                               "•\t1 block cream cheese, quartered",
                                               "1 can Rotel tomatoes \u0026 chili",
                                               "16 oz heavy cream"
                                           ]
                             }
                         ],
    "steps":  [
                  "Favorite protein (ground beef, brisket, or tri-tip)"
              ]
},
{
    "id":  "tomahawk-steak",
    "title":  "Tomahawk Steak",
    "date":  "2026-03-03",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/tomahawk-steak.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Tomahawk Steak 🥩🔥\n\nLast week on Next Level Chef I cooked a ribeye with chimichurri and compound butter, so I had to run it back at home and take it up a notch with this tomahawk.\n\nSeasoned with @reservablends Carne Asada seasoning, then reverse-seared on the @kamadojoe Big Joe Konnected Joe at 275°F over @thegoodcharcoal Lump Charcoal until it hit 125°F internal on the @meatermade MEATER Pro.\n\nFinished with a blazing hot sear to lock in that crust and topped with melting chimichurri butter. Served alongside a bold Asian-style chimichurri packed with garlic, citrus, herbs, and heat.\n\nSame flavor profile. Bigger cut. Even more drama.\n\nIngredients\n\t•\t1 tomahawk steak\n\t•\tFavorite seasoning\n\nChimichurri Butter\n\t•\t1 stick butter\n\t•\tChimichurri seasoning\n\t•\t½ tbsp red wine vinegar\n\t•\tSalt \u0026 pepper\n\nAsian-Style Chimichurri\n\t•\t1 cup parsley\n\t•\t1 cup cilantro\n\t•\t6 garlic cloves\n\t•\t1 shallot\n\t•\t1 cup olive oil\n\t•\t¼ cup red wine vinegar\n\t•\t1 tbsp fish sauce\n\t•\t1 lemon, juiced\n\t•\t1 tbsp chili flakes\n\t•\tSalt \u0026 pepper to taste\n\n#TomahawkSteak #NextLevelChef #ReverseSear #Chimichurri #openfire",
    "description":  "Last week on Next Level Chef I cooked a ribeye with chimichurri and compound butter, so I had to run it back at home and take it",
    "likes":  190,
    "intro":  [
                  "Last week on Next Level Chef I cooked a ribeye with chimichurri and compound butter, so I had to run it back at home and take it up a notch with this tomahawk. Seasoned with @reservablends Carne Asada seasoning, then reverse-seared on the @kamadojoe Big Joe Konnected Joe at 275°F over @thegoodcharcoal Lump Charcoal until it hit 125°F internal on the @meatermade MEATER Pro. Finished with a blazing hot sear to lock in that crust and topped with melting chimichurri butter. Served alongside a bold Asian-style chimichurri packed with garlic, citrus, herbs, and heat. Same flavor profile. Bigger cut. Even more drama."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "1 stick butter",
                  "Chimichurri seasoning",
                  "tbsp red wine vinegar",
                  "Salt \u0026 pepper",
                  "Asian-Style Chimichurri",
                  "1 cup parsley",
                  "1 cup cilantro",
                  "6 garlic cloves",
                  "1 shallot",
                  "1 cup olive oil",
                  "cup red wine vinegar",
                  "1 tbsp fish sauce",
                  "1 lemon, juiced",
                  "1 tbsp chili flakes",
                  "Salt \u0026 pepper to taste"
              ]
},
{
    "id":  "queso-birria-tacos",
    "title":  "Queso Birria Tacos",
    "date":  "2026-02-16",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/queso-birria-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Queso Birria Tacos 🌮🔥\n\nCrispy on the outside, juicy and cheesy on the inside. These queso birria tacos are loaded with slow-braised chuck roast that’s tender enough to fall apart with a fork.\n\nSeasoned heavy, seared for that deep crust, then braised low and slow with a birria bomb until rich and flavorful. Stuffed into corn tortillas with melted queso, shredded beef, fresh onions, cilantro, creamy avocado, and finished with queso fresco.\n\nDip it in that consommé and tell me that’s not elite taco status.\n\nIngredients\n\t•\t3–4 lbs chuck roast\n\t•\tFavorite seasoning\n\t•\t1 birria bomb\n\t•\t4 cups water\n\t•\tOnions\n\t•\tCilantro\n\t•\tAvocados\n\t•\tQueso fresco\n\t•\tCorn tortillas\n\nInstructions\n\t1.\tSeason meat on all sides and sear over medium-high heat.\n\t2.\tTransfer to a pot and add water and birria bomb.\n\t3.\tCook at 325°F for 3–4 hours until fork tender, adding water if needed.\n\t4.\tAssemble tacos with melted queso, shredded beef, onions, cilantro, and avocado slices.\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n\n#BirriaTacos #QuesoBirria #TacoNight #LiveFireCooking #birria",
    "description":  "Crispy on the outside, juicy and cheesy on the inside. These queso birria tacos are loaded with slow-braised chuck roast that’s",
    "likes":  112,
    "intro":  [
                  "Crispy on the outside, juicy and cheesy on the inside. These queso birria tacos are loaded with slow-braised chuck roast that’s tender enough to fall apart with a fork. Seasoned heavy, seared for that deep crust, then braised low and slow with a birria bomb until rich and flavorful. Stuffed into corn tortillas with melted queso, shredded beef, fresh onions, cilantro, creamy avocado, and finished with queso fresco. Dip it in that consommé and tell me that’s not elite taco status."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3–4 lbs chuck roast",
                                               "•\tFavorite seasoning",
                                               "•\t1 birria bomb",
                                               "4 cups water",
                                               "•\tOnions",
                                               "•\tCilantro",
                                               "•\tAvocados"
                                           ]
                             }
                         ],
    "steps":  [
                  "Queso fresco",
                  "Corn tortillas",
                  "Season meat on all sides and sear over medium-high heat.",
                  "Transfer to a pot and add water and birria bomb.",
                  "Cook at 325°F for 3–4 hours until fork tender, adding water if needed.",
                  "Assemble tacos with melted queso, shredded beef, onions, cilantro, and avocado slices."
              ]
},
{
    "id":  "hot-honey-filipino-adobo-wings",
    "title":  "Hot Honey Filipino Adobo Wings",
    "date":  "2026-02-04",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/hot-honey-filipino-adobo-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Hot Honey Filipino Adobo Wings 🔥🍯\n\nSweet heat meets classic adobo flavors in these grilled wings. Garlic, soy sauce, cane vinegar, and bay leaf come together with hot honey for a sticky glaze that’s bold, balanced, and seriously crave-worthy.\n\nEasy to make, big on flavor, and perfect for game day or the backyard grill.\n\nIngredients\n3–4 lbs chicken wings\nOlive oil\nFavorite seasoning\n\nFilipino Adobo Glaze\n6 cloves garlic, minced\n4 tbsp hot honey (or regular honey)\n4 tbsp low-sodium soy sauce\n2 tbsp cane vinegar\n1/2 tsp black pepper\n1 bay leaf\n\n1. Lightly coat wings with olive oil and season generously.\n2. Grill wings over indirect heat at 375°F for about 1 hour, until cooked through and lightly crisped.\n3. While wings cook, combine all glaze ingredients in a small pot and simmer until slightly thickened.\n4. Toss wings in the adobo glaze and serve immediately.\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n\n#AdoboWings #filipinofood #BBQWings #LiveFireCooking",
    "description":  "Sweet heat meets classic adobo flavors in these grilled wings. Garlic, soy sauce, cane vinegar, and bay leaf come together with",
    "likes":  119,
    "intro":  [
                  "Sweet heat meets classic adobo flavors in these grilled wings. Garlic, soy sauce, cane vinegar, and bay leaf come together with hot honey for a sticky glaze that’s bold, balanced, and seriously crave-worthy. Easy to make, big on flavor, and perfect for game day or the backyard grill."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3–4 lbs chicken wings",
                                               "Olive oil",
                                               "Favorite seasoning",
                                               "Filipino Adobo Glaze"
                                           ]
                             }
                         ],
    "steps":  [
                  "6 cloves garlic, minced",
                  "4 tbsp hot honey (or regular honey)",
                  "4 tbsp low-sodium soy sauce",
                  "2 tbsp cane vinegar",
                  "1/2 tsp black pepper",
                  "1 bay leaf",
                  "Lightly coat wings with olive oil and season generously.",
                  "Grill wings over indirect heat at 375°F for about 1 hour, until cooked through and lightly crisped.",
                  "While wings cook, combine all glaze ingredients in a small pot and simmer until slightly thickened.",
                  "Toss wings in the adobo glaze and serve immediately."
              ]
},
{
    "id":  "pulled-pork-lumpia",
    "title":  "Pulled Pork Lumpia",
    "date":  "2026-01-26",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/pulled-pork-lumpia.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pulled Pork Lumpia 🇵🇭🔥\n\nCrispy, golden, and seriously addictive. These lumpia get a smoky upgrade by swapping in smoked pulled pork for the usual ground meat. That subtle smoke takes them to another level, especially when dipped into your favorite sauce.\n\nPerfect as an appetizer, snack, or honestly… the whole plate.\n\nPulled Pork Ingredients:\n1 pork butt\nMiso paste\nGochujang\n@blazingstarbbq Pork n Rub\n\n1.\tCoat the pork with miso and gochujang on all sides. \n2.\tSeason generously with rub, wrap tightly in plastic wrap, and refrigerate overnight.\n3.\tPreheat grill to 275°F for indirect heat and add wood chunks.\n4.\tSmoke until internal temp reaches ~165°F or a good bark forms.\n5.\tWrap in foil and continue cooking until 203°F or probe tender.\n6.\tRest for 1 hour, then shred.\n\nLumpia Ingredients:\n2 cups pulled pork (or ground beef)\n2 tbsp oil\n4 cloves garlic, chopped\n1 medium onion, chopped\n1 cup carrots, shredded\n1 cup green beans, cubed\n2 cups green cabbage, shredded\n2 cups bean sprouts\n2–3 tbsp soy sauce\n1 tbsp oyster sauce\nSalt and pepper, to taste\n1 (50 ct) pack lumpia wrappers\n2 cups oil, for frying\n\n1.\tHeat oil over medium-high heat and sauté garlic and onions for 1–2 minutes.\n2.\tAdd carrots, green beans, cabbage, and pulled pork. Stir-fry for 3 minutes.\n3.\tAdd soy sauce and oyster sauce.\n4.\tFold in bean sprouts and season with salt and pepper.\n5.\tRemove from heat, strain excess liquid, and cool completely.\n6.\tAdd 1–2 tbsp filling to each wrapper, roll tight, and seal with water or egg wash.\n7.\tFry at 350°F until golden and crispy.\n8.\tServe with sweet chili sauce or spicy vinegar.\n\n#PulledPork #Lumpia #FilipinoFood #fusion",
    "description":  "Crispy, golden, and seriously addictive. These lumpia get a smoky upgrade by swapping in smoked pulled pork for the usual ground",
    "likes":  108,
    "intro":  [
                  "Crispy, golden, and seriously addictive. These lumpia get a smoky upgrade by swapping in smoked pulled pork for the usual ground meat. That subtle smoke takes them to another level, especially when dipped into your favorite sauce. Perfect as an appetizer, snack, or honestly… the whole plate. Pulled Pork Ingredients: 1 pork butt Miso paste Gochujang @blazingstarbbq Pork n Rub"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Season generously with rub, wrap tightly in plastic wrap, and refrigerate overnight.",
                  "Preheat grill to 275°F for indirect heat and add wood chunks.",
                  "Smoke until internal temp reaches ~165°F or a good bark forms.",
                  "Wrap in foil and continue cooking until 203°F or probe tender.",
                  "Rest for 1 hour, then shred.",
                  "2 cups pulled pork (or ground beef)",
                  "2 tbsp oil",
                  "4 cloves garlic, chopped",
                  "1 medium onion, chopped",
                  "1 cup carrots, shredded",
                  "1 cup green beans, cubed",
                  "2 cups green cabbage, shredded",
                  "2 cups bean sprouts",
                  "2–3 tbsp soy sauce",
                  "1 tbsp oyster sauce",
                  "Salt and pepper, to taste",
                  "1 (50 ct) pack lumpia wrappers",
                  "2 cups oil, for frying",
                  "Heat oil over medium-high heat and sauté garlic and onions for 1–2 minutes.",
                  "Add carrots, green beans, cabbage, and pulled pork. Stir-fry for 3 minutes.",
                  "Add soy sauce and oyster sauce.",
                  "Fold in bean sprouts and season with salt and pepper.",
                  "Remove from heat, strain excess liquid, and cool completely.",
                  "Add 1–2 tbsp filling to each wrapper, roll tight, and seal with water or egg wash.",
                  "Fry at 350°F until golden and crispy.",
                  "Serve with sweet chili sauce or spicy vinegar."
              ]
},
{
    "id":  "smoked-tri-tip-stir-fry-noodles",
    "title":  "Smoked Tri-Tip Stir-Fry Noodles",
    "date":  "2026-01-20",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/smoked-tri-tip-stir-fry-noodles.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Tri-Tip Stir-Fry Noodles 🍝🔥\n\nSmoky tri-tip meets wok-fried noodles. The tri-tip is seasoned with @blazingstarbbq Beef Rub, smoked until tender, then finished with a hot sear to build a flavorful crust.\n\nIngredients:\nSmoked tri-tip\n18 oz thick chow mein noodles\n1/2 red onion, sliced\n1 large carrot, julienned\n1/4 cabbage, sliced\n2 stalks green onion\n1 cup bean sprouts\n4 tbsp cooking oil\n\nSauce:\n2 tbsp oyster sauce\n2 tbsp soy sauce\n1 tsp sugar\n1 tsp chicken bouillon powder\n1 tbsp sesame oil\n\n1.\tSmoke tri-tip until internal temp reaches 135°F, then sear over direct heat. Rest 10–15 minutes.\n2.\tCut half the tri-tip into cubes and slice the rest thin.\n3.\tHeat a wok over medium-high, add 2 tbsp oil, and cook red onions until slightly softened.\n4.\tAdd cabbage and carrots; cook 1–2 minutes.\n5.\tAdd remaining veggies and cook another 2–4 minutes.\n6.\tRemove vegetables and set aside.\n7.\tAdd remaining oil and stir-fry noodles.\n8.\tAdd sauce and toss to coat.\n9.\tReturn veggies and tri-tip to the wok and mix well.\n10.\tServe hot, topped with extra tri-tip and green onions.\n\n🔥 @kamadojoe Big Joe Series III\n🪵 @thegoodcharcoal Lump Charcoal\n🧂 @blazingstarbbq Beef Rub \u0026 Seasoning\n\n#StirFryNoodles #SmokedTriTip #AsianFusion #LiveFireCooking #asianfood",
    "description":  "Smoky tri-tip meets wok-fried noodles. The tri-tip is seasoned with @blazingstarbbq Beef Rub, smoked until tender, then finished",
    "likes":  59,
    "intro":  [
                  "Smoky tri-tip meets wok-fried noodles. The tri-tip is seasoned with @blazingstarbbq Beef Rub, smoked until tender, then finished with a hot sear to build a flavorful crust."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Smoked tri-tip",
                                               "18 oz thick chow mein noodles",
                                               "1/2 red onion, sliced",
                                               "1 large carrot, julienned",
                                               "1/4 cabbage, sliced",
                                               "2 stalks green onion",
                                               "1 cup bean sprouts",
                                               "4 tbsp cooking oil"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tbsp oyster sauce",
                                               "2 tbsp soy sauce",
                                               "1 tsp sugar",
                                               "1 tsp chicken bouillon powder",
                                               "1 tbsp sesame oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Smoke tri-tip until internal temp reaches 135°F, then sear over direct heat. Rest 10–15 minutes.",
                  "Cut half the tri-tip into cubes and slice the rest thin.",
                  "Heat a wok over medium-high, add 2 tbsp oil, and cook red onions until slightly softened.",
                  "Add cabbage and carrots; cook 1–2 minutes.",
                  "Add remaining veggies and cook another 2–4 minutes.",
                  "Remove vegetables and set aside.",
                  "Add remaining oil and stir-fry noodles.",
                  "Add sauce and toss to coat.",
                  "Return veggies and tri-tip to the wok and mix well.",
                  "Serve hot, topped with extra tri-tip and green onions."
              ]
},
{
    "id":  "spinach-corned-beef-palusami",
    "title":  "Spinach \u0026 Corned Beef Palusami",
    "date":  "2026-01-06",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/spinach-corned-beef-palusami.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Spinach \u0026 Corned Beef Palusami 🤙🏽🔥\n\nA true island comfort classic. Traditionally made with taro leaves, Palusami is rich, creamy, and deeply satisfying. Today, I’m swapping in spinach for a similar texture and flavor — a perfect alternative when taro leaves are hard to find.\n\nTo stay true to tradition, I’m adding a light touch of smoke, mimicking the flavor you’d get from cooking in an imu. That subtle smokiness with the coconut cream and corned beef is next level.\n\nIngredients\n\t•\t2 (15 oz) cans corned beef\n\t•\t1 large sweet onion, diced\n\t•\t2 bags taro leaves or 1 (10 oz) bag spinach\n\t•\t1 (15 oz) can coconut cream\n\nMethod\n\t1.\tPreheat grill to 300°F, adding Kiawe wood for smoke.\n\t2.\tIn a 9x13 casserole dish, layer half the spinach, corned beef, diced onion, and half the coconut cream.\n\t3.\tAdd remaining spinach and top with the rest of the coconut cream.\n\t4.\tSmoke uncovered for 30–45 minutes.\n\t5.\tCover with foil and continue cooking for 1–2 hours until tender and creamy.\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n\n#Palusami #IslandComfortFood #PolynesianEats #LiveFireCooking #kamadojoe",
    "description":  "A true island comfort classic. Traditionally made with taro leaves, Palusami is rich, creamy, and deeply satisfying. Today, I’m",
    "likes":  89,
    "intro":  [
                  "A true island comfort classic. Traditionally made with taro leaves, Palusami is rich, creamy, and deeply satisfying. Today, I’m swapping in spinach for a similar texture and flavor — a perfect alternative when taro leaves are hard to find. To stay true to tradition, I’m adding a light touch of smoke, mimicking the flavor you’d get from cooking in an imu. That subtle smokiness with the coconut cream and corned beef is next level."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 (15 oz) cans corned beef",
                                               "•\t1 large sweet onion, diced",
                                               "2 bags taro leaves or 1 (10 oz) bag spinach",
                                               "1 (15 oz) can coconut cream"
                                           ]
                             }
                         ],
    "steps":  [
                  "Preheat grill to 300°F, adding Kiawe wood for smoke.",
                  "In a 9x13 casserole dish, layer half the spinach, corned beef, diced onion, and half the coconut cream.",
                  "Add remaining spinach and top with the rest of the coconut cream.",
                  "Smoke uncovered for 30–45 minutes.",
                  "Cover with foil and continue cooking for 1–2 hours until tender and creamy."
              ]
},
{
    "id":  "island-style-smoked-pork",
    "title":  "Island-Style Smoked Pork",
    "date":  "2025-12-30",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/island-style-smoked-pork.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Island-Style Smoked Pork 🤙🏽🔥\n\nThick-cut pork shoulder, soaked in a sweet and savory shoyu marinade, then smoked low and slow over Kiawe and Guava wood from the homies at @firewoodhawaii for that true island-style flavor.\n\nOnce smoked, the pork gets sliced and pan-fried with sweet onions for a caramelized finish. Served plate-lunch style with creamy Hawaiian mac salad, steamed rice, and a side of kimchi to balance it all out.\n\nThis is comfort food with serious aloha vibes.\n\nMarinade\n\t•\t3–4 pounds pork shoulder, sliced into ~2-inch-thick strips\n\t•\t1 cup brown sugar\n\t•\t1 cup shoyu or low-sodium soy sauce\n\t•\t6 cloves garlic, minced\n\t•\t2 knobs ginger, sliced and smashed\n\t•\tChili flakes (optional)\n\nPan Fry\n\t•\t1 tbsp oyster sauce\n\t•\t1 sweet onion, sliced\n\nMethod\n\t1.\tMix brown sugar, soy sauce, garlic, and ginger until fully combined.\n\t2.\tAdd pork to the marinade and refrigerate overnight.\n\t3.\tSmoke at 200–225°F.\n\t4.\tCook for about 4 hours, until the internal temp reaches 145°F using the Meater wireless thermometer.\n\t5.\tRemove from smoker, slice, and pan-fry with oyster sauce, then add onions and cook until caramelized.\n\n🧤 @cleanspaceproject Black Nitrile Gloves\n🔥 @kamadojoe Big Joe Series III\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade Meater Pro XL\n\n#HawaiianPlateLunch #SmokedPork #ShoyuPork #LiveFireCooking #kamdojoe",
    "description":  "Thick-cut pork shoulder, soaked in a sweet and savory shoyu marinade, then smoked low and slow over Kiawe and Guava wood from",
    "likes":  54,
    "intro":  [
                  "Thick-cut pork shoulder, soaked in a sweet and savory shoyu marinade, then smoked low and slow over Kiawe and Guava wood from the homies at @firewoodhawaii for that true island-style flavor. Once smoked, the pork gets sliced and pan-fried with sweet onions for a caramelized finish. Served plate-lunch style with creamy Hawaiian mac salad, steamed rice, and a side of kimchi to balance it all out. This is comfort food with serious aloha vibes."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3–4 pounds pork shoulder, sliced into ~2-inch-thick strips",
                                               "1 cup brown sugar",
                                               "1 cup shoyu or low-sodium soy sauce",
                                               "6 cloves garlic, minced",
                                               "•\t2 knobs ginger, sliced and smashed",
                                               "•\tChili flakes (optional)",
                                               "Pan Fry"
                                           ]
                             }
                         ],
    "steps":  [
                  "1 tbsp oyster sauce",
                  "1 sweet onion, sliced",
                  "Mix brown sugar, soy sauce, garlic, and ginger until fully combined.",
                  "Add pork to the marinade and refrigerate overnight.",
                  "Smoke at 200–225°F.",
                  "Cook for about 4 hours, until the internal temp reaches 145°F using the Meater wireless thermometer.",
                  "Remove from smoker, slice, and pan-fry with oyster sauce, then add onions and cook until caramelized."
              ]
},
{
    "id":  "flank-steak-tacos",
    "title":  "Flank Steak Tacos",
    "date":  "2025-11-21",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/flank-steak-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Flank Steak Tacos 🌮 \n\nIngredients:\nIberico Flank Steak\nFavorite seasoning\nLime\n\nAvocado Tomatillo Salsa:\n2 hass avocados \n6 tomatillos \n1/4 cup of cilantro, chopped\n1 Lime, Juiced\n1 Jalapeño pepper, sliced \n1/4 cup onion, chopped\n2 garlic cloves \nSalt to taste \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n#tacos #kamadojoe #bbqrecipes #foodie",
    "description":  "Flank Steak Tacos",
    "likes":  72,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "2 hass avocados",
                  "6 tomatillos",
                  "1/4 cup of cilantro, chopped",
                  "1 Lime, Juiced",
                  "1 Jalapeño pepper, sliced",
                  "1/4 cup onion, chopped",
                  "2 garlic cloves",
                  "Salt to taste"
              ]
},
{
    "id":  "prosciutto-wrapped-salmon-pinwheels",
    "title":  "Prosciutto-Wrapped Salmon Pinwheels",
    "date":  "2025-10-30",
    "category":  "Seafood",
    "image":  "images/recipes/prosciutto-wrapped-salmon-pinwheels.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Prosciutto-Wrapped Salmon Pinwheels 🐟🥓\n\nThese pinwheels came out insanely good! Wrapped in prosciutto, hit with @blazingstarbbq Scorpion Rub for that sweet heat, then finished with a bright citrus-olive dressing. Paired with a Mediterranean side salad…\n\nIngredients:\n• Prosciutto (4 slices per pinwheel)\n• Skinless salmon\n• Parsley, chopped\n• Cilantro, chopped\n• Lemon wedges\n• Castelvetrano olives, sliced\n\nCitrus-Olive Dressing:\n• Castelvetrano olives (12–15, chopped)\n• 1 tbsp Calabrian chili paste\n• 2 tbsp capers (optional)\n• 4 tbsp olive oil\n• 1 shallot, chopped\n• 4 garlic cloves, minced\n• 1 lemon (skinned \u0026 chopped)\n• Juice + zest of 1 lemon\n• Salt \u0026 pepper to taste\n\nGarnish:\n• Parsley\n• Lemon zest\n\nGrilled over lump charcoal at 350°F until the @meatermade probe hits 140°F internal.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade Meater Block\n🧂 @blazingstarbbq Scorpion Rub\n\n#bbqlovers #salmonrecipes #outdoorcooking #grilledsalmon #mediterranean #kamadojoe",
    "description":  "These pinwheels came out insanely good! Wrapped in prosciutto, hit with @blazingstarbbq Scorpion Rub for that sweet heat, then",
    "likes":  64,
    "intro":  [
                  "These pinwheels came out insanely good! Wrapped in prosciutto, hit with @blazingstarbbq Scorpion Rub for that sweet heat, then finished with a bright citrus-olive dressing. Paired with a Mediterranean side salad…"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Prosciutto (4 slices per pinwheel)",
                                               "• Skinless salmon",
                                               "• Parsley, chopped",
                                               "• Cilantro, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lemon wedges",
                  "Castelvetrano olives, sliced",
                  "Castelvetrano olives (12–15, chopped)",
                  "1 tbsp Calabrian chili paste",
                  "2 tbsp capers (optional)",
                  "4 tbsp olive oil",
                  "1 shallot, chopped",
                  "4 garlic cloves, minced",
                  "1 lemon (skinned \u0026 chopped)",
                  "Juice + zest of 1 lemon",
                  "Salt \u0026 pepper to taste",
                  "Parsley",
                  "Lemon zest",
                  "Grilled over lump charcoal at 350°F until the @meatermade probe hits 140°F internal."
              ]
},
{
    "id":  "pancit-canton-w-iberico-steak",
    "title":  "Pancit Canton w/ Iberico Steak",
    "date":  "2025-10-07",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/pancit-canton-w-iberico-steak.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pancit Canton w/ Iberico Steak 🇵🇭🔥\n\nPancit has a hundred variations across the Philippine Islands, but today we are making Pancit Canton. Tender, rich, and insanely flavorful, it takes this dish from traditional to next level.\n\nIberico Pork, shrimp, chinese sausage, crisp-tender veggies, and egg noodles all stir-fried. Let’s go!\n\nIngredients:\n1 packet flour stick noodles (blanched with soy sauce + salt)\n1 lb Iberico Flank Steak, thinly sliced\n2 Chinese sausages, sliced\n1 small onion, sliced\n6 garlic cloves, minced\n8–10 shrimp, shells removed\n10–12 snap peas\n1–2 carrots, julienned\n1 small cabbage, chopped\n1 tbsp oyster sauce\n3 tbsp low sodium soy sauce\nSalt \u0026 pepper to taste\n\n1. Blanch noodles in boiling water with soy sauce \u0026 salt. Set aside.\n2. Season \u0026 sear Iberico flank steak (1–2 min per side). Set aside.\n3. Cook Chinese sausage \u0026 shrimp (1 min per side). Remove.\n4. Sauté onions \u0026 garlic until fragrant.\n5. Add snap peas, carrots, cabbage—stir-fry for 2 min.\n6. Stir in soy sauce \u0026 optional oyster sauce.\n7. Toss in noodles, steak, sausage \u0026 shrimp.\n8. Mix well, season to taste—done!\n\n🔥@kamadojoe Big Joe III \u0026 Carbon Steel Wok\n🪵@thegoodcharcoal Lump Charcoal\n\n#Pancit #filipinofood #HomeCooking #openfirecooking #pinoy #filipino #easyrecipes #Kamadojoe",
    "description":  "Pancit has a hundred variations across the Philippine Islands, but today we are making Pancit Canton. Tender, rich, and insanely",
    "likes":  121,
    "intro":  [
                  "Pancit has a hundred variations across the Philippine Islands, but today we are making Pancit Canton. Tender, rich, and insanely flavorful, it takes this dish from traditional to next level. Iberico Pork, shrimp, chinese sausage, crisp-tender veggies, and egg noodles all stir-fried. Let’s go!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet flour stick noodles (blanched with soy sauce + salt)",
                                               "1 lb Iberico Flank Steak, thinly sliced",
                                               "2 Chinese sausages, sliced",
                                               "1 small onion, sliced",
                                               "6 garlic cloves, minced",
                                               "8–10 shrimp, shells removed",
                                               "10–12 snap peas",
                                               "1–2 carrots, julienned"
                                           ]
                             }
                         ],
    "steps":  [
                  "1 small cabbage, chopped",
                  "1 tbsp oyster sauce",
                  "3 tbsp low sodium soy sauce",
                  "Salt \u0026 pepper to taste",
                  "Blanch noodles in boiling water with soy sauce \u0026 salt. Set aside.",
                  "Season \u0026 sear Iberico flank steak (1–2 min per side). Set aside.",
                  "Cook Chinese sausage \u0026 shrimp (1 min per side). Remove.",
                  "Sauté onions \u0026 garlic until fragrant.",
                  "Add snap peas, carrots, cabbage—stir-fry for 2 min.",
                  "Stir in soy sauce \u0026 optional oyster sauce.",
                  "Toss in noodles, steak, sausage \u0026 shrimp.",
                  "Mix well, season to taste—done!"
              ]
},
{
    "id":  "bbq-pork-banh-mi",
    "title":  "BBQ pork Banh Mi",
    "date":  "2025-10-02",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/bbq-pork-banh-mi.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "BBQ pork Banh Mi 🥖🌿\n\nHands down one of the best sandwiches I’ve ever made. Tender, marinated pork grilled over lump charcoal, tucked into a crispy baguette with pâté, crunchy pickles, creamy mayo, and all the classic fixings. \n\nMarinade Ingredients:\n• Favorite cut of pork (I used Secreto)\n• 1/4 cup fish sauce\n• 1 tbsp honey\n• 2 tbsp sugar\n• 4 green onions, chopped\n• 2 garlic cloves, minced\n• 1 knob of ginger, minced\n• 1 tsp ground black pepper\n\nMix well, coat the meat, and marinate in the fridge for 1–2 hours.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump\n\n#BanhMi #BBQPork #VietnameseSandwich #vietnamesefood #sandwhich #Kamadojoe",
    "description":  "Hands down one of the best sandwiches I’ve ever made. Tender, marinated pork grilled over lump charcoal, tucked into a crispy",
    "likes":  93,
    "intro":  [
                  "Hands down one of the best sandwiches I’ve ever made. Tender, marinated pork grilled over lump charcoal, tucked into a crispy baguette with pâté, crunchy pickles, creamy mayo, and all the classic fixings. Marinade Ingredients: • Favorite cut of pork (I used Secreto)"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 tbsp honey",
                                               "2 tbsp sugar",
                                               "• 4 green onions, chopped",
                                               "2 garlic cloves, minced",
                                               "1 knob of ginger, minced",
                                               "1 tsp ground black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix well, coat the meat, and marinate in the fridge for 1–2 hours."
              ]
},
{
    "id":  "islander-bbq-chicken",
    "title":  "Islander BBQ Chicken",
    "date":  "2025-09-25",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/islander-bbq-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Islander BBQ Chicken 🍗 🤙🏽\n\nServe it up with your favorite smoked meats, steamed rice, pickled cucumbers, and Mac salad for that roadside lunch!\n\nIngredients \u0026 Marinade:\n3 chickens, quartered\n1/4 cup soy sauce\n1/2 cup chicken broth\n1/3 cup white wine\n1/4 cup frozen pineapple juice concentrate\n1/4 cup ketchup\n1/4 cup brown sugar\n3 garlic clove, minced\n1 knob ginger root, minced\n\n1. Mix everything (except the chicken), then brush over the pieces—saving a cup for basting. \n2. Marinate overnight. \n3. Grilled up on the @kamadojoe at 350°F using the Joetisserie, lump charcoal, and Kiawe wood—this chicken gets that perfect island-style smokiness. \n4. Basted every 20 minutes until we hit an internal temp of 155°F. \n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER PRO\n\n#islanderbbq #hawaiianbbq #hulihulichicken #KamadoJoe #meater",
    "description":  "Serve it up with your favorite smoked meats, steamed rice, pickled cucumbers, and Mac salad for that roadside lunch!",
    "likes":  111,
    "intro":  [
                  "Serve it up with your favorite smoked meats, steamed rice, pickled cucumbers, and Mac salad for that roadside lunch!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 chickens, quartered",
                                               "1/4 cup soy sauce",
                                               "1/2 cup chicken broth",
                                               "1/3 cup white wine",
                                               "1/4 cup frozen pineapple juice concentrate",
                                               "1/4 cup ketchup",
                                               "1/4 cup brown sugar",
                                               "3 garlic clove, minced",
                                               "1 knob ginger root, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix everything (except the chicken), then brush over the pieces—saving a cup for basting.",
                  "Marinate overnight.",
                  "Grilled up on the @kamadojoe at 350°F using the Joetisserie, lump charcoal, and Kiawe wood—this chicken gets that perfect island-style smokiness.",
                  "Basted every 20 minutes until we hit an internal temp of 155°F."
              ]
},
{
    "id":  "cedar-plank-salmon",
    "title":  "Cedar Plank Salmon",
    "date":  "2025-09-12",
    "category":  "Seafood",
    "image":  "images/recipes/cedar-plank-salmon.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Cedar Plank Salmon🔥⁣\n\nWood, fire, and fish—this combo never misses. Grilled low and slow on a cedar plank, the salmon soaks up that signature smoky aroma, then gets hit with a buttery brown sugar glaze that caramelizes into pure magic.⁣\n\nIngredients:\nSalmon\nYour favorite BBQ rub (I used @blazingstarbbq Reaper Seasoning)\nKewpie Mayonnaise\n\nBrown Sugar Glaze\n1/2 stick butter\n1/2 cup brown sugar\n1/4 cup water\n\nSteps\n1. Season salmon with rub + mayo.\n2. Set up grill for indirect heat at 275°F.\n3. Place salmon on cedar plank, cook to 125°F internal.\n4. Brush with glaze, let it set for 5 min until sticky and glossy.⁣\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER Pro Duo\n🐗 @bbq_boards Premium Cutting Boards\n\n#CedarPlankSalmon #BBQSalmon #GrilledFish #BrownSugarGlaze #SalmonRecipe #BBQLife #SeafoodOnTheGrill #BackyardBBQ #BBQInspo #FoodieFinds #FishOnTheGrill #EasyGrilling #Kamadojoe #meater",
    "description":  "Wood, fire, and fish—this combo never misses. Grilled low and slow on a cedar plank, the salmon soaks up that signature smoky",
    "likes":  65,
    "intro":  [
                  "Wood, fire, and fish—this combo never misses. Grilled low and slow on a cedar plank, the salmon soaks up that signature smoky aroma, then gets hit with a buttery brown sugar glaze that caramelizes into pure magic.⁣"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Brown Sugar Glaze",
                  "1/2 stick butter",
                  "1/2 cup brown sugar",
                  "1/4 cup water",
                  "Season salmon with rub + mayo.",
                  "Set up grill for indirect heat at 275°F.",
                  "Place salmon on cedar plank, cook to 125°F internal.",
                  "Brush with glaze, let it set for 5 min until sticky and glossy.⁣"
              ]
},
{
    "id":  "cajun-honey-iberico-rib-rack",
    "title":  "Cajun Honey Iberico Rib Rack",
    "date":  "2025-08-27",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/cajun-honey-iberico-rib-rack.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Cajun Honey Iberico Rib Rack 🍯🔥🐖\n\nSeasoned heavy with @tfti.bbq Cajun Honey, kissed by lump charcoal, and finished with a Cajun Honey Butter that’s straight-up flavor overload. Low sodium, all flavor, zero compromise. 💰💰💰\n\n135° internal for juicy perfection every time.\n\nCajun Honey Butter:\n1 tbsp Cajun Honey Seasoning\n1 stick butter\n6 garlic cloves\n1 tbsp parsley\n\n🔥 @kamadojoe Joe Jr.\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER Pro\n\n#IbericoPork #CajunHoney #porkchops #GrillLife #KamadoJoe #meater #money",
    "description":  "Seasoned heavy with @tfti.bbq Cajun Honey, kissed by lump charcoal, and finished with a Cajun Honey Butter that’s straight-up",
    "likes":  1830,
    "intro":  [
                  "Seasoned heavy with @tfti.bbq Cajun Honey, kissed by lump charcoal, and finished with a Cajun Honey Butter that’s straight-up flavor overload. Low sodium, all flavor, zero compromise. 💰💰💰 135° internal for juicy perfection every time."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 tbsp Cajun Honey Seasoning",
                                               "1 stick butter",
                                               "6 garlic cloves",
                                               "1 tbsp parsley"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "wagyu-ribeye-w-garlic-noodles",
    "title":  "Wagyu Ribeye w/ Garlic Noodles",
    "date":  "2025-08-22",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/wagyu-ribeye-w-garlic-noodles.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Wagyu Ribeye w/ Garlic Noodles 🥩🍝\n\nWagyu steak seasoned simply with salt to bring out the most flavor from these juicy cuts, then finished with a rich chimichurri butter. Served alongside garlic noodles that pair perfectly.\n\nGarlic Noodles:\n1 packet Spaghetti\n1 tablespoon grated Parmesan cheese\nGreen onions\n\nGarlic Sauce:\n1 stick unsalted butter\n2 tablespoons garlic, minced (or more to taste)\n1 tablespoon Maggi seasoning sauce\n1 tablespoon oyster sauce\n1 tablespoon sesame oil\n1 tablespoon fish sauce\n1 tablespoon sugar\n\n🔥 @kamadojoe Joe Jr.\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER Pro\n🥩 @eatcampogrande Wagyu Bone-in Ribeye\n\n#Wagyu #Ribeyesteak #GarlicNoodles #FoodieReels #SteakLovers #Kamadojoe #meater",
    "description":  "Wagyu steak seasoned simply with salt to bring out the most flavor from these juicy cuts, then finished with a rich chimichurri",
    "likes":  88,
    "intro":  [
                  "Wagyu steak seasoned simply with salt to bring out the most flavor from these juicy cuts, then finished with a rich chimichurri butter. Served alongside garlic noodles that pair perfectly."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet Spaghetti",
                                               "1 tablespoon grated Parmesan cheese"
                                           ]
                             },
                             {
                                 "heading":  "Garlic Sauce",
                                 "items":  [
                                               "1 stick unsalted butter",
                                               "2 tablespoons garlic, minced (or more to taste)",
                                               "1 tablespoon Maggi seasoning sauce",
                                               "1 tablespoon oyster sauce",
                                               "1 tablespoon sesame oil",
                                               "1 tablespoon fish sauce",
                                               "1 tablespoon sugar"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "filipino-adobo-glazed-iberico-ribs",
    "title":  "Filipino Adobo Glazed Iberico Ribs",
    "date":  "2025-08-19",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-adobo-glazed-iberico-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Adobo Glazed Iberico Ribs 🇵🇭🍖\n\nREPOST: IG removed the audio🤦🏽 \n\nPerfect crispy Iberico ribs with a sticky Adobo glaze on every bite 🔥\n\nIberico St. Louis ribs, seasoned with @blazingstarbbq All in One and cooked on the @kamadojoe Konnected Joe at 275°-300° over @thegoodcharcoal Lump charcoal. Rib side down for 45 min, flipped and finished for another 30.\n\nTopped with the perfect Filipino-style Adobo glaze. \n\nAdobo Glaze Ingredients:\n6 cloves garlic minced\n1/2 cup low sodium soy sauce\n1/4 cup cane vinegar\n1/2 cup brown sugar or Hot honey\n1 tsp black pepper\n2 bay leaves\n\n#KamadoJoe #porkadobo #filipinofood #ribs #fusion",
    "description":  "REPOST: IG removed the audio🤦🏽 Perfect crispy Iberico ribs with a sticky Adobo glaze on every bite 🔥 Iberico St. Louis ribs,",
    "likes":  207,
    "intro":  [
                  "REPOST: IG removed the audio🤦🏽 Perfect crispy Iberico ribs with a sticky Adobo glaze on every bite 🔥 Iberico St. Louis ribs, seasoned with @blazingstarbbq All in One and cooked on the @kamadojoe Konnected Joe at 275°-300° over @thegoodcharcoal Lump charcoal. Rib side down for 45 min, flipped and finished for another 30. Topped with the perfect Filipino-style Adobo glaze."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "6 cloves garlic minced",
                                               "1/2 cup low sodium soy sauce",
                                               "1/4 cup cane vinegar",
                                               "1/2 cup brown sugar or Hot honey",
                                               "1 tsp black pepper",
                                               "2 bay leaves"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "filipino-bbq-chicken-thighs",
    "title":  "Filipino BBQ Chicken Thighs",
    "date":  "2025-07-31",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-bbq-chicken-thighs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino BBQ Chicken Thighs 🇵🇭🔥\n\nFilipino inspired BBQ chicken thighs with some islander fusion. Juicy, smoky, sweet and savory grilled chicken that hits like home. Perfect with rice, fried egg, and a side of atchara. You have to give this a try ⤵️\n\nRecipe:\n3 to 4 lbs boneless skinless chicken thighs\n4 garlic cloves, minced\n3 stalks green onion, chopped\n1 knob ginger, minced\n2 tbsp fish sauce\n1/2 cup light soy sauce\n1/2 cup oyster sauce\n1/2 cup @jufranofficial banana ketchup\n1/2 cup brown sugar\n1/2 cup pineapple juice or lemon soda\n1/2 cup beer\n1 tsp ground pepper\n\nInstructions:\n1. Mix all ingredients together\n2. Marinate for 2 to 3 hours or overnight\n3. Grill over medium high heat\n4. Serve with steamed rice, fried egg, and atchara. \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n\n#filipinobbq #bbqchicken #filipino #islanderbbq #easyrecipes #Kamadojoe #teamred",
    "description":  "Filipino inspired BBQ chicken thighs with some islander fusion. Juicy, smoky, sweet and savory grilled chicken that hits like",
    "likes":  385,
    "intro":  [
                  "Filipino inspired BBQ chicken thighs with some islander fusion. Juicy, smoky, sweet and savory grilled chicken that hits like home. Perfect with rice, fried egg, and a side of atchara. You have to give this a try ⤵️"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 to 4 lbs boneless skinless chicken thighs",
                                               "4 garlic cloves, minced",
                                               "3 stalks green onion, chopped",
                                               "1 knob ginger, minced",
                                               "2 tbsp fish sauce",
                                               "1/2 cup light soy sauce",
                                               "1/2 cup oyster sauce",
                                               "1/2 cup @jufranofficial banana ketchup",
                                               "1/2 cup brown sugar",
                                               "1/2 cup pineapple juice or lemon soda",
                                               "1/2 cup beer",
                                               "1 tsp ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients together",
                  "Marinate for 2 to 3 hours or overnight",
                  "Grill over medium high heat",
                  "Serve with steamed rice, fried egg, and atchara."
              ]
},
{
    "id":  "momofuku-sweet-spicy-birria-noodles",
    "title":  "Momofuku Sweet \u0026 Spicy Birria Noodles",
    "date":  "2025-07-29",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/momofuku-sweet-spicy-birria-noodles.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Momofuku Sweet \u0026 Spicy Birria Noodles 🍜 \n\nRecipe \u0026 Ingredients ⤵️\n\nBirria:\n3–4 pounds Chuck Roast\nFavorite Seasoning\n1 Birria Bomb\n4 Cups Water\n\n1. Season meat on all sides and sear both sides on medium-high heat.\n2. Place meat in a pot and combine water and Birria bomb.\n3. Cook for 3–4 hours at 325°F until fork tender.\n4. Assemble your taco with melted queso, shredded beef, onions, cilantro, and slices of avocado.\n\nMomofuku Noodles:\n2 packs Momofuku Sweet \u0026 Spicy Noodles\nHard Boiled Eggs\nOnions\nCilantro\n\n1. Cook noodles according to package. \n2. Add Birria consume. \n3. Now layer with beef, onions, cilantro, and eggs. \n4. Drizzle sweet \u0026 spicy sauce over the top and enjoy. \n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n\n#Birria #BirriaNoodles #noodles #easyrecipes #KamadoJoe #teamred",
    "description":  "Recipe \u0026 Ingredients ⤵️ Birria: 3–4 pounds Chuck Roast Favorite Seasoning",
    "likes":  78,
    "intro":  [
                  "Recipe \u0026 Ingredients ⤵️ Birria: 3–4 pounds Chuck Roast Favorite Seasoning"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 Cups Water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season meat on all sides and sear both sides on medium-high heat.",
                  "Place meat in a pot and combine water and Birria bomb.",
                  "Cook for 3–4 hours at 325°F until fork tender.",
                  "Assemble your taco with melted queso, shredded beef, onions, cilantro, and slices of avocado.",
                  "2 packs Momofuku Sweet \u0026 Spicy Noodles",
                  "Hard Boiled Eggs",
                  "Onions",
                  "Cilantro",
                  "Cook noodles according to package.",
                  "Add Birria consume.",
                  "Now layer with beef, onions, cilantro, and eggs.",
                  "Drizzle sweet \u0026 spicy sauce over the top and enjoy."
              ]
},
{
    "id":  "garlic-chili-noodles-w-grilled-iberico-pork-belly",
    "title":  "Garlic Chili Noodles w/ Grilled Iberico Pork Belly",
    "date":  "2025-07-06",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/garlic-chili-noodles-w-grilled-iberico-pork-belly.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Garlic Chili Noodles w/ Grilled Iberico Pork Belly 🔥🍜\n\nInspired by the bold flavors from @bulletproofbbq Spicy, savory, and full of umami — this dish is a certified flavor bomb 💣\nTossed spaghetti noodles in a garlicky chili oil sauce and topped with perfectly grilled Iberico pork belly. Easy to make, hard to forget.\n\nFor the noodles:\nSpaghetti noodles (cooked per package)\n\nGarlic Chili Oil Sauce:\n2 tbsp @momofukugoods Garlic Chili Crunch Oil\n½ tbsp Light Soy Sauce\n½ tsp Rice Vinegar\n½ tsp Chicken Bouillon Powder\n3 Garlic Cloves, minced\nCilantro or Green Onions (for garnish)\n\nFor the pork belly:\n1. Iberico Pork Belly\n2. Favorite seasoning (I used a simple savory rub)\n3. Grill at medium high heat. \n4. Toss noodles in the sauce and season with salt as needed, layer with pork, garnish, and enjoy that kick 🔥\n\n#noodlepull #garlicnoodles #porkbellyperfection #easyrecipes #FoodieGram #Kamadojoe #teamred",
    "description":  "Inspired by the bold flavors from @bulletproofbbq Spicy, savory, and full of umami — this dish is a certified flavor bomb 💣",
    "likes":  107,
    "intro":  [
                  "Inspired by the bold flavors from @bulletproofbbq Spicy, savory, and full of umami — this dish is a certified flavor bomb 💣 Tossed spaghetti noodles in a garlicky chili oil sauce and topped with perfectly grilled Iberico pork belly. Easy to make, hard to forget."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Spaghetti noodles (cooked per package)"
                                           ]
                             },
                             {
                                 "heading":  "Garlic Chili Oil Sauce",
                                 "items":  [
                                               "2 tbsp @momofukugoods Garlic Chili Crunch Oil",
                                               "tbsp Light Soy Sauce",
                                               "tsp Rice Vinegar",
                                               "tsp Chicken Bouillon Powder",
                                               "3 Garlic Cloves, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Iberico Pork Belly",
                  "Favorite seasoning (I used a simple savory rub)",
                  "Grill at medium high heat.",
                  "Toss noodles in the sauce and season with salt as needed, layer with pork, garnish, and enjoy that kick 🔥"
              ]
},
{
    "id":  "iberico-presa-saltado",
    "title":  "Iberico Presa Saltado",
    "date":  "2025-07-01",
    "category":  "Other",
    "image":  "images/recipes/iberico-presa-saltado.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Presa Saltado 🇵🇪🔥\n\nA bold Peruvian classic, reimagined on the grill and fired up in the wok.\n\nServed with crispy papas and fluffy white rice — this Saltado is all about bold flavor and serious wok energy.\n\nSteak Seasoning:\nIberico Presa steak\nGarlic powder, ground cumin, salt, pepper or hit it with @reservablends Ancho Chili seasoning 🌶️\n\nSaltado Ingredients:\nOlive oil\n2 cloves garlic, minced\n1 medium red onion, sliced lengthwise\n2 tomatoes, sliced\n3 stalks green onions, cut into 2-inch slices\n1 aji amarillo or red bell pepper, cored and sliced\n5–6 stems cilantro, chopped\n1 tbsp soy sauce\n1 tbsp Maggi seasoning\nSalt \u0026 pepper to taste\nFrench fries\n\nHow To:\n1️⃣ Grill Iberico ~2–3 min/side. Rest it.\n2️⃣ Stir-fry veggies in the wok ’til tender-crisp.\n3️⃣ Toss in steak + sauces. Flash sear.\n4️⃣ Plate it up with rice and fries. Game over.\n\nGear Check:\n🔥 @kamadojoe Big Joe III\n🥘 @kamadojoe Carbon Steel Wok\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n#IbericoPresa #lomosaltado #WokLife #Kamadojoe #TeamRed #latininspired #PeruvianFood #BBQFusion #Meater",
    "description":  "A bold Peruvian classic, reimagined on the grill and fired up in the wok. Served with crispy papas and fluffy white rice — this",
    "likes":  70,
    "intro":  [
                  "A bold Peruvian classic, reimagined on the grill and fired up in the wok. Served with crispy papas and fluffy white rice — this Saltado is all about bold flavor and serious wok energy. Steak Seasoning: Iberico Presa steak Garlic powder, ground cumin, salt, pepper or hit it with @reservablends Ancho Chili seasoning 🌶️ Saltado Ingredients: Olive oil"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 medium red onion, sliced lengthwise",
                                               "2 tomatoes, sliced",
                                               "3 stalks green onions, cut into 2-inch slices",
                                               "1 aji amarillo or red bell pepper, cored and sliced",
                                               "5–6 stems cilantro, chopped",
                                               "1 tbsp soy sauce",
                                               "1 tbsp Maggi seasoning",
                                               "Salt \u0026 pepper to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "French fries",
                  "1️⃣ Grill Iberico ~2–3 min/side. Rest it.",
                  "2️⃣ Stir-fry veggies in the wok ’til tender-crisp.",
                  "3️⃣ Toss in steak + sauces. Flash sear.",
                  "4️⃣ Plate it up with rice and fries. Game over."
              ]
},
{
    "id":  "hawaiian-lau-lau-3-ways",
    "title":  "Hawaiian Lau Lau 3 Ways",
    "date":  "2025-06-22",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/hawaiian-lau-lau-3-ways.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Hawaiian Lau Lau 3 Ways 🤙🏽\nLau Lau will always be one of my favorites. Every time I hit the islands, it’s a must.\nThis time, I made it three ways — traditional pork, oxtail, and smoked oxtail seasoned with @blazingstarbbq Beef Rub. 🔥\n\nSmoked oxtails were done low and slow on the @kamadojoe Konnected Joe with @thegoodcharcoal and Kiawe wood for 3–4 hours, then wrapped and finished in the Instant Pot.\n\nHere’s how I did it 👇\n\n⸻\n\n🛒 Ingredients:\n\t•\t3 lbs Pork Butt, cut into 1.5” cubes\n\t•\tOxtail (regular or smoked)\n\t•\tBlack Cod (Butterfish)\n\t•\tHawaiian Salt\n\t•\tTaro Leaves (luau leaves), stems trimmed \u0026 peeled\n\t•\tTi Leaves (or foil for wrapping)\n\t•\tWater (for steaming or Instant Pot)\n\n⸻\n\n👨🏽 🍳 Steps:\n\t1.\tStack 3–4 taro leaves (biggest on bottom).\n\t2.\tAdd 4–5 pieces of pork or oxtail, black cod, stems, and a sprinkle of Hawaiian salt.\n\t3.\tWrap it tightly in taro leaves, then wrap with ti leaves or foil.\n\t4.\tIn the Instant Pot:\n\t•\tAdd 1 cup water and place bundles on the rack.\n\t•\tPork: Pressure cook on high for 90 mins + natural release for 20 mins\n\t•\tOxtail: Pressure cook on high for 120 mins + natural release for 30 mins\n\t5.\tOr steam traditionally over the stove for 5–6 hours.\n\n⸻\n\nWrapped, steamed, and packed with island flavor 🌺🔥\nWhich one are you grabbing first — pork, oxtail, or smoked oxtail?👇\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n⸻\n\n#BTCooks #LauLau #HawaiianFood #IslandEats #SmokedMeat #Oxtail #SmokedOxtail #InstantPotRecipe #KamadoJoe #FoodieFinds #BBQLife #FusionFlavors #IslandVibes #TaroLeaves #GrillLife #HawaiiEats #FoodReels #PacificIslandFood #BBQLovers #laulau #hawaiistagram #hawaiifoodie #hawaiifood #polynesian #HawaiianBBQ #PressureCookerRecipes #PorkRecipes #FoodCravings #EatLocal",
    "description":  "Lau Lau will always be one of my favorites. Every time I hit the islands, it’s a must. This time, I made it three ways —",
    "likes":  607,
    "intro":  [
                  "Lau Lau will always be one of my favorites. Every time I hit the islands, it’s a must. This time, I made it three ways — traditional pork, oxtail, and smoked oxtail seasoned with @blazingstarbbq Beef Rub. 🔥 Smoked oxtails were done low and slow on the @kamadojoe Konnected Joe with @thegoodcharcoal and Kiawe wood for 3–4 hours, then wrapped and finished in the Instant Pot. Here’s how I did it 👇 ⸻ 🛒 Ingredients: • 3 lbs Pork Butt, cut into 1.5” cubes • Oxtail (regular or smoked) • Black Cod (Butterfish) • Hawaiian Salt • Taro Leaves (luau leaves), stems trimmed \u0026 peeled • Ti Leaves (or foil for wrapping) • Water (for steaming or Instant Pot) ⸻"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Stack 3–4 taro leaves (biggest on bottom).",
                  "Add 4–5 pieces of pork or oxtail, black cod, stems, and a sprinkle of Hawaiian salt.",
                  "Wrap it tightly in taro leaves, then wrap with ti leaves or foil.",
                  "Add 1 cup water and place bundles on the rack.",
                  "Pork: Pressure cook on high for 90 mins + natural release for 20 mins",
                  "Oxtail: Pressure cook on high for 120 mins + natural release for 30 mins",
                  "Or steam traditionally over the stove for 5–6 hours.",
                  "⸻",
                  "Wrapped, steamed, and packed with island flavor 🌺🔥",
                  "Which one are you grabbing first — pork, oxtail, or smoked oxtail?👇"
              ]
},
{
    "id":  "iberico-presa-steak-rolls-w-cowboy-butter",
    "title":  "Iberico Presa Steak Rolls w/ Cowboy Butter",
    "date":  "2025-06-19",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/iberico-presa-steak-rolls-w-cowboy-butter.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Presa Steak Rolls w/ Cowboy Butter 🔥🥩🧈\n\nJuicy, tender Iberico Presa pork rolled and seared to perfection—then hit with a bold Cowboy Butter that melts right into every bite. This one’s for the flavor lovers. 💥\n\nCowboy Butter Ingredients:\n🧈 1½ sticks of butter\n🧄 6 garlic cloves, minced\n🧅 1 medium shallot, minced\n🌿 2 tbsp fresh parsley, chopped\n🌱 2 tbsp scallions, minced\n🌶️ ½ tsp chipotle pepper\n🌫️ ½ tsp smoked paprika\n🥄 1 tbsp Dijon mustard\n🍋 ½ lemon, juiced\n🧂 Salt to taste\n\nGrilled on the 🔥 @kamadojoe Big Joe III\nFueled by 🪵 @thegoodcharcoal Lump Charcoal\nTemp tracked with 🌡️ @meatermade MEATER PRO\nServed on 🐗 @bbq_boards Premium Cutting Board\n\nDip it or pour it? Let us know below 👇\n\n—\n\n#ibericopork #iberico #steakrecipe #cowboybutter #kamadojoe #meater #grillingseason #charcoalgrill #porkrecipe #datenightrecipe #tablefortwo #howtocooksteak #steaktutorial #easyrecipes #cookingreels #foodreels #recipereels #recipevideo #cookingvideo #foodvideo #recipetutorial #cookingtutorial #foodtutorial #steakrolls #foodie #bbqlovers #grillmaster #bbqreels #foodporn",
    "description":  "Juicy, tender Iberico Presa pork rolled and seared to perfection—then hit with a bold Cowboy Butter that melts right into every",
    "likes":  84,
    "intro":  [
                  "Juicy, tender Iberico Presa pork rolled and seared to perfection—then hit with a bold Cowboy Butter that melts right into every bite. This one’s for the flavor lovers. 💥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "🧈 1½ sticks of butter",
                                               "🧄 6 garlic cloves, minced",
                                               "🧅 1 medium shallot, minced",
                                               "🌿 2 tbsp fresh parsley, chopped",
                                               "🌱 2 tbsp scallions, minced",
                                               "🌶️ ½ tsp chipotle pepper",
                                               "🌫️ ½ tsp smoked paprika",
                                               "🥄 1 tbsp Dijon mustard"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "iberico-st-louis-ribs-w-garlic-lemon-butter",
    "title":  "Iberico St. Louis Ribs w/ Garlic Lemon Butter",
    "date":  "2025-06-17",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/iberico-st-louis-ribs-w-garlic-lemon-butter.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico St. Louis Ribs w/ Garlic Lemon Butter 🧈 🌿\n\nSmoky, juicy, and finished with a garlic lemon butter drizzle that hits.\n\nI seasoned these beauties with @reservablends Ancho Chili for a deep, smoky kick.\nCooked them directly over lump charcoal on the Kamado at 275° — 1 hour on one side, then flipped and cooked another 45 minutes until they were just right.\n\nThen came the sauce… 🧄🍋\nGarlic Lemon Butter Sauce:\n• 1 stick butter\n• 6 cloves garlic, minced\n• 1/2 bunch fresh parsley\n• Juice of 1 lemon\n• Salt + pepper to taste\n\nSlice, drizzle, and dive in. These ribs don’t play around. Would you take a bite? 👇🔥\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Boards\n\n#BTcooks #IbericoRibs #ribs #Kamadojoe #Teamred #GarlicButter #FoodieGram #BBQReels #OpenFireCooking",
    "description":  "Smoky, juicy, and finished with a garlic lemon butter drizzle that hits. I seasoned these beauties with @reservablends Ancho",
    "likes":  107,
    "intro":  [
                  "Smoky, juicy, and finished with a garlic lemon butter drizzle that hits. I seasoned these beauties with @reservablends Ancho Chili for a deep, smoky kick. Cooked them directly over lump charcoal on the Kamado at 275° — 1 hour on one side, then flipped and cooked another 45 minutes until they were just right. Then came the sauce… 🧄🍋"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 stick butter",
                                               "6 cloves garlic, minced",
                                               "1/2 bunch fresh parsley",
                                               "• Juice of 1 lemon",
                                               "• Salt + pepper to taste",
                                               "Slice, drizzle, and dive in. These ribs don’t play around. Would you take a bite? 👇🔥"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "iberico-rib-rack-with-filipino-adobo-glaze",
    "title":  "Iberico Rib Rack with Filipino Adobo Glaze",
    "date":  "2025-06-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/iberico-rib-rack-with-filipino-adobo-glaze.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Rib Rack with Filipino Adobo Glaze 🇪🇸🇵🇭\nSpanish luxury meets Filipino soul food. These tender Iberico ribs are kissed by fire and finished with a bold, garlicky glaze.\n\nGrilled on the Kamado Konnected Joe using the Joetisserie at 350°F until the internal temp hits 130°F — then drizzled with a sweet, tangy, umami-packed adobo glaze.\n\nAdobo Glaze Ingredients:\n• 6 cloves garlic, minced\n• 4 tbsp hot honey (or regular honey)\n• 4 tbsp low sodium soy sauce\n• 2 tbsp cane vinegar\n• ½ tsp black pepper\n• 1 bay leaf\n\n🔥 @kamadojoe Konnected Joe\n🌡️ @meatermade MEATER Pro\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n🧂 @blazingstarbbq All in One Seasoning\n\n#BTCooks #IbericoRibs #AdoboGlazed #KamadoJoe #TeamRed #Meater #Joetisserie #FilipinoFlavors #FoodFusion #NextLevelBBQ #RibGoals #FilipinoFood #pinoy #filipino",
    "description":  "Spanish luxury meets Filipino soul food. These tender Iberico ribs are kissed by fire and finished with a bold, garlicky glaze.",
    "likes":  171,
    "intro":  [
                  "Spanish luxury meets Filipino soul food. These tender Iberico ribs are kissed by fire and finished with a bold, garlicky glaze. Grilled on the Kamado Konnected Joe using the Joetisserie at 350°F until the internal temp hits 130°F — then drizzled with a sweet, tangy, umami-packed adobo glaze."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "6 cloves garlic, minced",
                                               "4 tbsp hot honey (or regular honey)",
                                               "4 tbsp low sodium soy sauce",
                                               "2 tbsp cane vinegar",
                                               "tsp black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "1 bay leaf"
              ]
},
{
    "id":  "hawaiian-shrimp-scampi",
    "title":  "Hawaiian Shrimp Scampi",
    "date":  "2025-05-21",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/hawaiian-shrimp-scampi.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Hawaiian Shrimp Scampi 🌴🧄🍤 \n\nCrispy shrimp tossed in a buttery garlic-lemon sauce… you’ll want to serve this over a mountain of steamed rice 🤤\n\n✨ Full Recipe Below:\n\nIngredients:\n1 lb U15 shrimp (shell-on, deveined, head-off)\n1 head garlic, minced\n1/4 cup corn starch\n1/2 cup flour\n1 tbsp paprika\n1/2 tsp cayenne\n1 tsp salt\n1 stick butter\n1/4 cup olive oil\n1 lemon (optional)\n\nInstructions:\n1. In a large bowl, mix corn starch, flour, paprika, cayenne powder, and salt.\n2. Coat shrimp in the mixture. Shake off any excess.\n3. Heat oil + butter in a wok over medium-high heat.\n4. Pan-fry shrimp 1–2 min per side in batches. Set aside.\n5. Lower heat to medium. Sauté minced garlic in the same pan for 2 mins (add a pinch of salt if using unsalted butter).\n6. Squeeze in lemon juice, add shrimp back in, and sauté for 1 more minute.\n7. Serve immediately with steamed rice!\n\n🔥 Perfect for weeknight dinners or impressing guests. Save this one — it’s a keeper!\n\n#ShrimpScampi #HawaiianFood #SeafoodLovers #GarlicButterShrimp #EasyRecipes #HomeCooking #FoodieFavorites #IslandEats #InstaYum #QuickMeals #RecipeOfTheDay #WeeknightDinner #ShrimpRecipe #AlohaVibes #ComfortFood",
    "description":  "Crispy shrimp tossed in a buttery garlic-lemon sauce… you’ll want to serve this over a mountain of steamed rice 🤤 ✨ Full Recipe",
    "likes":  65,
    "intro":  [
                  "Crispy shrimp tossed in a buttery garlic-lemon sauce… you’ll want to serve this over a mountain of steamed rice 🤤 ✨ Full Recipe Below:"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 lb U15 shrimp (shell-on, deveined, head-off)",
                                               "1 head garlic, minced",
                                               "1/4 cup corn starch",
                                               "1/2 cup flour",
                                               "1 tbsp paprika",
                                               "1/2 tsp cayenne",
                                               "1 tsp salt",
                                               "1 stick butter",
                                               "1/4 cup olive oil",
                                               "1 lemon (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large bowl, mix corn starch, flour, paprika, cayenne powder, and salt.",
                  "Coat shrimp in the mixture. Shake off any excess.",
                  "Heat oil + butter in a wok over medium-high heat.",
                  "Pan-fry shrimp 1–2 min per side in batches. Set aside.",
                  "Lower heat to medium. Sauté minced garlic in the same pan for 2 mins (add a pinch of salt if using unsalted butter).",
                  "Squeeze in lemon juice, add shrimp back in, and sauté for 1 more minute.",
                  "Serve immediately with steamed rice!"
              ]
},
{
    "id":  "chicken-kelaguen",
    "title":  "Chicken Kelaguen",
    "date":  "2025-05-13",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/chicken-kelaguen.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Kelaguen 🔥\n\nOne of my favorite Islander Dishes from Guam. Similar taste profile as Filipino Sisig, but with BBQ Chicken. We are firing up the grill and making Chicken Kelaguen with juicy, smoky chicken and bold island flavors.\n\nAfter grilling over lump charcoal, we mix it all up with lemon, chili peppers, onions, and grated coconut for that true taste of Guam. Let it rest, then enjoy!\n\nIngredients:\n1 Chicken, cut into pieces\n4 stalks green onions, chopped 1/2 onion, chopped\n1 Lemon, juiced \n1-2 tbsp lemon powder, add more or less based on sourness\n1 tbsp salt\n1 tbsp chili flakes\n1/2 cup fresh grated coconut\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER PRO Duo\n🐗 @bbq_boards Premium Cutting Boards\n\n#btcooks #ChickenKelaguen #ChamorroFood #chamorro #GuamEats #IslandBBQ #GuamFoodies #GrillLife #IslandEats #Foodie #CharcoalGrilling #BBQLovers #Kamadojoe #teamred #meater",
    "description":  "One of my favorite Islander Dishes from Guam. Similar taste profile as Filipino Sisig, but with BBQ Chicken. We are firing up",
    "likes":  1063,
    "intro":  [
                  "One of my favorite Islander Dishes from Guam. Similar taste profile as Filipino Sisig, but with BBQ Chicken. We are firing up the grill and making Chicken Kelaguen with juicy, smoky chicken and bold island flavors. After grilling over lump charcoal, we mix it all up with lemon, chili peppers, onions, and grated coconut for that true taste of Guam. Let it rest, then enjoy!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Chicken, cut into pieces",
                                               "4 stalks green onions, chopped 1/2 onion, chopped",
                                               "1 Lemon, juiced",
                                               "1-2 tbsp lemon powder, add more or less based on sourness",
                                               "1 tbsp salt",
                                               "1 tbsp chili flakes",
                                               "1/2 cup fresh grated coconut"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "carne-asada-wings",
    "title":  "Carne Asada Wings",
    "date":  "2025-05-07",
    "category":  "Wings",
    "image":  "images/recipes/carne-asada-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Carne Asada Wings 🍗🔥\n\nToday we’re throwing down some next-level wings using @reservablends Carne Asada Seasoning, and these are insanely good.\n\nWe’re giving them a light corn starch coat for that extra crunch, seasoning them up generously, then grilling on the Kamado at 375-400°F for an hour — flipping halfway through for that perfect char.\n\nNo sauce needed, but if you want to level up even more, hit ’em with this Lemon Chipotle Crema:\n• 1/2 cup sour cream\n• 1 tbsp chipotle powder\n• Juice + zest of 1/2 lemon\n• 1 garlic clove, minced\n• 1/2 tbsp kosher salt\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump\n🐗 @bbq_boards Premium Cutting Boards\n\n#BTCooks #GrillLife #bbqlovers #CrispyWings #CarneAsadaWings #FoodieGram #BBQReels #OpenFireCooking #carneasada #grilledwings #wingwednesday #fusion #Kamadojoe #teamred",
    "description":  "Today we’re throwing down some next-level wings using @reservablends Carne Asada Seasoning, and these are insanely good. We’re",
    "likes":  456,
    "intro":  [
                  "Today we’re throwing down some next-level wings using @reservablends Carne Asada Seasoning, and these are insanely good. We’re giving them a light corn starch coat for that extra crunch, seasoning them up generously, then grilling on the Kamado at 375-400°F for an hour — flipping halfway through for that perfect char. No sauce needed, but if you want to level up even more, hit ’em with this Lemon Chipotle Crema:"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [

              ]
},
{
    "id":  "filipino-pork-adobo",
    "title":  "Filipino Pork Adobo",
    "date":  "2025-05-04",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-pork-adobo.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Pork Adobo 🇵🇭🔥\n\nIf you’ve never tried this iconic Filipino dish, now’s the time. \n\nWe’re cooking thick-cut pork belly over live fire in a cast iron pot, searing it to perfection. Then we braise it with garlic, soy sauce, bay leaves, peppercorns, brown sugar, and water. After an hour, hit it with cane vinegar for that signature adobo tang.\n\nBonus move? Pan-fry those tender chunks at the end for crispy, carnitas-style bites.\n\nIngredients:\n2 lbs pork belly\n1 head of garlic, chopped\n5 bay leaves\n1/2 cup soy sauce\n1 tbsp peppercorn\n1 tbsp brown sugar\n2 cups water\n1/4 cup cane vinegar\nSalt to taste\n\n🔥 @kamadojoe Big Joe III\n🥘 @kamadojoe Cast Iron Dutch Oven\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #FilipinoFood #PorkAdobo #LiveFireCooking #PinoyEats #CastIronCooking #AdoboNation #Kamadojoe #teamred",
    "description":  "If you’ve never tried this iconic Filipino dish, now’s the time. We’re cooking thick-cut pork belly over live fire in a cast",
    "likes":  1412,
    "intro":  [
                  "If you’ve never tried this iconic Filipino dish, now’s the time. We’re cooking thick-cut pork belly over live fire in a cast iron pot, searing it to perfection. Then we braise it with garlic, soy sauce, bay leaves, peppercorns, brown sugar, and water. After an hour, hit it with cane vinegar for that signature adobo tang. Bonus move? Pan-fry those tender chunks at the end for crispy, carnitas-style bites."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs pork belly",
                                               "1 head of garlic, chopped",
                                               "5 bay leaves",
                                               "1/2 cup soy sauce",
                                               "1 tbsp peppercorn",
                                               "1 tbsp brown sugar",
                                               "2 cups water",
                                               "1/4 cup cane vinegar",
                                               "Salt to taste"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "filipino-bbq-skewers",
    "title":  "Filipino BBQ Skewers",
    "date":  "2025-05-02",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-bbq-skewers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino BBQ Skewers 🇵🇭\n\nBrought the heat to the Thank a Hero BBQ with these Island Style juicy, flame-kissed pork belly skewers—sweet, savory, and straight-up addictive.\n\nHere’s the flavor-packed marinade:\n3 lbs skinless pork belly\n4 tbsp fish sauce\n2 tbsp oyster sauce\n2 tbsp light soy sauce\n2 tbsp banana ketchup\n1/2 can Sprite\n4 garlic cloves, minced\n3 green onion stalks, chopped\n1 knob ginger, minced\n1 tbsp sesame oil\n3 tbsp sugar\n2 tbsp honey\n1 tsp ground pepper\n\nInstructions:\n1. Mix it all up.\n2. Marinate 2–3 hours (or overnight if you’re patient).\n3. Skewer and grill over direct heat.\n\nFired up the flavor with the @kamadojoe Joe Jr and @thegoodcharcoal Lump Charcoal—smoky goodness in every bite.\n\n#btcooks #filipinobbq #bbqskewers #porkbbq #asianfood #islanderfood #marinade #grillingseason #kamadojoe #teamred #foodiegram #asmr",
    "description":  "Brought the heat to the Thank a Hero BBQ with these Island Style juicy, flame-kissed pork belly skewers—sweet, savory, and",
    "likes":  422,
    "intro":  [
                  "Brought the heat to the Thank a Hero BBQ with these Island Style juicy, flame-kissed pork belly skewers—sweet, savory, and straight-up addictive."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs skinless pork belly",
                                               "4 tbsp fish sauce",
                                               "2 tbsp oyster sauce",
                                               "2 tbsp light soy sauce",
                                               "2 tbsp banana ketchup",
                                               "1/2 can Sprite",
                                               "4 garlic cloves, minced",
                                               "3 green onion stalks, chopped",
                                               "1 knob ginger, minced",
                                               "1 tbsp sesame oil",
                                               "3 tbsp sugar",
                                               "2 tbsp honey",
                                               "1 tsp ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix it all up.",
                  "Marinate 2–3 hours (or overnight if you’re patient).",
                  "Skewer and grill over direct heat.",
                  "Fired up the flavor with the @kamadojoe Joe Jr and @thegoodcharcoal Lump Charcoal—smoky goodness in every bite."
              ]
},
{
    "id":  "lomo-saltado-w-grilled-ribeye-peruvian-meets-backyard-bbq",
    "title":  "Lomo Saltado w/ Grilled Ribeye — Peruvian meets backyard BBQ",
    "date":  "2025-04-28",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/lomo-saltado-w-grilled-ribeye-peruvian-meets-backyard-bbq.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lomo Saltado w/ Grilled Ribeye — Peruvian meets backyard BBQ 🔥\n\nThis dish is an absolute flavor bomb! Tender, juicy ribeyes meet the bold stir-fry magic of Lomo Saltado, served up with crispy slices of potatoes or fries (on the side, always—because soggy potatoes are a no-go) and steamed rice.\n\nSteak Seasoning:\n2 lbs Ribeye or Flap\nGarlic powder, ground cumin, salt, pepper\nOr hit it with blazingstar All-in-One for that extra punch.\n\nSaltado Ingredients:\nOlive oil, red onion, tomato, green onion\nAji Amarillo (or red bell pepper), garlic, cilantro\nSoy sauce, Maggi, salt + pepper\nFries (crispy ones!)\n\nHow to:\n1. Grill steak ~2-3 min/side. Rest.\n2. Stir-fry veggies in that wok ‘til tender-crisp.\n3. Toss in steak, garlic, herbs, sauces. Quick sear.\n4. Serve with rice + fries. Done and delicious.\n\nGear:\n🔥 @kamadojoe Big Joe III\n🥘 @kamadojoe Carbon Steel Wok\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n⸻\n\n#BTCooks #Backyardbbq #GrillMaster #LomoSaltado #peruvianfood #peru #latinfood #GrilledRibeye #BBQRecipes #WokCooked #Foodie #BBQLife #Kamadojoe #teamred",
    "description":  "Lomo Saltado w/ Grilled Ribeye — Peruvian meets backyard BBQ",
    "likes":  356,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Steak Seasoning",
                                 "items":  [
                                               "2 lbs Ribeye or Flap"
                                           ]
                             },
                             {
                                 "heading":  "Saltado Ingredients",
                                 "items":  [
                                               "Soy sauce, Maggi, salt + pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Fries (crispy ones!)",
                  "Grill steak ~2-3 min/side. Rest.",
                  "Stir-fry veggies in that wok ‘til tender-crisp.",
                  "Toss in steak, garlic, herbs, sauces. Quick sear.",
                  "Serve with rice + fries. Done and delicious."
              ]
},
{
    "id":  "lemon-saffron-chicken-wraps",
    "title":  "Lemon Saffron Chicken Wraps",
    "date":  "2025-04-21",
    "category":  "Poultry",
    "image":  "images/recipes/lemon-saffron-chicken-wraps.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemon Saffron Chicken Wraps. 🐓🌯\n\nThin slices of chicken breast marinated in lemon juice, chopped onions, cilantro, parsley, and saffron. Wrapped in a flour tortilla with Tzatziki, mixed greens, alfalfa sprouts, tomatoes, cucumbers, and onions. \n\nIngredients:\n3 pounds boneless and skinless chicken breasts, sliced\n1 onion, coarsely chopped\n1/2 cup Canola or Avocado oil\n2 lemons, juiced\n1 cup cilantro, chopped\n1 cup parsley, chopped\n1 tsp saffron, crushed\n1 tsp smoked paprika \n2 tbsp Chicken Bouillon Powder\n\n1. Combine all ingredients in an air tight container and refrigerate overnight. \n2. Preheat grill using lump charcoal. \n3. Grill chicken over direct heat. \n4. Wrapped in a flour tortilla with Tzatziki, mixed greens, alfalfa sprouts, tomatoes, cucumbers, and onions. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Boards \n\n#btcooks #easyrecipes #mealprep #lemonsaffronchicken #chickenwrap #kamadojoe #teamred",
    "description":  "Thin slices of chicken breast marinated in lemon juice, chopped onions, cilantro, parsley, and saffron. Wrapped in a flour",
    "likes":  393,
    "intro":  [
                  "Thin slices of chicken breast marinated in lemon juice, chopped onions, cilantro, parsley, and saffron. Wrapped in a flour tortilla with Tzatziki, mixed greens, alfalfa sprouts, tomatoes, cucumbers, and onions."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds boneless and skinless chicken breasts, sliced",
                                               "1 onion, coarsely chopped",
                                               "1/2 cup Canola or Avocado oil",
                                               "2 lemons, juiced",
                                               "1 cup cilantro, chopped",
                                               "1 cup parsley, chopped",
                                               "1 tsp saffron, crushed",
                                               "1 tsp smoked paprika",
                                               "2 tbsp Chicken Bouillon Powder"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in an air tight container and refrigerate overnight.",
                  "Preheat grill using lump charcoal.",
                  "Grill chicken over direct heat.",
                  "Wrapped in a flour tortilla with Tzatziki, mixed greens, alfalfa sprouts, tomatoes, cucumbers, and onions."
              ]
},
{
    "id":  "arroz-caldo-filipino-porridge",
    "title":  "Arroz Caldo (Filipino Porridge)",
    "date":  "2025-04-13",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/arroz-caldo-filipino-porridge.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Arroz Caldo (Filipino Porridge) 🥣 🇵🇭\n\nThis one is for my roots and I am sharing it with you for Filipino Food Month. This will always have a special place in my heart because I was also honored to share it with the world on Food Network. \n \nIngredients \u0026 Recipe:\n2 lbs chicken, chopped\n1 large ginger 2” thick, julienned \n1 head of garlic, minced\n1 medium onion, chopped\n1/2 cup Sweet rice\n1 cup Jasmine rice\n10 cups of water, add more if it is too thick\n2 tbsp fish sauce, may substitute for salt\n3-4 tbsp Chicken Bouillon \n1 pinch of saffron\n3 tbsp olive oil \nSalt and pepper to taste\n\nGarnishings:\nHard boiled eggs\nFried Garlic\nCrushed Chicharrones\nLemon wedges or sliced Calamansi\nChopped green onions\n\n1. Heat oil on medium high heat in a large pot. \n2. Add onions and sauté for 1-2 minutes. \n3. Add garlic and ginger, sauté 2-3 minutes. \n4. Add chicken and season with salt and pepper. Cook for 5 minutes mixing occasionally making sure not to burn onions and garlic. \n5. Reduce to medium heat and add rice, water, chicken bouillon, fish sauce, and saffron. Place lid and let cook for 45-60 minutes on or until rice is soft. \n6. Make sure to stir every 5 minutes to ensure the rice doesn’t stick to the bottom. \n7. Add additional salt if needed. May also add more water if it gets too thick.\n8. Serve hot with garnishing and enjoy \n\n#btcooks #arrozcaldo #filipinofood #comfortfood #pinoy #filipino #phillipines #filipinofoodmonth #cookwithme #easyrecipes",
    "description":  "This one is for my roots and I am sharing it with you for Filipino Food Month. This will always have a special place in my heart",
    "likes":  3346,
    "intro":  [
                  "This one is for my roots and I am sharing it with you for Filipino Food Month. This will always have a special place in my heart because I was also honored to share it with the world on Food Network."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs chicken, chopped",
                                               "1 large ginger 2” thick, julienned",
                                               "1 head of garlic, minced",
                                               "1 medium onion, chopped",
                                               "1/2 cup Sweet rice",
                                               "1 cup Jasmine rice",
                                               "10 cups of water, add more if it is too thick",
                                               "2 tbsp fish sauce, may substitute for salt",
                                               "3-4 tbsp Chicken Bouillon",
                                               "1 pinch of saffron",
                                               "3 tbsp olive oil",
                                               "Salt and pepper to taste"
                                           ]
                             },
                             {
                                 "heading":  "Garnishings",
                                 "items":  [
                                               "Hard boiled eggs",
                                               "Fried Garlic",
                                               "Crushed Chicharrones"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lemon wedges or sliced Calamansi",
                  "Chopped green onions",
                  "Heat oil on medium high heat in a large pot.",
                  "Add onions and sauté for 1-2 minutes.",
                  "Add garlic and ginger, sauté 2-3 minutes.",
                  "Add chicken and season with salt and pepper. Cook for 5 minutes mixing occasionally making sure not to burn onions and garlic.",
                  "Reduce to medium heat and add rice, water, chicken bouillon, fish sauce, and saffron. Place lid and let cook for 45-60 minutes on or until rice is soft.",
                  "Make sure to stir every 5 minutes to ensure the rice doesn’t stick to the bottom.",
                  "Add additional salt if needed. May also add more water if it gets too thick.",
                  "Serve hot with garnishing and enjoy"
              ]
},
{
    "id":  "iberico-presa-rolls-w-cowboy-butter",
    "title":  "Iberico Presa Rolls w/ Cowboy Butter",
    "date":  "2025-04-08",
    "category":  "Other",
    "image":  "images/recipes/iberico-presa-rolls-w-cowboy-butter.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Presa Rolls w/ Cowboy Butter 🥩 🧈🔥\n\nCowboy Butter Ingredients:\n1 1/2 Sticks of Butter\n6 Garlic Cloves, minced\n1 Medium Shallot, minced\n2 Tbsp Fresh Parsley, chopped\n2 Tbsp Scallions, minced\n1/2 Tsp Chipotle Pepper\n1/2 Tsp Smoked Paprika\n1 Tbsp Dijon Mustard\n1/2 Lemon, juiced\nSalt to taste\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER PRO\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #BBQ #GrillLife #ibericopork #presasteak #cowboybutter #KamadoJoe #teamred #meater",
    "description":  "Iberico Presa Rolls w/ Cowboy Butter",
    "likes":  133,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 1/2 Sticks of Butter",
                                               "6 Garlic Cloves, minced",
                                               "1 Medium Shallot, minced",
                                               "2 Tbsp Fresh Parsley, chopped",
                                               "2 Tbsp Scallions, minced",
                                               "1/2 Tsp Chipotle Pepper",
                                               "1/2 Tsp Smoked Paprika",
                                               "1 Tbsp Dijon Mustard",
                                               "1/2 Lemon, juiced",
                                               "Salt to taste"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "huli-huli-chicken",
    "title":  "Huli Huli Chicken",
    "date":  "2025-04-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/huli-huli-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Huli Huli Chicken 🍗 \n\nIf you’ve ever cruised through the towns and shores of Hawaii, you’ve probably seen roadside pitmasters cooking up various meats over open fire.\n\nThis chicken has so much flavor and even better when you serve it up with your favorite smoked meats, steamed rice, pickled cucumbers, and Mac salad for that roadside lunch!\n\nIngredients \u0026 Marinade:\n1 Whole Chicken\n1/4 cup Soy sauce\n1/2 cup Chicken broth\n1/3 cup White wine or Beer\n1/4 cup Pineapple Juice\n1/4 cup Ketchup\n1/4 cup Brown sugar\n3 Garlic cloves, minced\n1 Knob ginger root, minced\n\n1. Mix everything (except the chicken), then brush over the pieces—saving a cup for basting. \n2. Marinate overnight. \n3. Grilled up on the Kamado at 350°F using the Joetisserie, lump charcoal, and Kiawe wood—this chicken gets that perfect island-style smokiness. \n4. Basted every 20 minutes until we hit an internal temp of 155°F. \n\n🔥 @kamadojoe Big Joe III \u0026 Joetisserie\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER PRO\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #BBQ #GrillLife #Foodie #islanderbbq #HawaiianStyle #Hawaiilife #Hawaii #hulihulichicken #easyrecipes #KamadoJoe #teamred #meater",
    "description":  "If you’ve ever cruised through the towns and shores of Hawaii, you’ve probably seen roadside pitmasters cooking up various meats",
    "likes":  199,
    "intro":  [
                  "If you’ve ever cruised through the towns and shores of Hawaii, you’ve probably seen roadside pitmasters cooking up various meats over open fire. This chicken has so much flavor and even better when you serve it up with your favorite smoked meats, steamed rice, pickled cucumbers, and Mac salad for that roadside lunch!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Whole Chicken",
                                               "1/4 cup Soy sauce",
                                               "1/2 cup Chicken broth",
                                               "1/3 cup White wine or Beer",
                                               "1/4 cup Pineapple Juice",
                                               "1/4 cup Ketchup",
                                               "1/4 cup Brown sugar",
                                               "3 Garlic cloves, minced",
                                               "1 Knob ginger root, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix everything (except the chicken), then brush over the pieces—saving a cup for basting.",
                  "Marinate overnight.",
                  "Grilled up on the Kamado at 350°F using the Joetisserie, lump charcoal, and Kiawe wood—this chicken gets that perfect island-style smokiness.",
                  "Basted every 20 minutes until we hit an internal temp of 155°F."
              ]
},
{
    "id":  "filipino-bbq-beef-ribs",
    "title":  "Filipino BBQ Beef Ribs",
    "date":  "2025-03-23",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-bbq-beef-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino BBQ Beef Ribs 🇵🇭\n\nBeef ribs marinated and smoked is the ultimate Filipino BBQ on a stick. 🔥\n\nYou know we had to serve this up with Garlic rice with a fried egg, Atchara, and Tuyo from @rkitchenfood \n\nMarinade:\n1/2 cup banana ketchup\n1 cup lemon lime soda\n1 cup soy sauce\n1/4 cup oyster sauce\n1 cup brown sugar\n1 cup garlic minced\n2 teaspoons ground pepper\n\nSeasoning:\nFresh Ground Pepper\nGarlic Powder\n\n1. Combine all ingredients and marinate the beef ribs overnight. \n2. Pat dry and season with garlic powder and ground pepper. \n3. Smoke at 275° and spritzing every 30 minutes until internal temp reaches 203°-205° or until it is probe tender. \n4. Wrap in butcher paper and rest for at least 1 hour. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade MEATER Duo\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #beefribs #ribs #dinoribs #filipinobbq #filipinomarinade #islanderfood #hawaiianfood #asianfusion #kamadojoe #teamred #meater",
    "description":  "Beef ribs marinated and smoked is the ultimate Filipino BBQ on a stick. 🔥 You know we had to serve this up with Garlic rice",
    "likes":  185,
    "intro":  [
                  "Beef ribs marinated and smoked is the ultimate Filipino BBQ on a stick. 🔥 You know we had to serve this up with Garlic rice with a fried egg, Atchara, and Tuyo from @rkitchenfood"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 cup banana ketchup",
                                               "1 cup lemon lime soda",
                                               "1 cup soy sauce",
                                               "1/4 cup oyster sauce",
                                               "1 cup brown sugar",
                                               "1 cup garlic minced",
                                               "2 teaspoons ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate the beef ribs overnight.",
                  "Pat dry and season with garlic powder and ground pepper.",
                  "Smoke at 275° and spritzing every 30 minutes until internal temp reaches 203°-205° or until it is probe tender.",
                  "Wrap in butcher paper and rest for at least 1 hour."
              ]
},
{
    "id":  "buttery-lemon-pepper-wings",
    "title":  "Buttery Lemon Pepper Wings",
    "date":  "2025-03-21",
    "category":  "Wings",
    "image":  "images/recipes/buttery-lemon-pepper-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Buttery Lemon Pepper Wings 🪽🔥\n\nCrispy, buttery, and packed with bold lemon-pepper flavor—these wings disappeared fast! The tangy citrus, rich butter, and perfect seasoning make for an unbeatable combo.\n\nHere’s how to make them:\n5 lbs chicken wings\n@blazingstarbbq All in One Seasoning\nOlive oil\n\n🧈 Lemon Pepper Sauce:\n1 stick butter\n@sucklebuster Lemon Pepper Seasoning\n3 cloves garlic, minced\n1 lemon, juiced\nZest from 1 lemon\n1 tbsp @kikkomanusa Sriracha Sauce\n\n1. Let the wings dry out in the fridge for 4-6 hours. This makes them extra crispy!\n2. Coat with olive oil and season generously.\n3. Fire up the grill to 400°F and cook for 1 hour until golden and crispy.\n4. While they cook, melt butter and mix in the sauce ingredients over low heat for 5-10 min.\n5. Toss the hot wings in the buttery lemon pepper sauce, serve, and enjoy!\n\n🔥@kamadojoe Konnected Joe\n🪵@thegoodcharcoal Lump Charcoal\n🐗@bbq_boards Premium Cutting Board\n\n#btcooks #butterywings #lemonpepperwings #grilledwings #crispywings #chickenwings #kamadojoe #teamred",
    "description":  "Crispy, buttery, and packed with bold lemon-pepper flavor—these wings disappeared fast! The tangy citrus, rich butter, and",
    "likes":  79,
    "intro":  [
                  "Crispy, buttery, and packed with bold lemon-pepper flavor—these wings disappeared fast! The tangy citrus, rich butter, and perfect seasoning make for an unbeatable combo. Here’s how to make them: 5 lbs chicken wings @blazingstarbbq All in One Seasoning Olive oil 🧈 Lemon Pepper Sauce: 1 stick butter @sucklebuster Lemon Pepper Seasoning 3 cloves garlic, minced 1 lemon, juiced Zest from 1 lemon"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Let the wings dry out in the fridge for 4-6 hours. This makes them extra crispy!",
                  "Coat with olive oil and season generously.",
                  "Fire up the grill to 400°F and cook for 1 hour until golden and crispy.",
                  "While they cook, melt butter and mix in the sauce ingredients over low heat for 5-10 min.",
                  "Toss the hot wings in the buttery lemon pepper sauce, serve, and enjoy!"
              ]
},
{
    "id":  "a5-wagyu-crostini",
    "title":  "A5 Wagyu Crostini",
    "date":  "2025-03-13",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/a5-wagyu-crostini.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "A5 Wagyu Crostini 🥖\n\nThese little bite sized hors d’oeuvre are fancy and so good! Super easy to make with just carmelized onions, micro greens, thinly sliced wagyu, and aioli sauce. \n\nLightly seasoned with salt, these A5 Wagyu steaks had the perfect crust. Cooking for 5 minutes on each side and resting for about 5-10 minutes. \n\nIngredients \nFrench Baguette \nA5 Wagyu \nCarmelized onions\nMicro greens\nAioli sauce\n\nCilantro Lime Aioli sauce:\n1 cup mayonnaise \n1/4 cup chopped Cilantro\n2-3 gloves garlic \n1 lime, zest and juice\nSalt and pepper to taste\n\n🍳 @hexclad 12” Frying Pan\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #a5wagyu #kobebeef #wagyu #hexclad #steak #appetizers #cooking #foodie",
    "description":  "These little bite sized hors d’oeuvre are fancy and so good! Super easy to make with just carmelized onions, micro greens,",
    "likes":  94,
    "intro":  [
                  "These little bite sized hors d’oeuvre are fancy and so good! Super easy to make with just carmelized onions, micro greens, thinly sliced wagyu, and aioli sauce. Lightly seasoned with salt, these A5 Wagyu steaks had the perfect crust. Cooking for 5 minutes on each side and resting for about 5-10 minutes."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Micro greens",
                  "1 cup mayonnaise",
                  "1/4 cup chopped Cilantro",
                  "2-3 gloves garlic",
                  "1 lime, zest and juice",
                  "Salt and pepper to taste"
              ]
},
{
    "id":  "iberico-flank-steak-tacos",
    "title":  "Iberico Flank Steak Tacos",
    "date":  "2025-03-07",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/iberico-flank-steak-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Flank Steak Tacos 🌮 \n\nSuper tender, juicy, and full of Umami! These steaks are so damn good and having this in tacos are straight FIYAH 🔥\n\nIngredients:\n@eat.campogrande Iberico Flank Steak\nFavorite seasoning\nLime\n\nAvocado Tomatillo Salsa:\n2 hass avocados \n6 tomatillos \n1/4 cup of cilantro, chopped\n1 Lime, Juiced\n1 Jalapeño pepper, sliced \n1/4 cup onion, chopped\n2 garlic cloves \nSalt to taste \n\n1. Season steak with your favorite seasoning, I used @blazingstarbbq All in One. \n2. Grill over direct heat, about 1-2 minutes on each side, flipping throughout the cook. \n3. Halfway through the cook drizzle fresh orange and lime juice over the top. \n4. While the steak is resting grill the Tomatillo, Jalapeño, Onion, and Garlic. \n5. Combine all of the tomatillo ingredients in a blender. Season with salt to taste. \n6. Assemble your tacos by adding slices of pork, layered with Tomatillo salsa, diced Onions and Cilantro. Enjoy\n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n#BTCooks #tacos #iberico #ibericopork #wagyu #flanksteak #carneasada #adobada #mexicanfood #foodie #cooking #KamadoJoe #teamred",
    "description":  "Super tender, juicy, and full of Umami! These steaks are so damn good and having this in tacos are straight FIYAH 🔥",
    "likes":  67,
    "intro":  [
                  "Super tender, juicy, and full of Umami! These steaks are so damn good and having this in tacos are straight FIYAH 🔥"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "2 hass avocados",
                  "6 tomatillos",
                  "1/4 cup of cilantro, chopped",
                  "1 Lime, Juiced",
                  "1 Jalapeño pepper, sliced",
                  "1/4 cup onion, chopped",
                  "2 garlic cloves",
                  "Salt to taste",
                  "Season steak with your favorite seasoning, I used @blazingstarbbq All in One.",
                  "Grill over direct heat, about 1-2 minutes on each side, flipping throughout the cook.",
                  "Halfway through the cook drizzle fresh orange and lime juice over the top.",
                  "While the steak is resting grill the Tomatillo, Jalapeño, Onion, and Garlic.",
                  "Combine all of the tomatillo ingredients in a blender. Season with salt to taste.",
                  "Assemble your tacos by adding slices of pork, layered with Tomatillo salsa, diced Onions and Cilantro. Enjoy"
              ]
},
{
    "id":  "pork-belly-banh-mi",
    "title":  "Pork Belly Banh Mi",
    "date":  "2025-03-03",
    "category":  "Pork",
    "image":  "images/recipes/pork-belly-banh-mi.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pork Belly Banh Mi 🥖\n\nAnother flavor packed Banh mi sandwich that is straight FIYAH 🔥. Pork bellies prepared and cooked like a brisket. Super tender and melt in your mouth. \n\n3-4 lb skin off pork belly slab\n@blazingstarbbq Scorpion Rub\n@lilliesq Umami Boost\n\n1. Smoke at 250° for 4-5hrs until you hit an internal temp of 165-170° or when you have built a nice bark. \n2. Wrap in butcher paper and cook until internal temp hits 203° and probe tender. \n3. Rest for at least an hour before slicing. \n\nSandwich Ingredients:\n🥖 French Bread\n🧈 Pate\n🥒 Cucumbers \u0026 Onions\n🥕 Pickled Daikon \u0026 Carrots\n🌶️ Jalapeños\n🌿 Cilantro\n✨ Maggi Seasoning\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade Pro\n🐗 @bbq_boards Premium Cutting Board\n\n#BTCooks #porkbelly #brisket #banhmi #foodie #homecooking #VietnameseFood #asianfusion #KamadoJoe #teamred #meater",
    "description":  "Another flavor packed Banh mi sandwich that is straight FIYAH 🔥. Pork bellies prepared and cooked like a brisket. Super tender",
    "likes":  85,
    "intro":  [
                  "Another flavor packed Banh mi sandwich that is straight FIYAH 🔥. Pork bellies prepared and cooked like a brisket. Super tender and melt in your mouth. 3-4 lb skin off pork belly slab @blazingstarbbq Scorpion Rub @lilliesq Umami Boost"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Wrap in butcher paper and cook until internal temp hits 203° and probe tender.",
                  "Rest for at least an hour before slicing."
              ]
},
{
    "id":  "iberico-pork-chop-w-asian-chimichurri",
    "title":  "Iberico Pork Chop w/ Asian Chimichurri",
    "date":  "2025-02-28",
    "category":  "Pork",
    "image":  "images/recipes/iberico-pork-chop-w-asian-chimichurri.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Iberico Pork Chop w/ Asian Chimichurri 🔥\n\nIberico 4-Rib Rack\nSalt, Pepper, and Garlic\nOlive oil\n\nAsian Chimichurri:\n1/2 bunch Parsley, finely chopped\n1/2 bunch Cilantro, finely chopped\n1/2 Red onion, chopped\n2 Garlic Cloves, minced\n6 Calamansi, juiced\n2 tbsp Red Wine Vinegar\n1 tbsp Fish sauce\n1/2 tbsp Red pepper flakes\n1/2 cup Olive oil\nSalt and Pepper, to taste\n\n1. Add Olive oil as a binder and season pork with Salt, Pepper, and Garlic letting it sit for about 30 minutes. \n2. Set the grill to 350°F, and roast for 45 minutes over indirect heat until you hit an internal temp of 130° degrees. Let’s it rest and then slice between the bones and season with salt and pepper. \n3. Increase the heat to allow a nice sear on all sides. This will carry over the temp to 140°. \n4. Drizzle Chimichurri over the top and serve with your favorite veggies. \n\n🔥 @kamadoejoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade Pro Duo\n🐗 @bbq_boards Premium Cutting Boards\n \n#btcooks #ribrack #chimichurri #iberico #ibericopork #porkchops #bbq #asianfusion #meater #Kamadojoe #teamred",
    "description":  "Iberico 4-Rib Rack Salt, Pepper, and Garlic Olive oil",
    "likes":  119,
    "intro":  [
                  "Iberico 4-Rib Rack Salt, Pepper, and Garlic Olive oil"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 bunch Parsley, finely chopped",
                                               "1/2 bunch Cilantro, finely chopped",
                                               "1/2 Red onion, chopped",
                                               "2 Garlic Cloves, minced",
                                               "6 Calamansi, juiced",
                                               "2 tbsp Red Wine Vinegar",
                                               "1 tbsp Fish sauce",
                                               "1/2 tbsp Red pepper flakes",
                                               "1/2 cup Olive oil",
                                               "Salt and Pepper, to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add Olive oil as a binder and season pork with Salt, Pepper, and Garlic letting it sit for about 30 minutes.",
                  "Set the grill to 350°F, and roast for 45 minutes over indirect heat until you hit an internal temp of 130° degrees. Let’s it rest and then slice between the bones and season with salt and pepper.",
                  "Increase the heat to allow a nice sear on all sides. This will carry over the temp to 140°.",
                  "Drizzle Chimichurri over the top and serve with your favorite veggies."
              ]
},
{
    "id":  "chamorro-short-ribs",
    "title":  "Chamorro Short Ribs",
    "date":  "2025-02-21",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/chamorro-short-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chamorro Short Ribs 🔥\n\nIf you like short ribs, you are going to want to make this. Packed with so much flavor and perfectly paired with Finadene and steamed rice. 🤙🏽\n\nShort Ribs:\n1 cup of Kikkoman Soy Sauce\n1 cup Vinegar\n1 Onion, sliced\n1 head of garlic, minced\n1 tsp Black pepper\n1/2 cup Brown Sugar (optional)\n\nFinadene Sauce:\n1/2 cup Soy sauce\n1/2 cup Vinegar\n1/4 cup Lemon juice or Calamansi\n4 Thai Chili Peppers or 2 Serrano Chili, sliced\n4 Stalks Green onions\n1/4 Onion, chopped\n1/2 Cup Cherry tomatoes\n\n🔥 @kamadoejoe Joe Jr\n🪵 @thegoodcharcoal Briquette Charcoal\n🐗 @bbq_boards Premium Cutting Boards\n \n#btcooks #chamorro #guam #chamorrofood #guamfood #phillipines #filipinofood #shortribs #islanderbbq #foodie #Kamadojoe #teamred",
    "description":  "If you like short ribs, you are going to want to make this. Packed with so much flavor and perfectly paired with Finadene and",
    "likes":  3514,
    "intro":  [
                  "If you like short ribs, you are going to want to make this. Packed with so much flavor and perfectly paired with Finadene and steamed rice. 🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 cup of Kikkoman Soy Sauce",
                                               "1 cup Vinegar",
                                               "1 Onion, sliced",
                                               "1 head of garlic, minced",
                                               "1 tsp Black pepper",
                                               "1/2 cup Brown Sugar (optional)"
                                           ]
                             },
                             {
                                 "heading":  "Finadene Sauce",
                                 "items":  [
                                               "1/2 cup Soy sauce",
                                               "1/2 cup Vinegar",
                                               "1/4 cup Lemon juice or Calamansi",
                                               "4 Thai Chili Peppers or 2 Serrano Chili, sliced",
                                               "4 Stalks Green onions",
                                               "1/4 Onion, chopped",
                                               "1/2 Cup Cherry tomatoes"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "tritip-sliders-with-roasted-peppers",
    "title":  "Tritip Sliders with Roasted Peppers ️",
    "date":  "2025-02-18",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/tritip-sliders-with-roasted-peppers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Tritip Sliders with Roasted Peppers 🌶️ \n\nSliders using @kingshawaiian has to be my favorite. Adding tritip from @santacarotabeef and seasoned with @blazingstarbbq beef rub, then adding cilantro, onions, and beer to marinate overnight. \n\nIngredients:\nKings Hawaiian Bread\nTritip\nFavorite Beef Seasoning\nCilantro\nOnions\nBeer\n2 red bell peppers\nMixed greens\n\nGarlic Aioli Sauce\n1/2 cup mayonnaise \n4 cloves Garlic, finely minced\n1 Lemon, juiced\nSalt and Pepper to taste\n\n🔥 @kamadojoe Joe Jr\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Boards\n\n#btcook #sliders #tritip #tritipsliders #aioli #roastdpeppers #Kamadojoe #teamred",
    "description":  "Sliders using @kingshawaiian has to be my favorite. Adding tritip from @santacarotabeef and seasoned with @blazingstarbbq beef",
    "likes":  68,
    "intro":  [
                  "Sliders using @kingshawaiian has to be my favorite. Adding tritip from @santacarotabeef and seasoned with @blazingstarbbq beef rub, then adding cilantro, onions, and beer to marinate overnight."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Cilantro",
                  "Onions",
                  "Beer",
                  "2 red bell peppers",
                  "Mixed greens",
                  "Garlic Aioli Sauce",
                  "1/2 cup mayonnaise",
                  "4 cloves Garlic, finely minced",
                  "1 Lemon, juiced",
                  "Salt and Pepper to taste"
              ]
},
{
    "id":  "kamado-asado-ribs",
    "title":  "Kamado Asado Ribs",
    "date":  "2025-02-12",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/kamado-asado-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Kamado Asado Ribs 🔥\n\nI love the flavor profile of simple South American style BBQ. No fancy sauces or rubs, but just a nice meaty taste with fresh citrus squeezed over. \n\n1 rack St Louis Ribs\nSalt or your favorite seasoning\n2 Limes\n\n1. Lightly season your ribs and let it sit for 20-30 minutes. \n2. Heat up the Kamado Joe using a small amount of charcoal and adding splits of Oak. Aiming for a temp of 250-275°\n3. Place your ribs on one side of the grill. This will provide you with easy access to add more wood if needed. \n4. While the ribs squeeze half a lime over the ribs. \n5. After an hour, flip the ribs and squeeze the other half of the lime. Cook for 1 more hour and rest covered in foil for 30 minutes. \n6. Slice into individual pieces and drizzle more lime juice right before serving. \n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcook #asado #ribs #bbqribs #southamerica #brazilianfood #argentinianfood #southamericanbbq #Kamadojoe #teamred",
    "description":  "I love the flavor profile of simple South American style BBQ. No fancy sauces or rubs, but just a nice meaty taste with fresh",
    "likes":  106,
    "intro":  [
                  "I love the flavor profile of simple South American style BBQ. No fancy sauces or rubs, but just a nice meaty taste with fresh citrus squeezed over. 1 rack St Louis Ribs Salt or your favorite seasoning"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Lightly season your ribs and let it sit for 20-30 minutes.",
                  "Heat up the Kamado Joe using a small amount of charcoal and adding splits of Oak. Aiming for a temp of 250-275°",
                  "Place your ribs on one side of the grill. This will provide you with easy access to add more wood if needed.",
                  "While the ribs squeeze half a lime over the ribs.",
                  "After an hour, flip the ribs and squeeze the other half of the lime. Cook for 1 more hour and rest covered in foil for 30 minutes.",
                  "Slice into individual pieces and drizzle more lime juice right before serving."
              ]
},
{
    "id":  "hot-honey-sriracha-wings",
    "title":  "Hot Honey Sriracha Wings",
    "date":  "2025-02-05",
    "category":  "Wings",
    "image":  "images/recipes/hot-honey-sriracha-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Hot Honey Sriracha Wings 🪽 \n\nThese wings are flavor packed and has to be on your menu for this game day. \n\nWings:\n@blazingstarbbq Pork n Rub\n4-5 pounds of wings\n\nHot Honey Sriracha sauce:\n1/4 cup @bestfoodsmayonnaise Mayonnaise \n1/4 cup Sriracha \n1/4 cup @melindasfoods Hot Honey\nFurikake \n\n1. Preheat grill to 375-400° degrees with a setup for indirect cooking. \n2. Season wings with your favorite seasoning. \n3. Cook wings for 1 hour. \n4. While the wings are cooking combine all the Hot Honey Sriracha ingredients. \n5. When wings are done, drizzle sauce over wings and sprinkle Furikake then serve! \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🐗 @bbq_boards Premium Cutting Board\n\n#btcooks #partywings #hothoney #sriracha #chickenwings #grilledwings #furikake #superbowl #gameday #wingwednesday #Kamadojoe #TeamRed",
    "description":  "These wings are flavor packed and has to be on your menu for this game day. Wings: @blazingstarbbq Pork n Rub",
    "likes":  132,
    "intro":  [
                  "These wings are flavor packed and has to be on your menu for this game day. Wings: @blazingstarbbq Pork n Rub"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Hot Honey Sriracha sauce",
                                 "items":  [
                                               "1/4 cup @bestfoodsmayonnaise Mayonnaise",
                                               "1/4 cup Sriracha",
                                               "1/4 cup @melindasfoods Hot Honey"
                                           ]
                             }
                         ],
    "steps":  [
                  "Preheat grill to 375-400° degrees with a setup for indirect cooking.",
                  "Season wings with your favorite seasoning.",
                  "Cook wings for 1 hour.",
                  "While the wings are cooking combine all the Hot Honey Sriracha ingredients.",
                  "When wings are done, drizzle sauce over wings and sprinkle Furikake then serve!"
              ]
},
{
    "id":  "brisket-kimchi-fried-rice",
    "title":  "Brisket Kimchi Fried Rice",
    "date":  "2025-01-31",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/brisket-kimchi-fried-rice.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Brisket Kimchi Fried Rice 🍚 \n\nI cooked up a brisket the day before using miso as a binder and seasoning it with @blazingstarbbq Beef Rub. Smoked overnight at 225° until I hit probe tenderness at 203°. I had some left over and had to make some fried rice. It was packed with so much flavor and you are going to want to make this. \n\nIngredients:\n2 tbsp @chefslife.co Cooking Oil\n2 cups chopped Brisket\n2 cloves garlic, minced\n2 stalks green onions, chopped\n1/2 cup kimchi, chopped\n2 eggs\n1 tbsp chicken bouillon powder\nDay old rice from 2 cups of uncooked rice\n1 tsp Sesame Oil\nSalt and pepper to taste\nFried Egg\n\n🔥 @kamadojoe Big Joe III\n🍳 @hexclad 12” Wok\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcook #kimchifriedrice #brisketfriedrice #kimchi #brisket #asianfusion #koreanfood #Kamadojoe #teamred",
    "description":  "I cooked up a brisket the day before using miso as a binder and seasoning it with @blazingstarbbq Beef Rub. Smoked overnight at",
    "likes":  135,
    "intro":  [
                  "I cooked up a brisket the day before using miso as a binder and seasoning it with @blazingstarbbq Beef Rub. Smoked overnight at 225° until I hit probe tenderness at 203°. I had some left over and had to make some fried rice. It was packed with so much flavor and you are going to want to make this."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp @chefslife.co Cooking Oil",
                                               "2 cups chopped Brisket",
                                               "2 cloves garlic, minced",
                                               "2 stalks green onions, chopped",
                                               "1/2 cup kimchi, chopped",
                                               "2 eggs",
                                               "1 tbsp chicken bouillon powder",
                                               "Day old rice from 2 cups of uncooked rice",
                                               "1 tsp Sesame Oil",
                                               "Salt and pepper to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Fried Egg"
              ]
},
{
    "id":  "korean-bbq-flap-meat",
    "title":  "Korean BBQ Flap Meat",
    "date":  "2025-01-20",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/korean-bbq-flap-meat.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Korean BBQ Flap Meat 🥩\n\nQuick and easy Korean BBQ at home. Flap meat marinated and grilled directly over charcoal. Served with Kimchi, pickled radish, and steamed rice topped with furikake. \n\n2-3 lbs Flap or skirt steak, thinly sliced againt the grain\n@kikkomanusa Takumi Korean BBQ \n3 Stalks Green Onions, sliced 1-2 inch\n4 garlic cloves, chopped\n\n1. Combine all ingredients in a bowl and marinate at least 4-6 hours, preferably overnight. \n2. Set your grill to medium high heat. \n3. Grill for about 3 minutes on each side, looking for medium/rare to keep the meat tender. \n4. Let rest for 5 minutes before serving with your favorite sides. \n\n🔥 @nomadgrills Nomad Portable Grill\n🪵 @thegoodcharcoal Lump Charcoal\n\n#btcooks #koreanbbq #kbbq #koreanfood #marinatedmeat #fusion #kalbi",
    "description":  "Quick and easy Korean BBQ at home. Flap meat marinated and grilled directly over charcoal. Served with Kimchi, pickled radish,",
    "likes":  99,
    "intro":  [
                  "Quick and easy Korean BBQ at home. Flap meat marinated and grilled directly over charcoal. Served with Kimchi, pickled radish, and steamed rice topped with furikake. 2-3 lbs Flap or skirt steak, thinly sliced againt the grain @kikkomanusa Takumi Korean BBQ"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 garlic cloves, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a bowl and marinate at least 4-6 hours, preferably overnight.",
                  "Set your grill to medium high heat.",
                  "Grill for about 3 minutes on each side, looking for medium/rare to keep the meat tender.",
                  "Let rest for 5 minutes before serving with your favorite sides."
              ]
},
{
    "id":  "korean-style-pork-wraps",
    "title":  "Korean Style Pork Wraps",
    "date":  "2025-01-17",
    "category":  "Pork",
    "image":  "images/recipes/korean-style-pork-wraps.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Korean Style Pork Wraps🥬\n\nSmoked pork shoulder sliced and served with picked veggies then wrapped in lettuce.\n\nIngredients:\nBoneless Pork Shoulder, smoked at 225° for 3 hours. \n@blazingstarbbq Pork n Rub or your favorite sweet rub\n\nSides:\nRed leaf lettuce\nPickled Daikon\nKimchi \n\nDipping Sauce:\n2 Tbsp Sugar\n4 Tbsp Soy sauce\n4 Tbsp Water\n4 Tbsp rice vinegar or white vinegar\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n\n#btcooks #koreanfood #bossam #smokedpork #lettucewraps #asianfusion #fusion #teamred #kamadojoe",
    "description":  "Smoked pork shoulder sliced and served with picked veggies then wrapped in lettuce.",
    "likes":  84,
    "intro":  [
                  "Smoked pork shoulder sliced and served with picked veggies then wrapped in lettuce."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Dipping Sauce",
                                 "items":  [
                                               "2 Tbsp Sugar",
                                               "4 Tbsp Soy sauce",
                                               "4 Tbsp Water",
                                               "4 Tbsp rice vinegar or white vinegar"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "overnight-smoked-brisket",
    "title":  "Overnight Smoked Brisket",
    "date":  "2024-12-27",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/overnight-smoked-brisket.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Overnight Smoked Brisket 🐂🔥\n\n🔥 Low and slow, packed with bold flavors, and topped with a Filipino twist! 🔥\n\nThis beauty from @santacarotabeef was an absolute flavor bomb—grass-fed and carrot-finished for that next-level taste. 🥕🐂\n\nI started with miso paste as a binder, hit it with @blazingstarbbq Beef Rub, and dry brined it overnight. Smoked at 225°F until it hit 165°F, then wrapped it in foil with tallow and brought it to probe tenderness at 205°F. This brisket was juicy, tender, and bursting with smoky aroma.\n\nBut here’s the twist: I topped it off with a Filipino-inspired gremolata for an extra kick of flavor! 🌿🇵🇭\n\n💥 Here’s the recipe:\n\t•\t1 bunch Cilantro, chopped\n\t•\t1 bunch Parsley, chopped\n\t•\t1 shallot, chopped\n\t•\t1/2 cup Olive Oil\n\t•\t1 tbsp Fish Sauce\n\t•\t6 Calamansi, juiced\n\t•\t1 tbsp Capers, chopped\n\t•\t1 tbsp Garlic Chili Crunch\n\t•\tFresh ground Pepper\n\t•\tSalt to taste\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Pro Duo\n\n#BTCooks #SmokedBrisket #brisket #bbqbrisket #gremolata #KamadoJoe #BBQLovers #GrillMasters #FilipinoFusion #LowAndSlowBBQ #meater #teamred #newyear #2025",
    "description":  "🔥 Low and slow, packed with bold flavors, and topped with a Filipino twist! 🔥 This beauty from @santacarotabeef was an",
    "likes":  138,
    "intro":  [
                  "🔥 Low and slow, packed with bold flavors, and topped with a Filipino twist! 🔥 This beauty from @santacarotabeef was an absolute flavor bomb—grass-fed and carrot-finished for that next-level taste. 🥕🐂 I started with miso paste as a binder, hit it with @blazingstarbbq Beef Rub, and dry brined it overnight. Smoked at 225°F until it hit 165°F, then wrapped it in foil with tallow and brought it to probe tenderness at 205°F. This brisket was juicy, tender, and bursting with smoky aroma. But here’s the twist: I topped it off with a Filipino-inspired gremolata for an extra kick of flavor! 🌿🇵🇭"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 bunch Cilantro, chopped",
                                               "1 bunch Parsley, chopped",
                                               "•\t1 shallot, chopped",
                                               "1/2 cup Olive Oil",
                                               "1 tbsp Fish Sauce",
                                               "•\t6 Calamansi, juiced",
                                               "1 tbsp Capers, chopped",
                                               "1 tbsp Garlic Chili Crunch"
                                           ]
                             }
                         ],
    "steps":  [
                  "Fresh ground Pepper",
                  "Salt to taste"
              ]
},
{
    "id":  "double-smoked-ham-w-cherry-pog-glaze",
    "title":  "Double Smoked Ham w/ Cherry POG Glaze",
    "date":  "2024-12-20",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/double-smoked-ham-w-cherry-pog-glaze.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Double Smoked Ham w/ Cherry POG Glaze 🎄\n\nThe holidays are here, and it’s time to level up your Christmas feast with this Double Smoked Ham, glazed with a Cherry POG Whiskey Reduction. \n\nHere’s how you do it:\n1. Take a spiral-cut ham and slather it with miso paste as a binder.\n2. Season with @blazingstarbbq Pork n Rub.\n3. Smoking it on the Kamado Joe Big Joe at 225°F until it reaches an internal temp of 140°F.\n\nWhile it’s smoking, let’s whip up the glaze:\n\n1. Melt 2 sticks of butter in a saucepan over medium heat.\n2. Add ½ cup of your favorite whiskey, 1½ cups light brown sugar, 1 cup cherry jam, and 1½ cups POG juice.\n3. Zest and juice one orange.\n4. Cook it down until it thickens.\n5. When the ham hits 100°F, start glazing every 20-30 minutes until it’s done.\n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Pro Duo\n\n#btcooks #smokedham #doublesmokedham #pog #chistmasdinner #christmas #holidayrecipes #foodie #fusion #Kamadojoe #teamred #meater #foodporn",
    "description":  "The holidays are here, and it’s time to level up your Christmas feast with this Double Smoked Ham, glazed with a Cherry POG",
    "likes":  103,
    "intro":  [
                  "The holidays are here, and it’s time to level up your Christmas feast with this Double Smoked Ham, glazed with a Cherry POG Whiskey Reduction."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Take a spiral-cut ham and slather it with miso paste as a binder.",
                  "Season with @blazingstarbbq Pork n Rub.",
                  "Smoking it on the Kamado Joe Big Joe at 225°F until it reaches an internal temp of 140°F.",
                  "Melt 2 sticks of butter in a saucepan over medium heat.",
                  "Add ½ cup of your favorite whiskey, 1½ cups light brown sugar, 1 cup cherry jam, and 1½ cups POG juice.",
                  "Zest and juice one orange.",
                  "Cook it down until it thickens.",
                  "When the ham hits 100°F, start glazing every 20-30 minutes until it’s done."
              ]
},
{
    "id":  "chicken-w-prosciutto-mozzarella",
    "title":  "Chicken w/ Prosciutto \u0026 Mozzarella",
    "date":  "2024-12-17",
    "category":  "Pork",
    "image":  "images/recipes/chicken-w-prosciutto-mozzarella.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken w/ Prosciutto \u0026 Mozzarella 🍗\n\nIngredients:\nChicken Breast\n@kikkoman Panko Crumbs \nProsciutto \nMozzarella \nSalt \u0026 Pepper\n\n1. Slice chicken breast in half and pound thin. \n2. Add 1 slice of prosciutto and mozzarella. \n3. Dip in flour, egg, and panko crumbs. \n4. Pan fry on medium heat with olive oil and several pieces of butter. \n5. Flip once bottom turns golden brown. \n6. Serve with Ajvar and side of salad. \n\n🍳 @hexclad 12” Frying Pan\n🧤 @cleanspaceproject Nitrile Gloves\n ————————————————————————\n#btcooks #hexclad #ajvar #panko #prosciutto #mozzarella #chicken #chickenkatsu #fusion",
    "description":  "Chicken w/ Prosciutto \u0026 Mozzarella",
    "likes":  64,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Mozzarella",
                  "Salt \u0026 Pepper",
                  "Slice chicken breast in half and pound thin.",
                  "Add 1 slice of prosciutto and mozzarella.",
                  "Dip in flour, egg, and panko crumbs.",
                  "Pan fry on medium heat with olive oil and several pieces of butter.",
                  "Flip once bottom turns golden brown.",
                  "Serve with Ajvar and side of salad."
              ]
},
{
    "id":  "brined-smoked-spatchcock-turkey",
    "title":  "Brined \u0026 Smoked Spatchcock Turkey",
    "date":  "2024-12-13",
    "category":  "Holiday",
    "image":  "images/recipes/brined-smoked-spatchcock-turkey.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Brined \u0026 Smoked Spatchcock Turkey 🍗\n\nIt’s not Thanksgiving, but had a craving for some turkey. If you plan on cooking a turkey for Christmas you need to give this a try. \n\nBrined for 48 hours, then rinsed under cold water to remove the excess brine from the skin. Remove the spine from the Turkey and give it a nice press on a table, cracking the chest bone. This will create a nice flat area for the turkey to cook evenly. \n\nPlace garlic herb butter in between the meat and skin. Infuse the meat with the buttery garlic injection. Finally drizzle olive oil on the skin and season with your favorite rub. \n\nSmoked at 325° until my @meatermade probes hit 155° on the breast and 165° on the thighs. The bird will continue to cook and hitting 160-165°. \n\nBrine:\n1 gallon chicken broth \n1 cup kosher salt\n2-3 springs Fresh Rosemary \n2-3 springs Fresh Sage\n4 springs Fresh Thyme\n2 Oranges Sliced\n1 gallon ice water\n\nGarlic herb butter:\n1 cup unsalted butter, softened\n1 tbsp minced garlic, or more to taste\n1 tsp garlic salt, or more to taste\n1 tsp Italian seasoning\n½ tsp ground black pepper\n¼ tsp ground paprika\n\nTurkey Butter injection:\n1 cup water\n2 tbsp beef bouillon powder\n1 tbsp garlic powder\n1 tbsp onion powder\n1/2 stick butter\n\n1. Combine all ingredients in a pot and heat until all is combined. \n2. Cool and inject turkey. \n\n🔥 @briskitgrills Origin 580\n🧤 @cleanspaceproject Nitrile Gloves \n \n#btcooks #smokedturkey #spatchcock #turkey #breast #thighs #wings #crispy #holidays #christmas #christmasturkey",
    "description":  "It’s not Thanksgiving, but had a craving for some turkey. If you plan on cooking a turkey for Christmas you need to give this a",
    "likes":  77,
    "intro":  [
                  "It’s not Thanksgiving, but had a craving for some turkey. If you plan on cooking a turkey for Christmas you need to give this a try. Brined for 48 hours, then rinsed under cold water to remove the excess brine from the skin. Remove the spine from the Turkey and give it a nice press on a table, cracking the chest bone. This will create a nice flat area for the turkey to cook evenly. Place garlic herb butter in between the meat and skin. Infuse the meat with the buttery garlic injection. Finally drizzle olive oil on the skin and season with your favorite rub. Smoked at 325° until my @meatermade probes hit 155° on the breast and 165° on the thighs. The bird will continue to cook and hitting 160-165°."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 gallon chicken broth",
                                               "1 cup kosher salt",
                                               "2-3 springs Fresh Rosemary",
                                               "2-3 springs Fresh Sage",
                                               "4 springs Fresh Thyme",
                                               "2 Oranges Sliced",
                                               "1 gallon ice water"
                                           ]
                             },
                             {
                                 "heading":  "Garlic herb butter",
                                 "items":  [
                                               "1 cup unsalted butter, softened",
                                               "1 tbsp minced garlic, or more to taste",
                                               "1 tsp garlic salt, or more to taste",
                                               "1 tsp Italian seasoning",
                                               "tsp ground black pepper",
                                               "tsp ground paprika"
                                           ]
                             },
                             {
                                 "heading":  "Turkey Butter injection",
                                 "items":  [
                                               "1 cup water",
                                               "2 tbsp beef bouillon powder",
                                               "1 tbsp garlic powder",
                                               "1 tbsp onion powder",
                                               "1/2 stick butter"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a pot and heat until all is combined.",
                  "Cool and inject turkey."
              ]
},
{
    "id":  "ny-steaks-w-filipino-white-sauce",
    "title":  "NY Steaks w/ Filipino White Sauce",
    "date":  "2024-12-10",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/ny-steaks-w-filipino-white-sauce.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "NY Steaks w/ Filipino White Sauce 🇵🇭\n\nYou heard about Alabama white sauce, but have you heard of Filipino white sauce? It’s white, creamy, tangy, and full of Umami 😉\n\nSeasoned NY Steaks from @santacarotabeef using @blazingstarbbq Beef Rub, cooking over direct heat until we hit an internal temp of 120°\n\nWhite Sauce Recipe\n1 cup Mayonnaise \n2 tbsp Apple cider vinegar\n1 tbsp Brown Sugar\n2 tbsp Sinigang Powder\n1/2 tsp Fish Sauce\n1/2 tsp black pepper\n1 tbsp Sriracha\n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meater Meater Duo Pro\n \n#btcooks #grilledmeat #meatporn #sinigang #fusion #nysteaks #steaks #filipinosauce #whitesauce #dippingsauce #meater #Kamadojoe #teamred",
    "description":  "You heard about Alabama white sauce, but have you heard of Filipino white sauce? It’s white, creamy, tangy, and full of Umami 😉",
    "likes":  295,
    "intro":  [
                  "You heard about Alabama white sauce, but have you heard of Filipino white sauce? It’s white, creamy, tangy, and full of Umami 😉 Seasoned NY Steaks from @santacarotabeef using @blazingstarbbq Beef Rub, cooking over direct heat until we hit an internal temp of 120° White Sauce Recipe"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp Apple cider vinegar",
                                               "1 tbsp Brown Sugar",
                                               "2 tbsp Sinigang Powder",
                                               "1/2 tsp Fish Sauce",
                                               "1/2 tsp black pepper",
                                               "1 tbsp Sriracha"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "beef-tapa-steak-tapsilog",
    "title":  "Beef Tapa Steak (Tapsilog)",
    "date":  "2024-12-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/beef-tapa-steak-tapsilog.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef Tapa Steak (Tapsilog) 🇵🇭\n\nThis is not your traditional marinated slices of beef, but if you like beef tapa, you need to give this a try. \n\nI used top sirloin provided by my friends @santacarotabeef The steer are grass fed and finished with carrots, providing an awesome taste. \n\n2-3 lbs Top Sirloin Steaks\n½ cup @kikkomanusa Soy sauce\n¼ cup Calamansi juice or Lemon Juice\n6-8 cloves Garlic, peeled and minced\n½ tsp Salt\n¼ tsp Pepper\n1 tbsp sugar (optional)\u2028\n1. Combine all ingredients in a bowl and marinate the beef for at least 4-6 hours, preferably overnight. \n2. Grill over lump charcoal until you hit an internal temperature of 130°. Let it rest for at 5-10 minutes before slicing. \n3. Serve with garlic rice, diced tomatoes, and a fried egg. \n\n🔥 @kamadojoe Joe Jr. \n🌡️ @meatermade Meater Pro \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n \n#btcooks #topsirloin #steak #beeftapa #filipinofood #tapsilog #fusion #philippines #foodies #meater #santacarota #kamadojoe #teamred",
    "description":  "This is not your traditional marinated slices of beef, but if you like beef tapa, you need to give this a try. I used top",
    "likes":  177,
    "intro":  [
                  "This is not your traditional marinated slices of beef, but if you like beef tapa, you need to give this a try. I used top sirloin provided by my friends @santacarotabeef The steer are grass fed and finished with carrots, providing an awesome taste."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "cup @kikkomanusa Soy sauce",
                                               "cup Calamansi juice or Lemon Juice",
                                               "6-8 cloves Garlic, peeled and minced",
                                               "tsp Salt",
                                               "tsp Pepper",
                                               "1 tbsp sugar (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a bowl and marinate the beef for at least 4-6 hours, preferably overnight.",
                  "Grill over lump charcoal until you hit an internal temperature of 130°. Let it rest for at 5-10 minutes before slicing.",
                  "Serve with garlic rice, diced tomatoes, and a fried egg."
              ]
},
{
    "id":  "miso-baby-back-ribs",
    "title":  "Miso Baby Back Ribs",
    "date":  "2024-11-29",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/miso-baby-back-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Miso Baby Back Ribs 🐖\n\nI’ve been hooked on using Miso on anything I can get my hands on. Used it as a binder and also adds flavor to your favorite BBQ sauce. If you haven’t tried it, go for it. \n\nBaby back ribs seasoned with @blazingstarbbq Pork n Rub and cooked on @briskitgrills at 250° for 3 hours. Wrapped in foil adding butter, brown sugar, and bbq sauce. Back on the grill for another hour. Lather on the Miso BBQ sauce and serve. \n\nMiso BBQ Sauce:\n1/2 cup Favorite BBQ Sauce\n2 tbsp Brown sugar\n1 tbsp Miso paste \n\n🔥 @briskitgrills Origin 580\n🌡️ @meatermade Meater Pro Duo\n🧤 @cleanspaceproject Nitrile Gloves\n \n#btcooks #ribs #babybackribs #miso #misobbqsauce #AI #fusion",
    "description":  "I’ve been hooked on using Miso on anything I can get my hands on. Used it as a binder and also adds flavor to your favorite BBQ",
    "likes":  91,
    "intro":  [
                  "I’ve been hooked on using Miso on anything I can get my hands on. Used it as a binder and also adds flavor to your favorite BBQ sauce. If you haven’t tried it, go for it. Baby back ribs seasoned with @blazingstarbbq Pork n Rub and cooked on @briskitgrills at 250° for 3 hours. Wrapped in foil adding butter, brown sugar, and bbq sauce. Back on the grill for another hour. Lather on the Miso BBQ sauce and serve."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 cup Favorite BBQ Sauce",
                                               "2 tbsp Brown sugar",
                                               "1 tbsp Miso paste"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "sinigang-lamb-chops",
    "title":  "Sinigang Lamb Chops",
    "date":  "2024-11-26",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/sinigang-lamb-chops.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Sinigang Lamb Chops 🐑\n\nGrilled little meat sticks seasoned with Sinigang powder (Tamarind), then finished with freshly squeezed lime juice. \n\nGrilled at 300-350° to develop a crispy crust. Cooked until internal temperature hits 140°, then remove from grill and rest for 10 minutes. Slice between the bones and return back to the grill to give it a nice sear on all sides.\n\nIngredients:\nRack of lamb\nSinigang Powder\nOlive oil, as a binder\nLime \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meater Meater Pro Duo\n \n#btcooks #grilledmeat #meatporn #sinigang #siniganglamb #fusion #grilledlamb #lambchops #filipinofood #pinoy #philippines #meater #Kamadojoe #teamred",
    "description":  "Grilled little meat sticks seasoned with Sinigang powder (Tamarind), then finished with freshly squeezed lime juice. Grilled at",
    "likes":  588,
    "intro":  [
                  "Grilled little meat sticks seasoned with Sinigang powder (Tamarind), then finished with freshly squeezed lime juice. Grilled at 300-350° to develop a crispy crust. Cooked until internal temperature hits 140°, then remove from grill and rest for 10 minutes. Slice between the bones and return back to the grill to give it a nice sear on all sides."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Rack of lamb",
                  "Sinigang Powder",
                  "Olive oil, as a binder",
                  "Lime"
              ]
},
{
    "id":  "rotisserie-turkey",
    "title":  "Rotisserie Turkey",
    "date":  "2024-11-18",
    "category":  "Holiday",
    "image":  "images/recipes/rotisserie-turkey.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Rotisserie Turkey 🦃\n\nThis year I partnered up with Diestel Family Ranch, Kikkoman, and Meater with the new Pro Duo to bring you this damn good pasture raised turkey for the holidays. Marinated with various herbs and citrus to soak in that flavor. \n\nAll cooked on the Kamado Joe Big Joe and Joetisserie. Cooked over open fire and a kiss of smoke from our friends at Country Craft Firewood. \n\n13-14 pound Turkey \n1 cup olive oil\n1/3 cup soy sauce\n1 onion quartered, placed inside turkey\n1-2 lemons juiced\n1 large orange juiced \n1 teaspoon lemon zest\n1 teaspoon orange zest\n1/2 cup parsley leaves, finely chopped\n1/4 cup sage leaves, finely chopped\n2 tablespoons rosemary leaves, finely chopped\n1/4 cup thyme leaves, finely chopped\n2-3 stalks green onions, sliced\n1 tablespoon garlic, minced\n2 teaspoons smoked paprika\n1 teaspoon paprika\n2 teaspoons salt\n1 tbsp chicken bouillon \n1 teaspoon black pepper\n\n1. Place all of the ingredients in a medium bowl and mix together until combined. \n2. Loosen the skin of the turkey to separate from meat and add the marinade. \n3. Marinade for 12-24 hours.\n4. Smoke turkey at 350 degrees.\n5. Cook until the breast temperature reaches 160 degrees on the breast and the thighs reaches 170 degrees.\n\n🔥 @kamadojoe BIg Joe III \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcooks #turkey #rotisserieturkey #rotisserie #smokedturkey #thanksgiving #thanksgivingdinner #Kamadojoe #teamred #meater #ad",
    "description":  "This year I partnered up with Diestel Family Ranch, Kikkoman, and Meater with the new Pro Duo to bring you this damn good",
    "likes":  0,
    "intro":  [
                  "This year I partnered up with Diestel Family Ranch, Kikkoman, and Meater with the new Pro Duo to bring you this damn good pasture raised turkey for the holidays. Marinated with various herbs and citrus to soak in that flavor. All cooked on the Kamado Joe Big Joe and Joetisserie. Cooked over open fire and a kiss of smoke from our friends at Country Craft Firewood."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 cup olive oil",
                                               "1/3 cup soy sauce",
                                               "1 onion quartered, placed inside turkey",
                                               "1-2 lemons juiced",
                                               "1 large orange juiced",
                                               "1 teaspoon lemon zest",
                                               "1 teaspoon orange zest",
                                               "1/2 cup parsley leaves, finely chopped",
                                               "1/4 cup sage leaves, finely chopped",
                                               "2 tablespoons rosemary leaves, finely chopped",
                                               "1/4 cup thyme leaves, finely chopped",
                                               "2-3 stalks green onions, sliced",
                                               "1 tablespoon garlic, minced",
                                               "2 teaspoons smoked paprika",
                                               "1 teaspoon paprika",
                                               "2 teaspoons salt",
                                               "1 tbsp chicken bouillon",
                                               "1 teaspoon black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place all of the ingredients in a medium bowl and mix together until combined.",
                  "Loosen the skin of the turkey to separate from meat and add the marinade.",
                  "Marinade for 12-24 hours.",
                  "Smoke turkey at 350 degrees.",
                  "Cook until the breast temperature reaches 160 degrees on the breast and the thighs reaches 170 degrees."
              ]
},
{
    "id":  "japanese-egg-sandwich-tamago-sando",
    "title":  "Japanese Egg Sandwich (Tamago Sando)",
    "date":  "2024-11-15",
    "category":  "Other",
    "image":  "images/recipes/japanese-egg-sandwich-tamago-sando.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Japanese Egg Sandwich (Tamago Sando) 🇯🇵\n\nCreamy egg salad in between two fluffy slices of soft white bread (Shokupan). This can be found in many convenient stores in Hawaii and Japan. \n\n9 large eggs\n3/4 tsp sugar\n3/4 tsp Kosher Salt\n1/4 tsp Ground pepper\n6 tsp milk\n6 Tbsp Kewpie mayonnaise\n8 slices Shokupan (Japanese milk bread), or use your softest white bread. \nRoom temp butter\n\n1. Boil eggs and when done, chill with ice and cold water for 10 minutes. \n2. Separate the yolk and the whites. \n3. Smash the yolk and finely dice the whites. \n4. Combine all the ingredients into a bowl and refrigerate for 10 minutes. \n5. Add butter to one slice of the bread and top off with 3 heaping spoons of egg mixture. \n6. Remove the crust and serve. \n\n#btcooks #tamago #tamagosando #eggsandwhich #7eleven #eggsalad #hawaiianfood #japanesefood\n#japan",
    "description":  "Japanese Egg Sandwich (Tamago Sando)",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "9 large eggs",
                                               "3/4 tsp sugar",
                                               "3/4 tsp Kosher Salt",
                                               "1/4 tsp Ground pepper",
                                               "6 tsp milk",
                                               "6 Tbsp Kewpie mayonnaise",
                                               "8 slices Shokupan (Japanese milk bread), or use your softest white bread."
                                           ]
                             }
                         ],
    "steps":  [
                  "Boil eggs and when done, chill with ice and cold water for 10 minutes.",
                  "Separate the yolk and the whites.",
                  "Smash the yolk and finely dice the whites.",
                  "Combine all the ingredients into a bowl and refrigerate for 10 minutes.",
                  "Add butter to one slice of the bread and top off with 3 heaping spoons of egg mixture.",
                  "Remove the crust and serve."
              ]
},
{
    "id":  "white-bean-chili-soup-w-ground-turkey",
    "title":  "White Bean Chili Soup w/ Ground Turkey",
    "date":  "2024-11-13",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/white-bean-chili-soup-w-ground-turkey.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "White Bean Chili Soup w/ Ground Turkey 🦃\n\nIt’s Chili season and this is a family favorite. Ground turkey seasoned with @blazingstarbbq All in One just elevated this dish. 🔥\n\nIngredients\n1 Medium Onion, chopped\n4 Garlic cloves, minced\n2 pounds Ground turkey\n2 (4 ounce) Cans diced green chilies \n1 tbsp Ground cumin\n1 tbsp Dried oregano\n1 tsp Ground cinnamon\n1 tbsp Chipotle powder\n2 tsp Ground white pepper\n2 (15 ounce) Cans cannellini beans, drained and rinsed\n6 cups Chicken broth\nSalt to taste\n\nGarnishing:\nShredded Monterey Jack cheese\nCilantro\nAvocado\n\n1. In a large pot over medium heat, saute the onions, garlic, and ground turkey. \n2. Season Turkey with Blazing Star All in One seasoning or with salt and Pepper. Cook until turkey has browned. \n3. Add the diced chilies, cumin, oregano, cinnamon, chipotle powder, and white pepper. \n4. Add the beans and the chicken broth. \n5. Add salt to taste. \n6. Serve with shredded cheese, sliced avocado, and cilantro.\n\n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @blazingstarbbq All in One Seasoning\n \n#btcooks #soup #chili #whitebeanchilisoup #groundturkey #healthy #chiliseason",
    "description":  "It’s Chili season and this is a family favorite. Ground turkey seasoned with @blazingstarbbq All in One just elevated this dish.",
    "likes":  0,
    "intro":  [
                  "It’s Chili season and this is a family favorite. Ground turkey seasoned with @blazingstarbbq All in One just elevated this dish. 🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Medium Onion, chopped",
                                               "4 Garlic cloves, minced",
                                               "2 pounds Ground turkey",
                                               "2 (4 ounce) Cans diced green chilies",
                                               "1 tbsp Ground cumin",
                                               "1 tbsp Dried oregano",
                                               "1 tsp Ground cinnamon",
                                               "1 tbsp Chipotle powder",
                                               "2 tsp Ground white pepper",
                                               "2 (15 ounce) Cans cannellini beans, drained and rinsed",
                                               "6 cups Chicken broth",
                                               "Salt to taste"
                                           ]
                             },
                             {
                                 "heading":  "Garnishing",
                                 "items":  [
                                               "Shredded Monterey Jack cheese",
                                               "Cilantro",
                                               "Avocado"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot over medium heat, saute the onions, garlic, and ground turkey.",
                  "Season Turkey with Blazing Star All in One seasoning or with salt and Pepper. Cook until turkey has browned.",
                  "Add the diced chilies, cumin, oregano, cinnamon, chipotle powder, and white pepper.",
                  "Add the beans and the chicken broth.",
                  "Add salt to taste.",
                  "Serve with shredded cheese, sliced avocado, and cilantro."
              ]
},
{
    "id":  "carne-asada-plate",
    "title":  "Carne Asada Plate",
    "date":  "2024-11-11",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/carne-asada-plate.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Carne Asada Plate 🥩\n\nEasy quick marinade to grill up some meat. Cooked up on the @kamadojoe Joe Jr. with @countrycraftfirewood Oak splits. \n\nMarinade Ingredients:\n3 pounds Flap Meat or Skirt Steak\n1 tbsp Beef Flavor Bouillon Powder\n1 tablespoon cumin\n1/2 tablespoon brown sugar\n1 teaspoon each Kosher salt and freshly ground pepper\n1 Lime, juiced\n4 tbsp Soy sauce\n1 can of Mexican lager\n1/2 Red Onion, thinly sliced\n1/2 Bunch of cilantro\n2 Jalapeños, thinly sliced \n\n1. Combine all ingredients and marinate meat for 4-6 hours. \n2. Grill over direct heat using charcoal at around 400-450°\n3. Served with rice, beans, guacamole, sour cream, and grilled green onions. \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcooks #carneasada #mexicanfood #teamread #Kamadojoe #veteransday #holiday #dayoff",
    "description":  "Easy quick marinade to grill up some meat. Cooked up on the @kamadojoe Joe Jr. with @countrycraftfirewood Oak splits.",
    "likes":  0,
    "intro":  [
                  "Easy quick marinade to grill up some meat. Cooked up on the @kamadojoe Joe Jr. with @countrycraftfirewood Oak splits."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds Flap Meat or Skirt Steak",
                                               "1 tbsp Beef Flavor Bouillon Powder",
                                               "1 tablespoon cumin",
                                               "1/2 tablespoon brown sugar",
                                               "1 teaspoon each Kosher salt and freshly ground pepper",
                                               "1 Lime, juiced",
                                               "4 tbsp Soy sauce",
                                               "1 can of Mexican lager",
                                               "1/2 Red Onion, thinly sliced",
                                               "1/2 Bunch of cilantro",
                                               "2 Jalapeños, thinly sliced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate meat for 4-6 hours.",
                  "Grill over direct heat using charcoal at around 400-450°",
                  "Served with rice, beans, guacamole, sour cream, and grilled green onions."
              ]
},
{
    "id":  "smoked-pulled-pork-lumpia",
    "title":  "Smoked Pulled Pork Lumpia",
    "date":  "2024-11-08",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/smoked-pulled-pork-lumpia.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Pulled Pork Lumpia 🇵🇭\n\nThese little appetizers are addicting. Took some smoked pulled pork and replaced the ground beef that I would normally use. Love the slight smokiness and even better with your favorite dipping sauce. \n\nPulled Pork Recipe:\n1 Pork Butt\nMiso paste\nGochujang \n@blazingstarbbq Pork n Rub\n\n1. Lather on the Miso and Gochujang over the entire pork. \n2. Season with rub on all sides, then wrap in seran wrap and place in the refrigerator overnight. \n3. Preheat grill to 275° for indirect cooking and add your favorite wood chunks. \n4. Cook until IT hits about 165° or until you develop a nice bark. \n5. Wrap in foil and cook until IT hits 203° or probe tender. \n6. Let it rest for about an hour before shredding. \n\nLumpia Recipe:\n2 Cups Pulled pork or Ground beef\n2 tbsp Oil\n4 cloves Garlic, chopped\n1 medium Onion, chopped\n1 cup Carrots, or shredded\n1 cup Green Beans, cubed\n2 cups Green Cabbage, shredded\n2 cups Bean Sprouts\n2-3 tbsp Soy Sauce\n1 tbsp Oyster Sauce\nSalt and Pepper, to taste\n1 50ct pack Lumpia/Spring Roll wrappers\n2 cups Oil, for deep-frying\n\n1. Heat the oil in medium high heat and saute the garlic and onions for 1-2 minutes. \n2. Add the carrots, green beans, cabbage, and pulled pork. Stir-fry for about 3 minutes. \n3. Add soy sauce and oyster sauce. \n4. Add the bean sprouts and season with salt and pepper.\n5. Remove from the heat and place in a strainer and cool to room temperature.\n6. Place about 1-2 tablespoon of the filling in the lumpia wrapper and roll. Use water or 1 egg beaten to seal the lumpia. \n7. Fry the lumpia at 350° until golden brown. \n8. Serve with sweet chili sauce or spicy vinegar. \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🥘 @hexclad 12” Wok\n\n#btcooks #pulledpork #lumpia #vegetablelumpia #lumpiashanghai #eggrolls #pulledporklumpia #fusion #Kamadojoe #teamred #hexclad",
    "description":  "These little appetizers are addicting. Took some smoked pulled pork and replaced the ground beef that I would normally use. Love",
    "likes":  0,
    "intro":  [
                  "These little appetizers are addicting. Took some smoked pulled pork and replaced the ground beef that I would normally use. Love the slight smokiness and even better with your favorite dipping sauce. Pulled Pork Recipe: 1 Pork Butt Miso paste Gochujang @blazingstarbbq Pork n Rub"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Season with rub on all sides, then wrap in seran wrap and place in the refrigerator overnight.",
                  "Preheat grill to 275° for indirect cooking and add your favorite wood chunks.",
                  "Cook until IT hits about 165° or until you develop a nice bark.",
                  "Wrap in foil and cook until IT hits 203° or probe tender.",
                  "Let it rest for about an hour before shredding.",
                  "2 Cups Pulled pork or Ground beef",
                  "2 tbsp Oil",
                  "4 cloves Garlic, chopped",
                  "1 medium Onion, chopped",
                  "1 cup Carrots, or shredded",
                  "1 cup Green Beans, cubed",
                  "2 cups Green Cabbage, shredded",
                  "2 cups Bean Sprouts",
                  "2-3 tbsp Soy Sauce",
                  "1 tbsp Oyster Sauce",
                  "Salt and Pepper, to taste",
                  "1 50ct pack Lumpia/Spring Roll wrappers",
                  "2 cups Oil, for deep-frying",
                  "Heat the oil in medium high heat and saute the garlic and onions for 1-2 minutes.",
                  "Add the carrots, green beans, cabbage, and pulled pork. Stir-fry for about 3 minutes.",
                  "Add soy sauce and oyster sauce.",
                  "Add the bean sprouts and season with salt and pepper.",
                  "Remove from the heat and place in a strainer and cool to room temperature.",
                  "Place about 1-2 tablespoon of the filling in the lumpia wrapper and roll. Use water or 1 egg beaten to seal the lumpia.",
                  "Fry the lumpia at 350° until golden brown.",
                  "Serve with sweet chili sauce or spicy vinegar."
              ]
},
{
    "id":  "miso-gochujang-pulled-pork-sliders",
    "title":  "Miso \u0026 Gochujang Pulled Pork Sliders",
    "date":  "2024-11-07",
    "category":  "Pork",
    "image":  "images/recipes/miso-gochujang-pulled-pork-sliders.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Miso \u0026 Gochujang Pulled Pork Sliders\n\nThis was inspired by my boys @tfti.bbq and @406_bbq using Miso paste as a binder. The combination of Miso and Gochujang adds a slight umami flavor and a super bold bark. All seasoned with @blazingstarbbq Pork n Rub and damn this was FIYAH 🔥\n\nAdded the pork on some @kingshawaiian rolls with Kimchi, pickled onions, and chili crunch oil from @momofukugoods\n\nPulled Pork:\n1 Pork Butt\nMiso paste\nGochujang \n@blazingstarbbq Pork n Rub\n\nPickled Red Onions\n1 Medium Red Onion, sliced in 1/8th inch thick\n1/2 cup Red Wine Vinegar \u0026 1/2 cup Rice Vinegar\n1/2 cup Water\n2 tbsp Sugar\n1 Tsp Salt\n1 Bay Leaf\n1 Garlic Clove, Peeled and smashed\n1 tsp Pepper Corn\n\nSliders:\nMayonnaise \nKimchi\nPickled Onions\nChili Crunch Oil\n\n1. Lather on the Miso and Gochujang over the entire pork. \n2. Season with rub on all sides, then wrap in seran wrap and place in the refrigerator overnight. \n3. Preheat grill to 275° for indirect cooking and add your favorite wood chunks. I used oak from @countrycraftfirewood. \n4. Cook until IT of my @meatermade Pro XL hits about 165° or until you develop a nice bark. \n5. Wrap in foil and cook until IT hits 203° or probe tender. \n\n🔥 @kamadojoe Joe Jr. \n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcooks #pulledpork #sliders #pulledporksliders #miso #gochujang #kimchi #fusion #porkbutt #porkshoulder #pickledonions #Kamadojoe #teamred #meater",
    "description":  "This was inspired by my boys @tfti.bbq and @406_bbq using Miso paste as a binder. The combination of Miso and Gochujang adds a",
    "likes":  0,
    "intro":  [
                  "This was inspired by my boys @tfti.bbq and @406_bbq using Miso paste as a binder. The combination of Miso and Gochujang adds a slight umami flavor and a super bold bark. All seasoned with @blazingstarbbq Pork n Rub and damn this was FIYAH 🔥 Added the pork on some @kingshawaiian rolls with Kimchi, pickled onions, and chili crunch oil from @momofukugoods Pulled Pork: 1 Pork Butt Miso paste Gochujang @blazingstarbbq Pork n Rub"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Medium Red Onion, sliced in 1/8th inch thick",
                                               "1/2 cup Red Wine Vinegar \u0026 1/2 cup Rice Vinegar",
                                               "1/2 cup Water",
                                               "2 tbsp Sugar",
                                               "1 Tsp Salt",
                                               "1 Bay Leaf",
                                               "1 Garlic Clove, Peeled and smashed",
                                               "1 tsp Pepper Corn"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lather on the Miso and Gochujang over the entire pork.",
                  "Season with rub on all sides, then wrap in seran wrap and place in the refrigerator overnight.",
                  "Preheat grill to 275° for indirect cooking and add your favorite wood chunks. I used oak from @countrycraftfirewood.",
                  "Cook until IT of my @meatermade Pro XL hits about 165° or until you develop a nice bark.",
                  "Wrap in foil and cook until IT hits 203° or probe tender."
              ]
},
{
    "id":  "cheesesteak-w-smoked-queso",
    "title":  "Cheesesteak w/ Smoked Queso",
    "date":  "2024-11-05",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/cheesesteak-w-smoked-queso.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Cheesesteak w/ Smoked Queso 🧀\n\nCheesesteaks with leftover queso elevated this sandwich. Thinly sliced ribeye seasoned with @blazingstarbbq Beef seasoning and topped off with red and green bell peppers, onions, and mushrooms all served on a sandwich roll. \n\nIngredients\n2 ribeyes, sliced thin\n1 red bell pepper\n1 green bell pepper\n1 onions, sliced\n1 packet of mushrooms\nLeftover queso or your favorite cheese\nSandwich rolls\n\n#btcooks #ribeye #cheesesteak #sandwhich #phillycheesesteak #queso #smokedqueso",
    "description":  "Cheesesteaks with leftover queso elevated this sandwich. Thinly sliced ribeye seasoned with @blazingstarbbq Beef seasoning and",
    "likes":  0,
    "intro":  [
                  "Cheesesteaks with leftover queso elevated this sandwich. Thinly sliced ribeye seasoned with @blazingstarbbq Beef seasoning and topped off with red and green bell peppers, onions, and mushrooms all served on a sandwich roll."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 ribeyes, sliced thin",
                                               "1 red bell pepper",
                                               "1 green bell pepper",
                                               "1 onions, sliced",
                                               "1 packet of mushrooms"
                                           ]
                             }
                         ],
    "steps":  [
                  "Leftover queso or your favorite cheese",
                  "Sandwich rolls"
              ]
},
{
    "id":  "lechon-kare-kare",
    "title":  "Lechon Kare Kare",
    "date":  "2024-11-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/lechon-kare-kare.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lechon Kare Kare 🇵🇭🥜\n\nCrispy pork belly served on top of a peanut butter base stew. Fresh eggplants, long beans, and bok choy all served with steamed rice and side of shrimp paste (Bagoong). 🍻\n\nLechon Ingredients:\n2 lbs pork belly\n1 onion (quartered)\n1 head garlic (smashed)\n4 bay leaves\n2 tbsp black peppercorns\n1 tbsp salt\n1 tbsp chicken bouillon \n1 tbsp soy sauce sauce\n4 cups water\n\n1. In a pot add pork belly, onions, garlic, bay leaves, peppercorns, salt, bouillon, and soy sauce.\n2. Bring to a boil and simmer for 30-45 minutes.\n3. Remove the pork belly and pat dry, letting it cool down to room temperature. \n4. Bake at 300 degrees for 1 hour or until the skin looks dry.\n5. Slice pork belly into 1 inch cubes. \n6. Deep fry at 375 degrees until golden brown and crispy.\n\nKare Kare Ingredients:\nLechon Kawali\n1/4-1/2 cup creamy Peanut butter\n4-5 String beans, cut 3-4 inches long\n6 Baby Bok choy, cut in half\n1 Japanese Eggplant\n2 cups Lechon Kawali Broth, strained\n2 cups Water\n1 tbsp Annatto Powder\n1 tbsp Bagoong (Shrimp Paste)\n2 tbsp Corn starch \u0026 4 tbsp water mixed together\n2 tbsp canola oil\n\n1. Add oil to large wok or pot. \n2. Sauté string beans, bok choy, and eggplant for 5-7 minutes. \n3. Add Lechon broth, peanut butter, Bagoong, and Annatto powder. You want to have a hint of the peanut butter so add more or less as needed. \n4. Mix in corn starch slurry and stir until you have a slightly thick consistency. \n5. Serve over steamed rice and pieces of Lechon Kawali. Enjoy!!! 🤙🏽\n\n🧤@cleanspaceproject\n ————————————————————————\n#btcooks #recipes #filipinofood #lechonkawali #lechon #karekare #fusion #pinoy #phillipines",
    "description":  "Crispy pork belly served on top of a peanut butter base stew. Fresh eggplants, long beans, and bok choy all served with steamed",
    "likes":  0,
    "intro":  [
                  "Crispy pork belly served on top of a peanut butter base stew. Fresh eggplants, long beans, and bok choy all served with steamed rice and side of shrimp paste (Bagoong). 🍻"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs pork belly",
                                               "1 onion (quartered)",
                                               "1 head garlic (smashed)",
                                               "4 bay leaves",
                                               "2 tbsp black peppercorns",
                                               "1 tbsp salt",
                                               "1 tbsp chicken bouillon",
                                               "1 tbsp soy sauce sauce",
                                               "4 cups water"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a pot add pork belly, onions, garlic, bay leaves, peppercorns, salt, bouillon, and soy sauce.",
                  "Bring to a boil and simmer for 30-45 minutes.",
                  "Remove the pork belly and pat dry, letting it cool down to room temperature.",
                  "Bake at 300 degrees for 1 hour or until the skin looks dry.",
                  "Slice pork belly into 1 inch cubes.",
                  "Deep fry at 375 degrees until golden brown and crispy.",
                  "Lechon Kawali",
                  "1/4-1/2 cup creamy Peanut butter",
                  "4-5 String beans, cut 3-4 inches long",
                  "6 Baby Bok choy, cut in half",
                  "1 Japanese Eggplant",
                  "2 cups Lechon Kawali Broth, strained",
                  "2 cups Water",
                  "1 tbsp Annatto Powder",
                  "1 tbsp Bagoong (Shrimp Paste)",
                  "2 tbsp Corn starch \u0026 4 tbsp water mixed together",
                  "2 tbsp canola oil",
                  "Add oil to large wok or pot.",
                  "Sauté string beans, bok choy, and eggplant for 5-7 minutes.",
                  "Add Lechon broth, peanut butter, Bagoong, and Annatto powder. You want to have a hint of the peanut butter so add more or less as needed.",
                  "Mix in corn starch slurry and stir until you have a slightly thick consistency.",
                  "Serve over steamed rice and pieces of Lechon Kawali. Enjoy!!! 🤙🏽"
              ]
},
{
    "id":  "over-the-top-chili",
    "title":  "Over the top Chili",
    "date":  "2024-10-24",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/over-the-top-chili.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Over the top Chili 🥣\n\nThis chili was packed with so much flavor. All that beef flavor dripping down into the veggies and smoked. All seasoned with @blazingstarbbq All in One and Beef Seasoning. \n\nSlicing all the ingredients was so easy with the @benchmadeknifecompany Station Knife. It is so sharp and my favorite tool in the kitchen. \n\n2lbs Sweet Italian Sausage\n3lbs Ground Beef\n1/4lb Bacon, chopped\n1 Green bell pepper, diced\n1 Red bell pepper, diced\n1 Orange bell pepper, diced\n1 Yellow Onion, diced\n6 Cloves of garlic, minced\n12oz Diced Tomato (1 can)\n25.4oz Tomato Sauce (1 can)\n1 tbsp Cumin\n1 tbsp Cayenne Pepper\n1 tbsp Black pepper\n2 tbsp Chili powder\n1 cup Beef broth\n\n1. Sauté bacon, peppers, onions, and garlic, then set aside. \n2. Season meat with Salt and Pepper. \n3. Place sautéed veggies in a pan. \n4. Set aside wire rack on top of pot and add ground beef and sausage links. \n5. Smoke indirect at 275°. \n6. Cook for 2 hours or until internal temperature of my @meatermade Meater Pro XL hits 150°. \n7. Break up the meat into small crumbles and add to the chili. \n8. Slice sausages into 1 inch thick pieces and add to chili. \n9. Add sliced bacon into chili. \n10. Add beef broth, tomato sauce, diced tomatoes, cumin, cayenne, black pepper, and chili powder. Season with Beef rub or Salt and Pepper. \n11. Cook an additional 2 hours or until chili is nice and thick. Do not add more wood for smoke. \n12. Skim off extra fat from the top and serve with diced onions, shredded cheese, and green onions. \n\n🔥 @kamadojoe Big Joe III\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Pro XL \n\n#btcooks #chili #smokedchili #overthetopchili #teamread #Kamadojoe #meater",
    "description":  "This chili was packed with so much flavor. All that beef flavor dripping down into the veggies and smoked. All seasoned with",
    "likes":  0,
    "intro":  [
                  "This chili was packed with so much flavor. All that beef flavor dripping down into the veggies and smoked. All seasoned with @blazingstarbbq All in One and Beef Seasoning. Slicing all the ingredients was so easy with the @benchmadeknifecompany Station Knife. It is so sharp and my favorite tool in the kitchen. 2lbs Sweet Italian Sausage 3lbs Ground Beef 1/4lb Bacon, chopped"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Red bell pepper, diced",
                                               "1 Orange bell pepper, diced",
                                               "1 Yellow Onion, diced",
                                               "6 Cloves of garlic, minced",
                                               "12oz Diced Tomato (1 can)",
                                               "4oz Tomato Sauce (1 can)",
                                               "1 tbsp Cumin",
                                               "1 tbsp Cayenne Pepper",
                                               "1 tbsp Black pepper",
                                               "2 tbsp Chili powder",
                                               "1 cup Beef broth"
                                           ]
                             }
                         ],
    "steps":  [
                  "Sauté bacon, peppers, onions, and garlic, then set aside.",
                  "Season meat with Salt and Pepper.",
                  "Place sautéed veggies in a pan.",
                  "Set aside wire rack on top of pot and add ground beef and sausage links.",
                  "Smoke indirect at 275°.",
                  "Cook for 2 hours or until internal temperature of my @meatermade Meater Pro XL hits 150°.",
                  "Break up the meat into small crumbles and add to the chili.",
                  "Slice sausages into 1 inch thick pieces and add to chili.",
                  "Add sliced bacon into chili.",
                  "Add beef broth, tomato sauce, diced tomatoes, cumin, cayenne, black pepper, and chili powder. Season with Beef rub or Salt and Pepper.",
                  "Cook an additional 2 hours or until chili is nice and thick. Do not add more wood for smoke.",
                  "Skim off extra fat from the top and serve with diced onions, shredded cheese, and green onions."
              ]
},
{
    "id":  "brisket-style-tritip",
    "title":  "Brisket style Tritip",
    "date":  "2024-10-23",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/brisket-style-tritip.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Brisket style Tritip 🔥\n\nSeasoned with @boarsnightout White Lighting and @blazingstarbbq Beef seasoning. Smoked with @countrycraftfirewood Oak. \n\nSliced to perfection using the @benchmadeknifecompany Station Kitchen Knife. This knife is so badass and cuts like butter!\n\n1 Tritip\nMayonnaise \nFavorite seasoning\n\n1. Set smoker to 275° for indirect cooking. \n2. Pull at 160-165° and wrap with butcher paper. \n3. Place back on the grill until internal temp hits 203° or once it is probe tender. \n4. Rest for an hour. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n\n#btcooks #tritip #brisket #trisket #meatermade #Kamadojoe #teamred",
    "description":  "Seasoned with @boarsnightout White Lighting and @blazingstarbbq Beef seasoning. Smoked with @countrycraftfirewood Oak. Sliced to",
    "likes":  0,
    "intro":  [
                  "Seasoned with @boarsnightout White Lighting and @blazingstarbbq Beef seasoning. Smoked with @countrycraftfirewood Oak. Sliced to perfection using the @benchmadeknifecompany Station Kitchen Knife. This knife is so badass and cuts like butter! 1 Tritip Mayonnaise Favorite seasoning"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Pull at 160-165° and wrap with butcher paper.",
                  "Place back on the grill until internal temp hits 203° or once it is probe tender.",
                  "Rest for an hour."
              ]
},
{
    "id":  "smoked-queso-fries",
    "title":  "Smoked Queso Fries",
    "date":  "2024-10-21",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-queso-fries.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Queso Fries 🧀\n\nSmoked Queso on top of fries is FIYAH. Seasoned ground beef with @blazingstarbbq All in One seasoning and fries with Pork n Rub. Smoked using @countrycraftfirewood Premium Oak 🔥\n\nIngredients\n2 Jalapeños, diced\n32 oz Velveeta cheese, cut into blocks\n8 oz Pepper Jack cheese, cut into chunks\n1 block Cream cheese, cut into quarters\n1 can Rotel Tomatoes \u0026 Chili\n16 oz Heavy cream\nFavorite protein (ground beef, brisket or tritip)\nFrench fries or Chips\n\nToppings:\nFavorite meat\nGreen onions, chopped\n2 Tomatoes, diced\n\n1. Add all ingredients into a pan, but save 1/4 of the meat for topping. \n2. Smoke between 280-300° for 1hr. Check at 30 minutes and stir cheese. \n3. Cook for another 30 minutes or until cheese has fully melted. \n4. Serve over French fries and top off with toppings. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🍳 @hexclad 12” Frying Pan\n\n#btcooks #quesofries #queso #nachos #fries #meatermade #Kamadojoe #teamred #hexclad #recipe #gameday #mondaynightfootball",
    "description":  "Smoked Queso on top of fries is FIYAH. Seasoned ground beef with @blazingstarbbq All in One seasoning and fries with Pork n Rub.",
    "likes":  0,
    "intro":  [
                  "Smoked Queso on top of fries is FIYAH. Seasoned ground beef with @blazingstarbbq All in One seasoning and fries with Pork n Rub. Smoked using @countrycraftfirewood Premium Oak 🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 Jalapeños, diced",
                                               "32 oz Velveeta cheese, cut into blocks",
                                               "8 oz Pepper Jack cheese, cut into chunks",
                                               "1 block Cream cheese, cut into quarters",
                                               "1 can Rotel Tomatoes \u0026 Chili",
                                               "16 oz Heavy cream"
                                           ]
                             },
                             {
                                 "heading":  "Toppings",
                                 "items":  [
                                               "Favorite meat",
                                               "Green onions, chopped",
                                               "2 Tomatoes, diced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add all ingredients into a pan, but save 1/4 of the meat for topping.",
                  "Smoke between 280-300° for 1hr. Check at 30 minutes and stir cheese.",
                  "Cook for another 30 minutes or until cheese has fully melted.",
                  "Serve over French fries and top off with toppings."
              ]
},
{
    "id":  "pork-tenderloin-w-prosciutto-provolone",
    "title":  "Pork Tenderloin w/ Prosciutto \u0026 Provolone",
    "date":  "2024-10-18",
    "category":  "Pork",
    "image":  "images/recipes/pork-tenderloin-w-prosciutto-provolone.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pork Tenderloin w/ Prosciutto \u0026 Provolone 🧀\n\nGrilled these on the Joetisserie and basket over lump charcoal at 350° until my @meatermade Pro XL hit 145°. About an hour. Came out juicy and so good! \n\nPork Tenderloin, sliced flat\n1 bunch Parsley, chopped\n1 bunch Cilantro, chopped\nLemon wedges\nCastelvetrano olives, sliced\nSalt\n\nDressing:\n12-15 Castelvetrano olives, chopped\n1 tbsp Calabrian chili paste\n2 tbsp Capers, optional\n4 tbsp Olive oil\n1 Shallot, chopped \n4 Garlic cloves, minced\n1 Lemon, skinned \u0026 chopped\n1 Lemon juice \u0026 Zest\nSalt and pepper \n\nGarnishing: \nGreen onions\nLemon zest\n\nGrilled over lump charcoal at 350° until my @meatermade Pro XL hit 145°. About an hour. \n\n🔥 @kamadojoe Big Joe Series III\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Pro XL\n🧂 @alfrugoni Grilling Salt\n\n#btcooks #homecooking #tenderloin #rotisserie #pork #chimichurri #fusion #bbq #teamred #kamadojoe #meater",
    "description":  "Grilled these on the Joetisserie and basket over lump charcoal at 350° until my @meatermade Pro XL hit 145°. About an hour. Came",
    "likes":  0,
    "intro":  [
                  "Grilled these on the Joetisserie and basket over lump charcoal at 350° until my @meatermade Pro XL hit 145°. About an hour. Came out juicy and so good! Pork Tenderloin, sliced flat 1 bunch Parsley, chopped 1 bunch Cilantro, chopped Lemon wedges Castelvetrano olives, sliced Salt Dressing: 12-15 Castelvetrano olives, chopped"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp Capers, optional",
                                               "4 tbsp Olive oil",
                                               "1 Shallot, chopped",
                                               "4 Garlic cloves, minced",
                                               "1 Lemon, skinned \u0026 chopped",
                                               "1 Lemon juice \u0026 Zest"
                                           ]
                             }
                         ],
    "steps":  [
                  "Salt and pepper",
                  "Green onions",
                  "Lemon zest",
                  "Grilled over lump charcoal at 350° until my @meatermade Pro XL hit 145°. About an hour."
              ]
},
{
    "id":  "brisket-dishes",
    "title":  "Brisket Dishes",
    "date":  "2024-10-15",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/brisket-dishes.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Brisket Dishes 🍴\n\nMultiple dishes made from the past brisket I made. \n\n1. Simple slices of brisket topped off with Chimichurri. \n2. Brisket sliders on Hawaiian bread, mayo, @blazingstarbbq BBQ sauce and pickled red onions. \n3. Brisket fried rice. \n\n#btcooks #homecooking #brisket #hotandfast #lowandslow #beef #smokedmeat #chimichurri #fusion #bbq #sliders #friedrice #Kamadojoe #teamred",
    "description":  "Multiple dishes made from the past brisket I made.",
    "likes":  0,
    "intro":  [
                  "Multiple dishes made from the past brisket I made."
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Brisket sliders on Hawaiian bread, mayo, @blazingstarbbq BBQ sauce and pickled red onions.",
                  "Brisket fried rice."
              ]
},
{
    "id":  "grilled-shrimp-tacos",
    "title":  "Grilled Shrimp Tacos",
    "date":  "2024-10-08",
    "category":  "Seafood",
    "image":  "images/recipes/grilled-shrimp-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Shrimp Tacos 🌮 \n\nQuick and easy shrimp tacos grilled over charcoal and served on warm corn tortillas, topped off with cabbage, avocados, cilantro, and crema. \n\n2-3 pounds of shrimp, peeled and deveined\n@blazingstarbbq All in One Seasoning\nCorn Tortillas\nRed cabbage, sliced thin\nAvocados, sliced\nCilantro\n\nChipotle Crema\n1 cup Mexican Crema or Sour Cream\n1/2 cup Mayonnaise \n2 tbsp Chipotle paste\n1 tbsp Smoked Paprika\n1 lime, juiced\n2 tsp salt\n\n🔥 @nomadgrills Portable Grill\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n\n#btcooks #homecooking #shrimp #tacos #shrimptacos #chipotle #fusion #bbq #baja #mexicanfood #nomadgrills",
    "description":  "Quick and easy shrimp tacos grilled over charcoal and served on warm corn tortillas, topped off with cabbage, avocados,",
    "likes":  0,
    "intro":  [
                  "Quick and easy shrimp tacos grilled over charcoal and served on warm corn tortillas, topped off with cabbage, avocados, cilantro, and crema. 2-3 pounds of shrimp, peeled and deveined @blazingstarbbq All in One Seasoning Corn Tortillas Red cabbage, sliced thin Avocados, sliced Cilantro Chipotle Crema"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 cup Mayonnaise",
                                               "2 tbsp Chipotle paste",
                                               "1 tbsp Smoked Paprika",
                                               "1 lime, juiced",
                                               "2 tsp salt"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "lumpia-shanghai-filipino-eggrolls",
    "title":  "Lumpia Shanghai (Filipino Eggrolls)",
    "date":  "2024-10-04",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/lumpia-shanghai-filipino-eggrolls.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lumpia Shanghai (Filipino Eggrolls) 🇵🇭\n\nYou should already know!!!! This is straight Filipino crack 🤣\n\n1/2 lb Ground beef\n1/2 lb Ground pork\n2-3 Carrots, grated\n1 Onion, finely chopped\n4 Garlic cloves, finely minced\n1 tbsp Sesame oil\n1 tbsp Fish sauce\n1 tbsp Low Sodium Soy sauce\n1/2 tsp Salt\n1/2 tsp White pepper\n1/2 tsp Ground pepper\n2 eggs (1 egg reserved to seal wrappers)\n25 pack Egg Roll Wrapper, cut in half\n\n1. Combine all ingredients into a bowl. \n2. 1 tbsp of filling per wrapper. \n3. Roll and seal with a dab of beaten egg. \n4. Heat oil to 375 degrees and fry until golden brown. \n5. Serve with sweet chilli or sweet and sour sauce. \n \n#btcooks #lumpia #lumpiashanghai #eggrolls #islanderfood #filipinofood #fingerfood #filipino #philippines #deepfried #homecooking",
    "description":  "You should already know!!!! This is straight Filipino crack 🤣 1/2 lb Ground beef 1/2 lb Ground pork 2-3 Carrots, grated",
    "likes":  0,
    "intro":  [
                  "You should already know!!!! This is straight Filipino crack 🤣 1/2 lb Ground beef 1/2 lb Ground pork 2-3 Carrots, grated"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 Garlic cloves, finely minced",
                                               "1 tbsp Sesame oil",
                                               "1 tbsp Fish sauce",
                                               "1 tbsp Low Sodium Soy sauce",
                                               "1/2 tsp Salt",
                                               "1/2 tsp White pepper",
                                               "1/2 tsp Ground pepper",
                                               "2 eggs (1 egg reserved to seal wrappers)",
                                               "25 pack Egg Roll Wrapper, cut in half"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients into a bowl.",
                  "1 tbsp of filling per wrapper.",
                  "Roll and seal with a dab of beaten egg.",
                  "Heat oil to 375 degrees and fry until golden brown.",
                  "Serve with sweet chilli or sweet and sour sauce."
              ]
},
{
    "id":  "smoked-tritip-queso-dip",
    "title":  "Smoked Tritip Queso Dip",
    "date":  "2024-09-30",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-tritip-queso-dip.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Tritip Queso Dip 🧀\n\n* 1 block of cream cheese\n* 1 block of Velveeta cheese (32 oz) or your favorite cheese. \n* 1 can low sodium cream of mushroom\n* 1/4 cup milk \n* 2 tomatoes, diced\n* Favorite cooked protein (tritip, brisket, or ground beef)\n* 2 Jalapeños, cored and diced\n* 2 Green onions, chopped \n* @BlazingStarBBQ Pork n Rub\n\n1. Add cheese, cream of mushroom, milk, and protein into a pan. \n2. Lightly drizzle seasoning over cheese. \n3. Place on grill indirect and smoke at 300°, about 45 minutes or until cheese has melted. \n4. Add Jalapeños, tomatoes, and mix melted cheese together, cook for another 15 minutes. \n5. Top off with fresh green onions. \n6. Serve with tortilla chips and enjoy! 🍻\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @meatermade Meater Pro XL\n🧤 @cleanspaceproject Nitrile Gloves\n ————————————————————————\n#btcooks #tritip #smokedqueso #dip #gameday #teamred #kamadojoe #meater",
    "description":  "* 1 block of cream cheese",
    "likes":  0,
    "intro":  [
                  "* 1 block of cream cheese"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 can low sodium cream of mushroom",
                                               "* 1/4 cup milk",
                                               "* 2 tomatoes, diced",
                                               "* 2 Jalapeños, cored and diced"
                                           ]
                             }
                         ],
    "steps":  [
                  "* 2 Green onions, chopped",
                  "* @BlazingStarBBQ Pork n Rub",
                  "Add cheese, cream of mushroom, milk, and protein into a pan.",
                  "Lightly drizzle seasoning over cheese.",
                  "Place on grill indirect and smoke at 300°, about 45 minutes or until cheese has melted.",
                  "Add Jalapeños, tomatoes, and mix melted cheese together, cook for another 15 minutes.",
                  "Top off with fresh green onions.",
                  "Serve with tortilla chips and enjoy! 🍻"
              ]
},
{
    "id":  "crispy-scorpion-wings",
    "title":  "Crispy Scorpion Wings",
    "date":  "2024-09-25",
    "category":  "Wings",
    "image":  "images/recipes/crispy-scorpion-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Crispy Scorpion Wings 🪽\n\nRotisserie wings are FIYAH 🔥 \nAll cooked on the Kamado Joe using the Joetisserie and basket. \n\nIngredients:\n3-4 pounds chicken wings\n1 1/2 cups all-purpose flour\n2 tsp cornstarch\n1 tsp baking powder\n2 tsp smoked paprika\n1 tsp Italian seasoning\n1 tbsp salt\n1/2 tsp garlic powder\n1/2 tsp onion powder\n1/2 tsp black pepper\n@blazingstarbbq Scorpion Rub\nOlive oil\n\n1. Combine all ingredients. \n2. Spray chicken with cooking oil before placing on the grill.\n3. Grill indirect at 350° for 30-45 minutes\n4. Bump up heat to 400° and spread coals directly under and cook until crispy. \n\nCilantro Dressing:\nBundle of Cilantro\n1 cup of Mayonnaise \n1 garlic clove\n1/2 tbsp salt\n1 tsp back pepper\n1 lime, juiced\n\n1. Combine all ingredients in a blender until smooth. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n ————————————————————————\n#btcooks #rotisserie #chickenwings #rotisseriewings #teamred #kamadojoe",
    "description":  "Rotisserie wings are FIYAH 🔥 All cooked on the Kamado Joe using the Joetisserie and basket.",
    "likes":  0,
    "intro":  [
                  "Rotisserie wings are FIYAH 🔥 All cooked on the Kamado Joe using the Joetisserie and basket."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 pounds chicken wings",
                                               "1 1/2 cups all-purpose flour",
                                               "2 tsp cornstarch",
                                               "1 tsp baking powder",
                                               "2 tsp smoked paprika",
                                               "1 tsp Italian seasoning",
                                               "1 tbsp salt",
                                               "1/2 tsp garlic powder",
                                               "1/2 tsp onion powder",
                                               "1/2 tsp black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients.",
                  "Spray chicken with cooking oil before placing on the grill.",
                  "Grill indirect at 350° for 30-45 minutes",
                  "Bump up heat to 400° and spread coals directly under and cook until crispy.",
                  "Bundle of Cilantro",
                  "1 cup of Mayonnaise",
                  "1 garlic clove",
                  "1/2 tbsp salt",
                  "1 tsp back pepper",
                  "1 lime, juiced",
                  "Combine all ingredients in a blender until smooth."
              ]
},
{
    "id":  "adobo-ribs-or-chamorro-bbq-ribs",
    "title":  "Adobo Ribs or Chamorro BBQ Ribs",
    "date":  "2024-09-20",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/adobo-ribs-or-chamorro-bbq-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Adobo Ribs or Chamorro BBQ Ribs 🇵🇭🇬🇺\n\nPork Adobo marinated ribs or Guamanian BBQ ribs. Call it what you want it’s the same ingredients but taste so damn good! 🍻🤙🏽\n\nSmoked on the @nomadgrills indirect at 250 degrees for 2 hours, then seared over lump charcoal and Guava Strawberry wood chunks. \n\nIngredients \n1 Rack Spareribs\n1/2 cup Soy Sauce\n1/2 cup Vinegar\n1 head garlic cloves, smashed \n1 Small onion, sliced\n1/2 Brown sugar\n1 tsp Chicken bouillon powder\n1 tsp Black pepper\n\nCombine all Ingredients together and marinate for at least 4-6 hours, preferably overnight. \n\n🔥 @nomadgrills Portable Grill \u0026 Smoker\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n ————————————————————————\n#btcooks #guamanianfood #filipinofood #porkadobo #chamorro #pinoy",
    "description":  "Pork Adobo marinated ribs or Guamanian BBQ ribs. Call it what you want it’s the same ingredients but taste so damn good! 🍻🤙🏽",
    "likes":  0,
    "intro":  [
                  "Pork Adobo marinated ribs or Guamanian BBQ ribs. Call it what you want it’s the same ingredients but taste so damn good! 🍻🤙🏽 Smoked on the @nomadgrills indirect at 250 degrees for 2 hours, then seared over lump charcoal and Guava Strawberry wood chunks."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Rack Spareribs",
                                               "1/2 cup Soy Sauce",
                                               "1/2 cup Vinegar",
                                               "1 head garlic cloves, smashed",
                                               "1 Small onion, sliced",
                                               "1/2 Brown sugar",
                                               "1 tsp Chicken bouillon powder",
                                               "1 tsp Black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all Ingredients together and marinate for at least 4-6 hours, preferably overnight."
              ]
},
{
    "id":  "chicken-lettuce-wraps",
    "title":  "Chicken Lettuce Wraps",
    "date":  "2024-09-17",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-lettuce-wraps.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Lettuce Wraps 🐓🌯\n\nLettuce wrap on the Kamado Joe! Straight cooked these right on the grill and it came out so good! \n\nIngredients:\n1 Tbs Olive Oil\n2 Pounds Ground chicken or ground turkey\n1 Medium Onion, diced\n1 8-ounce can water chestnut, diced\n1 Knob Fresh Ginger, minced\n3 Garlic cloves, minced\n3 Green onions, sliced\n2 Cups Shitake mushrooms, diced\nSalt and pepper\n\nSauce:\n1/3 Cup Oyster Sauce or Hoisin Sauce\n2 Tbs low sodium soy sauce\n1 Tbs Rice wine vinegar\n1 Tbs Chili Oil\n1 Tbs Sesame Oil\n\nDipping sauce:\n4 Tbs low sodium soy sauce\n2 Tbs Rice wine vinegar\n1 Tbs Sesame Oil\n1 Tbs Chili Oil\n\n1. Combine all of the sauce ingredients and set aside. \n2. Over high heat, heat your pot or large wok with Oil. \n3. Brown ground chicken and lightly season with salt and pepper. \n4. Add the remaining fresh ingredients and cook for 2-3 minutes.\n5. Add sauce and cook for another 3-5 minutes making sure to mix well. \n6. Serve with Butter Lettuce and top off with some dipping sauce. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n ————————————————————————\n#btcooks #chicken #lettucewraps #wok #kamadojoe #teamred",
    "description":  "Lettuce wrap on the Kamado Joe! Straight cooked these right on the grill and it came out so good!",
    "likes":  0,
    "intro":  [
                  "Lettuce wrap on the Kamado Joe! Straight cooked these right on the grill and it came out so good!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Tbs Olive Oil",
                                               "2 Pounds Ground chicken or ground turkey",
                                               "1 Medium Onion, diced",
                                               "1 8-ounce can water chestnut, diced",
                                               "1 Knob Fresh Ginger, minced",
                                               "3 Garlic cloves, minced",
                                               "3 Green onions, sliced",
                                               "2 Cups Shitake mushrooms, diced"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "1/3 Cup Oyster Sauce or Hoisin Sauce",
                                               "2 Tbs low sodium soy sauce",
                                               "1 Tbs Rice wine vinegar",
                                               "1 Tbs Chili Oil",
                                               "1 Tbs Sesame Oil"
                                           ]
                             },
                             {
                                 "heading":  "Dipping sauce",
                                 "items":  [
                                               "4 Tbs low sodium soy sauce",
                                               "2 Tbs Rice wine vinegar",
                                               "1 Tbs Sesame Oil",
                                               "1 Tbs Chili Oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all of the sauce ingredients and set aside.",
                  "Over high heat, heat your pot or large wok with Oil.",
                  "Brown ground chicken and lightly season with salt and pepper.",
                  "Add the remaining fresh ingredients and cook for 2-3 minutes.",
                  "Add sauce and cook for another 3-5 minutes making sure to mix well.",
                  "Serve with Butter Lettuce and top off with some dipping sauce."
              ]
},
{
    "id":  "grilled-chicken-sisig",
    "title":  "Grilled Chicken Sisig",
    "date":  "2024-09-05",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-chicken-sisig.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Chicken Sisig 🐓🇵🇭\n\nTypically made with deep fried pork belly (Lechon Kawali), but made this batch with grilled BBQ Chicken. Perfect dish to go with a cold beer 🍻\n\nBBQ Chicken Marinade\n* 3-4 lbs Chicken thighs \n* 1/2 cup soy sauce\n* 4 cloves garlic, chopped\n* 2 tablespoon calamansi or 1 lemon juice\n* 1 tbsp chicken bouillon \n* 1/2 tbsp black pepper\n\nSisig Ingredients \n* BBQ Chicken, chopped\n* 1 medium red bell pepper, diced\n* 1 medium green bell pepper, diced\n* 4 stalks green onions, chopped\n* 1 red onion, diced\n* 1/4 cup calamansi or 2 lemons, juiced\n* 1 tbsp chicken bouillon\n* 1 tbsp low sodium soy sauce\n* 2 tbsp mayonnaise \n* 1/2 - 1 tbsp Dried chili flakes, (optional)\n* salt and pepper to taste\n\n1. Marinate chicken for 4-6 hours. \n2. Bbq chicken over charcoal. \n3. Once cooked, set aside then chop meat into chunks. \n4. In a skillet on medium high heat, add a tablespoon of olive oil and cook half of the chopped onions, bell peppers. \n5. Add the chicken back in and add calamansi or lemon juice, soy sauce, bouillon, and mayonnaise. \n6. Transfer to a plate excluding any liquid that may have developed in the pan and garnish with fresh onions, green onions, and chicharron. \n7. Serve with a side of steamed rice. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🍳 @hexclad 12” Wok\n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #easyrecipes #recipes #asianfood #marinatedmeat #grilled #bbqporn #meatporn #chicken #thighs #meat #sisig #pinoy #filipinofood #islanderfood #philippines #grilledchicken #chickensisig #hexclad #teamred #Kamadojoe",
    "description":  "Typically made with deep fried pork belly (Lechon Kawali), but made this batch with grilled BBQ Chicken. Perfect dish to go with",
    "likes":  0,
    "intro":  [
                  "Typically made with deep fried pork belly (Lechon Kawali), but made this batch with grilled BBQ Chicken. Perfect dish to go with a cold beer 🍻 BBQ Chicken Marinade"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1/2 cup soy sauce",
                                               "* 4 cloves garlic, chopped",
                                               "* 2 tablespoon calamansi or 1 lemon juice",
                                               "* 1 tbsp chicken bouillon",
                                               "* 1/2 tbsp black pepper",
                                               "Sisig Ingredients",
                                               "* BBQ Chicken, chopped",
                                               "* 1 medium red bell pepper, diced"
                                           ]
                             }
                         ],
    "steps":  [
                  "* 1 medium green bell pepper, diced",
                  "* 4 stalks green onions, chopped",
                  "* 1 red onion, diced",
                  "* 1/4 cup calamansi or 2 lemons, juiced",
                  "* 1 tbsp chicken bouillon",
                  "* 1 tbsp low sodium soy sauce",
                  "* 2 tbsp mayonnaise",
                  "* 1/2 - 1 tbsp Dried chili flakes, (optional)",
                  "* salt and pepper to taste",
                  "Marinate chicken for 4-6 hours.",
                  "Bbq chicken over charcoal.",
                  "Once cooked, set aside then chop meat into chunks.",
                  "In a skillet on medium high heat, add a tablespoon of olive oil and cook half of the chopped onions, bell peppers.",
                  "Add the chicken back in and add calamansi or lemon juice, soy sauce, bouillon, and mayonnaise.",
                  "Transfer to a plate excluding any liquid that may have developed in the pan and garnish with fresh onions, green onions, and chicharron.",
                  "Serve with a side of steamed rice."
              ]
},
{
    "id":  "pig-shots-with-pog-bbq-sauce",
    "title":  "Pig Shots with POG BBQ Sauce",
    "date":  "2024-09-02",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/pig-shots-with-pog-bbq-sauce.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pig Shots with POG BBQ Sauce 🐷🥃\n\nSeasoned with Blazing Star Pork n Rub and Reaper seasoning, then topped off with Smokey BBQ sauce with POG Syrup from our friends at Da Kine Hawaiian. 🤙🏽\n\nIngredients\n8 oz cream cheese, softened at room temp\n¼ cup Shredded Triple Cheddar \n2 Jalapeños, diced\n1 tbsp Blazing Star Pork n Rub Seasoning \n1 tbsp Blazing Star Reaper Seasoning\n12 oz Andouille Sausage\n1 pack of bacon, sliced in half\n\nBBQ Sauce:\n1/2 cup Favorite BBQ sauce\n2-3 tbsp Da Kine Hawaiian POG Syrup\n\nInstructions\n1. Cut the Sausage into 1 inch pieces and wrap the bacon around the Sausage so it forms a shot glass. Take a toothpick and secure the bacon and the sausage.\n2. Take the softened cream cheese, triple cheddar, diced jalapeños and the bbq rubs and mix together in a bowl until well combine.\n3. Place the mixture into a piping bag or a ziplock bag. \n4. Pipe the mixture into the shot until it is just below the top of the bacon.\n5. Dust some extra Reaper seasoning over each pig shot. \n6. Set smoker to 350 and smoke for about 30-45 minutes.\n7. Mix together BBQ sauce and mop it over each shot, cook for another 5 minutes. \n8. Remove from grill and rest for 5-10 before serving. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Gloves \n🧂 Seasonings and Sauces:\n@blazingstarbbq Pork n Rub and Reaper Seasoning\n@dkhawaiian Smokey BBQ Sauce and POG Syrup\n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilledmeat #meatporn #meat #pigshots #bacon #sausage #pog #teamred #Kamadojoe #bites #gamedaybites #laborday #labordayweekend",
    "description":  "Seasoned with Blazing Star Pork n Rub and Reaper seasoning, then topped off with Smokey BBQ sauce with POG Syrup from our",
    "likes":  0,
    "intro":  [
                  "Seasoned with Blazing Star Pork n Rub and Reaper seasoning, then topped off with Smokey BBQ sauce with POG Syrup from our friends at Da Kine Hawaiian. 🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "8 oz cream cheese, softened at room temp",
                                               "cup Shredded Triple Cheddar",
                                               "2 Jalapeños, diced",
                                               "1 tbsp Blazing Star Pork n Rub Seasoning",
                                               "1 tbsp Blazing Star Reaper Seasoning",
                                               "12 oz Andouille Sausage",
                                               "1 pack of bacon, sliced in half"
                                           ]
                             },
                             {
                                 "heading":  "BBQ Sauce",
                                 "items":  [
                                               "1/2 cup Favorite BBQ sauce",
                                               "2-3 tbsp Da Kine Hawaiian POG Syrup"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cut the Sausage into 1 inch pieces and wrap the bacon around the Sausage so it forms a shot glass. Take a toothpick and secure the bacon and the sausage.",
                  "Take the softened cream cheese, triple cheddar, diced jalapeños and the bbq rubs and mix together in a bowl until well combine.",
                  "Place the mixture into a piping bag or a ziplock bag.",
                  "Pipe the mixture into the shot until it is just below the top of the bacon.",
                  "Dust some extra Reaper seasoning over each pig shot.",
                  "Set smoker to 350 and smoke for about 30-45 minutes.",
                  "Mix together BBQ sauce and mop it over each shot, cook for another 5 minutes.",
                  "Remove from grill and rest for 5-10 before serving."
              ]
},
{
    "id":  "smoked-oxtail-pho",
    "title":  "Smoked Oxtail Pho",
    "date":  "2024-08-29",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/smoked-oxtail-pho.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Oxtail Pho 🍲\n\nOxtails and Pho!!! Gotta give this a try. The smokiness from the meat combined with the savory broth is just perfect. \n\nIngredients:\n2-3 lbs beef Oxtails cut and trimmed\nFavorite Beef Seasoning\n\nBraising:\n2 cups Pho broth\n\n1. Season meat liberally with favorite seasoning and let sit for 1 hour before cooking. \n2. Preheat your grill to 250 and smoke meat for 3-4 hours or until IT hits 200-203.\n3. Remove meat and place into a roasting pan. \n4. Add broth and cover with aluminum foil. \n5. Place back into smoker and cook for another 3 hours. \u2028\nBroth\n1 lb beef bones or marrow bones\u202812 cups water\n3 knobs ginger\n1 large onion, halved\n1 small daikon, peeled and cut into 1-inch thick slices\n2 carrots\n2 tbsp sugar or rock sugar\n2 tbsp beef bouillon powder\n2 tbsp fish sauce\n4 tbsp Pho Soup Base with seasoning packet (Quoc Viet Foods), add more as needed. \n\n1. Boil all ingredients in a large stock pot for 3 hours. \n2. Using a strainer, discard all solids. \n3. Serve with your favorite meat and noodles, garnish with thin sliced onions, green onions, bean sprouts, cilantro, jalapeños, and lime. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilledmeat #meatporn #meat #vietnamese #vietnamesefood #soup #broth #oxtailsoup #pho #comfortfood #noodles #teamred #kamadojoe",
    "description":  "Oxtails and Pho!!! Gotta give this a try. The smokiness from the meat combined with the savory broth is just perfect.",
    "likes":  0,
    "intro":  [
                  "Oxtails and Pho!!! Gotta give this a try. The smokiness from the meat combined with the savory broth is just perfect."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 lbs beef Oxtails cut and trimmed"
                                           ]
                             },
                             {
                                 "heading":  "Braising",
                                 "items":  [
                                               "2 cups Pho broth"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season meat liberally with favorite seasoning and let sit for 1 hour before cooking.",
                  "Preheat your grill to 250 and smoke meat for 3-4 hours or until IT hits 200-203.",
                  "Remove meat and place into a roasting pan.",
                  "Add broth and cover with aluminum foil.",
                  "Place back into smoker and cook for another 3 hours.",
                  "Broth",
                  "1 lb beef bones or marrow bones 12 cups water",
                  "3 knobs ginger",
                  "1 large onion, halved",
                  "1 small daikon, peeled and cut into 1-inch thick slices",
                  "2 carrots",
                  "2 tbsp sugar or rock sugar",
                  "2 tbsp beef bouillon powder",
                  "2 tbsp fish sauce",
                  "4 tbsp Pho Soup Base with seasoning packet (Quoc Viet Foods), add more as needed.",
                  "Boil all ingredients in a large stock pot for 3 hours.",
                  "Using a strainer, discard all solids.",
                  "Serve with your favorite meat and noodles, garnish with thin sliced onions, green onions, bean sprouts, cilantro, jalapeños, and lime."
              ]
},
{
    "id":  "smoked-sinigang-ribs",
    "title":  "Smoked Sinigang Ribs",
    "date":  "2024-08-27",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/smoked-sinigang-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Sinigang Ribs 🇵🇭🐖\n\nHot and fast baby back ribs seasoned with Tamarind powder (Sinigang) then topped off with a squeeze of fresh lime juice. \n\n1 packed Sinigang Powder\n1 rack Pork Back Ribs\nOlive oil\n1 lime\n\n1. Lather up with olive oil. \n2. Season ribs with Sinigang powder and let sit for 30 minutes. \n3. Set grill to 300° over direct charcoal. This will crisp up the bottom membrane and overall cook. \n4. Flip ribs every 30 minutes until internal temp hits 203°. Overall cook took about 3 hours. \n5. Let it rest for 10-15 minutes. \n6. Slice and squeeze lime juice. \n\nServe with side of steamed rice and spiced vinegar. \n\n🔥 @kamadojoe Big Joe Series III\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n🌡️ @meatermade Meater Block\n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilledmeat #meatporn #meat #pork #babybackribs #sinigangribs #sinigang #pinoy #filipinofood #meater #teamred #kamadojoe",
    "description":  "Hot and fast baby back ribs seasoned with Tamarind powder (Sinigang) then topped off with a squeeze of fresh lime juice. 1",
    "likes":  0,
    "intro":  [
                  "Hot and fast baby back ribs seasoned with Tamarind powder (Sinigang) then topped off with a squeeze of fresh lime juice. 1 packed Sinigang Powder 1 rack Pork Back Ribs Olive oil"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Lather up with olive oil.",
                  "Season ribs with Sinigang powder and let sit for 30 minutes.",
                  "Set grill to 300° over direct charcoal. This will crisp up the bottom membrane and overall cook.",
                  "Flip ribs every 30 minutes until internal temp hits 203°. Overall cook took about 3 hours.",
                  "Let it rest for 10-15 minutes.",
                  "Slice and squeeze lime juice.",
                  "Serve with side of steamed rice and spiced vinegar."
              ]
},
{
    "id":  "smoked-kalua-pork",
    "title":  "Smoked Kalua Pork",
    "date":  "2024-08-20",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/smoked-kalua-pork.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Kalua Pork 🤙🏽\n\nEasy way to make Kalua pork on any smoker. Banana leaves are the key to making this Islander dish. \n\nKiawe or Mesquite Wood chunks\n4 lb pork shoulder, or Boston butt\n2-3 tbsp Hawaiian sea salt or regular sea salt \nBanana Leaves\nCabbage, chopped\n\n1. Preheat smoker to 250-300°. \n2. Rub the sea salt into the pork and wrap it in banana leaves.\n3. Add Kiawe or Mesquite wood chunks and smoke until it has reached an internal temperature of 203°. \n4. Remove the meat from the smoker and let it rest for 30-60 minutes before unwrapping and shredding. Discard any large chunks of fat before shredding. \n5. Add, chopped cabbage, salt to taste, and cover for 5-10 minutes. \n \n \n🧤 @cleanspaceproject Black Nitrile Gloves\n🌡️ @meatermade Meater Block\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n ————————————————————————\n#btcooks #yummyfood #tastyfood #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #backyardgrilling #grilledmeat #meatporn #meat #outdoorcooking #foodporn #recipes #islanderbbq #hawaii #aloha #lechon #roastedpig #pork #kaluapork #smokedpork #porkbutt #meater #teamred #kamadojoe",
    "description":  "Easy way to make Kalua pork on any smoker. Banana leaves are the key to making this Islander dish. Kiawe or Mesquite Wood chunks",
    "likes":  0,
    "intro":  [
                  "Easy way to make Kalua pork on any smoker. Banana leaves are the key to making this Islander dish. Kiawe or Mesquite Wood chunks"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 tbsp Hawaiian sea salt or regular sea salt",
                                               "Banana Leaves"
                                           ]
                             }
                         ],
    "steps":  [
                  "Preheat smoker to 250-300°.",
                  "Rub the sea salt into the pork and wrap it in banana leaves.",
                  "Add Kiawe or Mesquite wood chunks and smoke until it has reached an internal temperature of 203°.",
                  "Remove the meat from the smoker and let it rest for 30-60 minutes before unwrapping and shredding. Discard any large chunks of fat before shredding.",
                  "Add, chopped cabbage, salt to taste, and cover for 5-10 minutes."
              ]
},
{
    "id":  "bacon-wrapped-jalapeno-poppers",
    "title":  "Bacon Wrapped Jalapeno Poppers ️",
    "date":  "2024-08-15",
    "category":  "Pork",
    "image":  "images/recipes/bacon-wrapped-jalapeno-poppers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bacon Wrapped Jalapeno Poppers 🌶️🥓\n\nBacon wrapped Jalapeno’s poppers, inspired by @tfti.bbq . These may not be Texas twinkies, but they were so damn good. Jalapeños stuffed with left over smoked tritip, cream cheese, cheddar cheese, and seasoned with @blazingstarbbq Pork n Rub. \n\nIngredients \u0026 Recipe\n1 lb Jalapeno peppers, cut in half and cored\nSmoked tritip or any left over bbq meat\n1 8oz block Cream Cheese, room temp\n1 package Bacon\n1/2 cup Cheddar or Pepper Jack shredded cheese\nFavorite pork rub \nFavorite bbq sauce\n\n1. Combine meat, cream cheese, shredded cheese, and green onions in a bowl and mix well. \n2. Spoon in a generous layer of cheese mixture inside pepper. \n3. Wrap pepper with bacon. \n4. Lightly season with rub. \n5. Smoke indirect at 250° for 1 hour and 30 minutes. \n6. Lather your favorite bbq sauce on top and cook for another 5-10 minutes. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilledmeat #meatporn #meat #popper #jalapenopoppers #bacon ##bbqsauce #tritip #teamred #Kamadojoe #appetizer",
    "description":  "Bacon wrapped Jalapeno’s poppers, inspired by @tfti.bbq . These may not be Texas twinkies, but they were so damn good. Jalapeños",
    "likes":  0,
    "intro":  [
                  "Bacon wrapped Jalapeno’s poppers, inspired by @tfti.bbq . These may not be Texas twinkies, but they were so damn good. Jalapeños stuffed with left over smoked tritip, cream cheese, cheddar cheese, and seasoned with @blazingstarbbq Pork n Rub."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 lb Jalapeno peppers, cut in half and cored",
                                               "Smoked tritip or any left over bbq meat",
                                               "1 8oz block Cream Cheese, room temp",
                                               "1 package Bacon",
                                               "1/2 cup Cheddar or Pepper Jack shredded cheese"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine meat, cream cheese, shredded cheese, and green onions in a bowl and mix well.",
                  "Spoon in a generous layer of cheese mixture inside pepper.",
                  "Wrap pepper with bacon.",
                  "Lightly season with rub.",
                  "Smoke indirect at 250° for 1 hour and 30 minutes.",
                  "Lather your favorite bbq sauce on top and cook for another 5-10 minutes."
              ]
},
{
    "id":  "chicken-afritada",
    "title":  "Chicken Afritada",
    "date":  "2024-08-12",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/chicken-afritada.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Afritada 🇵🇭\n\nFilipino chicken stew served with steamed rice. 🤙🏽\n\nIngredients\n2 lbs chicken, cut into pieces\n1 large potato, quartered\n1 large carrot, sliced\n1 large bell pepper, sliced\n1 cup green peas\n8 ounces tomato sauce\n4 cloves garlic, minced\n4 pieces hotdogs, sliced\n1 medium onion, diced\n1 1/4 cups chicken broth\n2-3 pieces dried bay leaves\n1 tsp sugar or banana ketchup (optional)\n1 tablespoons fish sauce (optional)\n4 tablespoons cooking oil\nSalt and ground black pepper to taste\n\n1. Under medium high meat add oil and Pan-fry the chicken seasoning with salt and pepper. \n2. Remove the chicken and set aside.\n3. Sauté garlic and onions. \n4. Add sliced hotdogs and chicken. \n5. Add tomato sauce, chicken broth, and bay leaves. Simmer for 30 to 40 minutes with lid on. \n6. Add the potato and carrots then simmer for 10 minutes until soft.\n7. Add the bell pepper, green peas, and sugar. Cook for 5 minutes. \n8. Add salt and pepper to taste. \n9. Serve with steamed rice. \n\n🥘 @hexclad 12” Wok\n🧤 @cleanspaceproject Black Nitrile Gloves \n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #easyrecipes #recipes #filipinofood #pinoy #islanderfood #asianfood #umami #grilled #panseared #stew #chicken #chickenstew #meat #thighs #afritada #chickenafritada #hexclad #meatlovers",
    "description":  "Filipino chicken stew served with steamed rice. 🤙🏽",
    "likes":  0,
    "intro":  [
                  "Filipino chicken stew served with steamed rice. 🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs chicken, cut into pieces",
                                               "1 large potato, quartered",
                                               "1 large carrot, sliced",
                                               "1 large bell pepper, sliced",
                                               "1 cup green peas",
                                               "8 ounces tomato sauce",
                                               "4 cloves garlic, minced",
                                               "4 pieces hotdogs, sliced",
                                               "1 medium onion, diced",
                                               "1 1/4 cups chicken broth",
                                               "2-3 pieces dried bay leaves",
                                               "1 tsp sugar or banana ketchup (optional)",
                                               "1 tablespoons fish sauce (optional)",
                                               "4 tablespoons cooking oil",
                                               "Salt and ground black pepper to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Under medium high meat add oil and Pan-fry the chicken seasoning with salt and pepper.",
                  "Remove the chicken and set aside.",
                  "Sauté garlic and onions.",
                  "Add sliced hotdogs and chicken.",
                  "Add tomato sauce, chicken broth, and bay leaves. Simmer for 30 to 40 minutes with lid on.",
                  "Add the potato and carrots then simmer for 10 minutes until soft.",
                  "Add the bell pepper, green peas, and sugar. Cook for 5 minutes.",
                  "Add salt and pepper to taste.",
                  "Serve with steamed rice."
              ]
},
{
    "id":  "bistek-tagalog-filipino-beef-steak",
    "title":  "Bistek Tagalog - Filipino Beef Steak",
    "date":  "2024-08-02",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/bistek-tagalog-filipino-beef-steak.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bistek Tagalog - Filipino Beef Steak 🇵🇭\n\nFilipino dish consisting of thinly sliced beef braised in soy sauce, calamansi juice, garlic, ground black pepper, and onions cut into rings. Served with steamed rice, So damn good 🍻🤙🏽\n\nIngredients \u0026 Recipe:\nMarinade\n3 lbs Chuck Steaks, sliced thinly\n1/4 cup juiced Calamansi or Lemon \n1 head garlic, peeled and crushed\n1/3 cup low sodium soy sauce\n1/2 tbsp Beef Bouillon \n1/2 tsp onion powder\n1/2 tsp black pepper\n\n2 tbsp Butter\n1 tbsp Olive Oil\n1 cup water\n1 large onion, peeled and sliced into rings\nSalt and pepper for seasoning, as needed\n\n1. Marinate sliced chuck steaks with calamansi or lemon juice, garlic, onion powder, beef bouillon, and soy sauce for 1-2 hours. \n2. In a pot under Medium heat, add water and entire contents of marinade. Cook for 45 minutes or until meat is tender. \n3. Strain liquid into a bowl and set aside. \n4. Heat pot under medium-high heat with butter and oil. \n5. Add strained contents into pot and sear meat until a crust is formed on each side. \n6. Add reserved marinade and water into pot, cover and simmer for about 5 minutes.\n7. Add sliced onion rings. Season with salt as needed, cover and cook for an additional 3-5 minutes. \n8. Serve with steamed rice. \n\n🥘 @hexclad 5.5qt Sauté Pan\n🧤 @cleanspaceproject Black Nitrile Gloves \n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #easyrecipes #recipes #filipinofood #pinoy #islanderfood #asianfood #umami #grilled #panseared #braised #beef #meat #chuckroast #steak #bistek #beefsteak #hexclad #meatlovers",
    "description":  "Filipino dish consisting of thinly sliced beef braised in soy sauce, calamansi juice, garlic, ground black pepper, and onions",
    "likes":  0,
    "intro":  [
                  "Filipino dish consisting of thinly sliced beef braised in soy sauce, calamansi juice, garlic, ground black pepper, and onions cut into rings. Served with steamed rice, So damn good 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Marinade",
                                 "items":  [
                                               "3 lbs Chuck Steaks, sliced thinly",
                                               "1/4 cup juiced Calamansi or Lemon",
                                               "1 head garlic, peeled and crushed",
                                               "1/3 cup low sodium soy sauce",
                                               "1/2 tbsp Beef Bouillon",
                                               "1/2 tsp onion powder",
                                               "1/2 tsp black pepper",
                                               "2 tbsp Butter",
                                               "1 tbsp Olive Oil",
                                               "1 cup water",
                                               "1 large onion, peeled and sliced into rings"
                                           ]
                             }
                         ],
    "steps":  [
                  "Marinate sliced chuck steaks with calamansi or lemon juice, garlic, onion powder, beef bouillon, and soy sauce for 1-2 hours.",
                  "In a pot under Medium heat, add water and entire contents of marinade. Cook for 45 minutes or until meat is tender.",
                  "Strain liquid into a bowl and set aside.",
                  "Heat pot under medium-high heat with butter and oil.",
                  "Add strained contents into pot and sear meat until a crust is formed on each side.",
                  "Add reserved marinade and water into pot, cover and simmer for about 5 minutes.",
                  "Add sliced onion rings. Season with salt as needed, cover and cook for an additional 3-5 minutes.",
                  "Serve with steamed rice."
              ]
},
{
    "id":  "grilled-lamb-chops",
    "title":  "Grilled Lamb Chops",
    "date":  "2024-07-31",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/grilled-lamb-chops.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Lamb Chops 🐑\n\nGrilled little meat sticks lightly seasoned with Salt, Pepper, and Garlic. \n\nGrilled at 300-350° to develop a crispy crust. I like my meat medium, so when internal temps hit 130° remove from grill and rest for 10 minutes. Slice between the bones and return back to the grill to give it a nice sear on all sides.\n\nTop off with a squeeze of lime juice and Al Frugoni’s Chimichurri mix. @alfrugoni \n\nIngredients:\nRack of lamb\nSalt, Pepper, and Garlic\nOlive oil, as a binder\nLime \nChimichurri sauce\n\n🔥 @nomadgrills Portable Grill \u0026 Smoker\n🪵 @thegoodcharcoal Super Briquettes\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Block\n ————————————————————————\n#btcooks #yummyfood #foodstagram #tastyfood #viral #homecooking #bbqlovers #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilledmeat #meatporn #meat #grilledlamb #chops #lambchops #lamb #meater #chimichurri #cali",
    "description":  "Grilled little meat sticks lightly seasoned with Salt, Pepper, and Garlic. Grilled at 300-350° to develop a crispy crust. I like",
    "likes":  0,
    "intro":  [
                  "Grilled little meat sticks lightly seasoned with Salt, Pepper, and Garlic. Grilled at 300-350° to develop a crispy crust. I like my meat medium, so when internal temps hit 130° remove from grill and rest for 10 minutes. Slice between the bones and return back to the grill to give it a nice sear on all sides. Top off with a squeeze of lime juice and Al Frugoni’s Chimichurri mix. @alfrugoni"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Rack of lamb",
                  "Salt, Pepper, and Garlic",
                  "Olive oil, as a binder",
                  "Lime",
                  "Chimichurri sauce"
              ]
},
{
    "id":  "asian-bang-beef-rib-wraps",
    "title":  "Asian Bang Beef Rib Wraps",
    "date":  "2024-07-25",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/asian-bang-beef-rib-wraps.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Asian Bang Beef Rib Wraps🐄\n\nAsian Bang Sauce used as a binder then seasoned with Beef seasoning all from Blazing Star BBQ. Wrapped in beef tallow making these ribs extra juicy. This combination is so damn good. 🍻🤙🏽\n\nIngredients\n1 4-rib rack beef short ribs, about 6 lbs\nAsian Bang Sauce\nBeef Seasoning\nWagyu Tallow\n\nInstructions\n1. Slather the ribs with the Asian Bang sauce, then apply the Beef rub. \n2. Preheat the smoker to about 250 degrees.\n3. Smoke ribs until the internal temperature reaches 160 or until you get a good bark.\n4. Wrap with butcher paper or foil lathering up with some Wagyu Tallow, grill until internal temp hits 203 and probe goes in like butter. \n5. Let it rest for 1 hour, then slice and wrap them in butter lettuce, kimchi, and pickled radish. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Gloves \n🧂Rubs and Sauces: \n@blazingstarbbq Beef Seasoning \u0026 Asian Bang Sauce\n@southchicagopacking Wagyu Tallow\n ————————————————————————\n#btcooks #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #easyrecipes #foodvideo #recipes #beef #beefribs #asianbbq #shortribs #tallow #smokedmeat #lettucewraps #kimchi #healthy #koreanbbq #kbbq",
    "description":  "Asian Bang Sauce used as a binder then seasoned with Beef seasoning all from Blazing Star BBQ. Wrapped in beef tallow making",
    "likes":  0,
    "intro":  [
                  "Asian Bang Sauce used as a binder then seasoned with Beef seasoning all from Blazing Star BBQ. Wrapped in beef tallow making these ribs extra juicy. This combination is so damn good. 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 4-rib rack beef short ribs, about 6 lbs",
                                               "Asian Bang Sauce",
                                               "Beef Seasoning",
                                               "Wagyu Tallow"
                                           ]
                             }
                         ],
    "steps":  [
                  "Slather the ribs with the Asian Bang sauce, then apply the Beef rub.",
                  "Preheat the smoker to about 250 degrees.",
                  "Smoke ribs until the internal temperature reaches 160 or until you get a good bark.",
                  "Wrap with butcher paper or foil lathering up with some Wagyu Tallow, grill until internal temp hits 203 and probe goes in like butter.",
                  "Let it rest for 1 hour, then slice and wrap them in butter lettuce, kimchi, and pickled radish."
              ]
},
{
    "id":  "prosciutto-salmon-pinwheels",
    "title":  "Prosciutto Salmon Pinwheels",
    "date":  "2024-07-17",
    "category":  "Seafood",
    "image":  "images/recipes/prosciutto-salmon-pinwheels.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Prosciutto Salmon Pinwheels 🐟🥓\n\nThese Prosciutto wrapped Salmon Pinwheels were so good! Seasoned with @blazingstarbbq Scorpion Rub to give a sweet kick. Topped off with a fresh citrus dressing and a side of Mediterranean salad 🍻\n\n4 slices Prosciutto for each fish\n1 skinless Salmon \n1 bunch Parsley, chopped\n1 bunch Cilantro, chopped\nLemon wedges\nCastelvetrano olives, sliced\n\nDressing:\n12-15 Castelvetrano olives, chopped\n1 tbsp Calabrian chili paste\n2 tbsp Capers, optional\n4 tbsp Olive oil\n1 Shallot, chopped \n4 Garlic cloves, minced\n1 Lemon, skinned \u0026 chopped\n1 Lemon juice \u0026 Zest\nSalt and pepper \n\nGarnishing: \nParsley\nLemon zest\n\nGrill over lump charcoal at 350° until my @meatermade probe hit 140°. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🌡️ @meatermade Meater Block\n🧂 @blazingstarbbq Scorpion Rub\n ————————————————————————\n#btcooks #bbqlovers #smoker #salmonrecipes #easyrecipes #healthy #outdoorcooking #bbq #grilledsalmon #backyardgrilling #salmon #fish #meat #homecooking #dinner #mediterranean #grilledfish #grilledmeat #fresh #seafood #sd #olives #proscuitto #meater",
    "description":  "These Prosciutto wrapped Salmon Pinwheels were so good! Seasoned with @blazingstarbbq Scorpion Rub to give a sweet kick. Topped",
    "likes":  0,
    "intro":  [
                  "These Prosciutto wrapped Salmon Pinwheels were so good! Seasoned with @blazingstarbbq Scorpion Rub to give a sweet kick. Topped off with a fresh citrus dressing and a side of Mediterranean salad 🍻"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 skinless Salmon",
                                               "1 bunch Parsley, chopped",
                                               "1 bunch Cilantro, chopped"
                                           ]
                             },
                             {
                                 "heading":  "Dressing",
                                 "items":  [
                                               "12-15 Castelvetrano olives, chopped",
                                               "1 tbsp Calabrian chili paste",
                                               "2 tbsp Capers, optional",
                                               "4 tbsp Olive oil",
                                               "1 Shallot, chopped",
                                               "4 Garlic cloves, minced",
                                               "1 Lemon, skinned \u0026 chopped",
                                               "1 Lemon juice \u0026 Zest"
                                           ]
                             }
                         ],
    "steps":  [
                  "Salt and pepper",
                  "Parsley",
                  "Lemon zest",
                  "Grill over lump charcoal at 350° until my @meatermade probe hit 140°."
              ]
},
{
    "id":  "smoked-braised-chuck",
    "title":  "Smoked \u0026 Braised Chuck",
    "date":  "2024-07-14",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-braised-chuck.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked \u0026 Braised Chuck 🥩\n\nSmoked with Strawberry Guava and then braised in beef stock with sliced onions and bell peppers. The versatility of the @nomadgrills is amazing. 🔥\n\nIngredients:\n3 Ibs Chuck Roast cut into large cubes\nBlazing Star Beef Seasoning\n\nBraising:\n2 cups Beef broth or enough to cover half of meat\n1 tbsp Beef Bouillon \n1 Onion, sliced\n1 Green Bell pepper, sliced\n\n1. Season meat liberally with BBQ rub and let sit for 1 hour before cooking.\n2. Preheat your grill to 225 and smoke meat indirect for 3-4 hours.\n3. Remove meat and place into Instant Pot \n4. Add beef broth, Beef Bouillon, Onions, and Bell Peppers. \n5. Set for 30 minutes on high pressure.\n\n🔥 @nomadgrills Nomad Grill \u0026 Smoker\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n🧂 @blazingstarbbq Beef Seasoning\n ————————————————————————\n#btcooks #food #easyrecipes #foodvideo #recipes #chuckroast #burntends #braised #meat #smoked #smokedmeat #smoker #sandiego #sd #grilled #instantpot #portablegrill #nomadgrills #tender #beef #rice",
    "description":  "Smoked with Strawberry Guava and then braised in beef stock with sliced onions and bell peppers. The versatility of the",
    "likes":  0,
    "intro":  [
                  "Smoked with Strawberry Guava and then braised in beef stock with sliced onions and bell peppers. The versatility of the @nomadgrills is amazing. 🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 Ibs Chuck Roast cut into large cubes"
                                           ]
                             },
                             {
                                 "heading":  "Braising",
                                 "items":  [
                                               "2 cups Beef broth or enough to cover half of meat",
                                               "1 tbsp Beef Bouillon",
                                               "1 Onion, sliced",
                                               "1 Green Bell pepper, sliced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season meat liberally with BBQ rub and let sit for 1 hour before cooking.",
                  "Preheat your grill to 225 and smoke meat indirect for 3-4 hours.",
                  "Remove meat and place into Instant Pot",
                  "Add beef broth, Beef Bouillon, Onions, and Bell Peppers.",
                  "Set for 30 minutes on high pressure."
              ]
},
{
    "id":  "smoked-salmon-tacos",
    "title":  "Smoked Salmon Tacos",
    "date":  "2024-05-21",
    "category":  "Seafood",
    "image":  "images/recipes/smoked-salmon-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Salmon Tacos 🌮 \n\nSmoked Salmon tacos served with pickled onions and bell peppers. Topped off with Cilantro Lime Chipotle crema and fresh Cilantro 🔥\n\n4 Salmon Fillets\nBlazing Star Pork n Rub Seasoning\nPickled onions and bell peppers\nCilantro Lime Chipotle Crema Sauce\nFresh Cilantro \n\n1. Season Salmon Fillets with seasoning, let it sit for about 10-15 minutes. \n2. Preheat grill to 180 degrees using lump charcoal and setup for indirect. \n3. Add your favorite wood chunks, I used Strawberry Guava from @firewoodhawaii \n4. Smoke fillets until internal temp hits 145. \n\n🔥 @nomadgrills Portable Grill \u0026 Smoker\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n🔪 @spaceman_knives Triton Santoku\n ————————————————————————\n#btcooks #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #meat #sandiego #homecooking #fancy #salmon #baja #mexico #tj #salmontacos #tacos #grilledfish #fresh #seafood #sd #socal #fresh",
    "description":  "Smoked Salmon tacos served with pickled onions and bell peppers. Topped off with Cilantro Lime Chipotle crema and fresh Cilantro",
    "likes":  0,
    "intro":  [
                  "Smoked Salmon tacos served with pickled onions and bell peppers. Topped off with Cilantro Lime Chipotle crema and fresh Cilantro 🔥 4 Salmon Fillets Blazing Star Pork n Rub Seasoning Pickled onions and bell peppers Cilantro Lime Chipotle Crema Sauce Fresh Cilantro"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Preheat grill to 180 degrees using lump charcoal and setup for indirect.",
                  "Add your favorite wood chunks, I used Strawberry Guava from @firewoodhawaii",
                  "Smoke fillets until internal temp hits 145."
              ]
},
{
    "id":  "tortang-giniling-filipino-beef-omelette",
    "title":  "Tortang Giniling (Filipino Beef Omelette)",
    "date":  "2024-05-17",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/tortang-giniling-filipino-beef-omelette.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Tortang Giniling (Filipino Beef Omelette) 🇵🇭\n\nChildhood favorite meal, Filipino Torta recipe that is easy to make. It is a Filipino ground beef omelette that is a great meal anytime of the day. Served with steamed rice and Banana Ketchup from @jufranofficial. \n\n1 pound 80/20 ground beef\n1 small onion, diced\n4 cloves garlic, minced\n1 large potato, diced small\n1/2 tbsp chicken bouillon\n1 tsp pepper\n1 tsp salt\n5 eggs\n2 tbsp olive oil\n\n1. Under medium high heat sauté onions for 3-4 minutes. \n2. Add garlic and cook for another 1-2 minutes mixing so that the garlic does not burn. \n3. Add ground beef and add bouillon, pepper, and salt. Cook until meat is browned and cooked. \n4. Add potato and season with some salt. \n5. Remove contents and place into a large bowl. \n6. Add all 5 eggs into beef mixture and mix well. \n7. In large frying pan add oil and set heat to medium. \n8. Scoop a ladle full of beef mixture into pan and flatten. \n9. Cook for 2-3 minutes then flip. Repeat same time for the other side. \n10. Serve with steamed rice and ketchup. \n\n ————————————————————————\n#btcooks #filipinofood #filipino #filipinofood #pinoycooking #tasty #phillipines #food #torta #tortangginiling #groundbeef #jufran #bananaketchup #comfortfood #rice #easymeals #recipes #friday #weekend #breakfast #lunch #dinner #sd #sandiego #socal",
    "description":  "Childhood favorite meal, Filipino Torta recipe that is easy to make. It is a Filipino ground beef omelette that is a great meal",
    "likes":  0,
    "intro":  [
                  "Childhood favorite meal, Filipino Torta recipe that is easy to make. It is a Filipino ground beef omelette that is a great meal anytime of the day. Served with steamed rice and Banana Ketchup from @jufranofficial."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 small onion, diced",
                                               "4 cloves garlic, minced",
                                               "1 large potato, diced small",
                                               "1/2 tbsp chicken bouillon",
                                               "1 tsp pepper",
                                               "1 tsp salt",
                                               "5 eggs",
                                               "2 tbsp olive oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Under medium high heat sauté onions for 3-4 minutes.",
                  "Add garlic and cook for another 1-2 minutes mixing so that the garlic does not burn.",
                  "Add ground beef and add bouillon, pepper, and salt. Cook until meat is browned and cooked.",
                  "Add potato and season with some salt.",
                  "Remove contents and place into a large bowl.",
                  "Add all 5 eggs into beef mixture and mix well.",
                  "In large frying pan add oil and set heat to medium.",
                  "Scoop a ladle full of beef mixture into pan and flatten.",
                  "Cook for 2-3 minutes then flip. Repeat same time for the other side.",
                  "Serve with steamed rice and ketchup.",
                  ""
              ]
},
{
    "id":  "grilled-longanisa-filipino-sausage",
    "title":  "Grilled Longanisa (Filipino Sausage)",
    "date":  "2024-05-10",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-longanisa-filipino-sausage.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Longanisa (Filipino Sausage)🇵🇭\n\nSweet and Savory Filipino Sausages 😉Perfect meal for anytime of the day. Grilling these sausages is the way to go. Served with Garlic Rice, Fresh chopped Tomatoes, Fried Egg, and Vinegar Dipping sauce LFG!!! 🍻🤙🏽\n\nThis jam also hits the spot. Check out my boy @kusta408 for the drop 🤙🏽\n\nAll ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!! \n\nLonganisa Cooking Instructions:\n1 package of Longanisa\n\n1. Set grill to about 350-375. \n2. Cook for about 15 minutes, flipping half way through. \n3. After 15 minutes I like to cut them to flatten them a little and get a nice char to get that crunch all over. Cook for an additional 5 minutes. \n\nGarlic Rice\n2 cups uncooked rice\n1.5 cups water (just a guess since I’m Filipino and don’t measure my water 😉. You want your rice to cook on the dry side and not so mushy)\n6 Garlic cloves, minced\n1 tsp salt\n2 tbsp soy sauce\n\n1. Rinse your rice thoroughly and then add water and cook in rice cooker or stove top on low heat. Let it set for 30 minutes to an hour in room temp with lid off. \n2. In a large pan or wok, add about 1 tbsp of oil on medium high heat. \n3. Quickly fry the garlic for about a minute before careful not to burn it. \n4. Add the cooked rice, salt, and soy sauce. \n\nVinegar Dipping Sauce (Sawsawan)\n1/2 cup Vinegar or Spicy Vinegar\n1 tbsp Red Onion Chopped\n2 Garlic cloves, minced\n1 tsp Ground Black Pepper\n1 tbsp Soy sauce\n1 tbsp water\n\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n ————————————————————————\n#btcooks #outdoorcooking #foodporn #easyrecipes #recipes #longanisa #longsilog #garlicrice #filipinofood #pinoy #filipino #philippines #sausage #grilled #sd #socal #sandiego #islanderfood #breakfast #lunch #dinner",
    "description":  "Sweet and Savory Filipino Sausages 😉Perfect meal for anytime of the day. Grilling these sausages is the way to go. Served with",
    "likes":  0,
    "intro":  [
                  "Sweet and Savory Filipino Sausages 😉Perfect meal for anytime of the day. Grilling these sausages is the way to go. Served with Garlic Rice, Fresh chopped Tomatoes, Fried Egg, and Vinegar Dipping sauce LFG!!! 🍻🤙🏽 This jam also hits the spot. Check out my boy @kusta408 for the drop 🤙🏽 All ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 package of Longanisa"
                                           ]
                             }
                         ],
    "steps":  [
                  "Set grill to about 350-375.",
                  "Cook for about 15 minutes, flipping half way through.",
                  "After 15 minutes I like to cut them to flatten them a little and get a nice char to get that crunch all over. Cook for an additional 5 minutes.",
                  "Garlic Rice",
                  "2 cups uncooked rice",
                  "5 cups water (just a guess since I’m Filipino and don’t measure my water 😉. You want your rice to cook on the dry side and not so mushy)",
                  "6 Garlic cloves, minced",
                  "1 tsp salt",
                  "2 tbsp soy sauce",
                  "Rinse your rice thoroughly and then add water and cook in rice cooker or stove top on low heat. Let it set for 30 minutes to an hour in room temp with lid off.",
                  "In a large pan or wok, add about 1 tbsp of oil on medium high heat.",
                  "Quickly fry the garlic for about a minute before careful not to burn it.",
                  "Add the cooked rice, salt, and soy sauce.",
                  "Vinegar Dipping Sauce (Sawsawan)",
                  "1/2 cup Vinegar or Spicy Vinegar",
                  "1 tbsp Red Onion Chopped",
                  "2 Garlic cloves, minced",
                  "1 tsp Ground Black Pepper",
                  "1 tbsp Soy sauce",
                  "1 tbsp water"
              ]
},
{
    "id":  "lemon-saffron-chicken",
    "title":  "Lemon Saffron Chicken",
    "date":  "2024-04-21",
    "category":  "Poultry",
    "image":  "images/recipes/lemon-saffron-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemon Saffron Chicken 🍋 🍗\n\nThis is an easy recipe if you are looking to change up your chicken meals. Perfects for salads, wraps, or even with just rice.\n\nIngredients\n2 pounds chicken breast, sliced\n2 tbs olive oil\n1 lemon juice, juiced\n3 tbs mayonnaise\n1 small yellow onion, diced\n3-4 garlic cloves, minced\n1 cup parsley, chopped\n1 cup cilantro, chopped\n1 pinch Saffron\n1 tsp red pepper flakes\n1 tbsp Chicken Bouillon\n1 tsp black pepper\n\n1. Combine all ingredients and let it marinade over night or at least 4-6 hours.\n2. Over direct heat, grill chicken.\n3. Serve with salad or as a healthy wrap.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves\n🔪 @spaceman_knives Triton Santoku\n📦 @vacmasterfresh VP95 Vacuum Chamber\n ————————————————————————\n\n#btcooks #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #chicken #wraps #sandiego #homecooking #healthy #mediterranean #mediterraneanfood #chickenkabob #saffron #salad #diet #easyrecipe #foodporn #sandiego #spring",
    "description":  "This is an easy recipe if you are looking to change up your chicken meals. Perfects for salads, wraps, or even with just rice.",
    "likes":  0,
    "intro":  [
                  "This is an easy recipe if you are looking to change up your chicken meals. Perfects for salads, wraps, or even with just rice."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 pounds chicken breast, sliced",
                                               "2 tbs olive oil",
                                               "1 lemon juice, juiced",
                                               "3 tbs mayonnaise",
                                               "1 small yellow onion, diced",
                                               "3-4 garlic cloves, minced",
                                               "1 cup parsley, chopped",
                                               "1 cup cilantro, chopped",
                                               "1 pinch Saffron",
                                               "1 tsp red pepper flakes",
                                               "1 tbsp Chicken Bouillon",
                                               "1 tsp black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and let it marinade over night or at least 4-6 hours.",
                  "Over direct heat, grill chicken.",
                  "Serve with salad or as a healthy wrap."
              ]
},
{
    "id":  "fish-sauce-wings",
    "title":  "Fish Sauce Wings",
    "date":  "2024-04-17",
    "category":  "Wings",
    "image":  "images/recipes/fish-sauce-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Fish Sauce Wings 🐟🍗\n\nFlavor packed wings full of umami. Smashing these up like umbrellas, inspo from my boy @tfti.bbq . \n\nIngredients:\n5-6 lbs Chicken wings\n1/2 cup Fish sauce\n1/2 cup Sugar\n2 tbsp Low Sodium Spy Sauce\n2 tbsp Black pepper\n1 tbsp Vinegar\n1 tbsp Vegetable oil\n8 Garlic cloves, minced\n1 Lemon, juiced \n1 Stalk Lemongrass or 1 knob of Ginger, minced\n\n1. Combine all ingredients in a ziplock bag and marinate for 4-6 hours. \n2. Heat grill to 375-400 degrees for indirect cooking. \n3. Place wings on indirect side and cook for about 45-60 minutes flipping half way through. \n4. Internal temp should be around 200 degrees. \n\n🪵 @thegoodcharcoal Lump Charcoal \n🧤 @cleanspaceproject Black Nitril Gloves \n ————————————————————————\n#btcooks #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #easyrecipes #recipes #foodreels #patis #fishsauce #wings #fishsaucewings #asianbbq #islanderbbq #asianfood #vietnamesefood #wingwednesday #filipinobbq #pinoy #wingwednesday #spring",
    "description":  "Flavor packed wings full of umami. Smashing these up like umbrellas, inspo from my boy @tfti.bbq .",
    "likes":  0,
    "intro":  [
                  "Flavor packed wings full of umami. Smashing these up like umbrellas, inspo from my boy @tfti.bbq ."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "5-6 lbs Chicken wings",
                                               "1/2 cup Fish sauce",
                                               "1/2 cup Sugar",
                                               "2 tbsp Low Sodium Spy Sauce",
                                               "2 tbsp Black pepper",
                                               "1 tbsp Vinegar",
                                               "1 tbsp Vegetable oil",
                                               "8 Garlic cloves, minced",
                                               "1 Lemon, juiced",
                                               "1 Stalk Lemongrass or 1 knob of Ginger, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a ziplock bag and marinate for 4-6 hours.",
                  "Heat grill to 375-400 degrees for indirect cooking.",
                  "Place wings on indirect side and cook for about 45-60 minutes flipping half way through.",
                  "Internal temp should be around 200 degrees."
              ]
},
{
    "id":  "scorpion-baby-back-ribs",
    "title":  "Scorpion Baby Back Ribs",
    "date":  "2024-03-29",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/scorpion-baby-back-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Scorpion Baby Back Ribs 🐖\n\nCheck out this perfect bite! Smoked ribs using mustard as a binder then seasoned with Pork’n Rub and Scorpion Seasoning, giving the perfect sweetness and heat. Wrapped using POG syrup, brown sugar, butter. 💦💦 💦\n\n1. Smoke at 250 for 4 hours. \n2. Double wrap with foil and layer Brown sugar, butter, and POG syrup on both sides. Cook for another hour. \n3. Remove foil and lather up with your favorite BBQ sauce then return to the grill and cook for another 30 minutes. \n4. Let rest before serving. Enjoy! \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Gloves \n🧂 Seasonings and Sauces:\n@blazingstarbbq Pork’n Rub and Scorpion Seasoning\n@dkhawaiian Smokey BBQ Sauce and POG Syrup\n ————————————————————————\n#btcooks #outdoorcooking #food #smokedmeat #grilledfood #smoked #outdoor #backyardgrilling #foodporn #tasty #easyrecipes #foodvideo #recipes #ribs #babybackribs #rub #bbq #pork",
    "description":  "Check out this perfect bite! Smoked ribs using mustard as a binder then seasoned with Pork’n Rub and Scorpion Seasoning, giving",
    "likes":  0,
    "intro":  [
                  "Check out this perfect bite! Smoked ribs using mustard as a binder then seasoned with Pork’n Rub and Scorpion Seasoning, giving the perfect sweetness and heat. Wrapped using POG syrup, brown sugar, butter. 💦💦 💦"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Double wrap with foil and layer Brown sugar, butter, and POG syrup on both sides. Cook for another hour.",
                  "Remove foil and lather up with your favorite BBQ sauce then return to the grill and cook for another 30 minutes.",
                  "Let rest before serving. Enjoy!"
              ]
},
{
    "id":  "smoked-corned-beef",
    "title":  "Smoked Corned Beef ️",
    "date":  "2024-03-16",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-corned-beef.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Corned Beef ☘️\n\nYou have to try smoked corned beef. This brisket point was injected with Wagyu Tallow and seasoned with Blazing Star Beef Rub made this so damn good. \n\n3-4 pound Corned Beef, soaked in water over night to reduce saltiness\nBeef Rub\nWagyu Tallow\n\n1. Lightly season beef with beef rub and let it come to room temp. \n2. Inject with Wagyu Tallow. \n3. Grill over indirect heat at 275 degrees using charcoal and your favorite wood chunks. \n4. Once the internal temp hit 160 degrees, I wrapped in a foil boat and cooked it until it hit 200 degrees and probe tender. \n5. Remove from grill and wrap with foil and rest for 1 hour before slicing. \n\n🔥 @kamado Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal \n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @blazingstarbbq Beef Rub\n🛢️ @southchicagopacking Wagyu Tallow\n🔪 @spaceman_knives Triton Santoku \n🌡️ @themeatstickig MeatStick 4X\n ————————————————————————\n#btcooks #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #cornedbeef #brisket #steak #meat #beef #wagyu #tallow #stpatricksday #stpattysday #irish #leprechaun #green #cheers #sandiego",
    "description":  "You have to try smoked corned beef. This brisket point was injected with Wagyu Tallow and seasoned with Blazing Star Beef Rub",
    "likes":  0,
    "intro":  [
                  "You have to try smoked corned beef. This brisket point was injected with Wagyu Tallow and seasoned with Blazing Star Beef Rub made this so damn good. 3-4 pound Corned Beef, soaked in water over night to reduce saltiness Beef Rub Wagyu Tallow"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Inject with Wagyu Tallow.",
                  "Grill over indirect heat at 275 degrees using charcoal and your favorite wood chunks.",
                  "Once the internal temp hit 160 degrees, I wrapped in a foil boat and cooked it until it hit 200 degrees and probe tender.",
                  "Remove from grill and wrap with foil and rest for 1 hour before slicing."
              ]
},
{
    "id":  "shaking-beef-bo-luc-lac",
    "title":  "Shaking Beef (Bo Luc Lac)",
    "date":  "2024-03-14",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/shaking-beef-bo-luc-lac.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Shaking Beef (Bo Luc Lac) 🥩\n\nTender cuts of steak, marinated, then pan seared. Served with steamed rice, watercress, fresh sliced tomatoes, pickled onions, and lime dipping sauce. 🔥\n\nVacuumed sealed with the @vacmasterfresh VP95 for that extra flavor! \n\nIngredients:\nBeef Marinade:\n2 lbs Ribeye or NY Steaks cut into 1″ cubes\u20282 tbs minced garlic\u20281.5 tbs sugar\u20282 tbs oyster sauce\u20281 tbs fish sauce\u20281 tbs sesame oil\u20281 ts thick soy sauce\n\nLime Dipping Sauce:\u2028Juice of 1 lime\u20281/2 ts kosher salt\u20281/2 ts fresh cracked pepper\n1 red onion, thinly sliced\u2028\n1. Combine all ingredients in a zip lock a d marinate for at least 6-8 hours. \n2. Heat a large wok or pan heat 2tbsp of canola or vegetable oil over medium-high heat.\n3. Add an even layer of beef and allow to sear for about 2 minutes per side. \n4. Cook all in batches to cook all the beef evenly. \n5. Serve with steamed rice, watercress, fresh sliced tomatoes, pickled onions, and lime dipping sauce. 🍻\n\n🧤 @cleanspaceproject Black Nitrile Gloves\n🔪 @spaceman_knives Triton Santoku \n🗃️ @vacmasterfresh VP95 Vacuum Chamber\n ————————————————————————\n#btcooks #outdoorcooking #food #foodporn #tasty #easyrecipes #foodvideo #recipes #vietnamesefood #shakingbeef #boluclac #filipinofood #asianfood #marinatedmeat #vacuumsealed #vacuum",
    "description":  "Tender cuts of steak, marinated, then pan seared. Served with steamed rice, watercress, fresh sliced tomatoes, pickled onions,",
    "likes":  0,
    "intro":  [
                  "Tender cuts of steak, marinated, then pan seared. Served with steamed rice, watercress, fresh sliced tomatoes, pickled onions, and lime dipping sauce. 🔥 Vacuumed sealed with the @vacmasterfresh VP95 for that extra flavor!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Beef Marinade",
                                 "items":  [
                                               "2 lbs Ribeye or NY Steaks cut into 1″ cubes 2 tbs minced garlic 1.5 tbs sugar 2 tbs oyster sauce 1 tbs fish sauce 1 tbs sesame oil 1 ts thick soy sauce",
                                               "1 red onion, thinly sliced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a zip lock a d marinate for at least 6-8 hours.",
                  "Heat a large wok or pan heat 2tbsp of canola or vegetable oil over medium-high heat.",
                  "Add an even layer of beef and allow to sear for about 2 minutes per side.",
                  "Cook all in batches to cook all the beef evenly.",
                  "Serve with steamed rice, watercress, fresh sliced tomatoes, pickled onions, and lime dipping sauce. 🍻"
              ]
},
{
    "id":  "santa-maria-tri-tip-w-caper-chimichurri",
    "title":  "Santa Maria Tri-Tip w/ Caper Chimichurri",
    "date":  "2024-03-11",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/santa-maria-tri-tip-w-caper-chimichurri.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Santa Maria Tri-Tip w/ Caper Chimichurri\n\nReverse seared Santa Maria Tri-Tip from Costco, turned out quite delicious. Elevated this dish with a topping of homemade Caper Chimichurri, making it an ideal combination.\n\n3lb Tri-Tip pre marinated or seasoned with favorite rub\n\n1. Setup grill for indirect cooking at 225 degrees. \n2. Smoked steak until IT hits 130 degrees over lump charcoal and Pecan wood blocks. The end result will be about Medium. \n3. Increase heat to 500 degrees and sear both sides of steak. \n4. Let rest for 10-15 minutes before serving. \n\nChimichurri:\n1/2 bunch Italian parsley, finely chopped\n1/2 bunch Cilantro, finely chopped\n2 tbsp capers, finely chopped\n1-2 garlic cloves, minced\n1 tbsp Shallots, minced\n1 tsp salt\n1 tsp fresh ground black pepper\n1/2 tbsp red pepper flakes\n1/2 lime\n1/4 cup red wine vinegar\n1/4 cup olive oil\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🌡️ @themeatstickig ChefX\n🧤 @cleanspaceproject Black Nitril Gloves\n\n ————————————————————————\n#btcooks #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #bbq #grilling #backyardgrilling #foodporn #easyrecipes #foodvideo #recipes #foodreels #chimichurri #sauce #tritip #steak #reversesear #marinatedmeat #santamaria #meat",
    "description":  "Reverse seared Santa Maria Tri-Tip from Costco, turned out quite delicious. Elevated this dish with a topping of homemade Caper",
    "likes":  0,
    "intro":  [
                  "Reverse seared Santa Maria Tri-Tip from Costco, turned out quite delicious. Elevated this dish with a topping of homemade Caper Chimichurri, making it an ideal combination. 3lb Tri-Tip pre marinated or seasoned with favorite rub"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Smoked steak until IT hits 130 degrees over lump charcoal and Pecan wood blocks. The end result will be about Medium.",
                  "Increase heat to 500 degrees and sear both sides of steak.",
                  "Let rest for 10-15 minutes before serving.",
                  "1/2 bunch Italian parsley, finely chopped",
                  "1/2 bunch Cilantro, finely chopped",
                  "2 tbsp capers, finely chopped",
                  "1-2 garlic cloves, minced",
                  "1 tbsp Shallots, minced",
                  "1 tsp salt",
                  "1 tsp fresh ground black pepper",
                  "1/2 tbsp red pepper flakes",
                  "1/2 lime",
                  "1/4 cup red wine vinegar",
                  "1/4 cup olive oil"
              ]
},
{
    "id":  "grilled-branzino-w-lemon-caper-dressing",
    "title":  "Grilled Branzino w/Lemon Caper Dressing",
    "date":  "2024-02-28",
    "category":  "Seafood",
    "image":  "images/recipes/grilled-branzino-w-lemon-caper-dressing.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Branzino w/Lemon Caper Dressing 🐟🍋\n\nThis Mediterranean style grilled Branzino was seasoned with Spanglish Asadero’s Surf and Turf Seasoning. Served with roasted broccoli and cilantro lime basmati rice 🔥. \n\nInspired by one of my wife’s favorite restaurants @kokkarisf \n\nIngredients\n1-2 Whole Branzino, scaled and gutted\nExtra virgin olive oil\nFavorite Surf and Turf seasoning or Sea salt and fresh ground pepper\n2-3 lemons — 1 lemon sliced and the rest for spreading the juice over fish\nFresh Thyme\n\nDressing\n6 tablespoons Extra virgin olive oil\n2 teaspoons Capers, minced\n2 teaspoons Shallots, minced\n1 teaspoon Garlic, minced\n1 tablespoon Italian parsley, minced\n½ teaspoon fresh Oregano, minced\nSalt and freshly ground black pepper\n1 Lemon, juiced\n\n1. In a small bowl, combine all the Dressing ingredients. Set aside\n2. Clean fish and make a lengthwise slit down the middle of each side, from the gill to the tail, slicing all the way to the bone.\n3. Lather extra virgin olive oil all over fish.\n4. Season with seasoning or Salt and fresh ground black pepper. \n5. Stuff slices of lemon and fresh Thyme into the belly.\n6. Heat grill to 500 degrees and setup up for direct cooking. \n7. Place fish over charcoal and cook for 15 minutes on each side.\n8. Transfer the fish to a plate a squeeze fresh lemon juice over fish. \n9. Season the fish lightly with salt and pepper, then spoon Dressing over it.\n\n🔥 @kamado Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @spanglishasadero_official Surf \u0026 Turf Seasoning\n ————————————————————————\n#btcooks #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #foodporn #easyrecipes #recipes #grilledfish #branzino #mediterraneandiet #mediterraneanfood #italianfood #healthy #dinner #fish #seafood",
    "description":  "This Mediterranean style grilled Branzino was seasoned with Spanglish Asadero’s Surf and Turf Seasoning. Served with roasted",
    "likes":  0,
    "intro":  [
                  "This Mediterranean style grilled Branzino was seasoned with Spanglish Asadero’s Surf and Turf Seasoning. Served with roasted broccoli and cilantro lime basmati rice 🔥. Inspired by one of my wife’s favorite restaurants @kokkarisf"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "2-3 lemons — 1 lemon sliced and the rest for spreading the juice over fish",
                  "Fresh Thyme",
                  "6 tablespoons Extra virgin olive oil",
                  "2 teaspoons Capers, minced",
                  "2 teaspoons Shallots, minced",
                  "1 teaspoon Garlic, minced",
                  "1 tablespoon Italian parsley, minced",
                  "teaspoon fresh Oregano, minced",
                  "Salt and freshly ground black pepper",
                  "1 Lemon, juiced",
                  "In a small bowl, combine all the Dressing ingredients. Set aside",
                  "Clean fish and make a lengthwise slit down the middle of each side, from the gill to the tail, slicing all the way to the bone.",
                  "Lather extra virgin olive oil all over fish.",
                  "Season with seasoning or Salt and fresh ground black pepper.",
                  "Stuff slices of lemon and fresh Thyme into the belly.",
                  "Heat grill to 500 degrees and setup up for direct cooking.",
                  "Place fish over charcoal and cook for 15 minutes on each side.",
                  "Transfer the fish to a plate a squeeze fresh lemon juice over fish.",
                  "Season the fish lightly with salt and pepper, then spoon Dressing over it."
              ]
},
{
    "id":  "braised-oxtails-and-chuck",
    "title":  "Braised Oxtails and Chuck",
    "date":  "2024-02-22",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/braised-oxtails-and-chuck.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Braised Oxtails and Chuck 🐄\n\nI can eat these all day! Smoked and then braised in beef stock with sliced onions and bell peppers. \n\nPlaced in my VacMaster VP95 vacuum chamber to add that extra flavor. 🔥\n\nIngredients:\n2-3 lbs beef Oxtails cut and trimmed\n2 lbs Chuck Roast cut into large cubes\nBlazing Star Beef Seasoning\nBlazing Star Reaper Seasoning\nW Sauce as a binder\n\nBraising:\n2 cups Beef broth, enough to cover half of meat\n1 Onion, sliced\n1 Green Bell pepper, sliced\u2028\n1. Season meat liberally with BBQ rub and let sit for 1 hour before cooking. \n2. Preheat your grill to 250 and smoke meat for 3-4 hours or until IT hits 200-203.\n3. Remove meat and place into a roasting pan. \n4. Add beef broth, onions, and Bell Peppers, cover with aluminum foil. \n5. Place back into smoker and cook for another 3 hours. \u2028\nYou can braise it in the instant pot for 30 minutes high pressure. Then add the veggies, and pressure cook for an additional 10 minutes. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🗃️ @vacmasterfresh VP95 Vacuum Chamber\n🧤 @cleanspaceproject Nitrile Gloves \n🧂 Seasonings and Sauces:\n@blazingstarbbq Beef and Reaper Seasoning\n@wsauceofficial Worcestershire \n ————————————————————————\n#btcooks #food #foodporn #bbqporn #tasty #easyrecipes #foodvideo #recipes #oxtail #chuckroast #burntends #briased #meat #smoked #candyred #nuggets #smoker #fox5newssandiego #sandiego #grilled",
    "description":  "I can eat these all day! Smoked and then braised in beef stock with sliced onions and bell peppers. Placed in my VacMaster VP95",
    "likes":  0,
    "intro":  [
                  "I can eat these all day! Smoked and then braised in beef stock with sliced onions and bell peppers. Placed in my VacMaster VP95 vacuum chamber to add that extra flavor. 🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 lbs beef Oxtails cut and trimmed",
                                               "2 lbs Chuck Roast cut into large cubes",
                                               "Blazing Star Beef Seasoning",
                                               "Blazing Star Reaper Seasoning",
                                               "W Sauce as a binder"
                                           ]
                             }
                         ],
    "steps":  [
                  "2 cups Beef broth, enough to cover half of meat",
                  "1 Onion, sliced",
                  "1 Green Bell pepper, sliced",
                  "Season meat liberally with BBQ rub and let sit for 1 hour before cooking.",
                  "Preheat your grill to 250 and smoke meat for 3-4 hours or until IT hits 200-203.",
                  "Remove meat and place into a roasting pan.",
                  "Add beef broth, onions, and Bell Peppers, cover with aluminum foil.",
                  "Place back into smoker and cook for another 3 hours.",
                  "You can braise it in the instant pot for 30 minutes high pressure. Then add the veggies, and pressure cook for an additional 10 minutes."
              ]
},
{
    "id":  "chicken-chicharron",
    "title":  "Chicken Chicharron",
    "date":  "2024-02-19",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-chicharron.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Chicharron 🐓\n\nDont let chicken skin trimmings go to waste. Whip up some easy chicken skin chicharron 🤙🏽\n\nIngredients provided fresh from\nOur friends at @islandpacificmarket \n\n1. Dry chicken skin and dust a little of your favorite seasoning. \n2. Set air fryer to 350 degrees for 15-20 minutes, flipping half way through. \n\n————————————————————————\n#btcooks #sogood #airfryer #airfried #chicharron #chililime #airfryerrecipes #chickenskin #sandiego #crispy #pinoy #filipino #islander #filipinosnack #snack #cholesterolfree #cholesterol #heathly #vegan #grilling #bbq",
    "description":  "Dont let chicken skin trimmings go to waste. Whip up some easy chicken skin chicharron 🤙🏽",
    "likes":  0,
    "intro":  [
                  "Dont let chicken skin trimmings go to waste. Whip up some easy chicken skin chicharron 🤙🏽"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Dry chicken skin and dust a little of your favorite seasoning.",
                  "Set air fryer to 350 degrees for 15-20 minutes, flipping half way through.",
                  ""
              ]
},
{
    "id":  "bacon-wrapped-chicken-and-asparagus",
    "title":  "Bacon Wrapped Chicken and Asparagus",
    "date":  "2024-02-15",
    "category":  "Pork",
    "image":  "images/recipes/bacon-wrapped-chicken-and-asparagus.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bacon Wrapped Chicken and Asparagus 🍗🥓\n\nLittle bite sized goodness seasoned with Blazing Star Pork n Rub and topped with sweet BBQ Sauce. \n\nIngredients:\n2 boneless and skinless chicken breast, sliced 1/2 thick. \n1 bunch fresh asparagus, cut in half\nFavorite sweet BBQ seasoning\n\nSauce:\nFavorite BBQ sauce\n1 tbsp brown sugar\n\n1. Season chicken with favorite rub. \n2. Wrap each piece of chicken with 3 pieces of asparagus with bacon, sprinkle a light dusting of seasoning. \n3. Set 375 and grill indirectly over charcoal for 30 minutes. \n4. Combine brown sugar and bbq sauce in a small bowl. \n5. Half way through cook, brush BBQ sauce \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @blazingstarbbq Pork n Rub Seasoning\n🔪 @spaceman_knives Triton Santoku \n\n————————————————————————\n#btcooks #baconwrapped #bacon #chicken #asparagus #grilled #bbqsauce #usher #fox5sandiego #sandiego #bites #fingerfood #charcoal #bbqporn #smoker #foodporn",
    "description":  "Little bite sized goodness seasoned with Blazing Star Pork n Rub and topped with sweet BBQ Sauce.",
    "likes":  0,
    "intro":  [
                  "Little bite sized goodness seasoned with Blazing Star Pork n Rub and topped with sweet BBQ Sauce."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 boneless and skinless chicken breast, sliced 1/2 thick.",
                                               "1 bunch fresh asparagus, cut in half"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "Favorite BBQ sauce",
                                               "1 tbsp brown sugar"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season chicken with favorite rub.",
                  "Wrap each piece of chicken with 3 pieces of asparagus with bacon, sprinkle a light dusting of seasoning.",
                  "Set 375 and grill indirectly over charcoal for 30 minutes.",
                  "Combine brown sugar and bbq sauce in a small bowl.",
                  "Half way through cook, brush BBQ sauce"
              ]
},
{
    "id":  "lemongrass-chicken-thighs",
    "title":  "Lemongrass Chicken Thighs",
    "date":  "2024-02-10",
    "category":  "Poultry",
    "image":  "images/recipes/lemongrass-chicken-thighs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemongrass Chicken Thighs 🍗\n\nFinally a break in the rain and quickly grilled up some of my favorite chicken thighs. Packed with so much flavor! Serve with a side of steamed rice and your favorite veggies. You gotta try this 🍻\n\nI picked up all these ingredients from our friends at @islandpacificmarket \n\n2-3 Ibs Boneless skinless chicken thighs\n4 tbsp Fish sauce\n2 tbsp Oyster Sauce\n2 tbsp Light soy sauce\n2 tbsp Banana Ketchup \n1/2 bottle of Beer (I used Modelo)\n4 Garlic cloves, minced\n3 stalks Green Onion, chopped\n4-5 stalks Lemon Grass, finely minced\n1 tbsp Sesame Oil\n3 tbsp Sugar\n1/4 cup Pineapple juice\n2 tsp Ground pepper\n\n1. Mix all ingredients together.\n2. Marinate for 2-3 hrs. or overnight in the refrigerator. \n3. Preheat the grill using lump charcoal and setup for direct grilling.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoak Lump Charcoal\n ————————————————————————\n#btcooks #chickenbbq #filipinobbq #vietnamesebbq #marinade #chicken #thighs #chickenthighs #filipinofood #vietnamesefood #islanderfood #asianfood #asianfusion #asianbbq #islanderbbq",
    "description":  "Finally a break in the rain and quickly grilled up some of my favorite chicken thighs. Packed with so much flavor! Serve with a",
    "likes":  0,
    "intro":  [
                  "Finally a break in the rain and quickly grilled up some of my favorite chicken thighs. Packed with so much flavor! Serve with a side of steamed rice and your favorite veggies. You gotta try this 🍻 I picked up all these ingredients from our friends at @islandpacificmarket 2-3 Ibs Boneless skinless chicken thighs"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp Oyster Sauce",
                                               "2 tbsp Light soy sauce",
                                               "2 tbsp Banana Ketchup",
                                               "1/2 bottle of Beer (I used Modelo)",
                                               "4 Garlic cloves, minced",
                                               "3 stalks Green Onion, chopped",
                                               "4-5 stalks Lemon Grass, finely minced",
                                               "1 tbsp Sesame Oil",
                                               "3 tbsp Sugar",
                                               "1/4 cup Pineapple juice",
                                               "2 tsp Ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients together.",
                  "Marinate for 2-3 hrs. or overnight in the refrigerator.",
                  "Preheat the grill using lump charcoal and setup for direct grilling."
              ]
},
{
    "id":  "spaghetti-all-amatriciana",
    "title":  "Spaghetti all’Amatriciana",
    "date":  "2024-02-08",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/spaghetti-all-amatriciana.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Spaghetti all’Amatriciana 🍝\n\nJust a simple pasta dish with red onions and bite size pieces of Pancetta makes this so good! 🍻🤙🏽\n\nIngredients \u0026 Recipe\n1 packet of Spaghetti, cooked based on instructions \n4 ounces Pancetta, diced\n½ cup freshly-grated Pecorino Romano\n1 14oz canned San Marzano tomatoes\n¼ cup tomato paste\n1 medium red onion, cut lengthwise into small slices\n4 Garlic cloves, minced on\n1/3 cup chopped fresh Italian parsley\n¼ cup extra virgin olive oil\n2 teaspoons red pepper flakes\nSalt, to taste\n\n1. In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.\n2. Combine the olive oil, Pancetta, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.\n3. Add garlic and cook for 2 minutes, making sure not to burn.\n4. Stir in the tomato paste and red pepper flakes, cook for about 1 minute.\n5. Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce.\n6. Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture.\n7. Stir in the cheese and parsley.\n8. Serve immediately with side of grated Pecorino Romano and parsley.\n\n🧤 @cleanspaceproject Black Nitril Gloves \n📜 @bbq_boards Cutting Board\n🔪 @spaceman_knives Triton Santoku \n ————————————————————————\n#btcooks #pasta #spaghetti #wetdays #raining #demascus #italian #italianfood #fresh #pancetta #cheese #homecooking #look #sogood",
    "description":  "Just a simple pasta dish with red onions and bite size pieces of Pancetta makes this so good! 🍻🤙🏽",
    "likes":  0,
    "intro":  [
                  "Just a simple pasta dish with red onions and bite size pieces of Pancetta makes this so good! 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet of Spaghetti, cooked based on instructions",
                                               "4 ounces Pancetta, diced",
                                               "cup freshly-grated Pecorino Romano",
                                               "1 14oz canned San Marzano tomatoes",
                                               "cup tomato paste",
                                               "1 medium red onion, cut lengthwise into small slices",
                                               "4 Garlic cloves, minced on",
                                               "1/3 cup chopped fresh Italian parsley",
                                               "cup extra virgin olive oil",
                                               "2 teaspoons red pepper flakes",
                                               "Salt, to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.",
                  "Combine the olive oil, Pancetta, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.",
                  "Add garlic and cook for 2 minutes, making sure not to burn.",
                  "Stir in the tomato paste and red pepper flakes, cook for about 1 minute.",
                  "Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce.",
                  "Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture.",
                  "Stir in the cheese and parsley.",
                  "Serve immediately with side of grated Pecorino Romano and parsley."
              ]
},
{
    "id":  "reverse-seared-picanha",
    "title":  "Reverse Seared Picanha",
    "date":  "2024-02-06",
    "category":  "Other",
    "image":  "images/recipes/reverse-seared-picanha.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Reverse Seared Picanha 🥩 \n\nSlices of Picanha steaks seasoned with Blazing Star Beef Rub and All in One Seasoning!! Smoked over lump charcoal and Pecan wood chunks 💦💦💦\n\n1. Cut the steaks going with the grain into 2 inch thick slices.\n2. Lightly season steaks with Kosher salt to Dry brine overnight. \n3. Remove steaks from fridge 45 minutes before cooking and lightly season with salt or SPG. \n4. Smoke at 225 indirect IT hits about 115 degrees. About 35-40 minutes. \n5. Sear each steak for 1-2 minutes on each side. \n6. Let it rest for 10 minutes before slicing against the grain. \n\n🔥 @kamado Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal \n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @blazingstarbbq Beef and All in One Seasoning\n ————————————————————————\n#btcooks #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #picanha #topsirloin #steak #reversesear #churrasco #brazilianbbq #meat",
    "description":  "Reverse Seared Picanha",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Cut the steaks going with the grain into 2 inch thick slices.",
                  "Lightly season steaks with Kosher salt to Dry brine overnight.",
                  "Remove steaks from fridge 45 minutes before cooking and lightly season with salt or SPG.",
                  "Smoke at 225 indirect IT hits about 115 degrees. About 35-40 minutes.",
                  "Sear each steak for 1-2 minutes on each side.",
                  "Let it rest for 10 minutes before slicing against the grain."
              ]
},
{
    "id":  "tocino-pulled-pork-tacos",
    "title":  "Tocino pulled pork Tacos",
    "date":  "2024-01-30",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/tocino-pulled-pork-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Tocino pulled pork Tacos 🐖🌮\n\nThis recipe is taking a classic Filipino recipe and mixing it up. This Islander Mexican fusion reminds me of Yucatán tacos when we went to Cancun. 🤙🏽\n\nWe are going to cook this hot and fast at 300 degrees because I am hungry! 😉\n\n5-6 lbs pork shoulder\n1/2 tbsp salt\n5 garlic cloves, minced\n1/2 tbsp chicken bouillon powder\n1 tbsp paprika\n1 tsp white pepper or ground black pepper\n1/2 cup brown sugar\n1/4 cup banana ketchup\n1 cup pineapple juice\n1 tbsp oil\n\nGarnish:\nPickled Onions\nCheese\nCilantro\nCrema (optional)\n\nPickled Red Onions Ingredients:\n1 medium red onion, sliced\n1/2 cup rice vinegar\n1/4 cup water\u20281 1/2 tbs sugar\u20281/2 tbs salt\u20281-2 tsp chili flakes\n\nInstructions:\n1. Combine all marinade ingredients.\n2. Cover and marinate in the fridge for 48 hours.\n3. Pat dry then season with Blazing Star Pork N Rub. Do not discard Marinade, this will be used later to braise the pork. \n4. Setup grill for indirect cooking and smoke at 300 degrees until internal temp reaches 160-170 degrees, around 4-5 hours.\n5. Place pork in a foil pan and pour in leftover marinade. It should come up half way and if it does not, add a little pineapple juice. Cover with foil and place back on the smoker until internal temp reaches 200 degrees, or 2-3 hours. \n6. Remove from braising liquid and rest for 30-45 minutes before shredding. \n7. Shred pork and pour in 1/4 cup braising liquid if it is too dry. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal \n🧤 @cleanspaceproject Black Nitril Gloves \n🧂 @blazingstarbbq Pork n Rub \n ————————————————————————\n#btcooks #tacos #fusion #filipino #pinoy #alpastor #conchintapibil #yucatan #cancun #pulledpork #tocino #tocinopulledpork #tocinotacos #tacotuesday #tocinotursday",
    "description":  "This recipe is taking a classic Filipino recipe and mixing it up. This Islander Mexican fusion reminds me of Yucatán tacos when",
    "likes":  0,
    "intro":  [
                  "This recipe is taking a classic Filipino recipe and mixing it up. This Islander Mexican fusion reminds me of Yucatán tacos when we went to Cancun. 🤙🏽 We are going to cook this hot and fast at 300 degrees because I am hungry! 😉"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 tbsp salt",
                                               "5 garlic cloves, minced",
                                               "1/2 tbsp chicken bouillon powder",
                                               "1 tbsp paprika",
                                               "1 tsp white pepper or ground black pepper",
                                               "1/2 cup brown sugar",
                                               "1/4 cup banana ketchup",
                                               "1 cup pineapple juice",
                                               "1 tbsp oil"
                                           ]
                             },
                             {
                                 "heading":  "Pickled Onions",
                                 "items":  [
                                               "Cheese",
                                               "Cilantro",
                                               "Crema (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "1 medium red onion, sliced",
                  "1/2 cup rice vinegar",
                  "1/4 cup water 1 1/2 tbs sugar 1/2 tbs salt 1-2 tsp chili flakes",
                  "Combine all marinade ingredients.",
                  "Cover and marinate in the fridge for 48 hours.",
                  "Pat dry then season with Blazing Star Pork N Rub. Do not discard Marinade, this will be used later to braise the pork.",
                  "Setup grill for indirect cooking and smoke at 300 degrees until internal temp reaches 160-170 degrees, around 4-5 hours.",
                  "Place pork in a foil pan and pour in leftover marinade. It should come up half way and if it does not, add a little pineapple juice. Cover with foil and place back on the smoker until internal temp reaches 200 degrees, or 2-3 hours.",
                  "Remove from braising liquid and rest for 30-45 minutes before shredding.",
                  "Shred pork and pour in 1/4 cup braising liquid if it is too dry."
              ]
},
{
    "id":  "creamy-chimichurri-ribeye-wraps",
    "title":  "Creamy Chimichurri Ribeye Wraps",
    "date":  "2024-01-26",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/creamy-chimichurri-ribeye-wraps.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Creamy Chimichurri Ribeye Wraps 🌯\n\nGive these wraps a try the next time you feel like having BBQ but don’t want to feel guilty 😂\n\nGrilled Ribeye steaks seasoned with W Sauce and Blazing Star All in One Seasoning, then wrapped with your favorite mixed greens, onions, tomatoes and a creamy Chimichurri sauce 🔥🔥🔥\n\nSteaks vacuum seal in my @vacmasterfresh VP95 to lock in those flavors 🍻\n\nIngredients:\n2 Ribeye Steaks\nWorcestershire sauce \nAll in One Seasoning\n\nCreamy Chimichurri:\n2 tbsp Chimichurri seasoning\n2 tbsp red wine vinegar\n2 tbsp olive oil\n2 tbsp mayonnaise \n\nWrap ingredients:\nBurrito size tortillas \nTomatoes\nRed onions\nMixed greens\nShredded cheese\n\n🪵 @thegoodcharcoal Super Briquettes \n🧤 @cleanspaceproject Gloves \n🔪 @kumaknives Japanese Damascus Knife\n🧂 Seasoning and Sauces: \n@blazingstarbbq All in One Seasoning\n@bearandburtons W Sauce\n@alfrugoni Chimichurri Seasoning\n ————————————————————————\n#btcooks #steak #steakwraps #ribeye #worcestershire #chimichurri #tortillas #healthyfood #grilled #fresh #salad #greens #homecook #bbq #foodporn #delicious #sogood #charcoal",
    "description":  "Give these wraps a try the next time you feel like having BBQ but don’t want to feel guilty 😂 Grilled Ribeye steaks seasoned",
    "likes":  0,
    "intro":  [
                  "Give these wraps a try the next time you feel like having BBQ but don’t want to feel guilty 😂 Grilled Ribeye steaks seasoned with W Sauce and Blazing Star All in One Seasoning, then wrapped with your favorite mixed greens, onions, tomatoes and a creamy Chimichurri sauce 🔥🔥🔥 Steaks vacuum seal in my @vacmasterfresh VP95 to lock in those flavors 🍻"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 Ribeye Steaks"
                                           ]
                             },
                             {
                                 "heading":  "Creamy Chimichurri",
                                 "items":  [
                                               "2 tbsp Chimichurri seasoning",
                                               "2 tbsp red wine vinegar",
                                               "2 tbsp olive oil",
                                               "2 tbsp mayonnaise"
                                           ]
                             }
                         ],
    "steps":  [
                  "Burrito size tortillas",
                  "Tomatoes",
                  "Red onions",
                  "Mixed greens",
                  "Shredded cheese"
              ]
},
{
    "id":  "lemongrass-bbq-skewers",
    "title":  "Lemongrass BBQ Skewers",
    "date":  "2024-01-23",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/lemongrass-bbq-skewers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemongrass BBQ Skewers 🐖🐓\n\nThis recipe is a fusion between Filipino and Vietnamese BBQ. The lemongrass adds a little freshness while the fish sauce and banana ketchup provides that savory goodness. 🇵🇭🇻🇳 Served these up with a side of steamed rice and spiced vinegar (Suka). 🤙🏽\n\nPerfectly marinated using my VP95 vacuum chamber. 🍻\n\nAll ingredients brought to you by my friends at @islandpacificmarket \n\n2-3 Ibs skinless pork belly or chicken thighs (sliced thin)\n4 tbsp Fish sauce\n2 tbsp Oyster Sauce\n2 tbsp Light soy sauce\n2 tbsp Banana Ketchup \n4 Garlic cloves, minced\n3 stalks Green Onion, chopped\n4-5 stalks Lemon Grass\n1 tbsp Sesame Oil\n3 tbsp Sugar\n2 tbsp Honey \n1 tsp Ground pepper\n\n1. Mix all ingredients together.\n2. Marinate for 2-3 hrs or overnight in the refrigerator. \n3. Skewer the meat. \n4. Preheat the grill and setup for direct grilling over charcoal for best flavor.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Gloves \n🔪 @kumaknives Japanese Damascus Knife\n🛒 @islandpacificmarket Ingredients\n ————————————————————————\n#btcooks #porkbbq #chickenbbq #filipinobbq #vietnamesebbq #bbqskewers #marinade #pork #chicken #filipinofood #vietnamesefood #kabob #islanderfood #asianfood #asianfusion #pinoy #spicedvinegar #suka #foodporn #streetfood",
    "description":  "This recipe is a fusion between Filipino and Vietnamese BBQ. The lemongrass adds a little freshness while the fish sauce and",
    "likes":  0,
    "intro":  [
                  "This recipe is a fusion between Filipino and Vietnamese BBQ. The lemongrass adds a little freshness while the fish sauce and banana ketchup provides that savory goodness. 🇵🇭🇻🇳 Served these up with a side of steamed rice and spiced vinegar (Suka). 🤙🏽 Perfectly marinated using my VP95 vacuum chamber. 🍻 All ingredients brought to you by my friends at @islandpacificmarket 2-3 Ibs skinless pork belly or chicken thighs (sliced thin)"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp Oyster Sauce",
                                               "2 tbsp Light soy sauce",
                                               "2 tbsp Banana Ketchup",
                                               "4 Garlic cloves, minced",
                                               "3 stalks Green Onion, chopped",
                                               "4-5 stalks Lemon Grass",
                                               "1 tbsp Sesame Oil",
                                               "3 tbsp Sugar",
                                               "2 tbsp Honey",
                                               "1 tsp Ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients together.",
                  "Marinate for 2-3 hrs or overnight in the refrigerator.",
                  "Skewer the meat.",
                  "Preheat the grill and setup for direct grilling over charcoal for best flavor."
              ]
},
{
    "id":  "lemon-caper-chimichurri-grilled-salmon",
    "title":  "Lemon Caper Chimichurri Grilled Salmon",
    "date":  "2024-01-19",
    "category":  "Seafood",
    "image":  "images/recipes/lemon-caper-chimichurri-grilled-salmon.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Lemon Caper Chimichurri Grilled Salmon 🐟\n\nQuick and easy dish to prepare and the Lemon Caper Chimichurri is a must!!! \n\n4 salmon fillets\nSalt and pepper\n\nLemon Caper Chimichurri:\n4 tbsp Chimichurri seasoning\n2 tsp Capers, chopped\n1/2 Lemon, juiced\n4 tbsp Red wine vinegar \n4 tbsp Olive oil\n\n1. Season salmon fillets with salt and pepper. \n2. Grill directly over charcoal skin side down. \n3. After 3-5 minutes check to see if skin is stuck to the grates. If so, cook a little longer until it no longer sticks. \n4. Flip fillets and cook for another 3-5 minutes. \n5. Drizzle Chimichurri sauce over salmon fillets and serve with favorite salads or veggies. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Gloves \n🔪 @kumaknives Japanese Damascus Knife\n ————————————————————————\n#btcooks #salmon #grilledsalmon #Chimichurri #healthy #grilledfish #capers",
    "description":  "Quick and easy dish to prepare and the Lemon Caper Chimichurri is a must!!! 4 salmon fillets Salt and pepper",
    "likes":  0,
    "intro":  [
                  "Quick and easy dish to prepare and the Lemon Caper Chimichurri is a must!!! 4 salmon fillets Salt and pepper"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 tbsp Chimichurri seasoning",
                                               "2 tsp Capers, chopped",
                                               "1/2 Lemon, juiced",
                                               "4 tbsp Red wine vinegar",
                                               "4 tbsp Olive oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season salmon fillets with salt and pepper.",
                  "Grill directly over charcoal skin side down.",
                  "After 3-5 minutes check to see if skin is stuck to the grates. If so, cook a little longer until it no longer sticks.",
                  "Flip fillets and cook for another 3-5 minutes.",
                  "Drizzle Chimichurri sauce over salmon fillets and serve with favorite salads or veggies."
              ]
},
{
    "id":  "birria-de-res",
    "title":  "Birria de Res",
    "date":  "2024-01-14",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/birria-de-res.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Birria de Res 💣\n\nThis Birria was so easy to make using @ezbombsfood Birria Bombs. Love supporting small businesses and giving a shout out to these folks for coming up with a dope idea. Thanks @bellagtz_e for hooking us up 🍻🤙🏽\n\n2-3 lbs Beef Chuck\n1 Birria Bomb\nSalt, Pepper, and Garlic seasoning\n\n1. Season your beef on all sides. \n2. Using an Instant Pot, set it to Sauté and sear both sides of the beef until you develop a nice crust. Around 3-5 minutes on each side. \n3. Pour in 4 cups of water and Birria Bomb. \n4. Pressure cook on high for 1 hour and 30-45 minutes, depending on the size of your meat. \n5. Serve with diced onions, cilantro, and a side of tortilla. \n\n💣 @ezbombsfood Birria Bomb \n🥘 @instantpotofficial Pressure Cooker\n🧤 @cleanspaceproject Gloves \n🔪 @kumaknives Japanese Damascus Chef Knife\n ————————————————————————\n#btcooks #beef #mexicanfood #stew #soup #birria #birriaderes #beefstew #pressurecooker #instantpot",
    "description":  "This Birria was so easy to make using @ezbombsfood Birria Bombs. Love supporting small businesses and giving a shout out to",
    "likes":  0,
    "intro":  [
                  "This Birria was so easy to make using @ezbombsfood Birria Bombs. Love supporting small businesses and giving a shout out to these folks for coming up with a dope idea. Thanks @bellagtz_e for hooking us up 🍻🤙🏽 2-3 lbs Beef Chuck 1 Birria Bomb Salt, Pepper, and Garlic seasoning"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Using an Instant Pot, set it to Sauté and sear both sides of the beef until you develop a nice crust. Around 3-5 minutes on each side.",
                  "Pour in 4 cups of water and Birria Bomb.",
                  "Pressure cook on high for 1 hour and 30-45 minutes, depending on the size of your meat.",
                  "Serve with diced onions, cilantro, and a side of tortilla."
              ]
},
{
    "id":  "filipino-pork-bbq-skewers",
    "title":  "Filipino Pork BBQ Skewers",
    "date":  "2024-01-10",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-pork-bbq-skewers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Pork BBQ Skewers 🇵🇭🐖\n\nThese skewers are so good and perfect for parties. Packed with flavor and so addicting. 🍻\n\nIngredients:\n3 lbs pork shoulder or belly, sliced 1/4 inch thick\n1/2 cup low sodium soy sauce\n1/4 cup Oyster sauce\n1/2 cup Banana Ketchup\n1/2 bottle of Beer (I used Modelo)\n1/2 cup Pineapple Juice\n1/2 lemon, juiced\n1 head garlic, crushed\n2 tsp chicken bouillon powder\n1/2 cup brown sugar\n1 tsp ground black pepper\nBamboo skewers, soaked in water for 30 min\n\n1. Combine all ingredients, but separate 1/4 cup of marinade on the side for basting. \n2. Add pork into marinade and refrigerate for at least 4 hours, preferably overnight. \n3. Skewer pork into soaked bamboo skewers. \n4. Grill over lump charcoal, turning every 1-2 minutes to prevent the sugar from burning. \n5. Baste skewers throughout cook. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoak Lump Charcoal\n🧤 @cleanspaceproject Gloves \n ————————————————————————\n#btcooks #porkbbq #filipinobbq #bbqskewers #marinade #pork #filipinofood #kabobs #hawaiianfood #islanderfood",
    "description":  "These skewers are so good and perfect for parties. Packed with flavor and so addicting. 🍻",
    "likes":  0,
    "intro":  [
                  "These skewers are so good and perfect for parties. Packed with flavor and so addicting. 🍻"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs pork shoulder or belly, sliced 1/4 inch thick",
                                               "1/2 cup low sodium soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1/2 cup Banana Ketchup",
                                               "1/2 bottle of Beer (I used Modelo)",
                                               "1/2 cup Pineapple Juice",
                                               "1/2 lemon, juiced",
                                               "1 head garlic, crushed",
                                               "2 tsp chicken bouillon powder",
                                               "1/2 cup brown sugar",
                                               "1 tsp ground black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients, but separate 1/4 cup of marinade on the side for basting.",
                  "Add pork into marinade and refrigerate for at least 4 hours, preferably overnight.",
                  "Skewer pork into soaked bamboo skewers.",
                  "Grill over lump charcoal, turning every 1-2 minutes to prevent the sugar from burning.",
                  "Baste skewers throughout cook."
              ]
},
{
    "id":  "bbq-chicken-tocino",
    "title":  "BBQ Chicken Tocino",
    "date":  "2024-01-07",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/bbq-chicken-tocino.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "BBQ Chicken Tocino 🇵🇭🍗\n\nThis is a twist to the classic Filipino Tocino that is usually cooked with thin slices of marinated pork, pan fried and served with garlic rice. 🍻🤙🏽\n\nAll ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!! \n\nMarinade:\n3-4 lbs chicken thighs, boneless, skinless\n1/2 tbsp salt\n1 tbsp garlic powder\n1/2 tbsp chicken bouillon powder\n1 tbsp paprika\n1 tsp white pepper or ground black pepper\n1/2 cup brown sugar\n1/4 cup banana ketchup\n1 cup pineapple juice\n1 tbsp avocado oil\n\n1. In a bowl, add all the ingredients together and mix well. \n2. Add chicken into marinade, and refrigerate for 4-6 hours, preferably overnight. \n3. Set smoker to 225 and smoke for 30 minutes. \n4. Increase temp to 450 and cook for 30 minutes flipping half way through. \n5. Serve hot with a side of rice and grilled veggies. Enjoy!!!! \n\n————————————————————————\n#btcooks #outdoorcooking #food #easyrecipes #recipes #easyrecipes #filipinofood #grilledchicken #pinoyfood #marinaderecipe #chickenmarinade #tocino #chickentocino #marinatedmeat",
    "description":  "This is a twist to the classic Filipino Tocino that is usually cooked with thin slices of marinated pork, pan fried and served",
    "likes":  0,
    "intro":  [
                  "This is a twist to the classic Filipino Tocino that is usually cooked with thin slices of marinated pork, pan fried and served with garlic rice. 🍻🤙🏽 All ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 lbs chicken thighs, boneless, skinless",
                                               "1/2 tbsp salt",
                                               "1 tbsp garlic powder",
                                               "1/2 tbsp chicken bouillon powder",
                                               "1 tbsp paprika",
                                               "1 tsp white pepper or ground black pepper",
                                               "1/2 cup brown sugar",
                                               "1/4 cup banana ketchup",
                                               "1 cup pineapple juice",
                                               "1 tbsp avocado oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a bowl, add all the ingredients together and mix well.",
                  "Add chicken into marinade, and refrigerate for 4-6 hours, preferably overnight.",
                  "Set smoker to 225 and smoke for 30 minutes.",
                  "Increase temp to 450 and cook for 30 minutes flipping half way through.",
                  "Serve hot with a side of rice and grilled veggies. Enjoy!!!!",
                  ""
              ]
},
{
    "id":  "bbq-reaper-pineapple-wings",
    "title":  "BBQ Reaper Pineapple Wings",
    "date":  "2023-12-27",
    "category":  "Wings",
    "image":  "images/recipes/bbq-reaper-pineapple-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "BBQ Reaper Pineapple Wings 🔥🍗\n\nThese wings came out So Good!!! Seasoned with Blazing Star Reaper Seasoning and Ranch Seasoning, then topped off with Da Kine Smokey BBQ sauce with Pineapple Syrup. Perfect balance of sweetness and spice. 🤙🏽\n\nIngredients:\n2-3 pounds chicken wings\nOlive Oil\nBlazing Star Reaper Seasoning\nRanch Seasoning\nDa Kine Hawaiian Smokey BBQ Sauce\nDa Kine Pineapple Syrup\n\n1. Add oil to chicken wings to serve as a binder. \n2. Liberally season with Reaper and Ranch Seasoning, and place in the fridge uncovered for 2-3 hours. \n3. Preheat grill to 400 degrees using Lump Charcoal. \n4. Place wings on grill for indirect cooking and cook each side for 15 minutes, with lid closed. \n5. Mix together 1/2 cup of BBQ sauce and 1/4 cup of syrup into a bowl. \n6. Drizzle over cooked chicken wings and enjoy.\n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Black Nitrile Gloves \n🧂 Seasonings and Sauces:\n@blazingstarbbq Reaper Seasoning\n@dkhawaiian Smokey BBQ Sauce and Pineapple Syrup\n@hidden.valley Ranch Seasoning\n ————————————————————————\n#btcooks #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #easyrecipes #delicious #foodvideo #recipes #bbqwings #wings #wingwednesday #reaper #smokedwings #bbqsauce",
    "description":  "These wings came out So Good!!! Seasoned with Blazing Star Reaper Seasoning and Ranch Seasoning, then topped off with Da Kine",
    "likes":  0,
    "intro":  [
                  "These wings came out So Good!!! Seasoned with Blazing Star Reaper Seasoning and Ranch Seasoning, then topped off with Da Kine Smokey BBQ sauce with Pineapple Syrup. Perfect balance of sweetness and spice. 🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds chicken wings",
                                               "Olive Oil",
                                               "Blazing Star Reaper Seasoning",
                                               "Ranch Seasoning"
                                           ]
                             }
                         ],
    "steps":  [
                  "Da Kine Hawaiian Smokey BBQ Sauce",
                  "Da Kine Pineapple Syrup",
                  "Add oil to chicken wings to serve as a binder.",
                  "Liberally season with Reaper and Ranch Seasoning, and place in the fridge uncovered for 2-3 hours.",
                  "Preheat grill to 400 degrees using Lump Charcoal.",
                  "Place wings on grill for indirect cooking and cook each side for 15 minutes, with lid closed.",
                  "Mix together 1/2 cup of BBQ sauce and 1/4 cup of syrup into a bowl.",
                  "Drizzle over cooked chicken wings and enjoy."
              ]
},
{
    "id":  "asian-bang-chicken-wings",
    "title":  "Asian Bang Chicken Wings",
    "date":  "2023-12-07",
    "category":  "Wings",
    "image":  "images/recipes/asian-bang-chicken-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Asian Bang Chicken Wings 🔥🪽\n\nAsian Style marinated chicken wings 🍻. Perfectly paired with steamed rice and your favorite veggies. \n\nVacuum sealed in my VacMaster VP95 to add that extra flavor. \n\nIngredients:\n3-4 lbs party wings\n1/4 cup @blazingstarbbq Asian Bang Sauce\n1/2 cup low sodium soy sauce\n1/4 cup Oyster sauce\n1/2 cup Banana Ketchup\n1/2 bottle of Beer (I used Modelo)\n1/2 lemon, juiced\n1 head garlic, crushed\n2 tsp chicken bouillon \n1/2 cup brown sugar\n1/2 tsp ground black pepper\n\n1. Combine all ingredients, but separate 1/4 cup of marinade on the side for basting. \n2. Add marinade to chicken and refrigerate for at least 4-6 hours, preferably overnight. \n3. Set grill for indirect grilling at 400 degrees. \n4. Grill wings for 30-45 minutes flipping half way through. \n5. Baste wings throughout cook. \n\n🔥 @kamadojoe Konnected Joe\n🪵 @thegoodcharcoal Lump Charcoal\n🧤 @cleanspaceproject Nitrile Gloves \n🧂 Seasonings and Sauces:\n@blazingstarbbq Asian Bang Sauce\n🗃️ @vacmasterfresh VP95 Vacuum Chamber\n\n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #bbqwings #asianbbq #asianfood #wings",
    "description":  "Asian Style marinated chicken wings 🍻. Perfectly paired with steamed rice and your favorite veggies. Vacuum sealed in my",
    "likes":  0,
    "intro":  [
                  "Asian Style marinated chicken wings 🍻. Perfectly paired with steamed rice and your favorite veggies. Vacuum sealed in my VacMaster VP95 to add that extra flavor."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 lbs party wings",
                                               "1/4 cup @blazingstarbbq Asian Bang Sauce",
                                               "1/2 cup low sodium soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1/2 cup Banana Ketchup",
                                               "1/2 bottle of Beer (I used Modelo)",
                                               "1/2 lemon, juiced",
                                               "1 head garlic, crushed",
                                               "2 tsp chicken bouillon",
                                               "1/2 cup brown sugar",
                                               "1/2 tsp ground black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients, but separate 1/4 cup of marinade on the side for basting.",
                  "Add marinade to chicken and refrigerate for at least 4-6 hours, preferably overnight.",
                  "Set grill for indirect grilling at 400 degrees.",
                  "Grill wings for 30-45 minutes flipping half way through.",
                  "Baste wings throughout cook."
              ]
},
{
    "id":  "grilled-tocino-wings",
    "title":  "Grilled Tocino Wings",
    "date":  "2023-11-29",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-tocino-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Tocino Wings 🪽\n\nFilipino classic traditionally made with pork and served for breakfast, lunch, or dinner with garlic rice and fried eggs 🤙🏽. \n\nAll ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!! \n\nMarinade:\n3-4 lbs chicken wings\n1/2 tbsp salt\n5 garlic cloves, minced\n1/2 tbsp chicken bouillon powder\n1 tbsp paprika\n1 tsp white pepper or ground black pepper\n1/2 cup brown sugar\n1/4 cup banana ketchup\n1 cup pineapple juice\n1 tbsp oil\n\n1. In a bowl, add all the ingredients together and mix well. \n2. Add chicken into marinade, and refrigerate for 4-6 hours, preferably overnight. \n3. Cook over indirect heat at 375 for 30-45 minutes flipping half way through. \n4. Serve hot with garlic rice and fried eggs. Enjoy!!!! \n\n🛒 @islandpacificmarket Grocery Store\n🧤 @cleanspaceproject Black Nitrile Gloves\n ————————————————————————\n#btcooks #outdoorcooking #food #foodporn #tasty #easyrecipes #foodvideo #recipes #pinoy #filipinofood #tocino #tocilog #tocinowings #wingwednesday",
    "description":  "Filipino classic traditionally made with pork and served for breakfast, lunch, or dinner with garlic rice and fried eggs 🤙🏽.",
    "likes":  0,
    "intro":  [
                  "Filipino classic traditionally made with pork and served for breakfast, lunch, or dinner with garlic rice and fried eggs 🤙🏽. All ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!!"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 lbs chicken wings",
                                               "1/2 tbsp salt",
                                               "5 garlic cloves, minced",
                                               "1/2 tbsp chicken bouillon powder",
                                               "1 tbsp paprika",
                                               "1 tsp white pepper or ground black pepper",
                                               "1/2 cup brown sugar",
                                               "1/4 cup banana ketchup",
                                               "1 cup pineapple juice",
                                               "1 tbsp oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a bowl, add all the ingredients together and mix well.",
                  "Add chicken into marinade, and refrigerate for 4-6 hours, preferably overnight.",
                  "Cook over indirect heat at 375 for 30-45 minutes flipping half way through.",
                  "Serve hot with garlic rice and fried eggs. Enjoy!!!!"
              ]
},
{
    "id":  "pancit-bihon",
    "title":  "Pancit Bihon",
    "date":  "2023-11-16",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/pancit-bihon.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pancit Bihon 🇵🇭\n\nFilipino noodle stir-fry popular at any Filipino restaurant, Holiday Party, or Special occasion. The long noodle strands signify long life 🍻\n\nAll ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!! \n\nPancit Recipe:\n1 medium onion, diced\n3-4 Green onions, chopped and divided\n3-4 garlic cloves, minced\n1 large carrot, julienned \nHandful of green beans, chopped \n2 cup of chopped cabbage \n1 large chicken breast, chopped small\n1/4 lb pork, chopped small\n1 package Bihon noodles (Super Q Golden Bihon)\n2 tbsp olive oil\n2 tbps oyster sauce\n3 tbps soy sauce\n3 cups water \n1 tbsp Knorr chicken bouillon\nSalt and pepper\n\nGarnish:\nGreen Onions, chopped\nLemon wedges or Calamansi\n\n1. Add olive oil and pork in a large pot, season with salt and pepper. Cook pork until crispy. Remove and set aside. \n2. Add onions and garlic, cook until onions are semi translucent. \n3. Add chicken and season with salt and pepper. Cook for about 5-7 minutes or until chicken is fully cooked. \n4. Add Chinese Sausage, carrots, and cabbage and sauté for another 5-7 minutes. \n5. Add green beans. \n6. Remove mixture from pan and set aside in a separate bowl. \n7. Using the same pan, add water, oyster sauce, soy sauce, and bouillon. \n8. Let it come to a light boil and then add noodles making sure to absorb liquid in noodles. Stir until noodles are soft and no more liquid.\n9. Add back chicken, pork, and vegetable mixture back into pot and mix well. \n10. Taste and add salt and pepper as needed. \n11. Serve with slices of lemon or calamansi and sprinkles of fresh green onions. Enjoy!!! \n\n@islandpacificmarket \n@cleanspaceproject\n ————————————————————————\n#btcooks #instadaily #outdoorcooking #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #pinoy #filipinofood #pancit #noodles",
    "description":  "Filipino noodle stir-fry popular at any Filipino restaurant, Holiday Party, or Special occasion. The long noodle strands signify",
    "likes":  0,
    "intro":  [
                  "Filipino noodle stir-fry popular at any Filipino restaurant, Holiday Party, or Special occasion. The long noodle strands signify long life 🍻 All ingredients fresh and brought to you by our friends at @islandpacificmarket Go check them out!!! Pancit Recipe: 1 medium onion, diced 3-4 Green onions, chopped and divided"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 large carrot, julienned",
                                               "Handful of green beans, chopped",
                                               "2 cup of chopped cabbage",
                                               "1 large chicken breast, chopped small",
                                               "1/4 lb pork, chopped small",
                                               "1 package Bihon noodles (Super Q Golden Bihon)",
                                               "2 tbsp olive oil",
                                               "2 tbps oyster sauce",
                                               "3 tbps soy sauce",
                                               "3 cups water",
                                               "1 tbsp Knorr chicken bouillon"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add olive oil and pork in a large pot, season with salt and pepper. Cook pork until crispy. Remove and set aside.",
                  "Add onions and garlic, cook until onions are semi translucent.",
                  "Add chicken and season with salt and pepper. Cook for about 5-7 minutes or until chicken is fully cooked.",
                  "Add Chinese Sausage, carrots, and cabbage and sauté for another 5-7 minutes.",
                  "Add green beans.",
                  "Remove mixture from pan and set aside in a separate bowl.",
                  "Using the same pan, add water, oyster sauce, soy sauce, and bouillon.",
                  "Let it come to a light boil and then add noodles making sure to absorb liquid in noodles. Stir until noodles are soft and no more liquid.",
                  "Add back chicken, pork, and vegetable mixture back into pot and mix well.",
                  "Taste and add salt and pepper as needed.",
                  "Serve with slices of lemon or calamansi and sprinkles of fresh green onions. Enjoy!!!"
              ]
},
{
    "id":  "smoked-turkey",
    "title":  "Smoked Turkey",
    "date":  "2023-11-14",
    "category":  "Holiday",
    "image":  "images/recipes/smoked-turkey.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Turkey 🦃\n\nThis turkey came out juicy and combined with this marinade made it 🔥🔥🔥 \n\nCombination of olive oil, fresh herbs, spices and citrus, all blended together. \n\nIngredients \u0026 Recipe:\n12lb Turkey\n1 cup olive oil\n1/3 cup soy sauce\n1 onion quartered, placed inside turkey\n1-2 lemons juiced, then placed inside turkey \n1 large orange juiced, then placed inside turkey\n1/2 cup parsley leaves, chopped\n2 tablespoons rosemary leaves, chopped\n1/4 cup thyme leaves, chopped\n2-3 stalks green onions, sliced\n1 tablespoon garlic, minced\n2 teaspoons smoked paprika\n1 teaspoon paprika\n2 teaspoons salt\n1 tbsp chicken bouillon \n1 teaspoon fresh black pepper\n\n1. Place all of the ingredients in a medium bowl and mix together until combined. \n2. Loosen the skin of the turkey to separate from meat and add the marinade. \n3. Marinade for 12-24 hours.\n4. Smoke turkey at 250 degrees. The Turkey will take 30 minutes per pound to cook. \n5. Cook until the breast temperature reaches 165 degrees on the breast and the thighs reaches 175 degrees. ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #recipes #thanksgiving #turkey #smokedturkey #marinade",
    "description":  "This turkey came out juicy and combined with this marinade made it 🔥🔥🔥 Combination of olive oil, fresh herbs, spices and",
    "likes":  0,
    "intro":  [
                  "This turkey came out juicy and combined with this marinade made it 🔥🔥🔥 Combination of olive oil, fresh herbs, spices and citrus, all blended together."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "12lb Turkey",
                                               "1 cup olive oil",
                                               "1/3 cup soy sauce",
                                               "1 onion quartered, placed inside turkey",
                                               "1 large orange juiced, then placed inside turkey",
                                               "1/2 cup parsley leaves, chopped",
                                               "2 tablespoons rosemary leaves, chopped",
                                               "1/4 cup thyme leaves, chopped",
                                               "2-3 stalks green onions, sliced",
                                               "1 tablespoon garlic, minced",
                                               "2 teaspoons smoked paprika",
                                               "1 teaspoon paprika",
                                               "2 teaspoons salt",
                                               "1 tbsp chicken bouillon",
                                               "1 teaspoon fresh black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place all of the ingredients in a medium bowl and mix together until combined.",
                  "Loosen the skin of the turkey to separate from meat and add the marinade.",
                  "Marinade for 12-24 hours.",
                  "Smoke turkey at 250 degrees. The Turkey will take 30 minutes per pound to cook.",
                  "Cook until the breast temperature reaches 165 degrees on the breast and the thighs reaches 175 degrees. ————————————————————————"
              ]
},
{
    "id":  "carne-asada-tacos",
    "title":  "Carne Asada Tacos",
    "date":  "2023-11-07",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/carne-asada-tacos.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Carne Asada Tacos 🌮\n\nFlap Meat seasoned with @blazingstarbbq All in One Seasoning came out 🔥🔥🔥. Serve this meat as a plate or as a taco with corn tortillas, queso fresco, chopped up onions, and cilantro.\n\nMarinade Ingredients:\n3 pounds Flap Meat or Skirt Steak\nBlazing Star All in One Seasoning\nKnorr Beef Flavor Bouillon Powder\n1 Lime, juiced\n4 tbsp Soy sauce\n1 bottle of Mexican lager\n1/2 Red Onion, thinly sliced\n1/2 Bunch of cilantro\n1 Jalapeño, thinly sliced (optional)\n\n1. Season meat with seasoning on all sides. \n2. Lightly season meat with beef bouillon powder. \n3. Add the rest of the ingredients and marinate meat for 4-6 hours. \n4. Grill over direct heat using @bbcharcoal Lump Oak charcoal. \n5. Serve with corn tortillas, queso fresco, chopped up onions, and cilantro. Enjoy!!! 🍻🤙🏽\n\nAvocado Tomatillo Salsa:\n4 Tomatillos, cut in half\n1 Avocado\n3 Garlic cloves, peeled\n1/4 cup Cilantro\n1/4 Red onion\n1 Jalapeño pepper\n1/4 cup Water\n1 Lime juiced\nSalt to taste\n\n1. Roast all ingredients except for Avocado on a hot grill or skillet.\n2. Place all in a blender and blend until semi chunky and smooth.\n\n@blazingstarbbq \n@cleanspaceproject \n@knorr \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #tacotuesday #beer #modelo #carneasada #skirtsteak #flapmeat #mexicanfood #tacos",
    "description":  "Flap Meat seasoned with @blazingstarbbq All in One Seasoning came out 🔥🔥🔥. Serve this meat as a plate or as a taco with corn",
    "likes":  0,
    "intro":  [
                  "Flap Meat seasoned with @blazingstarbbq All in One Seasoning came out 🔥🔥🔥. Serve this meat as a plate or as a taco with corn tortillas, queso fresco, chopped up onions, and cilantro. Marinade Ingredients: 3 pounds Flap Meat or Skirt Steak Blazing Star All in One Seasoning Knorr Beef Flavor Bouillon Powder"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 tbsp Soy sauce",
                                               "1 bottle of Mexican lager",
                                               "1/2 Red Onion, thinly sliced",
                                               "1/2 Bunch of cilantro",
                                               "1 Jalapeño, thinly sliced (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season meat with seasoning on all sides.",
                  "Lightly season meat with beef bouillon powder.",
                  "Add the rest of the ingredients and marinate meat for 4-6 hours.",
                  "Grill over direct heat using @bbcharcoal Lump Oak charcoal.",
                  "Serve with corn tortillas, queso fresco, chopped up onions, and cilantro. Enjoy!!! 🍻🤙🏽",
                  "4 Tomatillos, cut in half",
                  "1 Avocado",
                  "3 Garlic cloves, peeled",
                  "1/4 cup Cilantro",
                  "1/4 Red onion",
                  "1 Jalapeño pepper",
                  "1/4 cup Water",
                  "1 Lime juiced",
                  "Salt to taste",
                  "Roast all ingredients except for Avocado on a hot grill or skillet.",
                  "Place all in a blender and blend until semi chunky and smooth."
              ]
},
{
    "id":  "steak-fajitas",
    "title":  "Steak Fajitas",
    "date":  "2023-11-02",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/steak-fajitas.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Steak Fajitas 🥩🌮\n\n2-3 pounds Skirt steak or Flap meat\n1/2 Large red onion\nHandful Cilantro\n\nFajita Ingredients:\n1/2 Large red onion, chopped\n6 cloves garlic, minced\n1 red bell pepper, sliced\n1 tomato\nHandful Cilantro\n8oz mushrooms, sliced \n1 tbsp avocado oil\n1 tbsp butter\nFajita Seasoning\n\n1. Season skirt steaks with seasoning, beer, onions, and cilantro. Refrigerate for 2-3 hours. \n2. Set grill to 500 degrees and grill steaks 2-3 minutes on each side. Set aside when done. \n3. Heat a large pan with oil. \n4. Sauté onions and bell peppers, cook until onions become translucent. \n5. Add garlic, tomatoes, mushrooms, cilantro, and 1 tbsp of butter. Season with Fajita seasoning. Cook for 3-4 minutes. \n6. Thinly slice steaks and add to fajita mixture. \n7. Serve with warm tortillas and guacamole. \n\n@spanglishasadero_official \n@modelousa \n@littlelusbbq \n@bbq_boards \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #fajitas #carneasada #steak #guacamole #skirtsteak #steakfajitas",
    "description":  "Steak Fajitas",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 Large red onion",
                                               "Handful Cilantro"
                                           ]
                             },
                             {
                                 "heading":  "Fajita Ingredients",
                                 "items":  [
                                               "1/2 Large red onion, chopped",
                                               "6 cloves garlic, minced",
                                               "1 red bell pepper, sliced",
                                               "1 tomato",
                                               "Handful Cilantro",
                                               "8oz mushrooms, sliced",
                                               "1 tbsp avocado oil",
                                               "1 tbsp butter"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season skirt steaks with seasoning, beer, onions, and cilantro. Refrigerate for 2-3 hours.",
                  "Set grill to 500 degrees and grill steaks 2-3 minutes on each side. Set aside when done.",
                  "Heat a large pan with oil.",
                  "Sauté onions and bell peppers, cook until onions become translucent.",
                  "Add garlic, tomatoes, mushrooms, cilantro, and 1 tbsp of butter. Season with Fajita seasoning. Cook for 3-4 minutes.",
                  "Thinly slice steaks and add to fajita mixture.",
                  "Serve with warm tortillas and guacamole."
              ]
},
{
    "id":  "salmon-dynamite",
    "title":  "Salmon Dynamite",
    "date":  "2023-10-24",
    "category":  "Seafood",
    "image":  "images/recipes/salmon-dynamite.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Salmon Dynamite 🐟🧨\n\nQuick and easy meal. Salmon fillets, topped with creamy crab dynamite, and a of drizzle of Bachan’s Miso BBQ sauce all over steamed rice. 🤙\n\nIngredients\n4 Salmon Fillets\n½ cup Japanese mayo or Regular Mayo with 2 tsp Sugar and 1 tsp Rice Vinegar\n1/4 cup cream cheese\n2 tbsp Sriracha \n1/2 lb Imitation Crab \nBachan’s Japanese BBQ Sauce with Miso\nFurikake\n2 green onions, sliced\n\n1. Lightly season Salmon with salt and pepper and pan sear over Medium/high heat. \n2. In a small bowl mix crab, mayonnaise, cream cheese, and Sriracha. \n3. Top each salmon with crab mixture. \n4. Heat grill or oven to 425-450 degrees. \n5. Once temp has been reached, place Salmon on grill and cook for 8-10 minutes with lid closed. \n6. Remove from grill and drizzle Japanese BBQ sauce, Furikake, and Green onions. \n7. Serve with side of steamed rice and enjoy 🤙\n\n@trybachans \n ————————————————————————\n\n#btcooks #instadaily #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #salmon #panseared #salmondynamite #crabdynamite #immitationcrab #seafood #rice",
    "description":  "Quick and easy meal. Salmon fillets, topped with creamy crab dynamite, and a of drizzle of Bachan’s Miso BBQ sauce all over",
    "likes":  0,
    "intro":  [
                  "Quick and easy meal. Salmon fillets, topped with creamy crab dynamite, and a of drizzle of Bachan’s Miso BBQ sauce all over steamed rice. 🤙"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 Salmon Fillets",
                                               "cup Japanese mayo or Regular Mayo with 2 tsp Sugar and 1 tsp Rice Vinegar",
                                               "1/4 cup cream cheese",
                                               "2 tbsp Sriracha",
                                               "1/2 lb Imitation Crab",
                                               "Bachan’s Japanese BBQ Sauce with Miso",
                                               "Furikake",
                                               "2 green onions, sliced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lightly season Salmon with salt and pepper and pan sear over Medium/high heat.",
                  "In a small bowl mix crab, mayonnaise, cream cheese, and Sriracha.",
                  "Top each salmon with crab mixture.",
                  "Heat grill or oven to 425-450 degrees.",
                  "Once temp has been reached, place Salmon on grill and cook for 8-10 minutes with lid closed.",
                  "Remove from grill and drizzle Japanese BBQ sauce, Furikake, and Green onions.",
                  "Serve with side of steamed rice and enjoy 🤙"
              ]
},
{
    "id":  "garlic-parmesan-reaper-wings",
    "title":  "Garlic Parmesan Reaper Wings",
    "date":  "2023-10-19",
    "category":  "Wings",
    "image":  "images/recipes/garlic-parmesan-reaper-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Garlic Parmesan Reaper Wings 🔥🍗\n\nThese wings came out FIYAH 🔥🔥🔥\nDusted with Blazing Star All in One and Reaper Seasoning, then tossed in some Garlic Parmesan dressing. Give these a try! 🍻🤙🏽\n\nIngredients:\n2-3 pounds chicken wings\nOlive Oil as a binder\nBlazing Star All in One Seasoning\nBlazing Star Reaper Seasoning\nGarlic Parmesan Dressing\n\n1. Add oil to chicken wings to act as a binder. \n2. Season with All in One and Reaper Seasoning, and place in the fridge uncovered for 2-3 hours. \n3. Preheat grill to 400 degrees. \n4. Place wings on grill and cook until skin is crispy. \n5. In a large bowl, toss wings with Garlic Parmesan dressing. \n\n@blazingstarbbq \n@kamadojoe \n@cleanspaceproject \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #chicken #wings #grilledwings #garlicparmesan #reaper",
    "description":  "These wings came out FIYAH 🔥🔥🔥 Dusted with Blazing Star All in One and Reaper Seasoning, then tossed in some Garlic Parmesan",
    "likes":  0,
    "intro":  [
                  "These wings came out FIYAH 🔥🔥🔥 Dusted with Blazing Star All in One and Reaper Seasoning, then tossed in some Garlic Parmesan dressing. Give these a try! 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds chicken wings",
                                               "Olive Oil as a binder",
                                               "Blazing Star All in One Seasoning",
                                               "Blazing Star Reaper Seasoning"
                                           ]
                             }
                         ],
    "steps":  [
                  "Garlic Parmesan Dressing",
                  "Add oil to chicken wings to act as a binder.",
                  "Season with All in One and Reaper Seasoning, and place in the fridge uncovered for 2-3 hours.",
                  "Preheat grill to 400 degrees.",
                  "Place wings on grill and cook until skin is crispy.",
                  "In a large bowl, toss wings with Garlic Parmesan dressing."
              ]
},
{
    "id":  "reaper-beef-jerky",
    "title":  "Reaper Beef Jerky ️",
    "date":  "2023-10-10",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/reaper-beef-jerky.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Reaper Beef Jerky 🌶️🐮\n\nDusted off the old Traeger to make some Beef Jerky. That W Sauce and Reaper seasoning was so 🔥🔥🔥 As my boy @blazingstarbbq would say “Oh Yeah!!!” 🍻🤙🏽\n\nIngredients:\n2 pounds beef round steak, cut into 1/4 inch strips\u20281/4 cup low sodium soy sauce\u20282 tablespoons Worcestershire sauce\u20282 tablespoons brown sugar\u20282 tablespoons Blazing Star Reaper Seasoning\u20281 teaspoon ground black pepper\u20281 teaspoon garlic powder\u20281 teaspoon onion powder\u20281 teaspoon paprika\n1/4 cup water\n\n1. Combine all marinade ingredients into a bowl. \n2. Put the beef slices in a large zip lock bag and pour the marinade over the beef. \n3. Refrigerate for 2-3 hours.\n4. Set smoker to 160-170 degrees. \n5. Smoke meat for 4-5 hours, flipping half way through. \n6. Check to be sure the jerky is done by lifting one end of the meat, if it holds its shape (and is somewhat pliable) the jerky is ready. If it bends too much, place back onto the smoker and check again after 30 minutes.\n7. When done, let it cool down for 30 minutes then place in a zip lock back into the refrigerator. 7. \n\n@blazingstarbbq \n@wsauceofficial \n@cleanspaceproject \n@traegergrills \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #beef #beefjerky #jerky #reaper #snack #protein",
    "description":  "Dusted off the old Traeger to make some Beef Jerky. That W Sauce and Reaper seasoning was so 🔥🔥🔥 As my boy @blazingstarbbq",
    "likes":  0,
    "intro":  [
                  "Dusted off the old Traeger to make some Beef Jerky. That W Sauce and Reaper seasoning was so 🔥🔥🔥 As my boy @blazingstarbbq would say “Oh Yeah!!!” 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 pounds beef round steak, cut into 1/4 inch strips 1/4 cup low sodium soy sauce 2 tablespoons Worcestershire sauce 2 tablespoons brown sugar 2 tablespoons Blazing Star Reaper Seasoning 1 teaspoon ground black pepper 1 teaspoon garlic powder 1 teaspoon onion powder 1 teaspoon paprika",
                                               "1/4 cup water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all marinade ingredients into a bowl.",
                  "Put the beef slices in a large zip lock bag and pour the marinade over the beef.",
                  "Refrigerate for 2-3 hours.",
                  "Set smoker to 160-170 degrees.",
                  "Smoke meat for 4-5 hours, flipping half way through.",
                  "Check to be sure the jerky is done by lifting one end of the meat, if it holds its shape (and is somewhat pliable) the jerky is ready. If it bends too much, place back onto the smoker and check again after 30 minutes.",
                  "When done, let it cool down for 30 minutes then place in a zip lock back into the refrigerator. 7."
              ]
},
{
    "id":  "grilled-pork-belly-inihaw-na-liempo",
    "title":  "Grilled Pork Belly (Inihaw na Liempo)",
    "date":  "2023-10-06",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-pork-belly-inihaw-na-liempo.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Pork Belly (Inihaw na Liempo) 🇵🇭🐖\n\nI partnered up with @islandpacificmarket to start off this Filipino American History Month with some grilled pork belly. Served with steamed rice, pickled papaya (Atchara), fried egg, and dipping sauce (sawsawan). Islander BBQ is 🔥🔥🔥\n\nPork Recipe:\n2 lbs pork belly, sliced 1/4-1/2 inch thick \n1/2 cup Light Soy Sauce\n1/4 cup Banana Ketchup\n1 Lemon, juiced\n6 Cloves Garlic, minced\n1/3 cup Brown Sugar\n1 tsp Ground Black Pepper\n\n1. Combine all ingredients, setting aside 1/4 cup of marinade for basting. Marinate pork for 4-6 hours, preferably overnight. \n2. Heat grill to 400-425 degrees and grill pork over direct heat for about 8 minutes on each side. Flip and baste each side. \n3. Serve with dipping sauce (sawsawan). \n\nSawsawan Recipe:\n1/4 cup Toyomanci \n1/4 cup Spiced Vinegar\nGround pepper\n1 tsp Sugar\n1 small red onion, finely diced\n\n@islandpacificmarket \n@cleanspaceproject \n@kamadojoe \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #grilledpork #porkbelly #inihaw #filipinofood #islanderfood #filipino #pinoy",
    "description":  "I partnered up with @islandpacificmarket to start off this Filipino American History Month with some grilled pork belly. Served",
    "likes":  0,
    "intro":  [
                  "I partnered up with @islandpacificmarket to start off this Filipino American History Month with some grilled pork belly. Served with steamed rice, pickled papaya (Atchara), fried egg, and dipping sauce (sawsawan). Islander BBQ is 🔥🔥🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs pork belly, sliced 1/4-1/2 inch thick",
                                               "1/2 cup Light Soy Sauce",
                                               "1/4 cup Banana Ketchup",
                                               "1 Lemon, juiced",
                                               "6 Cloves Garlic, minced",
                                               "1/3 cup Brown Sugar",
                                               "1 tsp Ground Black Pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients, setting aside 1/4 cup of marinade for basting. Marinate pork for 4-6 hours, preferably overnight.",
                  "Heat grill to 400-425 degrees and grill pork over direct heat for about 8 minutes on each side. Flip and baste each side.",
                  "Serve with dipping sauce (sawsawan).",
                  "1/4 cup Toyomanci",
                  "1/4 cup Spiced Vinegar",
                  "Ground pepper",
                  "1 tsp Sugar",
                  "1 small red onion, finely diced"
              ]
},
{
    "id":  "picanha-steaks",
    "title":  "Picanha Steaks",
    "date":  "2023-09-24",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/picanha-steaks.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Picanha Steaks 🥩 🔥\n\nThe Queen of Steaks!!! Tender slices of Sirloin Cap steaks seasoned with Blazing Star Beef Rub. Oh my!!!! 💦💦💦\n\n1. Cut the steaks going with the grain into 2 inch thick slices.\n2. Lightly season steaks with Kosher salt to Dry brine overnight. \n3. Remove steaks from fridge 45 minutes before cooking and lightly season with salt or SPG. \n4. Smoke at 225 indirect using B\u0026B Lump Oak Charcoal until IT hits 120 degrees. About 35-40 minutes. \n5. Sear each steak for 1-2 minutes on each side. IT target temp should hit around 125-130 degrees for medium rare. \n6. Let it rest for 10 minutes before slicing against the grain. \n\n@blazingstarbbq \n@cleanspaceproject \n@themeatstickig \n@bbcharcoal \n ————————————————————————\n#btcooks #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #picanha #sirloin #steak #reversesear #shaka #churrasco",
    "description":  "Picanha Steaks",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Cut the steaks going with the grain into 2 inch thick slices.",
                  "Lightly season steaks with Kosher salt to Dry brine overnight.",
                  "Remove steaks from fridge 45 minutes before cooking and lightly season with salt or SPG.",
                  "Smoke at 225 indirect using B\u0026B Lump Oak Charcoal until IT hits 120 degrees. About 35-40 minutes.",
                  "Sear each steak for 1-2 minutes on each side. IT target temp should hit around 125-130 degrees for medium rare.",
                  "Let it rest for 10 minutes before slicing against the grain."
              ]
},
{
    "id":  "chicken-katsu",
    "title":  "Chicken Katsu",
    "date":  "2023-09-21",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-katsu.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Katsu 🤙🏽\n\nChicken cutlets pounded, then seasoned with @blazingstarbbq Beef Rub, Oh Yeah!!! Topped with homemade Katsu sauce using @dkhawaiian Hot Soy Sauce 🔥🔥🔥\n\nIngredients:\n3-4 chicken breast cut in half\nBlazing Star Beef Rub or Salt and Pepper\nFlour\n3 Eggs\nPanko Crust\nOil for pan frying\n\nKatsu Sauce:\n1/4 cup ketchup\n1/2 tbsp Da Kine Hawaiian Hot Soy Sauce\n1/2 tbsp oyster sauce\n1/2 tbsp sugar\n\n@blazingstarbbq \n@dkhawaiian \n@cleanspaceproject \n\n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #panfried #chickenkatsu #hawaiianfood #islanderfood #mixedplate #hawaii #shaka #shoots",
    "description":  "Chicken cutlets pounded, then seasoned with @blazingstarbbq Beef Rub, Oh Yeah!!! Topped with homemade Katsu sauce using",
    "likes":  0,
    "intro":  [
                  "Chicken cutlets pounded, then seasoned with @blazingstarbbq Beef Rub, Oh Yeah!!! Topped with homemade Katsu sauce using @dkhawaiian Hot Soy Sauce 🔥🔥🔥"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "3 Eggs",
                  "Panko Crust",
                  "Oil for pan frying",
                  "1/4 cup ketchup",
                  "1/2 tbsp Da Kine Hawaiian Hot Soy Sauce",
                  "1/2 tbsp oyster sauce",
                  "1/2 tbsp sugar"
              ]
},
{
    "id":  "buttery-buffalo-air-fried-wings",
    "title":  "Buttery Buffalo Air Fried Wings",
    "date":  "2023-09-12",
    "category":  "Wings",
    "image":  "images/recipes/buttery-buffalo-air-fried-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Buttery Buffalo Air Fried Wings 🪽🔥\n\nThese wings were seasoned with @kindersflavors new fall seasoning, Buttery Buffalo. Topped with extra melted butter and more seasoning then dipped in a French Onion Crema using Kinders French Onion Seasoning, Sour Cream, and a squeeze of lemon.\n\nIngredients \u0026 Recipe\n2-3 pounds of party chicken wings\nButtery Buffalo Seasoning\n\nButter Sauce:\n1 stick of butter\n2-3 tbsp Buttery Buffalo Seasoning\n1/2 cup Hot sauce (optional)\n\nFrench Onion Crema:\nSour Cream\nFrench Onion Seasoning\n1/2 lemon, juiced\n\n1. Season chicken with Buttery Buffalo seasoning. \n2. Set air fryer to 375 degrees and cook chicken for 15 minutes. \n3. Flip wings and cook for another 10 minutes. \n4. Melt butter in a sauce pan and add 2 tbsp seasoning and hot sauce (optional)\n5. Drizzle butter sauce over wings and serve. \n\n@kindersflavors \n@instantpotofficial \n@cleanspaceproject \n ————————————————————————\n#btcooks #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #gameday #buffalowings #airfryer #chickenwings #ovenbaked #buffalosauce #wingwednesday",
    "description":  "These wings were seasoned with @kindersflavors new fall seasoning, Buttery Buffalo. Topped with extra melted butter and more",
    "likes":  0,
    "intro":  [
                  "These wings were seasoned with @kindersflavors new fall seasoning, Buttery Buffalo. Topped with extra melted butter and more seasoning then dipped in a French Onion Crema using Kinders French Onion Seasoning, Sour Cream, and a squeeze of lemon."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds of party chicken wings"
                                           ]
                             },
                             {
                                 "heading":  "Butter Sauce",
                                 "items":  [
                                               "1 stick of butter",
                                               "2-3 tbsp Buttery Buffalo Seasoning",
                                               "1/2 cup Hot sauce (optional)"
                                           ]
                             },
                             {
                                 "heading":  "French Onion Crema",
                                 "items":  [
                                               "Sour Cream",
                                               "French Onion Seasoning",
                                               "1/2 lemon, juiced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season chicken with Buttery Buffalo seasoning.",
                  "Set air fryer to 375 degrees and cook chicken for 15 minutes.",
                  "Flip wings and cook for another 10 minutes.",
                  "Melt butter in a sauce pan and add 2 tbsp seasoning and hot sauce (optional)",
                  "Drizzle butter sauce over wings and serve."
              ]
},
{
    "id":  "whiskey-apple-italian-sausage-rolls-with-french-onion-crema",
    "title":  "Whiskey Apple Italian Sausage Rolls with French Onion Crema",
    "date":  "2023-09-08",
    "category":  "Other",
    "image":  "images/recipes/whiskey-apple-italian-sausage-rolls-with-french-onion-crema.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Whiskey Apple Italian Sausage Rolls with French Onion Crema 🌭\n\nThank you @kindersflavors for these Fall flavors 🔥\n\nItalian sausages cooked on the @blackstoneproducts with sliced onions and bell peppers, seasoned with Whiskey Apple seasoning. Lathered with Citrus French Onion Crema\n\n4 Italian Sausages\n4 French Rolls\n1 small Onion, sliced\n1 Green Bell Pepper\n1 Red Bell Pepper\nKinders Whiskey Apple Seasoning\nMozzarella Cheese \n\nCrema Sauce:\nKinders French Onion Seasoning\nSour cream\n1 lemon\n\n@kindersflavors \n@blackstoneproducts \n\n ————————————————————————\n#btcooks #traeger #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #italiansausage #blackstone #griddle #sandwhich #frenchbread #italian #french #whiskey",
    "description":  "Thank you @kindersflavors for these Fall flavors 🔥 Italian sausages cooked on the @blackstoneproducts with sliced onions and",
    "likes":  0,
    "intro":  [
                  "Thank you @kindersflavors for these Fall flavors 🔥 Italian sausages cooked on the @blackstoneproducts with sliced onions and bell peppers, seasoned with Whiskey Apple seasoning. Lathered with Citrus French Onion Crema"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 French Rolls",
                                               "1 small Onion, sliced",
                                               "1 Green Bell Pepper",
                                               "1 Red Bell Pepper"
                                           ]
                             },
                             {
                                 "heading":  "Crema Sauce",
                                 "items":  [
                                               "Kinders French Onion Seasoning",
                                               "Sour cream",
                                               "1 lemon"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "smoked-pork-adobo-ribs",
    "title":  "Smoked Pork Adobo Ribs",
    "date":  "2023-09-06",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/smoked-pork-adobo-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Pork Adobo Ribs 🇵🇭🐖\n\nTaking one of my favorite Filipino comfort dishes and adding a little BBQ twist to it. Smoked baby back ribs Adobo style, iced with @blazingstarbbq Pork’n Rub 🍻🤙🏽\n\nIngredients \u0026 Recipe\n3 pounds pork ribs\n1/2 cup low sodium soy sauce\n3 tbsp vinegar\n2 tbsp brown sugar\n5 pieces dried bay leaves\n5 pieces of garlic cloves, crushed\n1 small onion, sliced \n1/2 tbsp Knorr Chicken bouillon\n1/2 tbsp fresh ground pepper\n1/4 cup water\n\n1. Combine all ingredients into a bowl.\n2. Add pork into marinade and refrigerate for 4-5 hours. \n3. Remove ribs from marinade and pat dry. Do not discard marinade. \n4. Season ribs with favorite pork rub an hour before ready to cook. \n5. Preheat grill to 275 degrees and set it up for indirect cooking. \n6. Cook for 2 hours. \n7. Pour marinade into pot under medium heat. \n8. Add ribs and 1/2 cup of water into pot and cook for 30 minutes with lid on. \n9. Add an additional 1/2 cup increments of water if it is too salty. (Optional)\n10. Serve with garlic rice and side of boiled eggs. \n\n@kamadojoe \n@blazingstarbbq \n@cleanspaceproject \n ————————————————————————\n#btcooks #traeger #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #filipinofood #adobo #porkadobo #babybackribs #ribs #filipino #comfortfood",
    "description":  "Taking one of my favorite Filipino comfort dishes and adding a little BBQ twist to it. Smoked baby back ribs Adobo style, iced",
    "likes":  0,
    "intro":  [
                  "Taking one of my favorite Filipino comfort dishes and adding a little BBQ twist to it. Smoked baby back ribs Adobo style, iced with @blazingstarbbq Pork’n Rub 🍻🤙🏽"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds pork ribs",
                                               "1/2 cup low sodium soy sauce",
                                               "3 tbsp vinegar",
                                               "2 tbsp brown sugar",
                                               "5 pieces dried bay leaves",
                                               "5 pieces of garlic cloves, crushed",
                                               "1 small onion, sliced",
                                               "1/2 tbsp Knorr Chicken bouillon",
                                               "1/2 tbsp fresh ground pepper",
                                               "1/4 cup water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients into a bowl.",
                  "Add pork into marinade and refrigerate for 4-5 hours.",
                  "Remove ribs from marinade and pat dry. Do not discard marinade.",
                  "Season ribs with favorite pork rub an hour before ready to cook.",
                  "Preheat grill to 275 degrees and set it up for indirect cooking.",
                  "Cook for 2 hours.",
                  "Pour marinade into pot under medium heat.",
                  "Add ribs and 1/2 cup of water into pot and cook for 30 minutes with lid on.",
                  "Add an additional 1/2 cup increments of water if it is too salty. (Optional)",
                  "Serve with garlic rice and side of boiled eggs."
              ]
},
{
    "id":  "pineapple-teriyaki-chicken",
    "title":  "Pineapple Teriyaki Chicken",
    "date":  "2023-08-24",
    "category":  "Poultry",
    "image":  "images/recipes/pineapple-teriyaki-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pineapple Teriyaki Chicken 🤙🏽\n\nThe perfect pairing to Teriyaki has to be Pineapple. @trybachans killer Teriyaki sauce combined with @dkhawaiian Pineapple syrup was so good!!! 🔥\n\n3-4 pounds boneless and skinless chicken thighs\n1/4 cup Bachan’s Original BBQ Sauce\n4 tbsp Da Kines Hawaiian Pineapple Syrup\n2 Green Onion Stalks, chopped\n2 garlic cloves, minced\n1 small knob ginger, minced\n\n1. Mix all ingredients together and marinate for at least 4-6 hours, preferably overnight. \n2. Preheat grill to 375 degrees and cook direct over charcoal until internal temp of 165, around 6-7 minutes on each side. \n3. Serve with steamed rice and Hawaiian Mac salad, drizzle a little more of that sauce too 🤙🏽\n\n@trybachans \n@dkhawaiian \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #teriyakichicken #hawaii #hawaiianfood #mixedplate\n#aloha #islanderfood",
    "description":  "The perfect pairing to Teriyaki has to be Pineapple. @trybachans killer Teriyaki sauce combined with @dkhawaiian Pineapple syrup",
    "likes":  0,
    "intro":  [
                  "The perfect pairing to Teriyaki has to be Pineapple. @trybachans killer Teriyaki sauce combined with @dkhawaiian Pineapple syrup was so good!!! 🔥"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/4 cup Bachan’s Original BBQ Sauce",
                                               "4 tbsp Da Kines Hawaiian Pineapple Syrup",
                                               "2 Green Onion Stalks, chopped",
                                               "2 garlic cloves, minced",
                                               "1 small knob ginger, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients together and marinate for at least 4-6 hours, preferably overnight.",
                  "Preheat grill to 375 degrees and cook direct over charcoal until internal temp of 165, around 6-7 minutes on each side.",
                  "Serve with steamed rice and Hawaiian Mac salad, drizzle a little more of that sauce too 🤙🏽"
              ]
},
{
    "id":  "pog-citrus-cooler",
    "title":  "POG Citrus Cooler",
    "date":  "2023-08-23",
    "category":  "Other",
    "image":  "images/recipes/pog-citrus-cooler.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "POG Citrus Cooler 🍻🤙🏽\n\nThis drink is dangerous. My friends at @dkhawaiian have a perfect POG syrup that can be used for anything, especially for this drink to cool you down during these hot summer days. Paired with @titosvodka and citrus sparkling water, it’s like sipping on juice 💦\n\n2 shots of Vodka \n2 shots of POG Syrup \n4oz Citrus sparkling water\nHandful ice cubes\n\nCombine together and enjoy! 🍻\n\n@dkhawaiian \n@titosvodka \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #alcohol #mixeddrinks #vodka #pog #drunk #drinks",
    "description":  "POG Citrus Cooler",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 shots of Vodka",
                                               "2 shots of POG Syrup",
                                               "4oz Citrus sparkling water",
                                               "Handful ice cubes"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine together and enjoy! 🍻"
              ]
},
{
    "id":  "jalape-o-reaper-ranch-pickles",
    "title":  "Jalapeño Reaper Ranch Pickles",
    "date":  "2023-08-18",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/jalape-o-reaper-ranch-pickles.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Jalapeño Reaper Ranch Pickles\n\nThese have to be my new favorite. I don’t think I can eat pickles any other way. 🥒\n\nMy boy Blazing Star made these pickles using his Reaper Seasoning and I saw WoodFire and Whiskey spin these off with his Jalapeño Ranch seasoning. I had to make it and they are 🔥🔥🔥. \n\n1 tbsp Blazing Star Reaper Seasoning\n1 tbsp Ranch Seasoning\n1 tsp Jalapeño Purée \n1 24oz jar of your favorite Pickles\n\n1. Combine seasoning and purée into pickle jar and reseal. \n2. Refrigerate for 48 hours before serving. \n\n@blazingstarbbq \n@woodfire_whiskey \n@mtolivepickles \n@pepperexchange \n@hidden.valley \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #pickles #ranchseasoning #mtolive #picklejuice #pickleball #snack",
    "description":  "These have to be my new favorite. I don’t think I can eat pickles any other way. 🥒 My boy Blazing Star made these pickles using",
    "likes":  0,
    "intro":  [
                  "These have to be my new favorite. I don’t think I can eat pickles any other way. 🥒 My boy Blazing Star made these pickles using his Reaper Seasoning and I saw WoodFire and Whiskey spin these off with his Jalapeño Ranch seasoning. I had to make it and they are 🔥🔥🔥."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 tbsp Ranch Seasoning",
                                               "1 tsp Jalapeño Purée",
                                               "1 24oz jar of your favorite Pickles"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine seasoning and purée into pickle jar and reseal.",
                  "Refrigerate for 48 hours before serving."
              ]
},
{
    "id":  "smoked-beef-ribs",
    "title":  "Smoked Beef Ribs",
    "date":  "2023-08-17",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-beef-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Beef Ribs\n\nBeef ribs have to be one of my favorite cuts of meat. Seasoned with Blazing Star Beef Seasoning and the end result was 💦💦💦\n\nIngredients:\n1-2 Racks beef plate short ribs about 6 lbs\nBlazing Star Beef Seasoning \nKosher Salt\n\n1. Lightly season ribs with salt and wrap with Saran Wrap, refrigerate overnight to dry brine. \n2. Season with Beef seasoning on both sides and let rest for 30-60 minutes before placing in the grill. \n3. Preheat grill to 250 degrees for indirect cooking using lump charcoal and pecan blocks. \n4. Smoke Ribs until internal temp hits 165 degrees, pull off grill and wrap with butcher paper. \n5. Place back onto grill and cook until IT hits 200-203 degrees, until thermometer probes goes in like butter. \n6. Let rest for 1-2 hours before serving. \u2028\n@kamadojoe \n@cleanspaceproject \n@blazingstarbbq \n@thegoodcharcoal \n\n————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #beefribs #smokedribs #shortribs #fyp",
    "description":  "Beef ribs have to be one of my favorite cuts of meat. Seasoned with Blazing Star Beef Seasoning and the end result was 💦💦💦",
    "likes":  0,
    "intro":  [
                  "Beef ribs have to be one of my favorite cuts of meat. Seasoned with Blazing Star Beef Seasoning and the end result was 💦💦💦"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1-2 Racks beef plate short ribs about 6 lbs"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lightly season ribs with salt and wrap with Saran Wrap, refrigerate overnight to dry brine.",
                  "Season with Beef seasoning on both sides and let rest for 30-60 minutes before placing in the grill.",
                  "Preheat grill to 250 degrees for indirect cooking using lump charcoal and pecan blocks.",
                  "Smoke Ribs until internal temp hits 165 degrees, pull off grill and wrap with butcher paper.",
                  "Place back onto grill and cook until IT hits 200-203 degrees, until thermometer probes goes in like butter.",
                  "Let rest for 1-2 hours before serving."
              ]
},
{
    "id":  "grilled-miso-salmon",
    "title":  "Grilled Miso Salmon",
    "date":  "2023-08-07",
    "category":  "Seafood",
    "image":  "images/recipes/grilled-miso-salmon.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Miso Salmon 🍣🔥\n\nThis miso glazed salmon is sweet, savory, and full of flavor. @trybachans new Miso Japanese BBQ sauce provided the perfect caramelization on the outside and was flaky/moist in the middle. Fillets were seasoned with @boarsnightout - White Lightning with Double Garlic. 🤙🏽\n\nGrilled on the @kamadojoe using @thegoodcharcoal Lump Charcoal and Pecan chunks. 🔥🍻\n\n4 Salmon Fillets\n1 Lemon, sliced\nBachan’s Miso BBQ Sauce\nSalt and Pepper or favorite seasoning\nMayonnaise \n\n1. Preheat grill to 450 degrees for indirect cooking. \n2. Season both sides of fillets with salt and pepper or favorite seasoning. \n3. Lather top side of fillet with mayonnaise. \n4. Place 2 slices of lemon for each fillet on grill, then fillets on top.\n5. Close lid and cook for 8-10 minutes. \n6. Drizzle Miso BBQ sauce halfway through cook. \n7. When done drizzle more sauce over fillets and serve with rice or salad. \n\n@trybachans \n@boarsnightout \n@thegoodcharcoal \n@kamadojoe \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #foodreels #reelfood #reelsinstagram #grilledsalmon #salmon #seafood #bbqsauce #miso #fyp",
    "description":  "This miso glazed salmon is sweet, savory, and full of flavor. @trybachans new Miso Japanese BBQ sauce provided the perfect",
    "likes":  0,
    "intro":  [
                  "This miso glazed salmon is sweet, savory, and full of flavor. @trybachans new Miso Japanese BBQ sauce provided the perfect caramelization on the outside and was flaky/moist in the middle. Fillets were seasoned with @boarsnightout - White Lightning with Double Garlic. 🤙🏽 Grilled on the @kamadojoe using @thegoodcharcoal Lump Charcoal and Pecan chunks. 🔥🍻 4 Salmon Fillets 1 Lemon, sliced Bachan’s Miso BBQ Sauce Salt and Pepper or favorite seasoning Mayonnaise"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Season both sides of fillets with salt and pepper or favorite seasoning.",
                  "Lather top side of fillet with mayonnaise.",
                  "Place 2 slices of lemon for each fillet on grill, then fillets on top.",
                  "Close lid and cook for 8-10 minutes.",
                  "Drizzle Miso BBQ sauce halfway through cook.",
                  "When done drizzle more sauce over fillets and serve with rice or salad."
              ]
},
{
    "id":  "filipino-eggplant-omelette",
    "title":  "Filipino Eggplant Omelette",
    "date":  "2023-08-02",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-eggplant-omelette.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Eggplant Omelette 🍆🍳 \n\n(Tortang Talong) Pan fried grilled eggplants dipped in eggs. A popular Filipino meal served for breakfast, lunch, or dinner with steamed rice and banana ketchup 🤙🏽. \n\nRecipe:\n4 medium Japanese Eggplants\nSalt or Boars Night Out - Double Garlic White Lightning Seasoning\nPepper\n4 eggs\nOil for pan frying\n\n1. Grill eggplants on high heat until a char developed on all sides. \n2. Peel the skin off and flatten on a plate. \n3. Lightly season eggplant with salt and pepper. \n4. Combine eggs in a bowl and beat them until smooth. \n5. Pour 1/4 cup of eggs over eggplant and evenly coat. \n6. In a large pan, heat oil on Medium heat. \n7. Add eggplant slowly into pan keeping it flat. \n8. Cook until brown on both sides. \n9. Serve with steamed rice and ketchup. \n\n@boarsnightout \n@jufranofficial \n\n————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #eggplant #omlette #torta #filipinofood #ketchup #rice",
    "description":  "(Tortang Talong) Pan fried grilled eggplants dipped in eggs. A popular Filipino meal served for breakfast, lunch, or dinner with",
    "likes":  0,
    "intro":  [
                  "(Tortang Talong) Pan fried grilled eggplants dipped in eggs. A popular Filipino meal served for breakfast, lunch, or dinner with steamed rice and banana ketchup 🤙🏽. Recipe: 4 medium Japanese Eggplants Salt or Boars Night Out - Double Garlic White Lightning Seasoning Pepper 4 eggs Oil for pan frying"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Peel the skin off and flatten on a plate.",
                  "Lightly season eggplant with salt and pepper.",
                  "Combine eggs in a bowl and beat them until smooth.",
                  "Pour 1/4 cup of eggs over eggplant and evenly coat.",
                  "In a large pan, heat oil on Medium heat.",
                  "Add eggplant slowly into pan keeping it flat.",
                  "Cook until brown on both sides.",
                  "Serve with steamed rice and ketchup."
              ]
},
{
    "id":  "yuzu-bbq-chicken",
    "title":  "Yuzu BBQ Chicken",
    "date":  "2023-08-01",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/yuzu-bbq-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Yuzu BBQ Chicken 🍗🍋\n\nThese thighs were so good with that hint of Yuzu and a perfect balance of sweet/savory. Marinated with Bachan’s Yuzu BBQ sauce, ginger, garlic, green onions, and Fish sauce for a little Umami. \n\nCooked indirect on the Kamado using B\u0026B Charcoal and Pecan Wood. \n\n4-5 pounds Chicken Thighs\n1 cup Bachan’s Yuzu BBQ Sauce\n2 green onions, chopped\n1 knob Ginger, minced\n1/2 cup Cilantro, chopped\n1 tbsp fish sauce\n1/4 cup water\n\n1. Combine all ingredients and refrigerate for at least 6 hours, preferably overnight. \n2. Set up grill for indirect cooking at 375 degrees and cook for 30-45 minutes or until IT hits 185 degrees. \n3. Serve with steamed rice and a side of Mac salad. 🤙🏽\n\n@trybachans \n@bbq_boards \n@kamadojoe \n@bbcharcoal \n\n————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #yuzu #bbqchicken #marinade #chickenthighs #bbqsauce #foryou",
    "description":  "These thighs were so good with that hint of Yuzu and a perfect balance of sweet/savory. Marinated with Bachan’s Yuzu BBQ sauce,",
    "likes":  0,
    "intro":  [
                  "These thighs were so good with that hint of Yuzu and a perfect balance of sweet/savory. Marinated with Bachan’s Yuzu BBQ sauce, ginger, garlic, green onions, and Fish sauce for a little Umami. Cooked indirect on the Kamado using B\u0026B Charcoal and Pecan Wood."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 cup Bachan’s Yuzu BBQ Sauce",
                                               "2 green onions, chopped",
                                               "1 knob Ginger, minced",
                                               "1/2 cup Cilantro, chopped",
                                               "1 tbsp fish sauce",
                                               "1/4 cup water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and refrigerate for at least 6 hours, preferably overnight.",
                  "Set up grill for indirect cooking at 375 degrees and cook for 30-45 minutes or until IT hits 185 degrees.",
                  "Serve with steamed rice and a side of Mac salad. 🤙🏽"
              ]
},
{
    "id":  "grilled-filipino-bistek",
    "title":  "Grilled Filipino Bistek",
    "date":  "2023-07-19",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-filipino-bistek.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Filipino Bistek 🔥🥩🇵🇭\n\nThin slices of Chuck Steaks marinated in Soy Sauce, Calamansi, Garlic, and Onions. Typically pan fried then braised in its own marinade. Grilled on the Kamamdo over B\u0026B Charcoal and served over steamed rice and grilled onions. \n\nIngredients:\n3 lbs Chuck Steaks, sliced 1/4 -1/2 inch thick\n1/4 cup Calamansi juiced or 1 Lemon\n1 head garlic, peeled and crushed\n1/2 cup low sodium soy sauce\n1/2 tsp onion powder\n1/2 tbsp Knorr Beef Bouillon Powder\n1/2 tsp pepper\n2 tbsp Olive Oil\n1 onion, peeled and sliced into rings\n\n1. Combine all ingredients and marinate sliced chuck steaks for 4-6 hours. \n2. Heat grill to 450 degrees. \n3. Cook steaks for 2-3 minutes on each side. \n4. Take onions from marinade and grill them in a pan or griddle. \n5. Serve with steamed rice and top with grilled onions. \n\n@kamadojoe \n@bbcharcoal @knorr \n \n————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #bistek #filipinofood #chucksteak #steaks #marinatedmeat #bistektagalog",
    "description":  "Thin slices of Chuck Steaks marinated in Soy Sauce, Calamansi, Garlic, and Onions. Typically pan fried then braised in its own",
    "likes":  0,
    "intro":  [
                  "Thin slices of Chuck Steaks marinated in Soy Sauce, Calamansi, Garlic, and Onions. Typically pan fried then braised in its own marinade. Grilled on the Kamamdo over B\u0026B Charcoal and served over steamed rice and grilled onions."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs Chuck Steaks, sliced 1/4 -1/2 inch thick",
                                               "1/4 cup Calamansi juiced or 1 Lemon",
                                               "1 head garlic, peeled and crushed",
                                               "1/2 cup low sodium soy sauce",
                                               "1/2 tsp onion powder",
                                               "1/2 tbsp Knorr Beef Bouillon Powder",
                                               "1/2 tsp pepper",
                                               "2 tbsp Olive Oil",
                                               "1 onion, peeled and sliced into rings"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate sliced chuck steaks for 4-6 hours.",
                  "Heat grill to 450 degrees.",
                  "Cook steaks for 2-3 minutes on each side.",
                  "Take onions from marinade and grill them in a pan or griddle.",
                  "Serve with steamed rice and top with grilled onions."
              ]
},
{
    "id":  "fried-sinigang-wings",
    "title":  "Fried Sinigang Wings",
    "date":  "2023-07-17",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/fried-sinigang-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Fried Sinigang Wings 🍗🇵🇭\n\nAnother twist on the popular Filipino comfort dish Sinigang. The flavor profiles are so good, reminds me of deep fried lemon pepper chicken wings. \n\nIngredients:\n4 pounds chicken wings\n2 tbsp tamarind base powder (Knorr Sinigang Powder)\n1.5 tbsp chicken bouillon \n1.5 tbsp fish sauce\n1/2 tsp pepper\n\nWing Batter\n2 cups All Purpose Flour\n\n1. Combine all ingredients and marinate for 2-4 hours. \n2. Add Canola or Peanut Oil and heat deep fryer to 350 degrees. \n3. In a zip lock bag, add 2 cups of All Purpose Flour. Throw in a handful of wings shaking up the flour coating the wings on all sides. \n4. Fry in batches until golden brown. \n\n@knorr \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #instagrampost #friedchicken #friedwings #sinigang #deepfried #sinigangwings",
    "description":  "Another twist on the popular Filipino comfort dish Sinigang. The flavor profiles are so good, reminds me of deep fried lemon",
    "likes":  77,
    "intro":  [
                  "Another twist on the popular Filipino comfort dish Sinigang. The flavor profiles are so good, reminds me of deep fried lemon pepper chicken wings."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 pounds chicken wings",
                                               "2 tbsp tamarind base powder (Knorr Sinigang Powder)",
                                               "5 tbsp chicken bouillon",
                                               "5 tbsp fish sauce",
                                               "1/2 tsp pepper",
                                               "Wing Batter",
                                               "2 cups All Purpose Flour"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate for 2-4 hours.",
                  "Add Canola or Peanut Oil and heat deep fryer to 350 degrees.",
                  "In a zip lock bag, add 2 cups of All Purpose Flour. Throw in a handful of wings shaking up the flour coating the wings on all sides.",
                  "Fry in batches until golden brown."
              ]
},
{
    "id":  "spam-fried-rice",
    "title":  "Spam Fried Rice",
    "date":  "2023-07-12",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/spam-fried-rice.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Spam Fried Rice!!!! 🤙🏽\n\nI love Spam and this is a quick and easy dish to make for any time of the day. Recipe below👇\n\nIngredients \u0026 Recipe:\n* 1 can Spam, cut into cubes\n* 2 cups white rice, uncooked measurement \n* 3 green onions, chopped\n* 4 eggs, beaten\n* 1 tbsp Knorr Chicken Bouillon Powder\n* 1 tsp white pepper\n* 1 tsp sugar\n* 4 tbsp Avocado Oil\n\n1. Cook rice with the water only coming up half way to the first finger line. (Filipino Measurement 🇵🇭). This will give a drier consistency. Once rice is cooked, remove lid and let it sit for about 10-20 minutes.\n2. In a large pot heat oil under medium-high heat. \n3. Add Spam and cook for about 3-4 minutes on each side. \n4. Move Spam to one side and add 4 large eggs and scramble. \n5. Add the green onions and rice. \n6. Add Chicken Bouillon powder, sugar, and white pepper, mixing everything together. \n7. Taste and adjust for seasoning.\u2028\n@spambrand \n@knorr \n\n ————————————————————————\n#btcooks #grilling #backyardgrilling #blackstone #griddle #foodporn #quickmeals #recipes #recipeoftheday #sharingrecipes #cookingtips #tasty #delicious #foodpics #hungry #foodgasm #homecooking #homecook #foodlover #easyrecipes #spam #friedrice #dintaifung #spamfriedrice #igfood #meatlover #cannedfood #bouillon #chickenpowder #wok",
    "description":  "I love Spam and this is a quick and easy dish to make for any time of the day. Recipe below👇",
    "likes":  0,
    "intro":  [
                  "I love Spam and this is a quick and easy dish to make for any time of the day. Recipe below👇"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 can Spam, cut into cubes",
                                               "* 2 cups white rice, uncooked measurement",
                                               "* 3 green onions, chopped",
                                               "* 4 eggs, beaten",
                                               "* 1 tbsp Knorr Chicken Bouillon Powder",
                                               "* 1 tsp white pepper",
                                               "* 1 tsp sugar",
                                               "* 4 tbsp Avocado Oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cook rice with the water only coming up half way to the first finger line. (Filipino Measurement 🇵🇭). This will give a drier consistency. Once rice is cooked, remove lid and let it sit for about 10-20 minutes.",
                  "In a large pot heat oil under medium-high heat.",
                  "Add Spam and cook for about 3-4 minutes on each side.",
                  "Move Spam to one side and add 4 large eggs and scramble.",
                  "Add the green onions and rice.",
                  "Add Chicken Bouillon powder, sugar, and white pepper, mixing everything together.",
                  "Taste and adjust for seasoning."
              ]
},
{
    "id":  "pork-belly-burnt-ends",
    "title":  "Pork Belly Burnt Ends",
    "date":  "2023-07-07",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/pork-belly-burnt-ends.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pork Belly Burnt Ends 🐷\n\nThese little bite sized candy nuggets. Seasoned with @sucklebuster Honey BBQ Rub, smoked, then braised with butter, honey, more seasoning, and BBQ sauce. 💦💦💦\n\nIngredients\n* 1-2 Slabs Skinless Pork Belly\n* Favorite sweet rub\n* Favorite sweet BBQ sauce\n* Brown sugar\n* Honey\n* 1/2 stick butter \n\n1. Cut the pork belly into 1 inch cubes. \n2. Season liberally on all sides with BBQ Rub. \n3. Let it sit for at least an hour. \n4. Prepare your smoker at 275 degrees using Jealous Devil Lump charcoal and Pecan wood blocks. \n5. Smoke for about 3 hours or until IT hits 190-195 degrees.\n6. Transfer the cubes in an aluminum pan. Season and toss the cubes with more rub. Add butter, BBQ sauce, drizzle with honey, and brown sugar. \n7. Return the pan uncovered to the smoker and cook for another hour or until all liquid has reduced and caramelized. Cover with foil if you need to tenderize the meat a little more. \n8. Allow to cool for 15 minutes and enjoy!\n\n@sucklebuster \n@kamadojoe \n@jealousdevilcharcoal ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #burntends #porkbelly #porkbellyburntends #candy #pork",
    "description":  "These little bite sized candy nuggets. Seasoned with @sucklebuster Honey BBQ Rub, smoked, then braised with butter, honey, more",
    "likes":  0,
    "intro":  [
                  "These little bite sized candy nuggets. Seasoned with @sucklebuster Honey BBQ Rub, smoked, then braised with butter, honey, more seasoning, and BBQ sauce. 💦💦💦"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "* Brown sugar",
                  "* Honey",
                  "* 1/2 stick butter",
                  "Cut the pork belly into 1 inch cubes.",
                  "Season liberally on all sides with BBQ Rub.",
                  "Let it sit for at least an hour.",
                  "Prepare your smoker at 275 degrees using Jealous Devil Lump charcoal and Pecan wood blocks.",
                  "Smoke for about 3 hours or until IT hits 190-195 degrees.",
                  "Transfer the cubes in an aluminum pan. Season and toss the cubes with more rub. Add butter, BBQ sauce, drizzle with honey, and brown sugar.",
                  "Return the pan uncovered to the smoker and cook for another hour or until all liquid has reduced and caramelized. Cover with foil if you need to tenderize the meat a little more.",
                  "Allow to cool for 15 minutes and enjoy!"
              ]
},
{
    "id":  "grilled-sinigang-wings",
    "title":  "Grilled Sinigang Wings",
    "date":  "2023-07-05",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/grilled-sinigang-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Sinigang Wings 🇵🇭🍗 🤙🏽 \n\nTaking a traditional Filipino comfort dish and adding the base seasoning to party wings. Tamarind base seasoning giving these grilled wings a hint of sourness. \n\nIngredients:\n* 4 pounds chicken wings\n* 1 stalk Lemongrass or 1 knob ginger (optional)\n* 2 tbsp tamarind base powder Knorr Sinigang Powder\n* 1.5 tbsp chicken bouillon \n* 1.5 tbsp fish sauce\n* 4 garlic cloves \n* 1/2 tsp pepper\n* 1 stalk green onion, sliced\n* 2 tbsp canola oil\n\n1. Combine all ingredients and marinate for 4-6 hours, preferably overnight in the refrigerator. \n2. Preheat grill to 375 degrees and cook for 45-60 minutes indirect with lid closed, flipping half way through. \n \n@kamadojoe \n@knorr \n@jealousdevilcharcoal \n ————————————————————————\n#btcooks #traeger #traegergrills #kamadojoe #kamadogrill #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #food #foodporn #tasty #igfood #easyrecipes #delicious #foodvideo #recipes #easyrecipes #foodreels #reelfood #reelsinstagram #grilledwings #sinigang #wings #smokedwings #wingwednesday",
    "description":  "Taking a traditional Filipino comfort dish and adding the base seasoning to party wings. Tamarind base seasoning giving these",
    "likes":  0,
    "intro":  [
                  "Taking a traditional Filipino comfort dish and adding the base seasoning to party wings. Tamarind base seasoning giving these grilled wings a hint of sourness."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 4 pounds chicken wings",
                                               "* 1 stalk Lemongrass or 1 knob ginger (optional)",
                                               "* 2 tbsp tamarind base powder Knorr Sinigang Powder",
                                               "* 1.5 tbsp chicken bouillon",
                                               "* 1.5 tbsp fish sauce",
                                               "* 4 garlic cloves",
                                               "* 1/2 tsp pepper",
                                               "* 1 stalk green onion, sliced",
                                               "* 2 tbsp canola oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate for 4-6 hours, preferably overnight in the refrigerator.",
                  "Preheat grill to 375 degrees and cook for 45-60 minutes indirect with lid closed, flipping half way through."
              ]
},
{
    "id":  "bacon-wrapped-serrano-chili-s-stuffed-with-cream-cheese-and",
    "title":  "Bacon wrapped Serrano Chili’s stuffed with Cream Cheese and Shrimp.",
    "date":  "2023-06-23",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/bacon-wrapped-serrano-chili-s-stuffed-with-cream-cheese-and.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bacon wrapped Serrano Chili’s stuffed with Cream Cheese and Shrimp. Seasoned with @spanglishasadero_official Surf and Turf and @littlelusbbq Sweet Hog. These had a perfect kick and family enjoyed this one. 🔥🔥🔥\n\nCooked on the @kamadojoe Konnected Joe at 300 degrees indirect for about 45 minutes. Used @jealousdevilcharcoal lump charcoal and Pecan wood chunks for some added smoke. Mopped some BBQ sauce at the end of the cook. \n\nIngredients \n12 Serrano Chilis, sliced in half and cored\n12 medium sized peeled shrimps, sliced in half and deveined\n1 block cream cheese\nFavorite BBQ Rub\nFavorite BBQ Sauce with 2 tbsp brown sugar (optional)\n\n@littlelusbbq \n@spanglishasadero_official \n@kamadojoe \n@jealousdevilcharcoal \n\n ————————————————————————\n#btcooks #kamadojoe #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #baconwrapped #shrimp #serrano #wrappedpeppers #spicy",
    "description":  "Cooked on the @kamadojoe Konnected Joe at 300 degrees indirect for about 45 minutes. Used @jealousdevilcharcoal lump charcoal",
    "likes":  0,
    "intro":  [
                  "Cooked on the @kamadojoe Konnected Joe at 300 degrees indirect for about 45 minutes. Used @jealousdevilcharcoal lump charcoal and Pecan wood chunks for some added smoke. Mopped some BBQ sauce at the end of the cook."
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "12 Serrano Chilis, sliced in half and cored",
                                               "12 medium sized peeled shrimps, sliced in half and deveined",
                                               "1 block cream cheese",
                                               "Favorite BBQ Rub",
                                               "Favorite BBQ Sauce with 2 tbsp brown sugar (optional)"
                                           ]
                             }
                         ],
    "steps":  [

              ]
},
{
    "id":  "buttery-whiskey-chipotle-baby-back-ribs",
    "title":  "Buttery Whiskey Chipotle Baby Back Ribs.",
    "date":  "2023-06-12",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/buttery-whiskey-chipotle-baby-back-ribs.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Buttery Whiskey Chipotle Baby Back Ribs. Mild kick with the Chipotle purée and sweetness from the whiskey shot hit the spot. Seasoned with Pork Rub from @littlelusbbq came out perfect 🍻\n\n1. Smoke at 225 for 3 hours. \n2. Double wrap with butcher paper and layer Brown sugar, butter, and bbq rub on both sides. \n3. Increase temp to 275 and cook for 1.5 hours. \n4. Remove paper and cook for an additional 30 minutes to tighten up the meat. \n5. Lather up your favorite bbq sauce and cook for 10 more minutes. \n6. Let rest before serving. \n\n@littlelusbbq \n@kurvballwhiskey \n@pepperexchange \n@traegergrills \n ————————————————————————\n#btcooks #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #smokedribs #porkribs #babybackribs #bbqrub #bbqsauce #chipotle #whisky",
    "description":  "Buttery Whiskey Chipotle Baby Back Ribs.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Double wrap with butcher paper and layer Brown sugar, butter, and bbq rub on both sides.",
                  "Increase temp to 275 and cook for 1.5 hours.",
                  "Remove paper and cook for an additional 30 minutes to tighten up the meat.",
                  "Lather up your favorite bbq sauce and cook for 10 more minutes.",
                  "Let rest before serving."
              ]
},
{
    "id":  "clam-chowder-has-to-be-one-of-my-favorite-and-my-family-enjo",
    "title":  "Clam chowder has to be one of my favorite and my family enjoyed this one. Here",
    "date":  "2023-06-08",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/clam-chowder-has-to-be-one-of-my-favorite-and-my-family-enjo.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Clam chowder has to be one of my favorite and my family enjoyed this one. Here is my clam chowder recipe that reminds me of Fisherman’s Wharf style chowder. Enjoy 🍻\n\nIngredients\n2 tbsp Olive oil\n1 large Onion, diced\n1/4 pound Pancetta or 2-3 slices of bacon, chopped\n1/2 stick Butter\n4 tbsp Flour\n2 cups Heavy cream\n1 8oz bottle Clam juice or seafood stock\n1 1/2 tsp Salt\n1 tbsp Shrimp Bouillon \n1 Stalk Celery, diced\n1 large Potato, peeled and diced\n2 small cans of chopped clams\nfreshly ground pepper (optional)\n\n1. Over medium high heat, add olive oil and onion in a large pot and saute until onions are translucent. \n2. Add the pancetta or bacon and cook for another 3-5 minutes, then remove from pan and set aside.\n3. Add the butter to the pot and when melted add the flour, whisk to ensure all combined.\n4. Under medium heat, slowly add heavy cream until smooth, whisking to prevent clumps. \n5. Add clam juice and shrimp bouillon. \n6. Add canned clams with juice, pancetta or bacon, and onion back into the pot. \n7. Add the potatoes and celery, simmer over low heat. \n8. Cook for 8-10 minutes or until potatoes have a softened.\n9. Season with salt as needed and top with fresh ground pepper. \n\n@knorr\n@bumblebeefoods \n \n ————————————————————————\n\n#btcooks #instadaily #food #foodporn #protein #meatlover #tasty #igfood #sdcook #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #clamchowder #clams #seafood #fishermanswharf #bayarea #soup #chowder #boudin",
    "description":  "Clam chowder has to be one of my favorite and my family enjoyed this one. Here",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp Olive oil",
                                               "1 large Onion, diced",
                                               "1/4 pound Pancetta or 2-3 slices of bacon, chopped",
                                               "1/2 stick Butter",
                                               "4 tbsp Flour",
                                               "2 cups Heavy cream",
                                               "1 8oz bottle Clam juice or seafood stock",
                                               "1 1/2 tsp Salt",
                                               "1 tbsp Shrimp Bouillon",
                                               "1 Stalk Celery, diced",
                                               "1 large Potato, peeled and diced",
                                               "2 small cans of chopped clams"
                                           ]
                             }
                         ],
    "steps":  [
                  "Over medium high heat, add olive oil and onion in a large pot and saute until onions are translucent.",
                  "Add the pancetta or bacon and cook for another 3-5 minutes, then remove from pan and set aside.",
                  "Add the butter to the pot and when melted add the flour, whisk to ensure all combined.",
                  "Under medium heat, slowly add heavy cream until smooth, whisking to prevent clumps.",
                  "Add clam juice and shrimp bouillon.",
                  "Add canned clams with juice, pancetta or bacon, and onion back into the pot.",
                  "Add the potatoes and celery, simmer over low heat.",
                  "Cook for 8-10 minutes or until potatoes have a softened.",
                  "Season with salt as needed and top with fresh ground pepper."
              ]
},
{
    "id":  "grilled-chipotle-jalape-o-chicken-thighs-came-out",
    "title":  "Grilled Chipotle \u0026 Jalapeño Chicken thighs came out .",
    "date":  "2023-05-26",
    "category":  "Poultry",
    "image":  "images/recipes/grilled-chipotle-jalape-o-chicken-thighs-came-out.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Grilled Chipotle \u0026 Jalapeño Chicken thighs came out 🔥🔥🔥. Seasoned with @spanglishasadero_official Chipotle Blend and @diningwithdash Jalapeño Seasoning. The combo of these two came out perfect. All cooked on my Cal Flame gas grill with a smoke box using Hickory🍻\n\n2-3 lbs Boneless \u0026 Skinless Chicken Thighs\nChipotle Blend Seasoning\nJalapeño Seasoning\n1/2 cup Pineapple juice\n2 tbsp olive oil\n\n1. Add olive oil to chicken. \n2. Liberally season chicken with seasoning. \n3. Add pineapple juice. \n4. Grill over charcoal or wood until IT hits 165.\n\n@calflamebbq \n@spanglishasadero_official \n@diningwithdash \n ————————————————————————\n#btcooks #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #carneasada #polloasada #tacotuesday #fajitas #calflame #gasgrill",
    "description":  "2-3 lbs Boneless \u0026 Skinless Chicken Thighs Chipotle Blend Seasoning Jalapeño Seasoning",
    "likes":  0,
    "intro":  [
                  "2-3 lbs Boneless \u0026 Skinless Chicken Thighs Chipotle Blend Seasoning Jalapeño Seasoning"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp olive oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add olive oil to chicken.",
                  "Liberally season chicken with seasoning.",
                  "Add pineapple juice.",
                  "Grill over charcoal or wood until IT hits 165."
              ]
},
{
    "id":  "beef-pad-see-ew-is-one-of-my-favorite-thai-dishes",
    "title":  "Beef Pad See Ew is one of my favorite Thai dishes.",
    "date":  "2023-05-19",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/beef-pad-see-ew-is-one-of-my-favorite-thai-dishes.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef Pad See Ew is one of my favorite Thai dishes. Stir fried meat, vegetables, and noodles with a savory sauce makes this recipe 🔥🔥🔥\n\nIngredients:\nSauce\n2 tbsp oyster sauce\n2 tbsp light soy sauce\n2 tsp dark soy sauce\n2 tsp fish sauce\n1/2 tbsp cane sugar\n1/2 tsp white pepper\n\nStir Fry\n1 lb thinly sliced flank beef\n2 tbsp light soy sauce\n1 tsp cornstarch\n3 tbsp peanut or vegetable oil, separated\n4 cloves garlic cloves, very finely chopped\n2 large eggs\n4 stems Chinese broccoli, sliced \n1 medium Carrot, thinly sliced\n1.5 lbs fresh wide rice noodles\nFresh cilantro\n\n1. In a bowl, combine thinly sliced beef, 2 Tbsp light soy sauce, and cornstarch. Mix well and set aside for at least 30 minutes.\n2. In another bowl, combine sauce ingredients and stir until sugar dissolves and set aside.\n3. On medium-high heat, add 1 tbsp of oil to a large pan. Add the beef and stir fry for 5 min. Once it’s done, transfer beef to a bowl.\n4. Add 1 tbsp of oil and throw in the minced garlic, carrots, and Chinese broccoli. Stir fry for about a 1 min then push the mixture to one side of the pan.\n5. Add 2 eggs and scramble. Combine eggs and veggies and stir fry until all combined. \n6. Add the remaining oil and throw in the rice noodles and the soy sauce mixture and stir fry for 2-3 minutes, until noodles loosen up.\n7. Continue stir frying until ingredients are combined.\n8. Sprinkle fresh cilantro (optional) and serve!\n\n ————————————————————————\n#homecooking #homecooks #btcooks #thaifood #thai #asianfood #pinoycooking #tasty #pinoyeats #instadaily #foodlover #foodie #food #foodstagram #instagood #foodreels #reelfood #reelsinstagram #filipinoamerican #beefpadseeew #beef #ricenoodles #broccoli #wok #stirfry",
    "description":  "Beef Pad See Ew is one of my favorite Thai dishes.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tbsp oyster sauce",
                                               "2 tbsp light soy sauce",
                                               "2 tsp dark soy sauce",
                                               "2 tsp fish sauce",
                                               "1/2 tbsp cane sugar",
                                               "1/2 tsp white pepper",
                                               "Stir Fry",
                                               "1 lb thinly sliced flank beef",
                                               "2 tbsp light soy sauce",
                                               "1 tsp cornstarch",
                                               "3 tbsp peanut or vegetable oil, separated",
                                               "4 cloves garlic cloves, very finely chopped",
                                               "2 large eggs",
                                               "4 stems Chinese broccoli, sliced",
                                               "1 medium Carrot, thinly sliced",
                                               "5 lbs fresh wide rice noodles"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a bowl, combine thinly sliced beef, 2 Tbsp light soy sauce, and cornstarch. Mix well and set aside for at least 30 minutes.",
                  "In another bowl, combine sauce ingredients and stir until sugar dissolves and set aside.",
                  "On medium-high heat, add 1 tbsp of oil to a large pan. Add the beef and stir fry for 5 min. Once it’s done, transfer beef to a bowl.",
                  "Add 1 tbsp of oil and throw in the minced garlic, carrots, and Chinese broccoli. Stir fry for about a 1 min then push the mixture to one side of the pan.",
                  "Add 2 eggs and scramble. Combine eggs and veggies and stir fry until all combined.",
                  "Add the remaining oil and throw in the rice noodles and the soy sauce mixture and stir fry for 2-3 minutes, until noodles loosen up.",
                  "Continue stir frying until ingredients are combined.",
                  "Sprinkle fresh cilantro (optional) and serve!",
                  ""
              ]
},
{
    "id":  "bone-marrow-shots",
    "title":  "Bone Marrow Shots!!!!",
    "date":  "2023-05-19",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/bone-marrow-shots.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bone Marrow Shots!!!! Scoops of bone marrow in a glass with green onions and lemon juice. So damn good 🤙🏽\n\nIngredients:\n4 split bone marrows\nBoard Night Out White Lightning Seasoning\nGreen onions\nLemon wedges\n\n1. Season bones marrow with seasoning. \n2. Smoke at 300°F for about 40 minutes. \n3. Scoop out marrow and place into a shot glass. \n4. Add green onions and a squeeze of lemon juice. \n5. Serve immediately and enjoy 🍻\n\n@traegergrills\n@boarsnightout \n ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #bonemarrow #shots #bonemarrowshots #seasoning #beef",
    "description":  "Bone Marrow Shots!!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 split bone marrows",
                                               "Green onions",
                                               "Lemon wedges"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season bones marrow with seasoning.",
                  "Smoke at 300°F for about 40 minutes.",
                  "Scoop out marrow and place into a shot glass.",
                  "Add green onions and a squeeze of lemon juice.",
                  "Serve immediately and enjoy 🍻"
              ]
},
{
    "id":  "aidells-chicken-apple-sausage-sliders-with-pineapple-salsa-d",
    "title":  "Aidells Chicken \u0026 Apple Sausage Sliders with Pineapple salsa, drizzled with",
    "date":  "2023-05-12",
    "category":  "Poultry",
    "image":  "images/recipes/aidells-chicken-apple-sausage-sliders-with-pineapple-salsa-d.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Aidells Chicken \u0026 Apple Sausage Sliders with Pineapple salsa, drizzled with BBQ sauce was a hit. All on toasted Kings Hawaiian bread 🍻🤙🏽\n\nPineapple Salsa Ingredients:\n* 1 can pineapple, diced\n* 1 red bell pepper, diced\n* 2 Roma tomatoes, diced\n* 1 jalapeño, diced\n* 1/3 cup chopped cilantro\n* 1/4 cup minced red onion\n* 2 limes, juiced\n* 1/2 teaspoon black pepper\n* 1 teaspoon salt\n\n@blackstoneproducts \n@bbq_boards \n@mccormickspice \n@bestfoodsmayonnaise \n@aidellssausage \n@kingshawaiian \n\n ————————————————————————\n#btcooks #blackstone #griddle #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #sliders #sausage #chickensausage #hawaiianbread",
    "description":  "Pineapple Salsa Ingredients: * 1 can pineapple, diced",
    "likes":  0,
    "intro":  [
                  "Pineapple Salsa Ingredients: * 1 can pineapple, diced"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [

              ]
},
{
    "id":  "filipino-pork-bbq-the-marinade-is-packed-with-flavor-and-the",
    "title":  "Filipino Pork BBQ The marinade is packed with flavor and the smokiness brings",
    "date":  "2023-05-09",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-pork-bbq-the-marinade-is-packed-with-flavor-and-the.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Pork BBQ 🔥🔥🔥 The marinade is packed with flavor and the smokiness brings it to another level. 🍻 🤙🏽\n\nIngredients \u0026 Recipe\n3 lbs. pork belly or pork shoulder, sliced 1/4 inch thick\n1/2 cup low sodium soy sauce\n1/4 cup Oyster sauce\n1/4 cup Banana Ketchup\n1/2 lemon or 6 pieces calamansi, juiced\n1/2 cup Beer\n1/2 tsp ground black pepper\n2 tsp chicken bouillon \n4 cloves garlic crushed\n1/2 cup white sugar\n1 tbsp cooking oil\n\n1. Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight. \n2. Set smoker to 180 and smoke for 30 minutes. \n3. Increase heat to 375 and grill for another 20 minutes or until fully cooked. \n4. Serve with steamed rice and a bowl of soy sauce with a squeeze of lemon juice for dipping. \n\n@knorr \n@kikkomanusa \n@mccormickspice \n@mamasitasrecipes \n@traegergrills\n@modelousa \n@jufranofficial \n ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #filipinobbq #porkbbq #marinade #islanderbbq #pork",
    "description":  "Filipino Pork BBQ The marinade is packed with flavor and the smokiness brings",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs. pork belly or pork shoulder, sliced 1/4 inch thick",
                                               "1/2 cup low sodium soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1/4 cup Banana Ketchup",
                                               "1/2 lemon or 6 pieces calamansi, juiced",
                                               "1/2 cup Beer",
                                               "1/2 tsp ground black pepper",
                                               "2 tsp chicken bouillon",
                                               "4 cloves garlic crushed",
                                               "1/2 cup white sugar",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight.",
                  "Set smoker to 180 and smoke for 30 minutes.",
                  "Increase heat to 375 and grill for another 20 minutes or until fully cooked.",
                  "Serve with steamed rice and a bowl of soy sauce with a squeeze of lemon juice for dipping."
              ]
},
{
    "id":  "arroz-caldo-is-my-ultimate-comfort-food",
    "title":  "Arroz Caldo is my ultimate comfort food.",
    "date":  "2023-05-06",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/arroz-caldo-is-my-ultimate-comfort-food.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Arroz Caldo is my ultimate comfort food. A Filipino rice porridge cooked with chicken, onions, garlic, ginger, broth, fish sauce, and saffron. I top mine with Chicharrones, eggs, green onions, and a squeeze of Lemon juice. 🤙🏽\n\n \nIngredients \u0026 Recipe:\n10 cups of water\n3 tbsp chicken bouillon \n1 whole chicken, cut into pieces (substitute for 2lb of chicken wings)\n1 large ginger 2” thick, julienned \n1 head of garlic, minced\n1 medium onion, chopped\n1 pinch of saffron or 1 tbsp safflower\n2 tbsp fish sauce, may substitute for salt\n1/2 cup sweet rice\n1 cup white rice\nSalt and pepper\n3 tbsp olive oil \n\nGarnishing\nHard boiled eggs\nCrushed Chicharrones\nLemon wedges or sliced Calamansi\nChopped green onions\n\n1. Heat oil on medium high heat in a large pot. \n2. Add onions and sauté for 1-2 minutes. \n3. Add garlic and ginger, sauté 2-3 minutes. \n4. Add chicken and season with salt and pepper. Cook for 5 minutes mixing occasionally making sure not to burn onions and garlic. \n5. Add chicken bouillon and fish sauce. Cook for 2 minutes. \n6. Reduce to medium heat, add water, rice, and saffron. Place lid and let cook for 45-60 minutes on or until rice is soft. \n7. Add additional salt if needed. May also add more water if it gets too thick, at 1 cup at a time. \n8. Serve hot with garnishing and enjoy 🍻\n\n \n\n ————————————————————————\n#homecooking #homecooks #btcooks #filipinofood #filipino #filipinofoodmovement #filipinocuisine #pinoycooking #tasty #pinoyeats #instadaily #foodlover #foodie #food #foodstagram #instagood #foodreels #reelfood #reelsinstagram #arrozcaldo #porridge #ricesoup #fishsauce #chicken #chicharron",
    "description":  "Arroz Caldo is my ultimate comfort food.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "10 cups of water",
                                               "3 tbsp chicken bouillon",
                                               "1 whole chicken, cut into pieces (substitute for 2lb of chicken wings)",
                                               "1 large ginger 2” thick, julienned",
                                               "1 head of garlic, minced",
                                               "1 medium onion, chopped",
                                               "1 pinch of saffron or 1 tbsp safflower",
                                               "2 tbsp fish sauce, may substitute for salt",
                                               "1/2 cup sweet rice",
                                               "1 cup white rice",
                                               "Salt and pepper",
                                               "3 tbsp olive oil",
                                               "Garnishing",
                                               "Hard boiled eggs",
                                               "Crushed Chicharrones"
                                           ]
                             }
                         ],
    "steps":  [
                  "Lemon wedges or sliced Calamansi",
                  "Chopped green onions",
                  "Heat oil on medium high heat in a large pot.",
                  "Add onions and sauté for 1-2 minutes.",
                  "Add garlic and ginger, sauté 2-3 minutes.",
                  "Add chicken and season with salt and pepper. Cook for 5 minutes mixing occasionally making sure not to burn onions and garlic.",
                  "Add chicken bouillon and fish sauce. Cook for 2 minutes.",
                  "Reduce to medium heat, add water, rice, and saffron. Place lid and let cook for 45-60 minutes on or until rice is soft.",
                  "Add additional salt if needed. May also add more water if it gets too thick, at 1 cup at a time.",
                  "Serve hot with garnishing and enjoy 🍻",
                  ""
              ]
},
{
    "id":  "pig-shots-were-on-point-last-night",
    "title":  "Pig Shots were on point last night.",
    "date":  "2023-05-04",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/pig-shots-were-on-point-last-night.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pig Shots were on point last night. Bacon cups, filled with Andouille sausage, Triple Cheddar, Cream cheese, and Jalapeños. Seasoned with BBQ Sweet Heat from @thesaucegoddess with some BBQ Sauce from @weekendatthecottage made these bites 🔥🔥🔥\n\nIngredients\n8 oz cream cheese, softened at room temp\n¼ cup Shredded Triple Cheddar \n2 Jalapeños, diced\n2 tbsp Sweet Heat BBQ Seasoning\n12 oz Andouille Sausage\n1/2 pack of bacon, sliced in half\n\nBBQ Sauce:\n1/2 cup Favorite BBQ sauce\n2 tbsp Brown Sugar\n\nInstructions\n1. Cut the Sausage into 1 inch pieces and wrap the bacon around the Sausage so it forms a shot glass. Take a toothpick and secure the bacon and the sausage.\n2. Take the softened cream cheese, triple cheddar, diced jalapeños and the bbq rub and mix together in a bowl until well combine.\n3. Place the mixture into a piping bag or a ziplock bag. \n4. Pipe the mixture into the shot until it is just below the top of the bacon.\n5. Set smoker to 225 and smoke for about 30 minutes.\n6. Mix together BBQ sauce and mop it over each shot. \n7. Increase temp to 350 and cook for another 30 minutes. \n8. Remove from grill and cook for 5-10 before serving. \u2028\n@traegergrills \n@weekendatthecottage \n@bbq_boards \n@thesaucegoddess \n@krogerco \n@sd_grill_pros \n\n ————————————————————————\n#btcooks #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #shots #bbqrub #bbqsauce #jalepeño #sausage #bacon",
    "description":  "Pig Shots were on point last night.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "8 oz cream cheese, softened at room temp",
                                               "cup Shredded Triple Cheddar",
                                               "2 Jalapeños, diced",
                                               "2 tbsp Sweet Heat BBQ Seasoning",
                                               "12 oz Andouille Sausage",
                                               "1/2 pack of bacon, sliced in half"
                                           ]
                             },
                             {
                                 "heading":  "BBQ Sauce",
                                 "items":  [
                                               "1/2 cup Favorite BBQ sauce",
                                               "2 tbsp Brown Sugar"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cut the Sausage into 1 inch pieces and wrap the bacon around the Sausage so it forms a shot glass. Take a toothpick and secure the bacon and the sausage.",
                  "Take the softened cream cheese, triple cheddar, diced jalapeños and the bbq rub and mix together in a bowl until well combine.",
                  "Place the mixture into a piping bag or a ziplock bag.",
                  "Pipe the mixture into the shot until it is just below the top of the bacon.",
                  "Set smoker to 225 and smoke for about 30 minutes.",
                  "Mix together BBQ sauce and mop it over each shot.",
                  "Increase temp to 350 and cook for another 30 minutes.",
                  "Remove from grill and cook for 5-10 before serving."
              ]
},
{
    "id":  "steak-and-chicken-tacos-with-roasted-tomatillo-avocado-salsa",
    "title":  "Steak and Chicken Tacos with Roasted Tomatillo Avocado Salsa, melted Queso",
    "date":  "2023-05-02",
    "category":  "Poultry",
    "image":  "images/recipes/steak-and-chicken-tacos-with-roasted-tomatillo-avocado-salsa.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Steak and Chicken Tacos with Roasted Tomatillo Avocado Salsa, melted Queso Fresco, Cilantro, and Onions. This came out damn good too!!!! 🍻\n\nSalsa Recipe and Ingredients: \n4 Tomatillos, cut in half\n1 Avocado\n3 Garlic cloves, peeled\n1/4 cup Cilantro\n1/4 Red onion\n1-2 Serrano peppers (optional)\n1 Jalapeño pepper\n1/4 cup Water\n1 Lime juiced\nSalt to taste\n\n1. Roast all ingredients except for Avocado on a hot grill or skillet.\n2. Place all in a blender and blend until semi chunky and smooth. \n\n@traegergrills \n@vitamix \n ————————————————————————\n#btcooks #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #carneasada #polloasada #tacos #tacotuesday #salsa #vitamix",
    "description":  "Steak and Chicken Tacos with Roasted Tomatillo Avocado Salsa, melted Queso",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 Tomatillos, cut in half",
                                               "1 Avocado",
                                               "3 Garlic cloves, peeled",
                                               "1/4 cup Cilantro",
                                               "1/4 Red onion",
                                               "1-2 Serrano peppers (optional)",
                                               "1 Jalapeño pepper",
                                               "1/4 cup Water",
                                               "1 Lime juiced",
                                               "Salt to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Roast all ingredients except for Avocado on a hot grill or skillet.",
                  "Place all in a blender and blend until semi chunky and smooth."
              ]
},
{
    "id":  "trisket-smoked-tritip-cooked-just-like-a-brisket",
    "title":  "Trisket?!!!! Smoked Tritip cooked just like a Brisket.",
    "date":  "2023-05-01",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/trisket-smoked-tritip-cooked-just-like-a-brisket.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Trisket?!!!! Smoked Tritip cooked just like a Brisket. Family enjoyed this one. Dry brined overnight and came out so good. 💪🏽🤙🏽\n\nIngredients:\n3-4 pound Tritip\nFavorite dry rub\n\n1. Dry rub meat and refrigerate for 6-8 hours. Let it stand room temp 1 hour before cooking. \n2. Set smoker to 250° and cook until IT of 160°\n3. Wrap with butcher paper and cook until IT hits 203°. \n4. Let it rest for about 1 hour before serving. \n\n@sd_grill_pros \n@traegergrills \n@sucklebuster \n@boarsnightout \n@themeatstickig \n@bbq_boards \n ————————————————————————\n#btcooks #themeatstick #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #tritip #brisket #trisket #rub #steak",
    "description":  "Trisket?!!!! Smoked Tritip cooked just like a Brisket.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 pound Tritip"
                                           ]
                             }
                         ],
    "steps":  [
                  "Dry rub meat and refrigerate for 6-8 hours. Let it stand room temp 1 hour before cooking.",
                  "Set smoker to 250° and cook until IT of 160°",
                  "Wrap with butcher paper and cook until IT hits 203°.",
                  "Let it rest for about 1 hour before serving."
              ]
},
{
    "id":  "smoked-chicken-thighs-seasoned-with-chipotle-blend-seasoning",
    "title":  "Smoked chicken thighs seasoned with Chipotle Blend Seasoning, Lime, and Cuties",
    "date":  "2023-04-29",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-chicken-thighs-seasoned-with-chipotle-blend-seasoning.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked chicken thighs seasoned with Chipotle Blend Seasoning, Lime, and Cuties Manadarines!!!!! These Mandarines provided the perfect citrus flavors and sweetness for this marinade. \n\nIngredients:\n3 pounds boneless and skinless chicken thighs\n1 lime, juiced\n3 Cuties Mandarines, juiced\n2 tbsp Olive oil\nSpanglish Chipotle Blend Seasoning\n\n1. Drizzle olive oil over meat\n2. Season chicken liberally covering all sides\n3. Squeeze cuties and lime juice\n3. Refrigerate for 3-4 hours\n4. Set smoker to 220 and smoke for 30 minutes\n5. Increase temp to 375 and cook for another 30 minutes. \n6. When done, dust some seasoning on top of chicken. Enjoy!\n\n@spanglishasadero_official \n@costco\n@traegergrills\n ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #polloasada #chickenthighs #marinade #chicken #cuties",
    "description":  "Smoked chicken thighs seasoned with Chipotle Blend Seasoning, Lime, and Cuties",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds boneless and skinless chicken thighs",
                                               "1 lime, juiced",
                                               "3 Cuties Mandarines, juiced",
                                               "2 tbsp Olive oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Drizzle olive oil over meat",
                  "Season chicken liberally covering all sides",
                  "Squeeze cuties and lime juice",
                  "Refrigerate for 3-4 hours",
                  "Set smoker to 220 and smoke for 30 minutes",
                  "Increase temp to 375 and cook for another 30 minutes.",
                  "When done, dust some seasoning on top of chicken. Enjoy!"
              ]
},
{
    "id":  "smoked-flap-meat-carne-asada-seasoned-with-spanglish-asadero",
    "title":  "Smoked Flap Meat Carne Asada seasoned with Spanglish Asadero’s Chipotle Blend",
    "date":  "2023-04-26",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-flap-meat-carne-asada-seasoned-with-spanglish-asadero.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Flap Meat Carne Asada seasoned with Spanglish Asadero’s Chipotle Blend came out 🔥🔥🔥. The hint of spice was perfect and flavors are on point. Grabbed a bottle from my good friends at @sd_grill_pros \n\nIngredients:\n2-3 pounds Flap Meat or thin sliced Chuck\n1 lime, juiced\n2 tbsp Olive oil\nSpanglish Chipotle Blend Seasoning\n\n1. Drizzle olive oil over meat\n2. Season steak liberally covering all sides and lime juice\n3. Refrigerate for 2-3 hours\n4. Set smoker to 180 and smoke for 30 minutes\n5. Increase temp to 375 and cook for another 30 minutes. \n6. Let it rest for 5-10 minutes before serving. \n\n@spanglishasadero_official \n@costco\n@traegergrills\n@sd_grill_pros \n ————————————————————————\n#btcooks #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #carneasada #flapmeat #chipotle #rub #seasoning #beef",
    "description":  "Smoked Flap Meat Carne Asada seasoned with Spanglish Asadero’s Chipotle Blend",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds Flap Meat or thin sliced Chuck",
                                               "1 lime, juiced",
                                               "2 tbsp Olive oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Drizzle olive oil over meat",
                  "Season steak liberally covering all sides and lime juice",
                  "Refrigerate for 2-3 hours",
                  "Set smoker to 180 and smoke for 30 minutes",
                  "Increase temp to 375 and cook for another 30 minutes.",
                  "Let it rest for 5-10 minutes before serving."
              ]
},
{
    "id":  "smoked-ribs-seasoned-with-honey-bbq-rub-buttery-steakhouse-a",
    "title":  "Smoked ribs, seasoned with Honey BBQ Rub, Buttery Steakhouse, and Weekend at",
    "date":  "2023-04-18",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-ribs-seasoned-with-honey-bbq-rub-buttery-steakhouse-a.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked ribs, seasoned with Honey BBQ Rub, Buttery Steakhouse, and Weekend at the Cottage BBQ Sauce. 💦💦 💦 Thank you @weekendatthecottage for providing a killer BBQ sauce!!! The family loves it and definitely will be adding it to our lineup 🤙🏽\n\n1. Smoke at 225 for 3 hours. \n2. Double wrap with butcher paper and layer Brown sugar, butter, and bbq rub on both sides. \n3. Increase temp to 275 and cook for 1.5 hours. \n4. Remove paper and cook for an additional 30 minutes to tighten up the meat. \n5. Lather up your favorite bbq sauce and cook for 10 more minutes. \n6. Let rest before serving. \n\n@sucklebuster \n@kindersflavors \n@weekendatthecottage \n@traegergrills \n ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #smokedribs #porkribs #stlouisribs #bbqrub #bbqsauce",
    "description":  "Smoked ribs, seasoned with Honey BBQ Rub, Buttery Steakhouse, and Weekend at",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Double wrap with butcher paper and layer Brown sugar, butter, and bbq rub on both sides.",
                  "Increase temp to 275 and cook for 1.5 hours.",
                  "Remove paper and cook for an additional 30 minutes to tighten up the meat.",
                  "Lather up your favorite bbq sauce and cook for 10 more minutes.",
                  "Let rest before serving."
              ]
},
{
    "id":  "paella-mixta-made-with-a-combination-of-chicken-andouille-sa",
    "title":  "Paella Mixta made with a combination of Chicken, Andouille Sausage, Fish, and",
    "date":  "2023-04-05",
    "category":  "Seafood",
    "image":  "images/recipes/paella-mixta-made-with-a-combination-of-chicken-andouille-sa.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Paella Mixta made with a combination of Chicken, Andouille Sausage, Fish, and Shrimp. I had a big craving for this dish and inspired by @jvs_bbq_addiction His Paella is 🔥🔥🔥. Go check him out if you are in the Bay Area!!!\n\nIngredients\n4 Boneless and Skinless Chicken Thighs, cut into pieces\n12-14 Large Shrimp\n2 Tilapia Loins, cut into pieces \n1 large Andouille Sausage, sliced\n3 tbsp Olive Oil\n1 Onion , diced\n1 Red bell pepper, sliced \n4 Cloves Garlic, minced\n2 roma tomatoes, diced\n1 Bay leaf\n2 tsp Smoked Paprika\n2 Pinches of Saffron\n¼ cup fresh chopped parsley chopped, half for the dish and the other half for garnish\n2 cups Spanish Rice\n4 cups chicken broth\n1/4 cup white wine\n1/2 cup frozen peas\n1 Lemon, sliced for garnish\nSalt and pepper\n\nInstructions\u2028\n1. Add olive oil to a large skillet over medium heat. \n2. Add the onion, bell peppers and garlic and cook until onion is translucent. \n3. Add chicken, season with salt and pepper, cook until browned. \n4. Add sausage, brown on each side. \n5. Add chopped tomato, bay leaf, paprika, and saffron. Stir and cook for 5 minutes.\n6. Add white wine and cook for 5 minutes. \n7. Add half of the chopped parsley and rice to the pot. Cook for 1 minute.\n8. Pour the broth in the pan, adding salt as needed. \n9. Bring mixture to a boil and add Fish and Shrimp. \n10. Reduce heat to medium low heat and do not mix or stir the rice.\n11. Cook for about 20 minutes uncovered. \n12. Remove pan from heat and cover pan with a lid or foil.\n13. Rest for 10 minutes before serving. \n14. Garnish with lemon wedges and the rest of the chopped parsley. \u2028\n\n ————————————————————————\n\n#btcooks #instadaily #food #foodporn #protein #meatlover #tasty #igfood #sdcook #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #paella #paellamixta #shrimp #saffron #spanishfood #rice #sausage",
    "description":  "Paella Mixta made with a combination of Chicken, Andouille Sausage, Fish, and",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 Boneless and Skinless Chicken Thighs, cut into pieces",
                                               "12-14 Large Shrimp",
                                               "2 Tilapia Loins, cut into pieces",
                                               "1 large Andouille Sausage, sliced",
                                               "3 tbsp Olive Oil",
                                               "1 Onion , diced",
                                               "1 Red bell pepper, sliced",
                                               "4 Cloves Garlic, minced",
                                               "2 roma tomatoes, diced",
                                               "1 Bay leaf",
                                               "2 tsp Smoked Paprika",
                                               "2 Pinches of Saffron",
                                               "cup fresh chopped parsley chopped, half for the dish and the other half for garnish",
                                               "2 cups Spanish Rice",
                                               "4 cups chicken broth",
                                               "1/4 cup white wine",
                                               "1/2 cup frozen peas",
                                               "1 Lemon, sliced for garnish"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add olive oil to a large skillet over medium heat.",
                  "Add the onion, bell peppers and garlic and cook until onion is translucent.",
                  "Add chicken, season with salt and pepper, cook until browned.",
                  "Add sausage, brown on each side.",
                  "Add chopped tomato, bay leaf, paprika, and saffron. Stir and cook for 5 minutes.",
                  "Add white wine and cook for 5 minutes.",
                  "Add half of the chopped parsley and rice to the pot. Cook for 1 minute.",
                  "Pour the broth in the pan, adding salt as needed.",
                  "Bring mixture to a boil and add Fish and Shrimp.",
                  "Reduce heat to medium low heat and do not mix or stir the rice.",
                  "Cook for about 20 minutes uncovered.",
                  "Remove pan from heat and cover pan with a lid or foil.",
                  "Rest for 10 minutes before serving.",
                  "Garnish with lemon wedges and the rest of the chopped parsley.",
                  ""
              ]
},
{
    "id":  "proud-dad-moment-here",
    "title":  "Proud Dad moment here!!!",
    "date":  "2023-04-04",
    "category":  "Other",
    "image":  "images/recipes/proud-dad-moment-here.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Proud Dad moment here!!! My daughter cooking up one of my favorite comfort dishes called Pork Sinigang. It is a pork stew seasoned with tamarind powder and fish sauce. She nailed it!!!! 💪🏽🍻\n\nIngredients \u0026 Recipe\n2-3 pounds of pork shoulder or pork ribs, cut into 2” cubes\n2 tbsp fish sauce\nHandful green beans or string beans, cut into 2-3”\n3 yellow peppers\n1 medium onion, sliced in half and quartered\n3 Roma tomatoes\n1 head Bok Choy or Romain Lettuce, chopped\n12 okras \n1 packet of Knorr Sinigang (Tamarind) powder\n6-8 cups of water\n1 tbsp Salt\n\n1. Heat a large pot with 6 cups of water. \n2. Add the onions and tomatoes. \n3. Add the pork and season with salt and fish sauce, yellow peppers, and entire packet of Sinigang powder. Cover and simmer for about 30-45 minutes or until meat is soft. \n4. Add the Romain lettuce, green beans, and okra. Cover the pot and cook for 5 minutes.\n5. Serve hot with a side of steamed rice. Enjoy!!!\n\n————————————————————————\n#homecooking #homecooks #sdcook #btcook #filipinofoodmovement #filipinocuisine #pinoycooking #philippines #foodlover #foodie #food #instagood #foodreels #reelsinstagram #filipinoamerican #comfortfood #soup #sinigang #filipinofood #veggies #soursoup #fishsauce #okra #daikon #asianfood #islanderfood",
    "description":  "Proud Dad moment here!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds of pork shoulder or pork ribs, cut into 2” cubes",
                                               "2 tbsp fish sauce",
                                               "Handful green beans or string beans, cut into 2-3”",
                                               "3 yellow peppers",
                                               "1 medium onion, sliced in half and quartered",
                                               "3 Roma tomatoes",
                                               "1 head Bok Choy or Romain Lettuce, chopped",
                                               "12 okras",
                                               "1 packet of Knorr Sinigang (Tamarind) powder",
                                               "6-8 cups of water",
                                               "1 tbsp Salt"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a large pot with 6 cups of water.",
                  "Add the onions and tomatoes.",
                  "Add the pork and season with salt and fish sauce, yellow peppers, and entire packet of Sinigang powder. Cover and simmer for about 30-45 minutes or until meat is soft.",
                  "Add the Romain lettuce, green beans, and okra. Cover the pot and cook for 5 minutes.",
                  "Serve hot with a side of steamed rice. Enjoy!!!",
                  ""
              ]
},
{
    "id":  "smoked-oxtails-came-out-so-tender",
    "title":  "Smoked Oxtails came out so tender!!!",
    "date":  "2023-04-02",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-oxtails-came-out-so-tender.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Oxtails came out so tender!!! These were smoked and then braised in beef stock with sliced onions and bell peppers. This whole dish was inspired by @lesbbqsandwiches and his ”Candy Red Nuggets” 🔥🔥🔥\n\nIngredients:\n3-4 lbs beef Oxtails cut and trimmed\nFavorite BBQ Rub, preferably something simple like with Salt, Pepper, and Garlic\n\nSpritzing:\n1/2 cup Apple Cider Vinegar\n1/2 cup of water or apple juice\n1-2 tbsp liquid smoke\n\nBraising:\n2 cups Beef broth, enough to cover half of meat\n1 Onion, sliced\n1 Green Bell pepper, sliced\u2028\n1. Season Oxtails liberally with BBQ rub and place in a ziplock bag. Refrigerate over night. \n2. Preheat your smoker to 250, cook until IT hits 200. Spritzing every hour. \n3. Remove Oxtails and place into a roasting pan. \n4. Add beef broth, onions, and Bell Peppers, cover with aluminum foil. \n5. Place back into smoker and cook for another 2 hours. ————————————————————————\n#btcooks #themeatstick #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #oxtails #braisedmeat #smokedmeat #beef",
    "description":  "Smoked Oxtails came out so tender!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 lbs beef Oxtails cut and trimmed"
                                           ]
                             },
                             {
                                 "heading":  "Spritzing",
                                 "items":  [
                                               "1/2 cup Apple Cider Vinegar",
                                               "1/2 cup of water or apple juice",
                                               "1-2 tbsp liquid smoke"
                                           ]
                             },
                             {
                                 "heading":  "Braising",
                                 "items":  [
                                               "2 cups Beef broth, enough to cover half of meat",
                                               "1 Onion, sliced",
                                               "1 Green Bell pepper, sliced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season Oxtails liberally with BBQ rub and place in a ziplock bag. Refrigerate over night.",
                  "Preheat your smoker to 250, cook until IT hits 200. Spritzing every hour.",
                  "Remove Oxtails and place into a roasting pan.",
                  "Add beef broth, onions, and Bell Peppers, cover with aluminum foil.",
                  "Place back into smoker and cook for another 2 hours. ————————————————————————"
              ]
},
{
    "id":  "smoked-kalbi-is-one-of-my-favorite",
    "title":  "Smoked Kalbi is one of my favorite!!!",
    "date":  "2023-03-31",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-kalbi-is-one-of-my-favorite.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Kalbi is one of my favorite!!! This recipe is a quick and easy one. Served great with steamed rice and a side of Hawaiian Mac Salad!!! 🤙🏽 \n\nIngredients:\n1 16oz jar Kalbi Marinade \n4 cloves garlic, chopped\n2 stalks green onions, chopped\n\n1. In a zip lock bag combine short ribs, garlic, green onions, and marinade. \n3. Marinate for 4-6 hours. No more than 6 hours. \n4. Grill over medium-high heat. Don’t over cook since the sugar can easily char. \n5. Best served medium/rare or medium. ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #kalbi #hawaiianfood #mixedplate #shortribs #marinade",
    "description":  "Smoked Kalbi is one of my favorite!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 16oz jar Kalbi Marinade",
                                               "4 cloves garlic, chopped",
                                               "2 stalks green onions, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a zip lock bag combine short ribs, garlic, green onions, and marinade.",
                  "Marinate for 4-6 hours. No more than 6 hours.",
                  "Grill over medium-high heat. Don’t over cook since the sugar can easily char.",
                  "Best served medium/rare or medium. ————————————————————————"
              ]
},
{
    "id":  "smoked-wings-seasoned-with-honey-bbq-rub-and-brushed-with-br",
    "title":  "Smoked Wings seasoned with Honey BBQ Rub and brushed with Brown Sugar BBQ",
    "date":  "2023-03-29",
    "category":  "Wings",
    "image":  "images/recipes/smoked-wings-seasoned-with-honey-bbq-rub-and-brushed-with-br.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Wings seasoned with Honey BBQ Rub and brushed with Brown Sugar BBQ Sauce. Came out 🔥🔥🔥\n\nIngredients:\n4 pounds chicken wings\nFavorite BBQ Rub - I used Honey BBQ from Suckle Busters\n1/2 cup Favorite BBQ Sauce\n2 tbsp Brown sugar\n\n1. Season chicken wings liberally with favorite BBQ Rub and marinate in refrigerator for 4-6 hours. \n2. Set smoker to 225 degrees and cook for 30 minutes.\n3. Whole chicken is cooking, add BBQ sauce and Brown Sugar in a bowl and mix together. \n4. Increase temp to 375 degrees for another 45 minutes. \n5. After 30 minutes, brush BBQ sauce and cook for an additional 15 minutes. \n\n ————————————————————————\n#btcooks #traeger #traegergrills #barbecue #chickenwings #food #smokedwings #bbqlife #instafood #barbeque #bbqlovers #foodporn #foodie #meatlover #bbqporn #texasbbq #foodphotography #foodstagram #yummy #meat #grill #texas #delicious #protein #smokedmeat #grilling #chicken #smoked #foodlover #wingwednesday",
    "description":  "Smoked Wings seasoned with Honey BBQ Rub and brushed with Brown Sugar BBQ",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 pounds chicken wings",
                                               "1/2 cup Favorite BBQ Sauce",
                                               "2 tbsp Brown sugar"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season chicken wings liberally with favorite BBQ Rub and marinate in refrigerator for 4-6 hours.",
                  "Set smoker to 225 degrees and cook for 30 minutes.",
                  "Whole chicken is cooking, add BBQ sauce and Brown Sugar in a bowl and mix together.",
                  "Increase temp to 375 degrees for another 45 minutes.",
                  "After 30 minutes, brush BBQ sauce and cook for an additional 15 minutes.",
                  ""
              ]
},
{
    "id":  "chuck-roast-burnt-ends-leftover-smoked-chuck-seasoned-and-re",
    "title":  "Chuck roast burnt ends Leftover smoked Chuck, seasoned and reheated with a",
    "date":  "2023-03-27",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/chuck-roast-burnt-ends-leftover-smoked-chuck-seasoned-and-re.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chuck roast burnt ends 🔥🔥🔥 Leftover smoked Chuck, seasoned and reheated with a sweet buttery BBQ sauce. 🍻\n\n3 lb Smoked Chuck, cut into 1” cubes. \n3 tbsp butter\n1/2 cup BBQ sauce\n1/4 cup brown sugar\n\n1. Season pieces of Chuck with favorite BBQ Rub. \n2. Set smoker to 300 and place meat on small rack, cook for 20 min. \n3. Transfer to a pan and add butter, brown sugar, and bbq sauce. \n4. Cover with foil and place back on the grill. Cook for 30 minutes. \n5. Remove from grill and mix everything together. Enjoy!!!!\n ————————————————————————\n#btcooks #traeger #barbecue #bbq #food #beef #bbqlife #instafood #barbeque #bbqlovers #foodporn #foodie #meatlover #bbqporn #texasbbq #foodphotography #foodstagram #yummy #meat #grill #texas\n#delicious #steak #smokedmeat #grilling #chicken #smoked #foodlover",
    "description":  "Chuck roast burnt ends Leftover smoked Chuck, seasoned and reheated with a",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 tbsp butter",
                                               "1/2 cup BBQ sauce",
                                               "1/4 cup brown sugar"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season pieces of Chuck with favorite BBQ Rub.",
                  "Set smoker to 300 and place meat on small rack, cook for 20 min.",
                  "Transfer to a pan and add butter, brown sugar, and bbq sauce.",
                  "Cover with foil and place back on the grill. Cook for 30 minutes.",
                  "Remove from grill and mix everything together. Enjoy!!!!",
                  ""
              ]
},
{
    "id":  "smoked-chuck-recipe-is-quick-and-easy-and-turns-out-tender-a",
    "title":  "Smoked Chuck recipe is quick and easy and turns out tender and juicy",
    "date":  "2023-03-25",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-chuck-recipe-is-quick-and-easy-and-turns-out-tender-a.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Chuck recipe is quick and easy and turns out tender and juicy. 🍻💦\n\nIngredients:\n4 lbs Chuck Roast\nFavorite BBQ Rub\nBeef stock for spritzing\n\n1. Season chuck roast liberally with BBQ season, then wrap in Saran Wrap and place in refrigerator for 3-6 hours. \n2. Let sit in room temp for 1-2 hours before cooking. \n3. Set smoker to 225 and smoke until IT hits 170 degrees. Spritzing meat with beef stock every 30 minutes. \n4. Once meat reaches 170 degrees, double wrap in butcher paper. \n5. Place meat back into smoker and cook until IT hits 195 degrees. \n6. Remove chuck roast and place in a cooler or oven to rest for 1 hour. You can also leave it in your smoker at 180 with lid closed during resting period.\n\n ————————————————————————\n#btcooks #traegergrills #barbecue #bbq #food #beef #bbqlife #instafood #barbeque #bbqlovers #foodporn #foodie #meatlover #bbqporn #texasbbq #foodphotography #foodstagram #yummy #meat #grill #texas\n#delicious #steak #smokedmeat #grilling #chicken #smoked #foodlover",
    "description":  "Smoked Chuck recipe is quick and easy and turns out tender and juicy",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 lbs Chuck Roast"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season chuck roast liberally with BBQ season, then wrap in Saran Wrap and place in refrigerator for 3-6 hours.",
                  "Let sit in room temp for 1-2 hours before cooking.",
                  "Set smoker to 225 and smoke until IT hits 170 degrees. Spritzing meat with beef stock every 30 minutes.",
                  "Once meat reaches 170 degrees, double wrap in butcher paper.",
                  "Place meat back into smoker and cook until IT hits 195 degrees.",
                  "Remove chuck roast and place in a cooler or oven to rest for 1 hour. You can also leave it in your smoker at 180 with lid closed during resting period.",
                  ""
              ]
},
{
    "id":  "this-smoked-italian-meatball-garlic-bread-sub-was-money",
    "title":  "This Smoked Italian Meatball Garlic Bread Sub was Money!!!!",
    "date":  "2023-03-20",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/this-smoked-italian-meatball-garlic-bread-sub-was-money.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "This Smoked Italian Meatball Garlic Bread Sub was Money!!!! Recipe below 👇 \n\nIngredients and Recipe:\n\nGarlic Bread:\nFrench bread\n1 Stick Butter, softened under room temp\n6 cloves garlic, minced\n1/2 cup fresh Italian parsley, chopped\n1 tsp Truffle Salt\n\nGarnish:\nFavorite Marinara Sauce\nShredded Mozzarella\nFresh Parsley\n\nPremade Italian Meatballs or frozen meatballs\n\nDirections:\n1. Preheat smoker to 375 and cook meatballs until internal temperature hits 160, around 25 -30 minutes. \n2. Combine all garlic bread ingredients in a bowl then apply a thin layer over French Bread. \n3. Cook in oven or toaster at 400 degrees until golden brown. \n4. Assemble by adding meatballs, marinara sauce, and mozzarella cheese. \n5. Return into oven for 2 minutes.\n ————————————————————————\n#btcooks #TheMeatStick #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #italianmeatball #meatballsub #frenchbread #cheese",
    "description":  "This Smoked Italian Meatball Garlic Bread Sub was Money!!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Garlic Bread",
                                 "items":  [
                                               "French bread",
                                               "1 Stick Butter, softened under room temp",
                                               "6 cloves garlic, minced",
                                               "1/2 cup fresh Italian parsley, chopped",
                                               "1 tsp Truffle Salt"
                                           ]
                             },
                             {
                                 "heading":  "Garnish",
                                 "items":  [
                                               "Favorite Marinara Sauce",
                                               "Shredded Mozzarella",
                                               "Fresh Parsley"
                                           ]
                             }
                         ],
    "steps":  [
                  "Premade Italian Meatballs or frozen meatballs",
                  "Preheat smoker to 375 and cook meatballs until internal temperature hits 160, around 25 -30 minutes.",
                  "Combine all garlic bread ingredients in a bowl then apply a thin layer over French Bread.",
                  "Cook in oven or toaster at 400 degrees until golden brown.",
                  "Assemble by adding meatballs, marinara sauce, and mozzarella cheese.",
                  "Return into oven for 2 minutes.",
                  ""
              ]
},
{
    "id":  "corned-beef-nilaga-recipe",
    "title":  "Corned Beef Nilaga Recipe!!!",
    "date":  "2023-03-17",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/corned-beef-nilaga-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Corned Beef Nilaga Recipe!!! Taking the traditional St. Patrick’s Day dish that is cooked with Cabbage, Potatoes, and Carrots but adding a little Filipino twist to it. Nilaga is a Filipino Beef Stew that consists of the same ingredients, but with Fish sauce and Pepper Corns. \n\n3 lbs Corned Beef, with seasoning packet\n5 Medium Gold or White Potatoes, Quartered\n4 Garlic Cloves, smashed\n3 Carrots, sliced\n1 Cabbage, Quartered\n2 tbsp Fish Sauce\n1 tbsp Pepper Corns\n1 tbsp Beef Bouillon \n4 cups of water\n\n1. In a crock pot, add onions to the bottom. \n2. Rinse Corned Beef to remove excess brine, then add it to pot with the remaining ingredients, except for the cabbage. \n3. Set to low and cook 8 hours or on high for 5-6 hours. \n4. 1 hour before cook time add Cabbage. \n5. Serve with a side of steamed rice or a small bowl of soup. Enjoy!\n ————————————————————————\n\n#btcooks #instadaily #food #foodporn #protein #meatlover #tasty #igfood #sdcook #easyrecipes #foodie #newrecipe #delicious #foodvideo #foodblogger #foodstagram #cornedbeef #nilaga #beefstew #bouillon #stpatricksday #stew #beef #asianfusion #filipinofusion",
    "description":  "Corned Beef Nilaga Recipe!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "5 Medium Gold or White Potatoes, Quartered",
                                               "4 Garlic Cloves, smashed",
                                               "3 Carrots, sliced",
                                               "1 Cabbage, Quartered",
                                               "2 tbsp Fish Sauce",
                                               "1 tbsp Pepper Corns",
                                               "1 tbsp Beef Bouillon",
                                               "4 cups of water"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a crock pot, add onions to the bottom.",
                  "Rinse Corned Beef to remove excess brine, then add it to pot with the remaining ingredients, except for the cabbage.",
                  "Set to low and cook 8 hours or on high for 5-6 hours.",
                  "1 hour before cook time add Cabbage.",
                  "Serve with a side of steamed rice or a small bowl of soup. Enjoy!",
                  ""
              ]
},
{
    "id":  "there-is-just-something-about-thighs-for-more",
    "title":  "There is just something about thighs! for more",
    "date":  "2023-03-14",
    "category":  "Poultry",
    "image":  "images/recipes/there-is-just-something-about-thighs-for-more.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "There is just something about thighs! 👉 for more 🍻\n\nMarinade Recipe:\n2-3 pounds chicken thighs\n1 lemon, juiced\n1 1/2 tbsp canola or vegetable oil\n1/2 cup low sodium soy sauce\n2 tbsp Fish sauce\n2 tbsp brown sugar\n6 garlic cloves, minced\n2 tbsp fresh grated ginger\n2 tsp ground pepper\n2 tbsp chicken bouillon \n1/2 cup cilantro, chopped\n3 green onions, chopped\n\n1. Combine all ingredients except for chicken in a large bowl and mix well.\n2. Place chicken and marinade in a zip lock bag. Refrigerate for at least 4-6 hours, overnight is preferable.\n3. Set smoker to 225 and smoke for 30 minutes.\n4. Increase temp to 375 and cook for about 30 - 45 minutes, until skin is crispy. \n5. Serve with steamed rice and enjoy! ————————————————————————\n#btcooks #traeger #traegergrills #instadaily #bbqlovers #smoker #bbqporn #outdoorcooking #bbq #grilling #backyardgrilling #grilllife #food #foodporn #protein #meatlover #tasty #igfood #easyrecipes #foodie #newrecipe #delicious #foodblogger #foodstagram #smokedchicken #chickenthighs",
    "description":  "There is just something about thighs! for more",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds chicken thighs",
                                               "1 lemon, juiced",
                                               "1 1/2 tbsp canola or vegetable oil",
                                               "1/2 cup low sodium soy sauce",
                                               "2 tbsp Fish sauce",
                                               "2 tbsp brown sugar",
                                               "6 garlic cloves, minced",
                                               "2 tbsp fresh grated ginger",
                                               "2 tsp ground pepper",
                                               "2 tbsp chicken bouillon",
                                               "1/2 cup cilantro, chopped",
                                               "3 green onions, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients except for chicken in a large bowl and mix well.",
                  "Place chicken and marinade in a zip lock bag. Refrigerate for at least 4-6 hours, overnight is preferable.",
                  "Set smoker to 225 and smoke for 30 minutes.",
                  "Increase temp to 375 and cook for about 30 - 45 minutes, until skin is crispy.",
                  "Serve with steamed rice and enjoy! ————————————————————————"
              ]
},
{
    "id":  "smoked-ny-steak-fajita-recipe",
    "title":  "Smoked NY Steak Fajita Recipe.",
    "date":  "2023-03-09",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-ny-steak-fajita-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked NY Steak Fajita Recipe👇. This was a fun cook and enjoyed prepping this meal. The MeatStick 4X provide accurate temps throughout the cook and the steaks came out perfect. 🍻\n\nSteak Ingredients:\n2 NY Steaks\nFavorite BBQ Rub\n1 tbsp Avocado Oil\n\nFajita Ingredients:\n1 medium red onion, chopped\n6 cloves garlic, minced\n1 red bell pepper, sliced\n1 tomato\nHandful Cilantro\n8oz mushrooms, sliced \n1 tsp salt\n1 tbsp smoked paprika\n1 tbsp chili powder\n1 tsp ground cumin\n1 tbsp avocado oil\n\n1. Season steaks with bbq rub, let sit at room temp for 30 minutes. \n2. Set smoker to 275 and smoke steaks until IT hits 140. Pull off grill and set aside. \n3. While steaks are cooking, heat a large pan with oil. \n4. Sauté onions and bell peppers, seasoning with salt. Cook until onions become translucent. \n5. Add garlic and mushrooms, adding remaining seasoning. Cook for 3-4 minutes. \n6. Add tomatoes and cilantro. Cook for another 2 minutes. \n7. In a separate pan heat oil under medium high heat. \n8. Sear steaks for 1 minute on each side. \n9. Thinly slice steaks (Steaks have already rested while cooking the Fajita mixture)\n10. Add to fajita mixture. \n11. Serve with warm tortillas. \n\n ————————————————————————\n#btcooks #traeger #traegergrills #TheMeatStick #TheMeatStick4 #bbqlovers #bbqlife #smoker #bbqporn #barbeque #outdoorcooking #homecooking #bbq #followme #backyardgrilling #grilllife #food #meatlover #foodporn #meatporn #instadaily #sdcook #easyrecipes #nysteaks #fajitas #smokedsteaks #smokedmeat #bbqsauce @themeatstickig @traegergrills @iowameatfarmssiesels @kindersflavors",
    "description":  "Steak Ingredients: 2 NY Steaks Favorite BBQ Rub",
    "likes":  0,
    "intro":  [
                  "Steak Ingredients: 2 NY Steaks Favorite BBQ Rub"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Fajita Ingredients",
                                 "items":  [
                                               "1 medium red onion, chopped",
                                               "6 cloves garlic, minced",
                                               "1 red bell pepper, sliced",
                                               "1 tomato",
                                               "Handful Cilantro",
                                               "8oz mushrooms, sliced",
                                               "1 tsp salt",
                                               "1 tbsp smoked paprika",
                                               "1 tbsp chili powder",
                                               "1 tsp ground cumin",
                                               "1 tbsp avocado oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season steaks with bbq rub, let sit at room temp for 30 minutes.",
                  "Set smoker to 275 and smoke steaks until IT hits 140. Pull off grill and set aside.",
                  "While steaks are cooking, heat a large pan with oil.",
                  "Sauté onions and bell peppers, seasoning with salt. Cook until onions become translucent.",
                  "Add garlic and mushrooms, adding remaining seasoning. Cook for 3-4 minutes.",
                  "Add tomatoes and cilantro. Cook for another 2 minutes.",
                  "In a separate pan heat oil under medium high heat.",
                  "Sear steaks for 1 minute on each side.",
                  "Thinly slice steaks (Steaks have already rested while cooking the Fajita mixture)",
                  "Add to fajita mixture.",
                  "Serve with warm tortillas.",
                  ""
              ]
},
{
    "id":  "smoked-and-seared-shaking-beef-recipe",
    "title":  "Smoked and Seared Shaking Beef recipe.",
    "date":  "2023-03-03",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-and-seared-shaking-beef-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked and Seared Shaking Beef recipe👇. These cubes of steak are perfect for steak salads or with steamed rice. 🍻\n\nIngredients:\n2-3 pounds Rib Eye Steaks, cut into 1″ cubes\u20288-10 garlic cloves, minced\u20281 1/2 tbs sugar\n1 tsp low sodium Soy Sauce\u20282 tbs Oyster Sauce\u20281 tbs Fish Sauce\u20281 tbs Sesame Oil\n\nSearing:\n2 tbsp Avocado Oil\u2028\n1. Combine all ingredients and marinate in refrigerator for 4-6 hours. \n2. Set smoker to 275 and place meat on a cast iron pan. Cook for 1 hour. \n3. Heat a separate pan on medium/high heat, adding about 2 tbsp Avocado or Canola oil. \n4. Sear steaks until browned, be careful not to burn garlic. \n5. Serve with steamed rice or salad. 🤙🏽\n\n ————————————————————————\n#btcooks #traeger #traegergrills #bbqlovers #bbqlife #smoker #bbqporn #barbeque #outdoorcooking #homecooking #bbq #grilling #backyardgrilling #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sdcook #easyrecipes #vietnamesefood #shakingbeef #marinatedbeef #smokedribeye #ribeye #steaks @traegergrills @kikkomanusa @traegergator @foodnetwork @sandiegomag @cookinghawaiianstyle @socalfilipinos",
    "description":  "Smoked and Seared Shaking Beef recipe.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds Rib Eye Steaks, cut into 1″ cubes 8-10 garlic cloves, minced 1 1/2 tbs sugar",
                                               "1 tsp low sodium Soy Sauce 2 tbs Oyster Sauce 1 tbs Fish Sauce 1 tbs Sesame Oil"
                                           ]
                             },
                             {
                                 "heading":  "Searing",
                                 "items":  [
                                               "2 tbsp Avocado Oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate in refrigerator for 4-6 hours.",
                  "Set smoker to 275 and place meat on a cast iron pan. Cook for 1 hour.",
                  "Heat a separate pan on medium/high heat, adding about 2 tbsp Avocado or Canola oil.",
                  "Sear steaks until browned, be careful not to burn garlic.",
                  "Serve with steamed rice or salad. 🤙🏽",
                  ""
              ]
},
{
    "id":  "easy-asian-style-pickled-red-onions-recipe",
    "title":  "Easy Asian style Pickled Red Onions Recipe.",
    "date":  "2023-03-02",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/easy-asian-style-pickled-red-onions-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Easy Asian style Pickled Red Onions Recipe. Goes great with salads and rice. Serve it as a side for them Islander BBQ 🤙🏽. \n\nIngredients:\n1 medium red onion, sliced\n1/2 cup rice vinegar\u20281 1/2 tbs sugar\u20281/2 tbs salt\n\n1. Combine all ingredients into a bowl. \n2. Refrigerate over night. \n ————————————————————————\n#btcooks #foodporn #quickmeals #recipes #recipeoftheday #recipereels #sharingrecipes #cookingtips #tasty #delicious #foodpics #hungry #foodgasm #homecooking #homecook #sdcook #foodlover #easyrecipes #pickledonions #redonions #pickles #bbq #bbqmeat #sidedishes",
    "description":  "Easy Asian style Pickled Red Onions Recipe.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 medium red onion, sliced",
                                               "1/2 cup rice vinegar 1 1/2 tbs sugar 1/2 tbs salt"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients into a bowl.",
                  "Refrigerate over night.",
                  ""
              ]
},
{
    "id":  "easy-shrimp-pasta-recipe-using-gemelli-pasta",
    "title":  "Easy shrimp pasta recipe using Gemelli pasta.",
    "date":  "2023-02-01",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/easy-shrimp-pasta-recipe-using-gemelli-pasta.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Easy shrimp pasta recipe using Gemelli pasta. Shrimp is cooked with garlic, wine, and basil. All served over your favorite pasta noodles.\n\nIngredients:\n* 1 17oz pack of Gemelli Pasta, cooked according to package instructions \n* 12 large, peeled and deveined\n* Fresh Ground black pepper\n* 2 tbsp olive oil\n* 4 garlic cloves, finely chopped\n* 1/2 cup white wine\n* 2 Roma Tomatoes, chopped\n* 3 springs fresh basil, chopped\n* 1 tsp salt\n\n1. Cook pasta based on package instructions. Save 1/4 cup of pasta water. \n2. In a large pot or pan under medium/high heat, add olive oil. \n3. Lightly season shrimp with salt and cook shrimp for about 2 minutes on each side, then set aside. \n4. In the same pan, add garlic and cook for 1 minute. Be careful not to burn the garlic. \n5. Add white wine and let it cook for about 2-3 minutes. \n6. Add tomatoes and and season with salt and fresh ground pepper, cook for another 7-8 minutes. \n7. Add basil and shrimp back into pot. \n8. Add pasta and pasta water, mix well. \n9. Adjust seasoning as needed. Enjoy!!! 🍻 ————————————————————————\n#btcooks #foodporn #quickmeals #recipes #recipeoftheday #recipereels #sharingrecipes #cookingtips #tasty #delicious #foodpics #hungry #foodgasm #shrimppasta #shrimp #pasta #noodles #homecooking #homecook #sdcook #foodlover #easyrecipes #gemelli #italianfood",
    "description":  "Easy shrimp pasta recipe using Gemelli pasta.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 17oz pack of Gemelli Pasta, cooked according to package instructions",
                                               "* 12 large, peeled and deveined",
                                               "* Fresh Ground black pepper",
                                               "* 2 tbsp olive oil",
                                               "* 4 garlic cloves, finely chopped",
                                               "* 1/2 cup white wine",
                                               "* 2 Roma Tomatoes, chopped",
                                               "* 3 springs fresh basil, chopped",
                                               "* 1 tsp salt"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cook pasta based on package instructions. Save 1/4 cup of pasta water.",
                  "In a large pot or pan under medium/high heat, add olive oil.",
                  "Lightly season shrimp with salt and cook shrimp for about 2 minutes on each side, then set aside.",
                  "In the same pan, add garlic and cook for 1 minute. Be careful not to burn the garlic.",
                  "Add white wine and let it cook for about 2-3 minutes.",
                  "Add tomatoes and and season with salt and fresh ground pepper, cook for another 7-8 minutes.",
                  "Add basil and shrimp back into pot.",
                  "Add pasta and pasta water, mix well.",
                  "Adjust seasoning as needed. Enjoy!!! 🍻 ————————————————————————"
              ]
},
{
    "id":  "smoked-bbq-wings-seasoned-with-iowa-meats-house-rub-soy-sauc",
    "title":  "Smoked BBQ wings seasoned with Iowa Meats house rub, soy sauce, and fish",
    "date":  "2023-01-29",
    "category":  "Wings",
    "image":  "images/recipes/smoked-bbq-wings-seasoned-with-iowa-meats-house-rub-soy-sauc.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked BBQ wings seasoned with Iowa Meats house rub, soy sauce, and fish sauce. These came out 🔥🔥🔥\n \nIngredients:\n3 pounds chicken wings\nIowa Meat house seasoning\n1 tbsp soy sauce\n1 tbsp fish sauce\n\n1. Combine all ingredients into a bowl or zip lock bag and marinate for 4-6 hours. Preferably overnight. \n2. Smoke wings for 30 minutes, then increase heat to 450. \n3. Cook for 30 minutes until golden brown and skin is crispy\n ————————————————————————\n#btcooks #traeger #traegergrills #foodstagram #steakhouse #bbqlovers #bbqlife #smoker #bbqporn #barbeque #outdoorcooking #homecooking #bbq #grilling #backyardgrilling #protein #meatlover #meatporn #tasty #igfood #gameday #easyrecipes #smokedwings @iowameatfarmssiesels @traegergrills @modelousa @kikkomanusa",
    "description":  "Smoked BBQ wings seasoned with Iowa Meats house rub, soy sauce, and fish",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds chicken wings",
                                               "Iowa Meat house seasoning",
                                               "1 tbsp soy sauce",
                                               "1 tbsp fish sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients into a bowl or zip lock bag and marinate for 4-6 hours. Preferably overnight.",
                  "Smoke wings for 30 minutes, then increase heat to 450.",
                  "Cook for 30 minutes until golden brown and skin is crispy",
                  ""
              ]
},
{
    "id":  "fried-filipino-pork-adobo",
    "title":  "Fried Filipino Pork Adobo!!!!!",
    "date":  "2023-01-25",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/fried-filipino-pork-adobo.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Fried Filipino Pork Adobo!!!!! This was my first dish that I whipped up on @foodnetwork GGG. A little twist to the classic Filipino dish, pan fried giving it a Carnitas style texture. \n\nIngredients \u0026 Recipe\n3 pounds pork shoulder or belly, cut into cubes\n1/2 cup low sodium soy sauce\n3 tbsp vinegar\n2 tbsp brown sugar\n5 pieces dried bay leaves\n5 pieces of garlic cloves, crushed\n1/2 tbsp Knorr Chicken bouillon \n1 tbsp whole pepper corn or 1/2 tbsp fresh ground pepper\n1/4 cup water\n1 cup vegetable oil\nSalt to taste\n\n1. Combine all ingredients into a bowl. \n2. Add pork into marinade and mix together. \n3. Transfer entire contents into a large pot and cook on medium heat for 30-45 minutes with lid on. If sauce reduces, add another 1/4 cup of water to prevent sauce from being too salty. \n5. Strain liquid into a bowl and separating the meat from the liquid. Do not discard liquid. \n6. In a large pot, heat oil under medium high heat. \n7. Add meat into pot and fry until golden brown. \n10. Serve with a side of steamed rice, pouring liquid on top of rice like a gravy. Enjoy!!! ————————————————————————\n#homecooking #homecooks #sdcook #btcooks #filipinofood #filipino #filipinofoodmovement #filipinocuisine #pinoycooking #foodlover #foodie #food #foodstagram #foodreels #filipinoamerican #porkadobo #carnitas #fried #pork",
    "description":  "Fried Filipino Pork Adobo!!!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds pork shoulder or belly, cut into cubes",
                                               "1/2 cup low sodium soy sauce",
                                               "3 tbsp vinegar",
                                               "2 tbsp brown sugar",
                                               "5 pieces dried bay leaves",
                                               "5 pieces of garlic cloves, crushed",
                                               "1/2 tbsp Knorr Chicken bouillon",
                                               "1 tbsp whole pepper corn or 1/2 tbsp fresh ground pepper",
                                               "1/4 cup water",
                                               "1 cup vegetable oil",
                                               "Salt to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients into a bowl.",
                  "Add pork into marinade and mix together.",
                  "Transfer entire contents into a large pot and cook on medium heat for 30-45 minutes with lid on. If sauce reduces, add another 1/4 cup of water to prevent sauce from being too salty.",
                  "Strain liquid into a bowl and separating the meat from the liquid. Do not discard liquid.",
                  "In a large pot, heat oil under medium high heat.",
                  "Add meat into pot and fry until golden brown.",
                  "Serve with a side of steamed rice, pouring liquid on top of rice like a gravy. Enjoy!!! ————————————————————————"
              ]
},
{
    "id":  "birria-de-res-recipe-with-smoked-chuck-roast-then-finished-o",
    "title":  "Birria de Res recipe with smoked chuck roast then finished off in the Instant",
    "date":  "2023-01-23",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/birria-de-res-recipe-with-smoked-chuck-roast-then-finished-o.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Birria de Res recipe with smoked chuck roast then finished off in the Instant Pot. \n\nIngredients \u0026 Recipe\n3-4 lbs chuck roast\n4 cups water\n1 onion, sliced in half\n5 dried chile guajillo\n2 dried chile ancho\n2 garlic cloves\n1 teaspoon dried oregano\n1 teaspoon dried thyme\n1 clove\n¼ whole cinnamon stick\n2 tablespoon Knorr Beef Bouillon\n3 bay leaves\n2 tablespoons oil\nSalt, pepper, garlic powder\n\nGarnishing:\nSliced lime\nDiced onions\nChopped cilantro\n\n1. Season beef on both sides liberally with salt, pepper, and garlic powder. \n2. Smoke for 3 hours and then set aside. \n3. Heat a pan and toast the chiles on the griddle for 2-3 minutes. Turning frequently and making sure they do not burn.\n4. Once toasted, transfer to a bowl.\n5. Add 1 cup hot water and let the chiles soak for 5 minutes, or until soft.\n6. Remove seeds and devein the chiles, saving the water.\n7. Add the saved water, the chiles, garlic, oregano, thyme, clove, cinnamon, bouillon into a blender and blend until smooth. Set aside.\n8. Set Instant Pot to sauté and add oil. \n9. Sear beef for 3-4 minutes on each side. \n10. Add the chile mixture from the blender, onions, and bay leaves.\n11. Add 4 cups of water or enough water to cover the meat.\n12. Set Instant Pot to pressure cook for 45 minutes and NPR for 15 minutes.\n13. Remove beef and shred. \n14. Skim top layer of oil and discard. \n15. Add beef back into pot. \n16. Serve hot with sliced onions, cilantro, and lime. \n ————————————————————————\n#yummy #traeger #traegerbbq #smokedmeat #grill #bbq #instantpot #foodporn #cookingtips #recipereels #fresh #tasty #delish #delicious #eating #foodpics #foodgasm #homecooking #homecooks #sdcook #btcooks #foodlover #easyrecipes #birria #instantpotrecipes #beefstew #comfortfood #mexicanfood #birriaderes #soup",
    "description":  "Birria de Res recipe with smoked chuck roast then finished off in the Instant",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 lbs chuck roast",
                                               "4 cups water",
                                               "1 onion, sliced in half",
                                               "5 dried chile guajillo",
                                               "2 dried chile ancho",
                                               "2 garlic cloves",
                                               "1 teaspoon dried oregano",
                                               "1 teaspoon dried thyme",
                                               "1 clove",
                                               "whole cinnamon stick",
                                               "2 tablespoon Knorr Beef Bouillon",
                                               "3 bay leaves",
                                               "2 tablespoons oil"
                                           ]
                             },
                             {
                                 "heading":  "Garnishing",
                                 "items":  [
                                               "Sliced lime",
                                               "Diced onions",
                                               "Chopped cilantro"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season beef on both sides liberally with salt, pepper, and garlic powder.",
                  "Smoke for 3 hours and then set aside.",
                  "Heat a pan and toast the chiles on the griddle for 2-3 minutes. Turning frequently and making sure they do not burn.",
                  "Once toasted, transfer to a bowl.",
                  "Add 1 cup hot water and let the chiles soak for 5 minutes, or until soft.",
                  "Remove seeds and devein the chiles, saving the water.",
                  "Add the saved water, the chiles, garlic, oregano, thyme, clove, cinnamon, bouillon into a blender and blend until smooth. Set aside.",
                  "Set Instant Pot to sauté and add oil.",
                  "Sear beef for 3-4 minutes on each side.",
                  "Add the chile mixture from the blender, onions, and bay leaves.",
                  "Add 4 cups of water or enough water to cover the meat.",
                  "Set Instant Pot to pressure cook for 45 minutes and NPR for 15 minutes.",
                  "Remove beef and shred.",
                  "Skim top layer of oil and discard.",
                  "Add beef back into pot.",
                  "Serve hot with sliced onions, cilantro, and lime.",
                  ""
              ]
},
{
    "id":  "kimchi-spam-fried-rice-is-always-great-any-time-during-the-d",
    "title":  "Kimchi \u0026 Spam fried rice is always great any time during the day.",
    "date":  "2023-01-14",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/kimchi-spam-fried-rice-is-always-great-any-time-during-the-d.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Kimchi \u0026 Spam fried rice is always great any time during the day. A family favorite that my kids enjoy 🍻\n\nIngredients:\n3 cups uncooked rice, cooked with less water for dryer consistency \n1 can Spam, diced\n4 garlic cloves, minced\n3 stalks green onions\n3 eggs\n2 tbsp fish sauce\n1 tbsp sesame oil\n1 tbsp low sodium soy sauce \n1 tbsp Gochujang paste\n ————————————————————————\n#foodporn #quickmeals #recipes #recipeoftheday #recipereels #sharingrecipes #cookingtips #tasty #delicious #foodpics #hungry #foodgasm #homemadechef #homecooking #homecook #kimchi #sdcook #btcooks #foodlover #easyrecipes #spam #spamfriedrice #friedrice #wok #gochujang #garlic #soysauce #sesameoil #rice #fishsauce",
    "description":  "Kimchi \u0026 Spam fried rice is always great any time during the day.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 cups uncooked rice, cooked with less water for dryer consistency",
                                               "1 can Spam, diced",
                                               "4 garlic cloves, minced",
                                               "3 stalks green onions",
                                               "3 eggs",
                                               "2 tbsp fish sauce",
                                               "1 tbsp sesame oil",
                                               "1 tbsp low sodium soy sauce",
                                               "1 tbsp Gochujang paste"
                                           ]
                             }
                         ],
    "steps":  [
                  ""
              ]
},
{
    "id":  "stuffed-chicken-breast-served-with-roasted-peppers-and-mashe",
    "title":  "Stuffed chicken breast served with roasted peppers and mashed potatoes",
    "date":  "2023-01-12",
    "category":  "Poultry",
    "image":  "images/recipes/stuffed-chicken-breast-served-with-roasted-peppers-and-mashe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Stuffed chicken breast served with roasted peppers and mashed potatoes. \n\n2 chicken breasts, skin on\n1 8oz package of cream cheese - room temp\n1/2 cup shredded pepper jack cheese\n2 1/2 tbsp Hidden valley ranch seasoning\n1/2 tsp ground pepper\n1 tsp Worcestershire sauce\n2 tbsp butter, melted\n2 springs of thyme leaves\nSalt, pepper, and garlic powder for seasoning chicken\n\n1. Cut a slit in the middle of each chicken breast\n2. Season each breast with salt, pepper, and garlic powder\n3. Combine cream cheese, shredded cheese, ranch seasoning, Worcestershire, and thyme in a bowl. \n4. Stuff each breast with cheese mixture. \n5. Bake chicken in oven at 450 degrees until internal temperature hits 165 degrees. \n6. Brush chicken breast with butter halfway through cook. \n\n ————————————————————————\n#btcooks #TheMeatStick #foodporn #quickmeals #recipes #recipeoftheday #recipereels #sharingrecipes #cookingtips #tasty #delicious #foodpics #hungry #foodgasm #homemadechef #homecooking #homecook #sd #sdcook #foodlover #easyrecipes #stuffedchicken #bakedchicken #roastedpeppers #mashedpotatoes #dinner",
    "description":  "Stuffed chicken breast served with roasted peppers and mashed potatoes",
    "likes":  59,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 8oz package of cream cheese - room temp",
                                               "1/2 cup shredded pepper jack cheese",
                                               "2 1/2 tbsp Hidden valley ranch seasoning",
                                               "1/2 tsp ground pepper",
                                               "1 tsp Worcestershire sauce",
                                               "2 tbsp butter, melted",
                                               "2 springs of thyme leaves"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cut a slit in the middle of each chicken breast",
                  "Season each breast with salt, pepper, and garlic powder",
                  "Combine cream cheese, shredded cheese, ranch seasoning, Worcestershire, and thyme in a bowl.",
                  "Stuff each breast with cheese mixture.",
                  "Bake chicken in oven at 450 degrees until internal temperature hits 165 degrees.",
                  "Brush chicken breast with butter halfway through cook.",
                  ""
              ]
},
{
    "id":  "marinated-smoked-spatchcock-chicken",
    "title":  "Marinated smoked spatchcock chicken.",
    "date":  "2023-01-02",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/marinated-smoked-spatchcock-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Marinated smoked spatchcock chicken. This bird was juicy and packed with flavor. \n\nMarinade:\n1 whole Chicken, spatchcocked \n1/2 cup olive oil\n1/3 cup soy sauce\n1/2 onion quartered, sliced\n1/2 lemon, juiced\n1/2 orange, juiced\n1 stalk green onions, sliced\n4 cloves garlic, minced\n2 tbsp Italian seasoning \n1 tsp smoked paprika\n1 tsp paprika\n1 tbsp Knorr Chicken Bouillon \n1 tsp black pepper\n\n1. Combine all ingredients and marinate chicken for at least 6-8 hours, preferably overnight. \n2. Smoke at 225 for 30 minutes. \n3. Increase heat to 375 and cook until IT hits 165. \n4. Optional - Brush butter all over when IT hits 150 to make it extra crispy. \n ————————————————————————\n#traegergrills #TheMeatStick #homecooking #bbq #lowandslow #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #spatchcock #smokedchicken #bbqchicken #marinatedchicken",
    "description":  "Marinated smoked spatchcock chicken.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 whole Chicken, spatchcocked",
                                               "1/2 cup olive oil",
                                               "1/3 cup soy sauce",
                                               "1/2 onion quartered, sliced",
                                               "1/2 lemon, juiced",
                                               "1/2 orange, juiced",
                                               "1 stalk green onions, sliced",
                                               "4 cloves garlic, minced",
                                               "2 tbsp Italian seasoning",
                                               "1 tsp smoked paprika",
                                               "1 tsp paprika",
                                               "1 tbsp Knorr Chicken Bouillon",
                                               "1 tsp black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients and marinate chicken for at least 6-8 hours, preferably overnight.",
                  "Smoke at 225 for 30 minutes.",
                  "Increase heat to 375 and cook until IT hits 165.",
                  "Optional - Brush butter all over when IT hits 150 to make it extra crispy.",
                  ""
              ]
},
{
    "id":  "beef-marinade-that-i-use-on-mostly-all-my-beef",
    "title":  "Beef marinade that I use on mostly all my beef.",
    "date":  "2022-12-19",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/beef-marinade-that-i-use-on-mostly-all-my-beef.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef marinade that I use on mostly all my beef. This is perfect for Short Ribs, Skirt Steaks, and Flap Meat. Cooked this up for the homies XXXMas get together 🍻\n\n3-4 lbs Flap Meat, Short Ribs, or Skirt Steak\nBlended Ingredients:\n1/3 cup low sodium soy sauce\n1/3 cup oyster sauce\n1/3 cup water\n1/3 cup brown sugar\n2 tbsp sesame oil\n1 tsp ground black pepper\n1 Pear, chopped\n1 Apple, chopped\n1/2 head of garlic \n1 small onion, chopped\n1 tsp ginger, chopped \n1/3 cup white wine (optional)\n\nAdditional Marinade Ingredients:\n2 stalks green onions, chopped\n1/2 head of garlic, crushed\n\n1. In a blender add all blended ingredients and blend until you have a smooth consistency. \n2. In a zip lock bag combine short ribs, garlic, green onions, wine, and marinade. \n3. Marinade for 4-6 hours. \n4. Grill over medium-high heat. Don’t over cook since the sugar can easily char. \n5. Best served medium/rare or medium. \n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #recipeoftheday #recipereels #sharingrecipes #cookingtips #foodpics #hungry #foodgasm #homemadechef #homecooking #homecook #sd #sdcook #btcooks #foodlover #easyrecipes #grilledbeef #bbq #grilling #kalbi #flapmeat #marinade #hawaiianfood #islanderbbq #filipinobbq #soysauce #oystersauce",
    "description":  "Beef marinade that I use on mostly all my beef.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Blended Ingredients",
                                 "items":  [
                                               "1/3 cup low sodium soy sauce",
                                               "1/3 cup oyster sauce",
                                               "1/3 cup water",
                                               "1/3 cup brown sugar",
                                               "2 tbsp sesame oil",
                                               "1 tsp ground black pepper",
                                               "1 Pear, chopped",
                                               "1 Apple, chopped",
                                               "1/2 head of garlic",
                                               "1 small onion, chopped",
                                               "1 tsp ginger, chopped",
                                               "1/3 cup white wine (optional)"
                                           ]
                             },
                             {
                                 "heading":  "Additional Marinade Ingredients",
                                 "items":  [
                                               "2 stalks green onions, chopped",
                                               "1/2 head of garlic, crushed"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a blender add all blended ingredients and blend until you have a smooth consistency.",
                  "In a zip lock bag combine short ribs, garlic, green onions, wine, and marinade.",
                  "Marinade for 4-6 hours.",
                  "Grill over medium-high heat. Don’t over cook since the sugar can easily char.",
                  "Best served medium/rare or medium.",
                  ""
              ]
},
{
    "id":  "islander-style-bbq-chicken-thighs-recipe-below",
    "title":  "Islander style bbq chicken thighs. Recipe below",
    "date":  "2022-12-15",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/islander-style-bbq-chicken-thighs-recipe-below.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Islander style bbq chicken thighs. Recipe below! 🤙🏽🍻\n\n* 12-16 boneless chicken thighs \n* 1/2 cup packed brown sugar\n* 1/2 cup ketchup\n* 1/2 cup reduced-sodium soy sauce\n* 1/3 cup water\n* 2 tbsp chicken bouillon \n* 3 stalks green onions, chopped\n* 4 garlic cloves, minced \n* 1 knob of ginger, minced (optional)\n\n1. Combine all ingredients in a zip lock back and marinate for 4-6 hours, preferably overnight. \n2. Grill until internal temp hits 165 degrees over charcoal or wood for optimal flavor. ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #smokedmeats #foodpics #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #islanderfood #hawaiianfood #bbq #marinade #bbqchicken #hulihuli #salad #traegergrills #smokedmeat #lowandslow #grilledchicken",
    "description":  "* 12-16 boneless chicken thighs",
    "likes":  0,
    "intro":  [
                  "* 12-16 boneless chicken thighs"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1/2 cup ketchup",
                                               "* 1/2 cup reduced-sodium soy sauce",
                                               "* 1/3 cup water",
                                               "* 2 tbsp chicken bouillon",
                                               "* 3 stalks green onions, chopped",
                                               "* 4 garlic cloves, minced",
                                               "* 1 knob of ginger, minced (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a zip lock back and marinate for 4-6 hours, preferably overnight.",
                  "Grill until internal temp hits 165 degrees over charcoal or wood for optimal flavor. ————————————————————————"
              ]
},
{
    "id":  "easy-steak-marinade-that-goes-well-with-any-side",
    "title":  "Easy steak marinade that goes well with any side.",
    "date":  "2022-12-10",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/easy-steak-marinade-that-goes-well-with-any-side.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Easy steak marinade that goes well with any side. Serve with steamed rice and veggies 🔥🔥🔥\n\n4 rib eye steaks \n⅓ cup low sodium soy sauce\n½ cup olive oil \n⅓ cup fresh lemon juice \n¼ cup Worcestershire sauce\n3-4 Garlic cloves, minced\n1 tablespoons dried basil \n1  tablespoons oregano \n1 teaspoon ground white pepper \n1 tablespoon chicken bouillon \n \n1. Combine all ingredients in a blender.\n2. Marinate meat for 3-4 hours.\n3. Grill on high heat for 5-6 minutes each side until medium tenderness. \n ————————————————————————\n#traegergrills #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #steaks #steakmarinade #marinade #corn #shishitopeppers #grilled #islandbbqcravings",
    "description":  "Easy steak marinade that goes well with any side.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "⅓ cup low sodium soy sauce",
                                               "cup olive oil",
                                               "⅓ cup fresh lemon juice",
                                               "cup Worcestershire sauce",
                                               "3-4 Garlic cloves, minced",
                                               "1 tablespoons dried basil",
                                               "1 tablespoons oregano",
                                               "1 teaspoon ground white pepper",
                                               "1 tablespoon chicken bouillon"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a blender.",
                  "Marinate meat for 3-4 hours.",
                  "Grill on high heat for 5-6 minutes each side until medium tenderness.",
                  ""
              ]
},
{
    "id":  "japanese-bbq-is-probably-one-of-my-favorite-style-of-bbq",
    "title":  "Japanese BBQ is probably one of my favorite style of BBQ.",
    "date":  "2022-11-15",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/japanese-bbq-is-probably-one-of-my-favorite-style-of-bbq.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Japanese BBQ is probably one of my favorite style of BBQ. Flap meat marinated in miso paste, garlic, onions, sake, sugar, apples, and sesame oil. Grilled and served up with Sukiyaki Bibimbap.\n\nIngredients\n3 pounds Flap meat steak, cut into 2 inch strips against the grain\n\nMarinade: \n6 tablespoons brown miso\n4 tablespoons sake\n4 tablespoons sugar\n1 tbsp sesame oil\n2 tbsp soy sauce\n1 Apple \n2 Garlic cloves \n1/2 Onion\n\nInstructions\n1. Place all marinade ingredients in a blender. \n2. Marinate Flap meat in miso marinade for 2-3 hours. ————————————————————————\n#gasgrill #yum #homecooking #bbq #lowandslow #grilling #backyardgrilling #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #japanesebbq #misomarinade #marinade #misopaste #sukiyaki #bibimbap #friedrice #yakiniku #umami",
    "description":  "Japanese BBQ is probably one of my favorite style of BBQ.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 pounds Flap meat steak, cut into 2 inch strips against the grain"
                                           ]
                             },
                             {
                                 "heading":  "Marinade",
                                 "items":  [
                                               "6 tablespoons brown miso",
                                               "4 tablespoons sake",
                                               "4 tablespoons sugar",
                                               "1 tbsp sesame oil",
                                               "2 tbsp soy sauce",
                                               "1 Apple",
                                               "2 Garlic cloves",
                                               "1/2 Onion"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place all marinade ingredients in a blender.",
                  "Marinate Flap meat in miso marinade for 2-3 hours. ————————————————————————"
              ]
},
{
    "id":  "this-bang-bang-salmon-recipe-is-probably-one-of-my-new-favor",
    "title":  "This Bang Bang Salmon recipe is probably one of my new favorite salmon dishes.",
    "date":  "2022-10-28",
    "category":  "Seafood",
    "image":  "images/recipes/this-bang-bang-salmon-recipe-is-probably-one-of-my-new-favor.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "This Bang Bang Salmon recipe is probably one of my new favorite salmon dishes. Equal parts sweet chili, mayonnaise, and sriracha sauce smothered over pan seared salmon bites. All served up with cilantro lime basmati rice and roasted broccoli. 🔥🔥🔥\n\nIngredients \u0026 Recipe:\n4-5 Salmon Fillets\nSalt, Pepper, Garlic Powder for seasoning\nGarlic powder\nOlive oil\n\nSauce:\n1/3 cup Mayonnaise \n1/3 cup Sweet Chili Sauce\n1/3 cup Sriracha Sauce\n\n1. Cut salmon into 2 inch cubes\n2. Season salmon with salt, pepper, and garlic powder. \n3. In a frying pan, heat olive oil on medium/high heat. \n4. Pan sear salmon on all sides until golden brown. You can also Airfry it at 400 degrees for 10 minutes or until brown and crispy. \n5. Mix together all ingredients for sauce. \n6. Serve salmon with steamed rice and favorite veggies, drizzling sauce over salmon. Enjoy!!!!\n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #bangbangsalmon #sriracha #mayonaise #sweetchili #salmon #trending #asianfood #salmonrecipe",
    "description":  "This Bang Bang Salmon recipe is probably one of my new favorite salmon dishes.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Olive oil",
                  "1/3 cup Mayonnaise",
                  "1/3 cup Sweet Chili Sauce",
                  "1/3 cup Sriracha Sauce",
                  "Cut salmon into 2 inch cubes",
                  "Season salmon with salt, pepper, and garlic powder.",
                  "In a frying pan, heat olive oil on medium/high heat.",
                  "Pan sear salmon on all sides until golden brown. You can also Airfry it at 400 degrees for 10 minutes or until brown and crispy.",
                  "Mix together all ingredients for sauce.",
                  "Serve salmon with steamed rice and favorite veggies, drizzling sauce over salmon. Enjoy!!!!",
                  ""
              ]
},
{
    "id":  "filipino-chicken-tinola",
    "title":  "Filipino Chicken Tinola.",
    "date":  "2022-10-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-chicken-tinola.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Chicken Tinola. Pieces of chicken cooked in a ginger flavored broth served with steamed rice. \n\nRecipe \u0026 Ingredients\n1 whole chicken (3lb), cut into serving pieces\n2 cups baby spinach \n1/4 teaspoon ground black pepper\n2 piece chayote, cut into large cubes\n6 cups water\n2 tbsp Knorr chicken bouillon powder\n1 medium yellow onion, sliced\n1 head of garlic crushed and chopped\n3 thumbs ginger, julienne\n3 tbsp fish sauce\n3 tbsp vegetable oil\n\n1. Heat oil in a pot.\n2. Sauté garlic, onion, and ginger. Cook for 3 minutes. \n3. Add the chicken. Cook for 5 minutes or until it turns light brown.\n4. Add the fish sauce, chicken bouillon, and ground black pepper. \n5. Pour the the 6 cups of water and boil. Cover and cook under medium heat for 40 minutes.\n6. Scoop and discard the scums and oil on the soup.\n7. Add the chayote and cover and cook for 5 minutes.\n8. Add the spinach leaves and cook for 2 minutes.\n9. Transfer to a serving bowl and serve with steamed rice. Enjoy!\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #chickentinola #filipinofood #comfortfood #knorr #chickenstew #soupandrice #chicken #boullion #fishsauce",
    "description":  "Recipe \u0026 Ingredients",
    "likes":  0,
    "intro":  [
                  "Recipe \u0026 Ingredients"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 cups baby spinach",
                                               "1/4 teaspoon ground black pepper",
                                               "2 piece chayote, cut into large cubes",
                                               "6 cups water",
                                               "2 tbsp Knorr chicken bouillon powder",
                                               "1 medium yellow onion, sliced",
                                               "1 head of garlic crushed and chopped",
                                               "3 thumbs ginger, julienne",
                                               "3 tbsp fish sauce",
                                               "3 tbsp vegetable oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat oil in a pot.",
                  "Sauté garlic, onion, and ginger. Cook for 3 minutes.",
                  "Add the chicken. Cook for 5 minutes or until it turns light brown.",
                  "Add the fish sauce, chicken bouillon, and ground black pepper.",
                  "Pour the the 6 cups of water and boil. Cover and cook under medium heat for 40 minutes.",
                  "Scoop and discard the scums and oil on the soup.",
                  "Add the chayote and cover and cook for 5 minutes.",
                  "Add the spinach leaves and cook for 2 minutes.",
                  "Transfer to a serving bowl and serve with steamed rice. Enjoy!",
                  ""
              ]
},
{
    "id":  "my-grandmas-filipino-chicken-adobo-recipe",
    "title":  "My Grandmas Filipino Chicken Adobo recipe.",
    "date":  "2022-10-01",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/my-grandmas-filipino-chicken-adobo-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "My Grandmas Filipino Chicken Adobo recipe. Simmered chicken meat in a mixture of vinegar, soy sauce, and garlic providing slightly sweet and savory flavors. Served hot with a side of steamed rice and eggs 🤙🏽\n\nIngredients \u0026 Recipe\n1 4-5lb whole chicken, cut up into pieces and skin removed. \n1/2 cup low sodium soy sauce\n3 tbsp vinegar\n1 tbsp cane sugar\n5 pieces dried bay leaves\n1 head of garlic cloves, crushed\n1/2 tbsp Knorr Chicken bouillon \n1 tbsp whole pepper corn\n1/2 stick butter\n3 tbsp vegetable oil, separated\nSalt to taste\n\n1. In a large wok, heat 2 tbsp of oil on medium/high heat. \n2. Add chopped chicken and lightly seasoned with salt and bouillon. Cook for 5-8 minutes. \n3. Add garlic, soy sauce, vinegar, sugar, pepper corns, and bay leaves. \n4. Cook for about 10 minutes. On medium heat. \n5. Strain liquid into a bowl and separating the meat from the liquid. Do not discard liquid. \n6. In a large pot, melt butter and remaining oil under medium high heat. \n7. Add meat into pot and pan fry until golden brown on all sides, about 2-3 minutes on each side. \n8. Pour liquid back into pot with meat and heat for about 2 minutes. \n9. Taste. If too salty add a little bit of water and add salt as needed. \n10. Serve with a side of steamed rice, pouring liquid on top of rice like a gravy. Enjoy!!!\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #filipinofood #chickenadobo #filipinocomfortfood #savory #sweet #umami #knorr #kikkoman #bayleaves #gravy",
    "description":  "My Grandmas Filipino Chicken Adobo recipe.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 4-5lb whole chicken, cut up into pieces and skin removed.",
                                               "1/2 cup low sodium soy sauce",
                                               "3 tbsp vinegar",
                                               "1 tbsp cane sugar",
                                               "5 pieces dried bay leaves",
                                               "1 head of garlic cloves, crushed",
                                               "1/2 tbsp Knorr Chicken bouillon",
                                               "1 tbsp whole pepper corn",
                                               "1/2 stick butter",
                                               "3 tbsp vegetable oil, separated",
                                               "Salt to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large wok, heat 2 tbsp of oil on medium/high heat.",
                  "Add chopped chicken and lightly seasoned with salt and bouillon. Cook for 5-8 minutes.",
                  "Add garlic, soy sauce, vinegar, sugar, pepper corns, and bay leaves.",
                  "Cook for about 10 minutes. On medium heat.",
                  "Strain liquid into a bowl and separating the meat from the liquid. Do not discard liquid.",
                  "In a large pot, melt butter and remaining oil under medium high heat.",
                  "Add meat into pot and pan fry until golden brown on all sides, about 2-3 minutes on each side.",
                  "Pour liquid back into pot with meat and heat for about 2 minutes.",
                  "Taste. If too salty add a little bit of water and add salt as needed.",
                  "Serve with a side of steamed rice, pouring liquid on top of rice like a gravy. Enjoy!!!",
                  ""
              ]
},
{
    "id":  "gojuchang-pasta-sauce-and-pan-seared-shrimp",
    "title":  "Gojuchang pasta sauce and pan seared shrimp.",
    "date":  "2022-09-11",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/gojuchang-pasta-sauce-and-pan-seared-shrimp.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Gojuchang pasta sauce and pan seared shrimp. This has probably have to be one of my favorite pasta dishes. The hint of spice and flavors from the Gochujang paste puts this on another level.\n\nIngredient \u0026 Recipe:\n\n1 packet of pasta (I used Spaghetti Noodles)\n2 tbsp olive oil \n2 tbsp butter, separated \u20282 cups peeled and deveined raw shrimp\u20282 tbsp gochujang (Korean chili paste)\u20286 garlic cloves, minced\n1 cup heavy cream\n1/2 cup grated Parmesan Cheese\u20281/2 cup Italian parsley, chopped\n\n1. In a large pot, cook the pasta 1-2 minute shy of cooking instructions. \n2. Reserve ½ cup of pasta water and drain.\n3. In a large skillet, heat oil and 1 tbsp butter under medium-high heat. \n4. Add shrimp, seasoning with salt and pepper cooking for 2-3 minutes on each side. Once done, set aside. \n5. In the same skillet, sauté garlic on medium heat with olive oil 1 minute. \n6. Add the gochujang paste and cook for another 1-2 minutes stirring frequently. \n7. Add heavy cream and mix together until paste and cream incorporate together. \n8. Add the cooked pasta, shrimp, and reserved pasta water and stir to combine.\n9. Turn the heat to low then add remaining butter, parmesan cheese, and 1/4 cup of chopped parsley. Saving the remaining parsley as garnish. \n\n ————————————————————————\n#yummy #quickmeals #recipes #fresh #tasty #delicious #italianfood #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #pasta #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #koreanmeals #gojuchang #gojuchangsauce #koreanfood #pasta #redsauce #shrimp #umami #noodles #asianfood #asianrecipes",
    "description":  "Gojuchang pasta sauce and pan seared shrimp.",
    "likes":  75,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet of pasta (I used Spaghetti Noodles)",
                                               "2 tbsp olive oil",
                                               "2 tbsp butter, separated 2 cups peeled and deveined raw shrimp 2 tbsp gochujang (Korean chili paste) 6 garlic cloves, minced",
                                               "1 cup heavy cream",
                                               "1/2 cup grated Parmesan Cheese 1/2 cup Italian parsley, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot, cook the pasta 1-2 minute shy of cooking instructions.",
                  "Reserve ½ cup of pasta water and drain.",
                  "In a large skillet, heat oil and 1 tbsp butter under medium-high heat.",
                  "Add shrimp, seasoning with salt and pepper cooking for 2-3 minutes on each side. Once done, set aside.",
                  "In the same skillet, sauté garlic on medium heat with olive oil 1 minute.",
                  "Add the gochujang paste and cook for another 1-2 minutes stirring frequently.",
                  "Add heavy cream and mix together until paste and cream incorporate together.",
                  "Add the cooked pasta, shrimp, and reserved pasta water and stir to combine.",
                  "Turn the heat to low then add remaining butter, parmesan cheese, and 1/4 cup of chopped parsley. Saving the remaining parsley as garnish.",
                  ""
              ]
},
{
    "id":  "homemade-apple-sauce-cooked-in-the-instantpot",
    "title":  "Homemade Apple sauce cooked in the InstantPot.",
    "date":  "2022-09-07",
    "category":  "Other",
    "image":  "images/recipes/homemade-apple-sauce-cooked-in-the-instantpot.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Homemade Apple sauce cooked in the InstantPot. We went apple picking over the weekend and had to whip up this easy treat for the kids. \n\nIngredients \u0026 Recipe\n* 8 Apples\n* 1 cup water\n* 1 Tbsp fresh lemon juice (I used Meyer Lemon)\n* 1/2 tsp ground cinnamon\n* 1 Tbsp sugar (optional)\n\n1. Peel and core apples, then chop up into smaller pieces. \n2. Add water, lemon juice, and cinnamon into instant pot \n3. Add apples and mix together\n4. Set Instant pot to high pressure for 8 minutes. \n5. When done, quick release. \n6. Mash apples \n7. Add more water if it is too thick. \n8. Add sugar if you want it a little sweeter, depending on the apples you used.\n9. Serve warm or cold.\n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #instantpot #applesauce #apples #organic #applepicking #pressurecooked #julianapples #kidsmeal #snack #kidssnack",
    "description":  "Homemade Apple sauce cooked in the InstantPot.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 8 Apples",
                                               "* 1 cup water",
                                               "* 1 Tbsp fresh lemon juice (I used Meyer Lemon)",
                                               "* 1/2 tsp ground cinnamon",
                                               "* 1 Tbsp sugar (optional)"
                                           ]
                             }
                         ],
    "steps":  [
                  "Peel and core apples, then chop up into smaller pieces.",
                  "Add water, lemon juice, and cinnamon into instant pot",
                  "Add apples and mix together",
                  "Set Instant pot to high pressure for 8 minutes.",
                  "When done, quick release.",
                  "Mash apples",
                  "Add more water if it is too thick.",
                  "Add sugar if you want it a little sweeter, depending on the apples you used.",
                  "Serve warm or cold.",
                  ""
              ]
},
{
    "id":  "what-do-you-know-about-that-korean-style-sesame-broccoli",
    "title":  "What do you know about that Korean style sesame broccoli",
    "date":  "2022-08-29",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/what-do-you-know-about-that-korean-style-sesame-broccoli.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "What do you know about that Korean style sesame broccoli!!!! \n\nIngredients \u0026 Recipe:\n\n* 1 pound broccoli\n* 2 tbsp salt for blanching\n* 1 tablespoon furikake\n* 1 tablespoon sesame oil\n* 1-2 cloves garlic, minced\n* salt to taste\n\n1. Heat a medium sized pot with water and bring to a boil. \n2. Add 2 tbsp salt and broccoli and cook for 1-2 minutes. \n3. Drain broccoli and rinse with cold water. \n4. Combine broccoli with furikake, sesame oil, garlic, and season with salt. \n5. Place in the fridge for at least 1 hour. \n6. Serve with your favorite BBQ. \n ————————————————————————\n1. #yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #koreanbbq #sesamebroccoli #broccoli #appetizer #veggies #fresh #greens",
    "description":  "What do you know about that Korean style sesame broccoli",
    "likes":  47,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 1 pound broccoli",
                                               "* 2 tbsp salt for blanching",
                                               "* 1 tablespoon furikake",
                                               "* 1 tablespoon sesame oil",
                                               "* 1-2 cloves garlic, minced"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a medium sized pot with water and bring to a boil.",
                  "Add 2 tbsp salt and broccoli and cook for 1-2 minutes.",
                  "Drain broccoli and rinse with cold water.",
                  "Combine broccoli with furikake, sesame oil, garlic, and season with salt.",
                  "Place in the fridge for at least 1 hour.",
                  "Serve with your favorite BBQ.",
                  "",
                  "#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #koreanbbq #sesamebroccoli #broccoli #appetizer #veggies #fresh #greens"
              ]
},
{
    "id":  "bacon-wrapped-serrano-peppers",
    "title":  "Bacon wrapped Serrano peppers.",
    "date":  "2022-08-22",
    "category":  "Pork",
    "image":  "images/recipes/bacon-wrapped-serrano-peppers.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bacon wrapped Serrano peppers. Bite sized appetizers that provide some heat and go great with a cold beer 🍻. \n\nIngredients \u0026 Recipe\n\n1lb Serrano peppers, clicked in half and cored\n1 8oz block Cream Cheese, room temp\n1 package Bacon, cut in half\n1/4 cup Cheddar or Pepper Jack shredded cheese\nFavorite pork rub \n3 stalks Green Onions, chopped\n\n1. Combine cream cheese, shredded cheese, and green onions in a bowl and mix well. \n2. Spoon in a thin layer of cheese mixture inside pepper. \n3. Wrap pepper with bacon. \n4. Lightly season with favorite rub. \n5. Smoke for 30 minutes then grill at high heat or 375 for another 30 minutes. ————————————————————————\n#traegergrills #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #baconwrappedpeppers #serranopeppers #creamcheese #keto #smoked #appetizer #spicy",
    "description":  "Bacon wrapped Serrano peppers.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 8oz block Cream Cheese, room temp",
                                               "1 package Bacon, cut in half",
                                               "1/4 cup Cheddar or Pepper Jack shredded cheese",
                                               "Favorite pork rub",
                                               "3 stalks Green Onions, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine cream cheese, shredded cheese, and green onions in a bowl and mix well.",
                  "Spoon in a thin layer of cheese mixture inside pepper.",
                  "Wrap pepper with bacon.",
                  "Lightly season with favorite rub.",
                  "Smoke for 30 minutes then grill at high heat or 375 for another 30 minutes. ————————————————————————"
              ]
},
{
    "id":  "filipino-chicken-noodle-soup-sopas",
    "title":  "Filipino Chicken Noodle Soup (Sopas).",
    "date":  "2022-07-25",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-chicken-noodle-soup-sopas.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Chicken Noodle Soup (Sopas). Creamy soup with shredded chicken, hot dogs, and macaroni!!!! \n\nIngredients \u0026 Recipe\n1-2 pieces of boned in chicken breast\n3 pieces hot dogs, sliced\n6 cups water or broth\n1 chicken bouillon\n1 small onion\n2 cloves of garlic, minced \n2 cups elbow pasta\n1 carrot, julienned \n1 celery, sliced\n1/2 cup cabbage\n2 cup milk\n1 tbsp fish sauce\n1 tbsp cooking oil\nSalt and pepper\n\n1. In a large pot, heat oil under medium high heat. \n2. Sauté onions and garlic for 2-3 minutes. \n3. Add chicken breasts, seasoning with salt and pepper, searing all sides. \n4. Add water, bouillon, and fish sauce. \n5. Under low medium heat, cook chicken for 2 hours. Skimming off scum. \n6. While chicken is cooking heat a small pan and toast macaroni just until it turns light brown. Remove from heat and set aside. \n7. Remove chicken and shred meat, discarding bones and skin. \n8. Place shredded chicken and hot dogs back into pot. \n9. Add celery, carrots, and macaroni cooking for an additional 7 minutes. \n10. Add cabbage and milk, cooking for an additional 5 minutes. \n11. Season with additional salt and pepper as needed. \n12. Serve immediately. \n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #filipinofood #comfortfood #sopas #soup #shreddedchicken #hotdogs #creamysoup #islanderfood",
    "description":  "Filipino Chicken Noodle Soup (Sopas).",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1-2 pieces of boned in chicken breast",
                                               "3 pieces hot dogs, sliced",
                                               "6 cups water or broth",
                                               "1 chicken bouillon",
                                               "1 small onion",
                                               "2 cloves of garlic, minced",
                                               "2 cups elbow pasta",
                                               "1 carrot, julienned",
                                               "1 celery, sliced",
                                               "1/2 cup cabbage",
                                               "2 cup milk",
                                               "1 tbsp fish sauce",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot, heat oil under medium high heat.",
                  "Sauté onions and garlic for 2-3 minutes.",
                  "Add chicken breasts, seasoning with salt and pepper, searing all sides.",
                  "Add water, bouillon, and fish sauce.",
                  "Under low medium heat, cook chicken for 2 hours. Skimming off scum.",
                  "While chicken is cooking heat a small pan and toast macaroni just until it turns light brown. Remove from heat and set aside.",
                  "Remove chicken and shred meat, discarding bones and skin.",
                  "Place shredded chicken and hot dogs back into pot.",
                  "Add celery, carrots, and macaroni cooking for an additional 7 minutes.",
                  "Add cabbage and milk, cooking for an additional 5 minutes.",
                  "Season with additional salt and pepper as needed.",
                  "Serve immediately.",
                  ""
              ]
},
{
    "id":  "one-of-my-favorite-world-comfort-foods-called-chicken-adobo",
    "title":  "One of my favorite world comfort foods called Chicken Adobo.",
    "date":  "2022-07-10",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/one-of-my-favorite-world-comfort-foods-called-chicken-adobo.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "One of my favorite world comfort foods called Chicken Adobo. This recipe is using chicken wings and baked to give a crispy texture. The sauce is drizzled over rice and served with a side of eggs and oyster sauce broccolini 🤙🏽\n\nIngredients \u0026 Recipe:\n3 lbs - Party Wings or Thighs\n1.5 cups Soy sauce\n1 Tbsp Brown sugar\n1 Large Onion, sliced\n1 Full head Garlic, smashed\n3 Bay Leaves \n2 Tbsp Vinegar\n1 tsp Ground pepper\n \n1. In a zip lock bag, season chicken with bay leaves, pepper, soy sauce, vinegar, onions, garlic, and brown sugar.\n2. Marinate for 2-3hrs. \n3. In a large skillet over medium high heat and olive oil, brown chicken on skillet on both sides; remove chicken from pan and set aside. \n4. In the same pot, dump marinade in skillet and cook for 5 min. \n5. Set oven to 425 and place chicken in a non stick pan, spooning in a thin layer of sauce over the chicken. \n6. Bake for 30 min - 45 min, rotating chicken half way through. \n7. Keep left over sauce to drizzle over rice. \n8. Serve with hard boiled eggs and steamed rice\n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #chickenadobo #filipinofood #islanderfood #comfortfood #hawaiianfood #bakedwings #marinated",
    "description":  "One of my favorite world comfort foods called Chicken Adobo.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs - Party Wings or Thighs",
                                               "5 cups Soy sauce",
                                               "1 Tbsp Brown sugar",
                                               "1 Large Onion, sliced",
                                               "1 Full head Garlic, smashed",
                                               "3 Bay Leaves",
                                               "2 Tbsp Vinegar",
                                               "1 tsp Ground pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a zip lock bag, season chicken with bay leaves, pepper, soy sauce, vinegar, onions, garlic, and brown sugar.",
                  "Marinate for 2-3hrs.",
                  "In a large skillet over medium high heat and olive oil, brown chicken on skillet on both sides; remove chicken from pan and set aside.",
                  "In the same pot, dump marinade in skillet and cook for 5 min.",
                  "Set oven to 425 and place chicken in a non stick pan, spooning in a thin layer of sauce over the chicken.",
                  "Bake for 30 min - 45 min, rotating chicken half way through.",
                  "Keep left over sauce to drizzle over rice.",
                  "Serve with hard boiled eggs and steamed rice",
                  ""
              ]
},
{
    "id":  "need-a-summer-dish",
    "title":  "Need a Summer Dish?!!",
    "date":  "2022-07-06",
    "category":  "Other",
    "image":  "images/recipes/need-a-summer-dish.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Need a Summer Dish?!! Spaghetti con Gamberi (Shrimp Spaghetti). Combination of Spaghetti Pasta with Shrimp, Tomatoes, and Fresh Basil makes for a simple dinner. \nIngredients \u0026 Recipe\n12 ounces Pasta Noodles (Spaghetti)\n2 tbsp olive oil\n7 cloves minced garlic\n1/4 teaspoon crushed red pepper flakes\n1 Roma tomato diced\n1 cup dry white wine\n1 tsp salt \u0026 pepper\n1 pound medium shrimp peeled and deveined\n1 Tbsp butter\n1/4 cup chopped fresh basil\n\n1. Cook the pasta according to the package directions, just until al dente, then drain and set aside.\n2. Heat the olive oil in a large skillet over medium heat. \n3. Add the minced garlic and cook for 1 minute, stirring constantly to prevent the garlic from burning.\n4. Add the diced tomatoes, salt, pepper, red pepper flakes, and white wine. Cook for about 5-7 minutes until alcohol has burned off. \n5. Add the shrimp and cook, stirring frequently, until the shrimp turns pink.\n6. Add butter and basil and mix together until the butter melts. \n7. Toss in the cooked cooked pasta. Mix everything together and serve immediately.\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #summerdishes #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #pasta #spaghetti #shrimppasta #italianfood #basil #noodles #bonappetit #spaghetticongamberi #barilla",
    "description":  "Need a Summer Dish?!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "12 ounces Pasta Noodles (Spaghetti)",
                                               "2 tbsp olive oil",
                                               "7 cloves minced garlic",
                                               "1/4 teaspoon crushed red pepper flakes",
                                               "1 Roma tomato diced",
                                               "1 cup dry white wine",
                                               "1 tsp salt \u0026 pepper",
                                               "1 pound medium shrimp peeled and deveined",
                                               "1 Tbsp butter",
                                               "1/4 cup chopped fresh basil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cook the pasta according to the package directions, just until al dente, then drain and set aside.",
                  "Heat the olive oil in a large skillet over medium heat.",
                  "Add the minced garlic and cook for 1 minute, stirring constantly to prevent the garlic from burning.",
                  "Add the diced tomatoes, salt, pepper, red pepper flakes, and white wine. Cook for about 5-7 minutes until alcohol has burned off.",
                  "Add the shrimp and cook, stirring frequently, until the shrimp turns pink.",
                  "Add butter and basil and mix together until the butter melts.",
                  "Toss in the cooked cooked pasta. Mix everything together and serve immediately.",
                  ""
              ]
},
{
    "id":  "filipino-sisig-is-a-savory-spicy-and-sour-appetizer-or-main",
    "title":  "Filipino Sisig is a savory, spicy, and sour appetizer or main dish.",
    "date":  "2022-06-27",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-sisig-is-a-savory-spicy-and-sour-appetizer-or-main.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Sisig is a savory, spicy, and sour appetizer or main dish. Typically made with deep fried pork belly (Lechon Kawali), but made this batch with BBQ chicken marinated in soy sauce, lemon juice, garlic, and salt/pepper. Perfect dish to go with a cold beer 🍻. \n\nBBQ Chicken Marinade\n* 5lbs Chicken thighs \n* 1/2 cup soy sauce\n* 4 cloves garlic, chopped\n* 2 tablespoon calamansi or 1 lemon juice\n* 1 tbsp Knorr Chicken Bouillon \n* 1/2 tbsp black pepper\n\nSisig Ingredients \n* BBQ Chicken, chopped\n* 1 medium red bell pepper, diced\n* 1 medium green bell pepper, diced\n* 4 stalks green onions, chopped\n* 1 red onion, diced\n* 1/3 cup calamansi or 2 lemons, juiced\n* 1 tbsp low sodium soy sauce\n* 1 tbsp Knorr Chicken Bouillon\n* 1/2 - 1 tbsp Dried chili flakes, (optional)\n* salt and pepper to taste\n\n1. Marinate chicken for 4-6 hours. \n2. Bbq chicken in smoker or over charcoal grill. \n3. Once cooked, set aside to cool then separate meat from bone, chopping meat up into chunks. \n4. In a large bowl, combine chicken, bell pepper, onions, and chili flakes.\n5. Add calamansi or lemon juice, soy sauce, and bouillon. \n6. Season with salt and pepper to taste. \n7. Toss together and serve immediately ————————————————————————\n#traegergrills #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #sisig #islanderfood #pinoyfood #appetizer #bbqchicken #lechonkawali #filipinofood",
    "description":  "BBQ Chicken Marinade * 5lbs Chicken thighs",
    "likes":  0,
    "intro":  [
                  "BBQ Chicken Marinade * 5lbs Chicken thighs"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 4 cloves garlic, chopped",
                                               "* 2 tablespoon calamansi or 1 lemon juice",
                                               "* 1 tbsp Knorr Chicken Bouillon",
                                               "* 1/2 tbsp black pepper",
                                               "Sisig Ingredients",
                                               "* BBQ Chicken, chopped",
                                               "* 1 medium red bell pepper, diced"
                                           ]
                             }
                         ],
    "steps":  [
                  "* 1 medium green bell pepper, diced",
                  "* 4 stalks green onions, chopped",
                  "* 1 red onion, diced",
                  "* 1/3 cup calamansi or 2 lemons, juiced",
                  "* 1 tbsp low sodium soy sauce",
                  "* 1 tbsp Knorr Chicken Bouillon",
                  "* 1/2 - 1 tbsp Dried chili flakes, (optional)",
                  "* salt and pepper to taste",
                  "Marinate chicken for 4-6 hours.",
                  "Bbq chicken in smoker or over charcoal grill.",
                  "Once cooked, set aside to cool then separate meat from bone, chopping meat up into chunks.",
                  "In a large bowl, combine chicken, bell pepper, onions, and chili flakes.",
                  "Add calamansi or lemon juice, soy sauce, and bouillon.",
                  "Season with salt and pepper to taste.",
                  "Toss together and serve immediately ————————————————————————"
              ]
},
{
    "id":  "beef-asado-is-a-popular-filipino-beef-dish-similar-to-beef-s",
    "title":  "Beef asado is a popular Filipino beef dish similar to beef stew.",
    "date":  "2022-06-15",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/beef-asado-is-a-popular-filipino-beef-dish-similar-to-beef-s.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef asado is a popular Filipino beef dish similar to beef stew. All ingredients are cooked in a pot until meat is tender. Served with steamed rice and fried potatoes. \n\n2-3 pounds beef Chuck \n1 onion, diced \n1 head garlic, minced\n1/2 tbsp ground black pepper\n2 tbsp cooking oil\n2 bay leaves\n1 tbsp chicken or beef bouillon \n2 tbsp soy sauce\n2 tbsp ketchup \n1 red \u0026 green bell peppers, cut into slices\n2 large tomatoes cut into small pieces\n1/2 tbsp salt. \n\n1. In a large pot, heat oil under medium-high heat. \n2. Add onions and sauté until soft. \n3. Add garlic and sauté for another 1-2 minutes. \n4. Add meat, season with salt, pepper, and bouillon. Cook until brown on all sides. \n5. Add tomatoes, bay leaves, ketchup, and soy sauce. With lid on, cook for 20 minutes. Stir occasionally. \n6. Add bell peppers and with lid on, cook for another 30 minutes or until meat is tender. Stir occasionally. \n7. Taste and add salt as needed. If too salty, add 1/4 cup of water to dilute. \n8. Serve with a side of steamed rice and fried potatoes. \n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #kikkoman #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #beefasado #filipinofood #comfortfood #steamedrice #beefstew #soysauce #bouiilon #bayleaves #friedpotatoes #bellpeppers",
    "description":  "Beef asado is a popular Filipino beef dish similar to beef stew.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 onion, diced",
                                               "1 head garlic, minced",
                                               "1/2 tbsp ground black pepper",
                                               "2 tbsp cooking oil",
                                               "2 bay leaves",
                                               "1 tbsp chicken or beef bouillon",
                                               "2 tbsp soy sauce",
                                               "2 tbsp ketchup",
                                               "1 red \u0026 green bell peppers, cut into slices",
                                               "2 large tomatoes cut into small pieces",
                                               "1/2 tbsp salt."
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot, heat oil under medium-high heat.",
                  "Add onions and sauté until soft.",
                  "Add garlic and sauté for another 1-2 minutes.",
                  "Add meat, season with salt, pepper, and bouillon. Cook until brown on all sides.",
                  "Add tomatoes, bay leaves, ketchup, and soy sauce. With lid on, cook for 20 minutes. Stir occasionally.",
                  "Add bell peppers and with lid on, cook for another 30 minutes or until meat is tender. Stir occasionally.",
                  "Taste and add salt as needed. If too salty, add 1/4 cup of water to dilute.",
                  "Serve with a side of steamed rice and fried potatoes.",
                  ""
              ]
},
{
    "id":  "marinated-rib-eye-steak",
    "title":  "Marinated rib eye steak.",
    "date":  "2022-06-07",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/marinated-rib-eye-steak.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Marinated rib eye steak. Served with steamed rice and a side of spinach salad w/ Mango vinaigrette. 🤙🏽🍻\n\n2-4 rib eye steaks \n1/2 cup soy sauce\n1/2 cup olive oil \n1 lemon, juiced \n1/4 cup Worcestershire sauce\n4 Garlic cloves, minced\n2 tbsp dried basil \n1  tbsp dried oregano or Italian seasoning\n1 tsp ground white pepper \n\n1. Combine all ingredients in a zip lock back and marinate for 2-3 hours.\n2. Grill steaks and let rest for 5 minutes. \n3. Serve with rice\n\n ————————————————————————\n#traegergrills #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #grilledsteak #ribeye #marinade #marinatedsteak #steamedrice #mangovinaigrette #salad",
    "description":  "2-4 rib eye steaks",
    "likes":  74,
    "intro":  [
                  "2-4 rib eye steaks"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 cup olive oil",
                                               "1 lemon, juiced",
                                               "1/4 cup Worcestershire sauce",
                                               "4 Garlic cloves, minced",
                                               "2 tbsp dried basil",
                                               "1 tbsp dried oregano or Italian seasoning",
                                               "1 tsp ground white pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a zip lock back and marinate for 2-3 hours.",
                  "Grill steaks and let rest for 5 minutes.",
                  "Serve with rice",
                  ""
              ]
},
{
    "id":  "poisson-cru-is-one-of-my-favorite-dishes-that-i-had-in-tahit",
    "title":  "Poisson Cru is one of my favorite dishes that I had in Tahiti Mo’orea.",
    "date":  "2022-05-28",
    "category":  "Other",
    "image":  "images/recipes/poisson-cru-is-one-of-my-favorite-dishes-that-i-had-in-tahit.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Poisson Cru is one of my favorite dishes that I had in Tahiti Mo’orea. It is an Islander Ceviche that consists of raw Ahi cooked in lime juice and fresh veggies with coconut milk. As @rainui_mahalo told me, “Always mix with love!!!!”\n\n2 pounds fresh Ahi Tuna, cut into 1/2-inch cubes \u20284 fresh limes, juiced\u20281⁄2 can coconut milk\u20281 English cucumber, peeled and cut into 1/2-inch cubes \u20281-2 large tomato, diced\n1 small red or yellow onion, sliced thick\n1/4 cup salt\n4 cups water\n\n1. In a large bowl season Ahi with salt and mix well. \n2. Pour in water and mix to clean fish. \n3. Drain water and place fish back into large bowl. \n4. Add lime juice and mix into Ahi. Fish will start to turn white. Let stand for about 5 minutes.\n5. Add cucumber, tomato, and onions into bowl and mix together.\n6. Add coconut milk and mix everything with love!!! \n7. Refrigerate for 1-2 hours before serving. \n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #poissoncru #ceviche #coconutmilk #ahi #rawfish #islanderfood #tahitianfood #appetizer #veggies",
    "description":  "Poisson Cru is one of my favorite dishes that I had in Tahiti Mo’orea.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 small red or yellow onion, sliced thick",
                                               "1/4 cup salt",
                                               "4 cups water"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large bowl season Ahi with salt and mix well.",
                  "Pour in water and mix to clean fish.",
                  "Drain water and place fish back into large bowl.",
                  "Add lime juice and mix into Ahi. Fish will start to turn white. Let stand for about 5 minutes.",
                  "Add cucumber, tomato, and onions into bowl and mix together.",
                  "Add coconut milk and mix everything with love!!!",
                  "Refrigerate for 1-2 hours before serving.",
                  ""
              ]
},
{
    "id":  "spaghetti-all-amatriciana-for-dinner",
    "title":  "Spaghetti all’Amatriciana for dinner",
    "date":  "2022-04-19",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/spaghetti-all-amatriciana-for-dinner.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Spaghetti all’Amatriciana for dinner 🍻👊 \n\nIngredients \u0026 Recipe\u2028\n1 packet of Spaghetti\u20284 ounces Pancetta, diced \u2028½ cup freshly-grated Pecorino Romano\u20281 14oz canned San Marzano tomatoes\u2028¼ cup tomato paste\u20281 medium red onion, cut lengthwise into small slices\n4 Garlic cloves, minced\u20281/3 cup chopped fresh Italian parsley\u2028¼ cup extra virgin olive oil\u20282 teaspoons red pepper flakes\u2028Salt, to taste\n\n1. In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.\n2. Combine the olive oil, Pancetta, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.\n3. Add garlic and cook for 2 minutes, making sure not to burn. \n4. Stir in the tomato paste and red pepper flakes, cook for about 1 minute. \n5. Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce. \n6. Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture. \n7. Stir in the cheese and parsley. \n8. Serve immediately with side of grated Pecorino Romano and parsley. \n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #foodphilics #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #pancetta #italianfood #allamatriciana #penne #marzanotomatoes #parsley #pecorinoromano #cheese #guanciale #spaghetti #pasta",
    "description":  "Spaghetti all’Amatriciana for dinner",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet of Spaghetti 4 ounces Pancetta, diced ½ cup freshly-grated Pecorino Romano 1 14oz canned San Marzano tomatoes ¼ cup tomato paste 1 medium red onion, cut lengthwise into small slices",
                                               "4 Garlic cloves, minced 1/3 cup chopped fresh Italian parsley ¼ cup extra virgin olive oil 2 teaspoons red pepper flakes Salt, to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.",
                  "Combine the olive oil, Pancetta, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.",
                  "Add garlic and cook for 2 minutes, making sure not to burn.",
                  "Stir in the tomato paste and red pepper flakes, cook for about 1 minute.",
                  "Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce.",
                  "Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture.",
                  "Stir in the cheese and parsley.",
                  "Serve immediately with side of grated Pecorino Romano and parsley.",
                  ""
              ]
},
{
    "id":  "chicken-lettuce-wraps-recipe-that-can-be-made-as-a-snack-or",
    "title":  "Chicken lettuce wraps recipe that can be made as a snack or meal",
    "date":  "2022-04-15",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-lettuce-wraps-recipe-that-can-be-made-as-a-snack-or.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken lettuce wraps recipe that can be made as a snack or meal. \n\n Ingredients \u0026 Recipe:\n\n2 tbsp sesame oil\n1 tbsp avocado oil or olive oil\n1 pound ground chicken\n1 small onion, diced \n4 cloves garlic, minced\n1 knob of ginger, finely minced\n1 8oz can water chestnut, drained and diced \n2 cups Shitake Mushrooms, diced\n3 stalks Green onions, sliced\n1/2 tsp salt\n1/2 tsp white pepper\n\nMixture Sauce:\n1/3 cup hoisin sauce\n2 tbsp low-sodium soy sauce\n1 tbsp rice wine vinegar\n1 tbsp Black Bean Garlic sauce\n1 tbsp Sriracha sauce (optional) \n\nSides:\n1 full butter lettuce leaves, separated\nReserve 1/4 cup of mixture sauce\n1 tsp yellow mustard\n1 tsp vinegar\n\n1. In a wok or large skillet, heat on medium-high heat until hot. \n2. Add sesame oil and chicken. Season with salt and pepper and cook until brown, about 5-8 minutes. \n3. Remove chicken from pot and set aside. \n4. Add avocado or olive oil into pot and heat on medium-high heat. \n5. Add onions, garlic, and ginger and cook for 2-3 minutes, stirring ensuring garlic does not burn. \n6. Add water chestnuts and shiitake mushrooms, sauté for 5 minutes. \n7. Add chicken back into pot. \n8. Combine mixture ingredients into a small bowl and reserve 1/4 cup to the side. \n9. Add entire mixture sauce into pot and mix together for 2-3 minutes. \n10. Add green onions and remove from heat. \n11. Take 1/4 cup of reserved mixture and add mustard and vinegar. \n12. Serve spoonful of chicken onto lettuce and drizzle with sauce. Enjoy!\n\n ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #foodphilics #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #lettucewraps #butterlettuce #appetizer #healthyrecipes #groundchicken #chickenlettucewraps #asianfood #sriracha",
    "description":  "Chicken lettuce wraps recipe that can be made as a snack or meal",
    "likes":  139,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 tbsp sesame oil",
                                               "1 tbsp avocado oil or olive oil",
                                               "1 pound ground chicken",
                                               "1 small onion, diced",
                                               "4 cloves garlic, minced",
                                               "1 knob of ginger, finely minced",
                                               "1 8oz can water chestnut, drained and diced",
                                               "2 cups Shitake Mushrooms, diced",
                                               "3 stalks Green onions, sliced",
                                               "1/2 tsp salt",
                                               "1/2 tsp white pepper"
                                           ]
                             },
                             {
                                 "heading":  "Mixture Sauce",
                                 "items":  [
                                               "1/3 cup hoisin sauce",
                                               "2 tbsp low-sodium soy sauce",
                                               "1 tbsp rice wine vinegar",
                                               "1 tbsp Black Bean Garlic sauce",
                                               "1 tbsp Sriracha sauce (optional)"
                                           ]
                             },
                             {
                                 "heading":  "Sides",
                                 "items":  [
                                               "1 full butter lettuce leaves, separated",
                                               "Reserve 1/4 cup of mixture sauce",
                                               "1 tsp yellow mustard",
                                               "1 tsp vinegar"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a wok or large skillet, heat on medium-high heat until hot.",
                  "Add sesame oil and chicken. Season with salt and pepper and cook until brown, about 5-8 minutes.",
                  "Remove chicken from pot and set aside.",
                  "Add avocado or olive oil into pot and heat on medium-high heat.",
                  "Add onions, garlic, and ginger and cook for 2-3 minutes, stirring ensuring garlic does not burn.",
                  "Add water chestnuts and shiitake mushrooms, sauté for 5 minutes.",
                  "Add chicken back into pot.",
                  "Combine mixture ingredients into a small bowl and reserve 1/4 cup to the side.",
                  "Add entire mixture sauce into pot and mix together for 2-3 minutes.",
                  "Add green onions and remove from heat.",
                  "Take 1/4 cup of reserved mixture and add mustard and vinegar.",
                  "Serve spoonful of chicken onto lettuce and drizzle with sauce. Enjoy!",
                  ""
              ]
},
{
    "id":  "bo-luc-lac-shaking-beef-is-one-of-my-my-favorite-dishes-that",
    "title":  "Bo Luc Lac (Shaking Beef) is one of my my favorite dishes that is easy to",
    "date":  "2022-04-05",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/bo-luc-lac-shaking-beef-is-one-of-my-my-favorite-dishes-that.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bo Luc Lac (Shaking Beef) is one of my my favorite dishes that is easy to make. Cubed Ribeye marinated in oyster sauce, soy sauce, fish sauce, garlic, sesame oil, and sugar. Pan seared and served with pickled red onions, pan seared broccolini, and jasmine rice. \n\nBeef Marinade:\n2 boned in rib eye steaks, cut into 1″ cubes\u20282 tbs garlic, minced\u20282 tbs sugar\u20282 tbs oyster sauce\u20281 tbs fish sauce\u20281 tbs sesame oil\u20281 tsp soy sauce \n\n1. Combine all ingredients in a zip lock and marinate for at least 6-8 hours. \n2. Heat a large wok or pan with 2 tbsp of canola or vegetable oil over medium-high heat.\n3. Add an even layer of beef and allow to sear for about 2 minutes per side. \n4. Cook all in batches to cook all the beef evenly. \n5. Serve with steamed rice. 🍻 ————————————————————————\n#yummy #foodporn #quickmeals #recipes #fresh #tasty #delicious #eating #foodpics #vietnamesefood #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #boluclac #shakingbeef #ribeye #steak #pickledonions #jasminerice #brocolini #stirfry #panseared #marinatedsteak",
    "description":  "Bo Luc Lac (Shaking Beef) is one of my my favorite dishes that is easy to",
    "likes":  131,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 boned in rib eye steaks, cut into 1″ cubes 2 tbs garlic, minced 2 tbs sugar 2 tbs oyster sauce 1 tbs fish sauce 1 tbs sesame oil 1 tsp soy sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a zip lock and marinate for at least 6-8 hours.",
                  "Heat a large wok or pan with 2 tbsp of canola or vegetable oil over medium-high heat.",
                  "Add an even layer of beef and allow to sear for about 2 minutes per side.",
                  "Cook all in batches to cook all the beef evenly.",
                  "Serve with steamed rice. 🍻 ————————————————————————"
              ]
},
{
    "id":  "filipino-pork-bbq-the-marinade-is-packed-with-flavor-and-the-2",
    "title":  "Filipino Pork BBQ The marinade is packed with flavor and the smokiness from",
    "date":  "2022-03-24",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-pork-bbq-the-marinade-is-packed-with-flavor-and-the-2.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Pork BBQ 🔥🔥🔥 The marinade is packed with flavor and the smokiness from the T brings it to another level. Served with a side of steamed rice and diced tomatoes, onions, soy sauce, and calamansi. 🍻\n\nIngredients \u0026 Recipe\n3 lbs. pork belly or pork shoulder thinly sliced \n1/2 cup low sodium soy sauce\n1/4 cup Oyster sauce\n1/4 cup Banana Ketchup\n1 piece lemon or 6 pieces calamansi\n1/2 tsp ground black pepper\n2 tsp chicken bouillon \n4 cloves garlic crushed\n1/2 cup white sugar, add more as needed to make marinade slightly sweet\n1 tbsp cooking oil\n\n1. Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight. \n2. Set smoker to 160 and smoke for 30 minutes. \n3. Increase heat to 375 and grill for another 20 minutes or until fully cooked. \n4. Serve with steamed rice and a bowl of soy sauce with a squeeze of lemon juice for dipping. \n\n ————————————————————————\n#traegergrills #homecooking #homecooking #bbq #lowandslow #grilling #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #recipes #cookingtips #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #filipinobbq #filipinofood #grilledpork #smokedmeat #knorr #islanderbbq #islander #porkbbq",
    "description":  "Filipino Pork BBQ The marinade is packed with flavor and the smokiness from",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs. pork belly or pork shoulder thinly sliced",
                                               "1/2 cup low sodium soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1/4 cup Banana Ketchup",
                                               "1 piece lemon or 6 pieces calamansi",
                                               "1/2 tsp ground black pepper",
                                               "2 tsp chicken bouillon",
                                               "4 cloves garlic crushed",
                                               "1/2 cup white sugar, add more as needed to make marinade slightly sweet",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight.",
                  "Set smoker to 160 and smoke for 30 minutes.",
                  "Increase heat to 375 and grill for another 20 minutes or until fully cooked.",
                  "Serve with steamed rice and a bowl of soy sauce with a squeeze of lemon juice for dipping.",
                  ""
              ]
},
{
    "id":  "this-miso-glazed-cod-salmon-recipe-has-so-much-flavor",
    "title":  "This Miso Glazed Cod \u0026 Salmon recipe has so much flavor.",
    "date":  "2022-03-21",
    "category":  "Seafood",
    "image":  "images/recipes/this-miso-glazed-cod-salmon-recipe-has-so-much-flavor.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "This Miso Glazed Cod \u0026 Salmon recipe has so much flavor. Fish marinated in a miso sauce giving sweet and buttery flavor. \n\nIngredients \u0026 Recipe\n* 4-6 Cod fillets or Salmon fillets\n* ½ cup mirin\n* ½ cup sake or white wine\n* 1 cup sugar\n* 1 cup white miso\n\n1. Heat a small pot under medium heat. \n2. Add Mirin and Sake into pot to burn off alcohol, about 1-2 minutes. \n3. Lower heat to low-medium and add sugar and miso into pot, stirring to dissolve the sugar. Cook for 5 minutes until smooth. \n4. Remove from heat and let cool completely.\n5. Wash and pat dry the fillets and place filets into a large Ziploc bag and pour the marinade over the fish. Reserve 1/2 cup of marinade to be used later. Marinate in the refrigerator overnight. \n6. Set oven to 450 degrees. \n7. Remove fillets from marinade and wipe off excess marinade. \n8. Place fillets on a non stick baking dish. \n9. Bake for 5-8 minutes. \n10. Brush reserved marinade on top of each fillet, then broil for 1-2 minutes, until the top is golden brown.\n11. Serve with steamed rice and favorite veggies. \n\n ————————————————————————\n#yummy #instagood #foodporn #savory #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #miso #misoglazed #cod #misoyakibutterfish #marinatedfish #japanesefood #salmonrecipe #mushrooms #bokchoy #salmon #bakednotfried",
    "description":  "This Miso Glazed Cod \u0026 Salmon recipe has so much flavor.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "* 4-6 Cod fillets or Salmon fillets",
                                               "* ½ cup mirin",
                                               "* ½ cup sake or white wine",
                                               "* 1 cup sugar",
                                               "* 1 cup white miso"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a small pot under medium heat.",
                  "Add Mirin and Sake into pot to burn off alcohol, about 1-2 minutes.",
                  "Lower heat to low-medium and add sugar and miso into pot, stirring to dissolve the sugar. Cook for 5 minutes until smooth.",
                  "Remove from heat and let cool completely.",
                  "Wash and pat dry the fillets and place filets into a large Ziploc bag and pour the marinade over the fish. Reserve 1/2 cup of marinade to be used later. Marinate in the refrigerator overnight.",
                  "Set oven to 450 degrees.",
                  "Remove fillets from marinade and wipe off excess marinade.",
                  "Place fillets on a non stick baking dish.",
                  "Bake for 5-8 minutes.",
                  "Brush reserved marinade on top of each fillet, then broil for 1-2 minutes, until the top is golden brown.",
                  "Serve with steamed rice and favorite veggies.",
                  ""
              ]
},
{
    "id":  "easy-mushroom-risotto-recipe",
    "title":  "Easy Mushroom Risotto Recipe",
    "date":  "2022-03-11",
    "category":  "Other",
    "image":  "images/recipes/easy-mushroom-risotto-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Easy Mushroom Risotto Recipe: 🍻\n\n6 cups chicken broth\n1 tbsp chicken bouillon \n2 tbsp olive oil, for mushrooms\n2 tbsp olive oil, for sauté shallots\n4 tbsp butter \n2 pounds cremini mushrooms\n2 shallots, diced \n1 .5 cups Arborio rice \n1/2 cup white wine \nSalt and pepper to taste\n2 stalks green onions, chopped\n1/3 cup freshly grated Parmesan cheese \n\nInstructions\n1. In a saucepan,heat the broth and bouillon over low heat. \n2. Heat olive oil in a large saucepan over medium-high heat. \n3. Add mushrooms and cook for 5 minutes. Remove mushrooms and set aside.\n4. Add olive oil to skillet, and stir in the shallots, cooking for 3-4 minutes. \n5. Add rice and mix together shallots. \n6. Add wine mixing until the wine is fully absorbed.\n7. Add 1 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes. \n8. Add in mushrooms, butter, green onions, and parmesan. \n9. Season with salt and pepper to taste.\n10. Serve immediately with your favorite protein. Enjoy 🍻\n\n#yummy #italianfood #foodporn #fresh #foodpics #homemadechef #homecooking #homecooks #sdcook #btcooks #foodlover #easyrecipes #chickenpiccata #risotto #boullion #capers #mushrooms #italian #italianfood #comfortfood #shrooms #mushroomrisotto",
    "description":  "Easy Mushroom Risotto Recipe",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 tbsp chicken bouillon",
                                               "2 tbsp olive oil, for mushrooms",
                                               "2 tbsp olive oil, for sauté shallots",
                                               "4 tbsp butter",
                                               "2 pounds cremini mushrooms",
                                               "2 shallots, diced",
                                               "5 cups Arborio rice",
                                               "1/2 cup white wine",
                                               "Salt and pepper to taste",
                                               "2 stalks green onions, chopped",
                                               "1/3 cup freshly grated Parmesan cheese"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a saucepan,heat the broth and bouillon over low heat.",
                  "Heat olive oil in a large saucepan over medium-high heat.",
                  "Add mushrooms and cook for 5 minutes. Remove mushrooms and set aside.",
                  "Add olive oil to skillet, and stir in the shallots, cooking for 3-4 minutes.",
                  "Add rice and mix together shallots.",
                  "Add wine mixing until the wine is fully absorbed.",
                  "Add 1 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes.",
                  "Add in mushrooms, butter, green onions, and parmesan.",
                  "Season with salt and pepper to taste.",
                  "Serve immediately with your favorite protein. Enjoy 🍻"
              ]
},
{
    "id":  "beef-with-broccoli-recipe-below-that-the-entire-family-loves",
    "title":  "Beef with Broccoli recipe below that the entire family loves.",
    "date":  "2022-03-04",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/beef-with-broccoli-recipe-below-that-the-entire-family-loves.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef with Broccoli recipe below that the entire family loves. Tender cuts of flank steaks with crunchy broccoli and a thick savory sauce 🍻. \n\nIngredients \u0026 Recipe:\n3 cloves garlic, minced\n1 knob ginger, minced\n1 stalk green onions, chopped\n1 lb Broccoli\n4 tbsp canola oil divided into 2\n\nBeef Marinade:\n1lb Flank Steak, sliced thin against grain\n1 tsp baking soda\n1 tbsp corn starch\n1 tbsp oyster sauce\n1 tbsp low sodium soy sauce\n1 tsp chicken bouillon \n1 tbsp cooking wine\n\nGravy Sauce:\n1 tbsp low sodium soy sauce\n1 tbsp dark soy sauce\n1 tbsp oyster sauce\n1/2 cup water\n1 tsp sugar\n1/2 tsp white pepper\n1 tsp sesame oil\n2 tbsp cornstarch\n\n1. Combine all marinade ingredients in a medium bowl and refrigerate for at least 30 minutes. \n2. Combine gravy sauce ingredients and set aside. \n3. With a large wok under high heat, heat 2 tbsp oil and cook beef until browned, about 1-2 minutes. \n4. Turn off heat and remove meat and set aside. \n5. Return wok and set to medium-high heat adding 2 tbsp of oil. \n6. Add garlic, ginger, and green onions and constantly stir for 30 seconds. \n7. Add meat back into wok and mix together. \n8. Add broccoli and stir in cooking for 1-2 minutes. \n9. Add gravy sauce mixture into wok and consistently mix to ensure an even coat. \n10. Taste to adjust the flavors and serve with a side of brown or white rice!!!\n\n ————————————————————————\n#yummy #instagood #foodporn #savory #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #beefwithbroccoli #chinesefood #stirfry #broccoli #wok #flanksteak #steak #sizzle #kidsfood #familyfood",
    "description":  "Beef with Broccoli recipe below that the entire family loves.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 cloves garlic, minced",
                                               "1 knob ginger, minced",
                                               "1 stalk green onions, chopped",
                                               "1 lb Broccoli",
                                               "4 tbsp canola oil divided into 2"
                                           ]
                             },
                             {
                                 "heading":  "Beef Marinade",
                                 "items":  [
                                               "1 tsp baking soda",
                                               "1 tbsp corn starch",
                                               "1 tbsp oyster sauce",
                                               "1 tbsp low sodium soy sauce",
                                               "1 tsp chicken bouillon",
                                               "1 tbsp cooking wine"
                                           ]
                             },
                             {
                                 "heading":  "Gravy Sauce",
                                 "items":  [
                                               "1 tbsp low sodium soy sauce",
                                               "1 tbsp dark soy sauce",
                                               "1 tbsp oyster sauce",
                                               "1/2 cup water",
                                               "1 tsp sugar",
                                               "1/2 tsp white pepper",
                                               "1 tsp sesame oil",
                                               "2 tbsp cornstarch"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all marinade ingredients in a medium bowl and refrigerate for at least 30 minutes.",
                  "Combine gravy sauce ingredients and set aside.",
                  "With a large wok under high heat, heat 2 tbsp oil and cook beef until browned, about 1-2 minutes.",
                  "Turn off heat and remove meat and set aside.",
                  "Return wok and set to medium-high heat adding 2 tbsp of oil.",
                  "Add garlic, ginger, and green onions and constantly stir for 30 seconds.",
                  "Add meat back into wok and mix together.",
                  "Add broccoli and stir in cooking for 1-2 minutes.",
                  "Add gravy sauce mixture into wok and consistently mix to ensure an even coat.",
                  "Taste to adjust the flavors and serve with a side of brown or white rice!!!",
                  ""
              ]
},
{
    "id":  "filipino-beef-steak-cuts-of-chuck-steaks-braised-with-calama",
    "title":  "Filipino Beef Steak, cuts of chuck steaks braised with calamansi or lemons,",
    "date":  "2022-03-03",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-beef-steak-cuts-of-chuck-steaks-braised-with-calama.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Beef Steak, cuts of chuck steaks braised with calamansi or lemons, soy sauce, onions, and garlic. All served with a side of steamed rice 🔥🔥🔥\n\nIngredients \u0026 Recipe:\n3 lbs Chuck Steaks, sliced 1/2in thick\n1/4 cup juiced Calamansi or Lemon \n1 head garlic, peeled and crushed\n1/2 cup low sodium soy sauce\n1/2 tsp onion powder\n1/2 tbsp Beef Bouillon \n1/2 tsp pepper\n2 tbsp Olive Oil\n1 cup water\nSalt for seasoning\n1 onion, peeled and sliced into rings\n\n1. Marinate sliced chuck steaks with calamansi or lemon juice, garlic, onion powder, beef bouillon, and soy sauce for 1-2 hours. \n2. In a pot under Medium heat, add water and entire contents of marinade. Cook for 45 minutes or until meat is tender. \n3. Strain liquid into a bowl and set aside. \n4. Heat pot under medium-high heat with oil. \n5. Add strained contents into pot and sear meat until a crust is formed on each side. About 4-5 minutes each side. \n6. Return liquid back into pot and add sliced onion rings. Season with salt as needed. \n7. Cover and cook for an additional 2-4 minutes to soften onions a bit. \n8. Serve with steamed rice. \n\n ————————————————————————\n#yummy #instagood #foodporn #savory #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #asianfood #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #beefsteak #bistek #chuckroast #filipinofood #savory #soysauce #braisedbeef #onions #rice #bouillon #knorr",
    "description":  "Filipino Beef Steak, cuts of chuck steaks braised with calamansi or lemons,",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs Chuck Steaks, sliced 1/2in thick",
                                               "1/4 cup juiced Calamansi or Lemon",
                                               "1 head garlic, peeled and crushed",
                                               "1/2 cup low sodium soy sauce",
                                               "1/2 tsp onion powder",
                                               "1/2 tbsp Beef Bouillon",
                                               "1/2 tsp pepper",
                                               "2 tbsp Olive Oil",
                                               "1 cup water",
                                               "Salt for seasoning",
                                               "1 onion, peeled and sliced into rings"
                                           ]
                             }
                         ],
    "steps":  [
                  "Marinate sliced chuck steaks with calamansi or lemon juice, garlic, onion powder, beef bouillon, and soy sauce for 1-2 hours.",
                  "In a pot under Medium heat, add water and entire contents of marinade. Cook for 45 minutes or until meat is tender.",
                  "Strain liquid into a bowl and set aside.",
                  "Heat pot under medium-high heat with oil.",
                  "Add strained contents into pot and sear meat until a crust is formed on each side. About 4-5 minutes each side.",
                  "Return liquid back into pot and add sliced onion rings. Season with salt as needed.",
                  "Cover and cook for an additional 2-4 minutes to soften onions a bit.",
                  "Serve with steamed rice.",
                  ""
              ]
},
{
    "id":  "cellentani-all-amatriciana-recipe",
    "title":  "Cellentani all’Amatriciana Recipe",
    "date":  "2022-02-23",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/cellentani-all-amatriciana-recipe.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Cellentani all’Amatriciana Recipe 🍻\u2028\nIngredients\u2028\n1 box of Barilla Cellentani Pasta\u20284 ounces Pancetta or Bacon, diced \u2028½ cup freshly-grated Pecorino Romano\u20281 14oz canned San Marzano tomatoes\u2028¼ cup tomato paste\u20281 medium red onion, cut lengthwise into small slices\n4 Garlic cloves, minced\u20281/3 cup chopped fresh Italian parsley\u2028¼ cup extra virgin olive oil\u20282 teaspoons red pepper flakes\u2028Salt, to taste\n\n1. In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.\n2. Combine the olive oil, Pancetta or Bacon, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.\n3. Add garlic and cook for 2 minutes, making sure not to burn. \n4. Stir in the tomato paste and red pepper flakes, cook for about 1 minute. \n5. Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce. \n6. Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture. \n7. Stir in the cheese and parsley. \n8. Serve immediately with side of grated Pecorino Romano and parsley. \n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #italianfood #allamatriciana #penne #barillalove #marzanotomatoes #parsley #pecorinoromano #cheese #cellentani",
    "description":  "Cellentani all’Amatriciana Recipe",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 box of Barilla Cellentani Pasta 4 ounces Pancetta or Bacon, diced ½ cup freshly-grated Pecorino Romano 1 14oz canned San Marzano tomatoes ¼ cup tomato paste 1 medium red onion, cut lengthwise into small slices",
                                               "4 Garlic cloves, minced 1/3 cup chopped fresh Italian parsley ¼ cup extra virgin olive oil 2 teaspoons red pepper flakes Salt, to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot cook pasta noodles according to packaging instructions. Once cooked, reserving about 1/4 cup of the pasta water.",
                  "Combine the olive oil, Pancetta or Bacon, and onion in another large pot. Cook over medium-high heat, until the Pancetta is lightly browned.",
                  "Add garlic and cook for 2 minutes, making sure not to burn.",
                  "Stir in the tomato paste and red pepper flakes, cook for about 1 minute.",
                  "Add canned San Marzano tomatoes and mix well, smashing tomatoes into a sauce.",
                  "Add the cooked pasta and 1/4 cup of the reserved pasta water to the Pancetta mixture.",
                  "Stir in the cheese and parsley.",
                  "Serve immediately with side of grated Pecorino Romano and parsley.",
                  ""
              ]
},
{
    "id":  "air-fried-chickpeas-with-a-ginger-and-garlic-dressing-that-c",
    "title":  "Air fried chickpeas with a ginger and garlic dressing that can be used on any",
    "date":  "2022-02-21",
    "category":  "Other",
    "image":  "images/recipes/air-fried-chickpeas-with-a-ginger-and-garlic-dressing-that-c.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Air fried chickpeas with a ginger and garlic dressing that can be used on any mixed green salad served along side Asian Inspired dishes. \n\nGinger \u0026 Garlic Tahini Dressing and Salad\n1/3 cup Tahini\n1 Tbsp fresh ginger, finely minced\n2 cloves garlic, finely minced\n1 Tbsp low sodium soy sauce\n1 Tbsp rice vinegar\n1 tsp sesame oil\n1 tsp sugar\n4 cups mixed greens\n\n1. Mix all ingredients together in a small bowl. \n2. Spread over mixed greens or store in an air tight container in a refrigerator for up to a week. \n\nAir fried Chickpeas\n1 15oz can Garbanzo Beans\n1/4 tsp salt\n1/4 tsp garlic powder\n1/4 tsp onion powder\n1/4 tsp chili powder\n1 tbsp avocado oil\n\n1. Drain, rinse, and dry chickpeas. \n2. Place chickpeas in a bowl and add all ingredients mixing well. \n3. Set air fryer to 390 degrees and cook for 10-12 minutes. \n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipes #tahinidressing #ginger #garlic #asianfusion #tahinidressing #airfried #airfriedchickpeas #cherrytomatoes #asiansalad #colorful #healthy",
    "description":  "Ginger \u0026 Garlic Tahini Dressing and Salad",
    "likes":  44,
    "intro":  [
                  "Ginger \u0026 Garlic Tahini Dressing and Salad"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 Tbsp fresh ginger, finely minced",
                                               "2 cloves garlic, finely minced",
                                               "1 Tbsp low sodium soy sauce",
                                               "1 Tbsp rice vinegar",
                                               "1 tsp sesame oil",
                                               "1 tsp sugar",
                                               "4 cups mixed greens"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients together in a small bowl.",
                  "Spread over mixed greens or store in an air tight container in a refrigerator for up to a week.",
                  "Air fried Chickpeas",
                  "1 15oz can Garbanzo Beans",
                  "1/4 tsp salt",
                  "1/4 tsp garlic powder",
                  "1/4 tsp onion powder",
                  "1/4 tsp chili powder",
                  "1 tbsp avocado oil",
                  "Drain, rinse, and dry chickpeas.",
                  "Place chickpeas in a bowl and add all ingredients mixing well.",
                  "Set air fryer to 390 degrees and cook for 10-12 minutes.",
                  ""
              ]
},
{
    "id":  "i-had-many-people-hit-me-up-for-the-recipe-on-the-shrimp-cev",
    "title":  "I had many people hit me up for the recipe on the shrimp ceviche that I made",
    "date":  "2022-02-15",
    "category":  "Seafood",
    "image":  "images/recipes/i-had-many-people-hit-me-up-for-the-recipe-on-the-shrimp-cev.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "I had many people hit me up for the recipe on the shrimp ceviche that I made on Food Network 𝙂𝙪𝙮’𝙨 𝙂𝙧𝙤𝙘𝙚𝙧𝙮 𝙂𝙖𝙢𝙚𝙨. The secret to making this so tasty is adding that bouillon cube, which adds umami to the dish. Quick poach of the shrimp served up with fresh ingredients and a side of smoked Chipotle, Enjoy! 🍻 \n\nIngredients \u0026 Recipe below 👊\n\nShrimp Ceviche\n2 lbs frozen shrimp, poached for 1 minute in boiling water \n1 English cucumber, chopped \n1 small red onion, chopped \n3 tomatoes, chopped \n1 cube chicken bouillon \n1 jalepeno, chopped\n1 avocado (optional), chopped\n6-8 limes\n1/2 tbsp Salt \n\n1. Add ingredients in a large bowl and lightly mix everything together. I like to start off with 6 limes and add more if you like it more sour. \n2. Season with additional salt as needed. \n3. Refrigerate for at least an hour. \n4. Serve with your favorite tortilla chips. \n\nChipotle Crema\n1/2 Sour cream 1/2 mayonnaise \n1 lime, juiced\n1 tsp Salt\n1 can chipotle in adobo\n\n1. Add 4 pieces of chipotle into a blender. \n2. Add all remaining ingredients and blend until smooth.\n3. Taste and add salt as needed. \n ————————————————————————\n#yummy #instagood #foodporn #savory #fresh #tasty #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #ceviche #shrimp #chipotlecrema #tortillas #bajastyle #fresh #bouillon #ggg #foodnetwork #knorr",
    "description":  "I had many people hit me up for the recipe on the shrimp ceviche that I made",
    "likes":  48,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Shrimp Ceviche",
                                               "2 lbs frozen shrimp, poached for 1 minute in boiling water",
                                               "1 English cucumber, chopped",
                                               "1 small red onion, chopped",
                                               "3 tomatoes, chopped",
                                               "1 cube chicken bouillon",
                                               "1 jalepeno, chopped",
                                               "1 avocado (optional), chopped",
                                               "6-8 limes",
                                               "1/2 tbsp Salt"
                                           ]
                             }
                         ],
    "steps":  [
                  "Add ingredients in a large bowl and lightly mix everything together. I like to start off with 6 limes and add more if you like it more sour.",
                  "Season with additional salt as needed.",
                  "Refrigerate for at least an hour.",
                  "Serve with your favorite tortilla chips.",
                  "Chipotle Crema",
                  "1/2 Sour cream 1/2 mayonnaise",
                  "1 lime, juiced",
                  "1 tsp Salt",
                  "1 can chipotle in adobo",
                  "Add 4 pieces of chipotle into a blender.",
                  "Add all remaining ingredients and blend until smooth.",
                  "Taste and add salt as needed.",
                  ""
              ]
},
{
    "id":  "filipino-vietnamese-lumpia-s",
    "title":  "Filipino/Vietnamese Lumpia’s!!!!",
    "date":  "2022-02-11",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-vietnamese-lumpia-s.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino/Vietnamese Lumpia’s!!!! This recipe is a fusion of Two types of egg rolls from two different countries. Combining key ingredients that make both so good into one. Perfect Game Day bites 🍻\n\nIngredients \u0026 Recipe\n\n2 lbs ground pork\n4 small bundles of bean thread noodles\n2 cups woodear or shitake mushrooms, finely chopped\n2 large carrots, peeled \u0026 shredded\n1/2 onion, finely chopped\n2 cloves garlic, minced\n1 tsp garlic powder\n1 tsp ground pepper\n2 Tbsp Fish Sauce\n2 eggs\n50 Egg roll wrappers\nCanola or Vegetable oil for frying\n\n1. Cook bean thread noodles in a pot of boiling water for 5 minutes or until soft. Drain and chop noodles so that they are in smaller separate pieces. Set aside. \n2. In a large bowl add pork, bean thread, mushrooms, carrots, onions, garlic, 1 egg, fish sauce, and seasoning. Mixing well to incorporate all ingredients together. \n3. In a small bowl whisk 1 egg to use as a sealer for egg rolls. Set aside. \n4. Take 2 tbsp of pork mixture and place even layer on bottom/center of egg roll wrapper and roll, using whisked eggs as a seal at the end of each egg roll wrapper. \n5. Fry in deep fryer at 325 degrees until golden brown. \n6. Serve with a side of your favorite sweet and sour dipping sauce. \n\n ————————————————————————\n#yummy #instagood #foodporn #savory #fresh #tasty #delicious #gamedayfood #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #groundpork #easyrecipes #filipinofood #asianfusion #lumpia #eggrolls #vietnamesefood #friedeggrolls #mushrooms #beanthread #international #pinoyfood",
    "description":  "Filipino/Vietnamese Lumpia’s!!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs ground pork",
                                               "4 small bundles of bean thread noodles",
                                               "2 cups woodear or shitake mushrooms, finely chopped",
                                               "2 large carrots, peeled \u0026 shredded",
                                               "1/2 onion, finely chopped",
                                               "2 cloves garlic, minced",
                                               "1 tsp garlic powder",
                                               "1 tsp ground pepper",
                                               "2 Tbsp Fish Sauce",
                                               "2 eggs",
                                               "50 Egg roll wrappers"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cook bean thread noodles in a pot of boiling water for 5 minutes or until soft. Drain and chop noodles so that they are in smaller separate pieces. Set aside.",
                  "In a large bowl add pork, bean thread, mushrooms, carrots, onions, garlic, 1 egg, fish sauce, and seasoning. Mixing well to incorporate all ingredients together.",
                  "In a small bowl whisk 1 egg to use as a sealer for egg rolls. Set aside.",
                  "Take 2 tbsp of pork mixture and place even layer on bottom/center of egg roll wrapper and roll, using whisked eggs as a seal at the end of each egg roll wrapper.",
                  "Fry in deep fryer at 325 degrees until golden brown.",
                  "Serve with a side of your favorite sweet and sour dipping sauce.",
                  ""
              ]
},
{
    "id":  "sukhisindian-sukhi-s-chicken-tikka-masala-from-costco-was-a",
    "title":  "@sukhisindian Sukhi’s Chicken Tikka Masala from @costco was a quick meal to",
    "date":  "2022-02-06",
    "category":  "Poultry",
    "image":  "images/recipes/sukhisindian-sukhi-s-chicken-tikka-masala-from-costco-was-a.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "@sukhisindian Sukhi’s Chicken Tikka Masala from @costco was a quick meal to serve for the family. Served with Coconut Cilantro Basmati rice and a side of Ginger Garlic Tahini salad. This semi homemade meal was all done under 30 minutes. \n\nCoconut Rice w/ Cilantro\n2 cups uncooked basmati rice\n1.5 cups coconut milk\n1 cup water\n1/2 tbsp @knorr chicken bouillon \n1/4 cup cilantro chopped\nsalt to taste\n\n1. Rinse rice until rice runs clear \n2. Add all ingredients into a rice cooker\n3. Set rice cooker to cook \n4. After rice is done cooking, let sit for an extra 5-10 minutes before serving. \n\nGinger \u0026 Garlic Tahini Dressing and Salad\n1/3 cup Tahini\n1 Tbsp fresh ginger, finely minced\n2 cloves garlic, finely minced\n1 Tbsp low sodium soy sauce\n1 Tbsp rice vinegar\n1 tsp sesame oil\n1 tsp sugar\n4 cups mixed greens\n\n1. Mix all ingredients together in a small bowl. \n2. Spread over mixed greens or store in an air tight container in a refrigerator for up to a week. \n\nAir fried Chickpeas\n1 15oz can Garbanzo Beans\n1/4 tsp salt\n1/4 tsp garlic powder\n1/4 tsp onion powder\n1/4 tsp chili powder\n1 tbsp avocado oil\n\n1. Drain, rinse, and dry chickpeas. \n2. Place chickpeas in a bowl and add all ingredients mixing well. \n3. Set air fryer to 390 degrees and cook for 10-12 minutes. \n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #semihomemade #easyrecipes #tikkamasala #basmatirice #tahinidressing #ginger #garlic #asianfusion #chicken #sukhisindian #costco",
    "description":  "Coconut Rice w/ Cilantro",
    "likes":  46,
    "intro":  [
                  "Coconut Rice w/ Cilantro"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "5 cups coconut milk",
                                               "1 cup water",
                                               "1/2 tbsp @knorr chicken bouillon",
                                               "1/4 cup cilantro chopped",
                                               "salt to taste"
                                           ]
                             }
                         ],
    "steps":  [
                  "Rinse rice until rice runs clear",
                  "Add all ingredients into a rice cooker",
                  "Set rice cooker to cook",
                  "After rice is done cooking, let sit for an extra 5-10 minutes before serving.",
                  "Ginger \u0026 Garlic Tahini Dressing and Salad",
                  "1/3 cup Tahini",
                  "1 Tbsp fresh ginger, finely minced",
                  "2 cloves garlic, finely minced",
                  "1 Tbsp low sodium soy sauce",
                  "1 Tbsp rice vinegar",
                  "1 tsp sesame oil",
                  "1 tsp sugar",
                  "4 cups mixed greens",
                  "Mix all ingredients together in a small bowl.",
                  "Spread over mixed greens or store in an air tight container in a refrigerator for up to a week.",
                  "Air fried Chickpeas",
                  "1 15oz can Garbanzo Beans",
                  "1/4 tsp salt",
                  "1/4 tsp garlic powder",
                  "1/4 tsp onion powder",
                  "1/4 tsp chili powder",
                  "1 tbsp avocado oil",
                  "Drain, rinse, and dry chickpeas.",
                  "Place chickpeas in a bowl and add all ingredients mixing well.",
                  "Set air fryer to 390 degrees and cook for 10-12 minutes.",
                  ""
              ]
},
{
    "id":  "easy-open-faced-prosciutto-and-egg-sandwich",
    "title":  "Easy Open-Faced Prosciutto and Egg Sandwich.",
    "date":  "2022-02-01",
    "category":  "Pork",
    "image":  "images/recipes/easy-open-faced-prosciutto-and-egg-sandwich.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Easy Open-Faced Prosciutto and Egg Sandwich. Lightly grilled whole grain bread, garlic mayonnaise, mixed greens, tomatoes, prosciutto, and fried egg seasoned with fresh ground pepper. \n\nIngredients \u0026 Recipe\n\nGarlic Mayo Sauce\n1/2 cup mayonnaise \n1 garlic clove, minced\n1/4 tsp fresh ground pepper\n\nGarnish\n1 large tomato, sliced\n4 Eggs\n4 slices of whole grain bread\n2 tbsp Olive oil\n8 Thinly sliced prosciutto \nMixed greens or Arugula \nFresh ground pepper\n\n1. Place all Garlic Mayo Ingredients into a small bowl and mix well. Set aside \n2. Toast or grill slices of bread and set aside. \n3. In a large non stick pan heat olive oil over medium heat. \n4. Fry eggs to your liking, preferably sunny side up. \n5. Assemble your sandwich by spreading garlic mayo on bread, topping off with mixed greens, tomato slices, 2 slices of prosciutto, 1 egg, and season with fresh ground pepper. \n\n ————————————————————————\n#homecooking #yum #grilling #yummy #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #sandwhich #breakfast #prosciutto #eggs #breakfastsandwich #garlicmayo #toasted #boarshead",
    "description":  "Easy Open-Faced Prosciutto and Egg Sandwich.",
    "likes":  56,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Garlic Mayo Sauce",
                                               "1/2 cup mayonnaise",
                                               "1 garlic clove, minced",
                                               "1/4 tsp fresh ground pepper",
                                               "Garnish",
                                               "1 large tomato, sliced",
                                               "4 Eggs",
                                               "4 slices of whole grain bread",
                                               "2 tbsp Olive oil",
                                               "8 Thinly sliced prosciutto"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place all Garlic Mayo Ingredients into a small bowl and mix well. Set aside",
                  "Toast or grill slices of bread and set aside.",
                  "In a large non stick pan heat olive oil over medium heat.",
                  "Fry eggs to your liking, preferably sunny side up.",
                  "Assemble your sandwich by spreading garlic mayo on bread, topping off with mixed greens, tomato slices, 2 slices of prosciutto, 1 egg, and season with fresh ground pepper.",
                  ""
              ]
},
{
    "id":  "fresh-spring-rolls-with-salmon-mixed-greens-jalape-os-green",
    "title":  "Fresh spring rolls with salmon, mixed greens, jalapeños, green onions,",
    "date":  "2022-01-31",
    "category":  "Seafood",
    "image":  "images/recipes/fresh-spring-rolls-with-salmon-mixed-greens-jalape-os-green.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Fresh spring rolls with salmon, mixed greens, jalapeños, green onions, cilantro, and avocado. All these fresh ingredients rolled up in rice paper for a light lunch or dinner meal. If you don’t mind, fry them up for 3-4 minutes for crispy rolls. \n\nIngredients \u0026 Recipe\n\nSalmon rolls \nThree Ladies Rice Paper\n2 Salmon fillets, sliced 1/2” thick\nCilantro, separated\nJalapeño, sliced \nGreen onions, sliced into 2”\nMixed greens\nAvocados, sliced\n2 tbsp Olive oil \nSalt and pepper \n\n1. Slice salmon fillets into 1/2 slices and lightly seasoned with salt and pepper. \n2. Heat olive oil on a pan under medium heat. \n3. Add salmon slices and cook for 3-4 minutes on each side until browned. Set aside and let cool, about 5-10 minutes. \n4. In large plate or large shallow dish, add warm water. This will be used to dip the rice paper to assemble the rolls. \n5. Dip rice paper into water and soak for 10 seconds and place on a cutting board. \n6. Add salmon, avocado, jalapeños, green onions, cilantro, and small amount of mixed greens on top of rice paper. Roll and set aside. \n7. Serve with dipping sauce sauce. \n\nDipping sauce\nShallots, minced\nCilantro, chopped\n1 clove garlic, minced\n2 tbsp soy sauce\n1 tbsp vinegar\n1/2 tbsp brown sugar\n1/2 tsp pepper\n1 tbsp water\n\n1. Combine all ingredients in a bowl and serve with spring rolls. \n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #worldspinoyhomechefs #springrolls #fresh #salmonrolls #cilantro #mixedgreens #rolls #ricepaper #salad #dippingsauce",
    "description":  "Fresh spring rolls with salmon, mixed greens, jalapeños, green onions,",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Salmon rolls",
                                               "Three Ladies Rice Paper",
                                               "2 Salmon fillets, sliced 1/2” thick",
                                               "Cilantro, separated",
                                               "Jalapeño, sliced",
                                               "Green onions, sliced into 2”"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mixed greens",
                  "Avocados, sliced",
                  "2 tbsp Olive oil",
                  "Salt and pepper",
                  "Slice salmon fillets into 1/2 slices and lightly seasoned with salt and pepper.",
                  "Heat olive oil on a pan under medium heat.",
                  "Add salmon slices and cook for 3-4 minutes on each side until browned. Set aside and let cool, about 5-10 minutes.",
                  "In large plate or large shallow dish, add warm water. This will be used to dip the rice paper to assemble the rolls.",
                  "Dip rice paper into water and soak for 10 seconds and place on a cutting board.",
                  "Add salmon, avocado, jalapeños, green onions, cilantro, and small amount of mixed greens on top of rice paper. Roll and set aside.",
                  "Serve with dipping sauce sauce.",
                  "Dipping sauce",
                  "Shallots, minced",
                  "Cilantro, chopped",
                  "1 clove garlic, minced",
                  "2 tbsp soy sauce",
                  "1 tbsp vinegar",
                  "1/2 tbsp brown sugar",
                  "1/2 tsp pepper",
                  "1 tbsp water",
                  "Combine all ingredients in a bowl and serve with spring rolls.",
                  ""
              ]
},
{
    "id":  "chicken-piccata-w-mushroom-risotto",
    "title":  "Chicken Piccata w/ Mushroom Risotto.",
    "date":  "2022-01-26",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-piccata-w-mushroom-risotto.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Piccata w/ Mushroom Risotto. This is a great combination and must try for chicken and rice lovers. \n \nPiccata \n2 Boneless and skinless chicken breasts, split in half\nsalt and pepper to taste\n1 cup all purpose flour\n2 Tbsp Butter\n2 Tbsp Olive Oil\n1/2 cup white wine\n1 cup chicken broth\n1 Lemon juiced\n1/2 cup Heavy Cream\n1/3 cup capers\n\nInstructions\n1. Heat butter and oil in a large skillet over medium high heat. \n2. Season chicken with salt and pepper on each side and dredge in the flour.\n3. Put the chicken breasts in the skillet and cook for about 3-4 minutes on each side. Remove from the skillet and set aside on a plate.\n4. Keep all chicken bits in the pan and add wine. Cook for 3 minutes under medium heat. \n5. Add broth, lemon juice, heavy cream, and capers. Cook for 5 minutes under medium heat. \n6. Season with salt and pepper as needed.\n7. Serve the chicken with Risotto and spoon the sauce over chicken.\n\nRisotto \n6 cups chicken broth\n1 tbsp chicken bouillon \n2 tbsp olive oil, for mushrooms\n2 tbsp olive oil, for sauté shallots\n4 tbsp butter \n2 pounds cremini mushrooms\n2 shallots, diced \n1 .5 cups Arborio rice \n1/2 cup white wine \nSalt and pepper to taste\n2 stalks green onions, chopped\n1/3 cup freshly grated Parmesan cheese \n\nInstructions\n1. In a saucepan,heat the broth and bouillon over low heat. \n2. Heat olive oil in a large saucepan over medium-high heat. \n3. Add mushrooms and cook for 5 minutes. Remove mushrooms and set aside.\n4. Add olive oil to skillet, and stir in the shallots, cooking for 3-4 minutes. \n5. Add rice and mix together shallots. \n6. Add wine mixing until the wine is fully absorbed.\n7. Add 1 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes. \n8. Add in mushrooms, butter, green onions, and parmesan. \n9. Season with salt and pepper to taste.\n10. Serve immediately with chicken piccata. Enjoy 🍻\n\n#yummy #italianfood #foodporn #fresh #foodpics #homemadechef #homecooking #homecooks #sdcook #btcooks #foodlover #easyrecipes #chickenpiccata #risotto #boullion #capers #mushrooms",
    "description":  "Piccata",
    "likes":  0,
    "intro":  [
                  "Piccata"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "salt and pepper to taste",
                                               "1 cup all purpose flour",
                                               "2 Tbsp Butter",
                                               "2 Tbsp Olive Oil",
                                               "1/2 cup white wine",
                                               "1 cup chicken broth",
                                               "1 Lemon juiced",
                                               "1/2 cup Heavy Cream",
                                               "1/3 cup capers"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat butter and oil in a large skillet over medium high heat.",
                  "Season chicken with salt and pepper on each side and dredge in the flour.",
                  "Put the chicken breasts in the skillet and cook for about 3-4 minutes on each side. Remove from the skillet and set aside on a plate.",
                  "Keep all chicken bits in the pan and add wine. Cook for 3 minutes under medium heat.",
                  "Add broth, lemon juice, heavy cream, and capers. Cook for 5 minutes under medium heat.",
                  "Season with salt and pepper as needed.",
                  "Serve the chicken with Risotto and spoon the sauce over chicken.",
                  "Risotto",
                  "6 cups chicken broth",
                  "1 tbsp chicken bouillon",
                  "2 tbsp olive oil, for mushrooms",
                  "2 tbsp olive oil, for sauté shallots",
                  "4 tbsp butter",
                  "2 pounds cremini mushrooms",
                  "2 shallots, diced",
                  "5 cups Arborio rice",
                  "1/2 cup white wine",
                  "Salt and pepper to taste",
                  "2 stalks green onions, chopped",
                  "1/3 cup freshly grated Parmesan cheese",
                  "In a saucepan,heat the broth and bouillon over low heat.",
                  "Heat olive oil in a large saucepan over medium-high heat.",
                  "Add mushrooms and cook for 5 minutes. Remove mushrooms and set aside.",
                  "Add olive oil to skillet, and stir in the shallots, cooking for 3-4 minutes.",
                  "Add rice and mix together shallots.",
                  "Add wine mixing until the wine is fully absorbed.",
                  "Add 1 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes.",
                  "Add in mushrooms, butter, green onions, and parmesan.",
                  "Season with salt and pepper to taste.",
                  "Serve immediately with chicken piccata. Enjoy 🍻"
              ]
},
{
    "id":  "filipino-menudo-pork-stew-made-with-fresh-tomatoes-green-pea",
    "title":  "Filipino Menudo, pork stew made with fresh tomatoes, green peas, carrots, and",
    "date":  "2022-01-25",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-menudo-pork-stew-made-with-fresh-tomatoes-green-pea.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Menudo, pork stew made with fresh tomatoes, green peas, carrots, and garbanzo beans. All this served with steamed rice, making it a great comfort dish. \n\nIngredients\n3lb pork shoulder, cut in small cubes\n4oz liverwurst, cut in small cubes (optional) \n4 hot dogs cut into cubes\n1 large carrot, cut into small cubes\n1 cup green peas\n1 red bell pepper, cut in small cubes\n1 medium sized onion, diced\n2 cups water \n1 tbsp chicken bouillon \n6oz tomato paste\n3 large red tomatoes, diced\n6 cloves garlic, minced\n2 pcs bay leaves\n2 tbsp fish sauce\n2 tbsp olive oil\n1 tbsp cane sugar\nSalt and pepper\n\nInstructions\n1. In at medium pot, sauté garlic and onion in olive oil under medium-high heat. \n2. Add pork and season with salt and pepper while browning on all sides. \n3. Add fish sauce and cook for 5 minutes. \n4. Add water, chicken bouillon, and bay leaves. Bring to a boil and simmer for 10 minutes with lid on. \n5. Add garbanzo beans, carrots, liverwurst, hot dogs, red bell peppers, tomatoes, and tomato paste. Simmer for 15 minutes in medium heat with lid on, stirring occasionally. \n6. Add sugar and green peas then simmer for 10 more minutes.\n7. Add additional salt and pepper if needed. \n8. Serve hot with a side of steamed rice. \n\n ————————————————————————\n#yummy #instagood #foodporn #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipes #pinoyfood #filipinomenudo #menudo #porkstew #fishsauce #garbanzobeans #hotdogs #filipinofood #islanderfood #asianfood #stew #rice",
    "description":  "Filipino Menudo, pork stew made with fresh tomatoes, green peas, carrots, and",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3lb pork shoulder, cut in small cubes",
                                               "4 hot dogs cut into cubes",
                                               "1 large carrot, cut into small cubes",
                                               "1 cup green peas",
                                               "1 red bell pepper, cut in small cubes",
                                               "1 medium sized onion, diced",
                                               "2 cups water",
                                               "1 tbsp chicken bouillon",
                                               "6oz tomato paste",
                                               "3 large red tomatoes, diced",
                                               "6 cloves garlic, minced",
                                               "2 pcs bay leaves",
                                               "2 tbsp fish sauce",
                                               "2 tbsp olive oil",
                                               "1 tbsp cane sugar"
                                           ]
                             }
                         ],
    "steps":  [
                  "In at medium pot, sauté garlic and onion in olive oil under medium-high heat.",
                  "Add pork and season with salt and pepper while browning on all sides.",
                  "Add fish sauce and cook for 5 minutes.",
                  "Add water, chicken bouillon, and bay leaves. Bring to a boil and simmer for 10 minutes with lid on.",
                  "Add garbanzo beans, carrots, liverwurst, hot dogs, red bell peppers, tomatoes, and tomato paste. Simmer for 15 minutes in medium heat with lid on, stirring occasionally.",
                  "Add sugar and green peas then simmer for 10 more minutes.",
                  "Add additional salt and pepper if needed.",
                  "Serve hot with a side of steamed rice.",
                  ""
              ]
},
{
    "id":  "simple-eggplant-parmigiana-dish",
    "title":  "Simple Eggplant Parmigiana dish.",
    "date":  "2022-01-18",
    "category":  "Other",
    "image":  "images/recipes/simple-eggplant-parmigiana-dish.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Simple Eggplant Parmigiana dish. Breaded eggplants smothered with tomato sauce and melted cheese. \n\nIngredients and Recipe:\n1 large eggplant, sliced 1/4 inch \n1 cup flour\n3 eggs, beaten\n1 cup bread crumbs, (garlic \u0026 herb)\n\n28 oz San Marzano tomatoes \n16 oz Italian Sausage, removed from casing \u20281/4 teaspoon crushed red pepper flakes\u20281/4 cup fresh parsley, chopped\n1 cup Mozzarella cheese\n1 cup Parmesan cheese\u20282 pack of pasta such as spaghetti or linguini, cooked based on package instructions\n\n1. Brown Italian sausage in a pot\n2. Add Tomato sauce and simmer for 1 hour.\n3. Add pepper flakes and chopped parsley and set sauce aside. \n4. Slice eggplant 1/4 inch thick. Dredge eggplant slices in flour, dip in egg, and coat with bread crumbs. \n5. Lightly fry slices in olive oil until golden brown. \n6. In a square casserole dish, spoon a thin layer of tomato sauce on the bottom. \n7. Place a single layer of fried eggplant slices, followed by a layer of sauce, mozzarella slices, and Parmesan. Do this for 2 layers. \n8. Bake in 350 F oven for 25 minutes or until the cheese is well melted and slightly brown.\n9. Serve with pasta noodles and garnish with extra parsley. Enjoy!\n\n ————————————————————————\n#yummy #instagood #foodporn #pasta #fresh #tasty #delish #delicious #barillalove #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #worldspinoyhomechefs #eggplant #italianfood #eggplantparmigiana #mozzarella #parmesan #sanmarzano #parsley #redsauce",
    "description":  "Simple Eggplant Parmigiana dish.",
    "likes":  55,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 large eggplant, sliced 1/4 inch",
                                               "1 cup flour",
                                               "3 eggs, beaten",
                                               "1 cup bread crumbs, (garlic \u0026 herb)",
                                               "28 oz San Marzano tomatoes",
                                               "16 oz Italian Sausage, removed from casing 1/4 teaspoon crushed red pepper flakes 1/4 cup fresh parsley, chopped",
                                               "1 cup Mozzarella cheese",
                                               "1 cup Parmesan cheese 2 pack of pasta such as spaghetti or linguini, cooked based on package instructions"
                                           ]
                             }
                         ],
    "steps":  [
                  "Brown Italian sausage in a pot",
                  "Add Tomato sauce and simmer for 1 hour.",
                  "Add pepper flakes and chopped parsley and set sauce aside.",
                  "Slice eggplant 1/4 inch thick. Dredge eggplant slices in flour, dip in egg, and coat with bread crumbs.",
                  "Lightly fry slices in olive oil until golden brown.",
                  "In a square casserole dish, spoon a thin layer of tomato sauce on the bottom.",
                  "Place a single layer of fried eggplant slices, followed by a layer of sauce, mozzarella slices, and Parmesan. Do this for 2 layers.",
                  "Bake in 350 F oven for 25 minutes or until the cheese is well melted and slightly brown.",
                  "Serve with pasta noodles and garnish with extra parsley. Enjoy!",
                  ""
              ]
},
{
    "id":  "chinese-chicken-and-broccoli",
    "title":  "Chinese Chicken and Broccoli.",
    "date":  "2022-01-08",
    "category":  "Poultry",
    "image":  "images/recipes/chinese-chicken-and-broccoli.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chinese Chicken and Broccoli. An easy recipe to serve up for the family and the kids will love it. \n\nIngredients \u0026 Recipe\n\nMarinade\n 1 lb Chicken breast, sliced thin\n1/4 tsp White pepper\n1/2 tsp Chicken Bouillon \n1 tbsp Shaoxing wine or white wine\n1 tbsp Sesame Oil\n1 tbsp Cornstarch\n\nSauce\n2 tbsp Low Sodium Soy Sauce\n1 tbsp Oyster Sauce\n1/4 tsp White pepper\n1 tbsp Sugar\n1/2 cup chicken broth\n1 tbsp cornstarch\n\nVegetables\n3 cups broccoli florets\n5 cloves garlic, chopped\n1 knob of ginger, minced\n\n6 tbsp Olive Oil\n\n1. Slice chicken breast into thin slices and combine the rest of the marinade ingredients into a bowl. Let sit for about 15-20 minutes. \n2. Combine your sauce ingredients and set aside.\n3. Heat a wok or pan on high heat, then add 4 tbsp Olive Oil. \n4. Add chicken in the oil and cook for about 5 minutes or until cooked. Remove and set aside in a bowl.\n5. On medium-high heat add additional olive oil (2 tbsp) to sauté garlic and ginger. Cook for 1 minute. \n6. Add the sauce mixture and it will thicken after just a few seconds. \n7. Add the chicken and broccoli into the wok combining mixture. Cook for 2-4 minutes on high heat while stirring. \n8. Serve with steamed rice. ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #chickenandbroccoli #chinesefoods #broccoli #chicken #wok #stirfry #easylunch #foodiesinternationalchat",
    "description":  "Chinese Chicken and Broccoli.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Marinade",
                                 "items":  [
                                               "1 lb Chicken breast, sliced thin",
                                               "1/4 tsp White pepper",
                                               "1/2 tsp Chicken Bouillon",
                                               "1 tbsp Shaoxing wine or white wine",
                                               "1 tbsp Sesame Oil",
                                               "1 tbsp Cornstarch"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tbsp Low Sodium Soy Sauce",
                                               "1 tbsp Oyster Sauce",
                                               "1/4 tsp White pepper",
                                               "1 tbsp Sugar",
                                               "1/2 cup chicken broth",
                                               "1 tbsp cornstarch",
                                               "Vegetables",
                                               "3 cups broccoli florets",
                                               "5 cloves garlic, chopped",
                                               "1 knob of ginger, minced",
                                               "6 tbsp Olive Oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Slice chicken breast into thin slices and combine the rest of the marinade ingredients into a bowl. Let sit for about 15-20 minutes.",
                  "Combine your sauce ingredients and set aside.",
                  "Heat a wok or pan on high heat, then add 4 tbsp Olive Oil.",
                  "Add chicken in the oil and cook for about 5 minutes or until cooked. Remove and set aside in a bowl.",
                  "On medium-high heat add additional olive oil (2 tbsp) to sauté garlic and ginger. Cook for 1 minute.",
                  "Add the sauce mixture and it will thicken after just a few seconds.",
                  "Add the chicken and broccoli into the wok combining mixture. Cook for 2-4 minutes on high heat while stirring.",
                  "Serve with steamed rice. ————————————————————————"
              ]
},
{
    "id":  "pan-seared-tilapia-loins-seasoned-with-traeger-s-summer-shan",
    "title":  "Pan seared Tilapia Loins, seasoned with Traeger’s Summer Shandy rub and topped",
    "date":  "2022-01-03",
    "category":  "Seafood",
    "image":  "images/recipes/pan-seared-tilapia-loins-seasoned-with-traeger-s-summer-shan.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Pan seared Tilapia Loins, seasoned with Traeger’s Summer Shandy rub and topped with a lemon caper cream sauce. Served over mashed potatoes and roasted mushrooms and broccoli. \n\nIngredients \u0026 Recipe\n\n1 cup white wine\n1/2 cup heavy cream\n1/2 lemon, juiced\n1 tsp Knorr Chicken Bouillon \n1 tbsp capers\nTraeger Summer Shandy Rub\n2 tbsp Extra Virgin Olive Oil\n\n1. Season Tilapia Loins with Traeger rub. \n2. Heat skillet on medium heat and add olive oil. \n3. Place Tilapia Loins on pan cooking until lightly brown, about 5 minutes on each side. \n4. Remove Tilapia from pan and set aside. \n5. Using the same pan, deglaze with white wine and lemon juice, cook for 2-3 minutes on Medium heat. \n6. Add bouillon and capers, cook for another minute then add heavy cream stirring and reducing to thicken. \n7. Serve tilapia with rice or mashed potatoes and your favorite veggies. Pour the sauce over the tilapia before serving. \n————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #traegergrills #summershandy #tilapia #mashedpotatoes #lemoncaper #creamy #mushrooms #broccoli #knorr",
    "description":  "Pan seared Tilapia Loins, seasoned with Traeger’s Summer Shandy rub and topped",
    "likes":  72,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 cup white wine",
                                               "1/2 cup heavy cream",
                                               "1/2 lemon, juiced",
                                               "1 tsp Knorr Chicken Bouillon",
                                               "1 tbsp capers",
                                               "Traeger Summer Shandy Rub",
                                               "2 tbsp Extra Virgin Olive Oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season Tilapia Loins with Traeger rub.",
                  "Heat skillet on medium heat and add olive oil.",
                  "Place Tilapia Loins on pan cooking until lightly brown, about 5 minutes on each side.",
                  "Remove Tilapia from pan and set aside.",
                  "Using the same pan, deglaze with white wine and lemon juice, cook for 2-3 minutes on Medium heat.",
                  "Add bouillon and capers, cook for another minute then add heavy cream stirring and reducing to thicken.",
                  "Serve tilapia with rice or mashed potatoes and your favorite veggies. Pour the sauce over the tilapia before serving.",
                  ""
              ]
},
{
    "id":  "filipino-spaghetti-that-is-sweet-and-savory",
    "title":  "Filipino Spaghetti that is sweet and savory.",
    "date":  "2022-01-01",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-spaghetti-that-is-sweet-and-savory.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Spaghetti that is sweet and savory. Made of ground beef, hot dogs, and banana ketchup. \n\nIngredients \u0026 Recipe\n\n1 packet of Barilla Spaghetti Noodles\n2 tbsp extra virgin olive oil \n1 pound ground Beef or Turkey \n4 hot dogs, sliced\n3 bay leaves\n1 small onion, diced\n4 garlic gloves, crushed and minced\n1 jar of Prego Mushroom Pasta Sauce\n4 tbsp Banana ketchup \n4 tbsp sugar, add more to make it sweeter\n1 tsp Beef Bouillon \n1 tsp ground pepper\n1/2 cup grated Mozzarella or Parmesan cheese \n\n1. Cook pasta based on package instructions or until al dente and set aside. \n2. In a medium pot, heat oil and add onions, sauté for about 3-4 minutes. \n3. Add garlic and sauté for an additional 2 minutes. \n4. Add ground beef or or Turkey, seasoning with bouillon and pepper. Cook until browned. \n5. Add hot dogs and cook for 3 minutes. \n6. Add pasta sauce, banana ketchup, bay leaves, and sugar. Cook for 10-15 on low/medium heat. Taste and add additional sugar for desired sweetness. \n7. Add cheese and cook for another 5 minutes or until cheese is fully melted. \n8. Combine the noodles and the sauce in a large pot or mixing bowl.\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #filipinofood #filipinospaghetti #bananaketchup #bayleaves #groudbeef #barillalove #pasta #groundturkey #pinoyfood",
    "description":  "Filipino Spaghetti that is sweet and savory.",
    "likes":  57,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 packet of Barilla Spaghetti Noodles",
                                               "2 tbsp extra virgin olive oil",
                                               "1 pound ground Beef or Turkey",
                                               "4 hot dogs, sliced",
                                               "3 bay leaves",
                                               "1 small onion, diced",
                                               "4 garlic gloves, crushed and minced",
                                               "1 jar of Prego Mushroom Pasta Sauce",
                                               "4 tbsp Banana ketchup",
                                               "4 tbsp sugar, add more to make it sweeter",
                                               "1 tsp Beef Bouillon",
                                               "1 tsp ground pepper",
                                               "1/2 cup grated Mozzarella or Parmesan cheese"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cook pasta based on package instructions or until al dente and set aside.",
                  "In a medium pot, heat oil and add onions, sauté for about 3-4 minutes.",
                  "Add garlic and sauté for an additional 2 minutes.",
                  "Add ground beef or or Turkey, seasoning with bouillon and pepper. Cook until browned.",
                  "Add hot dogs and cook for 3 minutes.",
                  "Add pasta sauce, banana ketchup, bay leaves, and sugar. Cook for 10-15 on low/medium heat. Taste and add additional sugar for desired sweetness.",
                  "Add cheese and cook for another 5 minutes or until cheese is fully melted.",
                  "Combine the noodles and the sauce in a large pot or mixing bowl.",
                  ""
              ]
},
{
    "id":  "filipino-roasted-lechon-recipe-using-a-salt-crust-to-fry-and",
    "title":  "Filipino roasted Lechon recipe using a salt crust to fry and crisp the skin.",
    "date":  "2021-12-23",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-roasted-lechon-recipe-using-a-salt-crust-to-fry-and.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino roasted Lechon recipe using a salt crust to fry and crisp the skin. Minimal prep time and no need to dry overnight, puncture holes, or score the skin. \n\nIngredients \u0026 Recipe\n\nMarinade . 3 pounds pork belly \n1 knob ginger, minced\n1 onion, chopped\n2 pieces of bay leaves\n1 Tbsp ground black pepper\n5 cloves garlic, crushed\n1 Tbsp sugar\n1 cup soy sauce\n1/2 cup of water\n\n1. Using a paper towel, pat the skin of the pork belly until it is completely dry. \n2. Mix marinade ingredients into a large cake pan that is big enough to hold the pork belly. \n3. Place pork belly into the pan, only the meat should touch the marinade and the skin stays completely dry. \n4. Refrigerate for 3-4 hours or overnight.\n5. Preheat oven to 350°F. \n6. Place a wire rack on top of roasting pan. Adding a cup of water in the pan for the drippings. \n7. Place the pork belly on the wire rack and spread 1 cup of salt evenly across the pork belly skin. \n8. Bake for about 40 minutes until meat looks cooked.\n9. Remove the pork from oven and discard the salt crust. Wipe off any excess salt left behind. \n10. Increase oven to 465°F and cook for another 30 minutes or until skin is crispy. \n11. Rest for a couple minutes and serve with Mang Tomas or Sawsawan (Soy Sauce/Vinegar sauce) ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #filipinofood #lechon #marinade #bakednotfried #bakedlechon #roasted #crispyskin #islanderfood #pinoyfood",
    "description":  "Filipino roasted Lechon recipe using a salt crust to fry and crisp the skin.",
    "likes":  47,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Marinade . 3 pounds pork belly",
                                               "1 knob ginger, minced",
                                               "1 onion, chopped",
                                               "2 pieces of bay leaves",
                                               "1 Tbsp ground black pepper",
                                               "5 cloves garlic, crushed",
                                               "1 Tbsp sugar",
                                               "1 cup soy sauce",
                                               "1/2 cup of water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Using a paper towel, pat the skin of the pork belly until it is completely dry.",
                  "Mix marinade ingredients into a large cake pan that is big enough to hold the pork belly.",
                  "Place pork belly into the pan, only the meat should touch the marinade and the skin stays completely dry.",
                  "Refrigerate for 3-4 hours or overnight.",
                  "Preheat oven to 350°F.",
                  "Place a wire rack on top of roasting pan. Adding a cup of water in the pan for the drippings.",
                  "Place the pork belly on the wire rack and spread 1 cup of salt evenly across the pork belly skin.",
                  "Bake for about 40 minutes until meat looks cooked.",
                  "Remove the pork from oven and discard the salt crust. Wipe off any excess salt left behind.",
                  "Increase oven to 465°F and cook for another 30 minutes or until skin is crispy.",
                  "Rest for a couple minutes and serve with Mang Tomas or Sawsawan (Soy Sauce/Vinegar sauce) ————————————————————————"
              ]
},
{
    "id":  "smoked-ribs-bacon-wrapped-asparagus-w-chicken-and-bacon-wrap",
    "title":  "Smoked Ribs, bacon wrapped asparagus w/ chicken, and bacon wrapped chicken all",
    "date":  "2021-12-13",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-ribs-bacon-wrapped-asparagus-w-chicken-and-bacon-wrap.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Ribs, bacon wrapped asparagus w/ chicken, and bacon wrapped chicken all season with house rub and bbq sauce. 🔥🔥🔥\n\nPork Rub Recipe\n\n1 cup brown sugar\n3 tbsp Salt\n1/4 cup Smoked Paprika\n3 tsp Ground pepper\n1 tsp Chipotle pepper\n2 tsp Garlic powder\n2 tsp Onion powder\n\n ————————————————————————\n#traegergrills #homecooking #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #traeger #smokedribs #baconwrapped #asparagus #houserub #porkrub",
    "description":  "Pork Rub Recipe",
    "likes":  0,
    "intro":  [
                  "Pork Rub Recipe"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 tbsp Salt",
                                               "1/4 cup Smoked Paprika",
                                               "3 tsp Ground pepper",
                                               "1 tsp Chipotle pepper",
                                               "2 tsp Garlic powder",
                                               "2 tsp Onion powder"
                                           ]
                             }
                         ],
    "steps":  [
                  ""
              ]
},
{
    "id":  "bucatini-carbonara-combining-pancetta-or-guanciale-cured-por",
    "title":  "Bucatini Carbonara, combining pancetta or guanciale (cured pork jowl), egg",
    "date":  "2021-12-08",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/bucatini-carbonara-combining-pancetta-or-guanciale-cured-por.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bucatini Carbonara, combining pancetta or guanciale (cured pork jowl), egg yolks, and Pecorino Romano cheese. Thank you @barillaus for giving me the opportunity to cook up this great dish. 🍻 \n1 package of Barilla Bucatini Pasta\u20282 tbsp extra virgin olive oil\u2028½ pound diced Pancetta\n1/2 cup green peas\u20284 large eggs, at room temperature\u20281 cup freshly-grated Pecorino Romano\n1/2 cup cream\u20281 tsp ground black pepper\n\n1. In a large pot cook Bucatini pasta until al dente or according to packaging. \n2. In a separate large sauté pan, heat olive oil over medium heat and add in the Pancetta. Cook until golden brown and crispy, then remove from the pan and set aside.\n3. In a mixing bowl, whisk together the eggs, cheese, cream, and freshly-ground black pepper.\n4. Add the pasta, cooked Pancetta, and peas to the sauté pan, tossing for a minute so that it is evenly distributed.\n5. Remove the pan from the heat and add the egg and cheese mixture, evenly coating the sauce with the pasta. \n6. Garnish with parsley and serve immediately. \n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #barillalove #italianfood #bucatini #pasta #carbornara #panchetta #barilla #noodles #pecorinoromano",
    "description":  "Bucatini Carbonara, combining pancetta or guanciale (cured pork jowl), egg",
    "likes":  48,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1/2 cup green peas 4 large eggs, at room temperature 1 cup freshly-grated Pecorino Romano",
                                               "1/2 cup cream 1 tsp ground black pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot cook Bucatini pasta until al dente or according to packaging.",
                  "In a separate large sauté pan, heat olive oil over medium heat and add in the Pancetta. Cook until golden brown and crispy, then remove from the pan and set aside.",
                  "In a mixing bowl, whisk together the eggs, cheese, cream, and freshly-ground black pepper.",
                  "Add the pasta, cooked Pancetta, and peas to the sauté pan, tossing for a minute so that it is evenly distributed.",
                  "Remove the pan from the heat and add the egg and cheese mixture, evenly coating the sauce with the pasta.",
                  "Garnish with parsley and serve immediately.",
                  ""
              ]
},
{
    "id":  "when-you-have-that-craving-for-some-hawaiian-shrimp-scampi",
    "title":  "When you have that craving for some Hawaiian Shrimp Scampi.",
    "date":  "2021-11-21",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/when-you-have-that-craving-for-some-hawaiian-shrimp-scampi.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "When you have that craving for some Hawaiian Shrimp Scampi. Popular food truck meal in Hawaii, but had to do it on the Mainland 🤙🏽 \nIngredients \u0026 Recipe: \n1 pound large shrimp, shell on, deveined\n1 cup butter\n1 head garlic, peeled and chopped\n2 tbsp flour\n2 tbsp corn starch\n1 tablespoons paprika\n1/2 teaspoon cayenne pepper\n2 teaspoon sea salt\n1 lemon, cut into slices or wedges\n\n1. Combine the flour, corn starch, paprika, salt, and cayenne pepper in a zip lock bag. \n2. Toss the shrimp in the flour mixture to coat.\n3. Heat a large skillet over medium heat and add the butter. Cook for a minute or two until butter is hot. \n4. Add the shrimp in a single layer. Cook for 3-4 minutes on one side, then turn the shrimp and add chopped garlic.\n5. Cook for 3-4 minutes on the other side until shrimp is fully cooked. \n6. Squeeze a little bit of fresh lemon juice over the shrimp. \n7. Serve with a side of white rice and a lemon wedge. \n————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #shrimp #shrimpscampi #hawaii #islanderfood #hawaiianfoodtruck #hawaiianshrimp #butter #garlicbutter #knorr",
    "description":  "When you have that craving for some Hawaiian Shrimp Scampi.",
    "likes":  39,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 pound large shrimp, shell on, deveined",
                                               "1 cup butter",
                                               "1 head garlic, peeled and chopped",
                                               "2 tbsp flour",
                                               "2 tbsp corn starch",
                                               "1 tablespoons paprika",
                                               "1/2 teaspoon cayenne pepper",
                                               "2 teaspoon sea salt",
                                               "1 lemon, cut into slices or wedges"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine the flour, corn starch, paprika, salt, and cayenne pepper in a zip lock bag.",
                  "Toss the shrimp in the flour mixture to coat.",
                  "Heat a large skillet over medium heat and add the butter. Cook for a minute or two until butter is hot.",
                  "Add the shrimp in a single layer. Cook for 3-4 minutes on one side, then turn the shrimp and add chopped garlic.",
                  "Cook for 3-4 minutes on the other side until shrimp is fully cooked.",
                  "Squeeze a little bit of fresh lemon juice over the shrimp.",
                  "Serve with a side of white rice and a lemon wedge.",
                  ""
              ]
},
{
    "id":  "larb-thai-minced-pork-salad",
    "title":  "Larb (Thai minced pork salad).",
    "date":  "2021-11-17",
    "category":  "Pork",
    "image":  "images/recipes/larb-thai-minced-pork-salad.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Larb (Thai minced pork salad). A fresh Thai salad with fish sauce and lime juices that give a sweet and sour taste. \n\nIngredients \u0026 Recipe\nMeat and seasoning\n* 1 lb ground pork\n* 1/4 tsp salt\n* 1/4 tsp white pepper\n* 2 cloves garlic, minced\n* 1 tbsp Sesame Oil\n\nDressing \n* 1 tbsp white sugar \n* 3 tbsp fish sauce\n* 1/4 tsp white pepper \n* 2 tbsp fresh lime juice\n* 2 tsp chili flakes\n\nVeggies and topping\n* 1 tbsp jasmine rice, toasted\n* 1/2 red onion, thinly sliced\n* 1 cup cilantro, discarding long pieces of stems\n* 1 cup mint leaves, discard stems\n\nSides (optional)\n* Sliced lettuce cups\n* Sliced cabbage cups\n* Sliced cucumbers\n\n1. Heat a skillet over medium heat, add the uncooked jasmine rice and toast until nice golden brown (about 10 to 15 minutes). Transfer to a mortar or spice grinder and grind toasted rice into your desired fineness.\n2. In a large skillet, heat sesame oil on medium heat and add garlic, cooking for 2-3 minutes. \n3. Add the ground pork, seasoning with white pepper and salt. Cook over medium high heat until brown. Remove from heat and set aside. \n4. In a small bowl, combine the ingredients for the dressing and stir until sugar is dissolved. \n5. Combine veggies, toppings, and pork in a bowl and mix well. \n6. Add the dressing to the pork and veggie mixture. \n7. Serve with your choice of lettuce cups, cabbage cups, or cucumbers. \u2028\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #thaifood #larb #groundpork #salad #asiansalad #healthy #fishsauce #toastedrice",
    "description":  "Larb (Thai minced pork salad).",
    "likes":  34,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Meat and seasoning",
                                               "* 1 lb ground pork",
                                               "* 1/4 tsp salt",
                                               "* 1/4 tsp white pepper",
                                               "* 2 cloves garlic, minced",
                                               "* 1 tbsp Sesame Oil"
                                           ]
                             },
                             {
                                 "heading":  "Dressing",
                                 "items":  [
                                               "* 1 tbsp white sugar",
                                               "* 3 tbsp fish sauce",
                                               "* 1/4 tsp white pepper",
                                               "* 2 tbsp fresh lime juice",
                                               "* 2 tsp chili flakes",
                                               "Veggies and topping",
                                               "* 1 tbsp jasmine rice, toasted",
                                               "* 1/2 red onion, thinly sliced",
                                               "* 1 cup cilantro, discarding long pieces of stems",
                                               "* 1 cup mint leaves, discard stems",
                                               "Sides (optional)",
                                               "* Sliced lettuce cups",
                                               "* Sliced cabbage cups"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a skillet over medium heat, add the uncooked jasmine rice and toast until nice golden brown (about 10 to 15 minutes). Transfer to a mortar or spice grinder and grind toasted rice into your desired fineness.",
                  "In a large skillet, heat sesame oil on medium heat and add garlic, cooking for 2-3 minutes.",
                  "Add the ground pork, seasoning with white pepper and salt. Cook over medium high heat until brown. Remove from heat and set aside.",
                  "In a small bowl, combine the ingredients for the dressing and stir until sugar is dissolved.",
                  "Combine veggies, toppings, and pork in a bowl and mix well.",
                  "Add the dressing to the pork and veggie mixture.",
                  "Serve with your choice of lettuce cups, cabbage cups, or cucumbers.",
                  ""
              ]
},
{
    "id":  "filipino-islander-pork-bbq",
    "title":  "Filipino Islander Pork BBQ.",
    "date":  "2021-11-13",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/filipino-islander-pork-bbq.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Filipino Islander Pork BBQ. Thin slices of pork shoulder marinated and grilled on the Traeger. Basting throughout to add a sweet glaze. 🔥🔥🔥 Served with a side of steamed rice and diced tomatoes, green onions, soy sauce, and vinegar. \n\nIngredients \u0026 Recipe\n3 lbs. pork belly or pork should thinly sliced \n1/2 cup soy sauce\n1/4 cup Oyster sauce\n1 piece lemon or 4 pieces calamansi\n1/2 tsp ground black pepper\n2 tsp chicken bouillon \n4 cloves garlic crushed\n1/4 cup Banana Ketchup\n5 tbsp white sugar, add more as needed to make marinade slightly sweet\n1 tbsp cooking oil\n\n1. Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight. \n2. Set smoker to 160 and cook for 30 minutes. \n3. Increase heat to 375 and grill for another 20 minutes or until fully cooked. \n4. Serve with steamed rice and a side soy sauce with a squeeze of lemon juice. \n\n ————————————————————————\n#traegergrills #homecooking #homecooking #bbq #lowandslow #grilling #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #filipinobbq #filipinofood #porkinihaw #grilledpork #smoked #redmeat #islanderbbq #islander #porkbbq",
    "description":  "Filipino Islander Pork BBQ.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs. pork belly or pork should thinly sliced",
                                               "1/2 cup soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1 piece lemon or 4 pieces calamansi",
                                               "1/2 tsp ground black pepper",
                                               "2 tsp chicken bouillon",
                                               "4 cloves garlic crushed",
                                               "1/4 cup Banana Ketchup",
                                               "5 tbsp white sugar, add more as needed to make marinade slightly sweet",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight.",
                  "Set smoker to 160 and cook for 30 minutes.",
                  "Increase heat to 375 and grill for another 20 minutes or until fully cooked.",
                  "Serve with steamed rice and a side soy sauce with a squeeze of lemon juice.",
                  ""
              ]
},
{
    "id":  "vietnamese-chicken-pho-soup",
    "title":  "Vietnamese Chicken Pho soup.",
    "date":  "2021-11-09",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/vietnamese-chicken-pho-soup.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Vietnamese Chicken Pho soup. Took a little shortcut and used a rotisserie chicken from @costco and created a broth that the family enjoyed. \n\nIngredients \u0026 Recipe\nSoup Base\n2 quarts water\n2 onions, cut in half\n2 knobs of ginger sliced\n1 whole rotisserie chicken\n1 small daikon radish, sliced\n1 bag of Pho Hoa spice packet\n3 tbsp fish sauce\n2 tbsp white sugar\nSalt\n\nNoodle and Toppings\nRice noodles or egg noodles, cooked in boiling water for 3 minutes. \nGreen onions, sliced\nBean sprouts\nThai Basil\n2 limes , cut into 4 wedges\nHoisin sauce\nSriracha\nRed chillies or jalapeños, finely sliced (optional)\n\n1. Combine all soup base ingredients into a large pot. \n2. Bring to a boil and lower heat to simmer. \n3. Cook for 1 hour. \n4. Remove chicken and set aside. \n5. Strain broth into another pot and discard all contents. \n6. Slice chicken and combine noodle and toppings into a bowl. \n7. Pour hot broth and serve. \n————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #chickenpho #pho #rotisseriechicken #costco #beansprouts #eggnoodles #ricenoodles #vietnamesefood",
    "description":  "Vietnamese Chicken Pho soup.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Soup Base",
                                               "2 quarts water",
                                               "2 onions, cut in half",
                                               "2 knobs of ginger sliced",
                                               "1 whole rotisserie chicken",
                                               "1 small daikon radish, sliced",
                                               "1 bag of Pho Hoa spice packet",
                                               "3 tbsp fish sauce",
                                               "2 tbsp white sugar",
                                               "Salt",
                                               "Noodle and Toppings"
                                           ]
                             }
                         ],
    "steps":  [
                  "Green onions, sliced",
                  "Bean sprouts",
                  "Thai Basil",
                  "2 limes , cut into 4 wedges",
                  "Hoisin sauce",
                  "Sriracha",
                  "Red chillies or jalapeños, finely sliced (optional)",
                  "Combine all soup base ingredients into a large pot.",
                  "Bring to a boil and lower heat to simmer.",
                  "Cook for 1 hour.",
                  "Remove chicken and set aside.",
                  "Strain broth into another pot and discard all contents.",
                  "Slice chicken and combine noodle and toppings into a bowl.",
                  "Pour hot broth and serve.",
                  ""
              ]
},
{
    "id":  "smoked-chicken-thighs-and-drumsticks-marinated-in-an-asian-m",
    "title":  "Smoked chicken thighs and drumsticks, marinated in an Asian marinade.",
    "date":  "2021-11-03",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/smoked-chicken-thighs-and-drumsticks-marinated-in-an-asian-m.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked chicken thighs and drumsticks, marinated in an Asian marinade. Served with roasted Brussels sprouts and bacon, lightly seasoned with olive oil, salt, and pepper. 🍻 \nIngredients \u0026 Recipe\n2-3 pounds chicken thighs\n1 lime or lemon, juiced \n1 1/2 tbsp canola or vegetable oil\n4 tbsp dark soy sauce\n2 tbsp Fish sauce\n2 tbsp brown sugar\n6 garlic cloves, minced\n2 tbsp fresh grated ginger\n1 teaspoon red chili flakes\n2 tablespoon cilantro\n3 green onions, chopped\n\nGarnish:\n2-3 green onions, chopped\nCilantro\n\n1. Combine all ingredients except for chicken in a large bowl and mix well. \n2. Add chicken to marinade and mix well. (Place in a zip lock bag for better coverage) \n3. Refrigerate for at least 3 hours or overnight is preferable. \n4. Set smoker to 160 and smoke for 30 minutes. \n5. Increase temp to 350 for about 30 minutes and until internal temp reaches 160. \n6. Transfer to plate and garnish with green onions and cilantro. \n7. Serve with steamed rice and enjoy! ————————————————————————\n#traegergrills #homecooking #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #traeger #smokedchicken #thighs #drumsticks #asianbbq #asianmarinade #hawaiianbbq",
    "description":  "Smoked chicken thighs and drumsticks, marinated in an Asian marinade.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds chicken thighs",
                                               "1 lime or lemon, juiced",
                                               "1 1/2 tbsp canola or vegetable oil",
                                               "4 tbsp dark soy sauce",
                                               "2 tbsp Fish sauce",
                                               "2 tbsp brown sugar",
                                               "6 garlic cloves, minced",
                                               "2 tbsp fresh grated ginger",
                                               "1 teaspoon red chili flakes",
                                               "2 tablespoon cilantro",
                                               "3 green onions, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients except for chicken in a large bowl and mix well.",
                  "Add chicken to marinade and mix well. (Place in a zip lock bag for better coverage)",
                  "Refrigerate for at least 3 hours or overnight is preferable.",
                  "Set smoker to 160 and smoke for 30 minutes.",
                  "Increase temp to 350 for about 30 minutes and until internal temp reaches 160.",
                  "Transfer to plate and garnish with green onions and cilantro.",
                  "Serve with steamed rice and enjoy! ————————————————————————"
              ]
},
{
    "id":  "mapo-tufo-w-steamed-broccolini-over-rice",
    "title":  "Mapo Tufo w/ steamed broccolini over rice.",
    "date":  "2021-10-25",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/mapo-tufo-w-steamed-broccolini-over-rice.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Mapo Tufo w/ steamed broccolini over rice. Popular Sichuan dish that has a spicy sauce smothered over ground beef and tofu. \nIngredients \u0026 Recipe\n1 lb ground beef\n1 (14-ounce) package firm water-packed tofu, drained\n\nSauce\n2 tablespoons Sriracha\n2 tablespoons mirin\n1 tablespoon black bean garlic sauce\n2 teaspoons sugar\n1 cup water\n1 tablespoon chicken bouillon \n1 tablespoon cornstarch\n2 tablespoons low sodium soy sauce\n1 teaspoon chili oil\n\nStir fry\n1 tablespoon vegetable or canola oil\n1 tablespoon finely chopped garlic\n2 tablespoons minced ginger\n4 green onions, chopped\n(Optional) cilantro leaves\n\n1. Place tofu on paper towels and cover to absorb the liquid. Let stand for about 30 minutes. Discard towels and cut tofu into 1-inch cubes.\n2. Combine all sauce ingredients into a bowl, mix together and set aside. \n3. Heat oil in a large skillet over medium-high heat. \n4. Add ground beef and cook until brown. \n5. Add green onions, garlic, and ginger and cook for about 1 minute. \n6. Add sauce mixture and cook 2-3 minute stirring occasionally until sauce thickens. \n7. Add tofu and mix together. \n8. Top off with prices of cilantro. \n9. Serve with rice and Broccolini.\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #knorr #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #sichuanfood #mapotofu #groundbeef #broccolini #rice #spicy #chinesefood #asianfood #comfortfood",
    "description":  "Mapo Tufo w/ steamed broccolini over rice.",
    "likes":  31,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 lb ground beef",
                                               "1 (14-ounce) package firm water-packed tofu, drained"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tablespoons Sriracha",
                                               "2 tablespoons mirin",
                                               "1 tablespoon black bean garlic sauce",
                                               "2 teaspoons sugar",
                                               "1 cup water",
                                               "1 tablespoon chicken bouillon",
                                               "1 tablespoon cornstarch",
                                               "2 tablespoons low sodium soy sauce",
                                               "1 teaspoon chili oil",
                                               "Stir fry",
                                               "1 tablespoon vegetable or canola oil",
                                               "1 tablespoon finely chopped garlic",
                                               "2 tablespoons minced ginger",
                                               "4 green onions, chopped",
                                               "(Optional) cilantro leaves"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place tofu on paper towels and cover to absorb the liquid. Let stand for about 30 minutes. Discard towels and cut tofu into 1-inch cubes.",
                  "Combine all sauce ingredients into a bowl, mix together and set aside.",
                  "Heat oil in a large skillet over medium-high heat.",
                  "Add ground beef and cook until brown.",
                  "Add green onions, garlic, and ginger and cook for about 1 minute.",
                  "Add sauce mixture and cook 2-3 minute stirring occasionally until sauce thickens.",
                  "Add tofu and mix together.",
                  "Top off with prices of cilantro.",
                  "Serve with rice and Broccolini.",
                  ""
              ]
},
{
    "id":  "birria-tacos-are",
    "title":  "Birria Tacos are .",
    "date":  "2021-10-23",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/birria-tacos-are.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Birria Tacos are 🔥🔥🔥. Taking the shredded beef from this Mexican stew and stuffing it into warm corn tortillas with cheese adding guacamole, onions, and cilantro. Dipping it all into the broth while you eat 🍻 Ingredients \u0026 Recipe\n4 lbs chuck roast \n4 cups water\n5 dried chile guajillo\n2 dried chile ancho\n2 garlic cloves\n1 teaspoon dried oregano\n1 teaspoon dried thyme\n1 clove\n¼ whole cinnamon stick\n1 tablespoon Knorr Beef Bouillon\n2 laurel leaves (or bay leaves)\n2 tablespoons oil\nSalt and pepper\n\n1. Heat a pan and toast the chiles on the griddle for 2-3 minutes. Turning frequently and making sure they do not burn.\n2. Once toasted, transfer to a bowl.\n3. Add 1 cup hot water and let the chiles soak for 5 minutes, or until soft.\n4. Remove seeds and devein the chiles, saving the water.\n5. Add the saved water, the chiles, garlic, oregano, thyme, clove, cinnamon, bouillon into a blender and blend until smooth. Set aside.\n6. In a large pot, heat two tablespoons oil.\n7. Season beef liberally with salt and pepper. \n8. Sear the beef on all sides.\n9. Once the meat is brown, transfer to the Instant Pot.\n10. Add the chile mixture from the blender and bay leaves. \n11. Add the 4 cups of water or enough water to cover the meat.\n12. Set Instant Pot to pressure cook for 45 minutes and NPR for 15 minutes. \n13. Shred beef.\n14. Serve with diced onions, chopped cilantro, guacamole, and tortillas. ————————————————————————\n#yummy #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #birria #birriatacos #instantpot #beefstew #comfortfood #mexicanfood #tacos #streettacos #guacamole",
    "description":  "Birria Tacos are .",
    "likes":  39,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 cups water",
                                               "5 dried chile guajillo",
                                               "2 dried chile ancho",
                                               "2 garlic cloves",
                                               "1 teaspoon dried oregano",
                                               "1 teaspoon dried thyme",
                                               "1 clove",
                                               "whole cinnamon stick",
                                               "1 tablespoon Knorr Beef Bouillon",
                                               "2 laurel leaves (or bay leaves)",
                                               "2 tablespoons oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a pan and toast the chiles on the griddle for 2-3 minutes. Turning frequently and making sure they do not burn.",
                  "Once toasted, transfer to a bowl.",
                  "Add 1 cup hot water and let the chiles soak for 5 minutes, or until soft.",
                  "Remove seeds and devein the chiles, saving the water.",
                  "Add the saved water, the chiles, garlic, oregano, thyme, clove, cinnamon, bouillon into a blender and blend until smooth. Set aside.",
                  "In a large pot, heat two tablespoons oil.",
                  "Season beef liberally with salt and pepper.",
                  "Sear the beef on all sides.",
                  "Once the meat is brown, transfer to the Instant Pot.",
                  "Add the chile mixture from the blender and bay leaves.",
                  "Add the 4 cups of water or enough water to cover the meat.",
                  "Set Instant Pot to pressure cook for 45 minutes and NPR for 15 minutes.",
                  "Shred beef.",
                  "Serve with diced onions, chopped cilantro, guacamole, and tortillas. ————————————————————————"
              ]
},
{
    "id":  "greek-chicken-wraps-and-koobideh-w-basmati-rice",
    "title":  "Greek Chicken Wraps and Koobideh w/ Basmati Rice.",
    "date":  "2021-10-21",
    "category":  "Poultry",
    "image":  "images/recipes/greek-chicken-wraps-and-koobideh-w-basmati-rice.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Greek Chicken Wraps and Koobideh w/ Basmati Rice. Used some fresh tortillas to bring a lighter touch to create the chicken wrap. Chicken thighs were marinated overnight using store bought Tzatziki Sauce, then grilled to perfection 🍻 \nIngredients \u0026 Recipe for Koobideh\n\n1 1/2 lb ground beef or lamb\n1 medium onion, grated and drained\n2 cloves garlic, minced\n1⁄4 cup seasoned bread crumbs (Garlic \u0026 Herb)\n2 eggs, slightly beaten\n1 tsp turmeric\n1 tsp sumac\n1 tsp salt\n1 tsp chicken bouillon \n1⁄2 tsp black pepper\n1 tbsp lemon juice\n\n1. Mix all ingredients well; cover and refrigerate overnight.\n2. Divide the meat into 8 portions.\n3. Portion each one around a long metal skewers and shape evenly. \n4. Place the skewers on a hot grill on medium high heat. You can also grill on the Traeger at 350 degrees for 25-30 minutes or until IT reaches 160 degrees. \n5. Turn frequently to brown and then cook each side for a few minutes.\n\n ————————————————————————\n#traegergrills #homecooking #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #koobideh #greekchicken #wraps #chickenwrap #tzatziki #beef #basmatirice",
    "description":  "Greek Chicken Wraps and Koobideh w/ Basmati Rice.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1 1/2 lb ground beef or lamb",
                                               "1 medium onion, grated and drained",
                                               "2 cloves garlic, minced",
                                               "1⁄4 cup seasoned bread crumbs (Garlic \u0026 Herb)",
                                               "2 eggs, slightly beaten",
                                               "1 tsp turmeric",
                                               "1 tsp sumac",
                                               "1 tsp salt",
                                               "1 tsp chicken bouillon",
                                               "1⁄2 tsp black pepper",
                                               "1 tbsp lemon juice"
                                           ]
                             }
                         ],
    "steps":  [
                  "Mix all ingredients well; cover and refrigerate overnight.",
                  "Divide the meat into 8 portions.",
                  "Portion each one around a long metal skewers and shape evenly.",
                  "Place the skewers on a hot grill on medium high heat. You can also grill on the Traeger at 350 degrees for 25-30 minutes or until IT reaches 160 degrees.",
                  "Turn frequently to brown and then cook each side for a few minutes.",
                  ""
              ]
},
{
    "id":  "soy-sauce-pan-fried-noodles-w-chicken",
    "title":  "Soy Sauce Pan Fried Noodles w/ Chicken",
    "date":  "2021-10-11",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/soy-sauce-pan-fried-noodles-w-chicken.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Soy Sauce Pan Fried Noodles w/ Chicken. \n\nIngredients \u0026 Recipe\n3 tbsp vegetable oil\n1 packet Chinese egg noodles, blanched for 1 minute\n4 stalks green onions, sliced into 2” pieces\n1/2 yellow onion, sliced\n1 1/2 cups bean sprouts\n\nChicken Marinade\n1 chicken breast, thinly sliced\n2 tablespoon corn starch\n1 tsp salt\n1 tbsp shaoxing rice wine or white wine\n\nSauce\n2 tbsp soy sauce\n1 tbsp dark soy sauce\n1 tbsp oyster sauce\n½ teaspoon sesame oil\n¼ teaspoon chicken bouillon \n¼ teaspoon sugar\n½ tablespoon shaoxing rice wine or white wine\n¼ teaspoon white pepper\n\n1. Combine all chicken marinade ingredients into a bowl and mix well, then set aside \n2. Bring 2 quarts of water to a boil and cook egg noodles for 2 minutes. Rinse in cold water and pat dry. \n3. Mix the sauce ingredients in a small bowl and set aside.\n4. Heat the wok over high heat and add 2 tablespoons of oil to coat the wok or large pan. Spread the noodles in a thin, even layer and fry for about 5 minutes on each side. Set the noodles aside on a plate.\n5. Heat the wok over high heat. Add a tablespoon of oil and cook chicken. \n6. Add green onions and yellow onions to the pan and cook for about 15 seconds.\n7. Add the noodles back into to the wok and mix well. \n8. Add the sauce mixture and toss all ingredients together. \n9. Add the bean sprouts, combining everything together. You want the sprouts to be cooked but still crunchy. Enjoy\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #chinesefood #noodles #soysaucenoodles #panfriednoodles #wok",
    "description":  "Soy Sauce Pan Fried Noodles w/ Chicken",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 tbsp vegetable oil",
                                               "1 packet Chinese egg noodles, blanched for 1 minute",
                                               "4 stalks green onions, sliced into 2” pieces",
                                               "1/2 yellow onion, sliced",
                                               "1 1/2 cups bean sprouts",
                                               "Chicken Marinade",
                                               "1 chicken breast, thinly sliced",
                                               "2 tablespoon corn starch",
                                               "1 tsp salt",
                                               "1 tbsp shaoxing rice wine or white wine"
                                           ]
                             },
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tbsp soy sauce",
                                               "1 tbsp dark soy sauce",
                                               "1 tbsp oyster sauce",
                                               "teaspoon sesame oil",
                                               "teaspoon chicken bouillon",
                                               "teaspoon sugar",
                                               "tablespoon shaoxing rice wine or white wine",
                                               "teaspoon white pepper"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all chicken marinade ingredients into a bowl and mix well, then set aside",
                  "Bring 2 quarts of water to a boil and cook egg noodles for 2 minutes. Rinse in cold water and pat dry.",
                  "Mix the sauce ingredients in a small bowl and set aside.",
                  "Heat the wok over high heat and add 2 tablespoons of oil to coat the wok or large pan. Spread the noodles in a thin, even layer and fry for about 5 minutes on each side. Set the noodles aside on a plate.",
                  "Heat the wok over high heat. Add a tablespoon of oil and cook chicken.",
                  "Add green onions and yellow onions to the pan and cook for about 15 seconds.",
                  "Add the noodles back into to the wok and mix well.",
                  "Add the sauce mixture and toss all ingredients together.",
                  "Add the bean sprouts, combining everything together. You want the sprouts to be cooked but still crunchy. Enjoy",
                  ""
              ]
},
{
    "id":  "smoked-wings-for-dinner",
    "title":  "Smoked wings for dinner!!!",
    "date":  "2021-10-10",
    "category":  "Wings",
    "image":  "images/recipes/smoked-wings-for-dinner.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked wings for dinner!!! Seasoned with Traeger Fin \u0026 Feather rub, brown sugar, and soy sauce. \nIngredients \u0026 Recipe\n1-2 pounds party wings\n3 tbsp Traeger Fin \u0026 Feather Rub\n2 tbsp brown Sugar\n2 tbsp dark soy sauce\n\n1. Combine all ingredients in a zip lock back and marinate for at least an hour. \n2. Set smoker to 160 and smoke for about 30 minutes. \n3. Increase heat to 375 and cook for another 30 minutes checking for internal temperature of 165. \n4. Pull off grill and rest for 5 minutes. ————————————————————————\n#traegergrills #homecooking #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #smokedwings #finandfeather #traegerrecipe #gamedaywings #soysauce #marinade #gamedayrecipes",
    "description":  "Smoked wings for dinner!!!",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "1-2 pounds party wings",
                                               "3 tbsp Traeger Fin \u0026 Feather Rub",
                                               "2 tbsp brown Sugar",
                                               "2 tbsp dark soy sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine all ingredients in a zip lock back and marinate for at least an hour.",
                  "Set smoker to 160 and smoke for about 30 minutes.",
                  "Increase heat to 375 and cook for another 30 minutes checking for internal temperature of 165.",
                  "Pull off grill and rest for 5 minutes. ————————————————————————"
              ]
},
{
    "id":  "smoked-filipino-pork-bbq-pork-inihaw-na-baboy",
    "title":  "Smoked Filipino Pork BBQ (Pork Inihaw na Baboy).",
    "date":  "2021-10-07",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/smoked-filipino-pork-bbq-pork-inihaw-na-baboy.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Smoked Filipino Pork BBQ (Pork Inihaw na Baboy). This is a classic BBQ dish served at parties perfectly paired with a side of beer. \nIngredients \u0026 Recipe\n3 lbs. pork belly or pork should thinly sliced \n1/2 cup soy sauce\n1/4 cup Oyster sauce\n1 piece lemon or 4 pieces calamansi\n1/2 tsp ground black pepper\n2 tsp chicken bouillon \n4 cloves garlic crushed\n1/4 cup Banana Ketchup or regular Ketchup with 3 tbsp brown sugar\n2 tbsp Sugar, add more as needed to make marinade slightly sweet\n1 tbsp cooking oil\n\n1. Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight. \n2. Set smoker to 160 and cook for 30 minutes. \n3. Increase heat to 375 and grill for another 20 minutes or until fully cooked. \n4. Serve with steamed rice and a side soy sauce with a squeeze of lemon juice. \n\n ————————————————————————\n#traegergrills #homecooking #homecooking #bbq #lowandslow #grilling #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sd #sdcook #btcooks #easyrecipes #filipinobbq #filipinofood #porkinihaw #grilledpork #smoked #redmeat #harlandbrewing",
    "description":  "Smoked Filipino Pork BBQ (Pork Inihaw na Baboy).",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 lbs. pork belly or pork should thinly sliced",
                                               "1/2 cup soy sauce",
                                               "1/4 cup Oyster sauce",
                                               "1 piece lemon or 4 pieces calamansi",
                                               "1/2 tsp ground black pepper",
                                               "2 tsp chicken bouillon",
                                               "4 cloves garlic crushed",
                                               "1/4 cup Banana Ketchup or regular Ketchup with 3 tbsp brown sugar",
                                               "2 tbsp Sugar, add more as needed to make marinade slightly sweet",
                                               "1 tbsp cooking oil"
                                           ]
                             }
                         ],
    "steps":  [
                  "Combine pork with all ingredients. Marinade the pork for at least 4 hours, preferably overnight.",
                  "Set smoker to 160 and cook for 30 minutes.",
                  "Increase heat to 375 and grill for another 20 minutes or until fully cooked.",
                  "Serve with steamed rice and a side soy sauce with a squeeze of lemon juice.",
                  ""
              ]
},
{
    "id":  "instant-pot-vietnamese-pork-and-noodle-soup-h-ti-u-m",
    "title":  "Instant Pot Vietnamese Pork and Noodle Soup (Hủ Tiếu Mì).",
    "date":  "2021-10-05",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/instant-pot-vietnamese-pork-and-noodle-soup-h-ti-u-m.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Instant Pot Vietnamese Pork and Noodle Soup (Hủ Tiếu Mì). The primary ingredients of this dish are pork bones, mixed with noodles, herbs and seafood. Ingredients \u0026 Recipe\nBroth\n2 lbs of pork spare ribs or pork bones (preboiled on stove top for 5 minutes, washed well, drained)\n4 pieces of tendon\n1 large onion\n1 medium daikon, peeled and cut into large chunks\n2 carrots, peeled and cut in half\n6 tbsp of Quoc Viet Hu Tieu Soup Base\n\nToppings\nQuail Eggs\nCooked Shrimp\nFish Cake, sliced\nYellow Egg noodles (thin, yellow), Blanch in boiling water for 1 min. \nBeansprouts\nFried Garlic\nLotus root\nChopped green onion\nCilantro\n\nDirections\n1. Place all broth ingredients into an instant pot and add 6 cups of water. Set Pressure Cook for 25 minutes high pressure, with 25 minutes NPR.\n2. Once the 25 minutes NPR is reached, Remove and discard onion, daikon and carrot. Add an additional 4 cups of water and set to sauté to heat. \n3. Serve in a large bowl, add noodles, meat, shrimp, and fish cakes. \n4. Add hot broth directly into the bowl. \n5. Add fried garlic, bean sprouts, eggs, cilantro, lotus root, and green onions. ————————————————————————\n#yummy #instagood #foodporn #lowandslow #fresh #tasty #delish #delicious #instantpotrecipes #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #vietnamesefood #soup #comfortfood #bowlofgoodness #hutieu #hutieumi #eggs #fishcakes #porkribs",
    "description":  "Broth",
    "likes":  29,
    "intro":  [
                  "Broth"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 pieces of tendon",
                                               "1 large onion",
                                               "1 medium daikon, peeled and cut into large chunks",
                                               "2 carrots, peeled and cut in half",
                                               "6 tbsp of Quoc Viet Hu Tieu Soup Base",
                                               "Toppings",
                                               "Quail Eggs",
                                               "Cooked Shrimp"
                                           ]
                             }
                         ],
    "steps":  [
                  "Fish Cake, sliced",
                  "Yellow Egg noodles (thin, yellow), Blanch in boiling water for 1 min.",
                  "Beansprouts",
                  "Fried Garlic",
                  "Lotus root",
                  "Chopped green onion",
                  "Cilantro",
                  "Place all broth ingredients into an instant pot and add 6 cups of water. Set Pressure Cook for 25 minutes high pressure, with 25 minutes NPR.",
                  "Once the 25 minutes NPR is reached, Remove and discard onion, daikon and carrot. Add an additional 4 cups of water and set to sauté to heat.",
                  "Serve in a large bowl, add noodles, meat, shrimp, and fish cakes.",
                  "Add hot broth directly into the bowl.",
                  "Add fried garlic, bean sprouts, eggs, cilantro, lotus root, and green onions. ————————————————————————"
              ]
},
{
    "id":  "one-of-my-favorite-filipino-comfort-food-called-sinigang",
    "title":  "One of my favorite Filipino comfort food called Sinigang.",
    "date":  "2021-09-30",
    "category":  "Filipino \u0026 Islander",
    "image":  "images/recipes/one-of-my-favorite-filipino-comfort-food-called-sinigang.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "One of my favorite Filipino comfort food called Sinigang. It is a popular sour soup made with pork, vegetables, and tamarind-flavored broth. \nIngredients \u0026 Recipe\n2-3 pounds of pork shoulder or pork ribs, cut into 2” cubes\n2 tbsp vegetable or canola oil\n3 tbsp fish sauce\nHandful green beans or string beans, cut into 2-3”\n1 Japanese eggplant, sliced\n3 yellow peppers\n1 medium onion, sliced in half and quartered\n3 Roma tomatoes\n1 small daikon radish, peeled and sliced\n3 cups Kangkong leaves\n12 okras \n1 packet of Sinigang (Tamarind) powder\n6 cups of water\nSalt\n\n1. Heat a large pot with oil. \n2. Add the onions and sauté until translucent. \n3. Add the pork and season with salt and fish sauce. Cook until brown. \n4. Add water and let it come to a boil. (Add more to make sure meat is covered. \n5. Add tomatoes, daikon radish, yellow peppers, and entire packet of Sinigang powder. Cover and simmer for about 30-45 minutes or until meat is soft. \n6. Add the Kangkong leaves and simmer for 5 minutes. \n7. Add the green beans, eggplant, and okra. Cover the pot and cook for 5 minutes.\n8. Add more Sinigang powder if you want it more sour. \n9. Serve hot with a side of steamed rice.\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #comfortfood #soup #sinigang #filipinofood #veggies #soursoup #fishsauce #okra #daikon",
    "description":  "One of my favorite Filipino comfort food called Sinigang.",
    "likes":  41,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2-3 pounds of pork shoulder or pork ribs, cut into 2” cubes",
                                               "2 tbsp vegetable or canola oil",
                                               "3 tbsp fish sauce",
                                               "Handful green beans or string beans, cut into 2-3”",
                                               "1 Japanese eggplant, sliced",
                                               "3 yellow peppers",
                                               "1 medium onion, sliced in half and quartered",
                                               "3 Roma tomatoes",
                                               "1 small daikon radish, peeled and sliced",
                                               "3 cups Kangkong leaves",
                                               "12 okras",
                                               "1 packet of Sinigang (Tamarind) powder",
                                               "6 cups of water"
                                           ]
                             }
                         ],
    "steps":  [
                  "Heat a large pot with oil.",
                  "Add the onions and sauté until translucent.",
                  "Add the pork and season with salt and fish sauce. Cook until brown.",
                  "Add water and let it come to a boil. (Add more to make sure meat is covered.",
                  "Add tomatoes, daikon radish, yellow peppers, and entire packet of Sinigang powder. Cover and simmer for about 30-45 minutes or until meat is soft.",
                  "Add the Kangkong leaves and simmer for 5 minutes.",
                  "Add the green beans, eggplant, and okra. Cover the pot and cook for 5 minutes.",
                  "Add more Sinigang powder if you want it more sour.",
                  "Serve hot with a side of steamed rice.",
                  ""
              ]
},
{
    "id":  "bowl-of-chili-filled-with-italian-sausage-ground-beef-and-ve",
    "title":  "Bowl of chili filled with Italian sausage, ground beef, and veggies",
    "date":  "2021-09-28",
    "category":  "Soups \u0026 Stews",
    "image":  "images/recipes/bowl-of-chili-filled-with-italian-sausage-ground-beef-and-ve.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Bowl of chili filled with Italian sausage, ground beef, and veggies. \nIngredients \u0026 Recipe\n2 lbs Italian Sausage, sliced\n3 lbs ground beef\n1/2 package of bacon, diced\n1 tbsp beef bouillon \n1 Green bell pepper\n1 Red bell pepper\n1 Orange bell pepper\n1 Yellow onion\n6 cloves of garlic\n1 12oz Diced Tomato\n1 25.4oz Tomato Sauce\n1 tbsp cumin\n1 tbsp smoked chipotle power\n1 tbsp black pepper\n2 tbsp chili powder\n2 tbsp brown sugar\n\nToppings\n2 stalks green onions, chopped\nShredded cheddar cheese\n\n1. In a large pot cook bacon on medium heat. \n2. Add onions and garlic. Cook for about 5 minutes. \n3. Add ground beef and season with beef bouillon. Cook for 5 minutes. \n4. Add cumin, chili powder, chipotle powder, brown sugar, and black pepper and mix well. \n5. Add bell peppers and cook for another 5 minutes. \n6. Add diced tomatoes and tomato sauce. Cook for 10 minutes. \n7. Add sausages and cook for another 30 minutes. \n8. Skim off oil. \n9. Serve hot, topping off with shredded cheese and green onions. ————————————————————————\n#traegergrills #homecooking #yum #homecooking #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #sdhomecook #btcooks #chilirecipe #italiansausage #groundbeef #cheese",
    "description":  "Bowl of chili filled with Italian sausage, ground beef, and veggies",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "2 lbs Italian Sausage, sliced",
                                               "3 lbs ground beef",
                                               "1/2 package of bacon, diced",
                                               "1 tbsp beef bouillon",
                                               "1 Green bell pepper",
                                               "1 Red bell pepper",
                                               "1 Orange bell pepper",
                                               "1 Yellow onion",
                                               "6 cloves of garlic",
                                               "1 12oz Diced Tomato",
                                               "1 25.4oz Tomato Sauce",
                                               "1 tbsp cumin",
                                               "1 tbsp smoked chipotle power",
                                               "1 tbsp black pepper",
                                               "2 tbsp chili powder",
                                               "2 tbsp brown sugar",
                                               "Toppings",
                                               "2 stalks green onions, chopped"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a large pot cook bacon on medium heat.",
                  "Add onions and garlic. Cook for about 5 minutes.",
                  "Add ground beef and season with beef bouillon. Cook for 5 minutes.",
                  "Add cumin, chili powder, chipotle powder, brown sugar, and black pepper and mix well.",
                  "Add bell peppers and cook for another 5 minutes.",
                  "Add diced tomatoes and tomato sauce. Cook for 10 minutes.",
                  "Add sausages and cook for another 30 minutes.",
                  "Skim off oil.",
                  "Serve hot, topping off with shredded cheese and green onions. ————————————————————————"
              ]
},
{
    "id":  "loaded-potato-salad",
    "title":  "Loaded Potato Salad.",
    "date":  "2021-09-28",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/loaded-potato-salad.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Loaded Potato Salad. Baked Potato in a bowl loaded with bacon, cheese, and green onions in a sour cream and mayo dressing.\n \nIngredients \u0026 Recipe\n4 pounds russet potatoes\n1 stick of unsalted butter, melted\n2 tbsp apple cider vinegar\n1 cup mayonnaise\n1 cup sour cream\n1 tsp salt\n1 tsp fresh ground black pepper\n1 packet of bacon , cooked, cooled and chopped\n6 green onions, chopped\n1 1/2 cups shredded cheddar cheese\n\n1. Place the potatoes into a large pot and boil over high heat, then reduce heat to medium, and cook for about 15 minutes until soft. \n2. Remove the potatoes, and allow to cool. Once cooked, dice up potatoes into big chunks. \n3. Place the diced potatoes into a bowl with the bacon, and mix in the sour cream, mayonnaise, butter, Cheddar cheese, green onions, vinegar, salt, and pepper. Save some shredded cheese and green onions to use as garnish. \n4. Garnish salad with reserved green onions and shredded cheese. \n5. Refrigerate overnight before serving.\n\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #backyardgrilling #bbq #smoked #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #potatosalad #loadedpotatosalad #comfortfood #bakedpotato #grilling #lowandslow",
    "description":  "Loaded Potato Salad.",
    "likes":  41,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "4 pounds russet potatoes",
                                               "1 stick of unsalted butter, melted",
                                               "2 tbsp apple cider vinegar",
                                               "1 cup mayonnaise",
                                               "1 cup sour cream",
                                               "1 tsp salt",
                                               "1 tsp fresh ground black pepper",
                                               "1 packet of bacon , cooked, cooled and chopped",
                                               "6 green onions, chopped",
                                               "1 1/2 cups shredded cheddar cheese"
                                           ]
                             }
                         ],
    "steps":  [
                  "Place the potatoes into a large pot and boil over high heat, then reduce heat to medium, and cook for about 15 minutes until soft.",
                  "Remove the potatoes, and allow to cool. Once cooked, dice up potatoes into big chunks.",
                  "Place the diced potatoes into a bowl with the bacon, and mix in the sour cream, mayonnaise, butter, Cheddar cheese, green onions, vinegar, salt, and pepper. Save some shredded cheese and green onions to use as garnish.",
                  "Garnish salad with reserved green onions and shredded cheese.",
                  "Refrigerate overnight before serving.",
                  ""
              ]
},
{
    "id":  "sometimes-cooking-a-brisket-could-take-a-lot-of-time-and-wor",
    "title":  "Sometimes cooking a brisket could take a lot of time and work.",
    "date":  "2021-09-27",
    "category":  "BBQ \u0026 Smoked",
    "image":  "images/recipes/sometimes-cooking-a-brisket-could-take-a-lot-of-time-and-wor.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Sometimes cooking a brisket could take a lot of time and work. Now comes the low and slow Beef Chuck. \n \nIngredients \u0026 Recipe\n3-4 pounds chuck roast, cut in half or you can use chuck steak\nSea Salt\nFresh Ground Pepper\n1/2 stick butter\n\n1. Season beef chuck with salt and pepper. \n2. Set smoker to 225\n3. Add meat and cook until internal temperature reaches 160. (Use a meat thermometer to help with timing and temp)\n4. Remove from grill, add butter, and tightly wrap with foil. \n5. Add back to grill and cook until internal temp reached 203. Start probing the roast to check for tenderness. The Probe Thermometer should go into the meat with very little tension. If the meat still seems tough just continue cooking.\n6. Remove from grill and let it rest for about 30 minutes. (DO NOT OPEN FOIL)\n7. Slice and serve. \n\n ————————————————————————\n#traegergrills #homecooking #yum #homecooking #thermoworks #thermopro #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #btcooks #sdhomecook #beefchuck #smokedchuckroast #smokedmeat #smoketube #smoker #selftaught #poormansbrisket",
    "description":  "Sometimes cooking a brisket could take a lot of time and work.",
    "likes":  53,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3-4 pounds chuck roast, cut in half or you can use chuck steak",
                                               "Sea Salt",
                                               "Fresh Ground Pepper",
                                               "1/2 stick butter"
                                           ]
                             }
                         ],
    "steps":  [
                  "Season beef chuck with salt and pepper.",
                  "Set smoker to 225",
                  "Add meat and cook until internal temperature reaches 160. (Use a meat thermometer to help with timing and temp)",
                  "Remove from grill, add butter, and tightly wrap with foil.",
                  "Add back to grill and cook until internal temp reached 203. Start probing the roast to check for tenderness. The Probe Thermometer should go into the meat with very little tension. If the meat still seems tough just continue cooking.",
                  "Remove from grill and let it rest for about 30 minutes. (DO NOT OPEN FOIL)",
                  "Slice and serve.",
                  ""
              ]
},
{
    "id":  "jangjorim-bibimbap-a-popular-korean-side-dish-that-consists",
    "title":  "Jangjorim Bibimbap, a popular Korean side dish that consists of meat that has",
    "date":  "2021-09-23",
    "category":  "Other",
    "image":  "images/recipes/jangjorim-bibimbap-a-popular-korean-side-dish-that-consists.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Jangjorim Bibimbap, a popular Korean side dish that consists of meat that has been flavored and reduced in a sweet and salty soy sauce base. All served over rice and a slice of butter. \nIngredients \u0026 Recipe: \nSoup Base\n2 pounds beef chuck\n6 cups of water\u20281/2 medium onion\n2 scallions, white part only and save the rest for garnish\u20281 Korean radish or daikon, cut into big chunks\nAll cloves from 1 garlic, peeled\n1 knob of ginger, sliced into 1/3. \n1 teaspoon black pepper corn\n\nSauce ingredients\n6 tablespoons soy sauce\n2 tablespoons dark soy sauce\n3 tablespoons sugar\n3 tablespoons rice wine or mirin\n10 to 12 Shishito peppers, puncture holes\n6 pieces or 1/2 cup of sliced shiitake mushrooms\n1 small piece dried kelp \u2028\u2028Optional: 6 hard boiled eggs, peeled\n\n1. Cut the beef into large cubes. \n2. In a medium pot, bring 6 cups of water to a boil and add beef to cook for 5 minutes. \n3. Drain water and rinse beef to remove scum to provide a cleaner and clearer broth. \n4. In a medium sauce pot, bring 6 cups of water to a boil. \n5. Add the meat and the rest of the soup base ingredients. Cook for about 1 hour or until meat is tender and soft.\n6. Remove the meat and strain the cooking liquid into a large bowl, and then add 2-3 cups of the liquid back to the pot.\n7. Add the meat, sauce ingredients, and optional eggs to the pot. Bring it to a boil over medium heat and cook for another 20 minutes. \n8. Shred beef and serve over rice, adding pieces of shishito peppers, shiitake mushrooms, and slice of butter. \n9. Drizzle some sauce over entire bowl and serve with some chopped up scallions. \u2028\n ————————————————————————\n#yummy #instagood #foodporn #sweet #fresh #tasty #delish #delicious #eating #foodpics #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #jangjorim #bibimbap #koreanfood #rice #beef #shishitopeppers #eggs #meatporn #greens",
    "description":  "Jangjorim Bibimbap, a popular Korean side dish that consists of meat that has",
    "likes":  50,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Soup Base",
                                               "2 pounds beef chuck",
                                               "6 cups of water 1/2 medium onion",
                                               "2 scallions, white part only and save the rest for garnish 1 Korean radish or daikon, cut into big chunks",
                                               "All cloves from 1 garlic, peeled",
                                               "1 knob of ginger, sliced into 1/3.",
                                               "1 teaspoon black pepper corn"
                                           ]
                             },
                             {
                                 "heading":  "Sauce ingredients",
                                 "items":  [
                                               "6 tablespoons soy sauce",
                                               "2 tablespoons dark soy sauce",
                                               "3 tablespoons sugar",
                                               "3 tablespoons rice wine or mirin",
                                               "10 to 12 Shishito peppers, puncture holes",
                                               "6 pieces or 1/2 cup of sliced shiitake mushrooms",
                                               "1 small piece dried kelp Optional: 6 hard boiled eggs, peeled"
                                           ]
                             }
                         ],
    "steps":  [
                  "Cut the beef into large cubes.",
                  "In a medium pot, bring 6 cups of water to a boil and add beef to cook for 5 minutes.",
                  "Drain water and rinse beef to remove scum to provide a cleaner and clearer broth.",
                  "In a medium sauce pot, bring 6 cups of water to a boil.",
                  "Add the meat and the rest of the soup base ingredients. Cook for about 1 hour or until meat is tender and soft.",
                  "Remove the meat and strain the cooking liquid into a large bowl, and then add 2-3 cups of the liquid back to the pot.",
                  "Add the meat, sauce ingredients, and optional eggs to the pot. Bring it to a boil over medium heat and cook for another 20 minutes.",
                  "Shred beef and serve over rice, adding pieces of shishito peppers, shiitake mushrooms, and slice of butter.",
                  "Drizzle some sauce over entire bowl and serve with some chopped up scallions.",
                  ""
              ]
},
{
    "id":  "beef-pad-see-ew-thai-stir-fried-noodles-a-popular-thai-dish",
    "title":  "Beef Pad See Ew (Thai Stir Fried Noodles), a popular Thai dish served with",
    "date":  "2021-09-16",
    "category":  "Pasta \u0026 Noodles",
    "image":  "images/recipes/beef-pad-see-ew-thai-stir-fried-noodles-a-popular-thai-dish.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Beef Pad See Ew (Thai Stir Fried Noodles), a popular Thai dish served with Chinese broccoli, carrots, eggs, and beef. \nIngredients \u0026 Recipe: \nSauce\n2 tbsp dark soy sauce\n2 tbsp oyster sauce\n2 tsp soy sauce\n2 tsp fish sauce\n1 tbsp sugar (any type)\n\nStir Fry\n1/2 lb thinly sliced flank beef\n2 tbsp soy sauce\n1 tsp cornstarch\n3 tbsp peanut or vegetable oil , separated\n2 cloves garlic cloves, very finely chopped\n2 large eggs\n4 stems Chinese broccoli\n1 lb fresh wide rice noodles\nFresh cilantro\n\n1. In a bowl, combine thinly sliced beef, 2 Tbsp soy sauce, cornstarch. Mix well and set aside.\n2. In another bowl, combine sauce ingredients and stir until sugar dissolves and set aside.\n3. On medium-high heat, add 1 tbsp of oil to a large pan. Add the beef and stir fry for 5 min. Once it\u0026#039;s done, transfer beef to a bowl. \n4. Add 1 tbsp of oil and throw in the minced garlic, carrots, and Chinese broccoli. Stir fry for about a 1 min then push the mixture to one side of the pan.\n5. Add 2 eggs and scramble. Combine eggs and veggies and mix well for about a minute then set aside. \n6. Add the remaining oil and throw in the rice noodles. Pour in the soy sauce mixture and stir fry for 2-3 minutes, until noodles loosen up. \n7. Toss in the carrot, Chinese broccoli, eggs, and cooked beef. Keep mixing until ingredients are combined. \n8. Sprinkle fresh cilantro (optional) and serve! ————————————————————————\n#yummy #instagood #photooftheday #wok #dinner #lunch #breakfast #fresh #tasty #delish #delicious #eating #foodpic #foodpics #eat #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #thaifood #padseeew #stirfry #noodles",
    "description":  "Beef Pad See Ew (Thai Stir Fried Noodles), a popular Thai dish served with",
    "likes":  86,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Sauce",
                                 "items":  [
                                               "2 tbsp dark soy sauce",
                                               "2 tbsp oyster sauce",
                                               "2 tsp soy sauce",
                                               "2 tsp fish sauce",
                                               "1 tbsp sugar (any type)",
                                               "Stir Fry",
                                               "1/2 lb thinly sliced flank beef",
                                               "2 tbsp soy sauce",
                                               "1 tsp cornstarch",
                                               "3 tbsp peanut or vegetable oil , separated",
                                               "2 cloves garlic cloves, very finely chopped",
                                               "2 large eggs",
                                               "4 stems Chinese broccoli",
                                               "1 lb fresh wide rice noodles"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a bowl, combine thinly sliced beef, 2 Tbsp soy sauce, cornstarch. Mix well and set aside.",
                  "In another bowl, combine sauce ingredients and stir until sugar dissolves and set aside.",
                  "On medium-high heat, add 1 tbsp of oil to a large pan. Add the beef and stir fry for 5 min. Once it\u0026#039;s done, transfer beef to a bowl.",
                  "Add 1 tbsp of oil and throw in the minced garlic, carrots, and Chinese broccoli. Stir fry for about a 1 min then push the mixture to one side of the pan.",
                  "Add 2 eggs and scramble. Combine eggs and veggies and mix well for about a minute then set aside.",
                  "Add the remaining oil and throw in the rice noodles. Pour in the soy sauce mixture and stir fry for 2-3 minutes, until noodles loosen up.",
                  "Toss in the carrot, Chinese broccoli, eggs, and cooked beef. Keep mixing until ingredients are combined.",
                  "Sprinkle fresh cilantro (optional) and serve! ————————————————————————"
              ]
},
{
    "id":  "chicken-katsudon-and-katsu",
    "title":  "Chicken Katsudon and Katsu.",
    "date":  "2021-09-15",
    "category":  "Poultry",
    "image":  "images/recipes/chicken-katsudon-and-katsu.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Chicken Katsudon and Katsu. Panko crusted chicken breast served with a savory Dashi sauce, onions, eggs, rice, and salad w/ mango vinaigrette. Ingredients \u0026 Recipe: \nChicken Katsu\n2 chicken breast cut in half\nkosher/sea salt\nfreshly ground black pepper\n1 cup all-purpose flour\n3 large egg (beaten)\n2 cups panko (Japanese breadcrumbs)\n1 cup canola oil for pan frying\n\nKatsudon Sauce\n½ onion (thinly sliced)\n3 large egg (beaten)\n3 stalks of green onions (chopped)\n2/3 cup dashi\n2 Tbsp sake\n2 Tbsp mirin\n2 Tbsp soy sauce\n1 ½ tsp sugar\n\nKatsu Sauce\n1/3 cup of ketchup\n1 tbsp soy sauce\n1 tbsp oyster sauce\n2 tbps brown sugar (add more if you want it sweeter)\n1 tbps Worcestershire sauce\n\n1. Flatten chicken with tenderizer. \n2. Lightly season the chicken with salt and pepper. Coat the chicken with flour, beaten eggs, and the panko in that order.\n3. Pan fry chicken until golden brown on each side. \n4. Set chicken aside to start making the katsudon sauce. \n5. In another frying pan, add sliced onions. \n6. Add the rest of ingredients for the katsudon sauce. Cover and bring it to a boil over medium heat. Once boiling, lower the heat to medium and cook the onion, covered for about 5 minutes. \n7. Add chicken katsu over the onion. Evenly distribute the beaten egg over the chicken katsu and onion. Cover to cook until the egg is set to your liking, roughly 1-2 minutes. \n8. Sprinkle green onions. \n9. Serve with steamed rice. \n\n ————————————————————————\n#yummy #instagood #comfortfood #sweet #dinner #lunch #breakfast #fresh #tasty #delish #delicious #eating #foodpic #foodpics #eat #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #katsu #katsudon #eggs #dashi",
    "description":  "Chicken Katsu 2 chicken breast cut in half kosher/sea salt freshly ground black pepper",
    "likes":  0,
    "intro":  [
                  "Chicken Katsu 2 chicken breast cut in half kosher/sea salt freshly ground black pepper"
              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "3 large egg (beaten)",
                                               "2 cups panko (Japanese breadcrumbs)",
                                               "1 cup canola oil for pan frying",
                                               "Katsudon Sauce",
                                               "onion (thinly sliced)",
                                               "3 large egg (beaten)",
                                               "3 stalks of green onions (chopped)",
                                               "2/3 cup dashi",
                                               "2 Tbsp sake",
                                               "2 Tbsp mirin",
                                               "2 Tbsp soy sauce",
                                               "1 ½ tsp sugar",
                                               "Katsu Sauce",
                                               "1/3 cup of ketchup",
                                               "1 tbsp soy sauce",
                                               "1 tbsp oyster sauce",
                                               "2 tbps brown sugar (add more if you want it sweeter)",
                                               "1 tbps Worcestershire sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Flatten chicken with tenderizer.",
                  "Lightly season the chicken with salt and pepper. Coat the chicken with flour, beaten eggs, and the panko in that order.",
                  "Pan fry chicken until golden brown on each side.",
                  "Set chicken aside to start making the katsudon sauce.",
                  "In another frying pan, add sliced onions.",
                  "Add the rest of ingredients for the katsudon sauce. Cover and bring it to a boil over medium heat. Once boiling, lower the heat to medium and cook the onion, covered for about 5 minutes.",
                  "Add chicken katsu over the onion. Evenly distribute the beaten egg over the chicken katsu and onion. Cover to cook until the egg is set to your liking, roughly 1-2 minutes.",
                  "Sprinkle green onions.",
                  "Serve with steamed rice.",
                  ""
              ]
},
{
    "id":  "spam-kimchi-fried-rice",
    "title":  "Spam \u0026 Kimchi Fried Rice.",
    "date":  "2021-09-11",
    "category":  "Sides \u0026 Snacks",
    "image":  "images/recipes/spam-kimchi-fried-rice.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Spam \u0026 Kimchi Fried Rice. Spam, eggs, sesame oil, garlic, jasmine rice, yellow \u0026 green onion, kimchi, chili flakes, and unsalted butter. \n\nIngredients \u0026 Recipe:\nDay old Jasmine rice or cook 2 cups of rice and cool down. \n2 eggs\n1 container Spam, diced in 1/2-inch cubes\n1 small yellow onion, diced\n2 cloves garlic, minced\n1/2 cup Kimchi, strained, thinly sliced, liquid reserved\n1 tablespoon unsalted butter\n1 bunch scallions, sliced in 1/4-inch pieces\n1/2 teaspoon Korean chili flakes (red pepper flake can be substituted)\n1 tablespoon sesame oil\n1 tablespoon olive oil\n2 tablespoons fish sauce\n\n1. Beat eggs and add 1 tbsp fish sauce\n\n2. Add 1 tablespoon of sesame oil in pan and scramble eggs. Set eggs aside after cooked. \n\n3. Cook spam until brown and crispy. \n\n4. Add olive oil as needed to sauté onions, then add garlic and cook until softened. \n\n5. Add chopped kimchi and cook for 1 minute. \n\n6. Add rice and butter and mix well. \n\n7. Add about 2-3 tablespoon of kimchi sauce\n\n8. Add half of the chopped scallions and save the other half as garnish\n\n9. Add cooked eggs and Add red chili flakes (optional), mix well. \n\n10. Taste and add salt as needed. Enjoy!\n ————————————————————————\n#yummy #instagood #photooftheday #sweet #dinner #lunch #breakfast #fresh #tasty #delish #delicious #eating #foodpic #foodpics #eat #hungry #foodgasm #homemadechef #homecooking #homecooks #sd #sdcook #btcooks #foodlover #easyrecipe #easyrecipes #koreanfriedrice #spam #kimchi #asianfood",
    "description":  "Spam \u0026 Kimchi Fried Rice.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  null,
                                 "items":  [
                                               "Day old Jasmine rice or cook 2 cups of rice and cool down.",
                                               "2 eggs",
                                               "1 container Spam, diced in 1/2-inch cubes",
                                               "1 small yellow onion, diced",
                                               "2 cloves garlic, minced",
                                               "1/2 cup Kimchi, strained, thinly sliced, liquid reserved",
                                               "1 tablespoon unsalted butter",
                                               "1 bunch scallions, sliced in 1/4-inch pieces",
                                               "1/2 teaspoon Korean chili flakes (red pepper flake can be substituted)",
                                               "1 tablespoon sesame oil",
                                               "1 tablespoon olive oil",
                                               "2 tablespoons fish sauce"
                                           ]
                             }
                         ],
    "steps":  [
                  "Beat eggs and add 1 tbsp fish sauce",
                  "Add 1 tablespoon of sesame oil in pan and scramble eggs. Set eggs aside after cooked.",
                  "Cook spam until brown and crispy.",
                  "Add olive oil as needed to sauté onions, then add garlic and cook until softened.",
                  "Add chopped kimchi and cook for 1 minute.",
                  "Add rice and butter and mix well.",
                  "Add about 2-3 tablespoon of kimchi sauce",
                  "Add half of the chopped scallions and save the other half as garnish",
                  "Add cooked eggs and Add red chili flakes (optional), mix well.",
                  "Taste and add salt as needed. Enjoy!",
                  ""
              ]
},
{
    "id":  "dr-pepper-jalape-o-beef-jerky",
    "title":  "Dr. Pepper Jalapeño Beef Jerky.",
    "date":  "2021-09-09",
    "category":  "Beef \u0026 Steak",
    "image":  "images/recipes/dr-pepper-jalape-o-beef-jerky.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Dr. Pepper Jalapeño Beef Jerky. Marinated top round beef with Dr. Pepper, Worcestershire, Onion Powder, Garlic Powder, Jalapeños, and bouillon. Smoked on the Traeger for about 4 hours. Ingredients \u0026 Recipe:\n3-4 pounds beef eye of round or London broil. Use meats that are lean with no fat. Thinly sliced against the grain\n\nMarinade:\n2 cups Dr. Pepper\n2 jalapeños, seeds removed and sliced\n2 Tbsp Beef or Chicken Bouillon\n1 Tbsp Worcestershire sauce\n2 tsp black pepper\n1 tsp garlic powder\n1 tsp onion powder\n\n1. In a medium saucepan, combine all of the ingredients for the marinade. Heat for about 10-15 minutes. Set aside and completely cool in fridge.\u2028\n2. Marinate the beef by adding the sliced beef to a large zip lock bag and pour in the marinade. Mix well and refrigerate for 48 hours for best taste. You can do overnight, but the longer the better. \u2028\n3. Set your smoker to 160 degrees or smoke settings and smoke for 3-4 hours checking that the meat is drying evenly. Meat is done when it is dry, bendable, but not soft. \n\n4. Remove meat from grill and place into a zip lock bag to add back some moisture back to the meat. \n\n5. Store in refrigerator and enjoy!!!————————————————————————\n#traegergrills #teamtraeger #homecooking #yum #homecooking #thermoworks #thermopro #bbq #lowandslow #grilling #yummy #backyardgrilling #fitfamily #Foodie #meatlover #instafood #grilllife #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #jerky #drpepper #drpepperbeefjerky #jalapeno #smoked #dryfood",
    "description":  "Dr. Pepper Jalapeño Beef Jerky.",
    "likes":  0,
    "intro":  [

              ],
    "ingredientGroups":  [
                             {
                                 "heading":  "Marinade",
                                 "items":  [
                                               "2 cups Dr. Pepper",
                                               "2 jalapeños, seeds removed and sliced",
                                               "2 Tbsp Beef or Chicken Bouillon",
                                               "1 Tbsp Worcestershire sauce",
                                               "2 tsp black pepper",
                                               "1 tsp garlic powder",
                                               "1 tsp onion powder"
                                           ]
                             }
                         ],
    "steps":  [
                  "In a medium saucepan, combine all of the ingredients for the marinade. Heat for about 10-15 minutes. Set aside and completely cool in fridge.",
                  "Marinate the beef by adding the sliced beef to a large zip lock bag and pour in the marinade. Mix well and refrigerate for 48 hours for best taste. You can do overnight, but the longer the better.",
                  "Set your smoker to 160 degrees or smoke settings and smoke for 3-4 hours checking that the meat is drying evenly. Meat is done when it is dry, bendable, but not soft.",
                  "Remove meat from grill and place into a zip lock bag to add back some moisture back to the meat.",
                  "Store in refrigerator and enjoy!!!————————————————————————"
              ]
},
{
    "id":  "air-fryer-buffalo-chicken-wings",
    "title":  "Air Fryer Buffalo Chicken Wings.",
    "date":  "2021-09-04",
    "category":  "Wings",
    "image":  "images/recipes/air-fryer-buffalo-chicken-wings.jpg",
    "instagramUrl":  "https://www.instagram.com/bt.cooks/",
    "caption":  "Air Fryer Buffalo Chicken Wings. Used Southside Hot sauce and added a couple tablespoon of butter. Tossed and served with a side of ranch. Ingredients \u0026 Recipe\n2-3 pounds of party chicken wings\nSalt and pepper\n1/2-1 stick of butter\n1/2 cup favorite Hot sauce \nRanch dressing\n\n1. Lightly season chicken with salt and pepper. \n2. Set air fryer to 360 degrees and cook chicken for 12 minutes. \n3. Flip chicken and cook for another 12 minutes. \n4. Set air fryer to 390 degrees and cook for another 5-6 minutes adding more time for extra crispy. \n5. Melt butter in a sauce pan and add about hot sauce. Adjust more or less to liking. \n6. Toss wings with hot sauce and serve with a side of ranch dressing (optional)\n————————————————————————\n#yum #homecooking #thermoworks #thermopro #yummy #fitfamily #Food #meatlover #instafood #homemadechef #sd #sdcook #btcooks #foodlover #protein #meatlover #foodporn #meatporn #tasty #igfood #followback #look #colorful #hotwings #wings #hotsauce #butter #bts #buffalowings #hungry #eggplantparmesan latenight",
    "description":  "2-3 pounds of party chicken wings Salt and pepper 1/2-1 stick of butter 1/2 cup favorite Hot sauce Ranch dressing",
    "likes":  40,
    "intro":  [
                  "2-3 pounds of party chicken wings Salt and pepper 1/2-1 stick of butter 1/2 cup favorite Hot sauce Ranch dressing"
              ],
    "ingredientGroups":  [

                         ],
    "steps":  [
                  "Set air fryer to 360 degrees and cook chicken for 12 minutes.",
                  "Flip chicken and cook for another 12 minutes.",
                  "Set air fryer to 390 degrees and cook for another 5-6 minutes adding more time for extra crispy.",
                  "Melt butter in a sauce pan and add about hot sauce. Adjust more or less to liking.",
                  "Toss wings with hot sauce and serve with a side of ranch dressing (optional)",
                  ""
              ]
}
];