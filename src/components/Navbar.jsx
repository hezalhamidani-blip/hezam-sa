const links = [
  { label: 'الرئيسية',  href: '#hero' },
  { label: 'المشاريع',  href: '#projects' },
  { label: 'الشهادات',  href: '#certifications' },
  { label: 'الخبرات',   href: '#expertise' },
  { label: 'التواصل',   href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="font-cairo font-bold text-white text-sm tracking-wide">
          Portfolio <span className="text-accent">|</span> حزام الحميداني
        </span>

        {/* Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-cairo text-sm text-white/75 hover:text-white
                           relative after:absolute after:bottom-[-4px] after:right-0
                           after:h-[2px] after:w-0 after:bg-accent
                           after:transition-all after:duration-300
                           hover:after:w-full transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}
