import { Link } from "react-router";
import styles from "./NotFound.module.css";

function NotFound(){
    return (
        <div id={styles.notFound}>
            <div id={styles.container}>
                <Link to="/converter">Click Me ..</Link>
            </div>
            
        </div>
    )
}

export default NotFound;