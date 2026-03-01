const translationsPL = {
    header: {
        name: "Filip Szemraj",
        title: "Full Stack Developer",
        location: "Bydgoszcz, Polska",
        phone: "+48 733 359 559",
        email: "filip.szemraj@onet.pl"
    },

    summary: "Zainteresowanie systemami rozproszonymi, skalowalnością oraz programowaniem współbieżnym rozwijam od początku pracy z Javą - jednym z moich pierwszych projektów była implementacja gry Texas Hold’em Poker z połączeniem UDP klient-server. Temat systemów rozproszonych pogłębiałem m.in. podczas pisania pracy inżynierskiej opartej na technologii blockchain i stale rozwijam poprzez pracę zawodową oraz świadome samokształcenie. Posiadam doświadczenie w Full-Stack Java/Angular development, obecnie koncentruję się na wzorcach architektonicznych (DDD, Event-Driven) oraz strategiach skalowalności frontendu, w tym podejściu Monorepo z zachowaniem niskiego stopnia zależności modułów, a więc i ich dobrze zdefiniowanych granic.",

    education: {
        title: "Wykształcenie",
        entries: [
            {
                period: "09/2021 – 02/2025",
                school: "Politechnika Świętokrzyska",
                detail: "Inżynier Informatyki <br>(Sieci Komputerowe)"
            },
            {
                period: "09/2017 – 06/2021",
                school: "Zespół Szkół nr 3 (THM), Ostrowiec Świętokrzyski",
                detail: "Profil: Technik Informatyk. <br>Odbyta praktyka zawodowa w Teva Operations Poland."
            }
        ]
    },

    sections: {
        experience: "Doświadczenie Zawodowe",
        projects: "Kluczowe Projekty",
        skills: "Umiejętności Techniczne",
        certifications: "Certyfikaty"
    },

    experience: [
        {
            title: "Full Stack Developer",
            company: "KAELMO",
            period: "Mar 2025 – Obecnie",
            details: [
                "Rozpocząłem od utrzymania i refaktoryzacji aplikacji legacy w Angularze oraz implementacji nowych funkcjonalności w backendzie Java, zapewniając stabilność systemu podczas krytycznych aktualizacji.",
                "Stopniowo przeniosłem skupienie na rozwój aplikacji mobilnych z użyciem Ionic, mając swój wkład w kształtowanie architektury.",
                "Zainicjowałem i obecnie odpowiadam za techniczną realizację migracji do architektury Nx Monorepo, co wiąże się z wydzielaniem logiki biznesowej do reużywalnych bibliotek. Działanie oparte na prywatnym Proof of Concept."
            ]
        }
    ],

    projects: [
        {
            title: "Playground - Multitenant E-commerce Platform",
            period: "Sie 2025 – Obecnie",
            link: "https://github.com/FilipSzemraj/isr-platform",
            jobRelated: false,
            paragraphs: [
                "Zaprojektowałem i rozwijam prywatny projekt ukierunkowany na Server-Side Rendering (Angular SSR), architekturę monorepo (Nx) oraz świadome stosowanie dobrych praktyk projektowych.",
                "Stworzyłem prototyp mechanizmu orkiestracji używając Spring Boot do wyzwalania generowania treści na żądanie (on-demand) dla instancji Angular SSR w oparciu o aktualizacje tenantów. Integracja z proxy i CDN pozwala na Incremental Server Rendering w ekosystemie Angulara.",
                "Aktualnie projektuję i implementuję moduł domenowy zgodnie z zasadami Domain-Driven Design (DDD).",
                "Chciałbym w ten sposób stworzyć rozwiązanie typu conditional pre-sale / crowdfunding - umożliwiające zbieranie minimalnej ilości zamówień, przed ich realizacją.",
                "Projekt ten posłużył jako poligon doświadczalny dla podejścia Monorepo (Nx). Wzorce zweryfikowane tutaj (współdzielone biblioteki, odseparowanie UI od logiki) zostały następnie zaproponowane i zaadaptowane w mojej pracy komercyjnej w KAELMO."
            ],
            tags: ["Java", "Spring Boot", "Docker", "Nx", "Nginx", "DDD", "Angular"]
        },
        {
            title: "End-to-End Strava Integration System",
            period: "Cze 2025 – Lip 2025",
            link: null,
            jobRelated: true,
            paragraphs: [
                "Rozszerzenie pełnej integracji śledzenia aktywności, zwiększając wsparcie z 4 do 50 typów aktywności.",
                "Zaimplementowałem bezpieczne wątkowo wzorce resiliency, w tym automatyczne ponawianie i obsługę rate-limit, aby zapewnić spójność danych podczas awarii zewnętrznych API.",
                "Wykorzystałem Swagger Codegen do zapewnienia zgodności kontraktów API między backendem a usługami zewnętrznymi oraz aby utrzymać rozwiązanie łatwym do rozszerzania o przyszłe aktywności.",
                "Zadanie to wymagało także stworzenia ekranów do aplikacji mobilnej / webowej oraz zintegrowania dwóch serwerów backend."
            ],
            tags: ["Java", "Spring Boot", "Angular", "Ionic", "Swagger Codegen", "MariaDB", "SQL"]

        },
        {
            title: "Blockchain Supply Chain System (Praca Inżynierska)",
            period: "Paź 2024 – Lut 2025",
            link: "https://github.com/FilipSzemraj/blockchain-biz-secure",
            jobRelated: false,
            paragraphs: [
                "Skonfigurowałem infrastrukturę prywatnego konsorcjum blockchain dla 3 firm i zautomatyzowałem proces jej uruchamiania za pomocą dedykowanych skryptów. Oprócz samej sieci opartej na Hyperledger Fabric, stworzyłem backend w Java Spring Boot odpowiadający za komunikację między aplikacją dApp (React) a węzłami (peers). Celem projektu była automatyzacja przepływu środków oraz weryfikacja pochodzenia towarów. Całość obejmuje również implementację smart kontraktów, usługi MSP. Miałem okazję zapoznać się z algorytmem konsensusu Raft, odpowiedzialnym w Hyperledger Fabric za bezpieczne porządkowanie transakcji oraz zapewnienie ostateczności i spójności rozproszonej księgi."
            ],
            tags: ["Hyperledger Fabric", "Smart Contracts (Chaincode)", "Java", "React", "Docker", "REST API", "gRPC", "Bash", "PKI", "Mockito"]
        },
        {
            title: "Więcej projektów dostępnych na GitHubie",
            period: "",
            link: "https://github.com/FilipSzemraj",
            jobRelated: false,
            paragraphs: [
                "Na przykład: gra <a href='https://github.com/FilipSzemraj/Texas-Holdem-Poker'>Texas Hold'em Poker</a> napisana w Javie, <a href='https://github.com/FilipSzemraj/online-shop'>strona internetowa</a> stworzona w React wykorzystująca animacje GSAP oraz backend w Javie do obliczania kosztów wydruków 3D, a także <a href='https://filipszemraj.github.io/websitePortfolio/'>portfolio internetowe</a> zbudowane z użyciem React i GSAP."
            ],
            tags: ["Java", "JavaFX", "Spring Boot", "React", "GSAP", "Docker"]
        },
    ],

    skills: {
        jobRelated: "Komercyjne",
        categories: [
            {
                title: "Języki i Frameworki",
                content: "Java, Spring Boot, Angular, TypeScript, Ionic, RxJs, SignalStore, Hibernate, SQL, React."
            },
            {
                title: "Architektura i Koncepcje",
                content: "Monorepo (Nx), REST, Microservice Principles, Domain-Driven Design (DDD), Event-Driven Architecture."
            },
            {
                title: "DevOps i Narzędzia",
                content: "Docker, Nginx, Git, Linux, Bash, Python, Liquibase, Swagger Codegen."
            },
            {
                title: "Blockchain i Bezpieczeństwo",
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
        title: "Portfolio Projektowe i Dokumentacja",
        description: "Wizualne podglądy i szczegółowe mapy drogowe architektury są dostępne online.",
        links: {
            portfolio: "→ Zobacz Portfolio Online",
            thesis: "→ Praca Dyplomowa na LinkedIn"
        }
    }
};
