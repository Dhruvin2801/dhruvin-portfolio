export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhruvin Dungrani
        </p>
        <div className="flex items-center gap-6">
          {["Projects", "Experience", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
