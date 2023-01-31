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
    viewbox: "0 0 21 22",
  },
  profile_filled: {
    path: "M10 11C13.1563 11 15.7143 8.53789 15.7143 5.5C15.7143 2.46211 13.1563 0 10 0C6.84375 0 4.28571 2.46211 4.28571 5.5C4.28571 8.53789 6.84375 11 10 11ZM7.95982 13.0625C3.5625 13.0625 0 16.4914 0 20.7238C0 21.4285 0.59375 22 1.32589 22H18.6741C19.4062 22 20 21.4285 20 20.7238C20 16.4914 16.4375 13.0625 12.0402 13.0625H7.95982Z",
    viewbox: "0 0 20 22",
  },
  pictures: {
    path: "M15.6111 0.381744H5.22222C4.17891 0.381744 3.33333 1.21311 3.33333 2.23889V8.73889C3.33333 9.76467 4.17891 10.596 5.22222 10.596H15.6111C16.6544 10.596 17.5 9.76467 17.5 8.73889V2.23889C17.5 1.21311 16.653 0.381744 15.6111 0.381744ZM16.0833 8.73889C16.0833 8.99488 15.8715 9.20317 15.6111 9.20317H15.1389L11.913 4.5342C11.8245 4.40652 11.6769 4.32817 11.5175 4.32817C11.3596 4.32817 11.2121 4.40571 11.1247 4.53492L9.273 7.2658L8.61337 6.37683C8.52483 6.25496 8.38316 6.18532 8.23264 6.18532C8.08185 6.18532 7.94004 6.25615 7.85102 6.37608L5.69444 9.20317H5.22222C4.96185 9.20317 4.75 8.99488 4.75 8.73889V2.23889C4.75 1.98289 4.96185 1.7746 5.22222 1.7746H15.6111C15.8715 1.7746 16.0833 1.98289 16.0833 2.23889V8.73889ZM7.11111 2.70317C6.5896 2.70317 6.16667 3.119 6.16667 3.63174C6.16667 4.14449 6.5896 4.56032 7.11111 4.56032C7.63292 4.56032 8.05556 4.14449 8.05556 3.63174C8.05556 3.119 7.63351 2.70317 7.11111 2.70317ZM13.9583 13.3817H4.04167C2.08873 13.3817 0.5 11.8206 0.5 9.8996V2.93532C0.5 2.55228 0.817274 2.23889 1.20833 2.23889C1.59939 2.23889 1.91667 2.55228 1.91667 2.93532V9.8996C1.91667 11.0516 2.86997 11.9889 4.04167 11.9889H13.9583C14.3494 11.9889 14.6667 12.3008 14.6667 12.6853C14.6667 13.0698 14.3509 13.3817 13.9583 13.3817Z",
    viewbox: "0 0 18 14",
  },
};

export default function SVGIcon({ variant, width, color = "#A6A2A2", isFill }) {
  return (
    <svg viewBox={paths[variant].viewbox} width={width} fill={color}>
      <title>{variant}</title>
      <path fillRule="evenodd" clipRule="evenodd" d={paths[variant].path} />
    </svg>
  );
}
