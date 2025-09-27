'use client';

import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 10000) + 50000)
  }, [])

  return (
    <div>
      {/* الهيدر */}
      <header className="bg-white shadow-sm py-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* اللوجو */}
            <div className="col-lg-3 col-md-4 col-6">
              <img 
                src="/images/logo-naebak-green.png" 
                alt="نائبك" 
                className="img-fluid"
                style={{height: '50px', objectFit: 'contain'}}
              />
            </div>
            
            {/* المنيو - مخفي في الموبايل */}
            <div className="col-lg-6 d-none d-lg-block">
              <nav className="navbar navbar-expand-lg justify-content-center">
                <ul className="navbar-nav">
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="/">الرئيسية</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="#">النواب</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="#">المرشحين</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark fw-bold" href="/contact">اتصل بنا</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="/about">من نحن</a></li>
                </ul>
              </nav>
            </div>
            
            {/* الأدوات الجانبية */}
            <div className="col-lg-3 col-md-8 col-6">
              <div className="d-flex align-items-center justify-content-end gap-2 gap-md-3">
                {/* الإشعارات - مخفية في الموبايل الصغير */}
                <div className="position-relative d-none d-md-block">
                  <i className="fas fa-bell text-success fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                </div>
                
                {/* عداد الزوار - مخفي في الموبايل الصغير */}
                <div className="d-none d-md-block text-muted small">
                  {visitorCount.toLocaleString()} زائر
                </div>
                
                {/* زر تسجيل شكوى */}
                <button 
                  className="btn btn-sm fw-normal"
                  style={{
                    backgroundColor: '#E67514',
                    color: 'black',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.85rem'
                  }}
                >
                  <span className="d-none d-md-inline">تسجيل شكوى</span>
                  <span className="d-md-none">شكوى</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* المنيو للموبايل */}
          <div className="row d-lg-none mt-2">
            <div className="col-12">
              <nav className="navbar navbar-expand">
                <ul className="navbar-nav w-100 justify-content-around small">
                  <li className="nav-item"><a className="nav-link text-dark" href="/">الرئيسية</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="#">النواب</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="#">المرشحين</a></li>
                  <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/contact">اتصل بنا</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="/about">من نحن</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* البانر الرئيسي */}
      <section 
        className="position-relative"
        style={{
          height: '400px',
          backgroundImage: 'url(/images/sisi-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </section>

      {/* شريط الأخبار المتحرك */}
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

      {/* قسم الترحيب */}
      <section className="py-4" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <img 
                  src="/images/logo-naebak-green.png" 
                  alt="نائبك" 
                  className="me-3"
                  style={{height: '60px', objectFit: 'contain'}}
                />
                <h2 className="fw-bold text-success mb-0">اتصل بنا</h2>
              </div>
              <p className="lead text-muted">
                نحن هنا للاستماع إليك ومساعدتك في أي استفسار أو مقترح
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* محتوى الصفحة */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* نموذج الاتصال */}
            <div className="col-lg-8 mb-5">
              <div className="card shadow-lg border-0" style={{borderRadius: '12px'}}>
                <div className="card-header bg-success text-white text-center py-3" style={{borderRadius: '12px 12px 0 0'}}>
                  <h4 className="mb-0">أرسل لنا رسالة</h4>
                </div>
                <div className="card-body p-4">
                  <form>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold text-success">الاسم الكامل</label>
                        <input type="text" className="form-control form-control-lg" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold text-success">البريد الإلكتروني</label>
                        <input type="email" className="form-control form-control-lg" required />
                      </div>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold text-success">رقم الهاتف</label>
                        <input type="tel" className="form-control form-control-lg" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold text-success">نوع الاستفسار</label>
                        <select className="form-select form-select-lg">
                          <option value="">اختر نوع الاستفسار</option>
                          <option value="complaint">شكوى</option>
                          <option value="suggestion">اقتراح</option>
                          <option value="technical">مشكلة تقنية</option>
                          <option value="general">استفسار عام</option>
                          <option value="partnership">شراكة</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-bold text-success">الرسالة</label>
                      <textarea className="form-control" rows={6} placeholder="اكتب رسالتك هنا..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      إرسال الرسالة
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* معلومات الاتصال */}
            <div className="col-lg-4">
              <div className="card shadow border-0 mb-4" style={{borderRadius: '12px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-phone text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold text-success">الهاتف</h5>
                  <p className="text-muted">
                    <a href="tel:+201234567890" className="text-decoration-none">+20 123 456 7890</a><br />
                    <a href="tel:+201987654321" className="text-decoration-none">+20 198 765 4321</a>
                  </p>
                </div>
              </div>

              <div className="card shadow border-0" style={{borderRadius: '12px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-envelope text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold text-success">البريد الإلكتروني</h5>
                  <p className="text-muted">
                    <a href="mailto:info@naebak.com" className="text-decoration-none">info@naebak.com</a><br />
                    <a href="mailto:support@naebak.com" className="text-decoration-none">support@naebak.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="text-white py-4" style={{backgroundColor: '#2E7D32'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img 
                src="/images/logo-naebak-white.png" 
                alt="نائبك" 
                className="img-fluid mb-2"
                style={{height: '40px', objectFit: 'contain'}}
              />
            </div>
            <div className="col-md-4 text-center">
              <p className="mb-0 small">© 2024 منصة نائبك. جميع الحقوق محفوظة</p>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end gap-3">
                <a href="#" className="text-white fs-5"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white fs-5"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-white fs-5"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
