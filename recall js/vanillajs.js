const btnwhy=document.getElementById('btn-for-why');
const btncore=document.getElementById('btn-for-core');
const btnrel=document.getElementById('btn-for-rel');
const tabcon=document.getElementById('tab-cont');

const cont =[
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem",
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering", 
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)",
    ],
];

btnwhy.addEventListener('click',handleClick);
btncore.addEventListener('click',handleClick);
btnrel.addEventListener('click',handleClick);

function handleClick(event) {
    const btnid=event.target.id;
    Highlightbtn(event.target);
    if(btnid=== 'btn-for-why')
        displayContent(cont[0]);
    else if(btnid === 'btn-for-core')
        displayContent(cont[1]);
    else
        displayContent(cont[2]);
}

displayContent(cont[0]);

function displayContent(items) {
    let listcont='';
    for(const item of items){
        listcont+= `<li>${item}</li>`;
    }
    const list=document.createElement('ul');
    tabcon.innerHTML='';
    list.innerHTML= listcont;
    tabcon.append(list);
}

function Highlightbtn(btn)
{
    btnwhy.className='';
    btncore.className='';
    btnrel.className='';
    
    btn.className='active';
}