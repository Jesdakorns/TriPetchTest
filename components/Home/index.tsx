'use client'

import React, { useEffect } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Content from '@/components/Home/views/Content'
import Header from '@/components/Home/views/Header'
import ContentSection from '@/components/Home/views/ContentSection'
import { TEXT } from '@/utils'
import AthletsImage from '@/components/Home/views/AthletsImage'
import PlayersImage from '@/components/Home/views/PlayersImage'
import ImageBox from '@/components/Home/views/ImageBox'
import { themeMui } from '@/utils/theme'
import { gsap } from "gsap";

const Home = () => {
    const matches = useMediaQuery('(max-width:1000px)');
    const matchesTablet = useMediaQuery(themeMui.breakpoints.up('md'));

    useEffect(() => {
        const gsapEl = gsap.timeline();
        gsapEl.fromTo(".box-title", { opacity: 0, scale: 0 }, { scale: 1, opacity: 1, delay: .5, ease: "elastic.inOut(1.7,0.75)" })
            .fromTo(".box-content-bg-0", { x: 150, opacity: 0 }, { x: 0, opacity: 1, delay: 0.1, duration: 0.6, ease: "power1.out" })
            .fromTo(".box-content-bg-1", { x: -150, opacity: 0 }, { x: 0, opacity: 1, delay: 0.1, duration: 0.6, ease: "power1.out" })
            .fromTo(".box-content-bg-2", { x: 150, opacity: 0 }, { x: 0, opacity: 1, delay: 0.1, duration: 0.6, ease: "power1.out" })


    }, [])

    useEffect(() => {
        const gsapEl1 = gsap.timeline();
        gsapEl1.fromTo(".image-box-1", { x: 500, opacity: 0 }, { position: matchesTablet ? '' : 'relative', zIndex: 7, x: 0, opacity: 1, delay: 0, duration: 1, ease: "elastic.inOut(1.7,1.75)" })
            .fromTo(".image-box-2", { x: -500, opacity: 0 }, { position: matchesTablet ? '' : 'relative', zIndex: 7, x: 0, opacity: 1, delay: 0, duration: 1, ease: "elastic.inOut(1.7,1.75)" })
    }, [matchesTablet])

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Box id="box-athlets" position='relative'>
                <Header title={TEXT.ATHLETS.TITLE} />
                <ImageBox
                    className='image-box-1 opacity-0'
                    top={{ xs: '', md: 120, lg: 35 }}
                    right={{ xs: '', md: matches ? '470px' : '65%', lg: '56.5%', xl: '53.5%' }}
                    left={{ md: matches ? '-165px' : '' }}
                    mb={{ xs: '-73px', md: 0 }}
                >
                    <AthletsImage />
                </ImageBox>
                <ContentSection>
                    {TEXT.ATHLETS.CONTENTS.map(({ TITLE, MODE_WHITE, COLOR_ORDER, SX, BG, ORDER, DESCRIPTION }, idx) => {
                        return (
                            <Content
                                idx={idx}
                                key={ORDER}
                                bg={BG}
                                colorOrder={COLOR_ORDER}
                                modeWhite={MODE_WHITE}
                                title={TITLE}
                                order={ORDER}
                                content={DESCRIPTION}
                                sx={SX} />
                        )
                    })}
                </ContentSection >
            </Box>

            <Box id="box-players" position='relative'>
                <Header title={TEXT.PLAYERS.TITLE} left />
                <ImageBox
                    className='image-box-2 opacity-0'
                    top={{ xs: '', md: 33, lg: 0 }}
                    left={{ xs: '', md: '42vw', lg: '41vw', xl: '50vw' }}
                    mb={{ xs: '-76px', md: 0 }}
                >
                    <PlayersImage />
                </ImageBox>
                <ContentSection>
                    {TEXT.PLAYERS.CONTENTS.map(({ TITLE, MODE_WHITE, COLOR_ORDER, SX, BG, ORDER, DESCRIPTION }, idx) => {
                        return (
                            <Content
                                idx={idx}
                                leftMode
                                key={ORDER}
                                bg={BG}
                                colorOrder={COLOR_ORDER}
                                modeWhite={MODE_WHITE}
                                title={TITLE}
                                order={ORDER}
                                content={DESCRIPTION}
                                sx={SX} />
                        )
                    })}
                </ContentSection>
            </Box>
        </Box >
    )
}

export default Home