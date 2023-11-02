import { Box } from '@mui/material'
import React, { ReactNode, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Slider from 'react-slick';
// const Slider = dynamic(() => import('react-slick'), {
//     loading: () => <p>Loading...</p>,
// })

interface Props {
    children?: ReactNode;
    imageEl?: ReactNode
}

const ContentSection = ({ children, imageEl }: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => (
            <div className="ft-slick-dots-custom">
                <div className="active" />
            </div>
        )
    };
    return (
        <>
            {imageEl}
            <Suspense fallback={<p>Loading weather...</p>}>
                <Box component={'section'}>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <Slider {...settings}>
                            {children}
                        </Slider>
                    </Box>
                    <Box display={{ xs: 'none', md: 'block' }}>
                        {children}
                    </Box>
                </Box>
            </Suspense>
        </>

    )
}

export default ContentSection