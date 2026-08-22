const cards = [
  {
    icon: '⚙️',
    title: 'عمليات الموارد البشرية',
    desc:  'تنظيم الملفات الوظيفية، متابعة الإجراءات الإدارية، تحسين العمليات الداخلية، ودعم الامتثال للأنظمة واللوائح.',
  },
  {
    icon: '🎓',
    title: 'شؤون المتدربين والتدريب',
    desc:  'متابعة المتدربين أكاديميًا وإداريًا، دعم البرامج التدريبية، وتحسين تجربة المستفيدين ورفع كفاءة الإجراءات.',
  },
  {
    icon: '📊',
    title: 'التقارير وتحليل البيانات',
    desc:  'إعداد تقارير أسبوعية وشهرية، تحليل بيانات الحضور والغياب، ودعم القرارات الإدارية بالأرقام والمؤشرات.',
  },
  {
    icon: '⚖️',
    title: 'نظام العمل والامتثال',
    desc:  'معرفة بنظام العمل السعودي، اللوائح التنظيمية، وآليات الامتثال التي تنظّم العلاقة بين المنشأة والعاملين.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-lightbg py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="font-cairo text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
          ما أقدمه
        </p>
        <h2 className="font-cairo font-extrabold text-3xl text-dark mb-3">
          مجالات الخبرة
        </h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(card => (
            <div key={card.title}
              className="bg-card border border-border rounded-xl p-6
                         border-t-[3px] border-t-transparent
                         hover:border-t-secondary hover:-translate-y-1
                         hover:shadow-[0_12px_30px_rgba(15,61,46,0.12)]
                         transition-all duration-300 group">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-cairo font-bold text-primary text-sm mb-3">
                {card.title}
              </h3>
              <p className="text-muted text-[13px] leading-[1.8]">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
