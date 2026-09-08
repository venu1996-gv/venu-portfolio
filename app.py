import streamlit as st

st.set_page_config(
    page_title="Venu Gopal Gattineni | Senior AI/ML Engineer",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ---------- Styling ----------
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

html, body, [class*="css"] {
    font-family: 'Inter', sans-serif;
}
.stApp {
    background:
      radial-gradient(circle at 12% 10%, rgba(34,211,238,.14), transparent 22%),
      radial-gradient(circle at 88% 8%, rgba(99,102,241,.13), transparent 20%),
      linear-gradient(180deg, #06111f 0%, #0a1628 45%, #07111f 100%);
    color: #f8fafc;
}
.block-container {
    max-width: 1180px;
    padding-top: 1.2rem;
    padding-bottom: 4rem;
}
header[data-testid="stHeader"] {
    background: rgba(6,17,31,.74);
    backdrop-filter: blur(10px);
}
#MainMenu, footer { visibility: hidden; }

.topnav {
    position: sticky;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: .9rem 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 18px;
    background: rgba(8,20,34,.86);
    backdrop-filter: blur(14px);
}
.brand {
    font-weight: 800;
    letter-spacing: -.02em;
    color: #fff;
}
.navlinks a {
    color: #94a3b8;
    text-decoration: none;
    margin-left: 1rem;
    font-size: .9rem;
    font-weight: 600;
}
.navlinks a:hover { color: #67e8f9; }

.hero {
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 28px;
    padding: 2.4rem;
    background:
      linear-gradient(135deg, rgba(34,211,238,.10), rgba(99,102,241,.06)),
      rgba(255,255,255,.025);
    box-shadow: 0 24px 80px rgba(0,0,0,.28);
}
.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .45rem .8rem;
    border: 1px solid rgba(34,211,238,.28);
    border-radius: 999px;
    color: #67e8f9;
    background: rgba(34,211,238,.08);
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
}
.hero h1 {
    font-size: 3.7rem;
    line-height: 1.02;
    margin: 1rem 0 .6rem;
    letter-spacing: -.045em;
    color: #fff;
}
.hero-title {
    font-size: 1.15rem;
    color: #67e8f9;
    font-weight: 700;
}
.hero-copy {
    max-width: 760px;
    margin-top: 1.15rem;
    color: #cbd5e1;
    line-height: 1.8;
    font-size: 1.03rem;
}
.hero-chips { margin-top: 1.2rem; }
.chip {
    display: inline-block;
    padding: .35rem .7rem;
    border-radius: 999px;
    border: 1px solid rgba(148,163,184,.25);
    background: rgba(15,23,42,.72);
    color: #cbd5e1;
    margin: .2rem .35rem .2rem 0;
    font-size: .78rem;
    font-weight: 600;
}
.stat-card, .card {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    background: rgba(255,255,255,.035);
    box-shadow: 0 10px 30px rgba(0,0,0,.14);
}
.stat-card { padding: 1.1rem 1.2rem; min-height: 118px; }
.stat-label {
    color: #94a3b8;
    font-size: .74rem;
    text-transform: uppercase;
    letter-spacing: .10em;
    font-weight: 700;
}
.stat-value {
    color: #fff;
    font-size: 1.55rem;
    font-weight: 800;
    margin-top: .35rem;
}
.stat-copy {
    color: #94a3b8;
    font-size: .84rem;
    margin-top: .25rem;
}
.section-kicker {
    color: #67e8f9;
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-top: 2.5rem;
}
.section-title {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -.03em;
    margin: .3rem 0 .4rem;
}
.section-copy {
    color: #94a3b8;
    max-width: 760px;
    line-height: 1.7;
    margin-bottom: 1rem;
}
.card {
    padding: 1.25rem 1.35rem;
    margin-bottom: 1rem;
}
.card-title {
    color: #fff;
    font-size: 1.03rem;
    font-weight: 800;
}
.card-sub {
    color: #67e8f9;
    font-size: .86rem;
    font-weight: 700;
    margin-top: .2rem;
}
.card p, .card li { color: #cbd5e1; line-height: 1.65; }
.card ul { padding-left: 1.15rem; margin-bottom: 0; }

.project {
    height: 100%;
    padding: 1.4rem;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.08);
    background:
      linear-gradient(150deg, rgba(34,211,238,.06), rgba(99,102,241,.025)),
      rgba(255,255,255,.025);
}
.project-number {
    color: #67e8f9;
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .12em;
}
.project h3 {
    color: #fff;
    font-size: 1.22rem;
    margin: .55rem 0 .35rem;
}
.project p {
    color: #aebccd;
    line-height: 1.65;
    min-height: 110px;
}
.arch {
    margin-top: .9rem;
    padding: .85rem;
    border-radius: 14px;
    border: 1px dashed rgba(103,232,249,.24);
    background: rgba(2,6,23,.42);
    color: #dbeafe;
    font-size: .78rem;
    line-height: 1.7;
}
.exp-company { color: #67e8f9; font-weight: 800; }
.exp-meta { color: #94a3b8; font-size: .85rem; margin-bottom: .6rem; }

.cta {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 24px;
    background: linear-gradient(135deg, #0e7490 0%, #1d4ed8 100%);
    text-align: center;
    box-shadow: 0 18px 45px rgba(29,78,216,.18);
}
.cta h3 { color: #fff; margin-bottom: .4rem; }
.cta p { color: #e2e8f0; }

div[data-testid="stLinkButton"] > a {
    border-radius: 12px !important;
    font-weight: 700 !important;
}
div[data-testid="stDownloadButton"] > button {
    border-radius: 12px !important;
    font-weight: 700 !important;
}
hr {
    border-color: rgba(255,255,255,.08) !important;
}
@media (max-width: 900px) {
    .hero h1 { font-size: 2.5rem; }
    .navlinks { display: none; }
    .hero { padding: 1.5rem; }
}
</style>
""", unsafe_allow_html=True)

# ---------- Helpers ----------
def chips(items):
    return "".join(f'<span class="chip">{x}</span>' for x in items)

def section(kicker, title, copy=""):
    st.markdown(f"""
    <div class="section-kicker">{kicker}</div>
    <div class="section-title">{title}</div>
    <div class="section-copy">{copy}</div>
    """, unsafe_allow_html=True)

# ---------- Top nav ----------
st.markdown("""
<div class="topnav">
  <div class="brand">Venu Gopal Gattineni</div>
  <div class="navlinks">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#contact">Contact</a>
  </div>
</div>
""", unsafe_allow_html=True)

# ---------- Hero ----------
st.markdown("""
<div class="hero">
  <div class="eyebrow">Senior AI/ML Engineer</div>
  <h1>Building production-grade AI systems that create measurable business impact.</h1>
  <div class="hero-title">Generative AI · Agentic AI · LLMs · RAG · Machine Learning · MLOps</div>
  <div class="hero-copy">
    Senior AI/ML Engineer with 9+ years of software engineering experience and 2+ years
    focused on Generative AI, Agentic AI, LLM applications, RAG, intelligent automation,
    and production-ready machine learning systems across financial services, insurance,
    and enterprise platforms.
  </div>
  <div class="hero-chips">
    """ + chips(["Python","PyTorch","TensorFlow","AWS","Amazon Bedrock","Spark","Kafka","Docker","Kubernetes","MLflow"]) + """
  </div>
</div>
""", unsafe_allow_html=True)

st.write("")
c1, c2, c3, c4 = st.columns(4)
stats = [
    ("Experience", "9+ Years", "Software engineering & AI/ML"),
    ("Modern AI", "2+ Years", "GenAI, Agentic AI, LLMs, RAG"),
    ("Impact", "28%", "Fraud detection precision improvement"),
    ("Delivery", "35%", "Faster model release cycles"),
]
for col, (label, value, copy) in zip([c1,c2,c3,c4], stats):
    with col:
        st.markdown(
            f'<div class="stat-card"><div class="stat-label">{label}</div><div class="stat-value">{value}</div><div class="stat-copy">{copy}</div></div>',
            unsafe_allow_html=True
        )

st.write("")
b1, b2, b3 = st.columns([1,1,1])
with b1:
    st.link_button("GitHub ↗", "https://github.com/venu1996-gv", use_container_width=True)
with b2:
    st.link_button("LinkedIn ↗", "https://www.linkedin.com/in/venugopalgattineni/", use_container_width=True)
with b3:
    st.link_button("Email", "mailto:venugopalgattineni96@gmail.com", use_container_width=True)

# ---------- About ----------
st.markdown('<div id="about"></div>', unsafe_allow_html=True)
section(
    "About",
    "From data pipelines to enterprise AI platforms",
    "I work across the full AI/ML lifecycle—from data engineering and feature pipelines to model development, deployment, observability, governance, and intelligent retrieval."
)
st.markdown("""
<div class="card">
<p>
My background combines machine learning, backend engineering, distributed data systems,
cloud infrastructure, and modern GenAI architectures. I have worked on fraud detection,
credit risk, NLP, recommendation systems, anomaly detection, real-time inference,
enterprise RAG/GraphRAG, explainable AI, and MLOps.
</p>
<p>
I focus on solutions that are practical in production: reliable, measurable, secure,
explainable, and maintainable—not just experimental models.
</p>
</div>
""", unsafe_allow_html=True)

# ---------- Projects ----------
st.markdown('<div id="projects"></div>', unsafe_allow_html=True)
section(
    "Selected work",
    "Representative AI/ML engineering projects",
    "These portfolio cards summarize the kinds of production systems and architectures I have worked with."
)

projects = [
    {
        "n":"01",
        "title":"Enterprise RAG & GraphRAG",
        "desc":"Context-aware enterprise knowledge retrieval using embeddings, vector databases, hybrid search, reranking, metadata filtering, grounding, and knowledge graphs.",
        "tags":["RAG","GraphRAG","Amazon Bedrock","OpenAI","Pinecone","Neo4j"],
        "arch":"Documents → Chunking → Embeddings → Vector + Graph Retrieval → Reranking → LLM → Grounded Answer"
    },
    {
        "n":"02",
        "title":"Real-Time Fraud Detection",
        "desc":"High-throughput fraud and anomaly detection with streaming ingestion, distributed feature engineering, model scoring APIs, explainability, and production monitoring.",
        "tags":["PyTorch","TensorFlow","Spark","Kafka","FastAPI","SHAP"],
        "arch":"Kafka/Kinesis → Spark Features → Model Service → Risk Score → SHAP/LIME → Monitoring"
    },
    {
        "n":"03",
        "title":"Agentic AI Orchestration",
        "desc":"Tool-enabled multi-agent workflow concepts with planning, state management, conditional routing, memory, human-in-the-loop controls, and MCP-style integrations.",
        "tags":["LangGraph","LangChain","AutoGen","CrewAI","MCP","LLMs"],
        "arch":"User Goal → Planner → Tools/Agents → State + Memory → Validation → Final Response"
    },
    {
        "n":"04",
        "title":"Production MLOps Platform",
        "desc":"Repeatable model training, versioning, deployment, monitoring, and infrastructure workflows designed for scalable enterprise ML delivery.",
        "tags":["MLflow","Docker","Kubernetes","Terraform","GitHub Actions","AWS"],
        "arch":"Data → Train → MLflow Registry → CI/CD → Container → Kubernetes → Monitor → Retrain"
    },
]

pcols = st.columns(2)
for i, p in enumerate(projects):
    with pcols[i % 2]:
        st.markdown(f"""
        <div class="project">
          <div class="project-number">PROJECT {p['n']}</div>
          <h3>{p['title']}</h3>
          <p>{p['desc']}</p>
          <div>{chips(p['tags'])}</div>
          <div class="arch"><b>Architecture:</b><br>{p['arch']}</div>
        </div>
        """, unsafe_allow_html=True)
        st.write("")

# ---------- Skills ----------
st.markdown('<div id="skills"></div>', unsafe_allow_html=True)
section(
    "Technical stack",
    "Core technologies",
    "A recruiter-friendly view of the tools and capabilities I use across AI, data, cloud, MLOps, and engineering."
)

skills = {
    "Generative & Agentic AI": ["LLMs","RAG","GraphRAG","LangChain","LangGraph","AutoGen","CrewAI","LlamaIndex","MCP","Embeddings","Vector Search","Prompt Engineering"],
    "Machine Learning": ["PyTorch","TensorFlow","Scikit-learn","XGBoost","Deep Learning","NLP","Fraud Detection","Credit Risk","Recommendation Systems","Anomaly Detection"],
    "Data & Distributed Systems": ["Python","SQL","PySpark","Apache Spark","Kafka","Kinesis","Delta Lake","Pandas","Snowflake","ETL/ELT"],
    "Cloud & MLOps": ["AWS SageMaker","Amazon Bedrock","Docker","Kubernetes","MLflow","Terraform","GitHub Actions","CI/CD","Model Monitoring","FastAPI"],
    "AI Governance & Explainability": ["Responsible AI","AI Governance","SHAP","LIME","PII Protection","Guardrails","RBAC","Auditability"]
}
scols = st.columns(2)
for i, (title, items) in enumerate(skills.items()):
    with scols[i % 2]:
        st.markdown(f"""
        <div class="card">
          <div class="card-title">{title}</div>
          <div style="margin-top:.7rem">{chips(items)}</div>
        </div>
        """, unsafe_allow_html=True)

# ---------- Experience ----------
st.markdown('<div id="experience"></div>', unsafe_allow_html=True)
section(
    "Experience",
    "Industry experience",
    "Selected highlights aligned to AI/ML engineering, GenAI, data platforms, and production systems."
)

experience = [
    ("Sr AI/ML Engineer","ADP","Jun 2025 – Present · Roseland, NJ",[
        "Architected end-to-end fraud detection pipelines using Python, PyTorch, and AWS SageMaker, improving fraud detection precision by 28%.",
        "Designed transformer-based anomaly detection models using TensorFlow and Spark ML, reducing false positives by 22%.",
        "Implemented MLOps pipelines using MLflow, GitHub Actions, and Terraform, accelerating model release cycles by 35%.",
        "Built enterprise RAG and GraphRAG solutions using Amazon Bedrock, OpenAI, vector databases, hybrid search, reranking, metadata filtering, and knowledge graphs."
    ]),
    ("AI/ML Engineer","Meta","Jan 2024 – May 2025 · Sunnyvale, CA",[
        "Built real-time fraud detection and distributed ML workflows using Python, Spark, Kafka, and AWS Kinesis.",
        "Developed retrieval-based AI pipelines and LLM-powered search enhancements for contextual query answering and product discovery.",
        "Designed and optimized zero-shot and few-shot prompt templates to improve LLM response quality and consistency."
    ]),
    ("Machine Learning Engineer","Chubb Insurance / Tetrasoft","Nov 2021 – Dec 2023 · India & USA",[
        "Designed ETL workflows in Databricks and PySpark for claims and eligibility data with strong data-quality validation.",
        "Built ML workflows with XGBoost, Logistic Regression, Scikit-learn, and Spark MLlib across large enterprise datasets.",
        "Productionized ML services with Docker, Kubernetes, AWS, CI/CD, and SHAP-based explainability."
    ]),
    ("Data Scientist / Python Developer","Paytm","Jul 2018 – Oct 2021 · Bengaluru, India",[
        "Built scalable Python, SQL, and ETL processing solutions for high-volume analytical and operational reporting.",
        "Designed modular ingestion, transformation, validation, and reporting layers for reliable downstream analytics.",
        "Optimized SQL queries, indexing strategies, and data-processing logic to improve throughput and maintainability."
    ]),
    ("Software Engineering Intern","Cashify","Aug 2016 – Jun 2017 · Remote, India",[
        "Built Python and Pandas preprocessing workflows for device resale and pricing analytics.",
        "Assisted with Scikit-learn ML prototypes, feature engineering, REST APIs, and SQL/Python data ingestion."
    ])
]

for role, company, meta, bullets in experience:
    bullet_html = "".join(f"<li>{b}</li>" for b in bullets)
    st.markdown(f"""
    <div class="card">
      <div class="card-title">{role}</div>
      <div class="exp-company">{company}</div>
      <div class="exp-meta">{meta}</div>
      <ul>{bullet_html}</ul>
    </div>
    """, unsafe_allow_html=True)

# ---------- Education ----------
st.markdown('<div id="education"></div>', unsafe_allow_html=True)
section("Education", "Education & certifications")
ec1, ec2 = st.columns(2)
with ec1:
    st.markdown("""
    <div class="card">
      <div class="card-title">Education</div>
      <p><b>Master’s Degree, Information Technology</b><br>University of North America · 2025</p>
      <p><b>Bachelor’s Degree, Mechanical Engineering</b><br>Tirumala Engineering College · 2017</p>
    </div>
    """, unsafe_allow_html=True)
with ec2:
    st.markdown("""
    <div class="card">
      <div class="card-title">Certifications</div>
      <p>Complete Computer Vision Bootcamp with PyTorch & TensorFlow · 2025</p>
      <p>Complete Data Science, Machine Learning, DL & NLP Bootcamp · 2025</p>
      <p>SQL (Advanced) · HackerRank</p>
    </div>
    """, unsafe_allow_html=True)

# ---------- Contact ----------
st.markdown('<div id="contact"></div>', unsafe_allow_html=True)
st.markdown("""
<div class="cta">
  <h3>Let’s build something impactful.</h3>
  <p>Open to Senior AI/ML Engineer, Generative AI Engineer, LLM Engineer, Applied AI Engineer, Machine Learning Engineer, and Agentic AI opportunities.</p>
</div>
""", unsafe_allow_html=True)

st.write("")
cc1, cc2, cc3 = st.columns(3)
with cc1:
    st.link_button("Email Me", "mailto:venugopalgattineni96@gmail.com", use_container_width=True)
with cc2:
    st.link_button("LinkedIn ↗", "https://www.linkedin.com/in/venugopalgattineni/", use_container_width=True)
with cc3:
    st.link_button("GitHub ↗", "https://github.com/venu1996-gv", use_container_width=True)

st.markdown("<hr>", unsafe_allow_html=True)
st.caption("© 2026 Venu Gopal Gattineni · Senior AI/ML Engineer")
