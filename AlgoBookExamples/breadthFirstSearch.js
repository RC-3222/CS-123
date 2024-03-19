const graph = {
    'you':['alice', 'bob', 'claire'],
    'bob':['anuj', 'peggy'],
    'alice':['peggy'],
    'claire':['thom', 'jonny'],
    'anuj':[],
    'peggy':[],
    'thom':[],
    'jonny':[],
};

const checkIfSeller = (name) => {
    return name[name.length - 1] === 'm'
}

const search = (name) => {
    const searchQueue = [...graph[name]];
    const searched = [];

    while (searchQueue.length) {
        const person = searchQueue.shift();

        if (!searched.includes(person)) {
            if (checkIfSeller(person)) {
                console.log(`${person} is a mango seller!`);
                return true;
            } else {
                searchQueue.push(...graph[person]);
                searched.push(person);
            }
        }
    }

    return false;
}

console.log(search("you"))