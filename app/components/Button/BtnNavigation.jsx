
export default function BtnNavigation({ refNext = null, refPrev = null, bulletsRef = null }) {
    return (
        <div className="flex justify-center lg:justify-start items-center gap-4 mt-6 sm:mt-12">
            <button ref={refPrev} className="group hover:-translate-x-2 transition-all duration-300">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-gray group-hover:stroke-king-red transition-all duration-300" d="M10 24.25c0-.927-.916-2.313-1.844-3.475-1.192-1.5-2.617-2.809-4.251-3.807C2.68 16.218 1.195 15.5 0 15.5m0 0c1.195 0 2.681-.719 3.905-1.467 1.634-1 3.059-2.31 4.251-3.807C9.084 9.062 10 7.675 10 6.75M0 15.5h30" stroke="#646464" />
                </svg>
            </button>
            <div ref={bulletsRef} className="h4 text-gray">
            </div>
            <button ref={refNext} className="group hover:translate-x-2 transition-all duration-300">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-gray group-hover:stroke-king-red  transition-all duration-300" d="M20 6.75c0 .928.916 2.313 1.844 3.475 1.192 1.5 2.617 2.809 4.251 3.808C27.32 14.78 28.805 15.5 30 15.5m0 0c-1.195 0-2.681.719-3.905 1.468-1.634 1-3.059 2.308-4.251 3.806C20.916 21.937 20 23.325 20 24.25m10-8.75H0" />
                </svg>
            </button>
        </div>
    )
}