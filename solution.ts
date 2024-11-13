Here is a TypeScript solution for the gas station problem:

```typescript
class Solution {
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let totalTank = 0, currTank = 0, startingStation = 0;
        for (let i = 0; i < gas.length; i++) {
            totalTank += gas[i] - cost[i];
            currTank += gas[i] - cost[i];
            if (currTank < 0) {
                startingStation = i + 1;
                currTank = 0;
            }
        }
        return totalTank >= 0 ? startingStation : -1;
    }
}

let gas  = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

let solution = new Solution();
console.log(solution.canCompleteCircuit(gas, cost));
```

This TypeScript solution uses a class `Solution` with a method `canCompleteCircuit` that takes two arrays `gas` and `cost` as input. The `gas` array represents the amount of gas at each station and the `cost` array represents the amount of gas needed to travel to the next station. The method returns the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise it returns -1.