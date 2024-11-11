{




    const removeDuplicates=(value:number[]):number[]=>{

        const newArray: number[]=[];

        value.filter(elem => {

            if(!newArray.includes(elem)){
                newArray.push(elem)
            }
        })

        console.log(newArray)
        return newArray; 


    }

    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
















}