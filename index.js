/* Create a menu app, what you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

// Menu Motorcycles

// class Motorcycle
    //Make
    //Model
class Motorcycles{
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
}


//class Menu
class Menu{
    constructor(){
      // Motorcycles array  
      this.Motorcycles=[]; // <-- This is where all the motorcycles get stored while the app is running.
      
    }

    //add  Motorcycle 
    //prompt for a make
    //prompt for a model
    //create new Motorcycle and push Motorcycle into array
addMotorcycles(){
    let MotorcycleMake = prompt("Enter motorcycle make:");
    let MotorcycleModel = prompt("Enter the motorcycle model:");
    this.Motorcycles.push(new Motorcycles(MotorcycleMake, MotorcycleModel));
}

    //delete Motorcycle 
    deleteMotorcycles(){
        let MotorcyclesIndex = prompt("Enter motorcycle index to DELETE:");
        this.Motorcycles.splice(MotorcyclesIndex, 1);
    }


    //view Motorcycles
    viewMotorcycles(){
        let DisplayMotorcycles = '';
        for(let i=0; i < this.Motorcycles.length; i++){

            DisplayMotorcycles += `
            ${i}) ${this.Motorcycles[i].Make} ${this.Motorcycles[i].Model}`
        }

        
        alert(`
        Motorcycles Inventory:
        ----------------------
        ${DisplayMotorcycles}
        `);
    }

 //see a menu
 showMainMenu(){
    return prompt(`
    Main Menu:
    -----------------------
    0) Exit Menu            
    1) Add Motorcycle
    2) Delete Motocycle
    3) View All Motorcycles
    `)
}
    //start the menu
    start (){
        let selection = this.showMainMenu();
        
        while(selection != 0){
            switch(selection){
                case "1": this.addMotorcycles();
                break;

                case "2": this.deleteMotorcycles();
                break;

                case "3": this.viewMotorcycles();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu.. Goodbye!");
    }

}
//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();

