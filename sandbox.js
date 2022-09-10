const time=document.querySelector('.clock');

const today=new Date().getTime();


const now=new Date();

const day=document.querySelector('#d');
const set=()=>{
    const now=new Date();
    let mer;
    if(now.getHours()==1)
    {
        let d=now.getTime()-today;
        day.innerText= ` ${Math.round(d/1000/60/60/24)} `;
    }
    if(now.getHours()>=12)
    mer=' PM';
    else
    mer=' AM';
    const html=`<span>${12-now.getHours()}</span> : <span>${now.getMinutes()}</span> : 
    <span>${now.getSeconds()}</span>  <span>${mer}</span>`;
    time.innerHTML=html;
};

setInterval(set,1000);

console.log(day);
let d=now.getTime()-today;
        day.innerText= ` ${Math.round(d/1000/60/60/24)} `;