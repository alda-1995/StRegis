import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { listMenuTranslation, getKeyByValue, exitsLocale } from '@/app/utils/listMenu'

export default function BtnLang() {
  const pathname = usePathname();
  const router = useRouter();

  const isLangEs = (exitsLocale(pathname, 'es')) ? true : false;

  function switchLocale(locale) {
    if(pathname === "/" || pathname == "/es/"){
      const urlHome = (locale == "es") ? "/es/" : "/"
      router.push(urlHome);
      return;
    }

    if (locale == "en") {
      var pathEs = pathname.replace(/^\/es\//, '/');
      const urlEn = getKeyByValue(listMenuTranslation, pathEs);
      router.push(urlEn);
      return;
    }

    let newPath = listMenuTranslation[pathname];
    if (!exitsLocale(pathname, locale)) {
      newPath = `/${locale}${newPath}`;
    }
    router.push(newPath);
  }

  return (
    <>
      <div className='pl-2 md:pl-4 relative h-[35px] md:h-[40px] flex items-center'>
        <div className='absolute top-0 left-0 h-full border-l-2 border-l-astro-gray'></div>
        {
          isLangEs ? (
            <button onClick={() => switchLocale('en')} className='text-gray font-menu uppercase duration-300 transition-all hover:text-king-red'>EN</button>
          ) : (
            <button onClick={() => switchLocale('es')} className='text-gray font-menu uppercase duration-300 transition-all hover:text-king-red'>ES</button>
          )
        }
      </div>
    </>
  )
}