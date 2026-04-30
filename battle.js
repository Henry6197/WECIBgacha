const TEAM_LIMIT = 5;
const BOSS_REWARD = 5000;
const BOSS_STATE_KEY = 'wecib-gacha-boss-state';
const BOSS_COOLDOWN_MS = 60*1000;
const TURN_DELAY_MS = 420;
const ENTRY_DELAY_MS = 360;

const RARITIES = {
  freshman: { label: 'Freshman', rank: 0 },
  sophomore: { label: 'Sophomore', rank: 1 },
  junior: { label: 'Junior', rank: 2 },
  senior: { label: 'Senior', rank: 3 },
  superSenior: { label: 'Super-Senior', rank: 4 },
  graduated: { label: 'Graduate', rank: 5 },
};

const RARITY_ALIASES = {
  sophmore: 'sophomore',
  super_senior: 'superSenior',
  supersenior: 'superSenior',
  graduate: 'graduated',
  Graduated: 'graduated',
};

const CARD_IMAGE_OVERRIDES = {
  ab: 'Images/ABCard.png',
  alexfrieders: 'Images/AlexCard.png',
  annamoore: 'Images/AnnaCard.png',
  beatricekovalik: 'Images/BeatriceCard.png',
  beatrice: 'Images/BeatriceCard.png',
  christian: 'Images/ChristianCard.png',
  christianinglis: 'Images/ChristianCard.png',
  darsh: 'Images/DarshCard.png',
  emiliafisher: 'Images/EmilaCard.png',
  eristhompson: 'Images/ErisCard.png',
  genesis: 'Images/GenesisCard.png',
  henryshort: 'Images/HenryCard.png',
  iniya: 'Images/IniyaCard.png',
  iremide: 'Images/IremideCard.png',
  jacobhartzell: 'Images/JacobCard.png',
  jalen: 'Images/JalenCard.png',
  jalenwalker: 'Images/JalenCard.png',
  jameybrandon: 'Images/JameyCard.png',
  logain: 'Images/LogainCard.png',
  nicholasfoles: 'Images/NicholasCard.png',
  noahcouch: 'Images/NoahCard.png',
  rafaltoborek: 'Images/RafalCard.png',
  rafaltoberek: 'Images/RafalCard.png',
  regthiagoramos: 'Images/RegCard.png',
  regramos: 'Images/RegCard.png',
  ryanshutte: 'Images/RyanCard.png',
  ryanmccoolschutte: 'Images/RyanCard.png',
  serena: 'Images/SerenaCard.png',
  serenarogers: 'Images/SerenaCard.png',
  treyvonpearson: 'Images/TreyvonCard.png',
  waketech: 'Images/WakeTechCard.png',
  annasplit: 'Images/AnnaSplitCard.png',
  chandler: 'Images/ChandlerThompsonCard.png',
  chandlerthompson: 'Images/ChandlerThompsonCard.png',
  charlie: 'Images/CharlieSanchezCard.png',
  charliesanchez: 'Images/CharlieSanchezCard.png',
  dudeguys: 'Images/DudeGuysCard.png',
  gatorademachinert1: 'Images/GatoradeMachineRT1Card.png',
  grandlibraryrt1: 'Images/GrandLibraryRT1Card.png',
  wallholes: 'Images/WallHolesCard.png',
  holesinwall: 'Images/WallHolesCard.png',
  josephjameslennertiii: 'Images/JosephLennertCard.png',
  josephlennert: 'Images/JosephLennertCard.png',
  mhscampus: 'Images/MHSCampusCard.png',
  gymnasium: 'Images/MHSGymCard.png',
  mhsgym: 'Images/MHSGymCard.png',
  theater: 'Images/MHSTheaterCard.png',
  mhstheatre: 'Images/MHSTheaterCard.png',
  poppimachine: 'Images/PoppiVendingRT1.png',
  poppivendingrt1: 'Images/PoppiVendingRT1.png',
  jameysideways: 'Images/SidewaysJameyCard.png',
  sidewaysjamey: 'Images/SidewaysJameyCard.png',
  sustenance: 'Images/SustenanceCard.png',
  tristanowen: 'Images/TristanOwenCard.png',
  uno: 'Images/UnoCard.png',
  academicrigor: 'Images/AcademicRigorCard.png',
  aurafarming: 'Images/AuraFarmingCard.png',
  babyprez: 'Images/BabyPrezCard.png',
  ethangardner: 'Images/EthanGardnerCard.png',
  gardnerpizza: 'Images/GardnerPizzaCard.png',
  jameygeeked: 'Images/JameyGeekedCard.png',
  beatriceandjamey: 'Images/BeatriceAndJameyCard.png',
  freshmanjamey: 'Images/FreshmanJameyCard.png',
  jojos: 'Images/JojoCard.png',
  lowpolyjamey: 'Images/LowPolyJameyCard.png',
  mrgross: 'Images/MrGrossCard.png',
  mrswhittington: 'Images/MrsWhittingtonCard.png',
  sami: 'Images/SamiCard.png',
  sillyguy: 'Images/SillyGuyCard.png',
  bestbuds: 'Images/2BestBudsCard.png',
  '2bestbuds': 'Images/2BestBudsCard.png',
  brotherlylove: 'Images/BrotherlyLoveCard.png',
  gardnerwhite: 'Images/GardnerWhiteCard.png',
  pleasejameyineedthis: 'Images/PleaseJameyCard.png',
  pleasemrgardnerineedthis: 'Images/GardnerNeedThisCard.png',
  thetunnelgang: 'Images/TunnelGangCard.png',
  zest: 'Images/ZestCard.png',
  coworkers: 'Images/CoworkersCard.png',
  groupbonding: 'Images/GroupBondingCard.png',
  walkemdowngardner: 'Images/WalkEmDownGardnerCard.png',
  calraleigh: 'Images/CalRaleighCard.png',
  hellenkeller: 'Images/HelenKellerCard.png',
  helenkeller: 'Images/HelenKellerCard.png',
  mrprez: 'Images/MrPrezCard.png',
  linustorvalds: 'Images/LinusTorvaldsCard.png',
  kanyewest: 'Images/KanyeWestCard.png',
  johnhelldiver: 'Images/JohnHelldiverCard.png',
  scottralls: 'Images/ScottRallsCard.png',
  teddyroosevelt: 'Images/TeddyRooseveltCard.png',
  edwinbooth: 'Images/EdwinBoothCard.png',
  annefrank: 'Images/AnneFrankCard.png',
};

const BOSS_POOL = [
  { name: 'Cal Raleigh', rarity: 'graduated', attack: 3200, defense: 3700, description: 'Graduate boss.', image: 'Images/CalRaleighCard.png' },
  { name: 'Helen Keller', rarity: 'graduated', attack: 3826, defense: 3100, description: 'Graduate boss.', image: 'Images/HelenKellerCard.png' },
  { name: 'Mr Prez', rarity: 'graduated', attack: 3020, defense: 3800, description: 'Graduate boss.', image: 'Images/MrPrezCard.png' },
  { name: 'Linus Torvalds', rarity: 'graduated', attack: 3640, defense: 3800, description: 'Graduate boss.', image: 'Images/LinusTorvaldsCard.png' },
  { name: 'Kanye West', rarity: 'graduated', attack: 3900, defense: 3400, description: 'Graduate boss.', image: 'Images/KanyeWestCard.png' },
  { name: 'John Helldiver', rarity: 'graduated', attack: 3300, defense: 4000, description: 'Graduate boss.', image: 'Images/JohnHelldiverCard.png' },
  { name: 'Scott Ralls', rarity: 'graduated', attack: 3278, defense: 3700, description: 'Graduate boss.', image: 'Images/ScottRallsCard.png' },
  { name: 'Teddy Roosevelt', rarity: 'graduated', attack: 4000, defense: 3800, description: 'Graduate boss.', image: 'Images/TeddyRooseveltCard.png' },
  { name: 'Edwin Booth', rarity: 'graduated', attack: 3300, defense: 3600, description: 'Graduate boss.', image: 'Images/EdwinBoothCard.png' },
  { name: 'Anne Frank', rarity: 'graduated', attack: 4000, defense: 4000, description: 'Graduate boss.', image: 'Images/AnneFrankCard.png' },
];

const AI_CARD_POOL = [
  { name: 'Alex Frieders', rarity: 'freshman', attack: 320, defense: 480, description: 'AI deck card.', image: 'Images/AlexCard.png' },
  { name: 'Darsh', rarity: 'freshman', attack: 470, defense: 350, description: 'AI deck card.', image: 'Images/DarshCard.png' },
  { name: 'Jalen', rarity: 'freshman', attack: 280, defense: 390, description: 'AI deck card.', image: 'Images/JalenCard.png' },
  { name: 'Wake Tech', rarity: 'freshman', attack: 450, defense: 450, description: 'AI deck card.', image: 'Images/WakeTechCard.png' },
  { name: 'Chandler', rarity: 'sophomore', attack: 690, defense: 560, description: 'AI deck card.', image: 'Images/ChandlerThompsonCard.png' },
  { name: 'Charlie Sanchez', rarity: 'sophomore', attack: 710, defense: 520, description: 'AI deck card.', image: 'Images/CharlieSanchezCard.png' },
  { name: 'Grand Library RT1', rarity: 'sophomore', attack: 520, defense: 740, description: 'AI deck card.', image: 'Images/GrandLibraryRT1Card.png' },
  { name: 'Uno', rarity: 'sophomore', attack: 800, defense: 310, description: 'AI deck card.', image: 'Images/UnoCard.png' },
  { name: 'Aura Farming', rarity: 'junior', attack: 1020, defense: 900, description: 'AI deck card.', image: 'Images/AuraFarmingCard.png' },
  { name: 'Jamey Geeked', rarity: 'junior', attack: 1010, defense: 860, description: 'AI deck card.', image: 'Images/JameyGeekedCard.png' },
  { name: 'Mrs. Whittington', rarity: 'junior', attack: 1040, defense: 1000, description: 'AI deck card.', image: 'Images/MrsWhittingtonCard.png' },
  { name: 'Silly Guy', rarity: 'junior', attack: 1070, defense: 720, description: 'AI deck card.', image: 'Images/SillyGuyCard.png' },
  { name: 'Academic Rigor', rarity: 'senior', attack: 1420, defense: 1340, description: 'AI deck card.', image: 'Images/AcademicRigorCard.png' },
  { name: 'Brotherly Love', rarity: 'senior', attack: 1380, defense: 1410, description: 'AI deck card.', image: 'Images/BrotherlyLoveCard.png' },
  { name: 'The Tunnel Gang', rarity: 'senior', attack: 1230, defense: 1490, description: 'AI deck card.', image: 'Images/TunnelGangCard.png' },
  { name: 'Zest', rarity: 'senior', attack: 1340, defense: 1260, description: 'AI deck card.', image: 'Images/ZestCard.png' },
  { name: 'Coworkers', rarity: 'superSenior', attack: 1760, defense: 1600, description: 'AI deck card.', image: 'Images/CoworkersCard.png' },
  { name: 'Group Bonding', rarity: 'superSenior', attack: 1620, defense: 1840, description: 'AI deck card.', image: 'Images/GroupBondingCard.png' },
  { name: 'Walk em Down Gardner', rarity: 'superSenior', attack: 1960, defense: 1600, description: 'AI deck card.', image: 'Images/WalkEmDownGardnerCard.png' },
];

const balanceEl = document.getElementById('balance');
const teamCountEl = document.getElementById('teamCount');
const rewardLabelEl = document.getElementById('rewardLabel');
const modeButtons = [...document.querySelectorAll('.battle-mode-btn')];
const autoTeamBtn = document.getElementById('autoTeamBtn');
const clearTeamBtn = document.getElementById('clearTeamBtn');
const startBattleBtn = document.getElementById('startBattleBtn');
const battleSearchInput = document.getElementById('battleSearchInput');
const battleRarityFilter = document.getElementById('battleRarityFilter');
const teamSlotsEl = document.getElementById('teamSlots');
const battleCardGridEl = document.getElementById('battleCardGrid');
const battleEmptyEl = document.getElementById('battleEmpty');
const battleStatusEl = document.getElementById('battleStatus');
const playerCombatantEl = document.getElementById('playerCombatant');
const enemyCombatantEl = document.getElementById('enemyCombatant');
const playerBenchEl = document.getElementById('playerBench');
const enemyBenchEl = document.getElementById('enemyBench');
const enemyBenchLabelEl = document.getElementById('enemyBenchLabel');
const battleLogEl = document.getElementById('battleLog');

let selectedCardIds = [];
let battleMode = 'boss';
let currentBoss = createBossCard();
let currentAiDeck = createAiDeck();
let lastBattle = null;
let activeBattle = null;
let isBattling = false;

function normalizeCardKey(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizeRarity(rarity) {
  const rarityKey = RARITY_ALIASES[rarity] || rarity || 'freshman';
  return rarityKey in RARITIES ? rarityKey : 'freshman';
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[character]));
}

function resolveCardImage(card) {
  return card.image || CARD_IMAGE_OVERRIDES[normalizeCardKey(card.name)] || '';
}

function enrichCard(card) {
  const rarityKey = normalizeRarity(card.rarityKey || card.rarity);
  return {
    ...card,
    id: card.id || `${normalizeCardKey(card.name)}-${Math.random().toString(16).slice(2)}`,
    rarityKey,
    rarityLabel: RARITIES[rarityKey].label,
    attack: Math.max(80, Number(card.attack) || 100),
    defense: Math.max(80, Number(card.defense) || 100),
    image: resolveCardImage(card),
    description: card.description || '',
  };
}

function formatPP(value) {
  return Number(value).toFixed(2);
}

function formatReward(value) {
  return Math.round(Number(value) || 0);
}

function getInventoryCards() {
  return getInventory().map(enrichCard);
}

function getSelectedTeam() {
  const inventoryById = new Map(getInventoryCards().map((card) => [card.id, card]));
  return selectedCardIds.map((id) => inventoryById.get(id)).filter(Boolean);
}

function getRarityRank(card) {
  return RARITIES[normalizeRarity(card.rarityKey || card.rarity)].rank;
}

function getPowerScore(card) {
  return Number(card.attack || 0) + Number(card.defense || 0);
}

function getDeckBattleReward(team) {
  return Math.max(0, Math.round(team.reduce((sum, card) => sum + getRegularMaxHp(card), 0) / 10));
}

function getRegularMaxHp(card) {
  return Math.max(1, Math.round(Number(card.attack || 0) + Number(card.defense || 0) + 100));
}

function getTodayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDailyBossBase(dayKey = getTodayKey()) {
  const [year, month, day] = dayKey.split('-').map(Number);
  const dayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  const index = dayNumber % BOSS_POOL.length;
  return BOSS_POOL[index];
}

function readBossState() {
  try {
    return JSON.parse(localStorage.getItem(BOSS_STATE_KEY) || '{}') || {};
  } catch (error) {
    return {};
  }
}

function saveBossState(nextState) {
  localStorage.setItem(BOSS_STATE_KEY, JSON.stringify(nextState));
}

function getBossCooldown(now = Date.now()) {
  const defeatedAt = Number(readBossState().defeatedAt || 0);
  const remainingMs = defeatedAt ? Math.max(0, BOSS_COOLDOWN_MS - (now - defeatedAt)) : 0;
  return {
    locked: remainingMs > 0,
    remainingMs,
  };
}

function formatCooldown(ms) {
  const totalMinutes = Math.max(0, Math.ceil(ms / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours <= 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}

function markBossDefeated() {
  saveBossState({
    defeatedAt: Date.now(),
    bossDayKey: currentBoss.dayKey,
    bossName: currentBoss.name,
  });
}

function createBossCard() {
  const dayKey = getTodayKey();
  const base = enrichCard(getDailyBossBase(dayKey));
  const regularHp = getRegularMaxHp(base);
  return {
    ...base,
    id: `boss-${dayKey}-${normalizeCardKey(base.name)}`,
    dayKey,
    isBoss: true,
    maxHp: Math.round(regularHp * 2.35),
    battleAttack: Math.round(base.attack * 0.38),
    description: 'Graduate boss.',
  };
}

function createAiDeck() {
  const pool = [...AI_CARD_POOL].sort(() => Math.random() - 0.5);
  return pool.slice(0, TEAM_LIMIT).map((card, index) => ({
    ...enrichCard(card),
    id: `ai-${index}-${normalizeCardKey(card.name)}-${Math.random().toString(16).slice(2)}`,
  }));
}

function renderCardImage(card, className = 'battle-card-image') {
  return `
    <img class="${className}" src="${escapeHtml(card.image)}" alt="${escapeHtml(card.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
    <div class="battle-card-fallback" style="display:none;">${escapeHtml(initialsFromName(card.name))}</div>
  `;
}

function initialsFromName(name) {
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function renderTeamSlots() {
  const selectedTeam = getSelectedTeam();
  teamSlotsEl.innerHTML = '';

  for (let index = 0; index < TEAM_LIMIT; index += 1) {
    const card = selectedTeam[index];
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = `battle-team-slot${card ? ` rarity-${card.rarityKey}` : ' is-empty'}`;
    slot.disabled = isBattling;
    slot.setAttribute('aria-label', card ? `Remove ${card.name}` : `Empty team slot ${index + 1}`);
    slot.innerHTML = card ? `
      ${renderCardImage(card, 'battle-slot-image')}
      <span>${escapeHtml(card.name)}</span>
    ` : `<span>Slot ${index + 1}</span>`;

    if (card && !isBattling) {
      slot.addEventListener('click', () => {
        selectedCardIds = selectedCardIds.filter((id) => id !== card.id);
        lastBattle = null;
        renderAll();
      });
    }

    teamSlotsEl.appendChild(slot);
  }
}

function renderAvailableCards() {
  const inventory = getInventoryCards();
  const search = battleSearchInput.value.trim().toLowerCase();
  const rarityFilter = battleRarityFilter.value;
  const selected = new Set(selectedCardIds);

  const cards = inventory
    .filter((card) => card.name.toLowerCase().includes(search))
    .filter((card) => rarityFilter === 'all' || card.rarityKey === rarityFilter)
    .sort((left, right) => getRarityRank(right) - getRarityRank(left) || getPowerScore(right) - getPowerScore(left));

  battleEmptyEl.style.display = inventory.length === 0 ? 'block' : 'none';
  battleCardGridEl.innerHTML = '';

  cards.forEach((card) => {
    const isSelected = selected.has(card.id);
    const isLocked = isBattling || (!isSelected && selectedCardIds.length >= TEAM_LIMIT);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `battle-card-option rarity-${card.rarityKey}${isSelected ? ' is-selected' : ''}`;
    button.disabled = isLocked;
    button.innerHTML = `
      <div class="battle-card-art">${renderCardImage(card)}</div>
      <span class="battle-card-name">${escapeHtml(card.name)}</span>
      <span class="battle-card-stats">ATK ${card.attack} / DEF ${card.defense}</span>
    `;
    button.addEventListener('click', () => toggleSelectedCard(card.id));
    battleCardGridEl.appendChild(button);
  });
}

function renderMode() {
  const bossCooldown = getBossCooldown();

  modeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === battleMode);
    button.disabled = isBattling;
  });

  rewardLabelEl.textContent = battleMode === 'boss'
    ? `${BOSS_REWARD} PP`
    : `${formatReward(getDeckBattleReward(currentAiDeck))} PP`;
  startBattleBtn.textContent = isBattling
    ? 'Battling'
    : (battleMode === 'boss' ? 'Start Boss Battle' : 'Start 5v5 Battle');
  enemyBenchLabelEl.textContent = battleMode === 'boss' ? 'Boss' : 'AI Deck';
  startBattleBtn.disabled = isBattling || (battleMode === 'boss' && bossCooldown.locked);
  autoTeamBtn.disabled = isBattling;
  clearTeamBtn.disabled = isBattling;
}

function renderFighter(card, label) {
  if (!card) {
    return `
      <span class="stat-label">${label}</span>
      <div class="battle-empty-combatant">Waiting</div>
    `;
  }

  const hp = Math.max(0, Math.round(card.hp ?? card.maxHp ?? card.defense));
  const maxHp = Math.max(1, Math.round(card.maxHp ?? card.defense));
  const hpPercent = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  const attack = card.battleAttack || card.attack;

  return `
    <span class="stat-label">${label}</span>
    <div class="battle-combatant-card rarity-${card.rarityKey}">
      <div class="battle-combatant-art">${renderCardImage(card, 'battle-combatant-image')}</div>
      <div class="battle-combatant-copy">
        <span class="battle-rarity">${escapeHtml(card.rarityLabel)}</span>
        <h3>${escapeHtml(card.name)}</h3>
        <div class="battle-hp">
          <span>HP ${hp}/${maxHp}</span>
          <div class="battle-hp-track"><div class="battle-hp-fill" style="width:${hpPercent}%"></div></div>
        </div>
        <div class="battle-stat-line">
          <span>ATK ${attack}</span>
          <span>DEF ${card.defense}</span>
        </div>
      </div>
    </div>
  `;
}

function renderBenchCard(card) {
  const hp = Math.max(0, Math.round(card.hp ?? card.maxHp ?? card.defense));
  const maxHp = Math.max(1, Math.round(card.maxHp ?? card.defense));
  const hpPercent = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  return `
    <div class="battle-bench-card rarity-${card.rarityKey}${hp <= 0 ? ' is-fainted' : ''}">
      ${renderCardImage(card, 'battle-bench-image')}
      <div>
        <span>${escapeHtml(card.name)}</span>
        <div class="battle-mini-hp"><div style="width:${hpPercent}%"></div></div>
      </div>
    </div>
  `;
}

function getPreviewEnemyTeam() {
  return battleMode === 'boss' ? [currentBoss] : currentAiDeck;
}

function getActiveFighter(team) {
  return team.find((card) => (card.hp ?? card.maxHp ?? card.defense) > 0) || team[team.length - 1] || null;
}

function renderArena() {
  const selectedTeam = getSelectedTeam().map((card) => ({
    ...card,
    hp: getRegularMaxHp(card),
    maxHp: getRegularMaxHp(card),
  }));
  const enemyTeam = getPreviewEnemyTeam().map((card) => ({
    ...card,
    hp: card.isBoss ? card.maxHp : getRegularMaxHp(card),
    maxHp: card.isBoss ? card.maxHp : getRegularMaxHp(card),
  }));

  const battleState = activeBattle || lastBattle;
  const playerTeam = battleState?.playerTeam || selectedTeam;
  const opponentTeam = battleState?.enemyTeam || enemyTeam;
  const playerActive = battleState && battleState.playerIndex >= 0
    ? playerTeam[battleState.playerIndex]
    : getActiveFighter(playerTeam);
  const enemyActive = battleState && battleState.enemyIndex >= 0
    ? opponentTeam[battleState.enemyIndex]
    : getActiveFighter(opponentTeam);

  playerCombatantEl.innerHTML = renderFighter(playerActive, 'Your Card');
  enemyCombatantEl.innerHTML = renderFighter(enemyActive, battleMode === 'boss' ? 'Boss' : 'Opponent');
  playerBenchEl.innerHTML = playerTeam.length ? playerTeam.map(renderBenchCard).join('') : '<span class="battle-empty-text">No team selected</span>';
  enemyBenchEl.innerHTML = opponentTeam.map(renderBenchCard).join('');

  if (!battleState) {
    battleLogEl.innerHTML = '<p>Battle log will appear here.</p>';
  } else {
    battleLogEl.innerHTML = battleState.logs.map((line) => `<p>${escapeHtml(line)}</p>`).join('');
    battleLogEl.scrollTop = battleLogEl.scrollHeight;
  }
}

function renderStatus() {
  if (activeBattle) {
    battleStatusEl.textContent = activeBattle.resultText || 'Battle in progress.';
    return;
  }

  const bossCooldown = getBossCooldown();
  if (battleMode === 'boss' && bossCooldown.locked && lastBattle?.playerWon) {
    battleStatusEl.textContent = `Boss cleared. +${BOSS_REWARD} PP. Next fight in ${formatCooldown(bossCooldown.remainingMs)}.`;
    return;
  }

  if (lastBattle) {
    battleStatusEl.textContent = lastBattle.resultText;
    return;
  }

  if (battleMode === 'boss' && bossCooldown.locked) {
    battleStatusEl.textContent = `Boss cleared. Next fight in ${formatCooldown(bossCooldown.remainingMs)}.`;
    return;
  }

  battleStatusEl.textContent = battleMode === 'boss'
    ? `${currentBoss.name} is today's boss.`
    : 'The opponent deck is ready.';
}

function renderAll() {
  refreshDailyBoss();
  const team = getSelectedTeam();
  balanceEl.textContent = formatPP(getBalance());
  teamCountEl.textContent = String(team.length);
  renderMode();
  renderTeamSlots();
  renderAvailableCards();
  renderArena();
  renderStatus();
}

function toggleSelectedCard(cardId) {
  if (selectedCardIds.includes(cardId)) {
    selectedCardIds = selectedCardIds.filter((id) => id !== cardId);
  } else if (selectedCardIds.length < TEAM_LIMIT) {
    selectedCardIds = [...selectedCardIds, cardId];
  }

  lastBattle = null;
  renderAll();
}

function autoFillTeam() {
  selectedCardIds = getInventoryCards()
    .sort((left, right) => getPowerScore(right) - getPowerScore(left))
    .slice(0, TEAM_LIMIT)
    .map((card) => card.id);
  lastBattle = null;
  renderAll();
}

function clearTeam() {
  selectedCardIds = [];
  lastBattle = null;
  renderAll();
}

function switchMode(nextMode) {
  battleMode = nextMode;
  lastBattle = null;
  if (battleMode === 'boss') {
    currentBoss = createBossCard();
  } else {
    currentAiDeck = createAiDeck();
  }
  renderAll();
}

function refreshDailyBoss() {
  if (currentBoss.dayKey !== getTodayKey()) {
    currentBoss = createBossCard();
    if (battleMode === 'boss') {
      lastBattle = null;
    }
    return true;
  }
  return false;
}

function createFighter(card, side) {
  const maxHp = card.isBoss
    ? Math.max(1, Math.round(card.maxHp || getRegularMaxHp(card)))
    : getRegularMaxHp(card);
  return {
    ...card,
    side,
    hp: maxHp,
    maxHp,
    battleAttack: card.battleAttack || card.attack,
  };
}

function nextAliveIndex(team, startIndex) {
  for (let index = startIndex; index < team.length; index += 1) {
    if (team[index].hp > 0) return index;
  }
  return -1;
}

function calculateDamage(attacker, defender) {
  const baseAttack = Math.max(1, Number(attacker.battleAttack || attacker.attack));
  const guard = Math.round((Number(defender.defense) || 0) * 0.07);
  const variance = 0.9 + Math.random() * 0.2;
  return Math.max(30, Math.round(baseAttack * variance - guard));
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function pushBattleLog(message) {
  activeBattle.logs.push(message);
  renderArena();
  renderStatus();
}

async function playAttackAnimation(attackerSide) {
  const attackerEl = attackerSide === 'player' ? playerCombatantEl : enemyCombatantEl;
  const defenderEl = attackerSide === 'player' ? enemyCombatantEl : playerCombatantEl;
  attackerEl.classList.add('is-attacking');
  defenderEl.classList.add('is-hit');
  await delay(TURN_DELAY_MS);
  attackerEl.classList.remove('is-attacking');
  defenderEl.classList.remove('is-hit');
}

async function playEntryAnimation(side) {
  const element = side === 'player' ? playerCombatantEl : enemyCombatantEl;
  element.classList.add('is-entering');
  await delay(ENTRY_DELAY_MS);
  element.classList.remove('is-entering');
}

function createBattleState(playerCards, enemyCards) {
  const playerTeam = playerCards.map((card) => createFighter(card, 'player'));
  const enemyTeam = enemyCards.map((card) => createFighter(card, 'enemy'));
  return {
    playerWon: false,
    resultText: 'Battle in progress.',
    playerTeam,
    enemyTeam,
    playerIndex: nextAliveIndex(playerTeam, 0),
    enemyIndex: nextAliveIndex(enemyTeam, 0),
    logs: [],
  };
}

async function runBattle(playerCards, enemyCards) {
  activeBattle = createBattleState(playerCards, enemyCards);
  lastBattle = null;
  let turns = 0;

  pushBattleLog(`${activeBattle.playerTeam[activeBattle.playerIndex].name} enters.`);
  await playEntryAnimation('player');
  pushBattleLog(`${activeBattle.enemyTeam[activeBattle.enemyIndex].name} enters.`);
  await playEntryAnimation('enemy');

  while (activeBattle.playerIndex >= 0 && activeBattle.enemyIndex >= 0 && turns < 180) {
    const player = activeBattle.playerTeam[activeBattle.playerIndex];
    const enemy = activeBattle.enemyTeam[activeBattle.enemyIndex];
    const playerDamage = calculateDamage(player, enemy);
    enemy.hp = Math.max(0, enemy.hp - playerDamage);
    pushBattleLog(`${player.name} hits ${enemy.name} for ${playerDamage}.`);
    await playAttackAnimation('player');

    if (enemy.hp <= 0) {
      pushBattleLog(`${enemy.name} is down.`);
      activeBattle.enemyIndex = nextAliveIndex(activeBattle.enemyTeam, activeBattle.enemyIndex + 1);
      renderArena();
      if (activeBattle.enemyIndex >= 0) {
        pushBattleLog(`${activeBattle.enemyTeam[activeBattle.enemyIndex].name} enters.`);
        await playEntryAnimation('enemy');
      }
      turns += 1;
      continue;
    }

    const enemyDamage = calculateDamage(enemy, player);
    player.hp = Math.max(0, player.hp - enemyDamage);
    pushBattleLog(`${enemy.name} hits ${player.name} for ${enemyDamage}.`);
    await playAttackAnimation('enemy');

    if (player.hp <= 0) {
      pushBattleLog(`${player.name} is down.`);
      activeBattle.playerIndex = nextAliveIndex(activeBattle.playerTeam, activeBattle.playerIndex + 1);
      renderArena();
      if (activeBattle.playerIndex >= 0) {
        pushBattleLog(`${activeBattle.playerTeam[activeBattle.playerIndex].name} enters.`);
        await playEntryAnimation('player');
      }
    }

    turns += 1;
  }

  activeBattle.playerWon = activeBattle.enemyTeam.every((card) => card.hp <= 0);
  activeBattle.reward = activeBattle.playerWon
    ? (battleMode === 'boss' ? BOSS_REWARD : getDeckBattleReward(activeBattle.enemyTeam))
    : 0;
  const resultText = activeBattle.playerWon
    ? (battleMode === 'boss' ? `Boss cleared. +${BOSS_REWARD} PP` : `5v5 battle won. +${formatReward(activeBattle.reward)} PP`)
    : (battleMode === 'boss' ? 'Boss battle lost.' : 'Computer deck won.');

  activeBattle.resultText = resultText;
  pushBattleLog(resultText);

  return {
    playerWon: activeBattle.playerWon,
    resultText,
    playerTeam: activeBattle.playerTeam,
    enemyTeam: activeBattle.enemyTeam,
    reward: activeBattle.reward,
    playerIndex: activeBattle.playerIndex,
    enemyIndex: activeBattle.enemyIndex,
    logs: [...activeBattle.logs],
  };
}

async function startBattle() {
  if (isBattling) return;

  const selectedTeam = getSelectedTeam();

  if (selectedTeam.length === 0) {
    battleStatusEl.textContent = 'Choose at least one card.';
    return;
  }

  const bossCooldown = getBossCooldown();
  if (battleMode === 'boss' && bossCooldown.locked) {
    battleStatusEl.textContent = `Boss cleared. Next fight in ${formatCooldown(bossCooldown.remainingMs)}.`;
    return;
  }

  const enemyTeam = battleMode === 'boss' ? [currentBoss] : currentAiDeck;
  isBattling = true;
  renderAll();
  lastBattle = await runBattle(selectedTeam, enemyTeam);

  if (battleMode === 'boss' && lastBattle.playerWon) {
    markBossDefeated();
    grantPP(BOSS_REWARD);
  } else if (battleMode === 'deck' && lastBattle.playerWon) {
    grantPP(lastBattle.reward);
  }

  activeBattle = null;
  isBattling = false;
  renderAll();
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => switchMode(button.dataset.mode));
});

autoTeamBtn.addEventListener('click', autoFillTeam);
clearTeamBtn.addEventListener('click', clearTeam);
startBattleBtn.addEventListener('click', startBattle);
battleSearchInput.addEventListener('input', renderAvailableCards);
battleRarityFilter.addEventListener('change', renderAvailableCards);

window.addEventListener('wecib:state-changed', () => {
  renderAll();
});

renderAll();
window.setInterval(() => {
  balanceEl.textContent = formatPP(getBalance());
  if (battleMode === 'boss' && !isBattling) {
    if (refreshDailyBoss()) {
      renderAll();
    } else {
      renderMode();
      renderStatus();
    }
  }
}, 1000);
