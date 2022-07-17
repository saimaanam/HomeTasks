//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

const animal ={
    move : 'animals can move and so is cat',
  };        
  
  const cat = {
    __proto__: animal,
  };        
  
  console.log(cat.move); 