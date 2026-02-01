const translationsPL = {
    header: {
        name: "Filip Szemraj",
        title: "Software Developer",
        location: "Bydgoszcz, Polska",
        phone: "+48 733 359 559",
        email: "filip.szemraj@onet.pl"
    },

    summary: "Programista z silnym zainteresowaniem systemami rozproszonymi i skalowalnymi, które rozpoczęło się od pracy inżynierskiej i pogłębia poprzez pracę zawodową oraz samodzielną naukę. Doświadczenie w full-stack developmencie Java/Angular, obecnie skupiam się na wzorcach architektonicznych (DDD, Event-Driven) oraz strategiach skalowalności frontendu, w tym monorepozytoriach o niskim sprzężeniu i dobrze zdefiniowanych granicach modułów.",

    education: {
        title: "Wykształcenie",
        entries: [
            {
                period: "09.2021 – 02.2025",
                school: "Politechnika Świętokrzyska",
                detail: "Informatyka (Teleinformatyka)"
            },
            {
                period: "09.2017 – 06.2021",
                school: "Technikum nr. 3 (Ostrowiec Św.)",
                detail: "Staż: Teva Operations Poland"
            }
        ]
    },

    sections: {
        experience: "Doświadczenie zawodowe",
        projects: "Kluczowe projekty",
        skills: "Umiejętności techniczne",
        certifications: "Certyfikaty"
    },

    experience: [
        {
            title: "Full Stack Developer",
            company: "KAELMO",
            period: "Mar 2025 – Obecnie",
            details: [
                "Rozpocząłem jako Junior Developer odpowiedzialny za utrzymanie i refaktoryzację istniejącej bazy kodu Angular oraz implementację ulepszeń funkcjonalnych w backendzie Java.",
                "Stopniowo przesunąłem fokus na rozwój mobilny wykorzystując Ionic i przejąłem odpowiedzialność za decyzje architektoniczne frontendu.",
                "Obecnie przeprowadzam refaktor w celu wydzielenia logiki biznesowej do bibliotek wielokrotnego użytku w ramach monorepozytorium Nx."
            ]
        }
    ],

    projects: [
        {
            title: "Wielodostępna platforma e-commerce (System ISR)",
            period: "Wrz 2025 – Obecnie",
            paragraphs: [
                "Rozpocząłem ten projekt z celem stworzenia wielodostępnej platformy opartej na Incremental Static Regeneration (ISR). Zaprojektowałem infrastrukturę z bramą Nginx działającą jako proxy: w głównym scenariuszu serwuje zbuforowane pliki statyczne bezpośrednio z CDN, jednocześnie przekazując zapytania REST API do instancji Spring Boot.",
                "Platforma zawiera mechanizm orkiestracji, który może wyzwolić regenerację treści najemców. W optymistycznym scenariuszu, gdy administrator aktualizuje treść, skalowane do zera instancje Node z Angular SSR są uruchamiane w celu wygenerowania nowych plików statycznych, które następnie są wysyłane do CDN przez orkiestratora. Wszystkie komponenty są konteneryzowane.",
                "Później natknąłem się na Domain-Driven Design (DDD) i przemyślałem cel: zamiast tego, teraz skupiam się na stworzeniu pierwszego modułu platformy obejmującego logikę typu flash-sale dla frontendów, być może przekształcając to w produkt SaaS. Chcę, aby ten moduł był oparty na DDD, aby uniknąć kosztownych błędów projektowych.",
                "Ten projekt stał się również fundamentem dla podejścia monorepozytorium w mojej firmie. Poznałem i zwalidowałem koncepcję wspólnych zależności tutaj, zaproponowałem to jako rozwiązanie i jest teraz używane w projekcie, którym obecnie kieruję."
            ]
        },
        {
            title: "Refaktoryzacja frontendowego monorepozytorium",
            period: "Lis 2025 – Obecnie",
            paragraphs: [
                "Wydzielanie logiki biznesowej do bibliotek wielokrotnego użytku w ramach monorepozytorium Angular w celu migracji istniejących aplikacji i standaryzacji rozwoju przyszłych instancji oraz utrzymania obecnych aplikacji w ekosystemie firmy."
            ]
        },
        {
            title: "System integracji Strava end-to-end",
            period: "Cze 2025 – Lip 2025",
            paragraphs: [
                "Rozszerzenie pełnego cyklu integracji śledzenia aktywności. Zaimplementowanie bezpiecznej wielowątkowej elastycznej puli klientów HTTP używając ReentrantLock oraz wykorzystanie Swagger Codegen dla spójności API."
            ]
        },
        {
            title: "System łańcucha dostaw oparty na blockchain (Praca inżynierska)",
            period: "Paź 2024 – Lut 2025",
            paragraphs: [
                "Zbudowanie prywatnego konsorcjum blockchain z uprawnieniami (Hyperledger Fabric) w celu automatyzacji przepływu gotówki i zapewnienia pochodzenia towarów. Zaimplementowanie Smart Contracts, MSP, konsensusu Raft oraz zdecentralizowanej aplikacji webowej."
            ]
        }
    ],

    skills: {
        jobRelated: "w ramach Kaelmo",
        categories: [
            {
                title: "Języki i frameworki",
                content: "Java, Spring Boot, Angular, TypeScript, Ionic, RxJs, SignalStore, Hibernate, SQL, React."
            },
            {
                title: "Architektura i koncepcje",
                content: "REST, DDD, CQRS, Event-Driven Architecture, Zasady mikroserwisów, Monorepo (Nx), Module Federation."
            },
            {
                title: "DevOps i skryptowanie",
                content: "Docker, Nginx, Git, Linux, Bash, Python, Liquibase, Swagger Codegen."
            },
            {
                title: "Blockchain i bezpieczeństwo",
                content: "Hyperledger Fabric, Smart Contracts, Algorytmy konsensusu (Raft), PKI, JWT, OAuth2."
            }
        ],
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
        title: "Portfolio projektów i dokumentacja",
        description: "Wizualne podglądy i szczegółowe mapy architektoniczne dostępne online.",
        links: {
            portfolio: "→ Zobacz portfolio",
            thesis: "→ Praca inżynierska na LinkedIn"
        }
    }
};
