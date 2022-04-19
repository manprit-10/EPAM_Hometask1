function getMiddle(s)
{
   var len = s.length;
   var middle = Math.floor(len/2);
  
    if(len % 2 == 0)
      {
        return s[middle-1] + s[middle];
      }
   else
    {
      return s[middle];
    }
}