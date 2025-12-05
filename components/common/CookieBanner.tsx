'use client';

import { useEffect } from 'react';
import { SharedConfig } from '@/lib/types';

interface CookieBannerProps {
  config: SharedConfig;
}

export default function CookieBanner({ config }: CookieBannerProps) {
  const { cookie } = config;

  useEffect(() => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    function getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }

    function setCookie(name: string, value: string, days: number) {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    const cookieConsentStatus = getCookie('cookieConsent');
    if (!cookieConsentStatus && cookieConsent) {
      setTimeout(() => {
        cookieConsent.classList.add('show');
      }, 1000);
    }

    acceptBtn?.addEventListener('click', function() {
      setCookie('cookieConsent', 'accepted', 365);
      cookieConsent?.classList.remove('show');
    });

    rejectBtn?.addEventListener('click', function() {
      setCookie('cookieConsent', 'rejected', 365);
      cookieConsent?.classList.remove('show');
    });
  }, []);

  return (
    <div className="cookie-consent" id="cookieConsent">
      <div className="cookie-content">
        <div className="cookie-text">
          <p><strong>Cookies</strong></p>
          <p>
            {cookie.text}{' '}
            <a href={cookie.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
              Learn more about cookies we use.
            </a>
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-accept" id="acceptCookies">
            Accept Cookies
          </button>
          <button className="cookie-btn cookie-btn-reject" id="rejectCookies">
            Reject Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
