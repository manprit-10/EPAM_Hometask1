function compose() 
{
  let args = arguments; 
  return function(comp) 
  { 
    for (let i = args.length - 1; i >= 0; i--)
      comp = args[i].call(this, comp);
    return comp;
  }
}