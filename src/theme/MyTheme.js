import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
export const MaterialLightTheme = {
    ...MD3LightTheme,
    roundness: wp(0.3),
    radius: wp(1.5),
    mainPadding: wp(5),
    "colors": {
        "primary": "rgb(24, 94, 174)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(214, 227, 255)",
        "onPrimaryContainer": "rgb(0, 27, 61)",
        "secondary": "rgb(85, 95, 113)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(217, 227, 248)",
        "onSecondaryContainer": "rgb(18, 28, 43)",
        "tertiary": "rgb(111, 86, 117)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(249, 216, 254)",
        "onTertiaryContainer": "rgb(40, 19, 47)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(253, 251, 255)",
        "onBackground": "rgb(26, 28, 30)",
        "surface": "rgb(253, 251, 255)",
        "onSurface": "rgb(26, 28, 30)",
        "surfaceVariant": "rgb(224, 226, 236)",
        "onSurfaceVariant": "rgb(67, 71, 78)",
        "outline": "rgb(116, 119, 127)",
        "outlineVariant": "rgb(196, 198, 207)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(47, 48, 51)",
        "inverseOnSurface": "rgb(241, 240, 244)",
        "inversePrimary": "rgb(168, 200, 255)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(242, 243, 251)",
            "level2": "rgb(235, 238, 249)",
            "level3": "rgb(228, 234, 246)",
            "level4": "rgb(226, 232, 245)",
            "level5": "rgb(221, 229, 244)"
        },
        "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
        "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
        "backdrop": "rgba(45, 48, 56, 0.4)"
    },
    "fonts": {
        "bodyLarge": {
            "fontFamily": "sans-serif",
            "fontSize": hp(1.9),
            "fontWeight": "400",
            "letterSpacing": 0.15,
            "lineHeight": 24
        },
        "bodyMedium": {
            "fontFamily": "sans-serif",
            "fontSize": hp(1.8),   // 15px
            "fontWeight": "400",
            "letterSpacing": 0.25,
            "lineHeight": 20
        },
        "bodySmall": {
            "fontFamily": "Poppins",
            "fontSize": 12,
            "fontWeight": "400",
            "letterSpacing": 0.4,
            "lineHeight": 18
        },
        "default": {
            "fontFamily": "sans-serif",
            "fontWeight": "400",
            "letterSpacing": 0
        },
        "displayLarge": {
            "fontFamily": "sans-serif",
            "fontSize": 57,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 64
        },
        "displayMedium": {
            "fontFamily": "sans-serif",
            "fontSize": 45,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 52
        },
        "displaySmall": {
            "fontFamily": "sans-serif",
            "fontSize": 36,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 44
        },
        "headlineLarge": {
            "fontFamily": "Poppins",
            "fontSize": hp(5),
            "fontWeight": "700",
            "letterSpacing": 1,
            "lineHeight": 50
        },
        "headlineMedium": {
            "fontFamily": "sans-serif",
            "fontSize": 28,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 36
        },
        "headlineSmall": {
            "fontFamily": "sans-serif",
            "fontSize": 24,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 32
        },
        "labelLarge": {
            "fontFamily": "sans-serif-medium",
            "fontSize": hp(1.8),  // 15px
            "textTransform": 'capitalize',
            "fontWeight": "600",
            "letterSpacing": 0.1,
            "lineHeight": 25
        },
        "labelMedium": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 13,
            "fontWeight": "500",
            "letterSpacing": 0.5,
            "lineHeight": 16
        },
        "labelSmall": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 10,
            "fontWeight": "500",
            "letterSpacing": 0.5,
            "lineHeight": 16
        },
        "titleLarge": {
            "fontFamily": "sans-serif",
            "fontSize": wp(6),
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 28
        },
        "titleMedium": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 15,
            "fontWeight": "500",
            "letterSpacing": 0.15,
            "lineHeight": 24
        },
        "titleSmall": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 13,
            "fontWeight": "500",
            "letterSpacing": 0.1,
            "lineHeight": 20
        }
    }
};

export const MaterialDarkTheme = {
    ...MD3DarkTheme,
    roundness: hp(0.4),
    mainPadding: wp(4),

    "colors": {
        "primary": "rgb(168, 200, 255)",
        "onPrimary": "rgb(0, 48, 98)",
        "primaryContainer": "rgb(0, 70, 138)",
        "onPrimaryContainer": "rgb(214, 227, 255)",
        "secondary": "rgb(189, 199, 220)",
        "onSecondary": "rgb(39, 49, 65)",
        "secondaryContainer": "rgb(62, 71, 88)",
        "onSecondaryContainer": "rgb(217, 227, 248)",
        "tertiary": "rgb(220, 188, 225)",
        "onTertiary": "rgb(62, 40, 69)",
        "tertiaryContainer": "rgb(86, 62, 92)",
        "onTertiaryContainer": "rgb(249, 216, 254)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(26, 28, 30)",
        "onBackground": "rgb(227, 226, 230)",
        "surface": "rgb(26, 28, 30)",
        "onSurface": "rgb(227, 226, 230)",
        "surfaceVariant": "rgb(67, 71, 78)",
        "onSurfaceVariant": "rgb(196, 198, 207)",
        "outline": "rgb(142, 144, 153)",
        "outlineVariant": "rgb(67, 71, 78)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(227, 226, 230)",
        "inverseOnSurface": "rgb(47, 48, 51)",
        "inversePrimary": "rgb(24, 94, 174)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(33, 37, 41)",
            "level2": "rgb(37, 42, 48)",
            "level3": "rgb(42, 47, 55)",
            "level4": "rgb(43, 49, 57)",
            "level5": "rgb(46, 52, 62)"
        },
        "surfaceDisabled": "rgba(227, 226, 230, 0.12)",
        "onSurfaceDisabled": "rgba(227, 226, 230, 0.38)",
        "backdrop": "rgba(45, 48, 56, 0.4)"
    }
    ,
    "fonts": {
        "bodyLarge": {
            "fontFamily": "sans-serif",
            "fontSize": 16,
            "fontWeight": "400",
            "letterSpacing": 0.15,
            "lineHeight": 24
        },
        "bodyMedium": {
            "fontFamily": "sans-serif",
            "fontSize": 14,
            "fontWeight": "400",
            "letterSpacing": 0.25,
            "lineHeight": 20
        },
        "bodySmall": {
            "fontFamily": "sans-serif",
            "fontSize": 12,
            "fontWeight": "400",
            "letterSpacing": 0.4,
            "lineHeight": 16
        },
        "default": {
            "fontFamily": "sans-serif",
            "fontWeight": "400",
            "letterSpacing": 0
        },
        "displayLarge": {
            "fontFamily": "sans-serif",
            "fontSize": 57,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 64
        },
        "displayMedium": {
            "fontFamily": "sans-serif",
            "fontSize": 45,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 52
        },
        "displaySmall": {
            "fontFamily": "sans-serif",
            "fontSize": 36,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 44
        },
        "headlineLarge": {
            "fontFamily": "sans-serif",
            "fontSize": 32,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 40
        },
        "headlineMedium": {
            "fontFamily": "sans-serif",
            "fontSize": 28,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 36
        },
        "headlineSmall": {
            "fontFamily": "sans-serif",
            "fontSize": 24,
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 32
        },
        "labelLarge": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 14,
            "fontWeight": "500",
            "textTransform": 'capitalize',
            "letterSpacing": 0.1,
            "lineHeight": 20
        },
        "labelMedium": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 13,
            "fontWeight": "500",
            "letterSpacing": 0.5,
            "lineHeight": 16
        },
        "labelSmall": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 10,
            "fontWeight": "500",
            "letterSpacing": 0.5,
            "lineHeight": 16
        },
        "titleLarge": {
            "fontFamily": "sans-serif",
            "fontSize": wp(6),
            "fontWeight": "400",
            "letterSpacing": 0,
            "lineHeight": 28
        },
        "titleMedium": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 15,
            "fontWeight": "500",
            "letterSpacing": 0.15,
            "lineHeight": 24
        },
        "titleSmall": {
            "fontFamily": "sans-serif-medium",
            "fontSize": 13,
            "fontWeight": "500",
            "letterSpacing": 0.1,
            "lineHeight": 20
        }
    },
};