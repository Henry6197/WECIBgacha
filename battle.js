const RARITIES = {
  freshman:   { label: 'Freshman',    template: 'images/templates/FreshmanCardTemplate.png' },
  sophomore:  { label: 'Sophomore',   template: 'images/templates/SophomoreCardTemplate.png' },
  junior:     { label: 'Junior',      template: 'images/templates/JuniorCardTemplate.png' },
  senior:     { label: 'Senior',      template: 'images/templates/SeniorCardTemplate.png' },
  superSenior:{ label: 'Super-Senior',template: 'images/templates/Super-SeniorCardTemplate.png' },
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior'];

const balanceEl = document.getElementById('balance');
const inventoryCountEl = document.getElementById('inventoryCount');
const incomeRateEl = document.getElementById('incomeRate');
const teamSizeSelect = document.getElementById('teamSize');
const teamASlotsEl = document.getElementById('teamASlots');
const teamBSlotsEl = document.getElementById('teamBSlots');
const battleInventoryGridEl = document.getElementById('battleInventoryGrid');
const inventoryEmptyEl = document.getElementById('inventoryEmpty');
const startBattleBtn = document.getElementById('startBattleBtn');
const resetSetupBtn = document.getElementById('resetSetupBtn');
const setupErrorEl = document.getElementById('setupError');
const setupPanel = document.getElementById('setupPanel');
const inventoryPanel = document.getElementById('inventoryPanel');
const battleArena = document.getElementById('battleArena');
const arenaTeamAEl = document.getElementById('arenaTeamA');
const arenaTeamBEl = document.getElementById('arenaTeamB');
const turnIndicatorEl = document.getElementById('turnIndicator');
const battleLogEl = document.getElementById('battleLog');
const nextTurnBtn = document.getElementById('nextTurnBtn');
const autoBattleBtn = document.getElementById('autoBattleBtn');
const newBattleBtn = document.getElementById('newBattleBtn');

let teamSize = 1;
let teamA = [];
let teamB = [];
let selectedSlot = { team: 'A', index: 0 };
let battleState = null;
let autoBattleInterval = null;

function normalizeRarity(rarity) {
  return rarity in RARITIES ? rarity : 'freshman';
}

function enrichCard(card) {
  const rarityKey = normalizeRarity(card.rarityKey || card.rarity);
  return {
    ...card,
    rarityKey,
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

function getRarityRank(rarityKey) {
  return RARITY_ORDER.indexOf(rarityKey);
}

function updateDashboard() {
  const inventory = getInventory();
  balanceEl.textContent = formatPP(getBalance());
  inventoryCountEl.textContent = String(inventory.length);
  incomeRateEl.textContent = formatPP(getPassiveIncomePerHour());
}

function renderCardMarkup(card, options = {}) {
  const safeCard = enrichCard(card);
  const templateSrc = RARITIES[safeCard.rarityKey].template;
  const showHp = typeof options.currentHp === 'number';
  const maxHp = safeCard.defense || 1;
  const hpPercent = showHp ? Math.max(0, Math.min(100, (options.currentHp / maxHp) * 100)) : 100;

  return `
    <div class="tcg-card rarity-${safeCard.rarityKey} ${options.dead ? 'dead' : ''} ${options.active ? 'active-turn' : ''}">
      <img class="tcg-template" src="${templateSrc}" alt="">
      <div class="tcg-art-area">
        <span class="tcg-art-initials">${initialsFromName(safeCard.name)}</span>
      </div>
      <div class="tcg-text-area">
        <h4 class="tcg-name">${safeCard.name}</h4>
        <p class="tcg-desc">${safeCard.description || ''}</p>
        <div class="tcg-stats">ATK ${safeCard.attack} | DEF ${safeCard.defense}</div>
        ${showHp ? `<div class="hp-bar"><div class="hp-fill" style="width:${hpPercent}%"></div></div>` : ''}
      </div>
    </div>
  `;
}

function renderInventory() {
  const inventory = getInventory();
  battleInventoryGridEl.innerHTML = '';

  if (inventory.length === 0) {
    inventoryEmptyEl.hidden = false;
    return;
  }
  inventoryEmptyEl.hidden = true;

  inventory.forEach((card, index) => {
    const safeCard = enrichCard(card);
    const el = document.createElement('div');
    el.className = 'battle-inventory-card';
    el.innerHTML = renderCardMarkup(safeCard);
    el.addEventListener('click', () => assignCardToSlot(index));
    battleInventoryGridEl.appendChild(el);
  });
}

function renderTeamSlots() {
  teamASlotsEl.innerHTML = '';
  teamBSlotsEl.innerHTML = '';

  for (let i = 0; i < teamSize; i++) {
    const aSlot = document.createElement('div');
    aSlot.className = `team-slot ${selectedSlot.team === 'A' && selectedSlot.index === i ? 'selected' : ''}`;
    aSlot.innerHTML = teamA[i]
      ? renderCardMarkup(teamA[i])
      : `<div class="team-slot-empty">Slot ${i + 1}</div>`;
    aSlot.addEventListener('click', () => {
      selectedSlot = { team: 'A', index: i };
      renderTeamSlots();
    });
    teamASlotsEl.appendChild(aSlot);

    const bSlot = document.createElement('div');
    bSlot.className = `team-slot ${selectedSlot.team === 'B' && selectedSlot.index === i ? 'selected' : ''}`;
    bSlot.innerHTML = teamB[i]
      ? renderCardMarkup(teamB[i])
      : `<div class="team-slot-empty">Slot ${i + 1}</div>`;
    bSlot.addEventListener('click', () => {
      selectedSlot = { team: 'B', index: i };
      renderTeamSlots();
    });
    teamBSlotsEl.appendChild(bSlot);
  }
}

function assignCardToSlot(inventoryIndex) {
  const inventory = getInventory();
  const card = inventory[inventoryIndex];
  if (!card) return;

  if (selectedSlot.team === 'A') {
    teamA[selectedSlot.index] = enrichCard(card);
  } else {
    teamB[selectedSlot.index] = enrichCard(card);
  }

  renderTeamSlots();
}

function validateSetup() {
  if (teamA.filter(Boolean).length !== teamSize) {
    return 'Team A is not full.';
  }
  if (teamB.filter(Boolean).length !== teamSize) {
    return 'Team B is not full.';
  }
  return '';
}

function cloneForBattle(cards) {
  return cards.filter(Boolean).map((card) => ({
    ...card,
    currentHp: card.defense || 1,
    maxHp: card.defense || 1,
    dead: false,
  }));
}

function getFirstLivingIndex(team) {
  return team.findIndex((c) => !c.dead);
}

function logMessage(message, type = '') {
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  entry.textContent = message;
  battleLogEl.appendChild(entry);
  battleLogEl.scrollTop = battleLogEl.scrollHeight;
}

function renderArena() {
  if (!battleState) return;

  arenaTeamAEl.innerHTML = battleState.teamA.map((card, i) => {
    const isActive = battleState.turnTeam === 'A' && getFirstLivingIndex(battleState.teamA) === i && !battleState.over;
    return renderCardMarkup(card, { currentHp: card.currentHp, dead: card.dead, active: isActive });
  }).join('');

  arenaTeamBEl.innerHTML = battleState.teamB.map((card, i) => {
    const isActive = battleState.turnTeam === 'B' && getFirstLivingIndex(battleState.teamB) === i && !battleState.over;
    return renderCardMarkup(card, { currentHp: card.currentHp, dead: card.dead, active: isActive });
  }).join('');

  turnIndicatorEl.textContent = battleState.over
    ? `${battleState.winner} Wins!`
    : `${battleState.turnTeam === 'A' ? 'Team A' : 'Team B'}'s Turn`;
}

function checkBattleOver() {
  const aAlive = battleState.teamA.some((c) => !c.dead);
  const bAlive = battleState.teamB.some((c) => !c.dead);

  if (!aAlive) {
    battleState.over = true;
    battleState.winner = 'Team B';
    return true;
  }
  if (!bAlive) {
    battleState.over = true;
    battleState.winner = 'Team A';
    return true;
  }
  return false;
}

function doTurn() {
  if (!battleState || battleState.over) return;

  const attackingTeam = battleState.turnTeam === 'A' ? battleState.teamA : battleState.teamB;
  const defendingTeam = battleState.turnTeam === 'A' ? battleState.teamB : battleState.teamA;
  const attackerIndex = getFirstLivingIndex(attackingTeam);
  const defenderIndex = getFirstLivingIndex(defendingTeam);

  if (attackerIndex === -1 || defenderIndex === -1) {
    checkBattleOver();
    renderArena();
    return;
  }

  const attacker = attackingTeam[attackerIndex];
  const defender = defendingTeam[defenderIndex];
  const damage = attacker.attack || 0;

  defender.currentHp = Math.max(0, defender.currentHp - damage);
  if (defender.currentHp <= 0) {
    defender.dead = true;
    logMessage(`${attacker.name} deals ${damage} damage and KOs ${defender.name}!`, 'ko');
  } else {
    logMessage(`${attacker.name} attacks ${defender.name} for ${damage} damage. (${defender.currentHp}/${defender.maxHp} HP)`, 'attack');
  }

  if (checkBattleOver()) {
    logMessage(`${battleState.winner} wins the battle!`, 'win');
    nextTurnBtn.hidden = true;
    autoBattleBtn.hidden = true;
    newBattleBtn.hidden = false;
    renderArena();
    return;
  }

  battleState.turnTeam = battleState.turnTeam === 'A' ? 'B' : 'A';
  renderArena();
}

function startBattle() {
  const error = validateSetup();
  if (error) {
    setupErrorEl.textContent = error;
    return;
  }
  setupErrorEl.textContent = '';

  battleState = {
    teamA: cloneForBattle(teamA),
    teamB: cloneForBattle(teamB),
    turnTeam: 'A',
    over: false,
    winner: null,
  };

  setupPanel.hidden = true;
  inventoryPanel.hidden = true;
  battleArena.hidden = false;
  battleLogEl.innerHTML = '';
  nextTurnBtn.hidden = false;
  autoBattleBtn.hidden = false;
  newBattleBtn.hidden = true;

  logMessage('Battle begins! Team A goes first.');
  renderArena();
}

function resetSetup() {
  teamA = [];
  teamB = [];
  selectedSlot = { team: 'A', index: 0 };
  setupErrorEl.textContent = '';
  renderTeamSlots();
}

function newBattle() {
  battleState = null;
  if (autoBattleInterval) {
    clearInterval(autoBattleInterval);
    autoBattleInterval = null;
  }
  setupPanel.hidden = false;
  inventoryPanel.hidden = false;
  battleArena.hidden = true;
  resetSetup();
}

function autoBattle() {
  if (autoBattleInterval) {
    clearInterval(autoBattleInterval);
    autoBattleInterval = null;
    autoBattleBtn.textContent = 'Auto Battle';
    return;
  }

  autoBattleBtn.textContent = 'Stop Auto';
  autoBattleInterval = setInterval(() => {
    if (!battleState || battleState.over) {
      clearInterval(autoBattleInterval);
      autoBattleInterval = null;
      autoBattleBtn.textContent = 'Auto Battle';
      return;
    }
    doTurn();
  }, 800);
}

teamSizeSelect.addEventListener('change', (e) => {
  teamSize = Number(e.target.value);
  teamA = [];
  teamB = [];
  selectedSlot = { team: 'A', index: 0 };
  renderTeamSlots();
});

startBattleBtn.addEventListener('click', startBattle);
resetSetupBtn.addEventListener('click', resetSetup);
nextTurnBtn.addEventListener('click', doTurn);
autoBattleBtn.addEventListener('click', autoBattle);
newBattleBtn.addEventListener('click', newBattle);

updateDashboard();
renderInventory();
renderTeamSlots();
window.setInterval(updateDashboard, 1000);

