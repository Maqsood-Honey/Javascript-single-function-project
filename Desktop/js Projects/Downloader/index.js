let button = document.querySelector('button');
let input = document.querySelector("input");

button.addEventListener("click", e => {
e.preventDefault();
fetchFile(input.value);  
})

function fetchFile(url){ 
    fetch(url).then(res =>res.blob()).then(file => {
        let tmepUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tmepUrl;
        aTag.download = "filename"; // dynamic file can be added
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tmepUrl);
        button.innerText = "Downloading the file...";
        console.log(file)
    }).catch ( () => {
        button.innerText = "Downloading the file...";
        alert("failed to download....")

    })
}