// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  const roDrivers = drivers.filter(function(driver){
    return driver["revenue"] > rev;
  });
  return roDrivers;
}

function driverNamesWithRevenueOver(drivers, rev){
  const nroDrivers = driversWithRevenueOver(drivers, rev).map(function(driver){
    return driver["name"];
  });
  return nroDrivers;
}

function exactMatch(drivers, prop){
  const emDrivers = drivers.filter(function(driver){
    key = Object.keys(prop);
    return driver[key] === prop[key];
  });
  return emDrivers;
}

function exactMatchToList(drivers, prop){
  const emlDrivers = exactMatch(drivers, prop).map(function(driver){
    return driver.name;
  });
  return emlDrivers;
}
