const certs = [
  {
    icon: '⚖️',
    title: 'رخصة مستشار عمالي',
    org:   'وزارة الموارد البشرية والتنمية الاجتماعية',
    badge: 'معتمدة',
  },
  {
    icon: '🎓',
    title: 'دورة تدريب المدربين TOT',
    org:   '30 ساعة تدريبية معتمدة',
    badge: 'مكتمل',
  },
  {
    icon: '📊',
    title: 'برنامج جداول البيانات Excel',
    org:   'جهة معتمدة',
    badge: 'مكتمل',
  },
  {
    icon: '📁',
    title: 'مقدمة في إدارة المشاريع PMP',
    org:   'جهة معتمدة',
    badge: 'مكتمل',
  },
  {
    icon: '🤖',
    title: 'الذكاء الاصطناعي في إدارة الموارد البشرية',
    org:   'جهة معتمدة',
    badge: 'مكتمل',
  },
  {
    icon: '🏛️',
    title: 'دبلوم إدارة الموارد البشرية',
    org:   'جامعة الإمام محمد بن سعود الإسلامية — 2022',
    badge: 'الرياض',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-mainbg py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="font-cairo text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
          التأهيل المهني
        </p>
        <h2 className="font-cairo font-extrabold text-3xl text-dark mb-3">
          الشهادات والرخص
        </h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(cert => (
            <div key={cert.title}
              className="bg-card border border-border rounded-xl p-5
                         flex gap-4 items-start relative overflow-hidden
                         before:absolute before:top-0 before:right-0
                         before:w-1 before:h-full
                         before:bg-gradient-to-b before:from-primary before:to-secondary
                         before:scale-y-0 before:origin-top
                         before:transition-transform before:duration-300
                         hover:before:scale-y-100
                         hover:shadow-[0_8px_25px_rgba(15,61,46,0.1)]
                         transition-shadow duration-300">
              <div className="w-11 h-11 rounded-xl bg-lightbg flex items-center
                              justify-center text-xl font-cairo font-black
                              text-primary shrink-0">
                {cert.icon}
              </div>
              <div>
                <h4 className="font-cairo font-bold text-dark text-sm mb-1">{cert.title}</h4>
                <p className="text-muted text-[12px] mb-2">{cert.org}</p>
                <span className="bg-lightbg text-secondary text-[10px] font-cairo
                                 font-semibold px-2 py-0.5 rounded">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
