"use client";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 py-10 mt-20 border-t">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: About */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Interview Q&A</h2>
                    <p className="text-sm text-muted-foreground">
                        Real-world interview questions curated to help you crack your next tech interview.
                    </p>
                </div>

                {/* Section 2: Links */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/question" className="hover:text-blue-600">All Questions</a></li>
                        <li><a href="/tips" className="hover:text-blue-600">Resume Tips</a></li>
                        <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                        <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
                    </ul>
                </div>

                {/* Section 3: Social */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Connect</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://github.com/dvsdabhi" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
                        <a href="/" className="hover:text-green-600"><FaGlobe /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs text-gray-500 mt-10">
                © {new Date().getFullYear()} Interview Q&A. All rights reserved.
            </div>
        </footer>
    );
}


export default Footer;