// т.к. пример с обходом через DFS из книги был о работе с файловой системой (с чем через браузерный JS так работать не получилось бы), пришлось написать другой (+ более обобщённый)

const graph = {
    'A' : ['F', 'B'],
    'B' : ['D', 'C'],
    'D' : ['E']
}

const dfsRecursive = (graph, start) => {
  const result = []

  const recursiveDfsHelper = (vert) => {
    result.push(vert)

    if (graph[vert]?.length) {
      for (const neighbor of graph[vert]) {
        if (!result.includes(neighbor)) recursiveDfsHelper(neighbor)
      }
    }
  }

  recursiveDfsHelper(start)

  return result
}

const dfs = (graph, start) => {
    const result = [];
    let needVisit = [];
  
    needVisit.push(start);
  
    while(needVisit.length) {
      let node = needVisit.shift();

      if(!result.includes(node)){
        result.push(node);
        
        needVisit = [...(graph[node] || []), ...needVisit]
      }
    }

    return result;
}

console.log(dfs(graph, 'A'))
console.log(dfsRecursive(graph, 'A'))