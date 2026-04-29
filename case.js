const RARITIES = {
  freshman: { label: 'Freshman', color: '#d7e3ff', accent: '#3259a8', weight: 67, templateImage: 'Images/templates/FreshmanCardTemplate.png' },
  sophomore: { label: 'Sophomore', color: '#d9f7c8', accent: '#3b7a2f', weight: 17.8, templateImage: 'Images/templates/SophomoreCardTemplate.png' },
  junior: { label: 'Junior', color: '#b9d4ff', accent: '#1742b8', weight: 12, templateImage: 'Images/templates/JuniorCardTemplate.png' },
  senior: { label: 'Senior', color: '#ffd3a9', accent: '#b34d13', weight: 3, templateImage: 'Images/templates/SeniorCardTemplate.png' },
  graduated: { label: 'Graduate', color: '#8c52ff', accent: '#cb6ce6', weight: 0.1, templateImage: 'Images/templates/Super-SeniorCardTemplate.png' },
  superSenior: { label: 'Super-Senior', color: '#ffe48c', accent: '#8b5e00', weight: 0.2, templateImage: 'Images/templates/Super-SeniorCardTemplate.png' }, 
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior', 'graduated'];

const RARITY_ALIASES = {
  sophmore: 'sophomore',
  sophmoree: 'sophomore',
  super_senior: 'superSenior',
  supersenior: 'superSenior',
  graduate: 'graduated',
  graduated: 'graduated',
  Graduated: 'graduated',
};

const GRADUATE_WILDCARDS = [
  { name: 'Cal Raleigh', rarity: 'graduated', attack: 3200, defense: 3700, description: 'Graduate wildcard.' },
  { name: 'Linus Torvalds', rarity: 'graduated', attack: 3640, defense: 3800, description: 'Graduate wildcard.' },
  { name: 'Teddy Roosevelt', rarity: 'graduated', attack: 4000, defense: 3800, description: 'Graduate wildcard.' },
  { name: 'Anne Frank', rarity: 'graduated', attack: 4000, defense: 4000, description: 'Graduate wildcard.' },
];

const SUPER_SENIOR_FALLBACKS = [
  { name: 'Walk em Down Gardner', rarity: 'superSenior', attack: 1960, defense: 1600, description: 'Super-Senior wildcard.' },
  { name: 'Coworkers', rarity: 'superSenior', attack: 1760, defense: 1600, description: 'Super-Senior wildcard.' },
];

const CARD_OVERRIDES = {
  // Freshman
  ab: { attack: 240, defense: 370, image: 'images/ABCard.png', description: 'No one knows what it stands for. Could possibly stand for A B-Junior.' },
  alexfrieders: { attack: 320, defense: 480, image: 'images/AlexCard.png', description: 'Freaky ahh junior.' },
  annamoore: { attack: 350, defense: 350, image: 'images/AnnaCard.png', description: 'Boy scout, knows some Japanese. Junior.' },
  beatricekovalik: { attack: 230, defense: 280, image: 'images/BeatriceCard.png', description: 'Ballet ahh junior.' },
  beatrice: { attack: 230, defense: 280, image: 'images/BeatriceCard.png', description: 'Ballet ahh junior.' },
  christianinglis: { attack: 340, defense: 320, image: 'images/ChristianCard.png', description: 'Short. Also a junior.' },
  christian: { attack: 340, defense: 320, image: 'images/ChristianCard.png', description: 'Short. Also a junior.' },
  darsh: { attack: 470, defense: 350, image: 'images/DarshCard.png', description: 'Leader of the Vending Machine Scandal of 24. Junior.' },
  emiliafisher: { attack: 270, defense: 370, image: 'images/EmilaCard.png', description: 'Duck. Junior.' },
  erristhompson: { attack: 280, defense: 330, image: 'images/ErisCard.png', description: 'Cooler twin. Also a junior.' },
  eristhompson: { attack: 280, defense: 330, image: 'images/ErisCard.png', description: 'Cooler twin. Also a junior.' },
  genesis: { attack: 440, defense: 420, image: 'images/GenesisCard.png', description: 'Elnatan\'s girlfriend, yet is still the man of the house. Junior.' },
  henryshort: { attack: 280, defense: 310, image: 'images/HenryCard.png', description: 'Short junior, wakeID is heshort.' },
  iniya: { attack: 210, defense: 260, image: 'images/IniyaCard.png', description: 'Was once a Hufflepuff, is now a Ravenclaw. Junior.' },
  iremide: { attack: 290, defense: 430, image: 'images/IremideCard.png', description: 'Really good at soccer. Not so much at basketball, though. Junior.' },
  jacobhartzell: { attack: 310, defense: 400, image: 'images/JacobCard.png', description: 'Jacob Hartzell is a cutie patooty junior.' },
  jalenwalker: { attack: 280, defense: 390, image: 'images/JalenCard.png', description: 'Green Hope Color Guard captain, middle name would\'ve been Sky if this world was right. Junior.' },
  jalen: { attack: 280, defense: 390, image: 'images/JalenCard.png', description: 'Green Hope Color Guard captain, middle name would\'ve been Sky if this world was right. Junior.' },
  jameybrandon: { attack: 410, defense: 370, image: 'images/JameyCard.png', description: 'THE Dragon James himself, both his brain cells are in a fierce battle for top 10. Junior.' },
  logain: { attack: 220, defense: 330, image: 'images/LogainCard.png', description: 'THE BioTech student. Junior.' },
  nicholasfoles: { attack: 420, defense: 460, image: 'images/NicholasCard.png', description: 'THE PRESIDENT, El Presidente himself, Lebron\'s idol, cutie patooty. Also a junior.' },
  noahcouch: { attack: 210, defense: 360, image: 'images/NoahCard.png', description: 'The boy who couched, once had an afro. Junior.' },
  rafaltoborek: { attack: 380, defense: 380, image: 'images/RafalCard.png', description: 'Polish, Mexican, left-handed. Also a junior.' },
  rafaltoberek: { attack: 380, defense: 380, image: 'images/RafalCard.png', description: 'Polish, Mexican, left-handed. Also a junior.' },
  regthiagoramos: { attack: 370, defense: 400, image: 'images/RegCard.png', description: 'Aura. Junior.' },
  regramos: { attack: 370, defense: 400, image: 'images/RegCard.png', description: 'Aura. Junior.' },
  ryanmccoolschutte: { attack: 390, defense: 480, image: 'images/RyanCard.png', description: 'Nerdy junior and cooler twin.' },
  ryanshutte: { attack: 390, defense: 480, image: 'images/RyanCard.png', description: 'Nerdy junior and cooler twin.' },
  serenarogers: { attack: 270, defense: 500, image: 'images/SerenaCard.png', description: 'Owns a 3DS and plays Luigi\'s Mansion. Junior.' },
  serena: { attack: 270, defense: 500, image: 'images/SerenaCard.png', description: 'Owns a 3DS and plays Luigi\'s Mansion. Junior.' },
  treyvonpearson: { attack: 330, defense: 310, image: 'images/TreyvonCard.png', description: 'If you need data stored he\'s your guy. Junior.' },
  waketech: { attack: 450, defense: 450, image: 'images/WakeTechCard.png', description: 'Nick threw up 8 times while trying to build this card. IT department is horrible.' },

  // Sophomore
  annasplit: { attack: 620, defense: 420, image: 'images/AnnaSplitCard.png', description: 'Made like a banana and splitted.' },
  chandlerthompson: { attack: 690, defense: 560, image: 'images/ChandlerThompsonCard.png', description: 'Charlie\'s boyfriend, yet still the housewife. Junior.' },
  chandler: { attack: 690, defense: 560, image: 'images/ChandlerThompsonCard.png', description: 'Charlie\'s boyfriend, yet still the housewife. Junior.' },
  charliesanchez: { attack: 710, defense: 520, image: 'images/CharlieSanchezCard.png', description: 'Wesker. Junior.' },
  charlie: { attack: 710, defense: 520, image: 'images/CharlieSanchezCard.png', description: 'Wesker. Junior.' },
  dudeguys: { attack: 580, defense: 630, image: 'images/DudeGuysCard.png', description: 'Just some dudes. And guys. On Serena\'s hoodie.' },
  gatorademachinert1: { attack: 700, defense: 680, image: 'images/GatoradeMachineRT1Card.png', description: 'Is called the Gatorade Machine yet does not possess any Gatorade.' },
  grandlibraryrt1: { attack: 520, defense: 740, image: 'images/GrandLibraryRT1Card.png', description: 'Not really a library, more like a bunch of chairs in a room.' },
  holesinwall: { attack: 490, defense: 520, image: 'images/WallHolesCard.png', description: 'Holes in the wall. Potentially made for sitting in.' },
  wallholes: { attack: 490, defense: 520, image: 'images/WallHolesCard.png', description: 'Holes in the wall. Potentially made for sitting in.' },
  josephjameslennertiii: { attack: 720, defense: 780, image: 'images/JosephLennertCard.png', description: 'Joseph. Creator of the Silly Guys.' },
  josephlennert: { attack: 720, defense: 780, image: 'images/JosephLennertCard.png', description: 'Joseph. Creator of the Silly Guys.' },
  mhscampus: { attack: 620, defense: 800, image: 'images/MHSCampusCard.png', description: 'The campus of the underclassmen.' },
  gymnasium: { attack: 600, defense: 580, image: 'images/MHSGymCard.png', description: 'The gymnasium of MHS, where dreams are made and dodgeballs are thrown.' },
  mhsgym: { attack: 600, defense: 580, image: 'images/MHSGymCard.png', description: 'The gymnasium of MHS, where dreams are made and dodgeballs are thrown.' },
  theater: { attack: 650, defense: 690, image: 'images/MHSTheaterCard.png', description: 'Home to many lost children, led by their cruel dictator, Mrs. Kaulfuss.' },
  mhstheatre: { attack: 650, defense: 690, image: 'images/MHSTheaterCard.png', description: 'Home to many lost children, led by their cruel dictator, Mrs. Kaulfuss.' },
  poppimachine: { attack: 490, defense: 700, image: 'images/PoppiVendingRT1.png', description: 'Everyone loves Poppi, right? Guys?' },
  poppivendingrt1: { attack: 490, defense: 700, image: 'images/PoppiVendingRT1.png', description: 'Everyone loves Poppi, right? Guys?' },
  sidewaysjamey: { attack: 680, defense: 640, image: 'images/SidewaysJameyCard.png', description: 'Jamey, but sideways.' },
  sustenance: { attack: 760, defense: 460, image: 'images/SustenanceCard.png', description: 'Food is important. I think, at least. I\'m like 80% sure.' },
  tristanowen: { attack: 670, defense: 730, image: 'images/TristanOwenCard.png', description: 'Built like a microphone. Junior.' },
  uno: { attack: 800, defense: 310, image: 'images/UnoCard.png', description: 'The world-famous game that has split friendships, nations, and worlds.' },

  // Junior
  aurafarming: { attack: 1020, defense: 900, image: 'images/AuraFarmingCard.png', description: 'We don\'t know where he got that umbrella. Or how he got on the table.' },
  babyprez: { attack: 960, defense: 650, image: 'images/BabyPrezCard.png', description: 'THE KID PRESIDENT, always been a certified OG. Not a junior.' },
  ethangardner: { attack: 720, defense: 960, image: 'images/EthanGardnerCard.png', description: 'Ethan Gardner. Potentially Mr. Gardner\'s long lost twin.' },
  gardnerpizza: { attack: 400, defense: 960, image: 'images/GardnerPizzaCard.png', description: 'The pizza as requested per Mr. Gardner.' },
  jameygeeked: { attack: 1010, defense: 860, image: 'images/JameyGeekedCard.png', description: 'Jamey straight geekin\' in the elevator.' },
  beatriceandjamey: { attack: 990, defense: 1030, image: 'images/BeatriceAndJameyCard.png', description: 'WE SAY YOU SHOULD WATCH ONE PIECE - Jamey.' },
  freshmanjamey: { attack: 1370, defense: 1190, image: 'images/FreshmanJameyCard.png', description: 'THE Dragon James himself, but when he was a freshman.' },
  jojos: { attack: 890, defense: 920, image: 'images/JojoCard.png', description: 'Jamey thinks he\'s a JoJo character.' },
  lowpolyjamey: { attack: 1060, defense: 840, image: 'images/LowPolyJameyCard.png', description: 'From Joseph\'s Junior Vice President campaign video.' },
  mrgross: { attack: 1030, defense: 980, image: 'images/MrGrossCard.png', description: 'What could he be thinking about?' },
  mrswhittington: { attack: 1040, defense: 1000, image: 'images/MrsWhittingtonCard.png', description: 'The OGs remember Earth Environmental Science class with her.' },
  sami: { attack: 850, defense: 670, image: 'images/SamiCard.png', description: 'Commonly confused for Samuel L. Jackson. Rotated 180 degrees for dramatic effect.' },
  sillyguy: { attack: 1070, defense: 720, image: 'images/SillyGuyCard.png', description: 'Some silly guy. Created by Joseph.' },

  // Senior
  academicrigor: { attack: 1420, defense: 1340, image: 'images/AcademicRigorCard.png', description: 'Look how dedicated and studious this man is.' },
  bestbuds: { attack: 1200, defense: 1260, image: 'images/2BestBudsCard.png', description: 'Despite differences, they still become the bestest of buds.' },
  '2bestbuds': { attack: 1200, defense: 1260, image: 'images/2BestBudsCard.png', description: 'Despite differences, they still become the bestest of buds.' },
  brotherlylove: { attack: 1380, defense: 1410, image: 'images/BrotherlyLoveCard.png', description: 'Blood siblings showing their passionate love for each other.' },
  gardnerwhite: { attack: 1350, defense: 1350, image: 'images/GardnerWhiteCard.png', description: 'Gardnuh, we need to code.' },
  pleasejameyineedthis: { attack: 1480, defense: 1320, image: 'images/PleaseJameyCard.png', description: 'PLEASE JAMEY I NEEEEEEEEEEEED THIS.' },
  thetunnelgang: { attack: 1230, defense: 1490, image: 'images/TunnelGangCard.png', description: 'Stand by Me but through the sewer.' },
  zest: { attack: 1340, defense: 1260, image: 'images/ZestCard.png', description: 'Normal Jamey.' },

  // Super-Senior
  coworkers: { attack: 1760, defense: 1600, image: 'images/CoworkersCard.png', description: 'Nick did not consent to this photo. Daniel laughed.' },
  groupbonding: { attack: 1620, defense: 1840, image: 'images/GroupBondingCard.png', description: 'Stand by Me but searching for a dead car.' },
  pleasemrgardnerineedthis: { attack: 1890, defense: 1740, image: 'images/GardnerNeedThisCard.png', description: 'Why you trying not to laugh Mr. Gardner, that is mad disrespectful.' },
  walkemdowngardner: { attack: 1960, defense: 1600, image: 'images/WalkEmDownGardnerCard.png', description: 'Big Gardner does not play. You mess with him, you mess with the gang.' },

  // Graduate
  calraleigh: { attack: 3200, defense: 3700, image: 'images/CalRaleighCard.png', description: 'Graduate card.' },
  hellenkeller: { attack: 3826, defense: 3100, image: 'images/HelenKellerCard.png', description: 'Graduate card.' },
  helenkeller: { attack: 3826, defense: 3100, image: 'images/HelenKellerCard.png', description: 'Graduate card.' },
  mrprez: { attack: 3020, defense: 3800, image: 'images/MrPrezCard.png', description: 'Graduate card.' },
  linustorvalds: { attack: 3640, defense: 3800, image: 'images/LinusTorvaldsCard.png', description: 'Graduate card.' },
  kanyewest: { attack: 3900, defense: 3400, image: 'images/KanyeWestCard.png', description: 'Graduate card.' },
  johnhelldiver: { attack: 3300, defense: 4000, image: 'images/JohnHelldiverCard.png', description: 'Graduate card.' },
  scottralls: { attack: 3278, defense: 3700, image: 'images/ScottRallsCard.png', description: 'Graduate card.' },
  teddyroosevelt: { attack: 4000, defense: 3800, image: 'images/TeddyRooseveltCard.png', description: 'Graduate card.' },
  edwinbooth: { attack: 3300, defense: 3600, image: 'images/EdwinBoothCard.png', description: 'Graduate card.' },
  annefrank: { attack: 4000, defense: 4000, image: 'images/AnneFrankCard.png', description: 'The rarest card in the game, the holy grail, Anne Frank herself.' },
};

const CARD_RARITY_OVERRIDES = {
  // Freshman
  ab: 'freshman',
  alexfrieders: 'freshman',
  annamoore: 'freshman',
  beatricekovalik: 'freshman',
  beatrice: 'freshman',
  christianinglis: 'freshman',
  christian: 'freshman',
  darsh: 'freshman',
  emiliafisher: 'freshman',
  eristhompson: 'freshman',
  genesis: 'freshman',
  henryshort: 'freshman',
  iniya: 'freshman',
  iremide: 'freshman',
  jacobhartzell: 'freshman',
  jalen: 'freshman',
  jalenwalker: 'freshman',
  jameybrandon: 'freshman',
  logain: 'freshman',
  nicholasfoles: 'freshman',
  noahcouch: 'freshman',
  rafaltoborek: 'freshman',
  rafaltoberek: 'freshman',
  regthiagoramos: 'freshman',
  regramos: 'freshman',
  ryanshutte: 'freshman',
  ryanmccoolschutte: 'freshman',
  serena: 'freshman',
  serenarogers: 'freshman',
  treyvonpearson: 'freshman',
  waketech: 'freshman',

  // Sophomore
  annasplit: 'sophomore',
  chandler: 'sophomore',
  chandlerthompson: 'sophomore',
  charlie: 'sophomore',
  charliesanchez: 'sophomore',
  dudeguys: 'sophomore',
  gatorademachinert1: 'sophomore',
  grandlibraryrt1: 'sophomore',
  holesinwall: 'sophomore',
  wallholes: 'sophomore',
  josephjameslennertiii: 'sophomore',
  josephlennert: 'sophomore',
  mhscampus: 'sophomore',
  gymnasium: 'sophomore',
  mhsgym: 'sophomore',
  theater: 'sophomore',
  mhstheatre: 'sophomore',
  poppimachine: 'sophomore',
  poppivendingrt1: 'sophomore',
  sidewaysjamey: 'sophomore',
  sustenance: 'sophomore',
  tristanowen: 'sophomore',
  uno: 'sophomore',

  // Junior
  aurafarming: 'junior',
  babyprez: 'junior',
  ethangardner: 'junior',
  gardnerpizza: 'junior',
  jameygeeked: 'junior',
  beatriceandjamey: 'junior',
  jojos: 'junior',
  lowpolyjamey: 'junior',
  mrgross: 'junior',
  mrswhittington: 'junior',
  sami: 'junior',
  sillyguy: 'junior',

  // Senior
  academicrigor: 'senior',
  bestbuds: 'senior',
  '2bestbuds': 'senior',
  brotherlylove: 'senior',
  freshmanjamey: 'senior',
  gardnerwhite: 'senior',
  pleasejameyineedthis: 'senior',
  thetunnelgang: 'senior',
  zest: 'senior',

  // Super-Senior
  coworkers: 'superSenior',
  groupbonding: 'superSenior',
  pleasemrgardnerineedthis: 'superSenior',
  walkemdowngardner: 'superSenior',

  // Graduate
  calraleigh: 'graduated',
  hellenkeller: 'graduated',
  helenkeller: 'graduated',
  mrprez: 'graduated',
  linustorvalds: 'graduated',
  kanyewest: 'graduated',
  johnhelldiver: 'graduated',
  scottralls: 'graduated',
  teddyroosevelt: 'graduated',
  edwinbooth: 'graduated',
  annefrank: 'graduated',
};

function normalizeCardKey(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function applyCardOverrides(item) {
  const cardKey = normalizeCardKey(item.name);
  const override = CARD_OVERRIDES[cardKey];
  const canonicalRarity = CARD_RARITY_OVERRIDES[cardKey];
  if (!override) {
    return canonicalRarity ? { ...item, rarity: canonicalRarity } : item;
  }

  return {
    ...item,
    rarity: canonicalRarity || item.rarity,
    attack: override.attack,
    defense: override.defense,
    image: override.image || item.image,
    description: override.description || item.description,
  };
}

function enforceCaseRules(rawCases) {
  return rawCases.map((caseData) => ({
    ...caseData,
    items: caseData.items.map((item) => {
      const rarity = RARITY_ALIASES[item.rarity] || item.rarity;
      return applyCardOverrides({ ...item, rarity });
    }),
  }));
}

const CASES = enforceCaseRules([
  {
    name: 'MHS Case',
    price: 12,
    image: 'images/mhsCrate.png',
    flavor: 'Youngings',
    items: [
      { name: 'AB', rarity: 'freshman' },
      { name: 'Beatrice Kovalik', rarity: 'freshman' },
      { name: 'Emilia Fisher', rarity: 'freshman' },
      { name: 'Henry Short', rarity: 'freshman' },
      { name: 'Jacob Hartzell', rarity: 'freshman' },
      { name: 'Logain', rarity: 'freshman' },
      { name: 'Rafal Toborek', rarity: 'freshman' },
      { name: 'Serena', rarity: 'freshman' },
      { name: 'Anna Split', rarity: 'sophomore' },
      { name: 'Dude Guys', rarity: 'sophomore' },
      { name: 'Wallholes', rarity: 'sophomore' },
      { name: 'Gymnasium', rarity: 'sophomore' },
      { name: 'Jamey Sideways', rarity: 'sophomore' },
      { name: 'Uno', rarity: 'sophomore' },
      { name: 'Aura Farming', rarity: 'junior' },
      { name: 'Gardner Pizza', rarity: 'junior' },
      { name: 'JoJo\'s', rarity: 'junior' },
      { name: 'Mrs. Whittington', rarity: 'junior' },
      { name: 'Academic Rigor', rarity: 'senior' },
      { name: 'Freshman Jamey', rarity: 'senior' },
      { name: 'The Tunnel Gang', rarity: 'senior' },
      { name: 'Coworkers', rarity: 'superSenior' },
      { name: 'Walk em Down Gardner', rarity: 'superSenior' },
    ],
  },
  {
    name: 'RT2 Case',
    price: 24,
    image: 'images/rt2Crate.png',
    flavor: 'The Main Attraction, RT2 events, folks, and gatherings',
    items: [
      { name: 'Alex Frieders', rarity: 'freshman' },
      { name: 'Christian', rarity: 'freshman' },
      { name: 'Eris Thompson', rarity: 'freshman' },
      { name: 'Iniya', rarity: 'freshman' },
      { name: 'Jalen', rarity: 'freshman' },
      { name: 'Nicholas Foles', rarity: 'freshman' },
      { name: 'Reg Thiago-Ramos', rarity: 'freshman' },
      { name: 'Treyvon Pearson', rarity: 'freshman' },
      { name: 'Chandler', rarity: 'sophomore' },
      { name: 'Gatorade Machine RT1', rarity: 'sophomore' },
      { name: 'JosephJamesLennertIII', rarity: 'sophomore' },
      { name: 'Theater', rarity: 'sophomore' },
      { name: 'Sustenance', rarity: 'sophomore' },
      { name: 'Baby Prez', rarity: 'junior' },
      { name: 'Jamey Geeked', rarity: 'junior' },
      { name: 'Low Poly Jamey', rarity: 'junior' },
      { name: 'Sami', rarity: 'junior' },
      { name: '2 Best Buds', rarity: 'senior' },
      { name: 'Gardner White', rarity: 'senior' },
      { name: 'Zest', rarity: 'senior' },
      { name: 'Group Bonding', rarity: 'superSenior' },
    ],
  },
  {
    name: 'RT1 Case',
    price: 40,
    image: 'images/rt1Crate.png',
    flavor: 'RT1 focused. May the odds be with you.  ',
    items: [
      { name: 'Anna Moore', rarity: 'freshman' },
      { name: 'Darsh', rarity: 'freshman' },
      { name: 'Genesis', rarity: 'freshman' },
      { name: 'Iremide', rarity: 'freshman' },
      { name: 'Jamey Brandon', rarity: 'freshman' },
      { name: 'Noah Couch', rarity: 'freshman' },
      { name: 'Ryan Shutte', rarity: 'freshman' },
      { name: 'Wake Tech', rarity: 'freshman' },
      { name: 'Charlie', rarity: 'sophomore' },
      { name: 'Grand Library RT1', rarity: 'sophomore' },
      { name: 'MHS Campus', rarity: 'sophomore' },
      { name: 'Poppi Machine', rarity: 'sophomore' },
      { name: 'Tristan Owen', rarity: 'sophomore' },
      { name: 'Ethan Gardner', rarity: 'junior' },
      { name: 'Beatrice And Jamey', rarity: 'junior' },
      { name: 'Mr. Gross', rarity: 'junior' },
      { name: 'Silly Guy', rarity: 'junior' },
      { name: 'Brotherly Love', rarity: 'senior' },
      { name: 'Please Jamey I Need This', rarity: 'senior' },
      { name: 'Please Mr. Gardner I Need This', rarity: 'superSenior' },
    ],
  },
  {
    name: 'Wake Tech Case',
    price: 250,
    image: 'images/WakeTechCrate (1).png',
    flavor: 'A case of Wake Tech... A secret card may be held',
    items: [
      { name: 'AB', rarity: 'freshman' },
      { name: 'Alex Frieders', rarity: 'freshman' },
      { name: 'Anna Moore', rarity: 'freshman' },
      { name: 'Beatrice Kovalik', rarity: 'freshman' },
      { name: 'Christian', rarity: 'freshman' },
      { name: 'Darsh', rarity: 'freshman' },
      { name: 'Emilia Fisher', rarity: 'freshman' },
      { name: 'Eris Thompson', rarity: 'freshman' },
      { name: 'Genesis', rarity: 'freshman' },
      { name: 'Henry Short', rarity: 'freshman' },
      { name: 'Iniya', rarity: 'freshman' },
      { name: 'Iremide', rarity: 'freshman' },
      { name: 'Jacob Hartzell', rarity: 'freshman' },
      { name: 'Jalen', rarity: 'freshman' },
      { name: 'Jamey Brandon', rarity: 'freshman' },
      { name: 'Logain', rarity: 'freshman' },
      { name: 'Nicholas Foles', rarity: 'freshman' },
      { name: 'Noah Couch', rarity: 'freshman' },
      { name: 'Rafal Toborek', rarity: 'freshman' },
      { name: 'Reg Thiago-Ramos', rarity: 'freshman' },
      { name: 'Ryan Shutte', rarity: 'freshman' },
      { name: 'Serena', rarity: 'freshman' },
      { name: 'Treyvon Pearson', rarity: 'freshman' },
      { name: 'Wake Tech', rarity: 'freshman' },
      { name: 'Cal Raleigh', rarity: 'graduated' },
      { name: 'Hellen Keller', rarity: 'graduated' },
      { name: 'Mr. Prez', rarity: 'graduated' },
      { name: 'Linus Torvalds', rarity: 'graduated' },
      { name: 'Kanye West', rarity: 'graduated' },
      { name: 'John Helldiver', rarity: 'graduated' },
      { name: 'Scott Ralls', rarity: 'graduated' },
      { name: 'Teddy Roosevelt', rarity: 'graduated' },
      { name: 'Edwin Booth', rarity: 'graduated' },
      { name: 'Anne Frank', rarity: 'graduated' },
    ],
  },
  
]);

let selectedCase = null;
let isSpinning = false;

const balanceEl = document.getElementById('balance');
const inventoryCountEl = document.getElementById('inventoryCount');
const incomeRateEl = document.getElementById('incomeRate');
const casesEl = document.getElementById('cases');
const openerSection = document.getElementById('openerSection');
const selectedNameEl = document.getElementById('selectedCaseName');
const selectedFlavorEl = document.getElementById('selectedCaseFlavor');
const selectedPriceEl = document.getElementById('selectedCasePrice');
const dropRatesEl = document.getElementById('dropRates');
const statusMessageEl = document.getElementById('statusMessage');
const rouletteStrip = document.getElementById('rouletteStrip');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');
const wonItemEl = document.getElementById('wonItem');
const wonItemCard = document.getElementById('wonItemCard');

function normalizeRarity(rarity) {
  const normalized = RARITY_ALIASES[rarity] || rarity;
  return normalized in RARITIES ? normalized : 'freshman';
}

function enrichCard(card) {
  const rarityKey = normalizeRarity(card.rarityKey || card.rarity);

  return {
    ...card,
    rarityKey,
    rarity: card.rarity || rarityKey,
    rarityLabel: RARITIES[rarityKey].label,
  };
}

function formatPP(value) {
  return Number(value).toFixed(2);
}

function initialsFromName(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function setStatus(message) {
  statusMessageEl.textContent = message;
}

function getRarityRank(rarityKey) {
  return RARITY_ORDER.indexOf(rarityKey);
}

function renderCardMarkup(card, options = {}) {
  const safeCard = enrichCard(card);
  const compactClass = options.compact ? ' compact' : '';

  return `
    <article class="display-card rarity-${safeCard.rarityKey}${compactClass}">
      <div class="card-badge">
        <span>${initialsFromName(safeCard.name)}</span>
      </div>
      <div class="card-copy">
        <p class="card-rarity">${safeCard.rarityLabel}</p>
        <h4>${safeCard.name}</h4>
        <p class="card-description">${safeCard.description || 'No description yet.'}</p>
        <div class="card-stats">
          <span>ATK ${safeCard.attack}</span>
          <span>DEF ${safeCard.defense}</span>
        </div>
    </article>
  `;
}

function renderRouletteItemMarkup(card) {
  const safeCard = enrichCard(card);
  const templateImg = RARITIES[safeCard.rarityKey].templateImage;
  const cardImg = safeCard.image || '';

  return `
    <div class="item-icon" aria-hidden="true">${initialsFromName(safeCard.name)}</div>
    <div class="item-name">${safeCard.name}</div>
    <img class="item-template" src="${templateImg}" alt="${safeCard.rarityLabel}" aria-hidden="true">
    <img class="item-card-img" src="${cardImg}" alt="" aria-hidden="true" onerror="this.style.display='none'">
  `;
}

function renderWonItemMarkup(card) {
  const safeCard = enrichCard(card);

  return `
    <div class="won-rarity">${safeCard.rarityLabel}</div>
    <div class="item-icon item-icon-large" aria-hidden="true">${initialsFromName(safeCard.name)}</div>
    <div class="item-name won-item-name">${safeCard.name}</div>
    <div class="won-item-meta">${safeCard.caseName}</div>
    <div class="won-item-stats">ATK ${safeCard.attack} | DEF ${safeCard.defense}</div>
    <p class="won-item-description">${safeCard.description || 'No description yet.'}</p>
  `;
}

function getWeightedPool(caseData) {
  const rarityCounts = {};

  caseData.items.forEach((item) => {
    const rarityKey = normalizeRarity(item.rarity);
    rarityCounts[rarityKey] = (rarityCounts[rarityKey] || 0) + 1;
  });

  return caseData.items.map((item) => {
    const rarityKey = normalizeRarity(item.rarity);
    return {
      item: enrichCard(item),
      weight: RARITIES[rarityKey].weight / rarityCounts[rarityKey],
    };
  });
}

function pickItem(caseData) {
  const pool = getWeightedPool(caseData);
  const totalWeight = pool.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of pool) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry.item;
    }
  }

  return pool[pool.length - 1].item;
}

function getDropRateBreakdown(caseData) {
  const pool = getWeightedPool(caseData);
  const totalWeight = pool.reduce((sum, entry) => sum + entry.weight, 0);
  const rarityWeights = {};

  pool.forEach((entry) => {
    rarityWeights[entry.item.rarityKey] = (rarityWeights[entry.item.rarityKey] || 0) + entry.weight;
  });

  return Object.entries(rarityWeights)
    .map(([rarityKey, weight]) => ({
      rarityKey,
      label: RARITIES[rarityKey].label,
      chance: ((weight / totalWeight) * 100).toFixed(1),
    }))
    .sort((left, right) => getRarityRank(left.rarityKey) - getRarityRank(right.rarityKey));
}

function renderCases() {
  casesEl.innerHTML = '';

  CASES.forEach((caseData, index) => {
    const caseCard = document.createElement('button');
    caseCard.type = 'button';
    // Ensure both classes are present
    caseCard.className = 'case-card glow-cyan'; 
    caseCard.innerHTML = `
      <div class="case-image-wrap">
        <img class="case-icon" src="${caseData.image}" alt="${caseData.name}">
      </div>
      <div class="case-card-copy">
        <h3>${caseData.name}</h3>
        <p>${caseData.flavor}</p>
      </div>
      <div class="case-card-meta">
        <span class="tag-pill">${caseData.price} PP</span>
        <span class="tag-pill">${caseData.items.length} cards</span>
      </div>
    `;
    caseCard.addEventListener('click', () => selectCase(index));
    casesEl.appendChild(caseCard);
  });
}

function selectCase(index) {
  selectedCase = CASES[index];
  openerSection.hidden = false;
  selectedNameEl.textContent = selectedCase.name;
  selectedFlavorEl.textContent = selectedCase.flavor;
  selectedPriceEl.textContent = formatPP(selectedCase.price);
  wonItemEl.hidden = true;
  rouletteStrip.innerHTML = '';
  rouletteStrip.style.transform = 'translateX(0)';

  dropRatesEl.innerHTML = getDropRateBreakdown(selectedCase)
    .map((entry) => `<span class="drop-pill rarity-${entry.rarityKey}">${entry.label}: ${entry.chance}%</span>`)
    .join('');

  setStatus(`Selected ${selectedCase.name}. Cost: ${formatPP(selectedCase.price)} PP.`);
  openerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildStrip(winItem) {
  const itemWidth = 176;
  const totalItems = 70;
  const winIndex = 55;

  rouletteStrip.innerHTML = '';
  rouletteStrip.classList.remove('spinning');
  rouletteStrip.classList.remove('revealed');
  rouletteStrip.style.transitionProperty = 'none';
  rouletteStrip.style.transform = 'translateX(0)';

  for (let index = 0; index < totalItems; index += 1) {
    const item = index === winIndex ? winItem : pickItem(selectedCase);
    const entry = document.createElement('div');
    entry.className = `roulette-item rarity-${item.rarityKey}`;
    entry.innerHTML = renderRouletteItemMarkup(item);
    rouletteStrip.appendChild(entry);
  }

  return { itemWidth, winIndex };
}

function updateDashboard() {
  const inventory = getInventory();
  balanceEl.textContent = formatPP(getBalance());
  inventoryCountEl.textContent = String(inventory.length);
  incomeRateEl.textContent = formatPP(getPassiveIncomePerHour());
}

function showWonItem(card) {
  wonItemEl.hidden = false;
  wonItemCard.className = `won-item-card rarity-${card.rarityKey}`;
  wonItemCard.innerHTML = renderWonItemMarkup(card);
}

function openSelectedCase() {
  if (isSpinning || !selectedCase) {
    return;
  }

  if (!spendPP(selectedCase.price)) {
    setStatus(`Not enough PPs for ${selectedCase.name}. Keep farming passive income or open a cheaper case.`);
    return;
  }

  isSpinning = true;
  openBtn.disabled = true;
  wonItemEl.hidden = true;
  updateDashboard();

  const winItem = enrichCard({ ...pickItem(selectedCase), caseName: selectedCase.name });
  addCardToInventory(winItem);
  const { itemWidth, winIndex } = buildStrip(winItem);
  const containerWidth = document.querySelector('.roulette-container').offsetWidth;
  const centerOffset = containerWidth / 2 - itemWidth / 2;
  const nudge = (Math.random() - 0.5) * (itemWidth * 0.6);
  const targetX = -(winIndex * itemWidth) + centerOffset + nudge;
  const duration = 5000 + Math.random() * 1500;

  void rouletteStrip.offsetHeight;
  rouletteStrip.classList.add('spinning');
  rouletteStrip.style.transitionProperty = 'transform';
  rouletteStrip.style.transitionDuration = `${duration}ms`;
  rouletteStrip.style.transitionTimingFunction = 'cubic-bezier(0.15, 0.8, 0.3, 1)';
  rouletteStrip.style.transform = `translateX(${targetX}px)`;
  setStatus(`Opening ${selectedCase.name}...`);

  window.setTimeout(() => {
    isSpinning = false;
    openBtn.disabled = false;
    rouletteStrip.classList.remove('spinning');
    rouletteStrip.classList.add('revealed');
    updateDashboard();
    showWonItem(winItem);
    setStatus(`You pulled ${winItem.name} (${winItem.rarityLabel}).`);
  }, duration + 120);
}

openBtn.addEventListener('click', openSelectedCase);

backBtn.addEventListener('click', () => {
  if (isSpinning) {
    return;
  }

  selectedCase = null;
  openerSection.hidden = true;
  wonItemEl.hidden = true;
  rouletteStrip.innerHTML = '';
  setStatus('Pick a case to start opening.');
});

window.addEventListener('wecib:state-changed', () => {
  updateDashboard();
});

window.addEventListener('wecib:trademark-bonus', (event) => {
  const amount = Number(event.detail?.amount || 0);
  updateDashboard();
  setStatus(`Trademark bonus unlocked: +${formatPP(amount)} PP.`);
});

renderCases();
updateDashboard();
window.setInterval(updateDashboard, 1000);
