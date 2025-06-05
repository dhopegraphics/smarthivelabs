declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = "G-06FFDTHRW8"; // Replace with your actual ID

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
