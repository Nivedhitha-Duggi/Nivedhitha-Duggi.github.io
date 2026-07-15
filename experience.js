
const data = {
usa: [
{
company:"NOKIA · DALLAS", role:"Fixed Networks Customer Engineering",
summary:"Built intent-driven network and test automation around Nokia Altiplano, FTTH/GPON infrastructure, live network state, validation, incident detection, and remediation.",
impact:["80%","less manual validation"],
work:[
"Compared expected service intent with real-time network configuration.",
"Automated incident detection and remediation workflows.",
"Supported AT&T MDU WiFi 7 service integration.",
"Worked on SDN cloud-controller installation and migration automation."
],
projects:[
["Intent vs Live State","Automated expected-versus-live configuration validation."],
["Incident Remediation","Detection-to-remediation automation workflow."],
["WiFi 7 MDU","Broadband service integration and validation."],
["SDN Migration","Controller installation and migration automation."]
]
},
{
company:"LENNOX INTERNATIONAL · CARROLLTON", role:"Software Engineering · R&D",
summary:"Worked across Residential Controls R&D and enterprise AI, combining validation, data analysis, edge AI, RAG, smart thermostat intelligence, and product-facing software.",
impact:["17,000+","thermostats analyzed"],
work:[
"Analyzed S40 thermostat return and contamination patterns.",
"Executed IFC board, flame sensing, refrigerant leak, and motor tests.",
"Migrated object detection workloads to edge devices.",
"Built Azure/OpenAI enterprise assistants and AI-enabled workflows."
],
projects:[
["S40 ELC Analysis","Engineering readiness analysis over a large thermostat population."],
["Customer Notifications","Azure Functions + OpenAI communication workflow."],
["Mechanical Schedules","AI extraction pipeline reducing quote-prep effort."],
["Local Test LLM","Compact language model experimentation for test-script generation."]
]
},
{
company:"UNT RESEARCH · DENTON", role:"Graduate Research Assistant",
summary:"Worked across three research environments covering healthcare LLM reliability, clinical formative assessment, and heterogeneous cloud benchmarking.",
impact:["3","research labs"],
work:[
"Evaluated healthcare LLMs for domain performance, bias, and fairness.",
"Studied LLM-generated clinical MCQ and fill-in-the-blank assessment.",
"Benchmarked cloud compute for DNN and ML inference.",
"Measured latency, cost, energy, and carbon across services."
],
projects:[
["VISTA","Smartphone-based viral assay interpretation."],
["Healthcare LLM Evaluation","ClinicalBERT and PubMedBERT benchmark analysis."],
["Clinical Assessment","LLM-driven medical formative assessment."],
["Cloud Benchmarking","Cross-cloud latency, cost, energy, and carbon analysis."]
]
},
{
company:"EXPONENTIAL AI · ATLANTA", role:"Python Developer · Applied AI",
summary:"Built multimodal healthcare document intelligence pipelines combining transformer QA, retrieval, layout-aware models, handwriting detection, and table understanding.",
impact:["49%","faster extraction"],
work:[
"Fine-tuned BERT-family models for extractive QA.",
"Used llama.cpp and Mistral for retrieval workflows.",
"Applied YOLOv8 to handwriting-related document processing.",
"Worked with DONUT, LayoutLM, PEFT, img2table, and TAPAS."
],
projects:[
["Contract QA","Transformer QA for healthcare contracts."],
["Local Retrieval","Local LLM retrieval with Mistral and llama.cpp."],
["Layout Intelligence","Visual-layout-aware document extraction."],
["Table Understanding","Structured extraction and TAPAS querying."]
]
}
],
india: [
{
company:"PRACTO · HYDERABAD", role:"Software Engineer · Product Engineering",
summary:"Designed clinical RAG and personalization workflows where retrieval quality, source traceability, guardrails, and user context mattered as much as model fluency.",
impact:["72%","fewer LLM hallucinations"],
work:[
"Indexed 8,000 medical guidelines with domain metadata.",
"Built filtered Pinecone retrieval by specialty and care setting.",
"Added guardrails and prompt A/B evaluation.",
"Measured citation coverage and used PostgreSQL-backed user context."
],
projects:[
["Clinical Guideline RAG","Filtered retrieval over 8,000 guidelines."],
["RAG Safety","Guardrails, hallucination evaluation, citation analysis."],
["Personalized CBT","LangGraph workflow with stored user context."]
]
},
{
company:"PRAGYASHAL · CHENNAI", role:"Systems Engineer Intern",
summary:"Built high-concurrency interfaces, authentication workflows, and CI/CD pipelines focused on application reliability and repeatable delivery.",
impact:["10K+","concurrent sessions"],
work:[
"Built transaction interfaces for high concurrent usage.",
"Refactored JWT-based authentication workflows.",
"Improved request handling and frontend state flow.",
"Designed Jenkins and Docker CI/CD workflows."
],
projects:[
["Transaction UI","High-concurrency interface design."],
["Authentication Refactor","JWT and request-management improvements."],
["Release Automation","Jenkins + Docker weekly release pipeline."]
]
},
{
company:"PINE LABS · BENGALURU", role:"Software Engineer Intern",
summary:"Built enterprise automation and risk-monitoring systems in a fintech environment supporting banking clients and a merchant platform scaling from one to three million merchants.",
impact:["95%","reduction in fraudulent merchant activity"],
work:[
"Developed automation across 25 banking clients.",
"Built Python, API, and SFTP workflow automation.",
"Worked on behavioral merchant risk monitoring.",
"Supported systems as the platform scaled to 3M merchants."
],
projects:[
["Banking Automation","Enterprise automation across 25 clients."],
["Merchant Risk","Behavioral backend monitoring."],
["Scale Support","Engineering for growth from 1M to 3M merchants."]
]
}
]};

const track = document.getElementById("expTrack");
const progress = document.getElementById("progressBar");
let country = "usa";

function render(){
  track.innerHTML = data[country].map((d,i)=>`
  <article class="slide">
    <span class="slide-index">0${i+1} / 0${data[country].length}</span>
    <div>
      <small>${d.company}</small>
      <h2>${d.role}</h2>
      <p>${d.summary}</p>
      <div class="slide-impact">${d.impact[0]}<span>${d.impact[1]}</span></div>
    </div>
    <div class="work-panel">
      <h3>What I worked on</h3>
      <div class="work-list">${d.work.map(x=>`<div>↳ ${x}</div>`).join("")}</div>
      <div class="project-list">${d.projects.map(p=>`<article><b>${p[0]}</b><p>${p[1]}</p></article>`).join("")}</div>
    </div>
  </article>`).join("");
  track.scrollTo({left:0,behavior:"instant"});
  updateProgress();
}
function updateProgress(){
  const slides=[...track.querySelectorAll(".slide")];
  if(!slides.length)return;
  const idx=Math.round(track.scrollLeft/(slides[0].offsetWidth+22));
  progress.style.width=`${((idx+1)/slides.length)*100}%`;
}
function move(dir){
  const s=track.querySelector(".slide");
  if(!s)return;
  track.scrollBy({left:dir*(s.offsetWidth+22),behavior:"smooth"});
}
document.getElementById("prevSlide").onclick=()=>move(-1);
document.getElementById("nextSlide").onclick=()=>move(1);
track.addEventListener("scroll",()=>requestAnimationFrame(updateProgress));
document.querySelectorAll(".country-switch button").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".country-switch button").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");country=btn.dataset.country;render();
});
document.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight")move(1);
  if(e.key==="ArrowLeft")move(-1);
});
render();
