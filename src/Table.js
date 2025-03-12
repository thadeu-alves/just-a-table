const Table = {

    table: document.querySelector("table"),

    clear(){
        this.table.innerHTML = "";

        this.table.innerHTML = `
            <tr>
                <th>Nome</th>
                <th>Profissao</th>
                <th>Cidade</th>
            </tr>
        `;
    },

    loadRow(row){
        this.table.appendChild(row);
    },

    createRow({name, work, city}){
        let row = document.createElement("tr");
        let nameElement = document.createElement("td");
        let workElement = document.createElement("td");
        let cityElement = document.createElement("td");

        nameElement.innerText = name;
        workElement.innerText = work;
        cityElement.innerText = city;

        row.appendChild(nameElement);
        row.appendChild(workElement);
        row.appendChild(cityElement);

        return row;
    },

}

export { Table};