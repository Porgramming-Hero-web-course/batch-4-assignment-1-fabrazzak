{



    class Car {
        make:string
        model:string;
        year: number;

        constructor(make:string,model:string,year:number){

            this.model = model;
            this.make = make;
            this.year = year
            
        }

        getCarAge():number{
            const currentYear= new Date().getFullYear();
            return currentYear - this.year;

        }


    }

    const car= new Car("Honda","Civic",2018)
    
    const result = car.getCarAge();

    console.log(result)




















}