{
  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type  Rectangle = {
    shape:"rectangle";
    width:number;
    height:number;
  }


  type Shape = Circle | Rectangle;


const circle :Circle=  { shape: "circle", radius: 5 };
const rectangle: Rectangle ={ shape: "rectangle",  width: 4,  height: 6,}
  
const calculateShapeArea=(value:Shape):number =>{
    
   

    if( value.shape === "circle"){

          return Math.PI * Math.pow(value.radius, 2);

    }

    else if(value.shape === "rectangle"){
         return value.width * value.height;

    }
    return 0

}
  const result1 = calculateShapeArea(circle);
  const result2 = calculateShapeArea(rectangle);
  console.log(result1);
  console.log(result2);

}






