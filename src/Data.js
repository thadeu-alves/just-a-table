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


const DB = JSON.parse(localStorage.getItem("data"))?.length > 0 ? JSON.parse(localStorage.getItem("data")) : [
    {
        "profile": {
            "name": "Thadeu",
            "email": "thadeu@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "development",
        "tags": ["tech", "leader", "sentimental"],
        "workPercentual": 90
    },
    {
        "profile": {
            "name": "Carlos",
            "email": "carlos@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "design",
        "tags": ["creative", "visual", "innovative"],
        "workPercentual": 75
    },
    {
        "profile": {
            "name": "Ana",
            "email": "ana@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "engineering",
        "tags": ["logical", "problem-solver", "analytical"],
        "workPercentual": 85
    },
    {
        "profile": {
            "name": "Mariana",
            "email": "mariana@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "education",
        "tags": ["patient", "dedicated", "mentor"],
        "workPercentual": 80
    },
    {
        "profile": {
            "name": "Bruno",
            "email": "bruno@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "medicine",
        "tags": ["caring", "precise", "dedicated"],
        "workPercentual": 95
    },
    {
        "profile": {
            "name": "Fernanda",
            "email": "fernanda@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "law",
        "tags": ["persuasive", "analytical", "strategic"],
        "workPercentual": 88
    },
    {
        "profile": {
            "name": "Ricardo",
            "email": "ricardo@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "business",
        "tags": ["entrepreneur", "visionary", "risk-taker"],
        "workPercentual": 92
    },
    {
        "profile": {
            "name": "Juliana",
            "email": "juliana@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "journalism",
        "tags": ["curious", "communicative", "investigative"],
        "workPercentual": 78
    },
    {
        "profile": {
            "name": "Lucas",
            "email": "lucas@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "engineering",
        "tags": ["technical", "solution-oriented", "logical"],
        "workPercentual": 86
    },
    {
        "profile": {
            "name": "Camila",
            "email": "camila@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "architecture",
        "tags": ["creative", "aesthetic", "planner"],
        "workPercentual": 83
    },
    {
        "profile": {
            "name": "Diego",
            "email": "diego@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "technology",
        "tags": ["problem-solver", "tech-savvy", "analytical"],
        "workPercentual": 87
    },
    {
        "profile": {
            "name": "Letícia",
            "email": "leticia@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "medicine",
        "tags": ["compassionate", "dedicated", "precise"],
        "workPercentual": 94
    },
    {
        "profile": {
            "name": "Gabriel",
            "email": "gabriel@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "photography",
        "tags": ["artistic", "creative", "observant"],
        "workPercentual": 76
    },
    {
        "profile": {
            "name": "Amanda",
            "email": "amanda@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "psychology",
        "tags": ["empathetic", "thoughtful", "analytical"],
        "workPercentual": 89
    },
    {
        "profile": {
            "name": "Pedro",
            "email": "pedro@gmail.com",
            "imgUrl": "profile.png"
        },
        "area": "data science",
        "tags": ["analytical", "logical", "data-driven"],
        "workPercentual": 91
    }
];

export {Data, DB}
