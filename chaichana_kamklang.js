
function minFees(start, shops, stations, target) {
    let totalCost = 0;

    for (let current = start; current <= target; current++) {
        const hasStation = stations.some(station => station > current && station <= current + 1);

        if (!hasStation) {
            totalCost += 1;
        }
    }
  
    return totalCost;
}

console.log(minFees(0, [4,9], [3, 6, 8], 11));
   
