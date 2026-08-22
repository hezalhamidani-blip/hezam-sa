const items = [
  {
    icon: '⚖️',
    title: 'رخصة مستشار عمالي معتمدة',
    desc:  'صادرة من وزارة الموارد البشرية والتنمية الاجتماعية — تؤهل لتقديم الاستشارات العمالية وفق أحكام نظام العمل السعودي.',
  },
  {
    icon: '🎤',
    title: 'ورش عمل توعوية',
    desc:  'تقديم جلسات توعوية عن نظام العمل السعودي وأهمية الامتثال التنظيمي للعاملين والمتدربين.',
  },
  {
    icon: '🚀',
    title: 'تطوير تجربة المتدربين',
    desc:  'المساهمة الفعلية في تحسين مسار القبول والتسجيل ورفع كفاءة الإجراءات الإدارية داخل المعهد.',
  },
  {
    icon: '📋',
    title: 'تقارير دورية داعمة للقرار',
    desc:  'إعداد تقارير منتظمة لمتابعة الحضور والغياب وتقديمها للإدارة كأداة تشغيلية أسبوعية وشهرية.',
  },
  {
    icon: '🤖',
    title: 'توظيف الذكاء الاصطناعي في HR',
    desc:  'استخدام أدوات AI في تحليل بيانات المتدربين ودعم إعداد التقارير وتحسين سير العمل الإداري.',
  },
]

export default function Achievements() {
  return (
    <section className="bg-lightbg py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="font-cairo text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
          ما تحققته
        </p>
        <h2 className="font-cairo font-extrabold text-3xl text-dark mb-3">
          الإنجازات المهنية
        </h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item.title}
              className="bg-card border border-border rounded-xl p-5
                         flex gap-4 items-start
                         hover:shadow-[0_6px_20px_rgba(15,61,46,0.08)]
                         transition-shadow duration-300">
              <div className="w-11 h-11 rounded-lg bg-lightbg flex items-center
                              justify-center text-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-cairo font-bold text-dark text-sm mb-1.5">{item.title}</h4>
                <p className="text-muted text-[13px] leading-[1.75]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
