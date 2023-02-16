const paths = {
  film: {
    path: "M6.4 0H14.4C15.2825 0 16 0.728711 16 1.625V7.3125C16 8.20879 15.2825 8.9375 14.4 8.9375H6.4C5.5175 8.9375 4.8 8.20879 4.8 7.3125V1.625C4.8 0.728711 5.5175 0 6.4 0ZM11.9 2.70918C11.7875 2.53906 11.6 2.4375 11.4 2.4375C11.2 2.4375 11.0125 2.53906 10.9 2.70918L9.5 4.84199L9.0675 4.29102C8.9525 4.14629 8.78 4.0625 8.6 4.0625C8.42 4.0625 8.245 4.14629 8.1325 4.29102L6.5325 6.32227C6.3875 6.50508 6.36 6.75644 6.46 6.96719C6.56 7.17793 6.77 7.3125 7 7.3125H9H10.2H13.8C14.0225 7.3125 14.225 7.18809 14.33 6.99004C14.435 6.79199 14.4225 6.55078 14.3 6.36543L11.9 2.70918ZM8.4 2.4375C8.4 1.98809 8.0425 1.625 7.6 1.625C7.1575 1.625 6.8 1.98809 6.8 2.4375C6.8 2.88691 7.1575 3.25 7.6 3.25C8.0425 3.25 8.4 2.88691 8.4 2.4375ZM1.6 3.25H4V9.75V10.5625C4 11.0119 4.3575 11.375 4.8 11.375H8C8.4425 11.375 8.8 11.0119 8.8 10.5625V9.75H12.8V11.375C12.8 12.2713 12.0825 13 11.2 13H1.6C0.7175 13 0 12.2713 0 11.375V4.875C0 3.97871 0.7175 3.25 1.6 3.25ZM1.8 4.875C1.58 4.875 1.4 5.05781 1.4 5.28125V5.6875C1.4 5.91094 1.58 6.09375 1.8 6.09375H2.2C2.42 6.09375 2.6 5.91094 2.6 5.6875V5.28125C2.6 5.05781 2.42 4.875 2.2 4.875H1.8ZM1.8 7.51562C1.58 7.51562 1.4 7.69844 1.4 7.92188V8.32812C1.4 8.55156 1.58 8.73438 1.8 8.73438H2.2C2.42 8.73438 2.6 8.55156 2.6 8.32812V7.92188C2.6 7.69844 2.42 7.51562 2.2 7.51562H1.8ZM1.8 10.1562C1.58 10.1562 1.4 10.3391 1.4 10.5625V10.9688C1.4 11.1922 1.58 11.375 1.8 11.375H2.2C2.42 11.375 2.6 11.1922 2.6 10.9688V10.5625C2.6 10.3391 2.42 10.1562 2.2 10.1562H1.8ZM10.2 10.5625V10.9688C10.2 11.1922 10.38 11.375 10.6 11.375H11C11.22 11.375 11.4 11.1922 11.4 10.9688V10.5625C11.4 10.3391 11.22 10.1562 11 10.1562H10.6C10.38 10.1562 10.2 10.3391 10.2 10.5625Z",
    viewbox: "0 0 16 13",
  },
  aperture: {
    path: "M6.5 0C10.0875 0 13 2.91254 13 6.5C13 10.0875 10.0875 13 6.5 13C2.91254 13 0 10.0875 0 6.5C0 2.91254 2.91254 0 6.5 0ZM2.51171 10.1638C3.50188 11.2412 4.92267 11.9167 6.5 11.9167H6.50217L4.00075 7.58442L2.51171 10.1638ZM11.1908 9.20833H6.18963L7.67867 11.7878C9.17746 11.4546 10.4433 10.4997 11.1908 9.20833ZM1.33196 4.875C1.17054 5.38796 1.08333 5.93396 1.08333 6.5C1.08333 7.48746 1.34821 8.41371 1.81079 9.21104L3.37567 6.50108L3.37513 6.5L3.37675 6.49892L4.31438 4.875H1.33196ZM11.1919 3.79329L8.69104 8.125H11.668C11.8295 7.61204 11.9167 7.06604 11.9167 6.5C11.9167 5.51417 11.6529 4.59008 11.1919 3.79329ZM7.43979 4.875H5.56508L4.62638 6.50108L5.564 8.125H7.44033L8.37796 6.50054L7.43979 4.875ZM9.00358 5.41721L10.4915 2.83996C9.50138 1.76096 8.08004 1.08388 6.50163 1.08333L9.00358 5.41721ZM5.32458 1.21171C3.82471 1.54375 2.55721 2.49925 1.80917 3.79167H6.81417L5.32458 1.21171Z",
    viewbox: "0 0 13 13",
  },
  lens: {
    path: "M13 6.5C13 10.0902 10.0902 13 6.5 13C2.90977 13 0 10.0902 0 6.5C0 2.90977 2.90977 0 6.5 0C10.0902 0 13 2.90977 13 6.5ZM6.5 1.21875C3.58262 1.21875 1.21875 3.58262 1.21875 6.5C1.21875 9.41738 3.58262 11.7812 6.5 11.7812C9.41738 11.7812 11.7812 9.41738 11.7812 6.5C11.7812 3.58262 9.41738 1.21875 6.5 1.21875Z",
    viewbox: "0 0 13 13",
  },
  time: {
    path: "M7.10938 3.04688C7.10938 2.70918 6.8377 2.4375 6.5 2.4375C6.1623 2.4375 5.89062 2.70918 5.89062 3.04688V6.175L3.7248 7.61719C3.44551 7.80508 3.36934 8.1834 3.57754 8.4627C3.74258 8.74199 4.1209 8.81816 4.4002 8.60996L6.8377 6.98496C7.00781 6.89355 7.10938 6.70312 7.10938 6.47715V3.04688ZM6.5 0C2.90977 0 0 2.90977 0 6.5C0 10.0902 2.90977 13 6.5 13C10.0902 13 13 10.0902 13 6.5C13 2.90977 10.0902 0 6.5 0ZM11.7812 6.5C11.7812 9.41738 9.41738 11.7812 6.5 11.7812C3.58262 11.7812 1.21875 9.41738 1.21875 6.5C1.21875 3.58262 3.58262 1.21875 6.5 1.21875C9.41738 1.21875 11.7812 3.58262 11.7812 6.5Z",
    viewbox: "0 0 13 13",
  },
  camera: {
    path: "M4.36816 0.951786L4.06348 1.85714H1.875C0.84082 1.85714 0 2.68996 0 3.71429V11.1429C0 12.1672 0.84082 13 1.875 13H13.125C14.1592 13 15 12.1672 15 11.1429V3.71429C15 2.68996 14.1592 1.85714 13.125 1.85714H10.9365L10.6318 0.951786C10.4414 0.383036 9.90527 0 9.29883 0H5.70117C5.09473 0 4.55859 0.383036 4.36816 0.951786ZM7.5 10.2143C5.94727 10.2143 4.6875 8.96652 4.6875 7.42857C4.6875 5.89062 5.94727 4.64286 7.5 4.64286C9.05273 4.64286 10.3125 5.89062 10.3125 7.42857C10.3125 8.96652 9.05273 10.2143 7.5 10.2143Z",
    viewbox: "0 0 15 13",
  },
  search: {
    path: "M11.5165 6.27681C11.5165 7.44207 11.1383 8.51848 10.501 9.39179L13.715 12.6083C14.0324 12.9256 14.0324 13.441 13.715 13.7583C13.3977 14.0757 12.8823 14.0757 12.565 13.7583L9.35102 10.5418C8.47771 11.1816 7.4013 11.5573 6.23604 11.5573C3.31909 11.5573 0.955566 9.19377 0.955566 6.27681C0.955566 3.35986 3.31909 0.996338 6.23604 0.996338C9.153 0.996338 11.5165 3.35986 11.5165 6.27681ZM6.23604 9.93253C8.2543 9.93253 9.89176 8.29507 9.89176 6.27681C9.89176 4.25856 8.2543 2.6211 6.23604 2.6211C4.21778 2.6211 2.58033 4.25856 2.58033 6.27681C2.58033 8.29507 4.21778 9.93253 6.23604 9.93253Z",
    viewbox: "0 0 14 14",
  },
  send: {
    path: "M1.6103 12.1938C0.567738 12.7889 0.664614 14.3758 1.77638 14.8371L8.24859 17.5358V22.3011C8.24859 23.1361 8.9221 23.8096 9.75708 23.8096C10.2045 23.8096 10.629 23.6112 10.915 23.2653L13.7751 19.8377L19.4908 22.2181C20.3626 22.5825 21.3729 22.0105 21.5159 21.0786L24.4683 1.88805C24.556 1.32986 24.3115 0.767063 23.8456 0.448758C23.3796 0.130452 22.7707 0.102774 22.2771 0.384174L1.6103 12.1938ZM4.01374 13.3701L19.7676 4.36991L9.63714 15.6905L9.69249 15.7366L4.01374 13.3701ZM19.4723 19.8146L11.7868 16.6085L21.6635 5.56932L19.4723 19.8146Z",
    viewbox: "0 0 25 24",
  },
  bin: {
    path: "M5.53417 12.0063C5.53417 12.2649 5.32252 12.4766 5.06384 12.4766C4.80517 12.4766 4.59352 12.2649 4.59352 12.0063V5.89205C4.59352 5.63337 4.80517 5.42173 5.06384 5.42173C5.32252 5.42173 5.53417 5.63337 5.53417 5.89205V12.0063ZM7.88579 12.0063C7.88579 12.2649 7.67414 12.4766 7.41546 12.4766C7.15678 12.4766 6.94514 12.2649 6.94514 12.0063V5.89205C6.94514 5.63337 7.15678 5.42173 7.41546 5.42173C7.67414 5.42173 7.88579 5.63337 7.88579 5.89205V12.0063ZM10.2374 12.0063C10.2374 12.2649 10.0258 12.4766 9.76708 12.4766C9.5084 12.4766 9.29676 12.2649 9.29676 12.0063V5.89205C9.29676 5.63337 9.5084 5.42173 9.76708 5.42173C10.0258 5.42173 10.2374 5.63337 10.2374 5.89205V12.0063ZM10.1639 0.981286L11.2427 2.59979H13.2945C13.6855 2.59979 14 2.91579 14 3.30527C14 3.69623 13.6855 4.01076 13.2945 4.01076H13.0593V12.9469C13.0593 14.2462 12.007 15.2985 10.7077 15.2985H4.1232C2.82452 15.2985 1.77158 14.2462 1.77158 12.9469V4.01076H1.53642C1.14693 4.01076 0.830933 3.69623 0.830933 3.30527C0.830933 2.91579 1.14693 2.59979 1.53642 2.59979H3.58879L4.66701 0.981286C4.97272 0.52322 5.48714 0.248169 6.03683 0.248169H8.7941C9.34379 0.248169 9.85821 0.523249 10.1639 0.981286ZM5.28431 2.59979H9.54662L8.98811 1.76379C8.94401 1.69853 8.87053 1.65914 8.7941 1.65914H6.03683C5.9604 1.65914 5.86046 1.69853 5.84282 1.76379L5.28431 2.59979ZM3.18255 12.9469C3.18255 13.4672 3.60378 13.8876 4.1232 13.8876H10.7077C11.228 13.8876 11.6484 13.4672 11.6484 12.9469V4.01076H3.18255V12.9469Z",
    viewbox: "0 0 14 16",
  },
  plus: {
    path: "M11.5328 2.17659C11.5328 1.32563 10.8478 0.638123 9.99999 0.638123C9.15214 0.638123 8.46716 1.32563 8.46716 2.17659V9.09971H1.5694C0.721546 9.09971 0.0365601 9.78722 0.0365601 10.6382C0.0365601 11.4892 0.721546 12.1767 1.5694 12.1767H8.46716V19.0998C8.46716 19.9507 9.15214 20.6382 9.99999 20.6382C10.8478 20.6382 11.5328 19.9507 11.5328 19.0998V12.1767H18.4306C19.2784 12.1767 19.9634 11.4892 19.9634 10.6382C19.9634 9.78722 19.2784 9.09971 18.4306 9.09971H11.5328V2.17659Z",
    viewbox: "0 0 20 21",
  },
  home: {
    path: "M4.27905 9.46237C4.71457 9.83722 4.97665 10.3901 4.97455 10.9856L4.94539 19.2414C4.94539 19.2421 4.94539 19.2427 4.9454 19.2434C4.9455 19.266 4.94729 19.3062 4.95472 19.3752C4.96239 19.4464 4.96623 19.5179 4.96623 19.5895V20H5.29956L5.30618 20C5.39256 19.9943 5.47924 19.9943 5.56567 19.9998L5.57752 20L5.61206 20H18.9522C18.952 20 18.9524 20 18.9522 20L18.974 19.9987L19.0124 19.9961C19.1151 19.9891 19.2182 19.9899 19.3208 19.9988L19.3354 20H19.6329V15.4775C19.6301 15.4345 19.6287 15.3915 19.6287 15.3484V10.9785C19.6287 10.3791 19.8962 9.82375 20.3384 9.45031L12.2818 2.20803L4.27905 9.46237ZM0.301609 10.866C0.301729 10.9031 0.30381 10.9406 0.307896 10.9785C0.307896 11.0099 0.308928 11.041 0.310951 11.0719C0.341875 11.5427 0.604753 11.9422 0.97036 12.1658C1.17031 12.2881 1.40097 12.3578 1.64123 12.3578L2.97456 10.9785L2.94539 19.2414C2.94539 19.3574 2.95373 19.4734 2.96623 19.5895V20.2812C2.96623 21.2309 3.71206 22 4.63289 22H5.29956C5.3454 22 5.39123 22 5.43706 21.9957C5.49539 22 5.55373 22 5.61206 22H18.9621C19.0246 22 19.0871 21.9957 19.1496 21.9914C19.1996 21.9957 19.2496 22 19.2996 22H19.9662C20.8871 22 21.6329 21.2309 21.6329 20.2812V15.4688C21.6329 15.4301 21.6329 15.3871 21.6287 15.3484V10.9785L22.9662 12.3578C23.2093 12.3578 23.4349 12.2946 23.6287 12.1827C24.0101 11.9627 24.2688 11.5541 24.297 11.0674C24.2987 11.038 24.2996 11.0084 24.2996 10.9785C24.2996 10.937 24.2981 10.8959 24.2952 10.8553C24.2708 10.5184 24.1432 10.2157 23.8829 9.94727L13.1996 0.34375C12.9079 0.0429688 12.5746 0 12.2829 0C11.9912 0 11.6579 0.0859375 11.4079 0.300781L0.76623 9.94727C0.465572 10.2186 0.300508 10.5248 0.301609 10.866Z",
    viewbox: "0 0 25 22",
  },
  home_filled: {
    path: "M1.7113 12.3578C1.00296 12.3578 0.377964 11.752 0.377964 10.9785C0.336298 10.5918 0.502964 10.248 0.836298 9.94727L11.478 0.300781C11.728 0.0859375 12.0613 0 12.353 0C12.6446 0 12.978 0.0429688 13.2696 0.34375L23.953 9.94727C24.2446 10.248 24.3696 10.5918 24.3696 10.9785C24.3696 11.7563 23.7863 12.3578 23.0363 12.3578H21.6988V15.3484C21.703 15.3871 21.703 15.4301 21.703 15.4688V20.2812C21.703 21.2309 20.9571 22 20.0363 22H19.3696C19.3196 22 19.2696 21.9957 19.2196 21.9914C19.1571 21.9957 19.0946 22 19.0321 22H17.703H16.703H8.0363H7.0363H5.68213C5.6238 22 5.56546 22 5.50713 21.9957C5.4613 22 5.41546 22 5.36963 22H4.70296C3.78213 22 3.0363 21.2309 3.0363 20.2812V19.5895C3.0238 19.4734 3.01546 19.3574 3.01546 19.2414L3.04463 12.3578H1.7113Z",
    viewbox: "0 0 25 22",
  },
  profile: {
    path: "M10.9601 9C13.0845 9 14.6744 7.36196 14.6744 5.5C14.6744 3.63804 13.0845 2 10.9601 2C8.83567 2 7.2458 3.63804 7.2458 5.5C7.2458 7.36196 8.83567 9 10.9601 9ZM3.00897 20H18.9112C18.54 17.2672 16.0965 15.0625 13.0003 15.0625H8.9199C5.82367 15.0625 3.38014 17.2672 3.00897 20ZM16.6744 5.5C16.6744 8.53789 14.1163 11 10.9601 11C7.80383 11 5.2458 8.53789 5.2458 5.5C5.2458 2.46211 7.80383 0 10.9601 0C14.1163 0 16.6744 2.46211 16.6744 5.5ZM0.960083 20.7238C0.960083 16.4914 4.52258 13.0625 8.9199 13.0625H13.0003C17.3976 13.0625 20.9601 16.4914 20.9601 20.7238C20.9601 21.4285 20.3663 22 19.6342 22H2.28598C1.55383 22 0.960083 21.4285 0.960083 20.7238Z",
    viewbox: "0 0 21 23",
  },
  profile_filled: {
    path: "M10 11C13.1563 11 15.7143 8.53789 15.7143 5.5C15.7143 2.46211 13.1563 0 10 0C6.84375 0 4.28571 2.46211 4.28571 5.5C4.28571 8.53789 6.84375 11 10 11ZM7.95982 13.0625C3.5625 13.0625 0 16.4914 0 20.7238C0 21.4285 0.59375 22 1.32589 22H18.6741C19.4062 22 20 21.4285 20 20.7238C20 16.4914 16.4375 13.0625 12.0402 13.0625H7.95982Z",
    viewbox: "0 0 20 22",
  },
  pictures: {
    path: "M15.6111 0.381744H5.22222C4.17891 0.381744 3.33333 1.21311 3.33333 2.23889V8.73889C3.33333 9.76467 4.17891 10.596 5.22222 10.596H15.6111C16.6544 10.596 17.5 9.76467 17.5 8.73889V2.23889C17.5 1.21311 16.653 0.381744 15.6111 0.381744ZM16.0833 8.73889C16.0833 8.99488 15.8715 9.20317 15.6111 9.20317H15.1389L11.913 4.5342C11.8245 4.40652 11.6769 4.32817 11.5175 4.32817C11.3596 4.32817 11.2121 4.40571 11.1247 4.53492L9.273 7.2658L8.61337 6.37683C8.52483 6.25496 8.38316 6.18532 8.23264 6.18532C8.08185 6.18532 7.94004 6.25615 7.85102 6.37608L5.69444 9.20317H5.22222C4.96185 9.20317 4.75 8.99488 4.75 8.73889V2.23889C4.75 1.98289 4.96185 1.7746 5.22222 1.7746H15.6111C15.8715 1.7746 16.0833 1.98289 16.0833 2.23889V8.73889ZM7.11111 2.70317C6.5896 2.70317 6.16667 3.119 6.16667 3.63174C6.16667 4.14449 6.5896 4.56032 7.11111 4.56032C7.63292 4.56032 8.05556 4.14449 8.05556 3.63174C8.05556 3.119 7.63351 2.70317 7.11111 2.70317ZM13.9583 13.3817H4.04167C2.08873 13.3817 0.5 11.8206 0.5 9.8996V2.93532C0.5 2.55228 0.817274 2.23889 1.20833 2.23889C1.59939 2.23889 1.91667 2.55228 1.91667 2.93532V9.8996C1.91667 11.0516 2.86997 11.9889 4.04167 11.9889H13.9583C14.3494 11.9889 14.6667 12.3008 14.6667 12.6853C14.6667 13.0698 14.3509 13.3817 13.9583 13.3817Z",
    viewbox: "0 0 18 14",
  },
  like: {
    path: "M12.5625 2.10267L12.0422 2.70562L11.4797 2.10368C9.90937 0.463154 7.73438 -0.283498 5.59687 0.0978673C2.36719 0.674689 0 3.67034 0 7.18252V7.47395C0 9.55915 0.80625 11.5539 2.23125 12.9759L10.7016 21.4523C11.0531 21.804 11.5172 22 12 22C12.4828 22 12.9469 21.804 13.2984 21.4523L21.7692 12.9759C23.1923 11.5539 24 9.55915 24 7.47395V7.18252C24 3.67034 21.6319 0.674689 18.4031 0.0978673C16.3078 -0.283498 14.0906 0.463154 12.5625 2.10267C12.5625 2.10318 12.6047 2.10267 12.5625 2.10267ZM12.0422 6.11731L14.1516 3.76581C15.1687 2.71969 16.6125 2.22326 18.0328 2.4765C20.1773 2.85988 21.75 4.85112 21.75 7.18252V7.47395C21.75 8.89088 21.2011 10.2475 20.2341 11.2122L12 19.4525L3.76406 11.2122C2.79844 10.2475 2.25 8.89088 2.25 7.47395V7.18252C2.25 4.85112 3.825 2.85988 5.96719 2.4765C7.3875 2.22326 8.83125 2.71969 9.84844 3.76581L12.0422 6.11731Z",
    viewbox: "0 0 25 22",
  },
  like_filled: {
    path: "M10.9922 1.81595L10.5369 2.33667L10.0447 1.81681C8.6707 0.399997 6.76758 -0.244839 4.89726 0.0845218C2.07129 0.582686 0 3.16984 0 6.20309V6.45477C0 8.25563 0.705469 9.97837 1.95234 11.2064L9.36387 18.527C9.67148 18.8308 10.0775 19 10.5 19C10.9225 19 11.3285 18.8308 11.6361 18.527L19.0481 11.2064C20.2933 9.97837 21 8.25563 21 6.45477V6.20309C21 3.16984 18.9279 0.582686 16.1027 0.0845218C14.2693 -0.244839 12.3293 0.399997 10.9922 1.81595Z",
    viewbox: "0 0 21 19",
  },
  settings: {
    path: "M16.954 6.30903C17.0641 6.6085 16.9712 6.94239 16.7337 7.1558L15.2432 8.51203C15.2811 8.79773 15.3017 9.09031 15.3017 9.38634C15.3017 9.68237 15.2811 9.97496 15.2432 10.2607L16.7337 11.6169C16.9712 11.8303 17.0641 12.1642 16.954 12.4637C16.8025 12.8733 16.6201 13.2657 16.4101 13.6443L16.2483 13.9231C16.0211 14.3018 15.7664 14.6598 15.4876 14.9971C15.2845 15.2449 14.9472 15.3276 14.6443 15.2312L12.727 14.6219C12.2657 14.9765 11.7563 15.2725 11.2124 15.4962L10.7821 17.4617C10.7133 17.775 10.4723 18.0228 10.1556 18.0744C9.68062 18.1536 9.19183 18.1949 8.69271 18.1949C8.19359 18.1949 7.7048 18.1536 7.22978 18.0744C6.9131 18.0228 6.67215 17.775 6.6033 17.4617L6.17303 15.4962C5.62916 15.2725 5.11972 14.9765 4.65847 14.6219L2.74461 15.2346C2.4417 15.331 2.10436 15.2449 1.90127 15.0006C1.62246 14.6632 1.36774 14.3052 1.14055 13.9266L0.978769 13.6478C0.768795 13.2691 0.586359 12.8767 0.434903 12.4671C0.324753 12.1676 0.417692 11.8337 0.655203 11.6203L2.14567 10.2641C2.10781 9.97496 2.08715 9.68237 2.08715 9.38634C2.08715 9.09031 2.10781 8.79773 2.14567 8.51203L0.655203 7.1558C0.417692 6.94239 0.324753 6.6085 0.434903 6.30903C0.586359 5.89941 0.768795 5.507 0.978769 5.12836L1.14055 4.84954C1.36774 4.4709 1.62246 4.11291 1.90127 3.77558C2.10436 3.52774 2.4417 3.44513 2.74461 3.54151L4.66191 4.15077C5.12316 3.79623 5.63261 3.5002 6.17647 3.27646L6.60675 1.31097C6.67559 0.99773 6.91654 0.749892 7.23322 0.69826C7.70825 0.615647 8.19704 0.574341 8.69615 0.574341C9.19527 0.574341 9.68406 0.615647 10.1591 0.694817C10.4758 0.74645 10.7167 0.994288 10.7856 1.30753L11.2158 3.27302C11.7597 3.49676 12.2691 3.79279 12.7304 4.14733L14.6477 3.53806C14.9506 3.44168 15.2879 3.52774 15.491 3.77213C15.7698 4.10947 16.0246 4.46746 16.2518 4.8461L16.4135 5.12491C16.6235 5.50355 16.8059 5.89596 16.9574 6.30558L16.954 6.30903ZM8.69615 12.1401C10.2176 12.1401 11.4499 10.9078 11.4499 9.38634C11.4499 7.86489 10.2176 6.63259 8.69615 6.63259C7.17471 6.63259 5.9424 7.86489 5.9424 9.38634C5.9424 10.9078 7.17471 12.1401 8.69615 12.1401Z",
    viewbox: "0 0 17 19",
  },
  edit: {
    path: "M17.4865 1.01668C16.72 0.250219 15.4811 0.250219 14.7146 1.01668L13.6612 2.06662L17.0875 5.49292L18.1409 4.43948C18.9074 3.67303 18.9074 2.4341 18.1409 1.66764L17.4865 1.01668ZM7.01504 8.71624C6.80156 8.92973 6.63707 9.19222 6.54257 9.4827L5.50663 12.5905C5.40514 12.8915 5.48563 13.224 5.70962 13.4515C5.93361 13.679 6.26609 13.756 6.57057 13.6545L9.67839 12.6185C9.96538 12.5205 10.2279 12.3595 10.4449 12.1461L16.3 6.28738L12.8702 2.85757L7.01504 8.71624ZM4.3412 2.49709C2.4863 2.49709 0.981384 4.00201 0.981384 5.8569V14.8164C0.981384 16.6713 2.4863 18.1762 4.3412 18.1762H13.3007C15.1556 18.1762 16.6605 16.6713 16.6605 14.8164V11.4566C16.6605 10.8371 16.16 10.3367 15.5406 10.3367C14.9211 10.3367 14.4206 10.8371 14.4206 11.4566V14.8164C14.4206 15.4359 13.9202 15.9363 13.3007 15.9363H4.3412C3.72173 15.9363 3.22126 15.4359 3.22126 14.8164V5.8569C3.22126 5.23744 3.72173 4.73697 4.3412 4.73697H7.70101C8.32047 4.73697 8.82094 4.23649 8.82094 3.61703C8.82094 2.99756 8.32047 2.49709 7.70101 2.49709H4.3412Z",
    viewbox: "0 0 19 19",
  },
  signOut: {
    path: "M18.391 8.66675C18.824 8.23377 18.824 7.53059 18.391 7.0976L13.9572 2.6638C13.5242 2.23081 12.821 2.23081 12.388 2.6638C11.955 3.09679 11.955 3.79996 12.388 4.23295L14.9305 6.77546H7.63209C7.01898 6.77546 6.52364 7.2708 6.52364 7.88391C6.52364 8.49702 7.01898 8.99236 7.63209 8.99236H14.9305L12.388 11.5349C11.955 11.9679 11.955 12.671 12.388 13.104C12.821 13.537 13.5242 13.537 13.9572 13.104L18.391 8.67022V8.66675ZM6.52364 2.34166C7.13675 2.34166 7.63209 1.84632 7.63209 1.23321C7.63209 0.620095 7.13675 0.124756 6.52364 0.124756H4.30674C2.47087 0.124756 0.981384 1.61424 0.981384 3.45011V12.3177C0.981384 14.1536 2.47087 15.6431 4.30674 15.6431H6.52364C7.13675 15.6431 7.63209 15.1477 7.63209 14.5346C7.63209 13.9215 7.13675 13.4262 6.52364 13.4262H4.30674C3.69362 13.4262 3.19829 12.9308 3.19829 12.3177V3.45011C3.19829 2.837 3.69362 2.34166 4.30674 2.34166H6.52364Z",
    viewbox: "0 0 19 16",
  },
  upload: {
    path: "M17.0389 1.48518C16.1877 0.634008 14.8054 0.634008 13.9543 1.48518L5.23824 10.2012C4.38706 11.0524 4.38706 12.4347 5.23824 13.2859C6.08941 14.137 7.47172 14.137 8.32289 13.2859L13.321 8.28777V22.6352C13.321 23.8404 14.2947 24.8142 15.5 24.8142C16.7053 24.8142 17.679 23.8404 17.679 22.6352V8.28777L22.6771 13.2859C23.5283 14.137 24.9106 14.137 25.7618 13.2859C26.6129 12.4347 26.6129 11.0524 25.7618 10.2012L17.0457 1.48518H17.0389ZM4.60496 24.8142C4.60496 23.6089 3.63122 22.6352 2.42596 22.6352C1.22069 22.6352 0.246948 23.6089 0.246948 24.8142V29.1722C0.246948 32.7812 3.17499 35.7092 6.78397 35.7092H24.216C27.825 35.7092 30.753 32.7812 30.753 29.1722V24.8142C30.753 23.6089 29.7793 22.6352 28.574 22.6352C27.3688 22.6352 26.395 23.6089 26.395 24.8142V29.1722C26.395 30.3774 25.4213 31.3512 24.216 31.3512H6.78397C5.57871 31.3512 4.60496 30.3774 4.60496 29.1722V24.8142Z",
    viewbox: "0 0 31 36",
  },
  minus: {
    path: "M8.46722 0.104874H1.56946C0.721607 0.104874 0.0366211 0.792377 0.0366211 1.64334C0.0366211 2.49431 0.721607 3.18182 1.56946 3.18182H8.46722H11.5329H18.4306C19.2785 3.18182 19.9635 2.49431 19.9635 1.64334C19.9635 0.792377 19.2785 0.104874 18.4306 0.104874H11.5329H8.46722Z",
    viewbox: "0 0 20 4",
  },
  github: {
    path: "M10.1027 22.0464C10.1027 22.159 9.97316 22.2492 9.80983 22.2492C9.62399 22.266 9.49445 22.1759 9.49445 22.0464C9.49445 21.9338 9.62399 21.8437 9.78731 21.8437C9.95626 21.8268 10.1027 21.9169 10.1027 22.0464ZM8.3512 21.793C8.31177 21.9056 8.42441 22.0351 8.59336 22.0689C8.73979 22.1252 8.90875 22.0689 8.94254 21.9563C8.97633 21.8437 8.86932 21.7141 8.70037 21.6634C8.55394 21.624 8.39062 21.6803 8.3512 21.793ZM10.8405 21.6972C10.6771 21.7367 10.5645 21.8437 10.5814 21.9732C10.5983 22.0858 10.7447 22.159 10.9137 22.1196C11.077 22.0802 11.1896 21.9732 11.1727 21.8606C11.1558 21.7536 11.0038 21.6803 10.8405 21.6972ZM14.5462 0.11615C6.73487 0.11615 0.759521 6.04644 0.759521 13.8578C0.759521 20.1034 4.69052 25.448 10.3054 27.329C11.0263 27.4586 11.2797 27.0137 11.2797 26.6476C11.2797 26.2984 11.2628 24.3723 11.2628 23.1897C11.2628 23.1897 7.32058 24.0344 6.4927 21.5114C6.4927 21.5114 5.85067 19.8725 4.92706 19.4501C4.92706 19.4501 3.63737 18.5659 5.01717 18.5828C5.01717 18.5828 6.41949 18.6955 7.19104 20.0359C8.42441 22.2097 10.4913 21.5846 11.2966 21.2129C11.4262 20.3118 11.7922 19.6867 12.1977 19.315C9.04954 18.9658 5.8732 18.5096 5.8732 13.0918C5.8732 11.5431 6.30122 10.7659 7.20231 9.7747C7.05588 9.40863 6.57718 7.89931 7.34874 5.9507C8.52578 5.58463 11.2347 7.47129 11.2347 7.47129C12.361 7.15591 13.5719 6.99259 14.7715 6.99259C15.971 6.99259 17.1819 7.15591 18.3082 7.47129C18.3082 7.47129 21.0171 5.579 22.1942 5.9507C22.9657 7.90494 22.487 9.40863 22.3406 9.7747C23.2417 10.7715 23.7936 11.5487 23.7936 13.0918C23.7936 18.5265 20.4765 18.9602 17.3283 19.315C17.8464 19.7599 18.2857 20.6047 18.2857 21.9281C18.2857 23.8261 18.2688 26.1745 18.2688 26.6363C18.2688 27.0024 18.5279 27.4473 19.2431 27.3178C24.8749 25.448 28.6933 20.1034 28.6933 13.8578C28.6933 6.04644 22.3575 0.11615 14.5462 0.11615ZM6.23364 19.5403C6.16042 19.5966 6.17732 19.7261 6.27306 19.8331C6.36317 19.9232 6.4927 19.9626 6.56591 19.8894C6.63913 19.8331 6.62223 19.7036 6.52649 19.5966C6.43638 19.5065 6.30685 19.467 6.23364 19.5403ZM5.6254 19.0841C5.58598 19.1573 5.6423 19.2474 5.75493 19.3037C5.84504 19.36 5.95768 19.3431 5.9971 19.2643C6.03652 19.1911 5.98021 19.101 5.86757 19.0447C5.75493 19.0109 5.66483 19.0278 5.6254 19.0841ZM7.45011 21.089C7.36 21.1622 7.39379 21.3312 7.52332 21.4382C7.65285 21.5677 7.81618 21.5846 7.88939 21.4945C7.9626 21.4213 7.92881 21.2523 7.81618 21.1453C7.69228 21.0158 7.52332 20.9989 7.45011 21.089ZM6.80808 20.2611C6.71797 20.3174 6.71797 20.4639 6.80808 20.5934C6.89819 20.7229 7.05025 20.7792 7.12346 20.7229C7.21357 20.6497 7.21357 20.5033 7.12346 20.3738C7.04462 20.2442 6.89819 20.1879 6.80808 20.2611Z",
    viewbox: "0 0 29 28",
  },
  left: {
    path: "M1.24897 16.1945C0.250344 17.1931 0.250344 18.8149 1.24897 19.8135L16.5878 35.1524C17.5864 36.151 19.2082 36.151 20.2068 35.1524C21.2055 34.1537 21.2055 32.532 20.2068 31.5334L6.67349 18L20.1988 4.46667C21.1975 3.46805 21.1975 1.84628 20.1988 0.847661C19.2002 -0.150962 17.5785 -0.150962 16.5798 0.847661L1.24098 16.1865L1.24897 16.1945Z",
    viewbox: "0 0 21 36",
  },
  close: {
    path: "M34.09,31.43l-13.53-13.53,13.53-13.53c1-1,1-2.62,0-3.62-1-1-2.62-1-3.62,0l-13.05,13.05L4.37,.75C3.37-.25,1.75-.25,.75,.75-.25,1.75-.25,3.37,.75,4.37l13.53,13.53L.76,31.43c-1,1-1,2.62,0,3.62,1,1,2.62,1,3.62,0l13.05-13.05,13.05,13.05c1,1,2.62,1,3.62,0s1-2.62,0-3.62Z",
    viewbox: "0 0 34.84 35.8",
  },
  google: {
    path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
    viewbox: "0 0 488 512",
  },
};

export default function SVGIcon({ variant, width, color = "#A6A2A2" }) {
  return (
    <svg viewBox={paths[variant].viewbox} width={width} fill={color}>
      <title>{variant}</title>
      <path fillRule="evenodd" clipRule="evenodd" d={paths[variant].path} />
    </svg>
  );
}
