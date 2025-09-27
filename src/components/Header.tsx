'use client';

import { useState, useEffect } from 'react'

export default function Header() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 10000) + 50000)
  }, [])

  return (
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
                <i className="fas fa-bell fs-5" style={{color: '#004705'}}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
              </div>
              
              {/* عداد الزوار - مخفي في الموبايل الصغير */}
              <div className="d-none d-md-block text-muted small">
                {visitorCount.toLocaleString()} زائر
              </div>
              
              {/* زر تسجيل شكوى */}
              <button 
                className="btn btn-sm fw-bold"
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
                <li className="nav-item"><a className="nav-link text-dark" href="/contact">اتصل بنا</a></li>
                <li className="nav-item"><a className="nav-link text-dark" href="/about">من نحن</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
