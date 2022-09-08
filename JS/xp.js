const xpReqBase = D(10)
let xpReq = xpReqBase.times(Decimal.pow(1.25,data.xpLevel))

function addXP(gain) {
    let xpReadd = D(0)
    xpReq = xpReqBase.times(Decimal.pow(1.25,data.xpLevel))
    data.xp = data.xp.plus(gain)
    if(data.xp.gte(xpReq)) {
        data.xpLevel = data.xpLevel.plus(1)
        xpReadd = data.xp.sub(xpReq)
        data.xp = xpReadd
        xpReq = xpReqBase.times(Decimal.pow(1.25,data.xpLevel))
    }
}