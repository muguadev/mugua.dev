(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{16:function(e,a,s){},17:function(e,a,s){},18:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s(1),r=s.n(n),c=s(9),o=s.n(c),i=(s(16),s(7),s(17),function(e){var a=e.children;return Object(t.jsx)("div",{className:"content",children:a})}),l=function(e){var a=e.children;return Object(t.jsx)("div",{className:"cover",children:a})},d=s(4),u=s(10),p=s(3),j=(s(8),function(e){var a=e.id,s=e.children,n=e.turned,r=e.containerClass,c="container ".concat(r," turnable ").concat(n?"turned":""),o=Object(p.a)(s,2),i=o[0],l=o[1];return Object(t.jsxs)("div",{className:c,id:a,children:[Object(t.jsx)("div",{className:"front",children:i}),Object(t.jsx)("div",{className:"back",children:l})]})}),b=function(e){return e.type===l},m=function(e){var a=e.children,s=Object(n.useState)({current:0,flipped:!1,mustFlip:!1}),c=Object(p.a)(s,2),o=c[0],m=c[1],h=function(e){return e.type===q},g=r.a.Children.toArray(a),x=g.slice(-1)[0],O=b(g[0])?[g[0],Object(t.jsx)(l,{})]:[g[0]],v=b(x)?[Object(t.jsx)(l,{}),x]:[x],f=g.slice(1,-1),N=f.length%2===0?[]:[Object(t.jsx)(i,{})],q=function(e){var a=e.id,s="previous"===a&&z||"next"===a&&!z;return Object(t.jsx)("div",{id:a,className:"container ".concat(s?"clickable":""," empty")})},y=[Object(t.jsx)(q,{id:"previous"})].concat(O,Object(u.a)(f),N,v,[Object(t.jsx)(q,{id:"next"})]);var k=o.current,z=o.flipped,A=o.mustFlip,T=function(e){var a=e.page,s=e.id,n=e.clickable,r=e.turned;return Object(t.jsx)("div",{id:s,className:"container ".concat(n?"clickable":""," ").concat(b(a)?"cover":"page"," ").concat(r?"turned":""),children:a})},S=function(e){var a=e.page;return h(a)?a:Object(t.jsx)(T,{clickable:!0,id:"previous",page:a,turned:!0},"previous")},F=function(e){var a=e.page;return h(a)?a:Object(t.jsx)(T,{clickable:!0,id:"next",page:a,turned:!1},"next")},C=y.slice(k,k+4),E=Object(p.a)(C,4),J=E[0],L=E[1],w=E[2],I=E[3];return Object(n.useEffect)((function(){A&&m(Object(d.a)(Object(d.a)({},o),{},{flipped:!z,mustFlip:!1}))}),[m,o,z,A]),Object(t.jsxs)("div",{className:"book",onClick:function(e){var a=e.target.closest(".container").id;"next"===a&&!z||"previous"===a&&z?m(Object(d.a)(Object(d.a)({},o),{},{mustFlip:!0})):"next"===a&&k<g.length?m({current:k+2,flipped:!1,mustFlip:!0}):"previous"===a&&k>0&&m({current:k-2,flipped:!0,mustFlip:!0})},children:[Object(t.jsx)(S,{page:J}),Object(t.jsx)(F,{page:I}),Object(t.jsx)(j,{id:"flippable",containerClass:b(L)?"cover":"page",turned:z,children:[L,w]},"page-".concat(k.toString().padStart(4,"0")))]})},h=function(e){var a=e.children;return 0===a.length?Object(t.jsx)("div",{className:"desk noselect empty",children:Object(t.jsx)("p",{children:"No hay nada que mostrar"})}):Object(t.jsx)("div",{className:"desk noselect",children:Object(t.jsx)(m,{children:a})})};h.defaultProps={children:[]};var g=h,x=s.p+"static/media/tuga.9db72ee8.png",O=s.p+"static/media/bye.bdc0f11b.png",v=s.p+"static/media/drawing.1d0d187d.png",f=s.p+"static/media/turtlemoves.05836449.png",N=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)(g,{children:[Object(t.jsxs)(l,{children:[Object(t.jsx)("img",{src:x,className:"front-cover"}),Object(t.jsx)("h1",{className:"book-title",children:"Tuga"}),Object(t.jsx)("h3",{className:"book-author",children:"Jorge Sosa"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("h1",{className:"book-title",children:"Tuga"}),Object(t.jsx)("h3",{className:"book-author",children:"Jorge Sosa"}),Object(t.jsxs)("p",{className:"copyright",children:[Object(t.jsx)("i",{children:"Tuga"})," \xa9 Jorge Sosa 2018"]}),Object(t.jsx)("p",{className:"permission",children:"Reproducido con permiso del autor"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("img",{src:f,className:"illustration"}),Object(t.jsx)("p",{className:"image-footer",children:"\xab\u2026 o incluso cuatro elefantes que a su vez soporten en sus lomos el peso del mundo.\xbb"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("p",{className:"opening",children:"La tortuga es un animal que se caracteriza por tener, en su parte exterior, un caparaz\xf3n y, en su parte interior, una o m\xe1s tortugas. Estos dos (o m\xe1s) elementos constituyen uno de los animales m\xe1s prodigiosos de la creaci\xf3n. La tortuga puede, dados el tama\xf1o y constituci\xf3n adecuados, soportar sobre su espalda toda una variedad de objetos: una insustancial brizna de hierba, un caracol audaz, un halc\xf3n perezoso, un halc\xf3n hambriento, un halc\xf3n disfrazado de caracol, o incluso cuatro elefantes que a su vez soporten en sus lomos el peso del mundo."}),Object(t.jsx)("p",{className:"broken",children:"El momento en que la peque\xf1a Ati encontr\xf3 a su primera tortuga fue, por todo esto, el"}),Object(t.jsx)("span",{className:"footer odd",children:"1"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("p",{className:"trailing",children:"momento m\xe1s feliz de sus vidas. Si no hab\xe9is visto nunca la cara de una (o m\xe1s) tortugas felices, os ayudar\xe1 saber que, cuando una tortuga est\xe1 verdadera y exultantemente contenta, loca de alegr\xeda, su gesto es el de un canto rodado que por fin para un momento en la orilla a descansar. Si tampoco hab\xe9is visto nunca ese gesto, fijaos en \xe9l la pr\xf3xima vez que vay\xe1is al campo con Ati."}),Object(t.jsx)("p",{className:"broken",children:"La peque\xf1a Ati es un animal que se caracteriza por tener, en su parte exterior, una personita con menos a\xf1os que orejas y, en su parte interior, una o m\xe1s\u2026 Atis. El encuentro entre los dos seres m\xe1s prodigiosos del mundo se produjo, como todos los hechos ins\xf3litos de la historia, cuando no hab\xeda nadie delante para grabarlo. La ni\xf1a inici\xf3 la conversaci\xf3n, invitando a Tuga a adoptar ese nombre y a ser su mejor amiga para siempre, durante el resto de la tarde, o hasta que alguna se quedara dormida; lo que llegara antes."}),Object(t.jsx)("span",{className:"footer even",children:"2"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("span",{className:"header title",children:"Tuga"}),Object(t.jsx)("p",{className:"trailing",children:"Tuga, con gesto de aquiescencia c\xf3mplice, consinti\xf3 a condici\xf3n de que cualquiera de las dos que hubiera crecido m\xe1s que la otra se comprometiera a llevar a su amiga a cuestas para siempre, durante el resto de la tarde, o hasta que se cansara; lo que llegara antes."}),Object(t.jsx)("p",{children:"Si nunca hab\xe9is visto el gesto de aquiescencia c\xf3mplice de una (o m\xe1s) tortugas, os ayudar\xe1 saber que es como el del canto rodado, s\xf3lo que esta vez ha parado en la orilla izquierda."}),Object(t.jsx)("p",{children:"El resto de la tarde dur\xf3, como siempre, menos de lo que Ati hubiera querido. Jugaron a carreras (siempre ganaban las dos, porque Ati llevaba a Tuga). Intentaron el escondite, pero a Ati no se le daba bien meter la cabeza en el cuerpo. Luego hablaron largo y tendido, y se contaron historias de ni\xf1as y tortugas y de pap\xe1s tortuga y de pap\xe1s persona. Y luego se acab\xf3 el resto de la tarde, y Ati tuvo que volver a su casa, lejos de all\xed."}),Object(t.jsx)("span",{className:"footer odd",children:"3"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("span",{className:"header author",children:"Jorge Sosa"}),Object(t.jsx)("p",{children:"En otras circunstancias, Ati habr\xeda hecho lo imposible para solucionar la duraci\xf3n de las tardes. Habr\xeda pensado que, ya que las cosas buenas marcan siempre la frontera entre la tarde y el resto, el comienzo del resto de la tarde deber\xeda adelantarse para que hubiera menos tarde y m\xe1s resto, y por tanto m\xe1s cosas buenas. Como a Ati le bastaba con un dedo para contar su edad, no se entretuvo en estos debates est\xe9riles y se limit\xf3 a despedirse emocionada de Tuga."}),Object(t.jsx)("p",{children:"En otras circunstancias, Tuga habr\xeda hecho lo imposible para retener a Ati como amiga inseparable. Habr\xeda hecho pucheros, ojitos, habr\xeda berreado o pataleado; habr\xeda seguido a Ati corriendo hasta el fin del mundo. Como Tuga era una tortuga, se limit\xf3 a contemplar la marcha de Ati con un gesto cargado de a\xf1oranza agradecida (pensad en un canto rodado sec\xe1ndose al sol)."}),Object(t.jsx)("span",{className:"footer even",children:"4"})]}),Object(t.jsxs)(i,{children:[Object(t.jsx)("span",{className:"header title",children:"Tuga"}),Object(t.jsx)("p",{children:"As\xed fue como Tuga lleg\xf3 a ser el prodigioso anima que ten\xeda, en su parte exterior, un caparaz\xf3n y, en su parte interior, una o m\xe1s tortugas y una \xfanica, maravillosa, Ati."}),Object(t.jsx)("p",{className:"end",children:"\u223c \u2605 \u223d"}),Object(t.jsx)("img",{src:v,className:"turtle"}),Object(t.jsx)("span",{className:"footer odd",children:"5"})]}),Object(t.jsx)(l,{children:Object(t.jsx)("img",{src:O,className:"back-cover"})})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(a){var s=a.getCLS,t=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;s(e),t(e),n(e),r(e),c(e)}))};o.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(N,{})}),document.getElementById("root")),q()},7:function(e,a,s){},8:function(e,a,s){}},[[18,1,2]]]);
//# sourceMappingURL=main.5429fb50.chunk.js.map