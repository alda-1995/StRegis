'use client'
import useSWR from "swr";
import { termsConditionQuery } from '@/app/api/api';
import BloqueTerms from "@/app/components/Generales/BloqueTerms";
import Navbar from '@/app/components/Generales/Navbar'
import Footer from '@/app/components/Generales/Footer'
export default function Page({ }) {
  const { data, error, isLoading } = useSWR('termsConditions', termsConditionQuery);
  return (
    <>
      <Navbar />
      {(!isLoading && data) && <>
        <BloqueTerms data={data.page.datosLegales} />
      </>
      }
      <Footer />
    </>
  );
}