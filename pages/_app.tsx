import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Layout from '@/components/Layouts/Layout';
import { UIProvider } from '../contexts/UIContext';

const vanilla = localFont({ src: 'fonts/Vanilla.otf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${vanilla.style.fontFamily};
        }
      `}</style>

      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  );
}
