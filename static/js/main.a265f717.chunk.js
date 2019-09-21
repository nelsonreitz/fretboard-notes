(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(9),n(3)),l=[{name:"E Standard",abbr:"e_std",notes:["E","A","D","G","B","E"]},{name:"Eb Standard",abbr:"eb_std",notes:["Eb","Ab","Db","Gb","Bb","Eb"]},{name:"D Standard",abbr:"d_std",notes:["D","G","C","F","A","D"]},{name:"Drop D",abbr:"drop_d",notes:["D","A","D","G","B","E"]},{name:"C Standard",abbr:"c_std",notes:["C","F","Bb","Eb","G","C"]},{name:"Drop C",abbr:"drop_c",notes:["C","G","C","F","A","D"]}],i=[{openNote:"Ab",fretNotes:["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"]},{openNote:"A",fretNotes:["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A"]},{openNote:"Bb",fretNotes:["B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb"]},{openNote:"B",fretNotes:["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]},{openNote:"C",fretNotes:["Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"]},{openNote:"Db",fretNotes:["D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db"]},{openNote:"D",fretNotes:["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D"]},{openNote:"Eb",fretNotes:["E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb"]},{openNote:"E",fretNotes:["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"]},{openNote:"F",fretNotes:["Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F"]},{openNote:"Gb",fretNotes:["G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb"]},{openNote:"G",fretNotes:["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"]}];n(11);var b=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"Sitetitle"},"Fretboard Notes"),r.a.createElement("p",{className:"SiteDescription"},"Visual chart to learn guitar notes")))},u=(n(13),6),m=12;function E(e){for(var t=e.fretsCount,n=[r.a.createElement("th",{className:"Open",key:"open"}),r.a.createElement("th",{className:"Spacer",key:"spacer"})],a=0;a<t;a++){var o=a+1,c="Fret-"+o;n.push(r.a.createElement("th",{className:c,key:o},r.a.createElement("div",{className:"FretNumber"},o)))}return r.a.createElement("thead",null,r.a.createElement("tr",{className:"FretNumbers"},n))}function N(e){var t=e.note,n="Note Note-"+t+(t.length>1?" HalfstepNote":"");return r.a.createElement("div",{className:n},t)}function f(e){for(var t=e.fretsCount,n=e.stringsCount,a=e.activeTuning,o=e.tunings,c=e.stringNotes,s=[],l=o.find(function(e){return e.abbr===a}),i=function(e){for(var n="String-"+e,a=l.notes[e],o=[r.a.createElement("td",{className:"Open",key:"open"},r.a.createElement(N,{note:a})),r.a.createElement("td",{className:"Spacer",key:"spacer"})],i=c.find(function(e){return e.openNote===a}),b=0;b<t;b++){var u=b+1,m=i.fretNotes[b],E="Fret Fret-"+u;o.push(r.a.createElement("td",{className:E,key:u},r.a.createElement(N,{note:m})))}s.unshift(r.a.createElement("tr",{className:n,key:e},o))},b=0;b<n;b++)i(b);return r.a.createElement("tbody",null,s)}var d=function(e){var t=e.activeTuning,n=e.tunings,a=e.stringNotes;return r.a.createElement("div",{className:"Fretboard"},r.a.createElement("div",{className:"Container"},r.a.createElement("table",null,r.a.createElement(E,{fretsCount:m}),r.a.createElement(f,{fretsCount:m,stringsCount:u,activeTuning:t,tunings:n,stringNotes:a}))))};n(15);var v=function(e){var t=e.tuningAbbr,n=e.tuningName,a=e.isActive,o=e.onTuningSelect;return r.a.createElement("button",{className:"TuningButton"+(a?" Active":""),value:t,onClick:function(e){o(e.target.value)}},n)};n(17);var p=function(e){var t=e.tunings,n=e.activeTuning,a=e.onTuningSelect,o=[],c=!0,s=!1,l=void 0;try{for(var i,b=t[Symbol.iterator]();!(c=(i=b.next()).done);c=!0){var u=i.value;o.push(r.a.createElement(v,{key:u.abbr,tuningAbbr:u.abbr,tuningName:u.name,isActive:u.abbr===n,onTuningSelect:a}))}}catch(m){s=!0,l=m}finally{try{c||null==b.return||b.return()}finally{if(s)throw l}}return r.a.createElement("div",{className:"TuningSelect"},r.a.createElement("div",{className:"Container"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Choose a tuning:"),o)))};n(19);var g=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Copyright"},(new Date).getFullYear()," \xa9"," ",r.a.createElement("a",{href:"http://nelsonreitz.ch",target:"_blank",rel:"noopener noreferrer"},"Nelson Reitz")),r.a.createElement("a",{href:"http://github.com/nelsonreitz/fretboard",target:"_blank",rel:"noopener noreferrer"},"View the source on Github")))};n(21);var D=function(){var e=Object(a.useState)("e_std"),t=Object(s.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(d,{tunings:l,stringNotes:i,activeTuning:n}),r.a.createElement(p,{tunings:l,onTuningSelect:function(e){o(e)},activeTuning:n}),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,2,1]]]);
//# sourceMappingURL=main.a265f717.chunk.js.map