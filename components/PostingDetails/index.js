import styled from "styled-components";
import Image from "next/image";

export default function PostingDetails({ picture }) {
  return (
    <>
      <Image
        src={picture.image}
        width={200}
        height={200}
        alt={picture.describtion}
      />
      <p>{picture.date}</p>
      <p>{picture.describtion.substring(0, 100)} …</p>
      <ul>
        {picture.catagories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
      <h2>Settings</h2>
      <StyledSettings>
        <div>
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4 0H14.4C15.2825 0 16 0.728711 16 1.625V7.3125C16 8.20879 15.2825 8.9375 14.4 8.9375H6.4C5.5175 8.9375 4.8 8.20879 4.8 7.3125V1.625C4.8 0.728711 5.5175 0 6.4 0ZM11.9 2.70918C11.7875 2.53906 11.6 2.4375 11.4 2.4375C11.2 2.4375 11.0125 2.53906 10.9 2.70918L9.5 4.84199L9.0675 4.29102C8.9525 4.14629 8.78 4.0625 8.6 4.0625C8.42 4.0625 8.245 4.14629 8.1325 4.29102L6.5325 6.32227C6.3875 6.50508 6.36 6.75644 6.46 6.96719C6.56 7.17793 6.77 7.3125 7 7.3125H9H10.2H13.8C14.0225 7.3125 14.225 7.18809 14.33 6.99004C14.435 6.79199 14.4225 6.55078 14.3 6.36543L11.9 2.70918ZM8.4 2.4375C8.4 1.98809 8.0425 1.625 7.6 1.625C7.1575 1.625 6.8 1.98809 6.8 2.4375C6.8 2.88691 7.1575 3.25 7.6 3.25C8.0425 3.25 8.4 2.88691 8.4 2.4375ZM1.6 3.25H4V9.75V10.5625C4 11.0119 4.3575 11.375 4.8 11.375H8C8.4425 11.375 8.8 11.0119 8.8 10.5625V9.75H12.8V11.375C12.8 12.2713 12.0825 13 11.2 13H1.6C0.7175 13 0 12.2713 0 11.375V4.875C0 3.97871 0.7175 3.25 1.6 3.25ZM1.8 4.875C1.58 4.875 1.4 5.05781 1.4 5.28125V5.6875C1.4 5.91094 1.58 6.09375 1.8 6.09375H2.2C2.42 6.09375 2.6 5.91094 2.6 5.6875V5.28125C2.6 5.05781 2.42 4.875 2.2 4.875H1.8ZM1.8 7.51562C1.58 7.51562 1.4 7.69844 1.4 7.92188V8.32812C1.4 8.55156 1.58 8.73438 1.8 8.73438H2.2C2.42 8.73438 2.6 8.55156 2.6 8.32812V7.92188C2.6 7.69844 2.42 7.51562 2.2 7.51562H1.8ZM1.8 10.1562C1.58 10.1562 1.4 10.3391 1.4 10.5625V10.9688C1.4 11.1922 1.58 11.375 1.8 11.375H2.2C2.42 11.375 2.6 11.1922 2.6 10.9688V10.5625C2.6 10.3391 2.42 10.1562 2.2 10.1562H1.8ZM10.2 10.5625V10.9688C10.2 11.1922 10.38 11.375 10.6 11.375H11C11.22 11.375 11.4 11.1922 11.4 10.9688V10.5625C11.4 10.3391 11.22 10.1562 11 10.1562H10.6C10.38 10.1562 10.2 10.3391 10.2 10.5625Z"
              fill="#A6A2A2"
            />
          </svg>
          <p>Film</p>
        </div>
        <p>{picture.settings.film}</p>

        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 0C10.0875 0 13 2.91254 13 6.5C13 10.0875 10.0875 13 6.5 13C2.91254 13 0 10.0875 0 6.5C0 2.91254 2.91254 0 6.5 0ZM2.51171 10.1638C3.50188 11.2412 4.92267 11.9167 6.5 11.9167H6.50217L4.00075 7.58442L2.51171 10.1638ZM11.1908 9.20833H6.18963L7.67867 11.7878C9.17746 11.4546 10.4433 10.4997 11.1908 9.20833ZM1.33196 4.875C1.17054 5.38796 1.08333 5.93396 1.08333 6.5C1.08333 7.48746 1.34821 8.41371 1.81079 9.21104L3.37567 6.50108L3.37513 6.5L3.37675 6.49892L4.31438 4.875H1.33196ZM11.1919 3.79329L8.69104 8.125H11.668C11.8295 7.61204 11.9167 7.06604 11.9167 6.5C11.9167 5.51417 11.6529 4.59008 11.1919 3.79329ZM7.43979 4.875H5.56508L4.62638 6.50108L5.564 8.125H7.44033L8.37796 6.50054L7.43979 4.875ZM9.00358 5.41721L10.4915 2.83996C9.50138 1.76096 8.08004 1.08388 6.50163 1.08333L9.00358 5.41721ZM5.32458 1.21171C3.82471 1.54375 2.55721 2.49925 1.80917 3.79167H6.81417L5.32458 1.21171Z"
              fill="#A6A2A2"
            />
          </svg>
          <p>Aperture</p>
        </div>
        <p>{picture.settings.aperture}</p>

        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.10938 3.04688C7.10938 2.70918 6.8377 2.4375 6.5 2.4375C6.1623 2.4375 5.89062 2.70918 5.89062 3.04688V6.175L3.7248 7.61719C3.44551 7.80508 3.36934 8.1834 3.57754 8.4627C3.74258 8.74199 4.1209 8.81816 4.4002 8.60996L6.8377 6.98496C7.00781 6.89355 7.10938 6.70312 7.10938 6.47715V3.04688ZM6.5 0C2.90977 0 0 2.90977 0 6.5C0 10.0902 2.90977 13 6.5 13C10.0902 13 13 10.0902 13 6.5C13 2.90977 10.0902 0 6.5 0ZM11.7812 6.5C11.7812 9.41738 9.41738 11.7812 6.5 11.7812C3.58262 11.7812 1.21875 9.41738 1.21875 6.5C1.21875 3.58262 3.58262 1.21875 6.5 1.21875C9.41738 1.21875 11.7812 3.58262 11.7812 6.5Z"
              fill="#A6A2A2"
            />
          </svg>
          <p>Time</p>
        </div>
        <p>{picture.settings.time}</p>

        <div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 6.5C13 10.0902 10.0902 13 6.5 13C2.90977 13 0 10.0902 0 6.5C0 2.90977 2.90977 0 6.5 0C10.0902 0 13 2.90977 13 6.5ZM6.5 1.21875C3.58262 1.21875 1.21875 3.58262 1.21875 6.5C1.21875 9.41738 3.58262 11.7812 6.5 11.7812C9.41738 11.7812 11.7812 9.41738 11.7812 6.5C11.7812 3.58262 9.41738 1.21875 6.5 1.21875Z"
              fill="#A6A2A2"
            />
          </svg>
          <p>Lens</p>
        </div>
        <p>{picture.settings.lens}</p>

        <div>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.36816 0.951786L4.06348 1.85714H1.875C0.84082 1.85714 0 2.68996 0 3.71429V11.1429C0 12.1672 0.84082 13 1.875 13H13.125C14.1592 13 15 12.1672 15 11.1429V3.71429C15 2.68996 14.1592 1.85714 13.125 1.85714H10.9365L10.6318 0.951786C10.4414 0.383036 9.90527 0 9.29883 0H5.70117C5.09473 0 4.55859 0.383036 4.36816 0.951786ZM7.5 10.2143C5.94727 10.2143 4.6875 8.96652 4.6875 7.42857C4.6875 5.89062 5.94727 4.64286 7.5 4.64286C9.05273 4.64286 10.3125 5.89062 10.3125 7.42857C10.3125 8.96652 9.05273 10.2143 7.5 10.2143Z"
              fill="#A6A2A2"
            />
          </svg>
          <p>Camera</p>
        </div>
        <p>{picture.settings.camera}</p>
      </StyledSettings>
    </>
  );
}

const StyledSettings = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;

  *:nth-child(even) {
    text-align: right;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
