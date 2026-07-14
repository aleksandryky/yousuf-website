import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p>{profile.title} · {profile.location}</p>
      </div>
    </footer>
  );
}
