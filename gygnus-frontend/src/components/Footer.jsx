const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Gygnus Jewelry. All rights reserved.</p>
        <div className="mt-2 space-x-4 text-sm">
          <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="mailto:support@gygnus.com" className="hover:underline">Email Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
