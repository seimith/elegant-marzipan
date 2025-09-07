// Analytics service for tracking A/B/C testing and user interactions

// Analytics event types
type EventType = 'page_view' | 'copy_set_view' | 'button_click' | 'conversion';

// Analytics event data
interface AnalyticsEvent {
  type: EventType;
  copySet?: string;
  elementId?: string; 
  value?: string | number;
  additionalData?: Record<string, unknown>;
}

// Mock function for console logging in development
const logEvent = (event: AnalyticsEvent) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event);
  }
};

/**
 * Track an event with your analytics provider
 * You can easily swap this implementation with your preferred analytics tool
 */
export const trackEvent = (event: AnalyticsEvent): void => {
  // Log locally for development
  logEvent(event);
  
  // Send to your analytics provider (Google Analytics, Mixpanel, etc.)
  // Example for Google Analytics 4 (requires gtag to be set up in your app)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-expect-error - gtag might not be recognized without proper types
    window.gtag('event', event.type, {
      copy_set: event.copySet,
      element_id: event.elementId,
      value: event.value,
      ...event.additionalData
    });
  }
  
  // Example for sending to a custom endpoint
  // You can uncomment and customize this to send data to your own backend
  /*
  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }).catch(err => console.error('Analytics error:', err));
  }
  */
};

/**
 * Track a page view with the specific copy set being shown
 */
export const trackCopySetView = (copySet: string, path: string = window.location.pathname): void => {
  trackEvent({
    type: 'copy_set_view',
    copySet,
    value: path,
  });
};

/**
 * Track a button click with the specific copy set context
 */
export const trackButtonClick = (
  copySet: string, 
  elementId: string, 
  additionalData?: Record<string, unknown>
): void => {
  trackEvent({
    type: 'button_click',
    copySet,
    elementId,
    additionalData,
  });
};

/**
 * Track a conversion (form submission, signup, etc.) with the specific copy set context
 */
export const trackConversion = (
  copySet: string, 
  conversionType: string, 
  value?: number
): void => {
  trackEvent({
    type: 'conversion',
    copySet,
    elementId: conversionType,
    value,
  });
};
