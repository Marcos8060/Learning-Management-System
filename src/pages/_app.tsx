import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

// process.env.NEXT_PUBLIC_CLIENT_ID || ''

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="169551635397-hnlptqg5umhgmmjnlv3t39g6p3i7s0sd.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
