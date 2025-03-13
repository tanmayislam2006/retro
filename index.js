const lastPostDiv = document.getElementById("lastes-post");
const allPostCard = document.getElementById("all-post-card");
const searchBtn = document.getElementById("search-btn")

fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    .then(res => res.json())
    .then(data => getLastesPost(data))
    .catch(err => console.log(err, "mara khau"));
const getLastesPost = (allPost) => {
    for (const post of allPost) {
        const postCard = document.createElement("div");
        postCard.classList.add("p-3", "border", "border-bordercolor", "rounded-lg");
        postCard.innerHTML = `
        <!-- image  -->
        <div class="h-44"><img src=${post.cover_image} class=" h-full rounded-lg object-cover w-full" alt=""></div>
        <!-- text content  -->
        <div class="my-3 ">
            <div class="">
                <time datetime="01-03-2025" class=" text-gray-600 my-1">${post.author.posted_date}</time>
                <!-- detail  -->
                <div class="flex flex-col">
                    <h3 class="text-lg font-bold">${post.title}</h3>
                    <p class="text-gray-400 my-2 font-medium flex items-center gap-2">${post.description}</p>
                </div>
                <!-- profile picture  -->
                <div class="flex gap-2">
                    <div class="w-12 h-12 rounded-full border-2 ${post.isActive==true?"border-purple-400":"border-pink-400"} p-1"><img
                            class="h-full  object-fill rounded-full w-full" src=${post.profile_image} alt=""></div>
                    <!-- text-content  -->
                    <div class="">
                        <h3 class="text-lg font-extrabold">${post.author.name}</h3>
                        <p class="text-gray-600 my-2">${post.author.designation}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        lastPostDiv.append(postCard);
    }
};
// -----------------------------------all post------------------------
const fetchAllPosts = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
        const data = await res.json();
        getAllPost(data.posts);
    } catch (err) {
        console.log(err, "mara khau");
    }
};

fetchAllPosts();

const getAllPost = (allPost) => {
    allPostCard.innerHTML=""
    allPost.forEach(post => {
        const postCardAll = document.createElement("div")
        postCardAll.classList.add("bg-[#12132D10]", "rounded-lg", "px-5", "py-6", "flex", "justify-evenly", "gap-2", "my-5", "cursor-pointer")
        postCardAll.innerHTML = `
                                <div class="">
                            <!-- images -->
                            <div class="rounded-full border-2 ${post.isActive==true?"border-purple-400":"border-gray-700"} p-1 w-16 h-16 "><img
                                    src=${post.image} alt=""
                                    class=" rounded-full w-ful"></div>
                        </div>
                        <!-- text content  -->
                        <div class="">
                            <div class="text-gray-600">
                                <span class="">#: ${post.category}</span> <span class="mx-5">Author: ${post.author.name}</span>
                            </div>
                            <h3 class="text-lg font-bold my-2">${post.title}</h3>
                            <p class="text-gray-600 max-w-md my-3 mb-6">${post.description}</p>
                            <!-- lijke button  -->
                            <div class="flex border-dashed border-t-2 border-gray-400 justify-between items-center">
                                <div class="py-3  flex gap-5">
                                    <div class="flex gap-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <span class="text-gray-600">${post.view_count}</span>
                                    </div>
                                    <div class="flex gap-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        <span class="text-gray-600">${post.comment_count}</span>
                                    </div>
                                    <div class="flex gap-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span class="text-gray-600">${post.posted_time}</span>
                                    </div>
                                </div>
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="text-white size-8 rounded-full p-1 bg-primaryColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                    </svg>

                                </div>
                            </div>

                        </div>
        `
        allPostCard.append(postCardAll)
    });

}
// serch button -----------------------------
searchBtn.addEventListener("click", event => {
    const searchField = document.getElementById("search-field").value;
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchField}`)
        .then(res => res.json())
        .then(data => getAllPost(data.posts))
        .catch(err => {
            console.log(err, "error marche boss");
        })
        allPostCard.innerHTML=""


})
