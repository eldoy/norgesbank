window.norgesbank=async function(t={}){let{from:a="USD",to:e="NOK",date:n}=t;n||(n=new Date).setDate(n.getDate()-1);t=`https://data.norges-bank.no/api/data/EXR/B.${a}.${e}.SP?format=sdmx-json&startPeriod=${n="object"==typeof n?n.toISOString().split("T")[0]:n}&endPeriod=${n}&locale=en`;const o=await fetch(t);t=await o.json();let s;try{s=t.data.dataSets[0].series["0:0:0:0"].observations[0][0]}catch(t){console.log("Cannot find rate in dataset")}return s};