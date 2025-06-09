import { useContacts } from '@/presentation/hooks/use-contacts'
import '@/presentation/components/contact/contact.css'

export const Contact = () => {
    const { email, github, linkedin } = useContacts()

    return (
        <div className="terminal-section">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button"></span>
                    <span className="terminal-button"></span>
                    <span className="terminal-button"></span>
                </div>
                <div className="terminal-title">contact.sh</div>
            </div>
            <div className="terminal-body">
                <div className="terminal-content">
                    <h3>## Contact</h3>
                    <p>Feel free to reach out through any of these platforms:</p>
                    <ul className="contact-links">
                        <li>
                            <span className="contact-label">Email:</span>
                            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                {email}
                            </a>
                        </li>
                        <li>
                            <span className="contact-label">GitHub:</span>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                {github}
                            </a>
                        </li>
                        <li>
                            <span className="contact-label">LinkedIn:</span>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                {linkedin}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}