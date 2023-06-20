import CoverSection from '@/components/CoverSection/CoverSection';
import FeaturedPortfolio from '@/components/FeaturedPortfolio/FeaturedPortfolio';
import Technology from '@/components/Technology/Technology';
import Testimonial from '@/components/Testomonial/Testimonial';
import React from 'react';
import styles from "./Developer.module.css"
const page = () => {
    return (
        <div className={styles.developer}>
            <CoverSection/>
            <FeaturedPortfolio></FeaturedPortfolio>
            <Technology></Technology>
            <Testimonial></Testimonial>
        </div>
    );
};

export default page;