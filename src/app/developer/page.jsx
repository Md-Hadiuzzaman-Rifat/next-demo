import CoverSection from '@/components/CoverSection/CoverSection';
import FeaturedPortfolio from '@/components/FeaturedPortfolio/FeaturedPortfolio';
import Technology from '@/components/Technology/Technology';
import React from 'react';

const page = () => {
    return (
        <div>
            <CoverSection/>
            <FeaturedPortfolio></FeaturedPortfolio>
            <Technology></Technology>
        </div>
    );
};

export default page;