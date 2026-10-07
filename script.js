const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("appointmentForm");
const msg=document.getElementById("formMessage");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get("name");
  msg.textContent=`Thanks${name ? ", "+name : ""}! Your appointment request has been received. In this demo, it is not stored in a database; connect a backend/database or form service for real submissions.`;
  form.reset();
});
