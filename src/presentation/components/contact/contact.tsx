import { useContacts } from '@/presentation/hooks/use-contacts'
import '@/presentation/components/contact/contact.css'

export const Contact = () => {
    const { email, github, linkedin } = useContacts()

    return (
        <>
        <h3>## Contact</h3>
            <p>
              Feel free to reach out to me through any of the platforms below:
            </p>
            <ul className="contact-links">
              <li>- Email: <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></li>
              <li>- GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></li>
              <li>- LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></li>
            </ul>
        </>
    )
}