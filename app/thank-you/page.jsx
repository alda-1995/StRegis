'use client'
import useSWR from "swr";
import { thankYouQuery } from '@/app/api/api';
import BannerGracias from "@/app/components/BannerGracias";
import BloqueSeparador from "@/app/components/BloqueSeparador";
import Navbar from '@/app/components/Generales/Navbar'
import Footer from '@/app/components/Generales/Footer'
export default function Page({ }) {
  const { data, error, isLoading } = useSWR('thankYou', thankYouQuery);
  return (
    <>
      <Navbar />
      {(!isLoading && data) && <>
        <BannerGracias data={data.page.gracias.bloquePrincipal} />
        <BloqueSeparador />
      </>
      }
      <Footer />
    </>
  );
}