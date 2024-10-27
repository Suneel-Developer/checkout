"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../home/Hero";
import Information from "../home/Information";
import OurServices from "../home/OurServices";
import SectionContent from "../home/SectionContent";
import MemberCountries from "../home/MemberCountries";
import { useParams } from "next/navigation"; // For dynamic route params

const LanguagePage = () => {
  const { lang } = useParams(); // Access the `lang` parameter from the route
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const selectedLang = lang || "en"; // Default to 'en' if no lang parameter
    if (i18n.isInitialized) {
      i18n.changeLanguage(selectedLang).catch((err) => {
        console.error("Error changing language:", err);
      });
      localStorage.setItem("selectedLanguage", selectedLang);
    }
  }, [lang, i18n]);

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Hero />
      <Information />
      <OurServices />
      <SectionContent />
      <MemberCountries />
      <Footer />
    </I18nextProvider>
  );
};

export default LanguagePage;
