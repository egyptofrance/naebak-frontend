'use client';

import { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import NewsTicker from '../components/NewsTicker'
import Footer from '../components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div>
      <Header />
      <Banner />
      <NewsTicker />

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

      <Footer />
    </div>
  );
}
