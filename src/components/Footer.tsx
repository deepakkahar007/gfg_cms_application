const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-neutral-400">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>

          <p className="text-neutral-500 text-sm">
            © 2024 Dark Minimalist Blog. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            {/* Twitter */}
            <a className="hover:text-primary" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..." />
              </svg>
            </a>

            {/* GitHub */}
            <a className="hover:text-primary" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477..."
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
