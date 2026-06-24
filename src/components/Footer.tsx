export function Footer({ siteName, version }: { siteName: string; version?: string }) {
  return (
    <footer className="border-t border-line py-5">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 text-xs text-faint sm:px-6">
        <p>
          Powered by{" "}
          <a href="/" className="text-muted transition-colors hover:text-fg">
            {siteName}
          </a>
          {version ? <span className="font-mono"> v{version}</span> : null}
        </p>
        <p>
          Theme <span className="font-medium text-muted">Lotus</span>
        </p>
      </div>
    </footer>
  );
}
