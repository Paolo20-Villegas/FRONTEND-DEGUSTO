(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(34)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),c=t.n(r);t(22);var s=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})},i=(t(23),t(8)),o=t(3);t(24);var m=()=>{const e=Object(o.p)();return n.a.createElement("div",{className:"inicio-container"},n.a.createElement("header",{className:"inicio-header"},n.a.createElement("h1",null,"De Gusto"),n.a.createElement("p",null,"\xa1Nos encargamos de hacer conocer sus negocios!")),n.a.createElement("div",{className:"inicio-banner"},n.a.createElement("h2",null,"Bienvenido a nuestra p\xe1gina web"),n.a.createElement("p",null,"\xa1Descubre c\xf3mo podemos ayudarte!"),n.a.createElement("button",{className:"inicio-button",onClick:()=>{e("/loginregister")}},"Comenzar")),n.a.createElement("section",{className:"inicio-description"},n.a.createElement("h3",null,"Sobre Nosotros"),n.a.createElement("p",null,"Nuestro sistema se encarga del registro de negocios como por ejemplo restaurantes y sus platos con el fin de hacerlo conocer por su ubicaci\xf3n y beneficiando asi a los due\xf1os de negocios. Todos los datos registrados se mostraran en nuestra aplicaci\xf3n m\xf3vil orientada para los clientes que buscan los negocios de su inter\xe9s y cercanos para ellos que usted registre donde atrav\xe9s calificaciones y rese\xf1as puede irse conociendo dentro de DeGusto incrementando su influencia en el \xe1rea de negocio que haya seleccionado. Para el caso de restaurantes nuestro sistema tiene la capacidad de coordinar reservas con los clientes.")),n.a.createElement("footer",{className:"inicio-footer"},n.a.createElement("p",null,"\xa9 2024 DeGusto. Todos los derechos reservados."),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"#!"},"Facebook"),n.a.createElement("a",{href:"#!"},"Twitter"),n.a.createElement("a",{href:"#!"},"Whatsapp"))))},d=t(36);t(25);var u=()=>{const[e,a]=Object(l.useState)(""),[t,r]=Object(l.useState)(""),[c,s]=Object(l.useState)(!0),i=Object(o.p)();Object(l.useEffect)(()=>{const e=new URLSearchParams(window.location.search).get("message");"login_error"===e?a("Correo o contrase\xf1a incorrectos."):"register_success"===e&&a("Registro exitoso. Por favor, inicia sesi\xf3n.")},[]);return n.a.createElement("main",null,n.a.createElement("div",{className:"contenedor__todo"},n.a.createElement("div",{className:"caja__trasera"},n.a.createElement("div",{className:"caja__trasera-login"},n.a.createElement("h3",null,"\xbfYa tienes una cuenta?"),n.a.createElement("p",null,"Inicia sesi\xf3n para entrar en la p\xe1gina"),n.a.createElement("button",{id:"btn__iniciar-sesion",onClick:()=>s(!0)},"Iniciar Sesi\xf3n")),n.a.createElement("div",{className:"caja__trasera-register"},n.a.createElement("h3",null,"\xbfA\xfan no tienes una cuenta?"),n.a.createElement("p",null,"Reg\xedstrate para que puedas iniciar sesi\xf3n"),n.a.createElement("button",{id:"btn__registrarse",onClick:()=>s(!1)},"Reg\xedstrarse"))),n.a.createElement("div",{className:"contenedor__login-register"},c?n.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const t=e.target.username.value,l=e.target.password.value;try{const e=await d.a.post("https://api-degusto.onrender.com/api/User/loginUser",{userName:t,userPassword:l},{withCredentials:!0}),{person_TypeId:s,userName:o}=e.data;o?3===s?(console.log("Bienvenido, administrador"),i("/menuadmin")):2===s?(console.log("Bienvenido, due\xf1o de negocio"),i("/menufunctions")):a("Tipo de usuario no reconocido."):a(e.data.message||"Usuario o contrase\xf1a incorrectos")}catch(c){var n,r;console.error("Error de login:",(null===(n=c.response)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:r.message)||"Error desconocido"),a("Error en el inicio de sesi\xf3n. Por favor, int\xe9ntalo de nuevo.")}},className:"formulario__login"},n.a.createElement("h2",null,"Iniciar Sesi\xf3n"),n.a.createElement("input",{type:"text",name:"username",placeholder:"Nombre de Usuario",required:!0}),n.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),n.a.createElement("button",{type:"submit"},"Entrar"),n.a.createElement("div",{id:"login-message"},e)):n.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const a=e.target.name.value,t=e.target.email.value,l=e.target.phone.value,n=e.target.username.value,c=e.target.password.value;try{const e=await d.a.post("https://api-degusto.onrender.com/api/User/createUser",{personTypeId:2,name:a,email:t,phoneNumber:l,userName:n,password:c,createDate:(new Date).toLocaleDateString("en-GB")});console.log(e.data),r("Registro exitoso. Ahora puedes iniciar sesi\xf3n."),s(!0)}catch(m){var i,o;console.error("Error en el registro:",(null===(i=m.response)||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:o.message)||"Error desconocido"),r("Error en el registro. Por favor, revisa los datos.")}},className:"formulario__register"},n.a.createElement("h2",null,"Reg\xedstrarse"),n.a.createElement("input",{type:"text",name:"name",placeholder:"Nombre completo",required:!0}),n.a.createElement("input",{type:"email",name:"email",placeholder:"Correo Electr\xf3nico",required:!0}),n.a.createElement("input",{type:"text",name:"phone",placeholder:"N\xfamero de celular",required:!0}),n.a.createElement("input",{type:"text",name:"username",placeholder:"Usuario",required:!0}),n.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),n.a.createElement("button",{type:"submit"},"Reg\xedstrarse"),n.a.createElement("div",{id:"register-message"},t)))))};t(30);var E=()=>n.a.createElement("div",null,"Bienvenido al Resumen"),p=t(12);t(31);const v=["places"],g={width:"100%",height:"400px"},N={lat:-34.397,lng:150.644};var h=()=>{const[e,a]=Object(l.useState)({name:"",telefono:"",area:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),[t,r]=Object(l.useState)(null),[c,s]=Object(l.useState)(null),i=t=>{a({...e,[t.target.id]:t.target.value})},{isLoaded:o}=Object(p.c)({googleMapsApiKey:"AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48",libraries:v});return o?n.a.createElement("section",{className:"full-width header-well"},n.a.createElement("div",{className:"full-width header-well-icon"},n.a.createElement("i",{className:"zmdi zmdi-balance"})),n.a.createElement("div",{className:"mdl-grid"},n.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},n.a.createElement("div",{className:"full-width panel mdl-shadow--2dp"},n.a.createElement("div",{className:"full-width panel-title bg-primary text-center tittles"},"Nuevo Negocio"),n.a.createElement("div",{className:"full-width panel-content"},n.a.createElement("form",null,n.a.createElement("div",{className:"mdl-grid"},n.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"name",value:e.name,onChange:i,placeholder:"Nombre del negocio"})),n.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},n.a.createElement("input",{className:"mdl-textfield__input",type:"tel",id:"telefono",value:e.telefono,onChange:i,placeholder:"N\xfamero del negocio",pattern:"[0-9]*",inputMode:"numeric"})),n.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},n.a.createElement("select",{className:"mdl-textfield__input",id:"area",value:e.area,onChange:i},n.a.createElement("option",{value:""},"Selecciona un \xe1rea"),n.a.createElement("option",{value:"1"},"Restaurantes"),n.a.createElement("option",{value:"2"},"Tiendas"),n.a.createElement("option",{value:"3"},"Cafeter\xedas"),n.a.createElement("option",{value:"4"},"Servicios"),n.a.createElement("option",{value:"5"},"Otros"))),n.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},n.a.createElement("div",{className:"map-container"},n.a.createElement(p.a,{mapContainerStyle:g,zoom:8,center:N,onClick:e=>{const t=e.latLng.lat(),l=e.latLng.lng();r({lat:t,lng:l}),fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${t},${l}&key=AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48`).then(e=>e.json()).then(e=>{var n;const r=(null===(n=e.results[0])||void 0===n?void 0:n.formatted_address)||"Direcci\xf3n no encontrada";a(e=>({...e,direccion:r,latitud:t,longitud:l}))})}},t&&n.a.createElement(p.b,{position:{lat:t.lat,lng:t.lng}})))),n.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"direccion",value:e.direccion,readOnly:!0})),n.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"latitud",value:e.latitud,readOnly:!0})),n.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},n.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"longitud",value:e.longitud,readOnly:!0})),n.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},n.a.createElement("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},c?n.a.createElement("img",{src:c,alt:"Previsualizaci\xf3n de imagen",style:{maxWidth:"100%",maxHeight:"100%"}}):n.a.createElement("div",null,"Imagen no cargada")),n.a.createElement("input",{type:"file",accept:"image/*",onChange:async e=>{const t=e.target.files[0],l=new FormData;l.append("file",t),l.append("upload_preset","logo_preset");try{const e=await fetch("https://api.cloudinary.com/v1_1/derufjp1n/image/upload",{method:"POST",body:l}),t=await e.json();s(t.secure_url),a(e=>({...e,imageUrl:t.secure_url}))}catch(n){console.error("Error al cargar la imagen:",n)}}})),n.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},n.a.createElement("button",{type:"button",className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",onClick:async()=>{const t={name:e.name,telefono:e.telefono,direccion:e.direccion,latitud:e.latitud,longitud:e.longitud,imageUrl:e.imageUrl,business_AreaId:e.area};try{(await fetch("/api/business",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(alert("Negocio agregado exitosamente"),a({name:"",telefono:"",area:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),s(null),r(null)):alert("Error al agregar el negocio")}catch(l){console.error("Error al agregar negocio:",l)}}},"Agregar Negocio"))))))))):n.a.createElement("div",null,"Loading...")};var f=()=>n.a.createElement("div",null,"Esta es la secci\xf3n para editar Negocios");var b=()=>n.a.createElement("div",null,"Esta es la secci\xf3n para eliminar Negocios");var w=()=>n.a.createElement("div",null,"Esta es la secci\xf3n de para agregar platos");var y=()=>n.a.createElement("div",null,"Esta es la secci\xf3n de para editar platos");var C=()=>n.a.createElement("div",null,"Esta es la secci\xf3n de para eliminar platos");var O=()=>{const[e,a]=Object(l.useState)(null),[t,r]=Object(l.useState)(""),[c,s]=Object(l.useState)(!0),i=Object(o.p)(),m=t=>{a(e===t?null:t)},d=e=>{r(e)};return n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"header-bar"},n.a.createElement("button",{onClick:()=>{s(!c)},className:"btn-hide-menu"},c?"Ocultar Men\xfa":"Mostrar Men\xfa"),n.a.createElement("div",{className:"user-info"},n.a.createElement("span",{className:"welcome-text"},"Bienvenido, Nombre"),n.a.createElement("button",{onClick:()=>{i("/home")},className:"btn-logout"},"Cerrar Sesi\xf3n"))),n.a.createElement("div",{className:"content-wrapper"},c&&n.a.createElement("section",{className:"navLateral"},n.a.createElement("div",{className:"navLateral-body"},n.a.createElement("div",{className:"navLateral-body-logo text-center tittles"},n.a.createElement("i",{className:"zmdi zmdi-close btn-menu"})," Inicio"),n.a.createElement("nav",{className:"full-width"},n.a.createElement("ul",{className:"full-width list-unstyle menu-principal"},n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("resumen")},n.a.createElement("div",{className:"navLateral-body-cl"},n.a.createElement("i",{className:"zmdi zmdi-view-dashboard"})),n.a.createElement("div",{className:"navLateral-body-cr"},"RESUMEN"))),n.a.createElement("li",{className:"full-width divider-menu-h"}),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width btn-subMenu",onClick:()=>m("negocios")},n.a.createElement("div",{className:"navLateral-body-cl"},n.a.createElement("i",{className:"zmdi zmdi-case"})),n.a.createElement("div",{className:"navLateral-body-cr"},"NEGOCIOS"),n.a.createElement("span",{className:`zmdi zmdi-chevron-left ${"negocios"===e?"active":""}`})),"negocios"===e&&n.a.createElement("ul",{className:"full-width menu-principal sub-menu-options"},n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("agregarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"AGREGAR NEGOCIO"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("editarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"EDITAR NEGOCIO"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("eliminarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"ELIMINAR NEGOCIO"))))),n.a.createElement("li",{className:"full-width divider-menu-h"}),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width btn-subMenu",onClick:()=>m("platos")},n.a.createElement("div",{className:"navLateral-body-cl"},n.a.createElement("i",{className:"zmdi zmdi-case"})),n.a.createElement("div",{className:"navLateral-body-cr"},"PLATOS"),n.a.createElement("span",{className:`zmdi zmdi-chevron-left ${"platos"===e?"active":""}`})),"platos"===e&&n.a.createElement("ul",{className:"full-width menu-principal sub-menu-options"},n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("agregarplato")},n.a.createElement("div",{className:"navLateral-body-cr"},"AGREGAR PLATO"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("editarplato")},n.a.createElement("div",{className:"navLateral-body-cr"},"EDITAR PLATO"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>d("eliminarplato")},n.a.createElement("div",{className:"navLateral-body-cr"},"ELIMINAR PLATO"))))))))),n.a.createElement("section",{className:"main-content"},(()=>{switch(t){case"resumen":return n.a.createElement(E,null);case"agregarnegocio":return n.a.createElement(h,null);case"editarnegocio":return n.a.createElement(f,null);case"eliminarnegocio":return n.a.createElement(b,null);case"agregarplato":return n.a.createElement(w,null);case"editarplato":return n.a.createElement(y,null);case"eliminarplato":return n.a.createElement(C,null);default:return n.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa")}})())))};t(33);var S=()=>{const[e,a]=Object(l.useState)(null),[t,r]=Object(l.useState)(""),[c,s]=Object(l.useState)(!0),i=Object(o.p)(),m=e=>{r(e)};return n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"header-bar"},n.a.createElement("button",{onClick:()=>{s(!c)},className:"btn-hide-menu"},c?"Ocultar Men\xfa":"Mostrar Men\xfa"),n.a.createElement("div",{className:"user-info"},n.a.createElement("span",{className:"welcome-text"},"Bienvenido, Administrador"),n.a.createElement("button",{onClick:()=>{i("/home")},className:"btn-logout"},"Cerrar Sesi\xf3n"))),n.a.createElement("div",{className:"content-wrapper"},c&&n.a.createElement("section",{className:"navLateral"},n.a.createElement("div",{className:"navLateral-body"},n.a.createElement("div",{className:"navLateral-body-logo text-center tittles"},n.a.createElement("i",{className:"zmdi zmdi-close btn-menu"})," Inicio"),n.a.createElement("nav",{className:"full-width"},n.a.createElement("ul",{className:"full-width list-unstyle menu-principal"},n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>m("resumen")},n.a.createElement("div",{className:"navLateral-body-cl"},n.a.createElement("i",{className:"zmdi zmdi-view-dashboard"})),n.a.createElement("div",{className:"navLateral-body-cr"},"RESUMEN"))),n.a.createElement("li",{className:"full-width divider-menu-h"}),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width btn-subMenu",onClick:()=>(t=>{a(e===t?null:t)})("negocios")},n.a.createElement("div",{className:"navLateral-body-cl"},n.a.createElement("i",{className:"zmdi zmdi-case"})),n.a.createElement("div",{className:"navLateral-body-cr"},"REGISTRO DE NEGOCIOS"),n.a.createElement("span",{className:`zmdi zmdi-chevron-left ${"negocios"===e?"active":""}`})),"negocios"===e&&n.a.createElement("ul",{className:"full-width menu-principal sub-menu-options"},n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>m("agregarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"DOCUMENTOS DE NEGOCIOS"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>m("editarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"EDITAR NEGOCIO"))),n.a.createElement("li",{className:"full-width"},n.a.createElement("a",{href:"#!",className:"full-width",onClick:()=>m("eliminarnegocio")},n.a.createElement("div",{className:"navLateral-body-cr"},"ELIMINAR NEGOCIOS"))))))))),n.a.createElement("main",{className:"admin-main"},(()=>{switch(t){case"resumen":return n.a.createElement(E,null);case"agregarplato":return n.a.createElement(w,null);case"editarplato":return n.a.createElement(y,null);case"eliminarplato":return n.a.createElement(C,null);default:return n.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa")}})())))};var L=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/",element:n.a.createElement(o.a,{to:"/home"})}),n.a.createElement(o.b,{path:"/home",element:n.a.createElement(m,null)}),n.a.createElement(o.b,{path:"/loginregister",element:n.a.createElement(u,null)}),n.a.createElement(o.b,{path:"/menufunctions",element:n.a.createElement(O,null)}),n.a.createElement(o.b,{path:"/menuadmin",element:n.a.createElement(S,null)}))))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null))),s()}],[[16,1,2]]]);
//# sourceMappingURL=main.7b22e992.chunk.js.map