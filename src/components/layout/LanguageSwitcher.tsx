import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const languages = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' }
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (code: string, dir: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = dir;
    document.documentElement.lang = code;
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:bg-white/10 transition-all text-sm font-medium">
        <Globe size={16} className="text-primary" />
        <span>{languages.find(l => l.code === i18n.language)?.label || 'English'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 glass rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => toggleLanguage(lang.code, lang.dir)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-all",
                i18n.language === lang.code && "text-primary font-bold"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
