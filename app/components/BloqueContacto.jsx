import LoaderImage from '@/app/components/LoaderImage';
import BtnPrimary from "@/app/components/Button/BtnPrimary";
import BtnArrow from "@/app/components/Button/BtnArrow";
import InputText from '@/app/components/Inputs/InputText';
import InputPhone from '@/app/components/Inputs/InputPhone';
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import { sendMailQuery } from '@/app/api/api';
import { useState } from "react";
import { useRouter } from "next/navigation";
import telFix from '@/app/utils/index'
import { exitsLocale } from '@/app/utils/listMenu'
import { usePathname } from 'next/navigation'

export default function BloqueContacto({ data }) {
    const { titulo, descripcion, direccion, nombreDireccion, numeroDeTelefono, correoDeContacto, imagen } = data;
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter();
    const pathname = usePathname();
    const textName = (exitsLocale(pathname, "es")) ? 'Nombre' : 'Name';
    const textEmail = (exitsLocale(pathname, "es")) ? 'Correo' : 'Email Address';
    const textPhone = (exitsLocale(pathname, "es")) ? 'Télefono' : 'Phone Number';
    const textSubject = (exitsLocale(pathname, "es")) ? 'Asunto' : 'Subject';
    const textMessage = (exitsLocale(pathname, "es")) ? 'Mensaje' : 'Message';
    const txtBtnSubmit = (exitsLocale(pathname, "es")) ? 'Enviar Mensaje' : 'send Message';
    const txtLoading = (exitsLocale(pathname, "es")) ? 'Enviando...' : 'sending...';
    const textRequired = (exitsLocale(pathname, "es")) ? 'Requerido' : 'Required';
    const urlGracias = (exitsLocale(pathname, "es")) ? '/es/gracias/' : '/thank-you/';
    const txtError = (exitsLocale(pathname, "es")) ? 'Algo salió mal, intenta de nuevo.' : 'Something went wrong, try again.';

    const { register, formState: { errors }, control, handleSubmit } = useForm({});
    const onSubmit = async (dataForm) => {
        setIsLoading(true)
        const { data } = await mutate('sendMail', sendMailQuery(dataForm))
        setIsLoading(false)
        setError('')
        if (data.code === 'success') {
            router.push(urlGracias)
        } else {
            setError(txtError);
        }
    }
    return (
        <div className="w-full pt-[80px] xl:pt-[130px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col bg-cream-light py-12 md:py-20">
                    <div className="container">
                        {
                            titulo && (
                                <h2 className="text-black mb-4 md:mb-8">{titulo}</h2>
                            )
                        }
                        {
                            descripcion && (
                                <h5 className="text-gray mb-4 md:mb-8">{descripcion}</h5>
                            )
                        }
                        <form onSubmit={handleSubmit(onSubmit)} noValidate className='w-full'>
                            <InputText name="name" textRequired={textRequired} register={register} placeholder={textName} errors={errors} />
                            <InputText name="email" textRequired={textRequired} register={register}
                                patern={
                                    {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email incorrect"
                                    }
                                }
                                placeholder={textEmail} errors={errors} />
                            <InputPhone textRequired={textRequired} placeholder={textPhone} name={"phone"} errors={errors} control={control} />
                            <InputText textRequired={textRequired} name="subject" register={register} placeholder={textSubject} errors={errors} />
                            <InputText textRequired={textRequired} name="message" register={register} placeholder={textMessage} errors={errors} />
                            <div className='mt-8 flex flex-col lg:items-start'>
                                <BtnPrimary disabled={isLoading} data={{ texto: (isLoading) ? txtLoading : txtBtnSubmit, tipo: "submit" }}></BtnPrimary>
                                {error &&
                                    <div className="mt-2 text-[#ff0000]">
                                        <span className='parrafo'>{error}</span>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col bg-cream-hard py-12 md:py-20">
                    <div className="container">
                        {
                            imagen && (
                                <div className='mb-6 md:mb-8'>
                                    <LoaderImage image={imagen} className={"max-w-full"} />
                                </div>
                            )
                        }
                        {
                            nombreDireccion && (
                                <h5 className="text-black mb-4 md:mb-6">{nombreDireccion}</h5>
                            )
                        }
                        {
                            direccion && (
                                <h5 className="text-gray mb-4 md:mb-6" dangerouslySetInnerHTML={{ __html: direccion }} />
                            )
                        }
                        <div className='flex flex-col items-start gap-4 md:gap-6'>
                            {
                                numeroDeTelefono && (
                                    <BtnArrow text={numeroDeTelefono} type="phone" phone={telFix(numeroDeTelefono)} />
                                )
                            }
                            {
                                correoDeContacto && (
                                    <BtnArrow text={correoDeContacto} type="email" email={correoDeContacto} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}