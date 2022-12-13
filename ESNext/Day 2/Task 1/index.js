let tabsContainer = document.querySelector(".tabsContainer");
// console.log(tabsContainer);

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    response
        .json()
        .then((data) => {
            // console.log(data);
            data.forEach((user) => {
                // console.log(user.name);
                let newTab = document.createElement("button");
                newTab.innerText = user.name;
                newTab.classList.add("tabLinks");
                newTab.addEventListener("click", () => {
                    getUserPosts(user);
                });
                tabsContainer.appendChild(newTab);
                let tabContent = document.createElement("div");
                tabContent.classList.add("tabContent");
                tabContent.setAttribute("id", `${user.id}`);
                document.body.appendChild(tabContent);
            });
        })
        .catch((err) => console.log(err));
});

async function getUserPosts(user) {
    // alert(user);
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let data = await res.json();
        openTab(user);
        tabContent = document.getElementById(`${user.id}`);
        let userPosts = document.createElement("ul");
        console.log(tabContent);
        data.forEach((post) => {
            let singlePost = document.createElement("li");

            singlePost.innerHTML = `
            <h3>${post.title}</h3>
            `;
            userPosts.appendChild(singlePost);
        });
        tabContent.appendChild(userPosts);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function openTab(user) {
    // console.log(`clicked on ${user.name}`);
    var i, tabContent, tabLinks;
    tabContent = document.querySelectorAll(".tabContent");
    // console.log(tabContent);
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].innerHTML = "";
        tabContent[i].style.display = "none";
    }
    tabLinks = document.querySelectorAll(".tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(user.id).style.display = "block";
    // evt.currentTarget.className += " active";
}
