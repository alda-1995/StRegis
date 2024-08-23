'use client'
import useSWR, { preload } from "swr";
import { inicioQuery, contactoQuery, graciasQuery, avisoQuery, terminosQuery } from '@/app/api/api';
import { useEffect, useRef, useState } from "react";
import BloqueBanner from "@/app/components/BloqueBanner";
import BloqueEventos from "@/app/components/BloqueEventos";
import BloqueActividades from "@/app/components/BloqueActividades";
import BloqueRestaurantes from "@/app/components/BloqueRestaurantes";
import BloqueExperiencias from "@/app/components/BloqueExperiencias";
import BloqueSpa from "@/app/components/BloqueSpa";
import BloqueClases from "@/app/components/BloqueClases";
import BloqueRituales from "@/app/components/BloqueRituales";
import BloqueClub from "@/app/components/BloqueClub";
import ModalClass from "@/app/components/Modals/ModalClass";
import ModalFiles from "@/app/components/Modals/ModalFiles";
import { openModal } from "@/app/utils/animacionesGsap";
import Loader from '@/app/components/Generales/Loader';
import { gsap } from 'gsap';
import Navbar from '@/app/components/Generales/Navbar'
import Footer from '@/app/components/Generales/Footer'

preload('contacto', contactoQuery)
preload('gracias', graciasQuery)
preload('aviso', avisoQuery)
preload('terminos', terminosQuery)

export default function Home() {
  const { data, error, isLoading } = useSWR('inicio', inicioQuery);
  const modalClass = useRef(null);
  const modalFiles = useRef(null);
  const [files, setFiles ] = useState([]);
  const [ dataModalClass, setDataModalClass ] = useState({});

  useEffect(() => {
    if (isLoading) return;
    const tlAnimation = gsap.timeline({ delay: 1 });
    tlAnimation.to("#loaderModal", { opacity: 0, duration: 0.5 });
    tlAnimation.set("#loaderModal", { zIndex : -1 });
  }, [isLoading]);


  const handleOpenModalClass = (dataModalClass) => {
    setDataModalClass(dataModalClass);
    openModal(modalClass.current);
  };

  
  const handleOpenModalFiles = (files) => {
    setFiles(files);
    openModal(modalFiles.current);
  };

  return (
    <>
      <Loader textLoader="Cargando.." />
      <Navbar />
      {(!isLoading && data) && <>
        <ModalClass refModal={modalClass} data={dataModalClass} />
        <ModalFiles refModal={modalFiles} listFiles={files} />
        <BloqueBanner data={data.page.inicio.bloquePrincipal} />
        <BloqueEventos openModal={handleOpenModalFiles} data={data.page.inicio.bloqueEventos} />
        <BloqueActividades data={data.page.inicio.bloqueActividades} />
        <BloqueRestaurantes openModal={handleOpenModalFiles} data={data.page.inicio.bloqueRestaurantes} />
        <BloqueExperiencias data={data.page.inicio.bloqueExperiencias} openModal={handleOpenModalFiles} />
        <BloqueSpa openModal={handleOpenModalFiles} data={data.page.inicio.bloqueSpa} />
        <BloqueClases openModal={handleOpenModalClass} data={data.page.inicio.bloqueClasesDegustaciones} />
        <BloqueRituales data={data.page.inicio.bloqueRituales} />
        <BloqueClub data={data.page.inicio.bloqueClub} />
      </>
      }
      <Footer openModal={handleOpenModalFiles} />
    </>
  );
}
