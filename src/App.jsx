import { useEffect, useState } from "react";

export default function Portfolio() {
  const profileImage = "/profile.jpg";
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const skills = {
    languages: ["Python", "SQL", "Bash", "Java"],
    ml: [
      "Fraud Detection",
      "Credit Risk Modeling",
      "Recommendation Systems",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
    ],
    frameworks: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"],
    data: ["Apache Spark", "Apache Kafka", "Apache Hive", "Delta Lake", "Pandas", "NumPy"],
    cloud: ["AWS SageMaker", "S3", "EC2", "Docker", "Kubernetes", "MLflow", "Terraform"],
    tools: ["FastAPI", "REST APIs", "Prometheus", "Grafana", "SHAP", "LIME", "GitHub Actions"],
  };

  const experience = [
    {
      role: "AI/ML Engineer",
      company: "PNC Financial Services",
      period: "Jun 2025 – Present",
      points: [
        "Built end-to-end fraud detection pipelines using Python, PyTorch, and AWS SageMaker for real-time banking transactions.",
        "Designed anomaly detection models and scalable inference APIs with FastAPI, Docker, and Kubernetes.",
        "Implemented MLOps workflows with MLflow, GitHub Actions, and Terraform for training, versioning, and deployment.",
      ],
    },
    {
      role: "Senior Machine Learning Engineer",
      company: "Capital One",
      period: "Aug 2022 – May 2023",
      points: [
        "Developed credit risk prediction models with XGBoost, Scikit-learn, and Python.",
        "Built large-scale data pipelines using Apache Spark, Airflow, and AWS S3.",
        "Improved production model monitoring and drift detection using Prometheus and Grafana.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      company: "Paytm",
      period: "Jul 2017 – Aug 2022",
      points: [
        "Built recommendation systems and fraud detection models for high-volume payment platforms.",
        "Developed real-time data pipelines with Kafka, Spark, and Hive for ML training and analytics.",
        "Containerized and deployed ML services using Docker and Kubernetes.",
      ],
    },
  ];

  const projects = [
    {
      title: "Fraud Detection Pipeline",
      desc: "Designed production-focused machine learning workflows for financial transaction monitoring using real-time data pipelines, model inference, and fraud analysis.",
      tags: ["Python", "PyTorch", "AWS SageMaker", "Kafka", "Spark"],
      cta: "Case Study",
    },
    {
      title: "Credit Risk Scoring System",
      desc: "Built scalable credit risk prediction solutions to support lending decisions with explainable AI and real-time APIs.",
      tags: ["XGBoost", "Scikit-learn", "FastAPI", "Docker", "Kubernetes"],
      cta: "Project Summary",
    },
    {
      title: "NLP Document Automation",
      desc: "Applied transformer-based NLP models to automate document classification and text-driven workflows.",
      tags: ["BERT", "Transformers", "NLP", "Python"],
      cta: "Case Study",
    },
    {
      title: "Recommendation Engine",
      desc: "Developed recommendation workflows for fintech and digital platforms using behavioral data and machine learning models.",
      tags: ["TensorFlow", "Recommendations", "Spark", "Analytics"],
      cta: "Coming Soon",
    },
  ];

  const theme = {
    bg: darkMode ? "bg-slate-950" : "bg-gradient-to-b from-slate-50 via-white to-slate-100",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    header: darkMode ? "border-slate-800 bg-slate-950/80" : "border-slate-200/70 bg-white/80",
    card: darkMode ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-white text-slate-900",
    subtext: darkMode ? "text-slate-400" : "text-slate-600",
    buttonPrimary: darkMode ? "bg-white text-slate-900" : "bg-slate-900 text-white",
    buttonSecondary: darkMode
      ? "border border-slate-700 bg-slate-900 text-white"
      : "border border-slate-300 bg-white text-slate-800",
    footer: darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white",
  };

  const SectionTitle = ({ eyebrow, title, subtitle }) => (
    <div className="mb-10">
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${theme.subtext}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className={`mt-3 max-w-2xl text-base leading-7 ${theme.subtext}`}>{subtitle}</p>}
    </div>
  );

  const Pill = ({ children }) => (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium shadow-sm ${
        darkMode
          ? "border border-slate-700 bg-slate-800 text-slate-200"
          : "border border-slate-200 bg-white text-slate-700"
      }`}
    >
      {children}
    </span>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card} ${className}`}
    >
      {children}
    </div>
  );

  const ActionButton = ({ href, children, primary = false }) => (
    <a
      href={href}
      target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
      rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
        primary ? theme.buttonPrimary : theme.buttonSecondary
      }`}
    >
      {children}
    </a>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.bg} ${theme.text}`}>
      <header className={`sticky top-0 z-50 border-b backdrop-blur ${theme.header}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Venu Gopal
          </a>

          <div className="flex items-center gap-4">
            <nav className={`hidden items-center gap-6 text-sm font-medium md:flex ${theme.subtext}`}>
              <a href="#about" className="hover:text-current">About</a>
              <a href="#skills" className="hover:text-current">Skills</a>
              <a href="#projects" className="hover:text-current">Case Studies</a>
              <a href="#experience" className="hover:text-current">Experience</a>
              <a href="#contact" className="hover:text-current">Contact</a>
            </nav>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition ${theme.buttonSecondary}`}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12 lg:py-24">
          <div>
            <p
              className={`mb-4 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] shadow-sm ${
                darkMode
                  ? "border border-slate-700 bg-slate-900 text-slate-300"
                  : "border border-slate-200 bg-white text-slate-500"
              }`}
            >
              AI / ML Portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Building intelligent systems for real business impact.
            </h1>

            <p className="mt-5 text-xl font-semibold">Venu Gopal Gattineni</p>
            <p className={`mt-2 text-base font-medium md:text-lg ${theme.subtext}`}>
              AI/ML Engineer · Machine Learning Developer · Data-Driven Problem Solver
            </p>

            <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${theme.subtext}`}>
              AI/ML Engineer with 6+ years of experience building scalable machine learning
              solutions across fintech and digital payments, with strong focus on fraud detection,
              credit risk scoring, NLP, recommendation systems, MLOps, and real-time inference.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ActionButton href="/resume.pdf" primary>
                Download Resume
              </ActionButton>
              <ActionButton href="mailto:gattinenivenugopal2@gmail.com">
                Contact Me
              </ActionButton>
              <ActionButton href="https://github.com/venu1996-gv">
                GitHub
              </ActionButton>
              <ActionButton href="https://www.linkedin.com/in/venu-gopal-gattineni-942246263">
                LinkedIn
              </ActionButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="p-5">
                <p className={`text-sm uppercase tracking-widest ${theme.subtext}`}>Experience</p>
                <p className="mt-2 text-3xl font-bold">6+</p>
                <p className={`mt-1 text-sm ${theme.subtext}`}>Years in AI/ML engineering</p>
              </Card>
              <Card className="p-5">
                <p className={`text-sm uppercase tracking-widest ${theme.subtext}`}>Focus</p>
                <p className="mt-2 text-xl font-bold">Fraud · NLP · Risk</p>
                <p className={`mt-1 text-sm ${theme.subtext}`}>High-impact business use cases</p>
              </Card>
              <Card className="p-5">
                <p className={`text-sm uppercase tracking-widest ${theme.subtext}`}>Stack</p>
                <p className="mt-2 text-xl font-bold">AWS · Docker · MLflow</p>
                <p className={`mt-1 text-sm ${theme.subtext}`}>Production-ready ML systems</p>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <div className={`w-full max-w-md rounded-[2rem] border p-4 shadow-2xl ${theme.card}`}>
              <img
                src={profileImage}
                alt="Venu Gopal Gattineni"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle
          eyebrow="About"
          title="Turning data into practical intelligence"
          subtitle="I enjoy designing machine learning systems that solve real-world business problems."
        />
        <Card className="p-8 md:p-10">
          <p className={`text-lg leading-8 ${theme.subtext}`}>
            My background includes fraud detection, credit risk scoring, recommendation systems,
            customer intelligence, NLP automation, and MLOps. I work across the full machine
            learning lifecycle, from data preparation and feature engineering to deployment,
            monitoring, and continuous optimization in production environments.
          </p>
        </Card>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A mix of machine learning, engineering, cloud, and production system skills."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([key, values]) => (
            <Card key={key} className="p-6">
              <h3 className="mb-4 text-xl font-semibold capitalize">{key}</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Case Studies"
          title="Professional AI/ML work highlights"
          subtitle="Experience-based portfolio case studies built from real industry work."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="p-7">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className={`mt-4 leading-7 ${theme.subtext}`}>{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
              <button
                className={`mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-md transition hover:-translate-y-0.5 ${theme.buttonPrimary}`}
              >
                {project.cta}
              </button>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Experience"
          title="Industry experience"
          subtitle="Building scalable machine learning systems across banking, finance, and digital platforms."
        />
        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={job.company + job.role} className="p-7">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className={`text-lg ${theme.subtext}`}>{job.company}</p>
                </div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${theme.subtext}`}>
                  {job.period}
                </p>
              </div>
              <ul className={`mt-5 space-y-3 ${theme.subtext}`}>
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${darkMode ? "bg-white" : "bg-slate-900"}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Education"
          title="Education & Certifications"
          subtitle="Formal education and continuous learning in AI, ML, and applied engineering."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-7">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className={`mt-5 space-y-5 ${theme.subtext}`}>
              <div>
                <p className="font-semibold text-current">Master’s in Information Technology</p>
                <p>University of North America</p>
                <p className="text-sm">Graduated: June 2025</p>
              </div>
              <div>
                <p className="font-semibold text-current">Bachelor’s in Mechanical Engineering</p>
                <p>Tirumala Engineering College</p>
                <p className="text-sm">Graduated: December 2017</p>
              </div>
            </div>
          </Card>

          <Card className="p-7">
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <ul className={`mt-5 space-y-3 ${theme.subtext}`}>
              <li>Complete Computer Vision Bootcamp with PyTorch & TensorFlow</li>
              <li>Complete Data Science, Machine Learning, DL, NLP Bootcamp</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-14 text-center text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Let’s build something impactful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            I’m open to AI/ML Engineer, Machine Learning Developer, and data-driven engineering opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionButton href="/resume.pdf" primary>
              Download Resume
            </ActionButton>
            <a
              href="mailto:gattinenivenugopal2@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href="https://github.com/venu1996-gv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className={`border-t ${theme.footer}`}>
        <div
          className={`mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10 lg:px-12 ${theme.subtext}`}
        >
          <p>© 2026 Venu Gopal Gattineni. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/venu1996-gv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-current"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/venu-gopal-gattineni-942246263"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-current"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gattinenivenugopal2@gmail.com"
              className="inline-flex items-center gap-1 hover:text-current"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}