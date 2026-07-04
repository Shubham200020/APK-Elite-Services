export function setupTrafficTracking() {
  if (typeof window === 'undefined') {
    return;
  }

  const trackingEndpoint = (window as Window & { __APK_TRACKING_ENDPOINT__?: string }).__APK_TRACKING_ENDPOINT__;
  if (trackingEndpoint) {
    console.info('Traffic tracking endpoint configured:', trackingEndpoint);
  }
}
