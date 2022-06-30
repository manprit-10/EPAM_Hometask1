function add(num) {
    const func = x => add(num + x)
    func.valueOf = () => num
  
    return func
  }