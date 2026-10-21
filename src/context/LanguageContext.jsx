import React, { createContext, useContext, useEffect } from 'react';
import { contentEN } from '../data/translations';

const LanguageContext = createContext({
  locale: 'en',
  t: contentEN,
  isRtl: false,
  prefixUrl: (path) => path,
});

export function LanguageProvider({ children }) {
  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en-GB';
  }, []);

  const value = {
    locale: 'en',
    t: contentEN,
    isRtl: false,
    prefixUrl: (path) => path,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: 'en',
      t: contentEN,
      isRtl: false,
      prefixUrl: (path) => path,
    };
  }
  return context;
}

export default LanguageContext;
