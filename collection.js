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
const collectionGridEl = document.getElementById('collectionGrid');
const collectionEmptyEl = document.getElementById('collectionEmpty');
const collectionSummaryEl = document.getElementById('collectionSummary');
const resetProgressBtn = document.getElementById('resetProgressBtn');

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

function renderCardMarkup(card) {
  const safeCard = enrichCard(card);
  const templateSrc = RARITIES[safeCard.rarityKey].template;

  return `
    <div class="tcg-card rarity-${safeCard.rarityKey}">
      <img class="tcg-template" src="${templateSrc}" alt="">
      <div class="tcg-art-area">
        <span class="tcg-art-initials">${initialsFromName(safeCard.name)}</span>
      </div>
      <div class="tcg-text-area">
        <h4 class="tcg-name">${safeCard.name}</h4>
        <p class="tcg-desc">${safeCard.description || ''}</p>
        <div class="tcg-stats">ATK ${safeCard.attack} &nbsp;|&nbsp; DEF ${safeCard.defense}</div>
      </div>
    </div>
  `;
}

function updateDashboard() {
  const inventory = getInventory();
  balanceEl.textContent = formatPP(getBalance());
  inventoryCountEl.textContent = String(inventory.length);
  incomeRateEl.textContent = formatPP(getPassiveIncomePerHour());
}

function getGroupedCollection() {
  const groups = new Map();

  getInventory().forEach((card) => {
    const safeCard = enrichCard(card);
    const key = `${safeCard.name}::${safeCard.rarityKey}::${safeCard.caseName}`;
    const existing = groups.get(key);

    if (existing) {
      existing.copies += 1;
      if (new Date(safeCard.wonAt) > new Date(existing.wonAt)) {
        existing.wonAt = safeCard.wonAt;
      }
      return;
    }

    groups.set(key, { ...safeCard, copies: 1 });
  });

  return [...groups.values()].sort((left, right) => {
    const rarityDiff = getRarityRank(right.rarityKey) - getRarityRank(left.rarityKey);
    if (rarityDiff !== 0) {
      return rarityDiff;
    }

    if (right.copies !== left.copies) {
      return right.copies - left.copies;
    }

    return left.name.localeCompare(right.name);
  });
}

function renderCollection() {
  const inventory = getInventory();
  const groups = getGroupedCollection();

  collectionGridEl.innerHTML = '';
  collectionEmptyEl.hidden = inventory.length > 0;

  if (inventory.length === 0) {
    collectionSummaryEl.textContent = 'No cards collected yet.';
    return;
  }

  const raritySummary = RARITY_ORDER.map((rarityKey) => {
    const count = inventory.filter((card) => enrichCard(card).rarityKey === rarityKey).length;
    return `${RARITIES[rarityKey].label}: ${count}`;
  }).join(' | ');

  collectionSummaryEl.textContent = `${inventory.length} total cards. ${raritySummary}`;

  groups.forEach((group) => {
    const collectionCard = document.createElement('article');
    collectionCard.className = `collection-card rarity-${group.rarityKey}`;
    const sellValue = getCardSellValue(group);
    const groupKey = `${group.name}::${group.rarityKey}::${group.caseName}`;

    collectionCard.innerHTML = `
      ${renderCardMarkup(group)}
      <div class="card-overlay">
        <span class="copy-count">x${group.copies}</span>
        <div class="collection-buttons">
          <button type="button" class="btn btn-secondary btn-sell-one">Sell 1</button>
          <button type="button" class="btn btn-open btn-sell-all">Sell All</button>
        </div>
      </div>
    `;

    const sellOneBtn = collectionCard.querySelector('.btn-sell-one');
    const sellAllBtn = collectionCard.querySelector('.btn-sell-all');

    sellOneBtn?.addEventListener('click', () => {
      const result = sellCardsByGroup(groupKey, 1);
      if (result.sold > 0) {
        updateDashboard();
        renderCollection();
      }
    });

    sellAllBtn?.addEventListener('click', () => {
      const result = sellCardsByGroup(groupKey, group.copies);
      if (result.sold > 0) {
        updateDashboard();
        renderCollection();
      }
    });

    collectionGridEl.appendChild(collectionCard);
  });
}

resetProgressBtn.addEventListener('click', () => {
  const shouldReset = window.confirm('Reset your WECIBGacha collection and PP progress?');
  if (!shouldReset) {
    return;
  }

  resetGameState();
  updateDashboard();
  renderCollection();
});

updateDashboard();
renderCollection();
window.setInterval(updateDashboard, 1000);
