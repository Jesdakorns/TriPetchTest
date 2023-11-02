import React from 'react'
import { Box, BoxProps } from '@mui/material'
import Image from 'next/image'
import path from '@/src/assets/images/path.png'


interface Props extends BoxProps { }


const LineIcon = ({ ...props }: Props) => {
    return (
        <Box  {...props}>
            <Box width={{ xs: '178.89px', md: '217.7px', lg: '678px' }} height={23} id="path">
                <Image src={path} width={178.89} height={197.23} alt='' style={{ width: 'inherit', height: 'fit-content' }} />
            </Box>
        </Box>
    )
}

export default LineIcon