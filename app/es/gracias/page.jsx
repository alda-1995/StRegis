'use client'
import useSWR from "swr";
import { graciasQuery } from '@/app/api/api';
import BannerGracias from "@/app/components/BannerGracias";
import BloqueSeparador from "@/app/components/BloqueSeparador";
import Navbar from '@/app/components/Generales/Navbar'
import Footer from '@/app/components/Generales/Footer'
export default function Page({ }) {
  const { data, error, isLoading } = useSWR('gracias', graciasQuery);
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