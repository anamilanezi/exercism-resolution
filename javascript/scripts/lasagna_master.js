
// 1. Determine whether the lasagna is done

function cookingStatus(remainingMinutes) {
    if (remainingMinutes === 0) {
        return "Lasagna is done.";
    } else if (remainingMinutes === null || remainingMinutes === undefined || remainingMinutes === '') {
        return 'You forgot to set the timer.';
    } else {
        return 'Not done, please wait.'
    }
}
/*
console.log(cookingStatus(0));
console.log(cookingStatus(12));
console.log(cookingStatus());
*/

// 2. Estimate the preparation time

function preparationTime(layers, timePerLayer) {
    var numOfLayers = layers.length;
    if(timePerLayer === undefined) {
        return numOfLayers * 2
    } else {
        return numOfLayers * timePerLayer;
    }
}
/*
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
console.log(preparationTime(layers, 3));
// => 18

console.log(preparationTime(layers));
// => 12
*/
// 3. Compute the amounts of noodles and sauce needed

function quantities(layers) {
    var noodlesLayers = 0;
    var sauceLayers = 0;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            noodlesLayers++
        } else if (layers[i] === 'sauce') {
            sauceLayers++;
        }
    }
    var recipe = {
        noodles: noodlesLayers * 50,
        sauce: sauceLayers * 0.2,
    }
    return recipe;
}

console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
// => { noodles: 100, sauce: 0.4 }

/*
// 4. Add the secret ingredient

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient(friendsList, myList);
// => undefined

console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']


// 5. Scale the recipe

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
meat: 100,
};

scaleRecipe(recipe, 4);
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };
console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// }*/
