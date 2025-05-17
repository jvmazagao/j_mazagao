import './experience.css';

export type Props = {
    company: string;
    position: string;
    interval: string;
    accomplishments?: string[];
    technologies?: string[];
}

export const Experience = (props: Props) => {
    return (
        <div className="experience">
            <div className="experience-header">
                <span className="company">{props.company}</span>
                <span className="duration">{props.interval}</span>
            </div>
            <p className="position">{props.position}</p>
            <ul>
                { props?.accomplishments?.map((line) => (
                    <li key={line}>- {line}</li>
                ))}
            </ul>
            <div className="technologies">
                {props?.technologies?.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    )
}