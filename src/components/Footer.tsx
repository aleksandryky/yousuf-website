import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          © {year} {profile.name}
        </p>
        <p className="site-footer__meta">
          {profile.title}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
