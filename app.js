
const URL = "https://cat-fact.herokuapp.com/facts"

const factPara = document.querySelector("#collect")
const btn = document.querySelector("#btn");



const getFacts = async () => {
    console.log("getting data.....");

    let response = await fetch(URL);
    console.log(response);
    let facts = await response.json();
    console.log(facts);
    factPara.innerText = facts[0].text;
};

// promise chain
// function getFacts(){
//     fetch(URL)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             factPara.innerText = data[0].text
//         })
//
// }
btn.addEventListener("click", getFacts);



