const Data = {
    get(){
        return DB;
    },

    getRow(id){
        return DB[id];
    },

    new(object){
        DB.push(object);
        this.setStorage();
    },

    update(id, object){
        if(object!=null){
            DB[id] = object;
            this.setStorage();
        }
    },

    delete(id){
        DB.splice(id, 1);
        this.setStorage();
    },

    setStorage(){
        console.log("saved data");
        localStorage.setItem("data", JSON.stringify(DB));
    }
}

const DB = JSON.parse(localStorage.getItem("data")).length > 0 ? JSON.parse(localStorage.getItem("data")) : [
    { name: "Thadeu", work: "Programador", city: "Serra Grande" },
    { name: "Carlos", work: "Designer", city: "João Pessoa" },
    { name: "Ana", work: "Engenheira", city: "Campina Grande" },
    { name: "Mariana", work: "Professora", city: "Recife" },
    { name: "Bruno", work: "Médico", city: "Natal" },
    { name: "Fernanda", work: "Advogada", city: "Fortaleza" },
    { name: "Ricardo", work: "Empresário", city: "São Paulo" },
    { name: "Juliana", work: "Jornalista", city: "Rio de Janeiro" },
    { name: "Lucas", work: "Engenheiro", city: "Belo Horizonte" },
    { name: "Camila", work: "Arquiteta", city: "Curitiba" },
    { name: "Diego", work: "Analista de Sistemas", city: "Brasília" },
    { name: "Letícia", work: "Médica", city: "Salvador" },
    { name: "Gabriel", work: "Fotógrafo", city: "Porto Alegre" },
    { name: "Amanda", work: "Psicóloga", city: "Florianópolis" },
    { name: "Pedro", work: "Cientista de Dados", city: "Goiânia" }
];

export {Data, DB}
