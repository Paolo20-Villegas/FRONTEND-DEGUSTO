(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(38)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r);t(23);var c=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=a;t(e),n(e),l(e),r(e),o(e)})},s=(t(24),t(8)),i=t(3);t(25);var m=()=>{const e=Object(i.p)();return l.a.createElement("div",{className:"inicio-container"},l.a.createElement("header",{className:"inicio-header"},l.a.createElement("h1",null,"De Gusto"),l.a.createElement("p",null,"\xa1Nos encargamos de hacer conocer sus negocios!")),l.a.createElement("div",{className:"inicio-banner"},l.a.createElement("h2",null,"Bienvenido a nuestra p\xe1gina web"),l.a.createElement("p",null,"\xa1Descubre c\xf3mo podemos ayudarte!"),l.a.createElement("button",{className:"inicio-button",onClick:()=>{e("/loginregister")}},"Comenzar")),l.a.createElement("section",{className:"inicio-description"},l.a.createElement("h3",null,"Sobre Nosotros"),l.a.createElement("p",null,"Nuestro sistema se encarga del registro de negocios como por ejemplo restaurantes y sus platos con el fin de hacerlo conocer por su ubicaci\xf3n y beneficiando asi a los due\xf1os de negocios. Todos los datos registrados se mostraran en nuestra aplicaci\xf3n m\xf3vil orientada para los clientes que buscan los negocios de su inter\xe9s y cercanos para ellos que usted registre donde atrav\xe9s calificaciones y rese\xf1as puede irse conociendo dentro de DeGusto incrementando su influencia en el \xe1rea de negocio que haya seleccionado. Para el caso de restaurantes nuestro sistema tiene la capacidad de coordinar reservas con los clientes.")),l.a.createElement("footer",{className:"inicio-footer"},l.a.createElement("p",null,"\xa9 2024 DeGusto. Todos los derechos reservados."),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"#!"},"Facebook"),l.a.createElement("a",{href:"#!"},"Twitter"),l.a.createElement("a",{href:"#!"},"Whatsapp"))))},d=t(39);t(26);var u=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(!0),s=Object(i.p)();Object(n.useEffect)(()=>{const e=new URLSearchParams(window.location.search).get("message");"login_error"===e?a("Correo o contrase\xf1a incorrectos."):"register_success"===e&&a("Registro exitoso. Por favor, inicia sesi\xf3n.")},[]);return l.a.createElement("main",null,l.a.createElement("div",{className:"contenedor__todo"},l.a.createElement("div",{className:"caja__trasera"},l.a.createElement("div",{className:"caja__trasera-login"},l.a.createElement("h3",null,"\xbfYa tienes una cuenta?"),l.a.createElement("p",null,"Inicia sesi\xf3n para entrar en la p\xe1gina"),l.a.createElement("button",{id:"btn__iniciar-sesion",onClick:()=>c(!0)},"Iniciar Sesi\xf3n")),l.a.createElement("div",{className:"caja__trasera-register"},l.a.createElement("h3",null,"\xbfA\xfan no tienes una cuenta?"),l.a.createElement("p",null,"Reg\xedstrate para que puedas iniciar sesi\xf3n"),l.a.createElement("button",{id:"btn__registrarse",onClick:()=>c(!1)},"Reg\xedstrarse"))),l.a.createElement("div",{className:"body::before "}),l.a.createElement("div",{className:"contenedor__login-register"},o?l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const t=e.target.username.value,n=e.target.password.value;console.log("Enviando datos:",{username:t,password:n});try{const e=await d.a.post("https://api-degusto.onrender.com/api/user/login",{userName:t,userPassword:n});console.log("Respuesta del servidor:",e.data);const c=e.data.access_token;console.log("Token:",e.data.access_token),localStorage.setItem("access_token",c);const{person_TypeId:i,userName:m}=e.data;m?3===i?(console.log("Bienvenido, administrador"),s("/menuadmin")):2===i?(console.log("Bienvenido, due\xf1o de negocio"),s("/menufunctions")):a("Tipo de usuario no reconocido."):a(e.data.message||"Usuario o contrase\xf1a incorrectos")}catch(o){var l,r;console.error("Error de login:",(null===(l=o.response)||void 0===l?void 0:null===(r=l.data)||void 0===r?void 0:r.message)||"Error desconocido"),a("Error en el inicio de sesi\xf3n. Por favor, int\xe9ntalo de nuevo.")}},className:"formulario__login"},l.a.createElement("h2",null,"Iniciar Sesi\xf3n"),l.a.createElement("input",{type:"text",name:"username",placeholder:"Nombre de Usuario",required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),l.a.createElement("button",{type:"submit"},"Entrar"),l.a.createElement("div",{id:"login-message"},e)):l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const a=e.target.name.value,t=e.target.email.value,n=e.target.phone.value,l=e.target.username.value,o=e.target.password.value;console.log("Enviando datos:",{name:a,email:t,phone:n,username:l,password:o});try{const e=await d.a.post("https://api-degusto.onrender.com/api/user/register",{personTypeId:2,name:a,email:t,phoneNumber:n,userName:l,password:o,createDate:(new Date).toISOString()});console.log("Respuesta del servidor:",e.data),r("Env\xedo exitoso. Espere hasta que se confirme su registro."),c(!0)}catch(m){var s,i;console.error("Error en el registro:",(null===(s=m.response)||void 0===s?void 0:null===(i=s.data)||void 0===i?void 0:i.message)||"Error desconocido"),r("Error en el registro. Por favor, revisa los datos.")}},className:"formulario__register"},l.a.createElement("h2",null,"Reg\xedstrarse"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Nombre completo",required:!0}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Correo Electr\xf3nico",required:!0}),l.a.createElement("input",{type:"text",name:"phone",placeholder:"N\xfamero de celular",required:!0}),l.a.createElement("input",{type:"text",name:"username",placeholder:"Usuario",required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),l.a.createElement("button",{type:"submit"},"Reg\xedstrarse"),l.a.createElement("div",{id:"register-message"},t)))))};t(31);var E=()=>l.a.createElement("div",null,"Bienvenido al Resumen"),p=t(12);t(32);const g=["places"],v={width:"100%",height:"400px"},h={lat:-34.397,lng:150.644};var N=()=>{const[e,a]=Object(n.useState)({name:"",telefono:"",area:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),[t,r]=Object(n.useState)(null),[o,c]=Object(n.useState)(null),s=t=>{a({...e,[t.target.id]:t.target.value})},{isLoaded:i}=Object(p.c)({googleMapsApiKey:"AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48",libraries:g});return i?l.a.createElement("section",{className:"full-width header-well"},l.a.createElement("div",{className:"full-width header-well-icon"},l.a.createElement("i",{className:"zmdi zmdi-balance"})),l.a.createElement("div",{className:"mdl-grid"},l.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},l.a.createElement("div",{className:"full-width panel mdl-shadow--2dp"},l.a.createElement("div",{className:"full-width panel-title bg-primary text-center tittles"},"Nuevo Negocio"),l.a.createElement("div",{className:"full-width panel-content"},l.a.createElement("form",null,l.a.createElement("div",{className:"mdl-grid"},l.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},l.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"name",value:e.name,onChange:s,placeholder:"Nombre del negocio"})),l.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},l.a.createElement("input",{className:"mdl-textfield__input",type:"tel",id:"telefono",value:e.telefono,onChange:s,placeholder:"N\xfamero del negocio",pattern:"[0-9]*",inputMode:"numeric"})),l.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},l.a.createElement("select",{className:"mdl-textfield__input",id:"area",value:e.area,onChange:s},l.a.createElement("option",{value:""},"Selecciona un \xe1rea"),l.a.createElement("option",{value:"1"},"Restaurantes"),l.a.createElement("option",{value:"2"},"Tiendas"),l.a.createElement("option",{value:"3"},"Cafeter\xedas"),l.a.createElement("option",{value:"4"},"Servicios"),l.a.createElement("option",{value:"5"},"Otros"))),l.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},l.a.createElement("div",{className:"map-container"},l.a.createElement(p.a,{mapContainerStyle:v,zoom:8,center:h,onClick:e=>{const t=e.latLng.lat(),n=e.latLng.lng();r({lat:t,lng:n}),fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${t},${n}&key=AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48`).then(e=>e.json()).then(e=>{var l;const r=(null===(l=e.results[0])||void 0===l?void 0:l.formatted_address)||"Direcci\xf3n no encontrada";a(e=>({...e,direccion:r,latitud:t,longitud:n}))})}},t&&l.a.createElement(p.b,{position:{lat:t.lat,lng:t.lng}})))),l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},l.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"direccion",value:e.direccion,readOnly:!0})),l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},l.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"latitud",value:e.latitud,readOnly:!0})),l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},l.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"longitud",value:e.longitud,readOnly:!0})),l.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},l.a.createElement("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},o?l.a.createElement("img",{src:o,alt:"Previsualizaci\xf3n de imagen",style:{maxWidth:"100%",maxHeight:"100%"}}):l.a.createElement("div",null,"Imagen no cargada")),l.a.createElement("input",{type:"file",accept:"image/*",onChange:async e=>{const t=e.target.files[0],n=new FormData;n.append("file",t),n.append("upload_preset","logo_preset");try{const e=await fetch("https://api.cloudinary.com/v1_1/derufjp1n/image/upload",{method:"POST",body:n}),t=await e.json();c(t.secure_url),a(e=>({...e,imageUrl:t.secure_url}))}catch(l){console.error("Error al cargar la imagen:",l)}}})),l.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},l.a.createElement("button",{type:"button",className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",onClick:async()=>{const t={name:e.name,telefono:e.telefono,direccion:e.direccion,latitud:e.latitud,longitud:e.longitud,imageUrl:e.imageUrl,business_AreaId:e.area};try{(await fetch("/api/business",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(alert("Negocio agregado exitosamente"),a({name:"",telefono:"",area:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),c(null),r(null)):alert("Error al agregar el negocio")}catch(n){console.error("Error al agregar negocio:",n)}}},"Agregar Negocio"))))))))):l.a.createElement("div",null,"Loading...")};var b=()=>l.a.createElement("div",null,"Esta es la secci\xf3n para editar Negocios");var f=()=>l.a.createElement("div",null,"Esta es la secci\xf3n para eliminar Negocios");var y=()=>l.a.createElement("div",null,"Esta es la secci\xf3n de para agregar platos");var w=()=>l.a.createElement("div",null,"Esta es la secci\xf3n de para editar platos");var C=()=>l.a.createElement("div",null,"Esta es la secci\xf3n de para eliminar platos");var S=()=>{const[e,a]=Object(n.useState)(""),t=Object(i.p)(),r=e=>{a(e)};return l.a.createElement("div",{className:"owner-container"},l.a.createElement("nav",{className:"owner-menu"},l.a.createElement("h3",{className:"owner-title"},"Panel de Funciones"),l.a.createElement("ul",{className:"owner-list"},l.a.createElement("li",{className:"resumen"===e?"active":"",onClick:()=>r("resumen")},"Resumen"),l.a.createElement("li",{className:"agregarnegocio"===e?"active":"",onClick:()=>r("agregarnegocio")},"Agregar Negocio"),l.a.createElement("li",{className:"editarnegocio"===e?"active":"",onClick:()=>r("editarnegocio")},"Editar Negocio"),l.a.createElement("li",{className:"eliminarnegocio"===e?"active":"",onClick:()=>r("eliminarnegocio")},"Eliminar Negocio"),l.a.createElement("li",{className:"agregarplato"===e?"active":"",onClick:()=>r("agregarplato")},"Agregar Plato"),l.a.createElement("li",{className:"editarplato"===e?"active":"",onClick:()=>r("editarplato")},"Editar Plato"),l.a.createElement("li",{className:"eliminarplato"===e?"active":"",onClick:()=>r("eliminarplato")},"Eliminar Plato"))),l.a.createElement("div",{className:"owner-main"},l.a.createElement("header",{className:"owner-header"},l.a.createElement("span",null,"Bienvenido, Administrador"),l.a.createElement("button",{className:"btn-logout",onClick:async()=>{try{const a=await d.a.post("https://api-degusto.onrender.com/api/user/logout");200===a.status?(console.log("Sesi\xf3n cerrandose"),t("/loginregister")):(console.error("Error al cerrar sesi\xf3n:",a.data),alert("Hubo un problema al cerrar sesi\xf3n."))}catch(e){console.error("Error de red al cerrar sesi\xf3n:",e),alert("Error de red. Por favor, intenta nuevamente.")}}},"Cerrar Sesi\xf3n")),l.a.createElement("div",{className:"content"},(()=>{switch(e){case"resumen":return l.a.createElement(E,null);case"agregarnegocio":return l.a.createElement(N,null);case"editarnegocio":return l.a.createElement(b,null);case"eliminarnegocio":return l.a.createElement(f,null);case"agregarplato":return l.a.createElement(y,null);case"editarplato":return l.a.createElement(w,null);case"eliminarplato":return l.a.createElement(C,null);default:return l.a.createElement("div",{className:"dashboard"},l.a.createElement("h2",null,"\xa1Bienvenido al Panel de Funciones!"),l.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa para empezar."))}})())))};t(34),t(35);var _=()=>{const[e,a]=Object(n.useState)([{id:1,nombre:"Cafeter\xeda El Buen Caf\xe9",categoria:"Cafeter\xeda",direccion:"Av. Siempre Viva 123",imagen:"https://via.placeholder.com/150",validado:!1},{id:2,nombre:"Restaurante La Parrilla",categoria:"Restaurante",direccion:"Calle Falsa 456",imagen:"https://via.placeholder.com/150",validado:!0},{id:3,nombre:"Panader\xeda El Trigo",categoria:"Panader\xeda",direccion:"Plaza Central 789",imagen:"https://via.placeholder.com/150",validado:!1}]);return l.a.createElement("div",{className:"vista-negocio-container"},l.a.createElement("h2",null,"Monitoreo de Negocios"),l.a.createElement("table",{className:"negocios-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Categor\xeda"),l.a.createElement("th",null,"Direcci\xf3n"),l.a.createElement("th",null,"Imagen"),l.a.createElement("th",null,"Estado"),l.a.createElement("th",null,"Acciones"))),l.a.createElement("tbody",null,e.map(t=>l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.nombre),l.a.createElement("td",null,t.categoria),l.a.createElement("td",null,t.direccion),l.a.createElement("td",null,l.a.createElement("img",{src:t.imagen,alt:t.nombre,className:"negocio-imagen"})),l.a.createElement("td",null,t.validado?l.a.createElement("span",{className:"estado-validado"},"Validado"):l.a.createElement("span",{className:"estado-pendiente"},"Pendiente")),l.a.createElement("td",null,!t.validado&&l.a.createElement("button",{className:"btn-validar",onClick:()=>(t=>{const n=e.map(e=>e.id===t?{...e,validado:!0}:e);a(n)})(t.id)},"Validar")))))))};t(36);var k=()=>{const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!0),[o,c]=Object(n.useState)(null);Object(n.useEffect)(()=>{(async()=>{try{const t=(await d.a.get("https://api-degusto.onrender.com/api/user",{})).data.filter(e=>"Owner"===e.personTypeName||"Customer"===e.personTypeName);a(t)}catch(e){console.error("Error al obtener los usuarios:",e),c("No se pudieron cargar los usuarios.")}finally{r(!1)}})()},[]);const s=async(e,t,n)=>{try{await d.a.put(`https://api-degusto.onrender.com/api/user/${e}`,{personTypeId:n,userStatus:t},{}),a(a=>a.map(a=>a.userId===e?{...a,userStatus:t}:a))}catch(l){console.error("Error al actualizar el estado del usuario:",l)}};return t?l.a.createElement("div",null,"Cargando usuarios..."):o?l.a.createElement("div",null,o):l.a.createElement("div",{className:"user-table-container"},l.a.createElement("h2",null,"Lista de Usuarios"),l.a.createElement("table",{className:"user-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nro"),l.a.createElement("th",null,"Usuario"),l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Tel\xe9fono"),l.a.createElement("th",null,"Tipo"),l.a.createElement("th",null,"Fecha de creaci\xf3n"),l.a.createElement("th",null,"Estado"),l.a.createElement("th",null,"Acciones"))),l.a.createElement("tbody",null,e.map((e,t)=>l.a.createElement("tr",{key:e.userId},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.userName),l.a.createElement("td",null,e.PersonName),l.a.createElement("td",null,e.personEmail),l.a.createElement("td",null,e.personPhoneNumber),l.a.createElement("td",null,"Owner"===e.personTypeName?"Due\xf1o":"Cliente"),l.a.createElement("td",null,new Date(e.userCreatedAt).toLocaleString()),l.a.createElement("td",null,l.a.createElement("span",{className:`estado-${1===e.userStatus?"validado":"pendiente"}`},1===e.userStatus?"Validado":"Pendiente")),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-validar",onClick:()=>s(e.userId,1,"Owner"===e.personTypeName?1:2)},"Validar"),l.a.createElement("button",{className:"btn-denegar",onClick:()=>s(e.userId,0,"Owner"===e.personTypeName?1:2)},"Denegar"),l.a.createElement("button",{className:"btn-eliminar",onClick:()=>(async e=>{try{!0===(await d.a.delete(`https://api-degusto.onrender.com/api/user/${e}`,{})).data&&a(a=>a.filter(a=>a.userId!==e))}catch(t){console.error("Error al eliminar el usuario:",t)}})(e.userId)},"Eliminar")))))))};t(37);var O=()=>{const[e,a]=Object(n.useState)(null);return l.a.createElement("div",{className:"vista-resena"},l.a.createElement("h2",null,"Monitoreo de Rese\xf1as"),l.a.createElement("div",{className:"contenedor-negocios"},l.a.createElement("h3",null,"Negocios Disponibles"),l.a.createElement("ul",{className:"lista-negocios"},[{id:1,nombre:"Restaurante Los Sabores","rese\xf1as":[]},{id:2,nombre:"Cafeter\xeda El Aroma","rese\xf1as":[{id:1,usuario:"Juan P\xe9rez",contenido:"\xa1Excelente servicio y caf\xe9!",fecha:"2024-11-01"},{id:2,usuario:"Ana L\xf3pez",contenido:"El caf\xe9 estaba muy fr\xedo, mala experiencia.",fecha:"2024-11-02"}]},{id:3,nombre:"Pizzer\xeda La Familia","rese\xf1as":[{id:3,usuario:"Carlos G\xf3mez",contenido:"La pizza estaba deliciosa, volver\xe9 pronto.",fecha:"2024-11-05"}]}].map(t=>l.a.createElement("li",{key:t.id,onClick:()=>(e=>{a(e)})(t),className:(null===e||void 0===e?void 0:e.id)===t.id?"negocio-activo":""},t.nombre)))),l.a.createElement("div",{className:"contenedor-rese\xf1as"},e?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Rese\xf1as de ",e.nombre),e.rese\u00f1as.length>0?l.a.createElement("table",{className:"tabla-rese\xf1as"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Usuario"),l.a.createElement("th",null,"Rese\xf1a"),l.a.createElement("th",null,"Fecha"),l.a.createElement("th",null,"Acciones"))),l.a.createElement("tbody",null,e.rese\u00f1as.map(t=>l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.usuario),l.a.createElement("td",null,t.contenido),l.a.createElement("td",null,t.fecha),l.a.createElement("td",null,l.a.createElement("button",{onClick:()=>(t=>{const n=e.rese\u00f1as.filter(e=>e.id!==t);a({...e,"rese\xf1as":n})})(t.id)},"Eliminar")))))):l.a.createElement("p",null,"No hay rese\xf1as disponibles para este negocio.")):l.a.createElement("p",null,"Selecciona un negocio para ver sus rese\xf1as.")))};var P=()=>{const[e,a]=Object(n.useState)(""),t=Object(i.p)(),r=e=>{a(e)};return l.a.createElement("div",{className:"admin-container"},l.a.createElement("nav",{className:"admin-menu"},l.a.createElement("h3",{className:"menu-title"},"Panel de Administraci\xf3n"),l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",{className:"vistausuario"===e?"active":"",onClick:()=>r("vistausuario")},"Validar Usuarios"),l.a.createElement("li",{className:"vistanegocio"===e?"active":"",onClick:()=>r("vistanegocio")},"Monitorear Negocios"),l.a.createElement("li",{className:"vistaresena"===e?"active":"",onClick:()=>r("vistaresena")},"Monitorear Rese\xf1as"))),l.a.createElement("div",{className:"admin-main"},l.a.createElement("header",{className:"admin-header"},l.a.createElement("span",null,"Bienvenido, Administrador"),l.a.createElement("button",{className:"btn-logout",onClick:async()=>{try{const a=await d.a.post("https://api-degusto.onrender.com/api/user/logout");200===a.status?(console.log("Sesi\xf3n cerrandose"),t("/loginregister")):(console.error("Error al cerrar sesi\xf3n:",a.data),alert("Hubo un problema al cerrar sesi\xf3n."))}catch(e){console.error("Error de red al cerrar sesi\xf3n:",e),alert("Error de red. Por favor, intenta nuevamente.")}}},"Cerrar Sesi\xf3n")),l.a.createElement("div",{className:"content"},(()=>{switch(e){case"vistausuario":return l.a.createElement(k,null);case"vistanegocio":return l.a.createElement(_,null);case"vistaresena":return l.a.createElement(O,null);default:return l.a.createElement("div",{className:"dashboard"},l.a.createElement("h2",null,"\xa1Bienvenido al Panel de Administraci\xf3n!"),l.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa para empezar."))}})())))};var j=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",element:l.a.createElement(i.a,{to:"/home"})}),l.a.createElement(i.b,{path:"/home",element:l.a.createElement(m,null)}),l.a.createElement(i.b,{path:"/loginregister",element:l.a.createElement(u,null)}),l.a.createElement(i.b,{path:"/menufunctions",element:l.a.createElement(S,null)}),l.a.createElement(i.b,{path:"/menuadmin",element:l.a.createElement(P,null)}))))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null))),c()}],[[17,1,2]]]);
//# sourceMappingURL=main.dbecfd97.chunk.js.map