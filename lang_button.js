function changeLanguage(lang) {
    if (lang === 'en') {
        document.documentElement.lang = 'en';
        document.getElementById('enBtn').setAttribute('selected', true);
        document.getElementById('svBtn').removeAttribute('selected');
    } else if (lang === 'sv') {
        document.documentElement.lang = 'sv';
        document.getElementById('svBtn').setAttribute('selected', true);
        document.getElementById('enBtn').removeAttribute('selected');
    }
}