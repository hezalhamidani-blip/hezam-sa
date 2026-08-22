/* ── بيانات التواصل — عدّلها هنا ── */
const INFO = {
  email:    'hez.alhamidani@gmail.com',
  location: 'Riyadh, Saudi Arabia',
  linkedin: '#',   // ← ضع رابط LinkedIn هنا
  cvUrl:    '#',   // ← ضع رابط PDF هنا
}

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 px-8">
      <div className="max-w-2xl mx-auto text-center">

        <p className="font-cairo text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          دعنا نتواصل
        </p>
        <h2 className="font-cairo font-extrabold text-3xl text-white mb-3">
          تواصل معي
        </h2>
        <div className="section-divider-center" />

        <p className="text-white/65 leading-loose text-sm mb-8 max-w-lg mx-auto">
          يسعدني التواصل معك للاطلاع على الفرص المهنية، التعاون في مشاريع الموارد البشرية، أو تبادل الخبرات في مجال التدريب والتطوير المؤسسي.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">📧</span>
            <p className="font-cairo text-white/75 text-sm">{INFO.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <p className="font-cairo text-white/75 text-sm">{INFO.location}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href={INFO.linkedin} target="_blank" rel="noreferrer"
             className="bg-white text-primary font-cairo font-bold text-sm
                        px-6 py-3 rounded-md shadow-lg
                        hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200">
            LinkedIn ↗
          </a>
          <a href={`mailto:${INFO.email}`}
             className="border border-white/40 text-white font-cairo font-semibold text-sm
                        px-6 py-3 rounded-md hover:border-white hover:bg-white/8
                        transition-all duration-200">
            مراسلة بالبريد
          </a>
          <a href={INFO.cvUrl}
             className="border border-white/40 text-white font-cairo font-semibold text-sm
                        px-6 py-3 rounded-md hover:border-white hover:bg-white/8
                        transition-all duration-200">
            تحميل السيرة الذاتية ↓
          </a>
        </div>

      </div>
    </section>
  )
}
