const energyData = [
    {
        name: "Mountain Dew",
        cost: D(5),
        energyGain: D(2),
        healthLoss: D(2),
        unlockLevel: D(0)
    },
    {
        name: "Monster Energy",
        cost: D(10),
        energyGain: D(5),
        healthLoss: D(5),
        unlockLevel: D(5)
    },
    {
        name: "Bang Energy",
        cost: D(25),
        energyGain: D(25),
        healthLoss: D(15),
        unlockLevel: D(10)
    },
    {
        name: "Black Label Brewed Coffee",
        cost: D(1e3),
        energyGain: D(100),
        healthLoss: D(95),
        unlockLevel: D(25)
    },
]

function updateEnergyHTML() {
    for(let i = 0; i < energyData.length; i++) {
        DOMCacheGetOrSet(`energy${i}`).innerText = data.xpLevel.gte(energyData[i].unlockLevel) ? `${energyData[i].name}: -$${formatSci(energyData[i].cost)} | +${formatSci(energyData[i].energyGain)} | -${energyData[i].healthLoss} Health` :
        `Unlocked at Level ${toPlaces(energyData[i].unlockLevel,0,energyData[i].unlockLevel.plus(1))}`
        DOMCacheGetOrSet(`energy${i}`).classList = data.xpLevel.gte(energyData[i].unlockLevel) && data.money.gte(energyData[i].cost) ? 'unlocked' : 'locked'
    }
}

function purchaseEnergy(i) {
    if(data.money.lt(energyData[i].cost) || data.xpLevel.lt(energyData[i].unlockLevel)) return
    data.money = data.money.sub(energyData[i].cost)
    data.energy = data.energy.add(energyData[i].energyGain)
    if(data.energy.gt(100)) data.energy = D(100)
    data.health = data.health.sub(energyData[i].healthLoss)
    updateJobHTML()
    updateEnergyHTML()
    updateHealthHTML()
}