/**
 * WECIB GACHA - Collections Logic
 * Enhanced Visuals, Rarity & Stat Sorting
 */

const RARITIES = {
    freshman: { label: 'Freshman', template: 'images/templates/FreshmanCardTemplate.png', popColor: '#4d88ff' },
    sophomore: { label: 'Sophomore', template: 'images/templates/SophomoreCardTemplate.png', popColor: '#5cd65c' },
    junior: { label: 'Junior', template: 'images/templates/JuniorCardTemplate.png', popColor: '#3366ff' },
    senior: { label: 'Senior', template: 'images/templates/SeniorCardTemplate.png', popColor: '#ff8533' },
    superSenior: { label: 'Super-Senior', template: 'images/templates/Super-SeniorCardTemplate.png', popColor: '#ffcc00' },
    graduated: { label: 'Graduate', template: 'images/templates/Super-SeniorCardTemplate.png', popColor: '#c66bff' },
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior', 'graduated'];

const CARD_IMAGE_OVERRIDES = {
    ab: 'images/ABCard.png',
    alexfrieders: 'images/AlexCard.png',
    annamoore: 'images/AnnaCard.png',
    beatricekovalik: 'images/BeatriceCard.png',
    beatrice: 'images/BeatriceCard.png',
    christian: 'images/ChristianCard.png',
    darsh: 'images/DarshCard.png',
    emiliafisher: 'images/EmilaCard.png',
    eristhompson: 'images/ErisCard.png',
    genesis: 'images/GenesisCard.png',
    henryshort: 'images/HenryCard.png',
    iniya: 'images/IniyaCard.png',
    iremide: 'images/IremideCard.png',
    jacobhartzell: 'images/JacobCard.png',
    jalen: 'images/JalenCard.png',
    jalenwalker: 'images/JalenCard.png',
    jameybrandon: 'images/JameyCard.png',
    logain: 'images/LogainCard.png',
    nicholasfoles: 'images/NicholasCard.png',
    noahcouch: 'images/NoahCard.png',
    rafaltoborek: 'images/RafalCard.png',
    ryanshutte: 'images/RyanCard.png',
    serena: 'images/SerenaCard.png',
    serenarogers: 'images/SerenaCard.png',
    treyvonpearson: 'images/TreyvonCard.png',
    waketech: 'images/WakeTechCard.png',
    annasplit: 'images/AnnaSplitCard.png',
    chandler: 'images/ChandlerThompsonCard.png',
    chandlerthompson: 'images/ChandlerThompsonCard.png',
    charlie: 'images/CharlieSanchezCard.png',
    charliesanchez: 'images/CharlieSanchezCard.png',
    dudeguys: 'images/DudeGuysCard.png',
    gatorademachinert1: 'images/GatoradeMachineRT1Card.png',
    grandlibraryrt1: 'images/GrandLibraryRT1Card.png',
    wallholes: 'images/WallHolesCard.png',
    josephjameslennertiii: 'images/JosephLennertCard.png',
    mhscampus: 'images/MHSCampusCard.png',
    gymnasium: 'images/MHSGymCard.png',
    theater: 'images/MHSTheaterCard.png',
    poppimachine: 'images/PoppiVendingRT1.png',
    sidewaysjamey: 'images/SidewaysJameyCard.png',
    sustenance: 'images/SustenanceCard.png',
    tristanowen: 'images/TristanOwenCard.png',
    uno: 'images/UnoCard.png',
    academicrigor: 'images/AcademicRigorCard.png',
    aurafarming: 'images/AuraFarmingCard.png',
    babyprez: 'images/BabyPrezCard.png',
    ethangardner: 'images/EthanGardnerCard.png',
    gardnerpizza: 'images/GardnerPizzaCard.png',
    jameygeeked: 'images/JameyGeekedCard.png',
    beatriceandjamey: 'images/BeatriceAndJameyCard.png',
    freshmanjamey: 'images/FreshmanJameyCard.png',
    jojos: 'images/JojoCard.png',
    lowpolyjamey: 'images/LowPolyJameyCard.png',
    mrgross: 'images/MrGrossCard.png',
    mrswhittington: 'images/MrsWhittingtonCard.png',
    sami: 'images/SamiCard.png',
    sillyguy: 'images/SillyGuyCard.png',
    bestbuds: 'images/2BestBudsCard.png',
    brotherlylove: 'images/BrotherlyLoveCard.png',
    gardnerwhite: 'images/GardnerWhiteCard.png',
    pleasejameyineedthis: 'images/PleaseJameyCard.png',
    pleasemrgardnerineedthis: 'images/GardnerNeedThisCard.png',
    thetunnelgang: 'images/TunnelGangCard.png',
    zest: 'images/ZestCard.png',
    coworkers: 'images/CoworkersCard.png',
    groupbonding: 'images/GroupBondingCard.png',
    walkemdowngardner: 'images/WalkEmDownGardnerCard.png',
    calraleigh: 'images/CalRaleighCard.png',
    hellenkeller: 'images/HelenKellerCard.png',
    mrprez: 'images/MrPrezCard.png',
    linustorvalds: 'images/LinusTorvaldsCard.png',
    kanyewest: 'images/KanyeWestCard.png',
    johnhelldiver: 'images/JohnHelldiverCard.png',
    scottralls: 'images/ScottRallsCard.png',
    teddyroosevelt: 'images/TeddyRooseveltCard.png',
    edwinbooth: 'images/EdwinBoothCard.png',
    annefrank: 'images/AnneFrankCard.png',
};

function normalizeCardKey(name) {
    return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function resolveCardImage(card) {
    if (card.image) return card.image;
    return CARD_IMAGE_OVERRIDES[normalizeCardKey(card.name)] || '';
}

const balanceEl = document.getElementById('balance');
const inventoryCountEl = document.getElementById('inventoryCount');
const incomeRateEl = document.getElementById('incomeRate');
const collectionGridEl = document.getElementById('collectionGrid');
const collectionEmptyEl = document.getElementById('collectionEmpty');
const collectionSummaryEl = document.getElementById('collectionSummary');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const searchInput = document.getElementById('searchInput');
const rarityFilter = document.getElementById('rarityFilter');
const dateSort = document.getElementById('dateSort');

// --- Helpers ---

function normalizeRarity(rarity) {
    if (rarity in RARITIES) return rarity;
    for (const key in RARITIES) {
        if (RARITIES[key].label === rarity) return key;
    }
    return 'freshman';
}

function enrichCard(card) {
    const rarityKey = normalizeRarity(card.rarityKey || card.rarity);
    return { ...card, rarityKey, rarityLabel: RARITIES[rarityKey].label, image: resolveCardImage(card) };
}

function getRarityRank(rarityKey) {
    return RARITY_ORDER.indexOf(rarityKey);
}

function formatPP(value) { return Number(value).toFixed(2); }

function initialsFromName(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 3).map(p => p[0]).join('').toUpperCase();
}

// --- UI Logic ---

function renderCardMarkup(card) {
    const safe = enrichCard(card);
    return `
    <div class="tcg-card rarity-${safe.rarityKey}">
            <img class="tcg-art-img" src="${safe.image || ''}" alt="${safe.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
            <div class="tcg-art-fallback" style="display:none;">
                <span class="tcg-art-initials">${initialsFromName(safe.name)}</span>
            </div>
    </div>`;
}

function updateRarityChart(inventory) {
    const chartEl = document.getElementById('rarityChart');
    const legendEl = document.getElementById('rarityLegend');
    if (!chartEl || !legendEl) return;

    const total = inventory.length;
    if (total === 0) {
        chartEl.style.background = '#333';
        legendEl.innerHTML = 'No cards yet';
        return;
    }

    const counts = RARITY_ORDER.map(key => ({
        key,
        count: inventory.filter(c => normalizeRarity(c.rarityKey || c.rarity) === key).length,
        color: RARITIES[key].popColor
    }));

    let lastPercent = 0;
    const gradient = counts.map(item => {
        const percent = (item.count / total) * 100;
        const slice = `${item.color} ${lastPercent}% ${lastPercent + percent}%`;
        lastPercent += percent;
        return slice;
    }).join(', ');

    chartEl.style.background = `conic-gradient(${gradient})`;

    legendEl.innerHTML = counts.map(item => `
        <div class="legend-item" style="color: ${item.count > 0 ? '#fff' : '#666'}">
            <span class="dot" style="background:${item.color}; box-shadow: 0 0 8px ${item.color}88"></span>
            ${RARITIES[item.key].label} (${item.count})
        </div>
    `).join('');
}

function updateDashboard() {
    const inv = getInventory();
    if (balanceEl) balanceEl.textContent = formatPP(getBalance());
    if (inventoryCountEl) inventoryCountEl.textContent = String(inv.length);
    if (incomeRateEl) incomeRateEl.textContent = formatPP(getPassiveIncomePerHour());
}

function getGroupedCollection(list) {
    const groups = new Map();
    list.forEach(c => {
        const safe = enrichCard(c);
        const key = `${safe.name}::${safe.rarityKey}::${safe.caseName}`;
        const existing = groups.get(key);
        if (existing) {
            existing.copies++;
            if (new Date(safe.wonAt) > new Date(existing.wonAt)) existing.wonAt = safe.wonAt;
        } else {
            groups.set(key, { ...safe, copies: 1 });
        }
    });
    return [...groups.values()];
}

function renderCollection() {
    const fullInv = getInventory();
    const search = searchInput.value.toLowerCase();
    const rarityFilt = rarityFilter.value;

    let filtered = fullInv.filter(c => {
        const safe = enrichCard(c);
        return safe.name.toLowerCase().includes(search) && 
               (rarityFilt === 'all' || safe.rarityKey === rarityFilt);
    });

    // --- ENHANCED SORTING LOGIC ---
    filtered.sort((a, b) => {
        const mode = dateSort.value;
        const rankA = getRarityRank(normalizeRarity(a.rarityKey || a.rarity));
        const rankB = getRarityRank(normalizeRarity(b.rarityKey || b.rarity));

        switch (mode) {
            case 'rarityDesc': return rankB - rankA;
            case 'rarityAsc': return rankA - rankB;
            case 'atkDesc': return b.attack - a.attack;
            case 'atkAsc': return a.attack - b.attack;
            case 'defDesc': return b.defense - a.defense;
            case 'defAsc': return a.defense - b.defense;
            case 'newest': return new Date(b.wonAt) - new Date(a.wonAt);
            case 'oldest': return new Date(a.wonAt) - new Date(b.wonAt);
            case 'alpha': return a.name.localeCompare(b.name);
            default: return 0;
        }
    });

    const items = getGroupedCollection(filtered);
    collectionGridEl.innerHTML = '';
    collectionEmptyEl.style.display = filtered.length > 0 ? 'none' : 'block';

    items.forEach(group => {
        const card = document.createElement('article');
        card.className = `collection-card rarity-${group.rarityKey}`;
        card.innerHTML = `
            ${renderCardMarkup(group)}
            <div class="card-overlay">
                <span class="copy-count">x${group.copies}</span>
                <div class="collection-buttons">
                    <button class="btn btn-secondary sell-one">Sell 1</button>
                    <button class="btn btn-open sell-all">Sell All</button>
                </div>
            </div>`;

        const key = `${group.name}::${group.rarityKey}::${group.caseName}`;
        card.querySelector('.sell-one').onclick = () => { sellCardsByGroup(key, 1); updateDashboard(); renderCollection(); };
        card.querySelector('.sell-all').onclick = () => { sellCardsByGroup(key, group.copies); updateDashboard(); renderCollection(); };
        
        collectionGridEl.appendChild(card);
    });

    updateRarityChart(fullInv);
}

// --- Events ---

searchInput.oninput = renderCollection;
rarityFilter.onchange = renderCollection;
dateSort.onchange = renderCollection;

resetFiltersBtn.onclick = () => {
    searchInput.value = '';
    rarityFilter.value = 'all';
    dateSort.value = 'rarityDesc';
    renderCollection();
};

window.addEventListener('wecib:state-changed', () => {
    updateDashboard();
});

dateSort.value = 'rarityDesc';
updateDashboard();
renderCollection();
setInterval(updateDashboard, 1000);