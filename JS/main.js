function generateEventHandlers() {
    for(let i = 0; i < tabNames.length; i++) {
        DOMCacheGetOrSet(`${tabNames[i]}TabButton`).addEventListener('click',() => {changeTab(i)})
    }
    const amountOfSubTabs = [3]
    for(let i = 0; i < data.currentSubTab.length; i++) {
        for(let j = 0; j < amountOfSubTabs[i]; j++)
            DOMCacheGetOrSet(`${tabNames[i]}SubTabButton${j}`).addEventListener('click',() => {changeSubTab(i,j)})
    }

    for(let i = 0; i < jobData.length; i++)
        DOMCacheGetOrSet(`job${i}`).addEventListener('click',() => {runJob(i)})

    for(let i = 0; i < energyData.length; i++)
        DOMCacheGetOrSet(`energy${i}`).addEventListener('click', () => {purchaseEnergy(i)})

    for(let i = 0; i < healthData.length; i++)
        DOMCacheGetOrSet(`health${i}`).addEventListener('click', () => {purchaseHealth(i)})
}

function mainLoop() {
    diff = (Date.now()-data.time)*data.devSpeed/1000
    data.time = Date.now()
    if(data.gameStarted === true && data.gameEnded === false)
        data.timeRemaining -= diff
    endGame()
    updateHTML()
}
const tabNames = ['main','settings']
function changeTab(i) {
    data.currentTab = i
    for(let i = 0; i < tabNames.length; i++)
        DOMCacheGetOrSet(`${tabNames[i]}TabHolder`).style.display = data.currentTab === i ? 'flex' : 'none'
}

function changeSubTab(a,b) {
    data.currentSubTab[a] = b
    const amountOfSubTabs = [3]
    for(let i = 0; i < amountOfSubTabs[a]; i++)
        DOMCacheGetOrSet(`${tabNames[a]}SubTabHolder${i}`).style.display = data.currentSubTab[a] === i ? 'flex' : 'none'
}

function createPrompt(a,b) {
    let old_element = document.getElementById("promptButton");
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    DOMCacheGetOrSet('promptInput').value = ''
    DOMCacheGetOrSet('promptContainer').style.border = "4px solid whitesmoke"
    DOMCacheGetOrSet('promptTitle').innerHTML = a
    DOMCacheGetOrSet('prompt').style.display = 'block'
    DOMCacheGetOrSet('promptContainer').style.display = 'block'
    switch(b) {
        case 0:
            document.getElementById('promptButton').addEventListener('click', () => { importSave() })
            break
    }
}

function endGame() {
    if(data.gameEnded === true) return
    if(data.health.lte(0)) {
        data.gameEnded = true
        data.ending = 0
        data.timeRemaining = 0
        return
    }
    if(data.timeRemaining <= 0) {
        data.gameEnded = true
        if(data.money.gte(1e3) && data.xpLevel.gte(25)) {
            data.ending = 3
        }
        else if(data.money.gte(1e3) && data.xpLevel.lt(25)) {
            data.ending = 1
        }
        else if(data.money.lt(1e3) && data.xpLevel.gte(25)) {
            data.ending = 2
        }
        else {
            data.ending = 4
        }
        data.timeRemaining = 0
    }
    
}

window.setInterval(function(){mainLoop()},50)