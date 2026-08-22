const stats = [
  { num: '+5',    label: 'سنوات خبرة عملية',    sub: 'في الموارد البشرية والتدريب' },
  { num: '+50',   label: 'تقرير إداري',          sub: 'أسبوعي وشهري' },
  { num: '+1000', label: 'متدرب',               sub: 'في مسارات تدريبية مختلفة' },
  { num: 'رخصة', label: 'مستشار عمالي',        sub: 'معتمدة من وزارة الموارد البشرية' },
]

export default function Stats() {
  return (
    <section className="bg-primary py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="py-14 px-8 text-center">
              <p className="font-cairo font-black text-5xl mb-2 leading-none"
                 style={{
                   background: 'linear-gradient(135deg,#fff,#86C9A2)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text',
                 }}>
                {s.num}
              </p>
              <p className="font-cairo font-semibold text-white/80 text-sm">{s.label}</p>
              <p className="font-tajawal text-white/40 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
