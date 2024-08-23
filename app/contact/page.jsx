'use client'
import useSWR from "swr";
import { contactEnQuery } from '@/app/api/api';
import BloqueContacto from "@/app/components/BloqueContacto";
import { useEffect } from "react";
import Navbar from '@/app/components/Generales/Navbar'
import Footer from '@/app/components/Generales/Footer'

export default function Page({ }) {
    const { data, error, isLoading } = useSWR('contact', contactEnQuery);
    useEffect(() => {
        if (isLoading) return
    }, [isLoading]);
    return (
        <>
            <Navbar />
            {(!isLoading && data) && <>
                <BloqueContacto data={data.page.contacto.bloquePrincipal} />
            </>
            }
            <Footer />
        </>
    )
}