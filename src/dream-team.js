module.exports = function createDreamTeam(members) {

  let z = '';
  if (members == null) return false;
  for (let y = 0; y < members.length; y++) {
    if ((typeof (members[y])) != 'string') { continue }
    else {
      members[y] = members[y].trim();
      z = z + members[y][0];
    }


  }

  z = z.toUpperCase().split('').sort().join('');
  return z;
};