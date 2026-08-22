/* ─── بيانات يمكن تعديلها بسهولة ─── */
const INFO = {
  nameAr:    'حزام عبدالله الحميداني',
  nameEn:    'Hezam Abdullah Al-Humaydani',
  title:     'Human Resources Specialist | HR Operations | Labor Law & Training Affairs',
  keywords:  ['الموارد البشرية', 'التقارير', 'التدريب', 'نظام العمل', 'الذكاء الاصطناعي'],
  bio:       'أقدّم حلولًا عملية في عمليات الموارد البشرية وشؤون المتدربين، مع خبرة في إعداد التقارير، الامتثال للأنظمة، وتحسين كفاءة الإجراءات باستخدام أدوات رقمية وذكاء اصطناعي.',
  cvUrl:     '#',          // ← ضع رابط PDF هنا
  linkedIn:  '#',          // ← ضع رابط LinkedIn هنا
}

const BARS = [55, 80, 65, 90, 75, 85, 70]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen hero-pattern relative overflow-hidden flex items-center
                 pt-24 pb-16 px-8
                 bg-gradient-to-br from-primary via-[#1a5c40] to-secondary"
    >
      {/* Decorative circles */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full
                      bg-[radial-gradient(circle,rgba(47,107,79,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full
                      border border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-12">

        {/* ── Content ── */}
        <div className="max-w-2xl z-10">

          {/* Badge */}
          <div className="animate-fadeup delay-100 inline-flex items-center gap-2
                          bg-white/10 border border-white/20 text-accent
                          px-4 py-1.5 rounded-full text-xs font-cairo tracking-wide mb-6
                          backdrop-blur-sm">
            <span className="text-green-400 text-[8px]">●</span>
            متاح للفرص المهنية &nbsp;•&nbsp; Open to Opportunities
          </div>

          {/* Name AR */}
          <h1 className="animate-fadeup delay-200 font-cairo font-black text-white leading-tight mb-1"
              style={{ fontSize: 'clamp(2.4rem,4.5vw,3.6rem)' }}>
            {INFO.nameAr}
          </h1>

          {/* Name EN */}
          <p className="animate-fadeup delay-300 font-cairo text-white/50 text-base tracking-widest mb-4"
             dir="ltr" style={{ textAlign: 'right' }}>
            {INFO.nameEn}
          </p>

          {/* Title */}
          <p className="animate-fadeup delay-300 font-tajawal font-medium text-accent text-base mb-5 leading-relaxed">
            {INFO.title}
          </p>

          {/* Keywords */}
          <div className="animate-fadeup delay-400 flex flex-wrap gap-2 mb-6">
            {INFO.keywords.map(k => (
              <span key={k}
                className="bg-white/8 border border-white/15 text-white/85
                           px-3 py-1 rounded text-xs font-cairo font-semibold">
                {k}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="animate-fadeup delay-500 text-white/70 leading-loose text-sm max-w-xl mb-8">
            {INFO.bio}
          </p>

          {/* Buttons */}
          <div className="animate-fadeup delay-600 flex flex-wrap gap-3">
            <a href="#projects"
               className="bg-white text-primary font-cairo font-bold text-sm
                          px-6 py-3 rounded-md shadow-lg hover:-translate-y-0.5
                          hover:shadow-xl transition-all duration-200">
              عرض المشاريع ←
            </a>
            <a href={INFO.linkedIn} target="_blank" rel="noreferrer"
               className="border border-white/40 text-white font-cairo font-semibold text-sm
                          px-6 py-3 rounded-md hover:border-white hover:bg-white/8
                          transition-all duration-200">
              LinkedIn ↗
            </a>
            <a href={INFO.cvUrl}
               className="border border-white/40 text-white font-cairo font-semibold text-sm
                          px-6 py-3 rounded-md hover:border-white hover:bg-white/8
                          transition-all duration-200">
              تحميل السيرة الذاتية ↓
            </a>
          </div>
        </div>

        {/* ── Dashboard Visual ── */}
        <div className="hidden lg:flex flex-col gap-3 z-10 shrink-0">

          {/* Bar chart card */}
          <div className="bg-white/7 backdrop-blur-md border border-white/12 rounded-xl p-4 min-w-[210px]">
            <p className="font-cairo text-white/50 text-[11px] mb-3">معدل الحضور الأسبوعي</p>
            <div className="flex items-end gap-[5px] h-10">
              {BARS.map((h, i) => (
                <div key={i}
                  className="rounded-sm w-full"
                  style={{
                    height: `${h}%`,
                    background: 'linear-gradient(to top,#2F6B4F,#86C9A2)',
                  }} />
              ))}
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-cairo font-bold text-white text-xl">92%</span>
              <span className="font-cairo text-accent text-[11px]">نسبة الحضور</span>
            </div>
          </div>

          {/* Mini cards */}
          {[
            { icon: '📊', title: 'تقرير أسبوعي',        sub: 'جاهز للمراجعة' },
            { icon: '⚖️', title: 'رخصة مستشار عمالي', sub: 'معتمدة من الوزارة' },
          ].map(item => (
            <div key={item.title}
              className="bg-white/7 backdrop-blur-md border border-white/12
                         rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-cairo font-bold text-white text-[13px]">{item.title}</p>
                <p className="font-cairo text-white/55 text-[11px]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
