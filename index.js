const lastPostDiv = document.getElementById("lastes-post")



fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    .then(res => res.json())
    .then(data => getLastesPost(data))
    .catch(err => console.log(err, "mara khau"))
const getLastesPost = (allPost) => {
    for (const post of allPost) {
        const postCard = document.createElement("div")
        postCard.classList.add("p-3", "border", "border-bordercolor", "rounded-lg")
        postCard.innerHTML = `
        <!-- image  -->
                    <div class="h-44"><img src=${post.cover_image} class=" h-full rounded-lg object-cover w-full" alt=""></div>
                    <!-- text content  -->
                    <div class="my-3 ">
                        <div class="">
                            <time datetime="01-03-2025" class=" text-gray-600 my-1">${post.author.posted_date}</time>
                            <!-- detail  -->
                            <div class="flex flex-col">
                                <h3 class="text-lg font-bold">${post.title}
                                </h3>
                                <p class="text-gray-400 my-2 font-medium flex items-center gap-2">${post.description}
                                </p>
                            </div>
                            <!-- profile picture  -->
                            <div class="flex gap-2">
                                <div class="w-12 h-12 rounded-full border-4 border-blue-500 p-1"><img
                                        class="h-full  object-fill rounded-full w-full" src=${post.profile_image} alt=""></div>
                                <!-- text-content  -->
                                <div class="">
                                    <h3 class="text-lg font-extrabold">${post.author.name}</h3>
                                    <p class="text-gray-600 my-2">${post.author.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        lastPostDiv.append(postCard)

    }
}