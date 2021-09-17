var row = 0;

function find(){
    document.getElementById("send-data")
    let find = document.getElementById("texto").value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+find+'/')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let table = document.getElementById("body-table")
        let tdP = document.createElement("td")
        let tdM = document.createElement("td")
        let tdD = document.createElement("td")
        let tdU = document.createElement("td")
        let tdE = document.createElement("td")
        let tdA = document.createElement("audio")
        let br = document.createElement("br")
           
           
        let arch = data.map((a)=>{
            tdP.innerHTML = a.find
            tr.appendChild(tdP)
            
            for(let i = 0 ; i< a.meanings.lenght;i++){
                for(let j = 0 ; j < a.meanings[i].definitions.lenght;j++){
                    tdD.innerHTML = (j+1)+"-"+a.meanings[i].definitions[j].definition
                    if(a.meanings[i].definitions[j].example !=undefined){
                        tdE.innerHTML = "Example"+(j+1)+"-" + a.meanings[i].definitions[j].example
                    }
                }
           
                customerObjectStore.add(tdW);
             }
        })
    });
};
