const graph = {};

graph['start'] = {};
graph['start']['a'] = 5;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['d'] = 2;
graph['a']['c'] = 4;

graph['b'] = {};
graph['b']['a'] = 8;
graph['b']['d'] = 7;

graph['c'] = {};
graph['c']['d'] = 6;
graph['c']['fin'] = 3;

graph['d'] = {};
graph['d']['fin'] = 1;

graph['fin'] = {};

const costs = {};
costs['a'] = 5;
costs['b'] = 2;
costs['c'] = Infinity;
costs['d'] = Infinity;
costs['fin'] = Infinity;

const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['c'] = null;
parents['d'] = null;
parents['fin'] = null;

let processed = [];

const findLowestCostNode = (costs) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (const node in costs) {
        let cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node != null) {
    let cost = costs[node];
    let neighbors = graph[node];

    for (const neighborNode in neighbors) {
        let newCost = cost + neighbors[neighborNode];

        if (costs[neighborNode] > newCost) {
            costs[neighborNode] = newCost;
            parents[neighborNode] = node;
        }
    }

    processed.push(node);

    node = findLowestCostNode(costs);
}

console.log(graph, costs, parents)