const baseURL = 'https://api.adviceslip.com/advice';

const adviceGen__advice = document.querySelector('.advice-gen__advice');
const advice_children = adviceGen__advice.children;
// const advice_children_array = Array.from(advice_children);

    const loadAdvice = async () => {   
        try{
            const res =  await fetch(baseURL);
            const data = await res.json();
            
            advice_children[0].innerText = `advice #${data.slip.id}`;
            advice_children[1].innerText = data.slip.advice;
            // console.log(data.slip.id);
            // console.log(data.slip.advice);
        }catch(e){
            console.log('Error loading advice: ', e);
        }
    };
loadAdvice();

adviceGen__advice.nextElementSibling.addEventListener("click", () => {
    loadAdvice();
})



// fetch('https://api.adviceslip.com/advice')
//     .then((res) => {
//         console.log('the response is: ', res);
//         return res.json();
//     })
//     .then( data => {
//         console.log('the data is: ', data);
//     })
//     .catch((err) => {
//         console.log('Error detected: ', err);
//     })