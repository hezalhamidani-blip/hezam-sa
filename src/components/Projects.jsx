const projects = [
  {
    tag:   'Excel • Dashboard',
    tools: ['Excel', 'Dashboard', 'Reports'],
    title: 'التقرير الأسبوعي الإداري',
    desc:  'تقرير إداري أسبوعي يوضح مؤشرات الأداء، الحضور والغياب، والملاحظات التشغيلية لدعم قرارات الإدارة العليا.',
    thumb: 'chart',
    from:  '#0F3D2E',
    to:    '#2F6B4F',
  },
  {
    tag:   'Canva • Content',
    tools: ['Canva', 'Content', 'Communication'],
    title: 'مجلة المتدربين',
    desc:  'نشرة داخلية موجهة للمتدربين لتعزيز الوعي المهني، الانضباط، السلامة، وثقافة التدريب داخل المنشأة.',
    thumb: 'doc',
    from:  '#1a4a38',
    to:    '#3d7d5e',
  },
  {
    tag:   'AI • Analytics',
    tools: ['Excel', 'AI', 'Analytics'],
    title: 'متابعة الحضور والغياب — AI',
    desc:  'نموذج تحليل يساعد على قراءة بيانات الحضور والغياب، اكتشاف الحالات عالية الخطورة، وإصدار مؤشرات للإدارة.',
    thumb: 'analytics',
    from:  '#0d3326',
    to:    '#1e5c40',
  },
]

/* ── Thumbnail visuals ── */
function ChartThumb() {
  const bars = [40, 75, 55, 90, 65, 80]
  return (
    <div className="flex flex-col gap-2 w-full p-4">
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i % 2 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)',
            }} />
        ))}
      </div>
      <div className="h-[2px] bg-white/20 rounded w-4/5" />
      <div className="h-[2px] bg-white/20 rounded w-3/5" />
    </div>
  )
}
function DocThumb() {
  return (
    <div className="flex flex-col gap-2 w-full p-5">
      <div className="bg-white/12 rounded-md p-3 flex flex-col gap-2">
        {[100, 60, 100, 60].map((w, i) => (
          <div key={i} className="h-[3px] bg-white/30 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="h-[2px] bg-white/15 rounded w-3/5" />
      <div className="h-[2px] bg-white/15 rounded w-4/5" />
    </div>
  )
}
function AnalyticsThumb() {
  const bars = [85, 45, 70, 30, 95, 60]
  return (
    <div className="flex flex-col gap-2 w-full p-4">
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i % 2 ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.22)',
            }} />
        ))}
      </div>
      <div className="h-[2px] bg-white/20 rounded w-3/5" />
      <div className="h-[2px] bg-white/20 rounded w-4/5" />
    </div>
  )
}
const thumbs = { chart: ChartThumb, doc: DocThumb, analytics: AnalyticsThumb }

export default function Projects() {
  return (
    <section id="projects" className="bg-card py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="font-cairo text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
          نماذج أعمال
        </p>
        <h2 className="font-cairo font-extrabold text-3xl text-dark mb-3">
          المشاريع والمخرجات
        </h2>
        <div className="section-divider" />

        <p className="text-muted text-sm mb-8 leading-relaxed">
          نماذج عمل عامة تعكس طبيعة المهام والمخرجات المهنية — دون بيانات حقيقية أو معلومات شخصية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => {
            const Thumb = thumbs[p.thumb]
            return (
              <div key={p.title}
                className="bg-mainbg border border-border rounded-xl overflow-hidden
                           hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,61,46,0.1)]
                           transition-all duration-300">

                {/* Thumbnail */}
                <div className="h-40 relative flex items-center overflow-hidden"
                     style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }}>
                  <Thumb />
                  <span className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm
                                   text-white text-[10px] font-cairo border border-white/20
                                   px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tools.map(t => (
                      <span key={t}
                        className="bg-lightbg text-primary border border-secondary/20
                                   text-[10px] font-cairo font-semibold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-cairo font-extrabold text-dark text-sm mb-2">{p.title}</h3>
                  <p className="text-muted text-[13px] leading-[1.8]">{p.desc}</p>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
