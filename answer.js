// Question 1: Value Detective 

function describeValue(num){
  if(num === "" || num === 0 || num === null || num === undefined){
    return `${typeof(num)} | falsy`;
  }else{
    return `${typeof(num)} | truthy`;
  }
}

describeValue("hello");