import '@/presentation/components/navigation/Navigation.css';
import { useAnalytics } from '@/analytics/react/hooks/use-analytics';

const Navigation = () => {
    const { trackEvent } = useAnalytics();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, buttonName: string) => {
        e.preventDefault();
        trackEvent('navigation_click', {
            page_location: 'home',
            button_name: buttonName
        });
        document.getElementById(buttonName)?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
       <nav className="navigation">
        <a href="#about" onClick={(e) => handleClick(e, 'about')}>whoami</a>
        <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>projects</a>
        <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>contact</a>
       </nav>
    )
}

export default Navigation;
