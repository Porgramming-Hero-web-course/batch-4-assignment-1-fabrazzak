
{


    interface Profile{
        name:string;
        age:number;
        email:string;
    }

const updateProfile = (profile:Profile,updateData:Partial<Profile>):Profile =>{
    return {
        ...profile, ...updateData
    }  

}

const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };
const result=updateProfile(myProfile, { age: 26 });
console.log(result)










}