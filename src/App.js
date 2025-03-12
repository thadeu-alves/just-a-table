import { Data } from "./Data.js";
import { Table } from "./Table.js";
import { Dom } from "./utils/Dom.js";

const App = {
    btnAdd: document.querySelector(".btnAdd"),
    start(){
        this.loadTable(Data.get());
        this.btnAdd.addEventListener("click", () => this.onClickAdd());
    },

    loadTable(DB=[]){
        Table.clear();
        console.log(DB.length);
        console.log(DB);
        if(DB.length == 0){
            console.log("Zero");
        }else{
            DB.forEach(e => {
                let row = Table.createRow(e);
    
                row.addEventListener("click", () => {
                    this.updateRow(Data.get().indexOf(e));
                })
    
                Table.loadRow(row);
            })
        }
        
    },

    async onClickAdd(){
        let object = await Dom.modal();
        if(!object){
            return;
        }

        this.appendRow(object);
    },

    appendRow(object){
        Data.new(object);
        this.loadTable(Data.get());
        console.log(Data.get());
    },

    async updateRow(id){
        let object = await Dom.modal(Data.getRow(id));
        if(object == "delete"){
            Data.delete(id);
        }else{
            Data.update(id, object);
        }
        this.loadTable(Data.get());
    }
}

export {App};