import React from 'react'
import { Box, BoxProps, Container, Grid, SxProps, useMediaQuery, useTheme } from '@mui/material'
import { DescriptionTypography, SubTitleTypography } from '@/components/Home/Typography'

interface Props extends BoxProps {
    modeWhite?: boolean
    leftMode?: boolean
    title?: string
    colorOrder?: string
    order?: string
    content?: string
    bg?: string
    sx?: SxProps
    idx?: number | string
}

const Gap = () => <Grid item xs={12} sm={12} md={4.3} lg={6} xl={6} sx={{ display: { xs: 'none', md: 'grid' } }} />

const Content = ({ idx, leftMode, bg, sx, ...props }: Props) => {
    const theme = useTheme();
    const sliderMode = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box className={`box-content-bg-${idx} opacity-0`} sx={{ backgroundColor: bg ?? '', }}>
            <Container >
                <Grid container spacing={0} sx={sliderMode ? {
                    pt: sliderMode ? '72px' : 0,
                    pb: sliderMode ? '69px' : 0,
                    minHeight: sliderMode ? '284px' : 0,
                } : { ...sx }}>
                    {!leftMode && <Gap />}
                    <Grid item xs={12} sm={12} md={7.7} lg={6} xl={6}>
                        <Box className={`box-content-${idx} `} height='100%' display='flex' flexDirection='column' justifyContent='center'>
                            <SubTitleTypography mb={{ xs: '20px', md: '21px' }} idx={idx} {...props} />
                            <DescriptionTypography idx={idx} {...props} />
                        </Box>
                    </Grid>
                    {leftMode && <Gap />}
                </Grid>
            </Container>
        </Box >

    )
}

export default Content