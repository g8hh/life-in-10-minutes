const jobData = [
    {
        name: 'Dishwasher',
        moneyGain: D(1),
        energyLoss: D(0.5),
        xpGain: D(1),
        unlockLevel: D(0)
    },
    {
        name: 'Janitor',
        moneyGain: D(5),
        energyLoss: D(1),
        xpGain: D(2),
        unlockLevel: D(1)
    },
    {
        name: 'Construction Worker',
        moneyGain: D(10),
        energyLoss: D(2.5),
        xpGain: D(4),
        unlockLevel: D(4)
    },
    {
        name: 'Contractor',
        moneyGain: D(25),
        energyLoss: D(5),
        xpGain: D(10),
        unlockLevel: D(6)
    },
    {
        name: 'Manager',
        moneyGain: D(50),
        energyLoss: D(15),
        xpGain: D(40),
        unlockLevel: D(10)
    },
    {
        name: 'General Manager',
        moneyGain: D(75),
        energyLoss: D(20),
        xpGain: D(50),
        unlockLevel: D(15)
    },
    {
        name: 'CEO',
        moneyGain: D(100),
        energyLoss: D(25),
        xpGain: D(70),
        unlockLevel: D(20)
    },
]

function updateJobHTML() {
    for(let i = 0; i < jobData.length; i++) {
        DOMCacheGetOrSet(`job${i}`).innerText = data.xpLevel.gte(jobData[i].unlockLevel) ? `${jobData[i].name}: +$${formatSci(jobData[i].moneyGain)} | -${formatSci(jobData[i].energyLoss)} | +${formatSci(jobData[i].xpGain)} Experience` :
        `Unlocked at Level ${toPlaces(jobData[i].unlockLevel,0,jobData[i].unlockLevel.plus(1))}`
        DOMCacheGetOrSet(`job${i}`).classList = data.xpLevel.gte(jobData[i].unlockLevel) && data.energy.gte(jobData[i].energyLoss) ? 'unlocked' : 'locked'
    }
}

function runJob(i) {
    if(data.energy.lt(jobData[i].energyLoss) || data.xpLevel.lt(jobData[i].unlockLevel)) return
    data.energy = data.energy.sub(jobData[i].energyLoss)
    data.money = data.money.add(jobData[i].moneyGain)
    addXP(jobData[i].xpGain)
    updateJobHTML()
    updateEnergyHTML()
}

