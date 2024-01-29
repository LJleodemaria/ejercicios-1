let ar = [];
  const palabras = [];
  const mat = [
    [" puerta  abre "],
    [" la           "],
    ["  juan        "],
    ["    mañana de "]
  ];
  
    for (let i = 0; i < 4; i++) {
       palabras.push(mat[i]);
       ar = palabras.join(' ').trim().split(' ').sort().join(' ');
    }
          console.log([ar]);