import Box from '@mui/material/Box';

interface Circle1 {
    width: string,
    height: string,
    color: string,
    top: string,
    left: string,
}

export const Circle = ({ width, height, color, top, left }: Circle1) => {
    return (
        <Box
        sx={{
            backgroundColor: color,
            width: width,
            height: height,
            top: top,
            left: left,
            borderRadius: '50%',
            position: 'absolute',
            zIndex: -1,

        }}
        />
    );
};