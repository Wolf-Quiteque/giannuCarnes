import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/layout/layout";
import $ from "jquery";
import { useRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();

  //   useEffect(() => {
  //     const element = document.querySelector("body");
  //     element.classList.add("dark-mode");
  //     if (router.pathname == "/login" || router.pathname == "/recuperacao") {
  //       const element = document.querySelector("body");
  //       element.classList.add("hold-transition", "login-page");
  //     } else {
  //       const element = document.querySelector("body");
  //       element.classList.remove("login-page");
  //       element.classList.add("sidebar-mini", "layout-fixed", "auto");
  //     }
  //   }, [router]);
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="assets/css/flaticon.css" rel="stylesheet" />
        <link href="assets/css/owl.css" rel="stylesheet" />
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="assets/css/animate.css" rel="stylesheet" />
        <link href="assets/css/color.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/responsive.css" rel="stylesheet" />

        <script src="assets/js/jquery.js" />
        <script src="assets/js/popper.min.js" />
        <script src="assets/js/bootstrap.min.js" />
        <script src="assets/js/owl.js" />
        <script src="assets/js/wow.js" />
        <script src="assets/js/validation.js" />
        <script src="assets/js/jquery.fancybox.js" />
        <script src="assets/js/appear.js" />
        <script src="assets/js/scrollbar.js" />
        <script src="assets/js/nav-tool.js" />

        <script src="assets/js/script.js" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
