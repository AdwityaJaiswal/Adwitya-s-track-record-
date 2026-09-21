const $ = s => document.querySelector(s);
const assetFilter = $("#assetFilter"), resultFilter = $("#resultFilter"), tradesEl = $("#trades");

const assets = [...new Set(trades.map(t=>t.asset))];
assets.forEach(a => assetFilter.insertAdjacentHTML("beforeend", `<option>${a}</option>`));

function render(){
  const af=assetFilter.value, rf=resultFilter.value;
  const list=trades.filter(t=>(af==="ALL"||t.asset===af)&&(rf==="ALL"||t.result===rf));
  tradesEl.innerHTML=list.map(t=>{
    const cls=t.result.toLowerCase();
    const img=t.image ? `<img src="${t.image}" alt="Trade ${t.id} chart" style="width:100%;height:100%;object-fit:cover">` : `<div>CHART IMAGE · ADD YOUR SCREENSHOT</div>`;
    return `<article class="trade">
      <div class="trade-img">${img}</div>
      <div class="trade-body">
        <div class="trade-top"><span class="trade-id">TRADE #${t.id}</span><span class="result ${cls}">${t.result}${t.result==="TP"?" +"+t.r+"R":t.result==="SL"?" "+t.r+"R":""}</span></div>
        <h3>${t.asset} · ${t.direction}</h3>
        <div class="trade-meta">${t.session} session · ${t.date}</div>
        <div class="levels">
          <div class="level"><label>Entry</label><b>${t.entry}</b></div>
          <div class="level"><label>Stop</label><b>${t.sl}</b></div>
          <div class="level"><label>Target</label><b>${t.tp}</b></div>
          <div class="level"><label>R:R</label><b>${t.rr}</b></div>
        </div>
        <p class="analysis"><b>Setup:</b> ${t.setup}<br>${t.analysis}</p>
        <div class="trade-date">Result recorded after trade close · ${t.r>0?"Positive R":"Negative R"}</div>
      </div>
    </article>`;
  }).join("");
}
function updateStats(){
  const total=trades.length, wins=trades.filter(t=>t.result==="TP").length, losses=trades.filter(t=>t.result==="SL").length;
  const net=trades.reduce((s,t)=>s+t.r,0), wr=total?wins/total*100:0;
  $("#total").textContent=total;$("#wins").textContent=wins;$("#losses").textContent=losses;
  $("#winrate").textContent=wr.toFixed(1)+"%";$("#netr").textContent=(net>=0?"+":"")+net.toFixed(1)+"R";
}
assetFilter.addEventListener("change",render);resultFilter.addEventListener("change",render);updateStats();render();