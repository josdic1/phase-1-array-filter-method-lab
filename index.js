const drivers = [
   {
     name: "Bobby",
     hometown: "Pittsburgh",
   },
   {
     name: "Sammy",
     hometown: "New York",
   },
   {
     name: "Sally",
     hometown: "Cleveland",
   },
   {
     name: "Annette",
     hometown: "Los Angeles",
   },
   {
     name: "Bobby",
     hometown: "Tampa Bay",
   },
 ];

 const nameList = drivers.map((driver) => driver.name);
 console.log(nameList); 
 
 function findMatching(list, name) {
  if(!name || typeof name !== 'string') {
    return []
  } else {
    const casedName = name.toLowerCase()
    const matchList = list.filter(driver => driver.toLowerCase() === casedName)
   return matchList
  }

 }

 function fuzzyMatch(list, input) {
  const inputCased = !input ? console.error('EMPTY INPUT') : input.toLowerCase()
  const matchList = list.filter(item => item.toLowerCase().startsWith(inputCased))
 return matchList
 }

 function matchName(list, name) {
  const casedName = !name ? '' : name.toLowerCase()
  const matchList = list.filter(item => item.name.toLowerCase() === casedName)
  return matchList
}
 
 console.log('fuzzyMatch: ', fuzzyMatch(nameList, ""))
 console.log('matchName: ', matchName(drivers, "bobby"))