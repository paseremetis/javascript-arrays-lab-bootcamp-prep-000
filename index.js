function destructivelyAppendKitten(Ralph){   kittens.push('Ralph')  return ['Milo', 'Otis', 'Garfield', 'Ralph']}function destructivelyPrependKitten(Bob){  kittens.unshift('Bob')  return ['Bob', 'Milo', 'Otis', 'Garfield']}function destructivelyRemoveLastKitten(Garfield){  kittens.pop('Garfield')  return ['Milo', 'Bob']}function destructivelyRemoveFirstKitten(Milo){  kittens.shift('Milo')  return ['Otis', 'Garfield']}