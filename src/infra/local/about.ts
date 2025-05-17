export const getAbout = () => {
    return {
        title: '# About Me',
        description: 'Backend Engineer with expertise in designing and building robust, scalable systems. My focus is on creating efficient, maintainable solutions for complex problems.',
        skills: [
            'Backend Development',
            'System Design',
            'Scalability',
            'Performance Optimization',
        ],
        technologies: {
            languages: {
                name: '###Languages',
                items: [
                    'JavaScript',
                    'TypeScript',
                    'Python',
                ]
            },
            frameworks: {
                name: '### Frameworks',
                items: [
                    'JavaScript',
                    'TypeScript',
                    'Python',
                ]
            },
            databases: {
                name: '### Databases',
                items: [
                    'Node.js',
                    'Express',
                    'Django',
                ]
            },
            tools: {
                name: '### Tools',
                items: [
                    'Docker',
                    'CI/CD',
                    'Git',
                ]
            },
        },
        experience: {
            title: '## Work Experience',
            items: [
                {
                    company: 'Tractian',
                    position: 'Senior Backend Engineer',
                    interval: 'Mar/2025 - Present',
                    description: '',
                    accomplishments: [
                        'Developed and maintained the backend of the Tractian platform, a SaaS for industrial equipment maintenance.',
                        'Worked on the development and refactoring of the API for the web app, which is used by the Tractian technicians to manage the equipment, and maintance.',
                    ],
                    technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Docker', 'CI/CD', 'Git'],
                },
                {
                    company: 'Uol EdTech - Passei Direto',
                    position: 'Technical Leader Engineer',
                    interval: 'Nov/2022 - Mar/2025',
                    scope: 'Monetization of an online learning platform',
                    description: 'I mentor less-experienced engineers, review strategy, implementation quality, and code performance, produce detailed architecture plans complete with estimates, dependencies, and risk analyses, and drive continuous process improvements.',
                    accomplishments: [
                        'Planned, managed, and implemented a new structure for product and access delivery',
                        'Led migration from legacy subscription providers to a standardized architecture',
                        'Upgraded native payment integrations (Apple StoreKit, Google Billing)',
                        'Boosted new-user conversion via a Referral Program and other acquisition mechanisms',
                        'Built internal tools to democratize creation and maintenance of acquisition flows',
                        'Implemented an observability stack and engineering-quality metrics',
                        'Optimized performance of core projects',
                        'Co-planned and executed A/B tests across the acquisition, retention, and conversion funnel',
                        'Implemented a new user acquisition flow using Google Play Trials',
                        'Planned and implemented an architecture for integrating multiple subscription providers',
                        'Planned and managed the implementation of a reusable and scalable content restriction structure, optimized and decoupled',
                        'Standardized project structure by migrating infrastructure, quality, and logging layers',
                        'Identified and proposed improvements in development processes',
                        'Implemented a testing process within the team focused on continuous software improvement',
                        'Planned and implemented new user retention mechanisms',
                    ],
                    technologies: ['Node.js', 'TypeScript', 'Restify', 'MySQL', 'Docker', 'CI/CD', 'Git', 'Vue.js', 'AWS'],
                }, {
                    company: 'Méliuz',
                    position: 'Software Engineer',
                    interval: 'Sep/2021 - Nov/2022',
                    scope: 'Development of security and compliance features for the a banking platform',
                    description: 'Software Engineer on the Account & Security team, working within a service-oriented architecture—using Python/Flask, Node.js/Express, and React / React Native—to ship features that strengthen the user ecosystem and safeguard financial transactions.',
                    accomplishments: [
                        "Implemented image-based user-identity validation via native bridges and external APIs",
                        "Developed robust transaction-validation logic",
                        "Built a secondary registration flow for phone-number verification",
                        "Planned and delivered a scalable, multi-platform notification architecture integrated with multiple delivery providers",
                        "Refactored monolithic code by extracting domain-specific services for better performance",
                        "Established observability metrics to provide real-time insight into system health"
                    ],
                    technologies: ['Python', 'Flask', 'Node.js', 'Express', 'React', 'React Native', 'AWS', 'CI/CD', 'Git', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'CI/CD', 'Git'],
                },
                { 
                    company: 'Farme',
                    position: 'Software Engineer',
                    interval: 'Jan/2021 - Sep/2021',
                    scope: 'Development of a platform for the management of a farm',
                },
                { 
                    company: 'Raro Labs',
                    position: 'Software Engineer',
                    interval: 'Jan/2021 - Sep/2021',
                    scope: 'Development of a platform for the management of a farm',
                },
                {
                    company: 'Avenue Code',
                    position: 'Software Engineer',
                    interval: 'Jan/2021 - Sep/2021',
                    scope: 'Development of a platform for the management of a farm',
                },
                {
                    company: 'Enacom',
                    position: 'Software Engineer',
                    interval: 'Jan/2021 - Sep/2021',
                    scope: 'Development of a platform for the management of a farm',
                }
            ]
        },
        education: [
            {
                name: 'Bachelor of Science in Computer Engineering',
                institution: 'Centro Federal de Educação Tecnológica de Minas Gerais',
                period: '2019 - 2023',
            },
        ],
    }
}