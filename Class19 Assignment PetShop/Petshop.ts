
type PetKind= 'Dog'|'Parrot'|'Cat';

interface history{
    familyOfPet: string;
    colorOfPet: string;
    eatingHabits: string;
    tagNumber: number;
}


interface petHabits{
    familyOfPet: string;
    eatingHabits: number;
    colorOfPet: string;
    tagNumber: number;
}

class PetsAvailability{                     //Availability Class
    //Pets available for adoption with characteristic nad his history;
    kindofPet: PetKind;
    character: string;
    historyOfPet: history;
    availabilityCounter: number;
    DogCounter:number;
    CatCounter:number;
    ParrotCounter:number;

    constructor(){
        this.DogCounter=0;
        this.CatCounter=0;
        this.ParrotCounter=0;
    }
    
    insertPet(_kindofPet:PetKind,_character:string, _historyOfPet:history){
        this.kindofPet=_kindofPet;
        this.character=_character;
        this.historyOfPet=_historyOfPet;

        if(_kindofPet=="Dog"){                                 
            this.DogCounter+=1;
        }   
        if(_kindofPet=="Cat"){
            this.CatCounter+=1; 
        } 
        if(_kindofPet=="Parrot"){
            this.ParrotCounter+=1;
        } 


    }

    statusofPet(_petsofChoice:string[]){                         //To find these pets in the collection if available or not;
        for(let i=0;i<_petsofChoice.length;i++){
            if(_petsofChoice[i]==this.historyOfPet.familyOfPet){                            //Comparing if requested is available;
                console.log("Breed of"+_petsofChoice[i]+" is available as requested");
            }
        }

    }

    counterCheck(){
        console.log("Counter of the Animals is as follows"+" Dogs:"+this.DogCounter+" Cats:"+this.CatCounter+" Parrots:"+this.ParrotCounter);
    }

    availabilityCheckofRequests(_PetsofChoice:string[]){
        let counter=0;
        for(let i=0;i<_PetsofChoice.length;i++){
            if(_PetsofChoice[i]==this.historyOfPet.familyOfPet){
                counter+=1;
                this.availabilityCounter=counter;
            }
        }   
        console.log("Number of choice requested by the users with the number of choice smatching in the Availability are: "+counter);
    }
    

}

class PetsRequest{
    //Enquiries for the Pet
    petHabitsdata:petHabits;
    petsofChoice: string[];

    enquirePet(_petsofchoice,_petHabitsdata?:petHabits){        //insertMethod
        this.petHabitsdata=_petHabitsdata;
        this.petsofChoice=_petsofchoice;
        console.log("Choice of Pets Required by Users are:")
        for(let i in _petsofchoice){
            console.log(_petsofchoice[i]);
        }
        return _petsofchoice;
    }

}

let obj=new PetsAvailability();
obj.insertPet("Dog","trained",{familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 2301});
obj.insertPet("Dog","Not-trained",{familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 2302});
obj.insertPet("Cat","tamed",{familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 3009});
obj.insertPet("Parrot","trained",{familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 40041});


let obj1=new PetsRequest();
let PetsChoice=obj1.enquirePet(["Labrador","Chihuahua","Alsasian","Hound","Roosevelt"]);        

obj.statusofPet(PetsChoice);

obj.counterCheck();

obj.availabilityCheckofRequests(PetsChoice);            


