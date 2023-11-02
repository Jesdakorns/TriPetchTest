import { Box, BoxProps, Typography } from '@mui/material'
import React from 'react'

interface Props extends BoxProps {
    idx?: number | string
    modeWhite?: boolean
    title?: string
    colorOrder?: string
    order?: string
}

const OrderBox = ({ colorOrder, order, modeWhite }: Props) => (<Box display="flex" flexDirection="column" justifyContent="center" mr="10px" >
    <Typography
        variant="h6"
        color={colorOrder}
        fontSize={{ xs: 14, md: 18 }}
        lineHeight={{ xs: '16.41px', md: '21.09px' }}
        letterSpacing='1.5px'
        fontWeight='400'
        mb='4px'
    >
        {order}
    </Typography>
    <Box height='5px' bgcolor={modeWhite ? '#FFFFFF' : ` #603EBE`} borderRadius={999} />
</Box>)

const SubTitleTypography = ({ idx, colorOrder, order, modeWhite, title, ...props }: Props) => {
    return (
        <Box className={`box-sub-title-${idx}`} {...props}>
            <Box display='flex'>
                <OrderBox {...{ colorOrder, order, modeWhite }} />
                <Typography
                    variant="h2"
                    color='#C2C2C2'
                    fontSize={{ xs: 28, md: 36 }}
                    lineHeight={{ xs: '32.81px', md: '42.19px' }}
                    letterSpacing='1.5px'
                    fontWeight='400'
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

export default SubTitleTypography