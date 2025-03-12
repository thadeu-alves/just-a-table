const Dom = {
    modal(obj){
        return new Promise((resolve) => {
            let modal = document.querySelector(".modal-container");
            let modalContent = modal.querySelector(".modal");
            let btnAdd = document.createElement("button");
            let btnDelete = document.createElement("button");
            let object = {};

            let stateUpdate = false

            let nameLabel = document.createElement("label");
            let workLabel = document.createElement("label");
            let cityLabel = document.createElement("label");
            
            let name = this.createInput("name");
            let work = this.createInput("work");
            let city = this.createInput("city");

            if(obj){
                name.value = obj.name;
                work.value = obj.work;
                city.value = obj.city;

                stateUpdate = true;
            }

            modal.classList.add("active");

            btnAdd.innerText = "Add";
            btnAdd.addEventListener("click", () => {
                this.modalClose(modal);
                object = this.validate(name.value, work.value, city.value);
                resolve(object);
            })

            if(stateUpdate){
                btnDelete.innerText = "Delete";
                btnDelete.classList.add("btnDelete");
                btnDelete.addEventListener("click", () => {
                    this.modalClose(modal);
                    resolve("delete");
                })
            }
            
            window.addEventListener("click", (e) => {
                if(e.target.classList.contains("active")){
                    this.modalClose(modal);
                }
            })

            nameLabel.innerText = "Nome";
            workLabel.innerText = "Profissão";
            cityLabel.innerText = "Cidade";

            this.addItens(modalContent, [
                nameLabel,
                name,
                workLabel,
                work,
                cityLabel,
                city,
                btnAdd,
                stateUpdate ? btnDelete : null
            ]);
        })        
    },

    modalClose(modal){
        modal.classList.remove("active");
    },

    createInput(className){
        let input = document.createElement("input");
        input.classList.add(className);
        return input;
    },

    addItens(modal, itens = []){
        modal.innerHTML = "";

        itens.forEach((e) => {
            if(e){
                modal.appendChild(e);
            }
        });
    },

    validate(name, work, city){
        if(name != "" && work != "" && city != ""){
            return {
                name,
                work,
                city
            }
        }else{
            console.log("vazio");
        }
    }
}

export { Dom };