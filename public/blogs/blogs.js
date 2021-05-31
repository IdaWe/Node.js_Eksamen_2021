// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getBlogs() {
    try {
        const response = await fetch("/api/blogs");
        const result = await response.json();

        const blogList = document.getElementById("blogs");
        
        result.blogs.map(blog => {
            const blogDiv = document.createElement("div");
            

            const card = document.createElement("div");
            card.classList.add("card", "mx-auto", "my-2");
            card.style="width: 18rem;"

            const cardPicture = document.createElement("div");
            card.classList.add("cardPicture");
            card.style="width: 18rem;"

            const cardBody = document.createElement("div");     
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = blog.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = blog.description;

            const cardStartDate = document.createElement("p");
            cardStartDate.classList.add("card-startDate");
            cardStartDate.innerText = blog.startDate;

            const cardSlutDate = document.createElement("p");
            cardSlutDate.classList.add("card-endDate");
            cardSlutDate.innerText = blog.endDate;

            blogDiv.appendChild(card);
            blogDiv.appendChild(cardPicture);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardStartDate);
            cardBody.appendChild(cardSlutDate);

            blogList.appendChild(blogDiv);


            
        });


            } catch (error) {
                console.log(error);
            }
        })();


// fetch("/api/projects").then(res => res.json()).then(console.log);


