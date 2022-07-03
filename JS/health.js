const healthData = [
    {
        name: "Bandaid",
        cost: D(5),
        healthGain: D(2),
        unlockLevel: D(1),
    },
    {
        name: "First Aid",
        cost: D(15),
        healthGain: D(5),
        unlockLevel: D(10)
    },
    {
        name: "Health Pack",
        cost: D(25),
        healthGain: D(10),
        unlockLevel: D(15),
    },
    {
        name: "Nanobot Healing",
        cost: D(100),
        healthGain: D(25),
        unlockLevel: D(20),
    },
]

function updateHealthHTML() {
    for(let i = 0; i < healthData.length; i++) {
        DOMCacheGetOrSet(`health${i}`).innerText = data.xpLevel.gte(healthData[i].unlockLevel) ? `${healthData[i].name}: -$${formatSci(healthData[i].cost)} | +${formatSci(healthData[i].healthGain)} Health` :
        `Unlocked at Level ${toPlaces(healthData[i].unlockLevel,0,healthData[i].unlockLevel.plus(1))}`
        DOMCacheGetOrSet(`health${i}`).classList = data.xpLevel.gte(healthData[i].unlockLevel) && data.money.gte(healthData[i].cost) ? 'unlocked' : 'locked'
    }
}

function purchaseHealth(i) {
    if(data.money.lt(healthData[i].cost) || data.xpLevel.lt(healthData[i].unlockLevel)) return
    data.money = data.money.sub(healthData[i].cost)
    data.health = data.health.add(healthData[i].healthGain)
    if(data.health.gt(100)) data.health = D(100)
    updateJobHTML()
    updateEnergyHTML()
    updateHealthHTML()
}