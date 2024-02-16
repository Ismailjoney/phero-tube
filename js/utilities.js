


function allCategoryItemsDataRepeation(targetitemsId, data) {
    console.log(data)

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
        spinner()


    })




}



 





const spinner = (isLoading) => {
    const targetSpinnerId = document.getElementById('loader')
    if (isLoading) {
        targetSpinnerId.classList.remove('hidden')
    } else {
        targetSpinnerId.classList.add('hidden')
    }
}

