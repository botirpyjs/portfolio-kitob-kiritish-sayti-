window.addEventListener('DOMContentLoaded', ()=>{

    const name = document.querySelector("#name"),
        author = document.querySelector("#auth"),
        year = document.querySelector("#year"),
        btn = document.querySelector(".sub"),
        tbody = document.querySelector("#tbody");

    btn.addEventListener('click', ()=>{
        if (name.value == '' && author.value == '' && year.value == ''){
            document.querySelector(".alertt").style.display = "block";
        }else {
            let  newrow = document.createElement("tr"),
                newName = document.createElement("th"),
                newAuthor = document.createElement("th"),
                nYear = document.createElement("th");

            newName.innerHTML = name.value;
            newrow.appendChild(newName);

            newAuthor.innerHTML = author.value;
            newrow.appendChild(newAuthor);

            nYear.innerHTML = year.value;
            newrow.appendChild(nYear);

            tbody.appendChild(newrow);
        }
    })
    document.querySelector(".alertt").style.display = "none";
    document.querySelector(".btn-close").addEventListener('click', ()=>{
        document.querySelector(".alertt").style.display = "none";
    })
    }

)

