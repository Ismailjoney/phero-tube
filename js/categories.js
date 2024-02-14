
//loaded all category :
const loadCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    displayCategories(data.data)
}
// show data in all categories whwn reandering website
const showAllCategoriesData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await res.json()
    allCategoryItems(data.data)
}

//make card all categoryData :
const allCategoryItems = (data) => {
    console.log(data)
    const targetitemsId = document.getElementById('cardItems');
    targetitemsId.textContent = ''

    data.forEach(elem => {

        const div = document.createElement('div')
        div.classList = "card w-70 bg-base-100 shadow-xl gap-4 mb-4"

        div.innerHTML = `
            <img src="${elem.thumbnail}" alt="Shoes" class=" w-full h-36" />
            <div class="mt-2 flex justify-start gap-4">
                <div class="w-14 h-12 px-2">
                    <img src="${elem.authors[0].profile_picture}" alt="profie picture" class="rounded-full ">      
                </div> 
            
                <div class="px-1">
                    <p>${elem.authors[0].profile_name}</p>
                    <p>views : ${elem.others.views || 'no data'}</p>
                </div>
            </div>

    `
        targetitemsId.appendChild(div)
    })
}


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
    // console.log(cardData)
    const targetitemsId = document.getElementById('cardItems');
    targetitemsId.textContent = ''
    const noDataTargetId = document.getElementById('noData')

    if (cardData.length === 0) {
        noDataTargetId.classList.remove('hidden')
    }
    else {
        cardData.forEach(elem => {
            const div = document.createElement('div')
            div.classList = "card w-70 bg-base-100 shadow-xl gap-4 mb-4"

            div.innerHTML = `
                <img src="${elem.thumbnail}" alt="Shoes" class=" w-full h-36" />
                <div class="mt-2 flex justify-start gap-4">
               
                    <div class="w-14 h-12 px-2">
                    <img src="${elem.authors[0].profile_picture}" alt="profie picture" class="rounded-full ">      
                    </div> 
                
                    <div class="px-1">
                        <p>${elem.authors[0].profile_name}</p>
                        <p>views : ${elem.others.views || 'no data'}</p>
                    </div>
                </div>

        `
            targetitemsId.appendChild(div)


        });



    }
}




loadCategories()
showAllCategoriesData()