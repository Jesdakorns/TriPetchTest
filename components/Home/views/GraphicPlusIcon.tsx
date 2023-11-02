import React from 'react'
import Image from 'next/image'
import graphicPlus_1 from '@/src/assets/images/graphic_plus_1.png';
import graphicPlus from '@/src/assets/images/graphic_plus.png'
import { Box, BoxProps } from '@mui/material';


interface Props extends BoxProps { }

const GraphicPlusIcon = ({ ...props }: Props) => {
    return (
        <Box {...props}>
            <Box position="relative" width={37} height={23} id="bg">
                <Box lineHeight={0} position='absolute' top={15 - 7} left={15 + 7}>
                    <Image src={graphicPlus_1} width={15} height={15} alt='graphic plus 1' />
                </Box>
                <Box lineHeight={0} position='absolute' top={0}>
                    <Image src={graphicPlus} width={15} height={15} alt='graphic plus' />
                </Box>
            </Box>
        </Box>

    )
}

export default GraphicPlusIcon