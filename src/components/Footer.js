// Github, linkedin, email
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import initFontAwesome from '../fontawesome';

function Footer() {
    initFontAwesome();
    return (
    <ul>
        <li>
            <a href="github.com/irvingjem"> <FontAwesomeIcon icon={["fab", "github"]} /></a>
        </li>
    </ul>
    );
    }
export default Footer;