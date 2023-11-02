import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    idx?: number | string
    modeWhite?: boolean
    content?: string
}

const DescriptionTypography = ({ idx, modeWhite, content }: Props) => {
    return (
        <Typography
            className={`box-desc-title-${idx} `}
            variant="body1"
            color={modeWhite ? '#FFFFFF' : ` #000000`}
            fontSize={{ xs: 15, md: 18, lg: 20 }}
            lineHeight={{ xs: '17.58px', md: '28px' }}
            fontWeight='400'
        >
            {content}
        </Typography>
    )
}

export default DescriptionTypography