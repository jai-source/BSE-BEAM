import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-theme-primary text-theme-text-primary pt-20">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-14 pb-16">

                {/* About */}
                <div>
                    <h4 className="font-semibold mb-4">
                        BSE E-Agricultural Markets Limited
                    </h4>
                    <p className="text-theme-text-primary/70 text-sm leading-relaxed">
                        Delivering value across agri-commodity ecosystems through transparent,
                        secure, and scalable market infrastructure.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-theme-text-primary/70">
                        <li>About Us</li>
                        <li>Platforms</li>
                        <li>Services</li>
                        <li>Investors</li>
                        <li>Compliance</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-theme-text-primary/70">
                        <li>Circulars</li>
                        <li>Contact</li>
                        <li>Become a Member</li>
                        <li>Live Auctions</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="font-semibold mb-4">Connect</h4>
                    <div className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
                        <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
                        <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
                        <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-theme-text-primary/10 py-6 text-center text-xs text-theme-text-primary/60">
                © 2026 BSE E-Agricultural Markets Limited. All rights reserved.
            </div>
        </footer>
    );
}
