type objecter = {
    name : string
    level : number
    age : number
    bestSubject : string
    
}
const Arr1 : any[]= []
const Arr2 : any = []
const Arr3 :any  = []
const Arr4 = []
 
function objectAccept(object :objecter ){
if (object.level === 100){
    Arr1.push(object)
}else if(object.level === 200){
    Arr2.push(object)
}else if (object.level === 300){
    Arr3.push(object)
}else{
    Arr4.push(object)
}
}
