```cpp
#include <iostream>
#include <vector>

using namespace std;

int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    int total = 0;
    int sum = 0;
    int start = 0;
    for (int i = 0; i < gas.size(); i++) {
        total += gas[i] - cost[i];
        sum += gas[i] - cost[i];
        if (sum < 0) {
            start = i + 1;
            sum = 0;
        }
    }
    if (total < 0) return -1;
    else return start;
}

int main() {
    vector<int> gas = {1,2,3,4,5};
    vector<int> cost = {3,4,5,1,2};
    int result = canCompleteCircuit(gas, cost);
    if(result == -1) {
        cout << "Cannot complete the circuit." << endl;
    } else {
        cout << "Can complete the circuit starting at station: " << result << endl;
    }
    return 0;
}
```