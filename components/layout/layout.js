import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import InactiveAccountModal from "../modalComponent";
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../../lib/session";

export default function Layout({ children }) {

  const getsession = async () => {
 
    
      return (
        <div class="boxed_wrapper ltr">
    
        <div class="preloader"></div>
    
    
    
        <div class="xs-sidebar-group info-group info-sidebar">
            <div class="xs-overlay xs-bg-black"></div>
            <div class="xs-sidebar-widget">
                <div class="sidebar-widget-container">
                    <div class="widget-heading">
                        <a href="##" class="close-side-widget">X</a>
                    </div>
                    <div class="sidebar-textwidget">
                        <div class="sidebar-info-contents">
                            <div class="content-inner">
                                <div class="logo">
                                    <a href="#index.html"><img src="assets/images/logo-2.png" alt="" /></a>
                                </div>
                                <div class="content-box">
                                    <h4>Sobre Nós</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <a href="#about.html" class="theme-btn">Sobre Nós<i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                                <div class="contact-info">
                                    <h4>Informações de Contato</h4>
                                    <ul>
                                        <li>Chicago 12, Melborne City, EUA</li>
                                        <li><a href="#tel:+8801682648101">+88 01682648101</a></li>
                                        <li><a href="#mailto:xxx">xxx</a></li>
                                    </ul>
                                </div>
                                <ul class="social-box">
                                    <li class="facebook"><a href="##" class="fab fa-facebook-f"></a></li>
                                    <li class="twitter"><a href="##" class="fab fa-twitter"></a></li>
                                    <li class="linkedin"><a href="##" class="fab fa-linkedin-in"></a></li>
                                    <li class="instagram"><a href="##" class="fab fa-instagram"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    <header class="main-header style-two">
    <div class="header-top">
        <div class="auto-container clearfix">
            <div class="top-left pull-left clearfix">
                <div class="left-info pull-left clearfix">
                    <div class="language">
                        <div class="lang-btn">
                            <span class="icon flaticon-location"></span>
                            <span class="txt">Português </span>
                            <span class="arrow fa fa-angle-down"></span>
                        </div>
                        <div class="lang-dropdown">
                            <ul>
                                <li><a href="#index.html">Alemão</a></li>
                                <li><a href="#index.html">Italiano</a></li>
                                <li><a href="#index.html">Chinês</a></li>
                                <li><a href="#index.html">Russo</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul class="social-links clearfix">
                        <li><a href="#index-2.html"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#index-2.html"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#index-2.html"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
                <div class="logo-box">
                    <figure class="logo"><a href="#index.html"><img src="assets/images/logo-2.png" alt="" /></a></figure>
                </div>
            </div>
            <div class="top-right pull-right">
                <ul class="menu-right-content pull-left clearfix">
                    <li class="user-box"><a href="#index.html"><i class="flaticon-user-symbol-of-thin-outline"></i></a></li>
                    <li class="search-box-outer">
                        <div class="dropdown">
                            <button class="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flaticon-search"></span></button>
                            <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                <li class="panel-outer">
                                    <div class="form-container">
                                        <form method="post" action="blog.html">
                                            <div class="form-group">
                                                <input type="search" name="field-name" value="" placeholder="Pesquisar...." required="" />
                                                <button type="submit" class="search-btn"><span class="fas fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="cart-box"><a href="#shop-1.html"><i class="flaticon-shopping-cart-1"></i><span>0</span></a></li>
                    <li class="nav-box">
                        <div class="nav-btn nav-toggler navSidebar-button clearfix">
                            <i class="flaticon-list"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="header-upper">
        <div class="auto-container">
            <div class="outer-box clearfix">
                <div class="menu-area">
                    <div class="mobile-nav-toggler">
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li class="current dropdown"><a href="#index.html">Início</a>
                              <ul>
                                        <li><a href="#index.html">Página Inicial 01</a></li>
                                        <li><a href="#index-2.html">Página Inicial 02</a></li>
                                        <li><a href="#index-rtl.html">Início RTL</a></li>
                                        <li><a href="#index-onepage.html">Início de uma página</a></li>
                                        <li class="dropdown"><a href="#index.html">Estilo de Cabeçalho</a>
                                            <ul>
                                                <li><a href="#index.html">Estilo de Cabeçalho 01</a></li>
                                                <li><a href="#index-2.html">Estilo de Cabeçalho 02</a></li>
                                            </ul>
                                        </li>
                                    </ul> 
                                </li> 
                                <li><a href="#about.html">Sobre</a></li> 
                                <li class="dropdown"><a href="#index.html">Carnes</a>
                                 <ul>
                                        <li><a href="#shop-1.html">Loja 01</a></li>
                                        <li><a href="#shop-2.html">Loja 02</a></li>
                                        <li><a href="#shop-details.html">Detalhes da Loja</a></li>
                                        <li><a href="#pricing.html">Plano de Preços</a></li>
                                        <li><a href="#team.html">Nossa Equipe</a></li>
                                        <li><a href="#faq.html">Perguntas Frequentes</a></li>
                                        <li><a href="#testimonial.html">Depoimentos</a></li>
                                        <li><a href="#error.html">Página de Erro</a></li>
                                    </ul> 
                                </li>
                         
                                <li class="dropdown"><a href="#index.html">Notícias</a>
                                    <ul>
                                        <li><a href="#blog.html">Nosso Blog</a></li>
                                        <li><a href="#blog-details.html">Detalhes do Blog</a></li>
                                    </ul>
                                </li> 
                                <li><a href="#contact.html">Contato</a></li>               
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
    <div class="sticky-header">
        <div class="auto-container">
            <div class="outer-box clearfix">
                <figure class="logo-box pull-left"><a href="#index.html"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                <div class="menu-area pull-right">
                    <nav class="main-menu clearfix">
             
                    </nav>
                </div>
            </div>
        </div>
    </div>
    </header>

        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="#index.html"><img src="assets/images/logo-2.png" alt="" title="" /></a></div>
                <div class="menu-outer"></div>
                <div class="contact-info">
                    <h4>Contacto</h4>
                    <ul>
                        <li>Talaton Luanda, Angola</li>
                        <li><a href="#tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="#mailto:xxx">xxx</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="#index.html"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#index.html"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="#index.html"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="#index.html"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="#index.html"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    
     {children}
        <footer class="main-footer mr-0">
            <div class="auto-container">
                <div class="footer-top">
                    <div class="widget-section">
                        <div class="row clearfix">
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget logo-widget">
                                    <figure class="footer-logo"><a href="#index.html"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                                    <div class="text">
                                        <p>A probabilidade de alguém precisar dos seus serviços ou quererLorem ipsum dolor sit amet, consectetur adipisicing </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget contact-widget">
                                    <ul class="info clearfix">
                                        <li>
                                            <i class="flaticon-phone"></i>
                                            <p>Ligue para nós</p>
                                            <h5><a href="#tel:8602729738">860 -272 -9738</a></h5>
                                        </li>
                                        <li>
                                            <i class="flaticon-maps-and-flags"></i>
                                            <p>Endereço</p>
                                            <h5>4249 Hart Street, Enfield</h5>
                                        </li>
                                    </ul>
                                    <ul class="social-links clearfix"> 
                                        <li><a href="#index.html"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#index.html"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#index.html"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#index.html"><i class="fab fa-dribbble"></i></a></li>
                                        <li><a href="#index.html"><i class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget newsletter-widget">
                                    <div class="widget-title">
                                        <h6>Newsletter</h6>
                                    </div>
                                    <div class="widget-content">
                                        <p>Fique atualizado sobre tudo que é novo e importante</p>
                                        <form action="contact.html" method="post" class="newsletter-form">
                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" required="" />
                                                <button type="submit"><i class="flaticon-paper-plane-1"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom clearfix">
                    <div class="copyright pull-left">
                        <h5>Direitos autorais &copy; 2023. CCN. Todos os direitos reservados <a href="#" target="_blank">CCN</a>.</h5>
                    </div>
                    <ul class="footer-nav pull-right clearfix">
                        <li><a href="#index.html">Página Inicial</a></li>
                        <li><a href="#index.html">Sobre</a></li>
                        <li><a href="#index.html">Blog</a></li>
                        <li><a href="#index.html">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    
        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="fa fa-arrow-up"></span>
        </button>
    </div>
      );
    }
    
  
}
