import React from 'react'
import { Box, BoxProps } from '@mui/material'
import Image from 'next/image'
import graphicDesktopPlayers from '@/src/assets/images/graphic_desktop_players.png';
import graphicMobilePlayers from '@/src/assets/images/graphic_mobile_players.png';


interface Props extends BoxProps { }

const PlayersImage = ({ ...props }: Props) => {
    const widthCustom = { xs: '302px', md: '691px', lg: '991px' }

    return (
        <Box position='relative' width={widthCustom}>
            <Box position='absolute' id="image-box" zIndex={1} {...props}>
                <Box id="main-box">
                    <Box id="box-size-image"
                        display={{ xs: 'none', md: 'block' }}
                        top={0}
                        width={widthCustom}
                        zIndex={1}
                    >
                        <Image src={graphicDesktopPlayers} width={991} height={950} alt='' style={{ position: 'absolute', width: 'inherit', height: 'fit-content' }} />
                    </Box>
                    <Box id="box-size-image"
                        display={{ xs: 'block', md: 'none' }}
                        top={0}
                        width={widthCustom}
                        zIndex={1}
                    >
                        <Image src={graphicMobilePlayers} width={991} height={950} alt='' style={{ position: 'absolute', width: 'inherit', height: 'fit-content' }} />
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default PlayersImage