import { useContacts } from '@/presentation/hooks/use-contacts'
import '@/presentation/components/contact/contact.css'

export const Contact = () => {
    const contacts = useContacts()

    return (
        <div className="terminal-section">
            <div className="terminal-header">
                <div className="terminal-title">contact.sh</div>
            </div>
            <div className="terminal-body">
                <div className="terminal-content">
                    <ul className="contact-links">
                        {contacts.map((contact) => (
                            <li key={contact.title}>
                                <span className="contact-label">{contact.title}:</span>
                                <a href={contact.value} target="_blank" rel="noopener noreferrer">
                                    {contact.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}