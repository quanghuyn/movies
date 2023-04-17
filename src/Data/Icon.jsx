import React from 'react';

export function LeftButton({className}) {
    return (
        <div>
              <svg
                className= {`${className}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F9F9F9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
        </div>
    );
}
export function RightButton ({className}) { 
    return (
        <svg
           className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#F9F9F9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    )
}

export const data = [
    {
      title: "Discovery",
      name: "",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.90999 22.82C3.81999 22.82 2.88999 22.47 2.20999 21.79C1.23999 20.82 0.939994 19.34 1.36999 17.62L3.84999 7.69001C4.27999 5.97001 5.95999 4.30001 7.66999 3.87001L17.6 1.39001C19.32 0.960013 20.8 1.26001 21.77 2.23001C22.74 3.20001 23.04 4.68001 22.61 6.40001L20.13 16.33C19.7 18.05 18.02 19.72 16.31 20.15L6.37999 22.63C5.86999 22.75 5.37999 22.82 4.90999 22.82ZM17.98 2.83001L8.04999 5.32001C6.87999 5.61001 5.60999 6.88001 5.30999 8.05001L2.82999 17.98C2.52999 19.17 2.68999 20.14 3.26999 20.73C3.84999 21.31 4.82999 21.47 6.01999 21.17L15.95 18.69C17.12 18.4 18.39 17.12 18.68 15.96L21.16 6.03001C21.46 4.84001 21.3 3.87001 20.72 3.28001C20.14 2.69001 19.17 2.54001 17.98 2.83001Z"
            fill="#78828A"
          />
          <path
            d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
            fill="#78828A"
          />
        </svg>
      ),
      iconactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.98 3.02001C20.11 2.15001 18.88 1.81001 17.69 2.11001L7.88998 4.56001C6.23998 4.97001 4.96998 6.25001 4.55998 7.89001L2.10998 17.7C1.80998 18.89 2.14998 20.12 3.01998 20.99C3.67998 21.64 4.54998 22 5.44998 22C5.72998 22 6.01998 21.97 6.29998 21.89L16.11 19.44C17.75 19.03 19.03 17.76 19.44 16.11L21.89 6.30001C22.19 5.11001 21.85 3.88001 20.98 3.02001ZM12 15.88C9.85998 15.88 8.11998 14.14 8.11998 12C8.11998 9.86001 9.85998 8.12001 12 8.12001C14.14 8.12001 15.88 9.86001 15.88 12C15.88 14.14 14.14 15.88 12 15.88Z"
            fill="#B43FEB"
          />
        </svg>
      ),
    },
    // {
    //   title: "Trending",
    //   name: "trending",
    //   icon: (
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
    //         fill="#78828A"
    //       />
    //       <path
    //         d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z"
    //         fill="#78828A"
    //       />
    //     </svg>
    //   ),
    //   iconactive: (
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
    //         fill="#B43FEB"
    //       />
    //     </svg>
    //   ),
    // },
    {
      title: "Top Rated",
  
      name: "toprated",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.66 22.67C17.13 22.67 16.45 22.5 15.6 22L12.61 20.23C12.3 20.05 11.7 20.05 11.4 20.23L8.4 22C6.63 23.05 5.59 22.63 5.12 22.29C4.66 21.95 3.94 21.08 4.41 19.08L5.12 16.01C5.2 15.69 5.04 15.14 4.8 14.9L2.32 12.42C1.08 11.18 1.18 10.12 1.35 9.60001C1.52 9.08001 2.06 8.16001 3.78 7.87001L6.97 7.34001C7.27 7.29001 7.7 6.97001 7.83 6.70001L9.6 3.17001C10.4 1.56001 11.45 1.32001 12 1.32001C12.55 1.32001 13.6 1.56001 14.4 3.17001L16.16 6.69001C16.3 6.96001 16.73 7.28001 17.03 7.33001L20.22 7.86001C21.95 8.15001 22.49 9.07001 22.65 9.59001C22.81 10.11 22.91 11.17 21.68 12.41L19.2 14.9C18.96 15.14 18.81 15.68 18.88 16.01L19.59 19.08C20.05 21.08 19.34 21.95 18.88 22.29C18.63 22.47 18.23 22.67 17.66 22.67ZM12 18.59C12.49 18.59 12.98 18.71 13.37 18.94L16.36 20.71C17.23 21.23 17.78 21.23 17.99 21.08C18.2 20.93 18.35 20.4 18.13 19.42L17.42 16.35C17.23 15.52 17.54 14.45 18.14 13.84L20.62 11.36C21.11 10.87 21.33 10.39 21.23 10.06C21.12 9.73001 20.66 9.46001 19.98 9.35001L16.79 8.82001C16.02 8.69001 15.18 8.07001 14.83 7.37001L13.07 3.85001C12.75 3.21001 12.35 2.83001 12 2.83001C11.65 2.83001 11.25 3.21001 10.94 3.85001L9.17 7.37001C8.82 8.07001 7.98 8.69001 7.21 8.82001L4.03 9.35001C3.35 9.46001 2.89 9.73001 2.78 10.06C2.67 10.39 2.9 10.88 3.39 11.36L5.87 13.84C6.47 14.44 6.78 15.52 6.59 16.35L5.88 19.42C5.65 20.41 5.81 20.93 6.02 21.08C6.23 21.23 6.77 21.22 7.65 20.71L10.64 18.94C11.02 18.71 11.51 18.59 12 18.59Z"
            fill="#78828A"
          />
        </svg>
      ),
      iconactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7299 3.50989L15.4899 7.02989C15.7299 7.51989 16.3699 7.98989 16.9099 8.07989L20.0999 8.60989C22.1399 8.94989 22.6199 10.4299 21.1499 11.8899L18.6699 14.3699C18.2499 14.7899 18.0199 15.5999 18.1499 16.1799L18.8599 19.2499C19.4199 21.6799 18.1299 22.6199 15.9799 21.3499L12.9899 19.5799C12.4499 19.2599 11.5599 19.2599 11.0099 19.5799L8.01991 21.3499C5.87991 22.6199 4.57991 21.6699 5.13991 19.2499L5.84991 16.1799C5.97991 15.5999 5.74991 14.7899 5.32991 14.3699L2.84991 11.8899C1.38991 10.4299 1.85991 8.94989 3.89991 8.60989L7.08991 8.07989C7.61991 7.98989 8.25991 7.51989 8.49991 7.02989L10.2599 3.50989C11.2199 1.59989 12.7799 1.59989 13.7299 3.50989Z"
            fill="#B43FEB"
          />
        </svg>
      ),
    },
    {
      title: "Coming Soon",
  
      name: "comingsoon",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
            fill="#78828A"
          />
          <path
            d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
            fill="#78828A"
          />
          <path
            d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
            fill="#78828A"
          />
        </svg>
      ),
      iconactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.64999C7.21996 4.64999 3.32996 8.53999 3.32996 13.32C3.32996 18.1 7.21996 22 12 22C16.78 22 20.67 18.11 20.67 13.33C20.67 8.54999 16.78 4.64999 12 4.64999ZM12.75 13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.99999C11.25 7.58999 11.59 7.24999 12 7.24999C12.41 7.24999 12.75 7.58999 12.75 7.99999V13Z"
            fill="#B43FEB"
          />
          <path
            d="M14.89 3.45H9.11001C8.71001 3.45 8.39001 3.13 8.39001 2.73C8.39001 2.33 8.71001 2 9.11001 2H14.89C15.29 2 15.61 2.32 15.61 2.72C15.61 3.12 15.29 3.45 14.89 3.45Z"
            fill="#B43FEB"
          />
        </svg>
      ),
    },
  ];
  