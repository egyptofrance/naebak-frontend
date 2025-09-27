export default function NewsTicker() {
  return (
    <div>
      {/* شريط برتقالي علوي */}
      <div style={{height: '2px', backgroundColor: '#E67514'}}></div>
      
      {/* شريط الأخبار */}
      <div 
        className="py-2 text-white position-relative overflow-hidden"
        style={{backgroundColor: '#212121'}}
      >
        <div className="news-ticker">
          عاجل: انطلاق فعاليات منصة نائبك للتواصل المباشر مع النواب والمرشحين • 
          جديد: إمكانية تسجيل الشكاوى والمقترحات مباشرة للنواب • 
          تحديث: إضافة قسم خاص لمتابعة أداء النواب في البرلمان • 
          إعلان: فتح باب التسجيل لجميع المواطنين المصريين •
        </div>
      </div>
      
      {/* شريط برتقالي سفلي */}
      <div style={{height: '4px', backgroundColor: '#E67514'}}></div>
      
      {/* شريط أسود نهائي */}
      <div style={{height: '2px', backgroundColor: '#212121'}}></div>
    </div>
  );
}
