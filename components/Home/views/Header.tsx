import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { TitleTypography } from '@/components/Home/Typography'


interface Props {
    title?: string
    left?: boolean
}

const Header = ({ title, left }: Props) => {
    const sxStyle = left ? {
        mt: { xs: '19px', md: '52px', lg: '124px' },
        mb: { xs: '22px', md: '34px', lg: '69px' }
    } : {
        mt: { md: '87px', lg: '24px' },
        mb: { xs: '11px', md: '36px', lg: '59px' }
    }

    return (
        <>
            <Box className="box-title opacity-0" sx={{}}>
                <Container>
                    <Grid container spacing={0} >
                        {!left ? <Grid item xs={12} sm={12} md={4.3} lg={6} xl={6} /> : null}
                        <Grid item xs={12} sm={12} md={7.7} lg={6} xl={6} sx={sxStyle}>
                            <TitleTypography title={title} />
                        </Grid>
                        {left ? <Grid item xs={12} sm={12} md={4.3} lg={6} xl={6} /> : null}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Header