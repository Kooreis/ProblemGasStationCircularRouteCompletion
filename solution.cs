Here is a JavaScript solution for the gas station problem:

```javascript
function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    if (totalGas < totalCost) {
        return -1;
    } else {
        return start;
    }
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
```

This console application will output the starting gas station's index if it's possible to travel around the circuit once, otherwise it will output -1.