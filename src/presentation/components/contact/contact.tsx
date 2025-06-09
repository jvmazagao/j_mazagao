import { useContacts } from '@/presentation/hooks/use-contacts'
import '@/presentation/components/contact/contact.css'

export const Contact = () => {
    const contacts = useContacts()

    return (
        <div className="terminal-section" id="contact">
            <div className="terminal-header">
                <div className="terminal-title">contact.sh</div>
            </div>
            <div className="terminal-body">
                <div className="terminal-content">
                    <p className="prompt">
                        <span className="prompt-user">j_mazagao@server</span>:
                        <span className="prompt-path">~</span>$ cat contacts.txt
                    </p>
                    <ul className="contact-links">
                        {contacts.map((contact) => (
                            <li key={contact.title}>
                                <a href={contact.value} target="_blank" rel="noopener noreferrer">
                                    {contact.icon} {contact.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
