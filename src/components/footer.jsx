import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-6 border-t border-[rgba(255,255,255,0.06)] text-center text-sm text-[var(--color-text-muted)]">
      <div>{t('footer.copyright', { year: 2026 })}</div>
    </footer>
  );
}
