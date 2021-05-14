const CATEGORIE_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const TODAY_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f='
function todaySpecial(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.meals)
            let output = ' '
            data.meals.forEach(meal => {
                const { strMealThumb, strMeal } = meal
                output += `                    
                                <div class="card-body m-auto">
                                    <h6 class="btn btn-success p-3 text-center d-block">Today's Special: ${strMeal}</h6>
                                    <h5 class="btn btn-danger text-center p-3 d-block">${strMeal}</h5>
                                </div>
                                <img src="${strMealThumb}" class="card-img-bottom img-fluid m-auto border border-4 border-success" alt="${strMeal}">
                                `
            });
            document.querySelector('.specialMeal').innerHTML = output
        })
}
todaySpecial(TODAY_URL);


function categories(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.categories)
            let output = ''
            data.categories.forEach(categorie => {
                const { strCategoryThumb, strCategory } = categorie
                output += `
                            <div class="col">
                            <div class="card bg-transparent h-100 border border-danger">
                                <div class="card-body bg-transparent text-light">
                                <h5 class="card-title badge bg-danger  fs-6 text-wrap">${strCategory}</h5>
                                </div>
                                <img src="${strCategoryThumb}" class="card-img-bottom" alt="${strCategory}" >
                                
                            </div>
                            </div>
                                
                `
            });
            document.querySelector('.meals').innerHTML = output
        })
}

categories(CATEGORIE_URL)

function showMeal(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.meals)
            let output = ' '
            data.meals.forEach(meal => {
                const { strMeal, strMealThumb } = meal
                console.log("Hello",meal)
                output += `                    
                   <div class="col m-auto">
                            <div class="card bg-danger h-100 border border-danger">
                                <div class="card-body bg-transparent text-light my-2">
                                <h5 class="card-title badge bg-danger  fs-6 text-wrap">${strMeal}</h5>
                                </div>
                                <img src="${strMealThumb}" class="card-img-bottom mb-1" alt="${strMeal}">
    
                            </div>
                            </div>
                                `
                                
            });
            document.querySelector('.showMeal').innerHTML = output

        })
}
// let search=document.getElementById('search').value
// showMeal(SEARCH_URL)

let btn = document.getElementById('btn')
btn.addEventListener('click', function (e) {
    let search = document.getElementById('search').value
    console.log(search)
    if (search !== '') {
        showMeal(SEARCH_URL + search)
    } else {
        showMeal.remove();
        todaySpecial(TODAY_URL)
        categories(CATEGORIE_URL)
    }
    e.preventDefault()
})