export default function Portfolio() {
  const profileImage = "/profile.jpg";

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

  const SectionTitle = ({ children }) => (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-slate-900" />
    </div>
  );

  const Pill = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              AI / ML Portfolio
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Venu Gopal Gattineni
            </h1>
            <p className="mt-4 text-xl font-semibold text-slate-700">
              AI/ML Engineer | Machine Learning Developer | Data-Driven Problem Solver
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              AI/ML Engineer with 6+ years of experience building scalable machine learning
              solutions across fintech and digital payments. My work focuses on fraud detection,
              credit risk scoring, NLP, recommendation systems, MLOps, and real-time model inference.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="mailto:gattinenivenugopal2@gmail.com"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/venu1996-gv"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/venu-gopal-gattineni-942246263"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                View LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-white p-4 shadow-2xl ring-1 ring-slate-200">
              <img
                src={profileImage}
                alt="Venu Gopal Gattineni"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
                <p className="text-sm uppercase tracking-widest text-slate-300">Experience</p>
                <p className="mt-3 text-4xl font-bold">6+ Years</p>
                <p className="mt-2 text-sm text-slate-300">
                  AI/ML systems across fintech and payment platforms
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-widest text-slate-500">Specialties</p>
                <p className="mt-3 text-xl font-bold">Fraud, NLP, Risk, Recsys</p>
                <p className="mt-2 text-sm text-slate-600">
                  Production machine learning with real business impact
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-widest text-slate-500">Cloud & MLOps</p>
                <p className="mt-3 text-xl font-bold">AWS • Docker • K8s • MLflow</p>
                <p className="mt-2 text-sm text-slate-600">
                  Model training, deployment, monitoring, and lifecycle automation
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-widest text-slate-500">Location</p>
                <p className="mt-3 text-xl font-bold">Pennsylvania, USA</p>
                <p className="mt-2 text-sm text-slate-600">Open to remote opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <SectionTitle>About Me</SectionTitle>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg leading-8 text-slate-700">
            I enjoy building machine learning systems that solve real business problems. My background includes fraud detection, credit risk scoring, customer intelligence, NLP automation, and recommendation engines. I work across the full pipeline from data preparation and feature engineering to model deployment, monitoring, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([key, values]) => (
            <div key={key} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="mb-4 text-xl font-semibold capitalize">{key}</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <SectionTitle>Professional Case Studies</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
              <button className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-95">
                {project.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.company + job.role} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="text-lg text-slate-600">{job.company}</p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {job.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-slate-700">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <SectionTitle>Education & Certifications</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="mt-5 space-y-4 text-slate-700">
              <div>
                <p className="font-semibold">Master’s in Information Technology</p>
                <p>University of North America</p>
                <p className="text-sm text-slate-500">Graduated: June 2025</p>
              </div>
              <div>
                <p className="font-semibold">Bachelor’s in Mechanical Engineering</p>
                <p>Tirumala Engineering College</p>
                <p className="text-sm text-slate-500">Graduated: December 2017</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>Complete Computer Vision Bootcamp with PyTorch & TensorFlow</li>
              <li>Complete Data Science, Machine Learning, DL, NLP Bootcamp</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 lg:px-12">
          <h2 className="text-3xl font-bold">Let’s Build Something Impactful</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            I’m open to AI/ML Engineer, Machine Learning Developer, and data-driven engineering opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm"
            >
              Download Resume
            </a>
            <a
              href="mailto:gattinenivenugopal2@gmail.com"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Email Me
            </a>
            <a
              href="https://github.com/venu1996-gv"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}