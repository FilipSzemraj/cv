const translationsEN = {
    header: {
        name: "Filip Szemraj",
        title: "Software Developer",
        location: "Bydgoszcz, Poland",
        phone: "+48 733 359 559",
        email: "filip.szemraj@onet.pl"
    },

    summary: "Software developer with a strong interest in distributed and scalable systems, which began with my engineering thesis and has been deepening through professional work and deliberate self-study. Experienced in full-stack Java/Angular development, currently focusing on architecture patterns (DDD, Event-Driven) and frontend scalability strategies, including monorepos with low coupling and well-defined module boundaries.",

    education: {
        title: "Education",
        entries: [
            {
                period: "09/2021 – 02/2025",
                school: "Kielce University of Technology",
                detail: "BSc in Computer Science (Computer Networks)"
            },
            {
                period: "09/2017 – 06/2021",
                school: "Technical Secondary School No. 3, Ostrowiec Świętokrzyski",
                detail: "Internship at Teva Operations Poland"
            }
        ]
    },

    sections: {
        experience: "Professional Experience",
        projects: "Key Projects",
        skills: "Technical Skills",
        certifications: "Certifications"
    },

    experience: [
        {
            title: "Full Stack Developer",
            company: "KAELMO",
            period: "Mar 2025 – Present",
            details: [
                "Started as a Junior Developer responsible for maintaining and refactoring an existing Angular codebase and implementing feature improvements in the Java backend.",
                "Gradually shifted focus to mobile development using Ionic and took responsibility for frontend architecture decisions.",
                "Currently doing a refactor to extract business logic into reusable libraries within an Nx monorepo."
            ]
        }
    ],

    projects: [
        {
            title: "Multitenant E-commerce Platform (ISR System)",
            period: "Aug 2025 – Present",
            paragraphs: [
                "I started this project with the goal of building a multitenant platform based on Incremental Static Regeneration (ISR). I designed an infrastructure with an Nginx gateway acting as a proxy: in the main scenario it serves cached static files directly from a CDN, while also forwarding REST API requests to a Spring Boot instance.",
                "The platform includes an orchestration mechanism that can trigger regeneration of tenant content. In the happy path, when an administrator updates content, scaled-to-zero Angular SSR renderer instances running on Node.js are started to generate new static files, which are then pushed to the CDN by the orchestrator. All components are containerized.",
                "Later, I came up on Domain-Driven Design (DDD) and reconsidered the goal: instead, I now focus on creating the first platform module covering flash-sale–type logic for the frontends, maybe converting it to SaaS product. I want this module to be DDD-based to avoid costly design mistakes.",
                "This project also became the foundation for a monorepo approach in my company. I learned and validated the shared-dependencies concept here, proposed it as a solution, and it is now used in a project that I currently lead."
            ]
        },
        {
            title: "Frontend Monorepo Refactoring",
            period: "Nov 2025 – Present",
            paragraphs: [
                "Extracting business logic into reusable libraries within an Angular monorepo to migrate existing applications and standardize the development of future instances and the maintenance of current applications across the company ecosystem."
            ]
        },
        {
            title: "End-to-End Strava Integration System",
            period: "Jun 2025 – Jul 2025",
            paragraphs: [
                "Extending the full-cycle activity tracking integration. Implemented a thread-safe elastic pool of HTTP clients using ReentrantLock and leveraged Swagger Codegen for API consistency."
            ]
        },
        {
            title: "Blockchain Supply Chain System (Bachelor Thesis)",
            period: "Oct 2024 – Feb 2025",
            paragraphs: [
                "Built a private permissioned blockchain consortium (Hyperledger Fabric) to automate cash flow and ensure goods provenance. Implemented Smart Contracts, MSP, Raft consensus, and a decentralized web application."
            ]
        }
    ],

    skills: {
        jobRelated: "Kaelmo related",
        categories: [
            {
                title: "Languages & Frameworks",
                content: "Java, Spring Boot, Angular, TypeScript, Ionic, RxJs, SignalStore, Hibernate, SQL, React."
            },
            {
                title: "Architecture & Concepts",
                content: "REST, DDD, CQRS, Event-Driven Architecture, Microservice principles, Monorepo (Nx), Module Federation."
            },
            {
                title: "DevOps & Scripting",
                content: "Docker, Nginx, Git, Linux, Bash, Python, Liquibase, Swagger Codegen."
            },
            {
                title: "Blockchain & Security",
                content: "Hyperledger Fabric, Smart Contracts, Consensus Algorithms (Raft), PKI, JWT, OAuth2."
            }
        ]
    },

    certifications: [
        {
            name: "CCNA: Network Security",
            year: "(2025)",
            link: "https://www.credly.com/badges/e6b9f3ae-0af2-4dec-86a3-c748d9642028/linked_in_profile"
        },
        {
            name: "CCNA: Enterprise Networking, Security, and Automation",
            year: "(2024)",
            link: "https://www.credly.com/badges/48325c81-9f2b-43ce-86aa-cc2a59be9801/linked_in_profile"
        },
        {
            name: "CCNA: Introduction to Networks",
            year: "(2023)",
            link: "https://www.credly.com/badges/0528f1c6-a86b-4b15-b5ad-2fcda5e7ed35/linked_in_profile"
        },
        {
            name: "Hyperledger Fabric 2.x Network Design",
            year: "(2025)",
            link: "https://www.udemy.com/certificate/UC-bd1d9673-f74b-4d9e-bb78-53c7469c6d94/"
        }
    ],

    portfolio: {
        title: "Project Portfolio & Documentation",
        description: "Visual previews and detailed architectural roadmaps are available online.",
        links: {
            portfolio: "→ View Live Portfolio",
            thesis: "→ Thesis on LinkedIn"
        }
    }
};
