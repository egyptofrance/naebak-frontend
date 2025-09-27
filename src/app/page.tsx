'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('login')
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
                  <li className="nav-item mx-2"><a className="nav-link text-dark fw-bold" href="/">الرئيسية</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="#">النواب</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="#">المرشحين</a></li>
                  <li className="nav-item mx-2"><a className="nav-link text-dark" href="/contact">اتصل بنا</a></li>
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
                  <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/">الرئيسية</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="#">النواب</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="#">المرشحين</a></li>
                  <li className="nav-item"><a className="nav-link text-dark" href="/contact">اتصل بنا</a></li>
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
                <h2 className="fw-bold text-success mb-0">منصة نائبك</h2>
              </div>
              <p className="lead text-muted">
                أول منصة انتخابية للتواصل بين النواب والمرشحين مع المواطن المصري
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التسجيل والدخول */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-lg border-0" style={{borderRadius: '12px'}}>
                <div className="card-body p-0">
                  {/* التبويبات */}
                  <div className="d-flex" style={{borderRadius: '12px 12px 0 0', overflow: 'hidden'}}>
                    <button
                      className={`btn flex-fill py-3 border-0 fw-bold ${
                        activeTab === 'login' 
                          ? 'btn-success text-white' 
                          : 'btn-light text-success'
                      }`}
                      onClick={() => setActiveTab('login')}
                      style={{borderRadius: '12px 0 0 0', fontSize: '0.9rem'}}
                    >
                      تسجيل الدخول
                    </button>
                    <button
                      className={`btn flex-fill py-3 border-0 fw-bold ${
                        activeTab === 'register' 
                          ? 'btn-primary text-white' 
                          : 'btn-light text-primary'
                      }`}
                      onClick={() => setActiveTab('register')}
                      style={{borderRadius: '0 12px 0 0', fontSize: '0.9rem'}}
                    >
                      إنشاء حساب
                    </button>
                  </div>

                  {/* محتوى التبويبات */}
                  <div className="p-4">
                    {activeTab === 'login' && (
                      <form>
                        <div className="mb-3">
                          <input 
                            type="email" 
                            className="form-control form-control-lg" 
                            placeholder="البريد الإلكتروني"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="mb-3">
                          <input 
                            type="password" 
                            className="form-control form-control-lg" 
                            placeholder="كلمة المرور"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label text-muted">تذكرني</label>
                          </div>
                          <a href="#" className="text-success text-decoration-none">نسيت كلمة المرور؟</a>
                        </div>
                        <button type="submit" className="btn btn-success btn-lg w-100 mb-3">
                          تسجيل الدخول
                        </button>
                      </form>
                    )}

                    {activeTab === 'register' && (
                      <form>
                        <div className="mb-3">
                          <select className="form-select form-select-lg" style={{fontSize: '0.9rem'}}>
                            <option value="">اختر نوع الحساب</option>
                            <option value="citizen">مواطن له صوت انتخابي</option>
                            <option value="mp">عضو حالي في مجلس النواب</option>
                            <option value="senator">عضو حالي في مجلس الشيوخ</option>
                            <option value="mp-candidate">مرشح لعضوية مجلس النواب</option>
                            <option value="senator-candidate">مرشح لعضوية مجلس الشيوخ</option>
                          </select>
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="form-control form-control-lg" 
                              placeholder="الاسم الأول"
                              style={{fontSize: '0.9rem'}}
                            />
                          </div>
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="form-control form-control-lg" 
                              placeholder="الاسم الأخير"
                              style={{fontSize: '0.9rem'}}
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <input 
                            type="email" 
                            className="form-control form-control-lg" 
                            placeholder="البريد الإلكتروني"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="mb-3">
                          <input 
                            type="tel" 
                            className="form-control form-control-lg" 
                            placeholder="رقم الهاتف (مثال: 01012345678)"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="الرقم القومي (14 رقم)"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-md-6">
                            <input 
                              type="password" 
                              className="form-control form-control-lg" 
                              placeholder="كلمة المرور"
                              style={{fontSize: '0.9rem'}}
                            />
                          </div>
                          <div className="col-md-6">
                            <input 
                              type="password" 
                              className="form-control form-control-lg" 
                              placeholder="تأكيد كلمة المرور"
                              style={{fontSize: '0.9rem'}}
                            />
                          </div>
                        </div>
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label text-muted">
                            أوافق على <a href="/terms" className="text-primary">الشروط والأحكام</a> و <a href="/privacy" className="text-primary">سياسة الخصوصية</a>
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                          إنشاء حساب
                        </button>
                      </form>
                    )}

                    {/* زر دخول كزائر */}
                    <div className="text-center pt-3 border-top">
                      <button 
                        className="btn btn-lg px-4 py-3 fw-normal"
                        style={{
                          backgroundColor: '#E67514',
                          color: 'black',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '0.9rem'
                        }}
                      >
                        دخول كزائر
                      </button>
                      <p className="text-muted small mt-2 mb-0">
                        تصفح المنصة بدون تسجيل
                      </p>
                    </div>
                  </div>
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
