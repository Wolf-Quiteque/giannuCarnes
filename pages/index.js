import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section class="main-slider style-two">
        <div class="main-slider-carousel owl-theme owl-carousel owl-dots-none">
          <div class="slide-item">
            <div
              class="image-layer"
              style="background-image:url(assets/images/banner/banner-4.jpg)"
            ></div>
            <div class="auto-container">
              <div class="content-box centred">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div class="btn-box">
                  <a href="#index.html" class="theme-btn">
                    Saiba Mais<i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-item">
            <div
              class="image-layer"
              style="background-image:url(assets/images/banner/banner-5.jpg)"
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div class="btn-box">
                  <a href="#index.html" class="theme-btn">
                    Saiba Mais<i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-item">
            <div
              class="image-layer"
              style="background-image:url(assets/images/banner/banner-6.jpg)"
            ></div>
            <div class="auto-container">
              <div class="content-box centred">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div class="btn-box">
                  <a href="#index.html" class="theme-btn">
                    Saiba Mais<i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-section bg-color-3">
        <div class="auto-container">
          <div
            class="inner-container clearfix wow slideInLeft animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-item">
              <div class="inner-box">
                <div class="icon-box">
                  <i class="flaticon-meat-4"></i>
                </div>
                <h3>Veal Entrecote</h3>
                <p>Lorem ipsum dolor sit amet, consec tetur adipis</p>
              </div>
            </div>
            <div class="single-item">
              <div class="inner-box">
                <div class="icon-box">
                  <i class="flaticon-hang"></i>
                </div>
                <h3>Pork Tenderloin</h3>
                <p>Lorem ipsum dolor sit amet, consec tetur adipis</p>
              </div>
            </div>
            <div class="single-item">
              <div class="inner-box">
                <div class="icon-box">
                  <i class="flaticon-meat-5"></i>
                </div>
                <h3>Beaf Ribs</h3>
                <p>Lorem ipsum dolor sit amet, consec tetur adipis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-style-two alternate-2 bg-color-3">
        <div class="auto-container">
          <div class="row align-items-center clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_1">
                <div class="image-box">
                  <figure class="image image-1">
                    <img src="assets/images/resource/about-2.jpg" alt="" />
                  </figure>
                  <figure class="image image-2">
                    <img src="assets/images/resource/about-3.jpg" alt="" />
                  </figure>
                  <figure class="image image-3">
                    <img src="assets/images/resource/about-1.png" alt="" />
                  </figure>
                  <figure class="image image-4">
                    <img src="assets/images/resource/about-2.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_2">
                <div class="content-box light">
                  <div class="sec-title light style-two">
                    <span>Sobre Nós</span>
                    <h2>Sobre Nossa Empresa</h2>
                  </div>
                  <div class="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris
                    </p>
                  </div>
                  <ul class="list clearfix">
                    <li>
                      <i class="flaticon-call-center-agent"></i>
                      Atendimento ao Cliente
                    </li>
                    <li>
                      <i class="flaticon-free-delivery"></i>
                      Entrega Grátis
                    </li>
                    <li>
                      <i class="flaticon-return-of-investment"></i>
                      Devolução Gratuita
                    </li>
                    <li>
                      <i class="flaticon-winner"></i>
                      Ofertas Incríveis
                    </li>
                  </ul>
                  <div class="link-box">
                    <a href="#about.html">
                      Saiba mais sobre nossos benefícios
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="service-style-two centred bg-color-4">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                class="service-block-two wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <i class="flaticon-mutton"></i>
                  </div>
                  <h3>
                    <a href="#index-2.html">Acém</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <div class="link">
                    <a href="#index-2.html">
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                class="service-block-two wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <i class="flaticon-meat-1"></i>
                  </div>
                  <h3>
                    <a href="#index-2.html">Alcatra</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <div class="link">
                    <a href="#index-2.html">
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                class="service-block-two wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <i class="flaticon-meatloaf"></i>
                  </div>
                  <h3>
                    <a href="#index-2.html">Alcatra com Maminha</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <div class="link">
                    <a href="#index-2.html">
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shop-style-two bg-color-3">
        <div class="auto-container">
          <div class="sec-title light text-center">
            <span>Compre Agora</span>
            <h2>Produtos em Destaque</h2>
          </div>
          <div class="row clearfix">
            <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                class="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/resource/shop/shop-5.jpg" alt="" />
                    <ul class="list clearfix">
                      <li>
                        <a href="#shop-1.html">
                          <i class="flaticon-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#shop-details.html">adicionar ao carrinho</a>
                      </li>
                    </ul>
                  </figure>
                  <div class="lower-content">
                    <div class="inner">
                      <h6>
                        <a href="#shop-details.html">
                          Óleo de Cacay Life Basics
                        </a>
                      </h6>
                      <span class="price">$ 400.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                class="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/resource/shop/shop-6.jpg" alt="" />
                    <ul class="list clearfix">
                      <li>
                        <a href="#shop-1.html">
                          <i class="flaticon-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#shop-details.html">adicionar ao carrinho</a>
                      </li>
                    </ul>
                  </figure>
                  <div class="lower-content">
                    <div class="inner">
                      <h6>
                        <a href="#shop-details.html">Frango inteiro</a>
                      </h6>
                      <span class="price">$ 450.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                class="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/resource/shop/shop-7.jpg" alt="" />
                    <ul class="list clearfix">
                      <li>
                        <a href="#shop-1.html">
                          <i class="flaticon-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#shop-details.html">adicionar ao carrinho</a>
                      </li>
                    </ul>
                  </figure>
                  <div class="lower-content">
                    <div class="inner">
                      <h6>
                        <a href="#shop-details.html">Presunto de Porco</a>
                      </h6>
                      <span class="price">$ 500.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                class="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/resource/shop/shop-8.jpg" alt="" />
                    <ul class="list clearfix">
                      <li>
                        <a href="#shop-1.html">
                          <i class="flaticon-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#shop-details.html">adicionar ao carrinho</a>
                      </li>
                    </ul>
                  </figure>
                  <div class="lower-content">
                    <div class="inner">
                      <h6>
                        <a href="#shop-details.html">Costelas de Boi</a>
                      </h6>
                      <span class="price">$ 380.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more-btn centred">
            <a href="#shop-1.html" class="theme-btn">
              Ver todos os produtos
            </a>
          </div>
        </div>
      </section>

      <section class="testimonial-section alternate-2 bg-color-1">
        <div
          class="icon-layer"
          style="background-image: url(assets/images/icons/bg-icon-1.png);"
        ></div>
        <div class="auto-container">
          <div class="sec-title style-two">
            <span>Depoimentos</span>
            <h2>Por que as Pessoas Acreditam em Nós!</h2>
          </div>
          <div class="two-column-carousel owl-carousel owl-theme owl-dots-none">
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="icon-box">
                  <i class="flaticon-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <div class="author-box">
                  <figure class="image-box">
                    <img
                      src="assets/images/resource/testimonial-1.png"
                      alt=""
                    />
                  </figure>
                  <h5>Richard K. Le</h5>
                  <span class="designation">Gerente de HD</span>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="icon-box">
                  <i class="flaticon-quote"></i>
                </div>
                <p>
                  Asi enim ad minim veniam, quis nostrud exerci tation uLorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore
                </p>
                <div class="author-box">
                  <figure class="image-box">
                    <img
                      src="assets/images/resource/testimonial-2.png"
                      alt=""
                    />
                  </figure>
                  <h5>Donnell J. Creech</h5>
                  <span class="designation">Sonografista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-section alternate-2">
        <div class="auto-container">
          <div class="single-item-carousel owl-carousel owl-theme owl-dots-none">
            <div class="portfolio-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/portfolio-1.jpg" alt="" />
                </figure>
                <div class="lower-content">
                  <div class="inner">
                    <span>Meat</span>
                    <h4>
                      <a href="#index.html">Pork tenderloin</a>
                    </h4>
                    <div class="link">
                      <a href="#index.html">
                        <i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/portfolio-2.jpg" alt="" />
                </figure>
                <div class="lower-content">
                  <div class="inner">
                    <span>Meat</span>
                    <h4>
                      <a href="#index.html">Pork tenderloin</a>
                    </h4>
                    <div class="link">
                      <a href="#index.html">
                        <i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/portfolio-3.jpg" alt="" />
                </figure>
                <div class="lower-content">
                  <div class="inner">
                    <span>Meat</span>
                    <h4>
                      <a href="#index.html">Pork tenderloin</a>
                    </h4>
                    <div class="link">
                      <a href="#index.html">
                        <i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="news-style-two bg-color-3">
        <div class="auto-container">
          <div class="sec-title style-two light centred">
            <span>Novidades</span>
            <h2>Temos Novidades</h2>
          </div>
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="#blog-details.html">
                      <img src="assets/images/news/news-1.jpg" alt="" />
                    </a>
                  </figure>
                  <div class="lower-content">
                    <ul class="post-info clearfix">
                      <li>
                        <a href="#index.html">by Leonard</a>,
                      </li>
                      <li>1 week ago</li>
                    </ul>
                    <h4>
                      <a href="#blog-details.html">
                        Seiusmod tempor incididunt ut labore et dolore magna
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div class="link">
                      <a href="#blog-details.html">
                        READ MORE<i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="#blog-details.html">
                      <img src="assets/images/news/news-2.jpg" alt="" />
                    </a>
                  </figure>
                  <div class="lower-content">
                    <ul class="post-info clearfix">
                      <li>
                        <a href="#index.html">by Leonard</a>,
                      </li>
                      <li>1 week ago</li>
                    </ul>
                    <h4>
                      <a href="#blog-details.html">
                        Fagna aliqua Ut enim ad minim veniam, quis nostrud
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div class="link">
                      <a href="#blog-details.html">
                        READ MORE<i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500m"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="#blog-details.html">
                      <img src="assets/images/news/news-3.jpg" alt="" />
                    </a>
                  </figure>
                  <div class="lower-content">
                    <ul class="post-info clearfix">
                      <li>
                        <a href="#index.html">by Leonard</a>,
                      </li>
                      <li>1 week ago</li>
                    </ul>
                    <h4>
                      <a href="#blog-details.html">
                        Golor sitmet consectetur adipisi cing eiusmod tempo
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div class="link">
                      <a href="#blog-details.html">
                        READ MORE<i class="flaticon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
