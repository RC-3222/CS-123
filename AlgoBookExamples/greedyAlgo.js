stations = {}
stations["kone"] = new Set(["id", "nv", "ut"])
stations["ktwo"] = new Set(["wa", "id", "mt"])
stations["kthree"] = new Set(["or", "nv", "ca"])
stations["kfour"] = new Set(["nv", "ut"])
stations["kfive"] = new Set(["ca", "az"])

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

const setDifference = (set1, set2) => {
    const result = new Set()

    for (const elem of set1) {
        if (!set2.has(elem)) {
            result.add(elem)
        }
    }

    return result
}

const setIntersection = (set1, set2) => {
    const result = new Set()

    for (const elem of set1) {
        if (set2.has(elem)) {
            result.add(elem)
        }
    }

    return result
}


const getOptimalSolution = (stations, initialStatesNeeded) => {
    let statesNeeded = initialStatesNeeded

    const finalStations = new Set()
    
    while(statesNeeded.size > 0) {
        // safeguard for impossible full coverage (pt. 1)
        let prevSize = statesNeeded.size

        let bestStation = null
        let statesCovered = new Set()

        for (const [station, statesForStation] of Object.entries(stations)) {
            if (finalStations.has(station)) continue;

            covered = setIntersection(statesNeeded, statesForStation)
        
            if (covered.size > statesCovered.size) {
                bestStation = station
                statesCovered = covered
            }
        }
        
        finalStations.add(bestStation)
        statesNeeded = setDifference(statesNeeded, statesCovered)

        // safeguard for impossible full coverage (pt. 2)
        if (statesNeeded.size === prevSize) break;
    }

    return finalStations
}

console.log([...getOptimalSolution(stations, statesNeeded)])