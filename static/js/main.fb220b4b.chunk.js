(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(37)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(16),l=t.n(r);t(23);var o=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then(a=>{let{getCLS:t,getFID:n,getFCP:s,getLCP:r,getTTFB:l}=a;t(e),n(e),s(e),r(e),l(e)})},i=(t(24),t(8)),c=t(3);t(25);var u=()=>{const e=Object(c.p)();return s.a.createElement("div",{className:"inicio-container"},s.a.createElement("header",{className:"inicio-header"},s.a.createElement("h1",null,"De Gusto"),s.a.createElement("p",null,"\xa1Nos encargamos de hacer conocer sus negocios!")),s.a.createElement("div",{className:"inicio-banner"},s.a.createElement("h2",null,"Bienvenido a nuestra p\xe1gina web"),s.a.createElement("p",null,"\xa1Descubre c\xf3mo podemos ayudarte!"),s.a.createElement("button",{className:"inicio-button",onClick:()=>{e("/loginregister")}},"Comenzar")),s.a.createElement("section",{className:"inicio-description"},s.a.createElement("h3",null,"Sobre Nosotros"),s.a.createElement("p",null,"Nuestro sistema se encarga del registro de negocios como por ejemplo restaurantes y sus platos con el fin de hacerlo conocer por su ubicaci\xf3n y beneficiando asi a los due\xf1os de negocios. Todos los datos registrados se mostraran en nuestra aplicaci\xf3n m\xf3vil orientada para los clientes que buscan los negocios de su inter\xe9s y cercanos para ellos que usted registre donde atrav\xe9s calificaciones y rese\xf1as puede irse conociendo dentro de DeGusto incrementando su influencia en el \xe1rea de negocio que haya seleccionado. Para el caso de restaurantes nuestro sistema tiene la capacidad de coordinar reservas con los clientes.")),s.a.createElement("footer",{className:"inicio-footer"},s.a.createElement("p",null,"\xa9 2024 DeGusto. Todos los derechos reservados."),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"#!"},"Facebook"),s.a.createElement("a",{href:"#!"},"Twitter"),s.a.createElement("a",{href:"#!"},"Whatsapp"))))},m=t(38);t(26);var d=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[l,o]=Object(n.useState)(!0),i=Object(c.p)();Object(n.useEffect)(()=>{const e=new URLSearchParams(window.location.search).get("message");"login_error"===e?a("Correo o contrase\xf1a incorrectos."):"register_success"===e&&a("Registro exitoso. Por favor, inicia sesi\xf3n.")},[]);return s.a.createElement("main",null,s.a.createElement("div",{className:"contenedor__todo"},s.a.createElement("div",{className:"caja__trasera"},s.a.createElement("div",{className:"caja__trasera-login"},s.a.createElement("h3",null,"\xbfYa tienes una cuenta?"),s.a.createElement("p",null,"Inicia sesi\xf3n para entrar en la p\xe1gina"),s.a.createElement("button",{id:"btn__iniciar-sesion",onClick:()=>o(!0)},"Iniciar Sesi\xf3n")),s.a.createElement("div",{className:"caja__trasera-register"},s.a.createElement("h3",null,"\xbfA\xfan no tienes una cuenta?"),s.a.createElement("p",null,"Reg\xedstrate para que puedas iniciar sesi\xf3n"),s.a.createElement("button",{id:"btn__registrarse",onClick:()=>o(!1)},"Reg\xedstrarse"))),s.a.createElement("div",{className:"body::before "}),s.a.createElement("div",{className:"contenedor__login-register"},l?s.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const t=e.target.username.value,n=e.target.password.value;console.log("Enviando datos:",{username:t,password:n});try{const e=await m.a.post("https://api-degusto.onrender.com/api/user/login",{userName:t,userPassword:n});console.log("Respuesta del servidor:",e.data),localStorage.setItem("userId",e.data.id),console.log("Usuario logueado con \xe9xito:",e.data.id);const{person_TypeId:o,userName:c,userStatus:u,personEmail:d}=e.data;c?3===o?(console.log("Bienvenido, administrador"),i("/menuadmin")):1===o?1===u?(console.log("Bienvenido, due\xf1o de negocio"),i("/menufunctions")):a(0===u?"Tu cuenta a\xfan no ha sido aprobada. Por favor, espera la confirmaci\xf3n.":"Estado de cuenta no reconocido. Contacta con el soporte."):a("Tipo de usuario no reconocido."):a(e.data.message||"Usuario o contrase\xf1a incorrectos")}catch(l){var s,r;console.error("Error de login:",(null===(s=l.response)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:r.message)||"Error desconocido"),a("Error en el inicio de sesi\xf3n. Por favor, int\xe9ntalo de nuevo.")}},className:"formulario__login"},s.a.createElement("h2",null,"Iniciar Sesi\xf3n"),s.a.createElement("input",{type:"text",name:"username",placeholder:"Nombre de Usuario",required:!0}),s.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),s.a.createElement("button",{type:"submit"},"Entrar"),s.a.createElement("div",{id:"login-message"},e)):s.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const a=e.target.name.value,t=e.target.email.value,n=e.target.phone.value,s=e.target.username.value,l=e.target.password.value;console.log("Enviando datos:",{name:a,email:t,phone:n,username:s,password:l});try{const e=await m.a.post("https://api-degusto.onrender.com/api/user/register",{personTypeId:1,name:a,email:t,phoneNumber:n,userName:s,password:l,createDate:(new Date).toISOString()});console.log("Respuesta del servidor:",e.data),r("Env\xedo exitoso. Espere hasta que se confirme su registro."),o(!0)}catch(u){var i,c;console.error("Error en el registro:",(null===(i=u.response)||void 0===i?void 0:null===(c=i.data)||void 0===c?void 0:c.message)||"Error desconocido"),r("Error en el registro. Por favor, revisa los datos.")}},className:"formulario__register"},s.a.createElement("h2",null,"Reg\xedstrarse"),s.a.createElement("input",{type:"text",name:"name",placeholder:"Nombre completo",required:!0}),s.a.createElement("input",{type:"email",name:"email",placeholder:"Correo Electr\xf3nico",required:!0}),s.a.createElement("input",{type:"text",name:"phone",placeholder:"N\xfamero de celular",required:!0}),s.a.createElement("input",{type:"text",name:"username",placeholder:"Usuario",required:!0}),s.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",required:!0}),s.a.createElement("button",{type:"submit"},"Reg\xedstrarse"),s.a.createElement("div",{id:"register-message"},t)))))},p=(t(31),t(13));t(32);const E=["places"],b={width:"100%",height:"400px"},g={lat:-8.110299569525214,lng:-79.02702088064609};var h=()=>{const[e,a]=Object(n.useState)({name:"",telefono:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),[t,r]=Object(n.useState)(null),[l,o]=Object(n.useState)(null),i=t=>{a({...e,[t.target.id]:t.target.value})},{isLoaded:c}=Object(p.c)({googleMapsApiKey:"AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48",libraries:E});return c?s.a.createElement("section",{className:"full-width header-well"},s.a.createElement("div",{className:"full-width header-well-icon"},s.a.createElement("i",{className:"zmdi zmdi-balance"})),s.a.createElement("div",{className:"mdl-grid"},s.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},s.a.createElement("div",{className:"full-width panel mdl-shadow--2dp"},s.a.createElement("div",{className:"full-width panel-title bg-primary text-center tittles"},"Nuevo Negocio"),s.a.createElement("div",{className:"full-width panel-content"},s.a.createElement("form",null,s.a.createElement("div",{className:"mdl-grid"},s.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},s.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"name",value:e.name,onChange:i,placeholder:"Nombre del negocio",required:!0})),s.a.createElement("div",{className:"mdl-cell mdl-cell--6-col"},s.a.createElement("input",{className:"mdl-textfield__input",type:"tel",id:"telefono",value:e.telefono,onChange:i,placeholder:"N\xfamero del negocio",pattern:"[0-9]*",inputMode:"numeric",required:!0})),s.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},s.a.createElement("div",{className:"map-container"},s.a.createElement(p.a,{mapContainerStyle:b,zoom:8,center:g,onClick:e=>{const t=e.latLng.lat(),n=e.latLng.lng();r({lat:t,lng:n}),fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${t},${n}&key=AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48`).then(e=>e.json()).then(e=>{var s;const r=(null===(s=e.results[0])||void 0===s?void 0:s.formatted_address)||"Direcci\xf3n no encontrada";a(e=>({...e,direccion:r,latitud:t,longitud:n}))})}},t&&s.a.createElement(p.b,{position:{lat:t.lat,lng:t.lng}})))),s.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},s.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"direccion",value:e.direccion,readOnly:!0,required:!0})),s.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},s.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"latitud",value:e.latitud,readOnly:!0,required:!0})),s.a.createElement("div",{className:"mdl-cell mdl-cell--4-col"},s.a.createElement("input",{className:"mdl-textfield__input",type:"text",id:"longitud",value:e.longitud,readOnly:!0,required:!0})),s.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},s.a.createElement("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}},l?s.a.createElement("img",{src:l,alt:"Previsualizaci\xf3n de imagen",style:{maxWidth:"100%",maxHeight:"100%"}}):s.a.createElement("div",null,"Imagen no cargada")),s.a.createElement("input",{type:"file",accept:"image/*",onChange:async e=>{const t=e.target.files[0],n=new FormData;n.append("file",t),n.append("upload_preset","logo_preset");try{const e=await fetch("https://api.cloudinary.com/v1_1/derufjp1n/image/upload",{method:"POST",body:n}),t=await e.json();o(t.secure_url),a(e=>({...e,imageUrl:t.secure_url}))}catch(s){console.error("Error al cargar la imagen:",s)}}})),s.a.createElement("div",{className:"mdl-cell mdl-cell--12-col"},s.a.createElement("button",{type:"button",className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",onClick:async()=>{const t={businessName:e.name,businessPhoneNumber:e.telefono,businessAddress:e.direccion,businessLatitude:parseFloat(e.latitud),businessLongitude:parseFloat(e.longitud),businessLogo:e.imageUrl||null,businessCategorization:1,businessStatus:1,business_AreaId:1,business_UserId:10};try{const e=await m.a.post("https://api-degusto.onrender.com/api/business",t,{headers:{"Content-Type":"application/json"}});200===e.status||201===e.status?(alert("Solicitud de creaci\xf3n de negocio registrada exitosamente"),a({name:"",telefono:"",direccion:"",latitud:"",longitud:"",imageUrl:""}),o(null),r(null)):alert("Error al agregar el negocio")}catch(n){console.error("Error al agregar negocio:",n),alert("Ocurri\xf3 un error al agregar el negocio")}}},"Agregar Negocio"))))))))):s.a.createElement("div",null,"Loading...")};t(34);var v=()=>{const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(null),[l,o]=Object(n.useState)({businessName:"",businessAddress:"",businessPhoneNumber:""});Object(n.useEffect)(()=>{(async()=>{const e=[];let t=1,n=!0;try{for(;n;){const a=await fetch(`https://api-degusto.onrender.com/api/business/${t}`);if(a.ok){const n=await a.json();10===n.business_UserId&&2===n.businessStatus&&e.push({id:e.length+1,businessId:n.businessId,businessName:n.businessName,businessAddress:n.businessAddress,businessPhoneNumber:n.businessPhoneNumber,businessStatus:n.businessStatus,businessLatitude:n.businessLatitude||0,businessLongitude:n.businessLongitude||0,businessCategorization:n.businessCategorization||1,business_AreaId:n.business_AreaId||1,business_UserId:n.business_UserId}),t++}else n=!1}a(e)}catch(s){console.error("Error al obtener negocios:",s)}})()},[]);const i=e=>{const{name:a,value:t}=e.target;o({...l,[a]:t})};return s.a.createElement("div",{className:"negocio-table-container"},s.a.createElement("h2",null,"Lista de Negocios"),s.a.createElement("table",{className:"negocio-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Nombre Negocio"),s.a.createElement("th",null,"Direcci\xf3n"),s.a.createElement("th",null,"N\xfamero"),s.a.createElement("th",null,"Acciones"))),s.a.createElement("tbody",null,e.map(n=>s.a.createElement("tr",{key:n.businessId},s.a.createElement("td",null,n.id),s.a.createElement("td",null,t===n.businessId?s.a.createElement("input",{type:"text",name:"businessName",value:l.businessName,onChange:i}):n.businessName),s.a.createElement("td",null,t===n.businessId?s.a.createElement("input",{type:"text",name:"businessAddress",value:l.businessAddress,onChange:i}):n.businessAddress),s.a.createElement("td",null,t===n.businessId?s.a.createElement("input",{type:"text",name:"businessPhoneNumber",value:l.businessPhoneNumber,onChange:i}):n.businessPhoneNumber),s.a.createElement("td",null,t===n.businessId?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn-guardar",onClick:()=>(async t=>{try{var n,s;const i={businessName:l.businessName,businessAddress:l.businessAddress,businessPhoneNumber:l.businessPhoneNumber,businessStatus:1,businessLatitude:null===(n=e.find(e=>e.businessId===t))||void 0===n?void 0:n.businessLatitude,businessLongitude:null===(s=e.find(e=>e.businessId===t))||void 0===s?void 0:s.businessLongitude,businessCategorization:1,business_AreaId:1,business_UserId:10};await m.a.put(`https://api-degusto.onrender.com/api/business/${t}`,i),a(e=>e.map(e=>e.businessId===t?{...e,...i}:e)),r(null)}catch(o){console.error("Error al actualizar el negocio:",o)}})(n.businessId)},"Guardar"),s.a.createElement("button",{className:"btn-cancelar",onClick:()=>r(null)},"Cancelar")):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn-editar",onClick:()=>(e=>{r(e.businessId),o({businessName:e.businessName,businessAddress:e.businessAddress,businessPhoneNumber:e.businessPhoneNumber})})(n)},"Editar"),s.a.createElement("button",{className:"btn-eliminar",onClick:()=>(async e=>{try{await m.a.delete(`https://api-degusto.onrender.com/api/business/${e}`),a(a=>a.filter(a=>a.businessId!==e))}catch(t){console.error("Error al eliminar el negocio:",t)}})(n.businessId)},"Eliminar"))))))))};var N=()=>{const[e,a]=Object(n.useState)(""),t=Object(c.p)();return s.a.createElement("div",{className:"owner-container"},s.a.createElement("nav",{className:"owner-menu"},s.a.createElement("h3",{className:"owner-title"},"Panel de Funciones"),s.a.createElement("ul",{className:"owner-list"},[{key:"agregarnegocio",label:"Agregar Negocio"},{key:"editarnegocio",label:"Tus Negocios"}].map(t=>{let{key:n,label:r}=t;return s.a.createElement("li",{key:n,className:e===n?"active":"",onClick:()=>(e=>{a(e)})(n)},r)}))),s.a.createElement("div",{className:"owner-main"},s.a.createElement("header",{className:"owner-header"},s.a.createElement("span",null,"Bienvenido, Due\xf1o de Negocio!"),s.a.createElement("button",{className:"btn-logout",onClick:async()=>{try{const a=await m.a.post("https://api-degusto.onrender.com/api/user/logout");200===a.status?(console.log("Sesi\xf3n cerrada"),t("/loginregister")):(console.error("Error al cerrar sesi\xf3n:",a.data),alert("Hubo un problema al cerrar sesi\xf3n."))}catch(e){console.error("Error de red al cerrar sesi\xf3n:",e),alert("Error de red. Por favor, intenta nuevamente.")}}},"Cerrar Sesi\xf3n")),s.a.createElement("div",{className:"content"},(()=>{switch(e){case"agregarnegocio":return s.a.createElement(h,null);case"editarnegocio":return s.a.createElement(v,null);default:return s.a.createElement("div",{className:"dashboard"},s.a.createElement("h2",null,"\xa1Bienvenido al Panel de Funciones!"),s.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa para empezar."))}})())))};t(35),t(36);var f=()=>{const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!0),[l,o]=Object(n.useState)(null);Object(n.useEffect)(()=>{(async()=>{try{const t=(await m.a.get("https://api-degusto.onrender.com/api/user")).data.filter(e=>"Owner"===e.personTypeName||"Customer"===e.personTypeName);a(t)}catch(e){console.error("Error al obtener los usuarios:",e),o("No se pudieron cargar los usuarios.")}finally{r(!1)}})()},[]);const i=async(t,n)=>{try{if("Eliminado"===n)await m.a.delete(`https://api-degusto.onrender.com/api/user/${t}`),a(e=>e.filter(e=>e.userId!==t));else{let s=3;const r=e.find(e=>e.userId===t);r&&("Owner"===r.personTypeName?s=1:"Customer"===r.personTypeName&&(s=2)),await m.a.put(`https://api-degusto.onrender.com/api/user/${t}`,{userStatus:n,personTypeId:s}),a(e=>e.map(e=>e.userId===t?{...e,userStatus:n,personTypeId:s}:e))}}catch(s){console.error("Error al actualizar el estado del usuario:",s)}};return t?s.a.createElement("div",null,"Cargando usuarios..."):l?s.a.createElement("div",null,l):s.a.createElement("div",{className:"user-table-container"},s.a.createElement("h2",null,"Lista de Usuarios"),s.a.createElement("table",{className:"user-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Nro"),s.a.createElement("th",null,"Usuario"),s.a.createElement("th",null,"Nombre"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Tel\xe9fono"),s.a.createElement("th",null,"Tipo"),s.a.createElement("th",null,"Fecha de creaci\xf3n"),s.a.createElement("th",null,"Estado"),s.a.createElement("th",null,"Acciones"))),s.a.createElement("tbody",null,e.map((e,a)=>s.a.createElement("tr",{key:e.userId},s.a.createElement("td",null,a+1),s.a.createElement("td",null,e.userName),s.a.createElement("td",null,e.PersonName),s.a.createElement("td",null,e.personEmail),s.a.createElement("td",null,e.personPhoneNumber),s.a.createElement("td",null,"Owner"===e.personTypeName?"Due\xf1o":"Customer"===e.personTypeName?"Cliente":"Otro"),s.a.createElement("td",null,new Date(e.userCreatedAt).toLocaleString()),s.a.createElement("td",null,s.a.createElement("span",{className:`estado-${1===e.userStatus?"validado":0===e.userStatus?"pendiente":"eliminado"}`},1===e.userStatus?"Validado":0===e.userStatus?"Pendiente":"Eliminado")),s.a.createElement("td",null,"Eliminado"!==e.userStatus&&s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn-validar",onClick:()=>i(e.userId,1)},"Validar"),s.a.createElement("button",{className:"btn-denegar",onClick:()=>i(e.userId,0)},"Denegar")),s.a.createElement("button",{className:"btn-eliminar",onClick:()=>i(e.userId,"Eliminado")},"Eliminar")))))))};var y=()=>{const[e,a]=Object(n.useState)(""),t=Object(c.p)();return s.a.createElement("div",{className:"admin-container"},s.a.createElement("nav",{className:"admin-menu"},s.a.createElement("h3",{className:"menu-title"},"Panel de Administraci\xf3n"),s.a.createElement("ul",{className:"menu-list"},s.a.createElement("li",{className:"vistausuario"===e?"active":"",onClick:()=>(e=>{a(e)})("vistausuario")},"Validar Usuarios"))),s.a.createElement("div",{className:"admin-main"},s.a.createElement("header",{className:"admin-header"},s.a.createElement("span",null,"Bienvenido, Administrador"),s.a.createElement("button",{className:"btn-logout",onClick:async()=>{try{const a=await m.a.post("https://api-degusto.onrender.com/api/user/logout");200===a.status?(console.log("Sesi\xf3n cerrandose"),t("/loginregister")):(console.error("Error al cerrar sesi\xf3n:",a.data),alert("Hubo un problema al cerrar sesi\xf3n."))}catch(e){console.error("Error de red al cerrar sesi\xf3n:",e),alert("Error de red. Por favor, intenta nuevamente.")}}},"Cerrar Sesi\xf3n")),s.a.createElement("div",{className:"content"},(()=>{switch(e){case"vistausuario":return s.a.createElement(f,null);default:return s.a.createElement("div",{className:"dashboard"},s.a.createElement("h2",null,"\xa1Bienvenido al Panel de Administraci\xf3n!"),s.a.createElement("p",null,"Selecciona una opci\xf3n del men\xfa para empezar."))}})())))};var w=function(){return s.a.createElement(i.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(c.d,null,s.a.createElement(c.b,{path:"/",element:s.a.createElement(c.a,{to:"/home"})}),s.a.createElement(c.b,{path:"/home",element:s.a.createElement(u,null)}),s.a.createElement(c.b,{path:"/loginregister",element:s.a.createElement(d,null)}),s.a.createElement(c.b,{path:"/menufunctions",element:s.a.createElement(N,null)}),s.a.createElement(c.b,{path:"/menuadmin",element:s.a.createElement(y,null)}))))};l.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null))),o()}],[[17,1,2]]]);
//# sourceMappingURL=main.fb220b4b.chunk.js.map