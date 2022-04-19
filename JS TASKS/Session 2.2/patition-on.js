function partitionOn(pred, items) {
    var truthies = items.filter(pred);
    var falsies = items.filter(function (a) {return !pred(a)});
    items.length = 0;
    items.push.apply(items, falsies.concat(truthies));
    return falsies.length;
  }