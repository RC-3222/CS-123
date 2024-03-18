// т.к. пример с обходом через DFS из книги был о работе с файловой системой (с чем через браузерный JS так работать не получилось бы), пришлось написать другой (+ более обобщённый)

const graph = {
    'A' : ['F', 'B'],
    'B' : ['D', 'C'],
    'D' : ['E']
}

const dfs = (graph, start) => {
    const visited = [];
    let needVisit = [];
  
    needVisit.push(start);
  
    while(needVisit.length !== 0) {
      let node = needVisit.shift();

      if(!visited.includes(node)){
        visited.push(node);
        
        needVisit = [...(graph[node] || []), ...needVisit]
      }
    }

    return visited.join(' ');
}

console.log(dfs(graph, 'A'))