const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/excel-BWzWSw2p.js","assets/cpexcel.full-CT4VMc00.js","assets/model-1rsdQibx.js","assets/settings-CrGiLlxd.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-Qrhhw6Xm.js";import{a as t}from"./model-1rsdQibx.js";var n=`reserve, book, prebook
fee, cost, price, charge
adjust, change, alter, modify
`,r=`fast，quick，rapid
important，significant，essential
accommodation，housing，lodging
`,i=`in advance, ahead of time, beforehand
take part in, participate in, join
look after, take care of, care for
`,a=`预订, test测试, reserve, book, prebook
优点，benefit，advantage，upside
提前, in advance, ahead of time, beforehand
`,o=e=>/[",\n\r]/.test(e)?`"${e.replace(/"/g,`""`)}"`:e,s=`reserve,book,prebook\r
in advance,ahead,beforehand\r
"yes, indeed",certainly\r
情绪词,happy,cheerful\r
`,c=[[`reserve`,`book`,`预订`],[`in advance`,``,`ahead of time`],[`yes, indeed`,`certainly`,`certainly`]],l=[{format:`TXT`,filename:`synonyms-template.txt`,content:`${n.trimEnd()}\n${i}`},{format:`CSV`,filename:`synonyms-template.csv`,content:s},{format:`Excel`,filename:`synonyms-template.xlsx`,rows:c}],u=[{title:`逗号分隔（英文／中文）`,filename:`demo-comma.txt`,content:`${n.trimEnd()}\n${r}`,tip:`英文逗号和中文逗号都可以分隔词条，也可以混用。同一行的词条归入同一组，换行开始下一组。`},{title:`英文词组`,filename:`demo-phrases.txt`,content:i,tip:`词组内部的空格保留，不会把一个词组拆成多个单词。`},{title:`中英标签混合`,filename:`demo-chinese-labels.txt`,content:a,tip:`中文标签及「test测试」等中英混合词条只展示，不参与发音。`},{title:`CSV 与词条内的逗号`,filename:`synonyms-template.csv`,content:s,tip:`CSV 无表头，每行一组，每格一个词条。用英文逗号分隔；词条内有英文逗号或换行时，用英文双引号包住整个词条，词条内的双引号写成两个连续的英文双引号。`},{title:`Excel 首工作表`,filename:`synonyms-template.xlsx`,rows:c,tip:`支持 .xlsx／.xls，只读取第一个工作表。无表头，每行一组，每格一个词条，空格子和空行忽略。词条中的逗号直接填写，重复词条按原顺序保留；中文标签只展示。`}].map(e=>({...e,groups:t(e.content??e.rows.map(e=>e.map(o).join(`,`)).join(`
`),e.filename)}));async function d(t){if(t.rows){let{createSynonymExcelTemplate:n}=await e(async()=>{let{createSynonymExcelTemplate:e}=await import(`./excel-BWzWSw2p.js`);return{createSynonymExcelTemplate:e}},__vite__mapDeps([0,1,2,3]));return{filename:t.filename,data:n(t.rows),type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}}let n=t.filename.endsWith(`.csv`);return{filename:t.filename,data:`${n?`﻿`:``}${t.content.trimEnd()}\n`,type:`${n?`text/csv`:`text/plain`};charset=utf-8`}}export{u as n,l as r,d as t};