/* eslint-disable import/no-extraneous-dependencies */
import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
    return Array.from(Array(size).keys()).map((i) => i + startAt)
}

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                cursive: "'Patua One', cursive"
            },
            colors: {
                primary: {
                    100: colors.light[50],
                    200: colors.zinc[100],
                    300: '#a2a2a8',
                    400: colors.gray[600],
                    500: '#1d1d20'
                }
            },
            backdropBlur: {
                glass: '20px'
            }
        }
    },
    safelist: [
        ['', 'sm', 'md', 'lg', 'xl', '2xl']
            .map((br) =>
                range(12)
                    .map((i) => `${br ? `${br}:` : br}w-${i}/12`)
                    .join(' ')
            )
            .join(' ')
    ]
})
