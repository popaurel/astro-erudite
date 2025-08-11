import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        // analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello smart investor, it's cookie time!",
                    description: 'We use essentialy cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. For these reasons, we may share your site usage data with our analytics partners. By clicking "Accept all" you agree to our website\'s cookie use as described in our <a href=\"#privacy\">Privacy Policy</a>. You can change your cookie settings at any time by clicking "Manage preferences".',
                    acceptNecessaryBtn: "Reject all",
                    acceptAllBtn: "Accept all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#privacy\">Privacy Policy</a>\n<a href=\"#terms\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptNecessaryBtn: "Reject all",
                    acceptAllBtn: "Accept all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "We use different types of cookies to optimize your experience on our website. Click on the categories below to learn more about their purposes. You may choose which types of cookies to allow and can change your preferences at any time. You can learn more about how we use cookies by visiting our <a href=\"#privacy\">Privacy Policy</a>.",
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are necessary to the core functionality of our website and some of its features.",
                            linkedCategory: "necessary"
                        },
                        // {
                        //     title: "Analytics Cookies",
                        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        //     linkedCategory: "analytics"
                        // },
                        // {
                        //     title: "More information",
                        //     description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        // }
                    ]
                }
            }
        }
    }
});