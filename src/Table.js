const Table = {

    table: document.querySelector("table"),

    clear(){
        this.table.innerHTML = "";

        this.table.innerHTML = `
            <tr>
                <th>Profile</th>
                <th>Area</th>
                <th>Tags</th>
                <th>Work percentual</th>
            </tr>
        `;
    },

    loadRow(row){
        this.table.appendChild(row);
    },

    createRow({profile, area, tags, workPercentual}){
        let row = document.createElement("tr");
        
        let profileElement = this.createRowProfile(profile);
        let areaElement = this.createRowArea(area);
        let tagsElement = this.createRowTags(tags);
        let workPercentualElement = this.createRowWorkPercentual(workPercentual);


        row.appendChild(profileElement);
        row.appendChild(areaElement);
        row.appendChild(tagsElement);
        row.appendChild(workPercentualElement);

        return row;
    },

    createRowProfile({name, email, imgUrl}){
        let td = document.createElement("td");
        let nameElement = document.createElement("h1");
        let emailElement = document.createElement("h2");
        let imgElement = document.createElement("img");
        let div = document.createElement("div");

        nameElement.innerText = name;
        emailElement.innerText = email;
        imgElement.src = `https://ui-avatars.com/api/?background=random&name=${name}`;
        
        div.appendChild(nameElement);
        div.appendChild(emailElement);

        td.appendChild(imgElement);
        td.appendChild(div);

        td.classList.add("profile");

        return td;
    },

    createRowArea(area = ""){
        let td = document.createElement("td");
        let areaElement = document.createElement("h1");
        let color = this.getCollorByArea(area);

        areaElement.innerText = area.slice(0, 3).toUpperCase();
        areaElement.style.color = color;

        td.appendChild(areaElement);

        td.classList.add("area");

        return td;
    },

    getCollorByArea(area){
        let all = [
            { "area": "development", "color": "#1E90FF" },
            { "area": "design", "color": "#FF69B4" },
            { "area": "engineering", "color": "#FF8C00" },
            { "area": "education", "color": "#32CD32" },
            { "area": "medicine", "color": "#DC143C" },
            { "area": "law", "color": "#8B4513" },
            { "area": "business", "color": "#FFD700" },
            { "area": "journalism", "color": "#6495ED" },
            { "area": "architecture", "color": "#A52A2A" },
            { "area": "technology", "color": "#20B2AA" },
            { "area": "photography", "color": "#9932CC" },
            { "area": "psychology", "color": "#FF4500" },
            { "area": "data science", "color": "#2E8B57" }
        ];
        let color;

        all.forEach(e => {
            if(e.area == area){
                color = e.color;
            }
        });

        return color;

    },

    createRowTags(tags = []){
        let td = document.createElement("td");
        let list = document.createElement("ul");

        tags.forEach(tag => {
            let li = document.createElement("li");
            li.innerText = tag;

            list.appendChild(li);
        });

        list.classList.add("tags");
        td.appendChild(list);

        return td;
    },

    createRowWorkPercentual(workPercentual){
        let td = document.createElement("td");
        let divContainer = document.createElement("div");
        let divProgress = document.createElement("div");
        let h1 = document.createElement("h1");

        td.classList.add("workPercentual");
        divContainer.classList.add("divContainer");
        divProgress.classList.add("divProgress");

        h1.innerText = workPercentual;

        divProgress.style.width = `${workPercentual}%`;

        divContainer.appendChild(divProgress);
        td.appendChild(divContainer);
        td.appendChild(h1);
        
        return td;
    }

}

export { Table};