// Classes
console.clear();

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getSauce(){
        return this.#sauce;
    }
    setSauce(pizzaSauce){
        this.#sauce = pizzaSauce;
    }

    bake(){
        console.log(`baking a ${this.size} ${this.crust} crust pizza`)
    }
    orderDone(){
        console.log(`Here's a ${this.crust} ${this.#sauce} sauce ${this.#size} crust pizza`)
    }
}


const myPizza = new Pizza("medium");
myPizza.bake();
myPizza.orderDone();

/*-----------------------------------------------------------------------------------*/
// Super + Sub Class


class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works"
    }
    slice() {
        console.log(`our ${this.size} ${this.type} pizza has 6 slices.`)
    }
}


const mySpecialty = new SpecialtyPizza("small");
mySpecialty.slice();
mySpecialty.bake();


/*-----------------------------------------------------------------------------------*/
// Function -- private variable workaround
function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    }
}

const myPizza2 = pizzaFactory("small");
myPizza2.bake();











