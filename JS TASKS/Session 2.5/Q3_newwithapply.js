function construct(Class) 
{
  var object = Object.create(Class.prototype);
  Class.apply(object, Array.prototype.slice.call(arguments, 1));  
  return object;
}