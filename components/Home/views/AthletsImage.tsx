import { Box, BoxProps } from '@mui/material'
import React from 'react'
import graphicDesktop from '@/src/assets/images/graphic_desktop.png';
import Image from 'next/image'
import GraphicPlusIcon from './GraphicPlusIcon';
import LineIcon from '@/components/Home/views/LineIcon';

interface Props extends BoxProps { }

const AthletsImage = ({ ...props }: Props) => {
    return (
        <Box position='relative' width={{ xs: '200px', md: '518px', lg: '678px' }}>
            <Box position='absolute' zIndex={1} {...props}>
                <Box>
                    <Box top={0} width={{ xs: '200px', md: '518px', lg: '678px' }} zIndex={1}>
                        <LineIcon sx={{ opacity: { xs: 1, lg: 0 } }} position='absolute' top={12.91} right={{ xs: '10%', md: '19%' }} />
                        <GraphicPlusIcon sx={{ opacity: { xs: 1, lg: 0 } }} position='absolute' top={{ xs: 10, md: -18 }} left={{ xs: -15, md: '38%' }} />
                        <Image src={graphicDesktop} width={678} height={950} alt='' style={{ position: 'absolute', width: 'inherit', height: 'fit-content' }} />
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default AthletsImage