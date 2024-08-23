import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const closeModal = (modalElement) => {
    const tlMenu = gsap.timeline();
    tlMenu.to(modalElement, { opacity: 0, ease: "power1.inOut", duration: 0.5 });
    tlMenu.set("html", { "overflow-y": "unset" });
    tlMenu.set(modalElement, { zIndex: -1 });
};

export const openModal = (modalElement) => {
    const tlMenu = gsap.timeline();
    tlMenu.set("html", { "overflow-y": "hidden" });
    tlMenu.set(modalElement, { zIndex: 9999 });
    tlMenu.to(modalElement, { opacity: 1, ease: "power1.inOut", duration: 0.5 });
};

export const openMenu = (modalElement) => {
    const tlMenu = gsap.timeline();
    tlMenu.set("html", { "overflow-y": "hidden" });
    tlMenu.set(modalElement, { zIndex: 9999 });
    tlMenu.to(modalElement, { x: "0%", ease: "power1.inOut", duration: 0.5 });
    tlMenu.to('.link-animation-menu', { y: 0, opacity: 1, stagger: 0.02, ease: "power1.inOut", duration: 0.3 });
};

export const closeMenu = (modalElement) => {
    const tlMenu = gsap.timeline();
    tlMenu.to('.link-animation-menu', { y: "16px", opacity: 0, stagger: 0.02, ease: "power1.inOut", duration: 0.3 });
    tlMenu.to(modalElement, { x: "100%", ease: "power1.inOut", duration: 0.5 });
    tlMenu.set("html", { "overflow-y": "unset" });
    tlMenu.set(modalElement, { zIndex: -1 });
};

export const animationOpacityUp = (element, delayValue) => {
    gsap.fromTo(element,
        { opacity: 0, y: "32px" },
        {
            opacity: 1,
            y: "0%",
            delay: delayValue ? delayValue : 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 70%',
                end: 'top 70%',
                markers: false,
            },
        });
};

export const animationOpacityOneUp = (element, delayValue) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 80%',
            markers: false,
            onEnter: () => {
                gsap.to(element, { opacity: 1, y: 0, duration: 0.1, delay: delayValue ? delayValue : 0, });
            },

        }
    });
};

export const animationOpacityUpBanner = (element, delayValue) => {
    gsap.fromTo(element,
        { opacity: 0, y: "32px" },
        {
            opacity: 1,
            y: "0%",
            delay: delayValue ? delayValue : 0,
            duration: 1
        });
};


export const animationBlock = (element, color) => {
    const animationBackground = gsap.timeline();
    animationBackground.to("body", {
        backgroundColor: color,
        immediateRender: false,
        scrollTrigger: {
            trigger: element,
            start: '-10% 50%',
            end: '15% 50%',
            scrub: true,
            markers: false,
        }
    })
};