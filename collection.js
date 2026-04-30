/**
 * WECIB GACHA - Collections Logic
 * Enhanced Visuals, Rarity & Stat Sorting
 */

const RARITIES = {
    freshman: { label: 'Freshman', popColor: '#4d88ff' },
    sophomore: { label: 'Sophomore', popColor: '#5cd65c' },
    junior: { label: 'Junior', popColor: '#3366ff' },
    senior: { label: 'Senior', popColor: '#ff8533' },
    superSenior: { label: 'Super-Senior', popColor: '#ffcc00' },
    graduated: { label: 'Graduate', popColor: '#c66bff' },
};

const RARITY_ORDER = ['freshman', 'sophomore', 'junior', 'senior', 'superSenior', 'graduated'];

const CARD_IMAGE_OVERRIDES = {
    ab: 'Images/ABCard.png',
    alexfrieders: 'Images/AlexCard.png',
    annamoore: 'Images/AnnaCard.png',
    beatricekovalik: 'Images/BeatriceCard.png',
    beatrice: 'Images/BeatriceCard.png',
    christian: 'Images/ChristianCard.png',
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
    ryanshutte: 'Images/RyanCard.png',
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
    josephjameslennertiii: 'Images/JosephLennertCard.png',
    mhscampus: 'Images/MHSCampusCard.png',
    gymnasium: 'Images/MHSGymCard.png',
    theater: 'Images/MHSTheaterCard.png',
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
    mrprez: 'Images/MrPrezCard.png',
    linustorvalds: 'Images/LinusTorvaldsCard.png',
    kanyewest: 'Images/KanyeWestCard.png',
    johnhelldiver: 'Images/JohnHelldiverCard.png',
    scottralls: 'Images/ScottRallsCard.png',
    teddyroosevelt: 'Images/TeddyRooseveltCard.png',
    edwinbooth: 'Images/EdwinBoothCard.png',
    annefrank: 'Images/AnneFrankCard.png',
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
