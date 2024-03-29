
//loaded all category :
const loadCategories = async () => {
    spinner(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    displayCategories(data.data)
}
// show data in all categories whwn reandering website
const showAllCategoriesData = async () => {
    spinner(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await res.json()
    allCategoryItems(data.data)
}

//make card all categoryData :
allCategoryItems = (data) => {
    const targetitemsId = document.getElementById('cardItems');
    targetitemsId.textContent = ''
    allCategoryItemsDataRepeation(targetitemsId, data)

}

document.getElementById("sortBtn").addEventListener("click", async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const sortedData = data.data.sort((a, b) => {
        let viewsA = parseFloat(a.others.views.replace('K', ''));
        let viewsB = parseFloat(b.others.views.replace('K', ''));
        return viewsB - viewsA;
    });
    allCategoryItems(sortedData); 
});







//show all actegories :
const displayCategories = (categories) => {

    const targetNavId = document.getElementById('navItems')
    categories.forEach(element => {

        const ul = document.createElement('div')
        ul.classList = 'menu menu-horizontal bg-base-200 rounded-box mt-6'
        ul.innerHTML = `
        <li onclick ="categoryIdClick(${element.category_id})">
            <a>${element.category}</a>
        </li>
    `
        targetNavId.appendChild(ul)

    });

}


//specific categories click functions :
const categoryIdClick = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    displayCategoriesCard(data.data)
}


const displayCategoriesCard = (cardData) => {

    const targetitemsId = document.getElementById('cardItems');
    const noDataTargetId = document.getElementById('noData')
    targetitemsId.textContent = ''

    if (cardData.length === 0) {
        spinner(false)
        noDataTargetId.classList.remove('hidden')
    }
    else {
        noDataTargetId.classList.add('hidden')
        allCategoryItemsDataRepeation(targetitemsId, cardData)
    }
}


loadCategories()
showAllCategoriesData()