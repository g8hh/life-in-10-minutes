function updateHTML() {
    //Global Updates
    DOMCacheGetOrSet('moneyText').innerText = `Money: $${formatSci(data.money)}`
    DOMCacheGetOrSet('healthText').innerText = `Health: ${formatSci(data.health)}/100`
    DOMCacheGetOrSet('energyText').innerText = `Energy: ${formatSci(data.energy)}/100`
    DOMCacheGetOrSet('experienceText').innerText = `Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})`
    DOMCacheGetOrSet('startDialogHolder').style.display = data.gameStarted === false ? 'flex' : 'none'
    DOMCacheGetOrSet('tabButtonHolder').style.display = data.gameStarted === true && data.gameEnded === false ? 'flex' : 'none'
    DOMCacheGetOrSet('mainTabHolder').style.display = data.gameStarted === true && data.gameEnded === false && data.currentTab === 0 ? 'flex' : 'none'
    DOMCacheGetOrSet('settingsTabHolder').style.display = data.gameStarted === true && data.gameEnded === false && data.currentTab === 1 ? 'flex' : 'none'
    DOMCacheGetOrSet('progressBar').style.setProperty("--x", `${(data.timeRemaining / 600) * 100}%`)
    DOMCacheGetOrSet('progressBar').innerText = `${formatTime(D(data.timeRemaining))} Remaining`
    DOMCacheGetOrSet('endDialogHolder').style.display = data.gameEnded === true ? 'flex' : 'none'
    if(data.gameEnded === true) {
        switch(data.ending) {
            case 0:
                DOMCacheGetOrSet('endingText').innerText = `Ending 1: Death\nYou managed to some how die in the span of 10 minutes so here are your stats.\n\nMoney: $${formatSci(data.money)}\n
                Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})\n\nBetter luck next time\nYou can restart the game below.`
                break
            case 1:
                DOMCacheGetOrSet('endingText').innerText = `Ending 2: Thousandaire\nSo you clicked enough to get a Thousand Dollars but you aren't very experienced, my condolences.\n\nMoney: $${formatSci(data.money)}\n
                Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})\n\nYou did pretty well\nYou can restart the game below.`
                break
            case 2:
                DOMCacheGetOrSet('endingText').innerText = `Ending 3: Experienced but Broke\nSo you're really experienced but where did you spend your money???\n\nMoney: $${formatSci(data.money)}\n
                Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})\n\nCould've been better but you didn't die4\nTou can restart the game below.`
                break
            case 3:
                DOMCacheGetOrSet('endingText').innerText = `Ending 4: Rich and Experienced\nThis is the best ending\n\nMoney: $${formatSci(data.money)}\n
                Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})\n\nYou can't do better than this, maybe...\nYou can restart the game below.`
                break
            case 4:
                DOMCacheGetOrSet('endingText').innerText = `Ending 5: Mid\nWhat did you spend your 10 minutes on you literally aren't rich or experienced\n\nMoney: $${formatSci(data.money)}\n
                Experience: Level ${toPlaces(data.xpLevel,0,data.xpLevel.plus(1))} (${formatSci(data.xp)}/${formatSci(xpReq)})\n\nYou might as well just of picked the first ending\nyou can restart the game below.`
                break
        }
    }
}