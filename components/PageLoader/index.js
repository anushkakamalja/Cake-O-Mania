import styles from './styles.module.css';

const PageLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className={styles.time} />
        </div>
    );
};

export default PageLoader;
