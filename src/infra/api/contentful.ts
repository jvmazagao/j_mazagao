// src/services/contentfulService.js
import { createClient } from 'contentful';

type TechnologyGroup = {
    name: string;
    items: string[];
};

type ExperienceItem = {
    company: string;
    position: string;
    interval: string;
    scope: string;
};

export type AboutPageContent = {
    title: string;
    description: string;
    skills: string[];
    technologies: {
        languages: TechnologyGroup;
        databases: TechnologyGroup;
        tools: TechnologyGroup;
    };
    experience: {
        title: string;
        items: ExperienceItem[];
    };
};

export type About = {
    about: AboutPageContent;
}

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getAboutPageContent = async (): Promise<About> => {
    console.log(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
    console.log(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)
    try {
        const entries = await client.getEntries({
            content_type: 'aboutPage',
            limit: 1,
        });

        if (entries.items.length > 0) {
            const fields = entries.items[0].fields as About;
            return fields;
        }

        // Fallback content if CMS is unavailable
        return {
            about: {
                title: "About Me",
                description: "Loading...",
                skills: ["JavaScript", "React", "Node.js"],
                technologies: {
                    languages: {
                        name: "Languages",
                        items: ["JavaScript", "TypeScript", "Python"]
                    },
                    databases: {
                        name: "Databases",
                        items: ["PostgreSQL", "MongoDB", "Redis"]
                    },
                    tools: {
                        name: "Tools",
                        items: ["Git", "Docker", "AWS"]
                    }
                },
                experience: {
                    title: "Experience",
                    items: [
                        {
                            company: "Example Company",
                            position: "Software Engineer",
                            interval: "2020 - Present",
                            scope: "Full-stack development"
                        }
                    ]
                }
            }
        };
    } catch (error) {
        console.error('Error fetching content:', error);
        // Return fallback content
        return {
            about: {
                title: "About Me",
                description: "Content temporarily unavailable",
                skills: ["JavaScript", "React", "Node.js"],
                technologies: {
                    languages: {
                        name: "Languages",
                        items: ["JavaScript", "TypeScript", "Python"]
                    },
                    databases: {
                        name: "Databases",
                        items: ["PostgreSQL", "MongoDB", "Redis"]
                    },
                    tools: {
                        name: "Tools",
                        items: ["Git", "Docker", "AWS"]
                    }
                },
                experience: {
                    title: "Experience",
                    items: [
                        {
                            company: "Example Company",
                            position: "Software Engineer",
                            interval: "2020 - Present",
                            scope: "Full-stack development"
                        }
                    ]
                }
            }
        };
    }
};