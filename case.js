const RARITIES = {
  freshman: { label: 'Freshman', color: '#d7e3ff', accent: '#3259a8', weight: 67, templateImage: 'Images/templates/FreshmanCardTemplate.png' },
  sophomore: { label: 'Sophomore', color: '#d9f7c8', accent: '#3b7a2f', weight: 17.8, templateImage: 'Images/templates/SophomoreCardTemplate.png' },
  sophomore: { label: 'Sophomore', color: '#d9f7c8', accent: '#3b7a2f', weight: 17.8, templateImage: 'Images/templates/SophomoreCardTemplate.png' },
  junior: { label: 'Junior', color: '#b9d4ff', accent: '#1742b8', weight: 12, templateImage: 'Images/templates/JuniorCardTemplate.png' },
  senior: { label: 'Senior', color: '#ffd3a9', accent: '#b34d13', weight: 3, templateImage: 'Images/templates/SeniorCardTemplate.png' },
  superSenior: { label: 'Super-Senior', color: '#ffe48c', accent: '#8b5e00', weight: 0.2, templateImage: 'Images/templates/Super-SeniorCardTemplate.png' }, 
  graduated: {label: 'Graduated', color:'#8c52ff', accent: '#cb6ce6', weight: 0.005 },
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior', 'Graduated'];

const CASES = [
  {
    name: 'MHS Case',
    price: 12,
    image: 'images/mhsCrate.png',
    flavor: 'Youngings',
    items: [
      { name: 'Gymnasium', rarity: 'sophmore', attack: 131, defense: 52, description: 'The gymnasium of MHS, where dreams are made, hearts are broken, and dodgeballs are thrown..' },
      { name: 'MHS Campus', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/MHSCampus.png', attack: 60, defense: 34, description: 'The campus of the lesser- ahem, the under classmen.' },
      { name: 'Theater', rarity: 'sophomore', attack: 92, defense: 93, description: 'Home to many lost children, where they are forced to act in front of people for their entertainment, led by their cruel dictator, Mrs. Kaulfuss.' },
      { name: 'Wallholes', rarity: 'junior', attack: 165, defense: 213, description: 'Architectural mystery turned community bit.' },
      { name: 'Mr. Gross', rarity: 'senior', attack: 275, defense: 217, description: 'What could he be thinking about? ' },
      { name: 'Vending Machine Incident of 24', rarity: 'superSenior', attack: 432, defense: 488, description: 'Peak WECIB legend status. The pull everybody talks about.' },
      { name: 'Jacob Hartzell', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/JacobHartzell.png', attack: 39, defense: 83, description: ' Jacob Hartzell is a cutie patooty junior. ' },
       { name: 'Reg Thiago-Ramos ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/RegRamos.png', attack: 22, defense: 67, description: ' Aura. (junior)' },
       { name: 'Noah Couch', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/NoahCouch.png', attack: 23, defense: 56, description: 'The day the hallway became a full production set.' },
       { name: 'Rafal Toberek', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Rafal.png', attack: 45, defense: 74, description: ' Polish, Mexican, left-handed, & racist. Also a junior.' },
       { name: 'Ryan Shutte', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/RyanShutte.png', attack: 29, defense: 30, description: 'The day the hallway became a full production set.' },
       { name: 'Serena', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/SerenaRogers.png', attack: 61, defense: 30, description: ' Owns a 3DS and plays Luigi’s Mansion. Junior' },
      
    ],
  },
  {
    name: 'RT2 Case',
    price: 24,
    image: 'images/rt2Crate.png',
    flavor: 'The Main Attraction, RT2 events, folks, and gatherings',
    items: [
      { name: 'Genesis', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Genesis.png', attack: 16, defense: 73, description: ' Elnatan’s girlfriend, yet is still the man of the house. Junior. ' },
       { name: 'Vending Machine Incident of 24', rarity: 'superSenior', attack: 488, defense: 328, description: 'The defining chase card of Sprint 1.' },
       { name: 'Emilia Fisher', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/EmiliaFisher.png', attack: 86, defense: 29, description: ' Duck. Junior.' },
       
       { name: 'Anna Split', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/AnnaSplit.png', attack: 86, defense: 84, description: ' Made like a banana and split' },
       { name: 'Chandler', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/ChandlerThompson.png', attack: 36, defense: 78, description: ' Charlie’s boyfriend, yet still the housewife. Junior.' },
       { name: 'Charlie', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/CharlieSanchez.png', attack: 94, defense: 138, description: ' Wesker. Junior.' },
       { name: 'Dude Guys', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/DudeGuys.png', attack: 122, defense: 123, description: ' Just some dudes. And guys. On Serena’s hoodie.' },
       { name: 'Logain', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Logain.png', attack: 23, defense: 22, description: 'THE BioTech student. Junior.' },
       { name: 'JosephJamesLennertIII', rarity: 'sophomore', attack: 66, defense: 139, description: ' Joseph. Creator of the Silly Guys. They have outgrown and overthrown him, though.' },
       { name: 'JoJo’s', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/Jojos.png', attack: 117, defense: 57, description: 'Jamey thinks he’s a JoJo character. We don’t have the heart to tell him otherwise.' },
       { name: '2Nick  ', rarity: 'junior', attack: 168, defense: 154, description: ' Durag (bandana) provided by Mr. Aura himself — Reg.' },
       { name: 'Academic Rigor', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/AcademicRigor.JPG', attack: 144, defense: 192, description: ' Look how dedicated and studious this man is. Truly a man to use as an idol. ' },
       { name: 'Aura Farming', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/AuraFarming.png', attack: 162, defense: 176, description: ' We don’t know where he got that umbrella. Or how he got on the table.' },
       { name: 'Ethan Gardner ', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/EthanGardner.JPG', attack: 105, defense: 220, description: ' Ethan Gardner. Potentially Mr. Gardner’s long lost twin.' },
       { name: 'Low Poly Jamey', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/LowPolyJamey.png', attack: 165, defense: 114, description: 'From Joseph’s Junior Vice President campaign video.' },
       { name: 'Sami', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/Sami.jpg', attack: 113, defense: 162, description: 'Commonly confused for Samuel L. Jackson. Rotated 180 degrees for dramatic effect.' }, 
       { name: 'Silly Guy', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/SillyGuy.png', attack: 78, defense: 170, description: '- Some silly guy. Created by Joseph' }, 
       { name: 'Group Bonding', rarity: 'junior', attack: 170, defense: 160, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'Freshman Jamey', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/JameyAndBeatrice.png', attack: 114, defense: 215, description: ' THE Dragon James himself, but when he was a freshman, both his brain cells were already in a fierce battle for top 10. ' },
       { name: 'Group Bonding', rarity: 'junior', attack: 117, defense: 141, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'Group Bonding', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/GroupBonding.JPG', attack: 207, defense: 166, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'The Tunnel Gang ', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/TheTunnelGang.PNG', attack: 213, defense: 247, description: ' It’s like Stand by Me but instead of walking on the train tracks they’re walking through the sewer.' },
       { name: 'Please Jamey I Need This', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/JameyNeedThis.png', attack: 242, defense: 131, description: ' PLEASE JAMEY I NEEEEEEEEEEEED THIS' },
       { name: '2 Best Buds', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/BestBuds.png', attack: 220, defense: 294, description: '  Despite differences, they still find the ability to become the bestest of buds. So very inspirational.' },
       { name: 'Coworkers', rarity: 'superSenior', attack: 316, defense: 460, description: '  Nick didn’t consent to this photo. Daniel laughed.' },
    ],
  },
  {
    name: 'RT1 Case',
    price: 40,
    image: 'images/rt1Crate.png',
    flavor: 'RT1 focused. May the odds be with you.  ',
    items: [
      { name: 'Morning Announcement Misfire', rarity: 'freshman', attack: 51, defense: 53, description: 'A small glitch that bought itself a lot of attention.' },
      { name: 'Building Tour Speedrun', rarity: 'sophomore', attack: 70, defense: 133, description: 'Every hall, every shortcut, zero time to explain any of it.' },
      { name: 'Hallway Crowd Control', rarity: 'junior', attack: 202, defense: 84, description: 'A defensive card born from absolute chaos.' },
      { name: 'Building Lore Compendium', rarity: 'senior', attack: 240, defense: 131, description: 'All the context, all the references, none of the filler.' },
      { name: 'Alex Frieders', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AlexFrieders.png', attack: 19, defense: 42, description: ' Freaky ahh junior.' },
      { name: 'AB', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AB.png', attack: 32, defense: 62, description: 'No one knows what it stands for. Could possibly stand for A B-Junior' },
      { name: 'Anna Moore', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AnnaMoore.PNG', attack: 39, defense: 55, description: 'Boy scout, knows some Japanese. Junior' },
      { name: 'Christian', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Christian.png', attack: 51, defense: 45, description: 'The day the hallway became a full production set.' },
      { name: 'Darsh', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Darsh.png', attack: 78, defense: 50, description: ' Leader of the Vending Machine Scandal of ‘24. Junior.' },
      { name: 'Eris Thompson', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/ErisThompson.png', attack: 88, defense: 73, description: 'Cooler twin. Also a junior.' },
      { name: 'Henry Short', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/HenryShort.png', attack: 89, defense: 77, description: 'Short junior, wakeID is heshort.' },
      { name: 'Iniya', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Iniya.png', attack: 44, defense: 27, description: 'Was once a Hufflepuff, is now a Ravenclaw. Junior.' },
      { name: 'Iremide', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Iremide.png', attack: 24, defense: 29, description: 'The day the hallway became a full production set.' },
    

      { name: 'Nicholas Foles', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/NicholasFoles.PNG', attack: 40, defense: 68, description: ' THE PRESIDENT, El Presidente himself, Lebron’s idol, cutie patooty. Also a junior' },
      { name: 'Treyvon Pearson ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/TreyvonPearson.png', attack: 83, defense: 31, description: 'The day the hallway became a full production set.' },
      { name: 'Jamey Brandon ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/JameyBrandon.PNG', attack: 62, defense: 50, description: ' THE Dragon James himself, both his brain cells are in a fierce battle for top 10. Junior.' },
      { name: 'Beatrice Kovalik', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Beatrice.png', attack: 39, defense: 82, description: '  Ballet ahh junior. ' },
      { name: 'Gatorade Machine RT1', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/GatoradeMachineRT1.JPG', attack: 46, defense: 128, description: '  Is called the Gatorade Machine yet does not possess any Gatorade' },
      { name: 'Poppi Machine ', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/GatoradeMachineRT1.JPG', attack: 129, defense: 38, description: ' Everyone loves Poppi, right? Guys?' },
      { name: 'Grand Library RT1 ', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/GrandLibaryRT1.JPG', attack: 133, defense: 59, description: ' Not really a library, more like a bunch of chairs in a room. Saw some dude named Peter disappear into a door once here.' },
      { name: 'JoJo’s', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/Jojos.png', attack: 132, defense: 81, description: '- Jamey thinks he’s a JoJo character. We don’t have the heart to tell him otherwise.' },
      { name: 'Sustenance ', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/Sustenance.JPG', attack: 93, defense: 75, description: 'Food is important. I think, at least. I’m like 80% sure.' },
      { name: 'Uno  ', rarity: 'sophomore', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Sophomore/Uno.png', attack: 60, defense: 62, description: ' The world-famous game that has split friendships, split nations, and split worlds' },
      { name: 'Gardner Pizza', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/GardnerPizza.JPG', attack: 197, defense: 74, description: 'The pizza as requested per Mr. Gardner. In the making of this… creation, I had to fend off several demons because they thought I was summoning something with how odd the pizza was.' },
      { name: 'Jamey Geeked', rarity: 'junior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Junior/Geeked.png', attack: 158, defense: 105, description: 'Jamey straight geekin’ in the elevator.' },
      { name: 'Mrs. Whittington', rarity: 'superSenior', attack: 420, defense: 405, description: ' The OGs remember Earth Environmental Science class with her.' },
      { name: 'Gardner White', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/GardnerWhite.png', attack: 277, defense: 300, description: '  Gardnuh, we need to code.   ' },
      { name: 'Zest', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/Zest.png', attack: 294, defense: 227, description: ' Normal Jamey.' },
      { name: 'Brotherly Love', rarity: 'senior', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Senior/BrotherlyLove.PNG', attack: 197, defense: 190, description: ' - Blood siblings showing their passionate love for each other.' },

      { name: 'Please Mr. Gardner I Need This', rarity: 'superSenior', attack: 359, defense: 362, description: 'Why you trying not to laugh Mr. Gardner, thats mad disrespectful' },
      { name: 'Walk em Down Gardner', rarity: 'superSenior', attack: 322, defense: 316, description: ' Da big Gardner don play wit you son, ya mess wih ‘im, you mess wit da gang twin' },

    ],
  },
  {
    name: 'Wake Tech Case',
    price: 250,
    image: 'images/WakeTechCrate (1).png',
    flavor: 'A case of Wake Tech... A secret card may be held',
    items: [
      { name: 'Reg Thiago-Ramos ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/RegRamos.png', attack: 14, defense: 14, description: ' Aura. (junior)' },
      { name: 'Alex Frieders', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AlexFrieders.png', attack: 26, defense: 16, description: ' Freaky ahh junior.' },
      { name: 'AB', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AB.png', attack: 86, defense: 70, description: 'No one knows what it stands for. Could possibly stand for A B-Junior' },
      { name: 'Anna Moore', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/AnnaMoore.PNG', attack: 57, defense: 72, description: 'Boy scout, knows some Japanese. Junior' },
      { name: 'Christian', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Christian.png', attack: 24, defense: 75, description: 'The day the hallway became a full production set.' },
      { name: 'Darsh', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Darsh.png', attack: 88, defense: 65, description: ' Leader of the Vending Machine Scandal of ‘24. Junior.' },
      { name: 'Eris Thompson', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/ErisThompson.png', attack: 24, defense: 50, description: 'Cooler twin. Also a junior.' },
      { name: 'Henry Short', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/HenryShort.png', attack: 19, defense: 64, description: 'Short junior, wakeID is heshort.' },
      { name: 'Iniya', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Iniya.png', attack: 71, defense: 60, description: 'Was once a Hufflepuff, is now a Ravenclaw. Junior.' },
      { name: 'Iremide', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Iremide.png', attack: 15, defense: 41, description: 'The day the hallway became a full production set.' },
      { name: 'Jalen', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Jalen.png', attack: 35, defense: 20, description: 'The day the hallway became a full production set.' },

      { name: 'Nicholas Foles', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/NicholasFoles.PNG', attack: 75, defense: 13, description: ' THE PRESIDENT, El Presidente himself, Lebron’s idol, cutie patooty. Also a junior' },
      { name: 'Noah Couch', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/NoahCouch.png', attack: 67, defense: 18, description: 'The day the hallway became a full production set.' },
      { name: 'Rafal Toberek', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Rafal.png', attack: 47, defense: 19, description: ' Polish, Mexican, left-handed, & racist. Also a junior.' },
      { name: 'Serena', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/SerenaRogers.png', attack: 31, defense: 54, description: ' Owns a 3DS and plays Luigi’s Mansion. Junior' },
      { name: 'Treyvon Pearson ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/TreyvonPearson.png', attack: 71, defense: 86, description: 'The day the hallway became a full production set.' },
      { name: 'Jamey Brandon ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/JameyBrandon.PNG', attack: 55, defense: 31, description: ' THE Dragon James himself, both his brain cells are in a fierce battle for top 10. Junior.' },
      { name: 'Beatrice Kovalik', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/Beatrice.png', attack: 75, defense: 63, description: '  Ballet ahh junior. ' },
      { name: 'Emilia Fisher', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/EmiliaFisher.png', attack: 37, defense: 74, description: ' Duck. Junior.' },
      { name: 'Jacob Hartzell', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/JacobHartzell.png', attack: 63, defense: 57, description: ' Jacob Hartzell is a cutie patooty junior. ' },
      { name: 'Reg Thiago-Ramos ', rarity: 'freshman', image: 'Images/Photos-20260424T155820Z-3-001/Photos/Freshman/RegRamos.png', attack: 42, defense: 64, description: ' Aura. (junior)' },
      { name: 'Anne Frank ', rarity: 'superSenior', attack: 236, defense: 337, description: ' Aura. (junior)' },
      
    ],
  },
];

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
  return rarity in RARITIES ? rarity : 'freshman';
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
    caseCard.className = 'case-card';
    caseCard.innerHTML = `
      <img class="case-icon" src="${caseData.image}" alt="${caseData.name}">
      <div class="case-card-copy">
        <h3>${caseData.name}</h3>
        <p>${caseData.flavor}</p>
      </div>
      <div class="case-card-meta">
        <span>${caseData.price} PP</span>
        <span>${caseData.items.length} cards</span>
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
  const itemWidth = 140;
  const totalItems = 70;
  const winIndex = 55;

  rouletteStrip.innerHTML = '';
  rouletteStrip.classList.remove('spinning');
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

renderCases();
updateDashboard();
window.setInterval(updateDashboard, 1000);
