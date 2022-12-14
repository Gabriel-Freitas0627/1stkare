// material
import { BoxProps, styled } from '@mui/material'
import SimpleBarReact, { Props } from 'simplebar-react'
// ----------------------------------------------------------------------

import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}))

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))

// ----------------------------------------------------------------------

export default function Scrollbar({
  children,
  sx,
  ...other
}: BoxProps & Props) {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  if (isMobile) {
    return (
      // @ts-ignore
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <RootStyle>
      {/* @ts-ignore */}
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  )
}
