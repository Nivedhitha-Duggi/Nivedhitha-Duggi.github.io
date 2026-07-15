const words=["AI systems","clinical RAG","network automation","computer vision","software that scales"];let wi=0;setInterval(()=>{wi=(wi+1)%words.length;const n=document.querySelector("#typeText");n.animate([{opacity:0,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],{duration:400});n.textContent=words[wi]},2100);
const numbersSection = document.querySelector(".numbers");
if (numbersSection) {
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 35));
        const timer = setInterval(() => {
          current = Math.min(target, current + step);
          node.textContent = current;
          if (current >= target) clearInterval(timer);
        }, 28);
      });
      countObs.disconnect();
    });
  }, { threshold: 0.4 });

  countObs.observe(numbersSection);
}
const expData={nokia:["FIXED NETWORKS","Intent-driven network automation at Nokia.","Built automation for Nokia Altiplano that compared expected and live network configurations, enabling incident detection and remediation across FTTH/GPON infrastructure.","80%","reduction in manual validation effort",["Python","Altiplano","SDN","NETCONF/YANG"]],lennox:["PRODUCT DEVELOPMENT & R&D","AI, edge systems, and validation at Lennox.","Combined engineering validation with applied AI: analyzed 17,000+ thermostat returns, migrated object detection to edge devices, and built AI-assisted enterprise workflows.","22%","fewer repeat field failures",["Python","Edge AI","Azure","Next.js","LangChain"]],exponential:["HEALTHCARE AI","Multimodal document intelligence.","Combined transformer QA, local retrieval, vision, layout-aware models, and tabular intelligence for complex healthcare provider contracts.","49%","faster data extraction",["BERT","RoBERTa","Mistral","LayoutLM","YOLOv8"]],practo:["PRODUCT ENGINEERING","Clinical RAG designed for safer answers.","Indexed 8,000 medical guidelines with specialty, care-setting, and recency filters; added guardrails, citation evaluation, and personalized CBT context.","72%","reduction in LLM hallucinations",["RAG","Pinecone","LangChain","LangGraph","PostgreSQL"]],pragyashal:["SYSTEMS ENGINEERING","Reliable interfaces and delivery pipelines.","Built transaction interfaces supporting 10,000+ concurrent sessions, refactored authentication workflows, and designed CI/CD pipelines for weekly releases.","10K+","concurrent sessions supported",["Angular","Redux","JWT","Jenkins","Docker"]],pine:["MARKETING & CUSTOMER ENGAGEMENT","Automation and risk systems at merchant scale.","Built enterprise automation for 25 banking clients and behavioral risk-monitoring systems while supporting platform growth from one to three million merchants.","95%","reduction in fraudulent merchant activities",["Python","REST APIs","SFTP","Parallel Processing"]]};
document.querySelectorAll(".exp").forEach(b=>b.onclick=()=>{document.querySelectorAll(".exp").forEach(x=>x.classList.remove("active"));b.classList.add("active");const d=expData[b.dataset.exp];["expTeam","expTitle","expBody"].forEach((id,i)=>document.getElementById(id).textContent=d[i]);document.getElementById("expImpact").innerHTML=d[3]+` <span>${d[4]}</span>`;document.getElementById("expTags").innerHTML=d[5].map(x=>`<i>${x}</i>`).join("")});
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".project").forEach(p=>p.classList.toggle("hidden",b.dataset.filter!=="all"&&!p.dataset.cat.includes(b.dataset.filter)))});
const cases={clinical:["CASE STUDY · CLINICAL AI","Clinical RAG designed for safer, cited answers.","Clinicians needed faster access to relevant medical guidance without sacrificing source traceability or introducing unchecked LLM hallucination.","Indexed 8,000 medical guidelines from S3 into Pinecone with specialty, care-setting, and recency filters. Added guardrails, prompt A/B testing, citation evaluation, and context-backed personalization.","RAG · Pinecone · AWS S3 · LangChain · LangGraph · PostgreSQL","Time-to-answer dropped from 8.0 to 3.2 minutes, hallucinations fell 72%, and citation coverage reached 90%.","[ 8,000 GUIDELINES / S3 ]\n          ↓\n[ CHUNK + METADATA FILTERS ]\n          ↓\n[ PINECONE RETRIEVAL ]\n          ↓\n[ GUARDRAILS + LLM ] ← [ USER CONTEXT ]\n          ↓\n[ CITED CLINICAL ANSWER ]"],network:["CASE STUDY · NETWORK AUTOMATION","Intent-driven broadband validation.","Manual comparison of intended and live FTTH/GPON configuration slowed validation and incident response.","Automated expected-versus-real-time state comparison, mismatch detection, and remediation workflows for Nokia Altiplano environments.","Python · Altiplano · FTTH/GPON · SDN · NETCONF/YANG","Reduced manual validation effort by 80% and improved network observability.","[ INTENDED STATE ] + [ LIVE STATE ]\n          ↓\n[ COMPARISON ENGINE ]\n          ↓\n[ DRIFT / INCIDENT DETECTION ]\n          ↓\n[ REMEDIATION WORKFLOW ]"],lennox:["CASE STUDY · EDGE AI","Moving quality inspection intelligence to the edge.","Centralized object detection increased bandwidth and infrastructure requirements for quality inspection workflows.","Migrated object detection models to edge devices and integrated AI into engineering and product workflows.","Edge AI · Object Detection · Python · Azure","Reduced bandwidth and infrastructure expenses by 15%.","[ INSPECTION INPUT ]\n        ↓\n[ EDGE MODEL ] → [ LOCAL INFERENCE ]\n        ↓\n[ QUALITY SIGNAL ] → [ MONITORING ]"],vista:["CASE STUDY · HEALTHCARE RESEARCH","VISTA: smartphone-based viral assay interpretation.","Point-of-care diagnostics need reliable interpretation without expensive laboratory infrastructure or expert visual review.","Developed and fine-tuned a compact deep learning architecture for automated assay interpretation from smartphone images, integrated with a disposable microfluidic platform.","Deep Learning · Computer Vision · Smartphone Imaging · Microfluidics","Achieved 94% accuracy for SARS-CoV-2 and HCV detection with results in under 45 minutes.","[ SMARTPHONE IMAGE ]\n        ↓\n[ PREPROCESSING ]\n        ↓\n[ COMPACT DL MODEL ]\n        ↓\n[ ASSAY CLASSIFICATION ]\n        ↓\n[ DIAGNOSTIC RESULT ]"],docs:["CASE STUDY · MULTIMODAL AI","Healthcare document intelligence beyond OCR.","Provider contracts combine scanned text, handwriting, tables, and layout-dependent meaning that conventional parsing handles poorly.","Combined extractive QA, local LLM retrieval, handwriting detection, layout-aware VQA, PEFT, table extraction, and TAPAS querying.","BERT · DistilBERT · RoBERTa · Mistral · YOLOv8 · DONUT · LayoutLM · TAPAS","Improved extraction speed by 49% and reduced latency by 27%.","[ DOCUMENT ]\n   ↓\n[ OCR / VISION / LAYOUT ]\n   ↓\n[ RETRIEVAL + TRANSFORMER QA ]\n   ↓\n[ TABLE / FIELD INTELLIGENCE ]\n   ↓\n[ STRUCTURED OUTPUT ]"],llm:["CASE STUDY · RESPONSIBLE AI","Healthcare LLM evaluation beyond aggregate scores.","Benchmark scores alone do not explain whether a healthcare-focused model is reliable across domain tasks or potential bias dimensions.","Evaluated healthcare-focused language models using GLUE and SuperGLUE while analyzing domain performance, fairness, and bias behavior.","ClinicalBERT · PubMedBERT · GLUE · SuperGLUE · Python","Contributed an evaluation perspective centered on ethical deployment and clinical reliability.","[ MODEL ] × [ BENCHMARK TASKS ]\n          ↓\n[ PERFORMANCE METRICS ]\n        +\n[ BIAS / FAIRNESS ANALYSIS ]\n          ↓\n[ RELIABILITY ASSESSMENT ]"]};
const modal=document.querySelector("#modal");document.querySelectorAll(".project button").forEach(b=>b.onclick=()=>{const d=cases[b.closest(".project").dataset.project];["mLabel","mTitle","mProblem","mApproach","mStack","mImpact","mArch"].forEach((id,i)=>document.getElementById(id).textContent=d[i]);modal.classList.add("open")});document.querySelector(".close").onclick=()=>modal.classList.remove("open");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};document.onkeydown=e=>{if(e.key==="Escape")modal.classList.remove("open")};
const journeyRegions = {
  usa: {
    label:"UNITED STATES · 2024 — PRESENT",
    title:"From graduate research<br>to real-world systems.",
    body:"My U.S. chapter brought together research and engineering: healthcare LLM evaluation, viral diagnostics, enterprise AI, HVAC R&D, and broadband network automation.",
    stats:[["3","Research labs"],["2","Industry domains"],["94%","Diagnostic accuracy"]],
    stops:[
      ["2026","NOKIA · DALLAS","Fixed Networks Customer Engineering","Intent-driven validation, SDN automation, WiFi 7 service integration, and production incident support across FTTH/GPON infrastructure.","−80% manual validation effort","nokia"],
      ["2025","LENNOX INTERNATIONAL · CARROLLTON","Software Engineering · Product R&D","Worked across HVAC validation, edge AI, smart thermostat intelligence, enterprise assistants, and AI-enabled dealer workflows.","17,000+ returns analyzed · 22% fewer repeat failures","lennox"],
      ["2024","UNIVERSITY OF NORTH TEXAS · DENTON","Three Research Labs. Three Different Questions.","Healthcare LLM fairness, LLM-driven medical assessment, and heterogeneous cloud benchmarking across cost, latency, energy, and carbon.","VISTA · arXiv publication · Responsible AI","research"],
      ["2024","EXPONENTIAL AI · ATLANTA","Applied AI for Healthcare Documents","Built multimodal document intelligence using transformer QA, local LLM retrieval, layout-aware models, object detection, and tabular understanding.","+49% extraction speed","exponential"]
    ]
  },
  india: {
    label:"INDIA · 2022 — 2024",
    title:"Where I learned to<br>build for scale.",
    body:"My India chapter built the engineering foundation: product development, systems, healthcare software, financial technology, automation, and backend risk intelligence.",
    stats:[["25","Banking clients"],["3M","Merchants supported"],["10K+","Concurrent sessions"]],
    stops:[
      ["2024","PRACTO · HYDERABAD","Clinical AI & Product Engineering","Designed clinical RAG over 8,000 medical guidelines with filtered retrieval, safety guardrails, citation evaluation, and personalized CBT context.","−72% LLM hallucinations · 90% citation coverage","practo"],
      ["2023","PRAGYASHAL · CHENNAI","Systems Engineering","Built transaction interfaces supporting 10,000+ concurrent sessions, refactored authentication, and created CI/CD pipelines for reliable weekly releases.","10,000+ concurrent sessions","pragyashal"],
      ["2022","PINE LABS · BENGALURU","Fintech Automation & Risk Systems","Built automation across 25 banking clients and behavioral risk-monitoring systems supporting growth from one million to three million merchants.","95% reduction in fraudulent merchant activities","pine"]
    ]
  }
};

const journeyDetails = {
  nokia:{
    team:"FIXED NETWORKS · UNITED STATES",
    title:"Intent-driven network automation at Nokia.",
    body:"I worked within Fixed Networks Customer Engineering on software and automation problems around broadband service validation, network state, incident response, and next-generation residential connectivity.",
    work:[
      "Built intent-driven network and test automation for Altiplano FTTH/GPON environments.",
      "Compared expected service intent with real-time network configuration to identify drift and validation failures.",
      "Automated incident detection and remediation workflows across Lightspan OLTs, ONTs, and residential gateways.",
      "Supported AT&T MDU WiFi 7 service integration and SDN controller migration work."
    ],
    projects:[
      ["Intent vs. Live State Validator","Python automation that compared expected configurations against live network state and surfaced mismatches before manual validation."],
      ["Automated Incident Remediation","Detection-to-remediation workflow for recurring network issues, designed to reduce repetitive engineering intervention."],
      ["WiFi 7 MDU Service Integration","Supported service integration and validation across broadband access and residential connectivity components."],
      ["SDN Controller Migration","Contributed to controller migration workflows that significantly improved execution speed."]
    ],
    approach:"I treated network validation as a state-comparison problem: define the intended state, collect the live state, normalize both representations, detect drift, and route actionable mismatches into validation or remediation workflows.",
    impact:["80%","reduction in manual validation effort"],
    tags:["Python","Altiplano","SDN","NETCONF/YANG","FTTH/GPON","WiFi 7"]
  },
  lennox:{
    team:"PRODUCT DEVELOPMENT & R&D · UNITED STATES",
    title:"Software, AI, and engineering validation at Lennox.",
    body:"My work at Lennox crossed two environments: Enterprise Intelligence's AI/ML Center of Excellence and Residential Controls R&D. That gave me experience building AI applications and working close to physical products and validation systems.",
    work:[
      "Analyzed approximately 17,000 S40 thermostat records and return data to support engineering readiness decisions.",
      "Worked on controls quality and validation across IFC boards, flame-sensing thresholds, refrigerant leak detection, motor compatibility, and thermostat logs.",
      "Built enterprise AI workflows using Azure, OpenAI, RAG, and Python.",
      "Worked on predictive maintenance, edge object detection, smart thermostat scheduling, and internal LLM experimentation."
    ],
    projects:[
      ["S40 Thermostat ELC Analysis","Analyzed a large thermostat population and return pool to evaluate field behavior and validation readiness."],
      ["Customer Notification Platform","Integrated Calendly, Azure Functions, and OpenAI retrieval workflows to improve customer communication."],
      ["Mechanical Schedule Extraction","Used Python and Azure Cognitive Services to extract schedule information and reduce quote preparation from days to hours."],
      ["Edge Object Detection","Moved object detection workloads closer to edge devices to reduce bandwidth and infrastructure dependence."],
      ["Local Test-Script LLM","Experimented with compact language models for generating test scripts from controls test-case descriptions."]
    ],
    approach:"I moved between data analysis, applied AI, and product validation depending on the problem. The common pattern was to understand the operational workflow first, identify the expensive manual step, and then decide whether automation, ML, retrieval, or a simpler software tool was the right intervention.",
    impact:["22%","fewer repeat field failures"],
    tags:["Python","Azure","OpenAI","RAG","Edge AI","Controls Validation","Next.js"]
  },
  research:{
    team:"RESEARCH · UNITED STATES",
    title:"Three labs, three different views of applied AI.",
    body:"At UNT, I worked across healthcare AI, LLM-based formative assessment, and heterogeneous cloud benchmarking. The research experience strengthened how I design evaluations and question aggregate model performance.",
    work:[
      "Evaluated healthcare-focused language models for domain performance, bias, fairness, and reliability.",
      "Explored LLM-generated clinical formative assessment using MCQ and fill-in-the-blank tasks.",
      "Benchmarked heterogeneous cloud compute for DNN/ML inference and video transcoding.",
      "Measured latency, cost, energy, and carbon rather than optimizing for a single performance metric."
    ],
    projects:[
      ["VISTA Diagnostics","Compact deep learning for smartphone-based SARS-CoV-2 and HCV assay interpretation."],
      ["Healthcare LLM Evaluation","ClinicalBERT and PubMedBERT evaluation using benchmark tasks and responsible-AI analysis."],
      ["Clinical Assessment Generation","LLM-driven MCQ and fill-in-the-blank generation for domain-specific formative assessment."],
      ["Cloud Compute Benchmarking","Cross-cloud evaluation of heterogeneous compute using latency, cost, energy, and carbon metrics."]
    ],
    approach:"Research taught me to separate a strong result from a strong evaluation. I define the question, identify failure dimensions, select metrics that reflect deployment reality, and compare systems across more than one axis.",
    impact:["3","research labs at UNT"],
    tags:["ClinicalBERT","PubMedBERT","GLUE","SuperGLUE","LLM Evaluation","Cloud Benchmarking"]
  },
  exponential:{
    team:"HEALTHCARE AI · UNITED STATES",
    title:"Multimodal document intelligence for healthcare.",
    body:"I worked on healthcare contract intelligence where documents could contain scanned text, handwriting, tables, and layout-dependent information. A single OCR or QA model was not enough.",
    work:[
      "Evaluated BERT, DistilBERT, and RoBERTa for extractive question answering.",
      "Integrated local LLM retrieval using llama.cpp and Mistral.",
      "Used YOLOv8 for handwriting-related detection workflows.",
      "Worked with DONUT, LayoutLM, PEFT, img2table, and TAPAS for document and table understanding."
    ],
    projects:[
      ["Contract QA Pipeline","Transformer-based extractive QA for locating contract information from healthcare documents."],
      ["Local LLM Retrieval","Retrieval workflow using local model infrastructure for lower-latency document interaction."],
      ["Layout-Aware Extraction","Document understanding pipeline combining visual layout and textual context."],
      ["Table Intelligence","Table extraction and TAPAS-based querying for structured information inside complex documents."]
    ],
    approach:"I decomposed the document problem by information type. Text QA, handwriting, visual layout, and tables were routed through specialized components before producing structured outputs for review.",
    impact:["49%","faster data extraction"],
    tags:["BERT","RoBERTa","Mistral","LayoutLM","DONUT","YOLOv8","TAPAS"]
  },
  practo:{
    team:"PRODUCT ENGINEERING · INDIA",
    title:"Clinical RAG designed for safer, cited answers.",
    body:"At Practo, I focused on retrieval and personalization for healthcare use cases, where answer quality had to include relevance, source traceability, and guardrails rather than fluency alone.",
    work:[
      "Indexed 8,000 medical guidelines with specialty, care-setting, and recency metadata.",
      "Built filtered retrieval workflows using Pinecone.",
      "Added safety guardrails and prompt A/B evaluation.",
      "Measured citation coverage and incorporated PostgreSQL-backed user context into LangGraph workflows."
    ],
    projects:[
      ["Clinical Guideline RAG","Metadata-aware retrieval across 8,000 medical guidelines for more relevant clinical answers."],
      ["RAG Safety & Evaluation","Guardrails, prompt experiments, hallucination analysis, and citation-coverage evaluation."],
      ["Personalized CBT Workflow","LangGraph-based response workflow using stored user context to improve continuity and personalization."]
    ],
    approach:"I treated RAG as an evaluation problem as much as a retrieval problem. Retrieval filters, prompt behavior, guardrails, citation coverage, and user context were measured as separate components instead of assuming one end-to-end score explained quality.",
    impact:["72%","reduction in LLM hallucinations"],
    tags:["RAG","Pinecone","LangChain","LangGraph","PostgreSQL","LLM Evaluation"]
  },
  pragyashal:{
    team:"SYSTEMS ENGINEERING · INDIA",
    title:"Building reliable product interfaces and delivery pipelines.",
    body:"My systems work centered on application reliability, authentication, transaction interfaces, and repeatable software delivery.",
    work:[
      "Built transaction interfaces designed to support more than 10,000 concurrent sessions.",
      "Refactored authentication and JWT-based workflows.",
      "Worked across frontend state management and backend integration.",
      "Designed Jenkins and Docker CI/CD workflows supporting weekly releases."
    ],
    projects:[
      ["High-Concurrency Transaction UI","Application interfaces designed around large concurrent-session requirements."],
      ["Authentication Refactor","JWT-based authentication workflow improvements focused on reliability and maintainability."],
      ["Release Automation","Jenkins and Docker pipeline for more repeatable weekly software delivery."]
    ],
    approach:"I focused on reducing hidden operational friction: simplify state flow, isolate authentication concerns, and make release steps repeatable through automation.",
    impact:["10K+","concurrent sessions supported"],
    tags:["Angular","Redux","JWT","Jenkins","Docker","CI/CD"]
  },
  pine:{
    team:"FINTECH ENGINEERING · INDIA",
    title:"Automation and risk systems at merchant scale.",
    body:"At Pine Labs, I worked on enterprise automation and backend risk-monitoring problems in a financial technology environment serving banking clients and a rapidly growing merchant platform.",
    work:[
      "Developed automation workflows across 25 banking clients.",
      "Reduced repetitive file and operational processing through Python-based automation.",
      "Worked on backend behavioral risk-monitoring systems.",
      "Supported systems operating as the merchant platform scaled from one million to three million merchants."
    ],
    projects:[
      ["Banking Client Automation","Automated recurring enterprise workflows across 25 banking clients using Python, APIs, and file-transfer integrations."],
      ["Merchant Risk Monitoring","Backend behavioral monitoring designed to identify suspicious merchant activity."],
      ["Scale Support","Engineering work supporting platform growth from 1M to 3M merchants."]
    ],
    approach:"The core engineering challenge was operational scale. I looked for repeated manual processes that could be standardized and automated, while risk systems required behavioral signals and backend monitoring rather than simple rule execution.",
    impact:["95%","reduction in fraudulent merchant activities"],
    tags:["Python","REST APIs","SFTP","Parallel Processing","Risk Monitoring"]
  }
};

function renderJourney(region){
  const d=journeyRegions[region];
  document.querySelector("#regionIntro").innerHTML=`
    <p class="label">${d.label}</p>
    <h3>${d.title}</h3>
    <p>${d.body}</p>
    <div class="region-stats">${d.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>`;
  document.querySelector("#careerChannel").innerHTML=d.stops.map(s=>`
    <article class="career-stop" data-exp="${s[5]}">
      <div class="stop-marker"><span>${s[0]}</span></div>
      <div class="stop-card">
        <small>${s[1]}</small>
        <h3>${s[2]}</h3>
        <p>${s[3]}</p>
        <strong>${s[4]}</strong>
        <button class="exp-open" data-exp="${s[5]}">Explore work & projects ↗</button>
      </div>
    </article>`).join("");
  bindJourneyButtons();
}

function bindJourneyButtons(){
  document.querySelectorAll(".exp-open").forEach(btn=>btn.onclick=()=>{
    const d=journeyDetails[btn.dataset.exp];
    document.querySelector("#jTeam").textContent=d.team;
    document.querySelector("#jTitle").textContent=d.title;
    document.querySelector("#jBody").textContent=d.body;
    document.querySelector("#jWork").innerHTML=d.work.map(x=>`<div class="work-point"><span>↳</span><p>${x}</p></div>`).join("");
    document.querySelector("#jProjects").innerHTML=d.projects.map((x,i)=>`
      <article class="chapter-project">
        <span>0${i+1}</span>
        <div><h4>${x[0]}</h4><p>${x[1]}</p></div>
      </article>`).join("");
    document.querySelector("#jApproach").textContent=d.approach;
    document.querySelector("#jImpact").innerHTML=`${d.impact[0]} <span>${d.impact[1]}</span>`;
    document.querySelector("#jTags").innerHTML=d.tags.map(x=>`<i>${x}</i>`).join("");
    document.querySelector("#journeyDetail").classList.add("open");
  });
}
bindJourneyButtons();

document.querySelectorAll(".journey-tab").forEach(tab=>tab.onclick=()=>{
  document.querySelectorAll(".journey-tab").forEach(x=>x.classList.remove("active"));
  tab.classList.add("active");
  renderJourney(tab.dataset.region);
});
document.querySelector(".journey-detail-close").onclick=()=>document.querySelector("#journeyDetail").classList.remove("open");
