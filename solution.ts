



const formatValue = (input: string | number | boolean) => {
       if(typeof input === 'string'){
        return input.toUpperCase()
       }
       else if(typeof input === 'number'){
        return input * 10
       }
      
      else if( typeof input === 'boolean' ){
            if(input === true){
                return false
            }else if(input === false){
                return true
            }
        
      }
       }









const getLength  = (input: string | any[]) => {
   if(typeof input === 'string'){
    return input.length
   }
   else if(Array.isArray(input)){
       return input.length
   }
}





class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return(`'Name:${this.name}, Age: ${this.age}'`)
    }
}





const filterByRating = (books: {title: string, rating: number}[]) => {
  return books.filter(({title, rating}) => rating > 4 && typeof title === 'string' ) 
}





type activeUsers = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: activeUsers[]) =>  users.filter((user) => user.isActive === true);




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;

};

const printBookDetails = (books: Book) => {
  const availabile = books.isAvailable ? 'Yes' : 'No'
  return console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${availabile}`)
};







 const getUniqueValues = (arr1: number[], arr2: number[]) => {

  let uniqueArr: number[] = [];

  for(let i = 0; i < arr1.length; i++){
    let unique = false;
    for(let r = 0; r < uniqueArr.length; r++){
      if(arr1[i] === uniqueArr[r]){
        unique = true;
        
      }
    }if(!unique){
      uniqueArr[uniqueArr.length] = arr1[i]
    }
    
  };

  for(let i = 0; i < arr2.length; i++){
    let unique = false;

    for(let j = 0; j < uniqueArr.length; j++){
      if(arr2[i] === uniqueArr[j]){
        unique = true;
      }
    }if(!unique){
      uniqueArr[uniqueArr.length] = arr2[i];
    }
  }

  return uniqueArr;
  
}






type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

  
  const calculateTotalPrice = (products: Product[]) => {
    return products.reduce((total, product) => {
      let hasTotal =   product.price * product.quantity;
   
         if(product.discount != undefined){
          const discountAmount =( hasTotal *  product.discount) / 100;
          hasTotal = hasTotal - discountAmount
         }
         return total +  hasTotal
    }, 0)
  }

  


