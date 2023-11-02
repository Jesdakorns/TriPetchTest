import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    title?: string
}

const TitleTypography = ({ title }: Props) => {
    return (
        <Typography
            variant="h1"
            color='#E7E7E7'
            fontSize={{ xs: 50, md: 90, lg: 90 }}
            lineHeight={{ xs: '58.59px', md: '105.47px' }}
            fontWeight='400'
        >
            {title}
        </Typography>
    )
}

export default TitleTypography