function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        autoDisplay: false
    }, 'google_translate_element');
}

$("#wtBtn").click(function () {

      $("body").addClass("fade-out");

      setTimeout(function () {
        window.location.href = "https://wa.me/919009034503?text=Hello%20GRV%20Associates,%20I%20need%20assistance%20regarding%20property%20documentation.";
      }, 40);

    });



    document.addEventListener("DOMContentLoaded", function() {
    // Check if cookie exists
    const langSet = getCookie("lang_popup_shown");

    if (!langSet) {
        // Show popup if no cookie
        document.getElementById("langModal").style.display = "flex";
    }
});
function setLanguage(lang) {
    // 1. Apni popup waali cookie set karein (24 ghante ke liye)
    setCookie("lang_popup_shown", "true", 1);

    // 2. Google Translate ki official cookie set karein
    // Format: /page_language/target_language (e.g., /en/hi)
    if (lang === 'hi') {
        document.cookie = "googtrans=/en/hi; path=/; domain=" + window.location.hostname;
        document.cookie = "googtrans=/en/hi; path=/"; // Fallback safe cookie
    } else {
        // Agar English select kiya toh Google cookie delete kar dein taaki default language dikhe
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }

    // 3. Popup ko chhupayein
    document.getElementById("langModal").style.display = "none";

    // 4. Page reload karein taaki Google Translate nayi cookie padh kar page badal de
    window.location.reload();
}

// Helper Function: Cookie Create karne ke liye
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Helper Function: Cookie Read karne ke liye
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = String(c).substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}