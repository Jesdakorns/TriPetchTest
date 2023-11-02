import React from 'react'
import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps { }

const ImageBox = ({ children, ...props }: Props) => {
    return (
        <Box
            height={{ xs: '296px', md: 'auto' }}
            display="flex"
            justifyContent='center'
            position={{ xs: 'static', md: 'absolute' }}
            {...props}
        >
            {children}
        </Box>
    )
}

export default ImageBox