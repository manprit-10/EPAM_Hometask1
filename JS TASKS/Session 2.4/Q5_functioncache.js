function cache(func) {
    const mapping = new Map();
  
    return (...args) => {
      const key = JSON.stringify(...args);
      if (mapping.has(key)) {
        return mapping.get(key);
      }
      const val = func(...args);
       mapping.set(key, val);
      return val;
    };
  }
  console.log(cache(x => x));