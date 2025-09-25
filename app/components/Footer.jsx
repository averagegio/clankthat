export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-16">
      <div className="mx-auto max-w-screen-lg px-4 py-8 grid gap-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} ClankThat. All rights reserved.
        </p>
        <div className="flex gap-5 text-sm">
          <a className="hover:underline text-white/80" href="#privacy">Privacy</a>
          <a className="hover:underline text-white/80" href="#terms">Terms</a>
          <a className="hover:underline text-white/80" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}


