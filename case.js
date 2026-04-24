const RARITIES = {
  freshman: { label: 'Freshman', color: '#d7e3ff', accent: '#3259a8', weight: 58, templateImage: 'Images/templates/FreshmanCardTemplate.png' },
  sophomore: { label: 'Sophomore', color: '#d9f7c8', accent: '#3b7a2f', weight: 25, templateImage: 'Images/templates/SophomoreCardTemplate.png' },
  junior: { label: 'Junior', color: '#b9d4ff', accent: '#1742b8', weight: 11, templateImage: 'Images/templates/JuniorCardTemplate.png' },
  senior: { label: 'Senior', color: '#ffd3a9', accent: '#b34d13', weight: 4, templateImage: 'Images/templates/SeniorCardTemplate.png' },
  superSenior: { label: 'Super-Senior', color: '#ffe48c', accent: '#8b5e00', weight: 2, templateImage: 'Images/templates/Super-SeniorCardTemplate.png' },
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior'];

const CASES = [
  {
    name: 'MHS Case',
    price: 12,
    image: 'images/mhsCrate.png',
    flavor: 'Youngings',
    items: [
      { name: 'Gymnasium', rarity: 'sophomore', attack: 72, defense: 68, description: 'The gymnasium of MHS, where dreams are made, hearts are broken, and dodgeballs are thrown..' },
      { name: 'MHS Campus', rarity: 'sophomore', attack: 61, defense: 79, description: 'The campus of the lesser- ahem, the under classmen.' },
      { name: 'As Many People As Want Their Picture Taken', rarity: 'sophomore', attack: 85, defense: 54, description: 'A quote with permanent aura. Nobody fully explains it, everyone remembers it.' },
      { name: 'Theater', rarity: 'sophomore', attack: 58, defense: 82, description: 'Home to many lost children, where they are forced to act in front of people for their entertainment, led by their cruel dictator, Mrs. Kaulfuss.' },
      { name: 'Wallholes', rarity: 'junior', attack: 95, defense: 88, description: 'Architectural mystery turned community bit.' },
      { name: 'Mr. Gross', rarity: 'senior', attack: 132, defense: 119, description: 'What could he be thinking about? ' },
      { name: 'Vending Machine Incident of 24', rarity: 'superSenior', attack: 167, defense: 154, description: 'Peak WECIB legend status. The pull everybody talks about.' },
      
    ],
  },
  {
    name: 'RT2 Case',
    price: 24,
    image: 'images/rt2Crate.png',
    flavor: 'The Main Attraction, RT2 events, folks, and gatherings',
    items: [
      { name: 'Genesis', rarity: 'freshman', attack: 45, defense: 38, description: ' Elnatan’s girlfriend, yet is still the man of the house. Junior. ' },
       { name: 'Vending Machine Incident of 24', rarity: 'superSenior', attack: 172, defense: 161, description: 'The defining chase card of Sprint 1.' },
       { name: 'Emilia Fisher', rarity: 'freshman', attack: 52, defense: 41, description: ' Duck. Junior.' },
       { name: 'Jacob Hartzell', rarity: 'freshman', attack: 38, defense: 29, description: ' Jacob Hartzell is a cutie patooty junior. ' },
       { name: 'Reg Thiago-Ramos ', rarity: 'freshman', attack: 44, defense: 47, description: ' Aura. (junior)' },
       { name: 'Anna Split', rarity: 'sophomore', attack: 67, defense: 73, description: ' Made like a banana and split' },
       { name: 'Chandler', rarity: 'sophomore', attack: 79, defense: 61, description: ' Charlie’s boyfriend, yet still the housewife. Junior.' },
       { name: 'Charlie', rarity: 'sophomore', attack: 63, defense: 84, description: ' Wesker. Junior.' },
       { name: 'Dude Guys', rarity: 'sophomore', attack: 88, defense: 52, description: ' Just some dudes. And guys. On Serena’s hoodie.' },
       { name: 'Logain', rarity: 'freshman', attack: 56, defense: 33, description: 'THE BioTech student. Junior.' },
       { name: 'JosephJamesLennertIII', rarity: 'sophomore', attack: 74, defense: 69, description: ' Joseph. Creator of the Silly Guys. They have outgrown and overthrown him, though.' },
       { name: 'JoJo’s', rarity: 'sophomore', attack: 59, defense: 77, description: '- Jamey thinks he’s a JoJo character. We don’t have the heart to tell him otherwise.' },
       { name: '2Nick  ', rarity: 'junior', attack: 103, defense: 96, description: ' Durag (bandana) provided by Mr. Aura himself — Reg.' },
       { name: 'Academic Rigor', rarity: 'junior', attack: 91, defense: 112, description: ' Look how dedicated and studious this man is. Truly a man to use as an idol. ' },
       { name: 'Aura Farming', rarity: 'junior', attack: 115, defense: 87, description: ' We don’t know where he got that umbrella. Or how he got on the table.' },
       { name: 'Ethan Gardner ', rarity: 'junior', attack: 98, defense: 105, description: ' Ethan Gardner. Potentially Mr. Gardner’s long lost twin.' },
       { name: 'Low Poly Jamey', rarity: 'junior', attack: 107, defense: 94, description: 'From Joseph’s Junior Vice President campaign video.' },
       { name: 'Sami', rarity: 'junior', attack: 84, defense: 110, description: 'Commonly confused for Samuel L. Jackson. Rotated 180 degrees for dramatic effect.' }, 
       { name: 'Silly Guy', rarity: 'junior', attack: 101, defense: 92, description: '- Some silly guy. Created by Joseph' }, 
       { name: 'Group Bonding', rarity: 'junior', attack: 93, defense: 108, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'Freshman Jamey', rarity: 'junior', attack: 116, defense: 81, description: ' THE Dragon James himself, but when he was a freshman, both his brain cells were already in a fierce battle for top 10. ' },
       { name: 'Group Bonding', rarity: 'junior', attack: 89, defense: 114, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'Group Bonding', rarity: 'senior', attack: 141, defense: 126, description: 't’s like Stand by Me but instead of searching for a dead boy they’re searching for a dead car.' },
       { name: 'The Tunnel Gang ', rarity: 'senior', attack: 128, defense: 147, description: ' It’s like Stand by Me but instead of walking on the train tracks they’re walking through the sewer.' },
       { name: 'Please Jamey I Need This', rarity: 'senior', attack: 136, defense: 133, description: ' PLEASE JAMEY I NEEEEEEEEEEEED THIS' },
       { name: '2 Best Buds', rarity: 'senior', attack: 150, defense: 118, description: '  Despite differences, they still find the ability to become the bestest of buds. So very inspirational.' },
       { name: 'Coworkers', rarity: 'superSenior', attack: 158, defense: 172, description: '  Nick didn’t consent to this photo. Daniel laughed.' },
    ],
  },
  {
    name: 'RT1 Case',
    price: 40,
    image: 'images/rt1Crate.png',
    flavor: 'RT1 focused. May the odds be with you.  ',
    items: [
      { name: 'Morning Announcement Misfire', rarity: 'freshman', attack: 49, defense: 31, description: 'A small glitch that bought itself a lot of attention.' },
      { name: 'Building Tour Speedrun', rarity: 'sophomore', attack: 68, defense: 57, description: 'Every hall, every shortcut, zero time to explain any of it.' },
      { name: 'Iconic Places Deluxe', rarity: 'junior', attack: 112, defense: 99, description: 'The upgraded location card for players chasing stronger boards.' },
      { name: 'Hallway Crowd Control', rarity: 'junior', attack: 87, defense: 103, description: 'A defensive card born from absolute chaos.' },
      { name: 'Building Lore Compendium', rarity: 'senior', attack: 125, defense: 138, description: 'All the context, all the references, none of the filler.' },
      { name: 'Iconic Events Marathon', rarity: 'senior', attack: 144, defense: 127, description: 'A greatest-hits card with heavy staying power.' },
      { name: 'Alex Frieders', rarity: 'freshman', attack: 35, defense: 48, description: ' Freaky ahh junior.' },
      { name: 'AB', rarity: 'freshman', attack: 53, defense: 40, description: 'No one knows what it stands for. Could possibly stand for A B-Junior' },
      { name: 'Anna Moore', rarity: 'freshman', attack: 41, defense: 27, description: 'Boy scout, knows some Japanese. Junior' },
      { name: 'Christian', rarity: 'freshman', attack: 46, defense: 36, description: 'The day the hallway became a full production set.' },
      { name: 'Darsh', rarity: 'freshman', attack: 57, defense: 44, description: ' Leader of the Vending Machine Scandal of ‘24. Junior.' },
      { name: 'Eris Thompson', rarity: 'freshman', attack: 33, defense: 51, description: 'Cooler twin. Also a junior.' },
      { name: 'Henry Short', rarity: 'freshman', attack: 50, defense: 39, description: 'Short junior, wakeID is heshort.' },
      { name: 'Iniya', rarity: 'freshman', attack: 42, defense: 46, description: 'Was once a Hufflepuff, is now a Ravenclaw. Junior.' },
      { name: 'Iremide', rarity: 'freshman', attack: 37, defense: 54, description: 'The day the hallway became a full production set.' },
      { name: 'Jalen', rarity: 'freshman', attack: 48, defense: 30, description: 'The day the hallway became a full production set.' },

      { name: 'Nicholas Foles', rarity: 'freshman', attack: 55, defense: 43, description: ' THE PRESIDENT, El Presidente himself, Lebron’s idol, cutie patooty. Also a junior' },
      { name: 'Noah Couch', rarity: 'freshman', attack: 40, defense: 35, description: 'The day the hallway became a full production set.' },
      { name: 'Rafal Toberek', rarity: 'freshman', attack: 47, defense: 50, description: ' Polish, Mexican, left-handed, & racist. Also a junior.' },
      { name: 'Ryan Shutte', rarity: 'freshman', attack: 34, defense: 42, description: 'The day the hallway became a full production set.' },
      { name: 'Serena', rarity: 'freshman', attack: 51, defense: 38, description: ' Owns a 3DS and plays Luigi’s Mansion. Junior' },
      { name: 'Treyvon Pearson ', rarity: 'freshman', attack: 44, defense: 45, description: 'The day the hallway became a full production set.' },
      { name: 'Jamey Brandon ', rarity: 'freshman', attack: 39, defense: 53, description: ' THE Dragon James himself, both his brain cells are in a fierce battle for top 10. Junior.' },
      { name: 'Beatrice Kovalik', rarity: 'freshman', attack: 58, defense: 32, description: '  Ballet ahh junior. ' },
      { name: 'Gatorade Machine RT1', rarity: 'sophomore', attack: 77, defense: 64, description: '  Is called the Gatorade Machine yet does not possess any Gatorade' },
      { name: 'Poppi Machine ', rarity: 'sophomore', attack: 62, defense: 83, description: ' Everyone loves Poppi, right? Guys?' },
      { name: 'Grand Library RT1 ', rarity: 'sophomore', attack: 81, defense: 71, description: ' Not really a library, more like a bunch of chairs in a room. Saw some dude named Peter disappear into a door once here.' },
      { name: 'JoJo’s', rarity: 'sophomore', attack: 56, defense: 78, description: '- Jamey thinks he’s a JoJo character. We don’t have the heart to tell him otherwise.' },
      { name: 'Sustenance ', rarity: 'sophomore', attack: 69, defense: 58, description: 'Food is important. I think, at least. I’m like 80% sure.' },
      { name: 'Uno  ', rarity: 'sophomore', attack: 75, defense: 66, description: ' The world-famous game that has split friendships, split nations, and split worlds' },
      { name: 'Gardner Pizza', rarity: 'junior', attack: 99, defense: 109, description: 'The pizza as requested per Mr. Gardner. In the making of this… creation, I had to fend off several demons because they thought I was summoning something with how odd the pizza was.' },
      { name: 'Jamey Geeked', rarity: 'junior', attack: 104, defense: 95, description: 'Jamey straight geekin’ in the elevator.' },
      { name: 'Mrs. Whittington', rarity: 'superSenior', attack: 166, defense: 149, description: ' The OGs remember Earth Environmental Science class with her.' },
      { name: 'Gardner White', rarity: 'senior', attack: 131, defense: 142, description: '  Gardnuh, we need to code.   ' },
      { name: 'Zest', rarity: 'senior', attack: 148, defense: 121, description: ' Normal Jamey.' },
      { name: 'Brotherly Love', rarity: 'senior', attack: 119, defense: 151, description: ' - Blood siblings showing their passionate love for each other.' },

      { name: 'Please Mr. Gardner I Need This', rarity: 'superSenior', attack: 153, defense: 168, description: 'Why you trying not to laugh Mr. Gardner, thats mad disrespectful' },
      { name: 'Walk em Down Gardner', rarity: 'superSenior', attack: 178, defense: 143, description: ' Da big Gardner don play wit you son, ya mess wih ‘im, you mess wit da gang twin' },

    ],
  },
  {
    name: 'Wake Tech Case',
    price: 250,
    image: 'images/WakeTechCrate (1).png',
    flavor: 'A case of Wake Tech... A secret card may be held',
    items: [
      { name: 'Reg Thiago-Ramos ', rarity: 'freshman', attack: 136, defense: 121, description: ' Aura. (junior)' },
      { name: 'Alex Frieders', rarity: 'freshman', attack: 35, defense: 48, description: ' Freaky ahh junior.' },
      { name: 'AB', rarity: 'freshman', attack: 53, defense: 40, description: 'No one knows what it stands for. Could possibly stand for A B-Junior' },
      { name: 'Anna Moore', rarity: 'freshman', attack: 41, defense: 27, description: 'Boy scout, knows some Japanese. Junior' },
      { name: 'Christian', rarity: 'freshman', attack: 46, defense: 36, description: 'The day the hallway became a full production set.' },
      { name: 'Darsh', rarity: 'freshman', attack: 57, defense: 44, description: ' Leader of the Vending Machine Scandal of ‘24. Junior.' },
      { name: 'Eris Thompson', rarity: 'freshman', attack: 33, defense: 51, description: 'Cooler twin. Also a junior.' },
      { name: 'Henry Short', rarity: 'freshman', attack: 50, defense: 39, description: 'Short junior, wakeID is heshort.' },
      { name: 'Iniya', rarity: 'freshman', attack: 42, defense: 46, description: 'Was once a Hufflepuff, is now a Ravenclaw. Junior.' },
      { name: 'Iremide', rarity: 'freshman', attack: 37, defense: 54, description: 'The day the hallway became a full production set.' },
      { name: 'Jalen', rarity: 'freshman', attack: 48, defense: 30, description: 'The day the hallway became a full production set.' },

      { name: 'Nicholas Foles', rarity: 'freshman', attack: 55, defense: 43, description: ' THE PRESIDENT, El Presidente himself, Lebron’s idol, cutie patooty. Also a junior' },
      { name: 'Noah Couch', rarity: 'freshman', attack: 40, defense: 35, description: 'The day the hallway became a full production set.' },
      { name: 'Rafal Toberek', rarity: 'freshman', attack: 47, defense: 50, description: ' Polish, Mexican, left-handed, & racist. Also a junior.' },
      { name: 'Ryan Shutte', rarity: 'freshman', attack: 34, defense: 42, description: 'The day the hallway became a full production set.' },
      { name: 'Serena', rarity: 'freshman', attack: 51, defense: 38, description: ' Owns a 3DS and plays Luigi’s Mansion. Junior' },
      { name: 'Treyvon Pearson ', rarity: 'freshman', attack: 44, defense: 45, description: 'The day the hallway became a full production set.' },
      { name: 'Jamey Brandon ', rarity: 'freshman', attack: 39, defense: 53, description: ' THE Dragon James himself, both his brain cells are in a fierce battle for top 10. Junior.' },
      { name: 'Beatrice Kovalik', rarity: 'freshman', attack: 58, defense: 32, description: '  Ballet ahh junior. ' },
      { name: 'Emilia Fisher', rarity: 'freshman', attack: 52, defense: 41, description: ' Duck. Junior.' },
      { name: 'Jacob Hartzell', rarity: 'freshman', attack: 38, defense: 29, description: ' Jacob Hartzell is a cutie patooty junior. ' },
      { name: 'Reg Thiago-Ramos ', rarity: 'freshman', attack: 44, defense: 47, description: ' Aura. (junior)' },
      { name: 'Anne Frank ', rarity: 'superSenior', attack: 11862, defense: 9627, description: ' Aura. (junior)' },
      
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
      </div>
    </article>
  `;
}

function renderRouletteItemMarkup(card) {
  const safeCard = enrichCard(card);
  const templateImg = RARITIES[safeCard.rarityKey].templateImage;

  return `
    <div class="item-icon" aria-hidden="true">${initialsFromName(safeCard.name)}</div>
    <div class="item-name">${safeCard.name}</div>
    <img class="item-template" src="${templateImg}" alt="${safeCard.rarityLabel}" aria-hidden="true">
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

