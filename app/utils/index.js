const telFix = (tel) => {
    if (tel == "" || !tel)
        return;
    tel = tel.replace(/\(/g, '');
    tel = tel.replace(/\)/g, '');
    tel = tel.replace(/ /g, '');
    tel = tel.replace(/-/g, '');
    tel = tel.split('.').join("");
    tel = tel.trim();
    return tel;
};

export default telFix;