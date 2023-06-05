import styles from "./Portfolio.module.css";

const layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.layout_heading}>Our Works</h1>
            {children}
        </div>
    );
};

export default layout;