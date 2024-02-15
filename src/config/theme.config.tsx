import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#2F303A',
    FOOTER = '#202027',
    NAV_HOVER = '#ADADAD',
    BORDER_IMPUT = '#2E3852',
    BORDER_INPUT_FOCUS = '#596da0',
    BUTTON_BCK = '#1762A7',
    BUTTON_HOVER = '#2180d8',
    BUTTON_FOCUS = '#2796ff',
    ACCENT_TEXT = '#BC3A80',
    CIRCLE_1 = '#bc3a801a',
    CIRCLE_2 = '#3457b21a',
    TEXT = '#ffff',
    FONT_GLOBAL = 'Poppins'

}

const theme = createTheme({
    palette:{
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.BG,
            dark: themePalette.FOOTER,
        },
        secondary:{
            main: themePalette.BUTTON_BCK,
            light: themePalette.BUTTON_HOVER,
            dark: themePalette.BUTTON_FOCUS
        },
        text:{
            primary: themePalette.TEXT,
            secondary: themePalette.ACCENT_TEXT
        },
        success:{
            main: themePalette.BORDER_IMPUT,
            dark: themePalette.BORDER_INPUT_FOCUS
        },
        info:{
            main: themePalette.FOOTER,
            // light;,
            // dark;
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
        subtitle2:{
            fontSize: '1.2 rem'
        },
        body1:{
            fontSize: '0.7rem'
        },
        body2:{
            fontSize: '0.6rem'
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:'none',
                    boxShadow:'none',
                }
            },
            styleOverrides:{
                sizeSmall:{
                    fontSize:'0.5rem'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
    )
}