import { appWithTranslation } from 'next-i18next';
import { Lato, DM_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';

import 'leaflet/dist/leaflet.css';
import 'styles/globals.css';
import 'styles/variables.css';

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});
const dmSans = DM_Sans({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    } = props;

    return (
        <>
            <style
                // eslint-disable-next-line react/no-unknown-property
                jsx
                // eslint-disable-next-line react/no-unknown-property
                global
            >
                {`
                :root {
                    --font-family-lato: ${lato.style.fontFamily};
                    --font-family-dm-sans: ${dmSans.style.fontFamily};
                }
                `}
            </style>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
