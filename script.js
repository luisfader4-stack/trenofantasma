const capitoli = [
{num:1,titolo:"La tristezza di Marco",desc:"Marco cerca Alice, il treno appare nella notte."},
{num:2,titolo:"Alice e il treno",desc:"Alice scappa e sale sul treno misterioso."},
{num:3,titolo:"L'uomo grasso",desc:"Marco scopre il Quartiere dei Pazzi."},
{num:4,titolo:"L'ispettore",desc:"Alice fugge senza paura dal controllo."},
{num:5,titolo:"Il capostazione",desc:"Marco paga per ottenere informazioni."},
{num:6,titolo:"Matteo",desc:"Alice incontra Matteo e nasce un'amicizia."}
];

const container = document.getElementById("capList");

capitoli.forEach(c=>{
    const div = document.createElement("div");
    div.className="cap-item";

    div.innerHTML=`
        <div class="cap-title">Capitolo ${c.num}: ${c.titolo}</div>
        <div class="cap-desc">${c.desc}</div>
    `;

    div.addEventListener("click",()=>{
        div.classList.toggle("active");
    });

    container.appendChild(div);
});
