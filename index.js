// Write your solution in this file!
const driver = {

}

function updateDriverWithKeyAndValue(driver, key, value){
    newDriver = {...driver};
    newDriver[key] = value;
    //return Object.assign({}, {[key]: value});
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver,key){
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    //delte newDriver.key;--> this statement didnot work
    //the return value of the newdriver object is mutated
    
    return newDriver;
   // return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    
    return driver;
}