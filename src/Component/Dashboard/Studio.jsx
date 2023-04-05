import React from 'react';
import {SwiperSlide,Swiper} from 'swiper/react'
import 'swiper/css'

const dataStudio = [
    {   
        content: <div>
        <a className='inline-block'  href="repet"> 
        <svg  className='' width="177" height="88" viewBox="0 0 177 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.8349 29.2223C89.5744 29.2569 90.2807 29.5393 90.8401 30.0241C91.6025 30.7458 91.8023 31.9491 91.4415 32.9119C90.0389 35.7991 86.7031 37.7276 84.4236 38.3656C83.0599 38.6863 81.336 38.6863 80.0925 38.2052C79.4906 38.5661 78.9827 39.7322 78.2477 39.2476C77.1838 38.4167 78.1048 37.1164 77.4906 36.1937C77.3639 36.0037 77.045 35.9897 76.8846 35.6789C76.0421 33.834 77.085 32.0694 78.2477 30.6662C80.1861 28.5035 85.7473 26.0939 88.8349 29.2223ZM82.3784 30.6656C81.2953 30.8661 80.0722 31.3373 79.411 32.1095C78.7492 32.8811 78.3285 33.6336 78.7294 34.4354C80.1332 33.393 80.8148 31.9491 82.3789 31.0671C82.3784 30.9062 82.6189 30.7859 82.3784 30.6656ZM88.9157 31.0671C86.1482 30.826 84.0628 32.9119 82.0977 34.9165C81.9774 35.2373 81.2558 35.5981 81.8171 35.9589C84.4643 36.1995 86.9907 35.4383 88.9157 33.6731C89.4776 33.1519 89.8773 32.4703 89.5979 31.7481C89.4776 31.468 89.1946 31.1874 88.9157 31.0671ZM112.896 43.0175C114.18 46.1458 115.262 51.0777 112.896 54.0858C112.255 54.8075 111.132 55.4728 110.41 54.9277C107.763 52.8029 106.641 49.7547 104.997 47.0273C104.756 46.907 104.756 47.2283 104.636 47.3486C104.035 50.1155 105.157 53.725 103.273 55.8899C102.551 56.0102 101.876 55.6389 101.628 54.9277C100.706 52.0806 101.667 49.1126 101.908 46.2655C102.47 44.8216 102.71 43.1377 103.954 42.0547C105.959 42.8565 106.921 45.1028 108.083 46.7472C108.926 47.9901 109.607 49.3939 110.57 50.5164C111.411 50.1556 110.997 49.0551 110.971 48.391C110.649 45.7844 109.927 43.3783 109.245 40.892C109.206 40.2505 108.846 39.1675 109.526 38.7665C111.333 39.569 112.094 41.4533 112.896 43.0175V43.0175ZM100.785 42.0547C100.785 42.6566 100.304 43.4085 99.9021 43.4986C96.0527 44.1 91.7617 43.7391 88.1528 44.9419C88.0325 45.3829 88.5537 45.4631 88.8344 45.5834C91.9215 46.0645 95.1707 46.1847 98.1787 46.9471C99.7691 47.3509 100.345 49.2335 100.465 50.7971C100.539 52.0301 100.065 53.5239 98.8609 54.3664C95.8941 56.2514 91.3625 56.1706 88.3538 54.4472C87.2039 53.8023 86.1081 52.7633 86.0279 51.4798C86.0349 50.4607 86.4695 49.6582 87.1912 49.2742C90.079 48.1109 93.6477 48.7535 96.1346 50.2364C96.2938 51.0388 95.4257 50.9952 95.0103 51.2793C92.2428 52.8836 90.158 49.4758 87.5915 50.7175C87.2307 50.958 86.9698 51.6291 87.391 51.8406C90.5589 53.2444 94.0882 52.2416 97.2159 51.3595C97.5768 51.2393 98.0184 50.8784 98.0579 50.5176C97.9376 49.2341 96.4943 48.954 95.5716 48.5932C92.8447 47.9116 89.8372 47.9116 86.9094 47.631C86.3481 47.5107 85.6328 47.1196 85.466 46.6688C85.1453 45.7065 85.1453 44.3829 85.867 43.5811C89.5961 40.2924 95.2503 40.5736 99.9823 41.4556C100.304 41.5736 100.664 41.6938 100.785 42.0547V42.0547ZM83.261 43.5788C83.6218 47.4282 83.8223 50.9981 83.7421 55.048C83.6619 55.5686 83.0605 55.6895 82.6596 55.8899C82.0181 56.0102 81.189 55.8737 80.9351 55.5291C80.0129 54.0445 80.3337 52.0405 80.2535 50.2358C80.3738 47.3892 80.3337 44.301 81.1361 41.6538C81.2895 41.2691 81.7375 40.9321 82.0983 41.1721C83.0605 41.6538 83.2209 42.6165 83.261 43.5788V43.5788ZM127.816 43.0175C128.008 43.3417 128.21 43.8425 127.816 44.0599C126.011 44.8617 123.565 44.5009 121.479 44.7414C120.918 45.2225 120.476 46.0244 120.676 46.7466C120.878 46.8669 121.057 47.0499 121.279 47.0267C122.561 47.1074 124.487 46.4253 125.33 47.6281C125.535 47.986 125.302 49.3224 124.728 49.3526C123.164 49.5542 120.591 49.1562 119.835 49.5542C118.873 50.1957 118.952 51.4386 118.591 52.442C119.274 52.883 119.988 52.4316 120.796 52.3212C122.282 52.0806 123.926 51.6396 125.409 51.9603C125.689 52.4815 126.091 53.0434 125.81 53.6849C123.282 55.6901 120.021 57.7452 116.547 56.2914C115.243 55.7069 114.662 53.725 115.103 52.0417C115.383 50.8383 116.626 49.6757 115.865 48.3921C115.745 47.8303 116.066 47.3497 116.547 47.2295C117.87 47.2295 117.589 45.5851 118.271 44.8228C117.51 43.9808 115.585 44.0209 115.786 42.3365C116.708 41.8554 117.831 42.0157 118.873 41.8554C121.239 41.3737 123.885 41.093 126.293 41.3737C126.773 41.4701 127.415 42.4161 127.816 43.0175ZM70.5483 33.8741C74.249 36.8991 79.0501 42.0553 78.4488 47.9901C77.7265 52.6826 72.7539 56.2113 68.5431 57.3344C64.4525 58.5372 59.3196 58.4169 55.1483 57.4547C54.8676 58.217 54.587 59.1386 53.7049 59.4599C53.1437 59.6604 52.4214 59.5401 51.9804 59.1792C50.7376 58.016 51.7399 55.7703 49.9351 55.0492C46.4059 53.5652 42.5959 50.6373 40.7918 47.0284C40.5512 46.3068 40.8319 45.5851 41.2729 45.0238C44.0404 42.8182 47.529 41.9361 51.0182 41.254C51.2187 41.3342 51.1385 41.0535 51.2988 40.9733C51.4993 38.5672 51.5795 36.1205 52.3412 33.9549C52.515 33.651 52.9426 33.554 53.2238 33.7544C55.4295 35.4383 54.3865 38.6073 55.3493 40.8926C59.5601 41.093 63.771 41.2935 67.0992 43.6601C68.2224 44.5822 68.496 46.3434 68.1416 47.3497C67.7877 48.3544 66.6181 49.0743 65.535 49.1533C64.8128 49.1533 63.4497 49.2236 63.5298 48.6728C63.61 48.1214 65.983 47.219 65.2544 46.4665C64.2068 45.3852 58.9652 44.742 55.7165 44.3411C55.3156 44.2609 54.9478 44.3812 54.9478 44.8222C54.8676 47.8698 54.6271 51.2381 55.1483 54.1666C55.1884 54.3676 55.4289 54.6082 55.63 54.6471C61.3643 55.5698 67.4199 55.048 71.9114 51.7599C73.9968 50.0766 74.6789 47.7088 74.3175 45.1028C72.5128 37.8444 64.9336 33.4726 58.7176 30.6656C52.6626 28.0189 45.9648 26.6552 38.7866 27.0166C37.6437 27.1003 35.8326 27.4948 35.8192 27.8992C35.8059 28.3036 37.8709 28.1764 37.6234 28.9416C37.3764 29.7063 35.2777 29.2525 34.656 29.0619C34.0342 28.8713 34.0947 27.9788 34.255 27.4176C35.8192 24.6506 40.184 24.4269 42.1555 24.3299C53.0629 24.0486 63.6106 28.2025 70.5483 33.8741V33.8741ZM50.8979 44.6217C48.1304 44.6618 45.2031 44.9425 42.6366 45.9047C42.1154 46.1051 41.4734 46.6664 41.8743 47.3486C42.9167 48.7518 44.4076 49.904 45.8045 50.7169C47.2013 51.5286 49.0531 52.5617 50.7375 52.8029C51.1385 50.1957 51.1385 47.6292 51.0984 44.9425C50.9374 44.8623 51.0978 44.7019 50.8979 44.6217V44.6217ZM133.79 40.9722C133.67 44.4608 130.42 46.6269 130.42 50.1155C130.541 50.2358 130.622 50.3962 130.781 50.3171C133.389 47.4694 135.955 43.419 139.765 42.2162C140.769 42.136 141.676 43.0082 142.051 43.6601C143.375 46.3068 143.055 50.0365 141.21 52.4426C139.306 54.8046 135.995 57.1746 132.227 56.7731C130.664 60.6231 129.579 64.6736 128.978 68.8845C128.657 69.7264 127.896 68.9646 127.415 68.8043C124.167 66.2378 126.834 59.4436 127.054 58.5767C127.274 57.7121 128.143 55.6726 128.779 53.9649C127.255 51.2387 128.217 47.9494 129.46 45.423C130.422 43.7385 131.747 42.0541 133.31 40.7711C133.509 40.7717 133.67 40.8118 133.79 40.9722V40.9722ZM140.248 45.3033C139.766 45.2231 139.565 45.8652 139.165 45.9854C137.321 48.0708 135.475 50.1562 134.553 52.6425C135.797 52.8029 136.839 52.001 137.922 51.56C139.766 50.3967 140.93 48.4729 140.809 46.2667C140.729 45.9047 140.408 45.624 140.248 45.3033Z" fill="#F9F9F9"/>
        <rect x="0.5" y="0.5" width="176" height="87" rx="15.5" stroke="#29282F"/>
        </svg>
        </a>
        </div>
        
    },
    {   
        content: <div>
        <a className='inline-block'  href="repet"> 
        <svg width="176" height="88" viewBox="0 0 176 88" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" clipRule="evenodd" d="M36.9409 28.9993H57.8795V59.001H36.9409V28.9993ZM39.9589 55.9807H54.8511V32.0207H39.9589V55.9807V55.9807Z" fill="#FFCD1A"/>
         <path fillRule="evenodd" clipRule="evenodd" d="M71.7882 42.4598H70.493C68.7917 40.0566 67.1044 37.6685 65.4194 34.9695H65.4071V42.4598H63.9755V32.0161H65.2718C66.9731 34.4024 68.6581 36.7737 70.3274 39.4587H70.3571V32.0161H71.7888V42.4598H71.7882ZM75.1914 38.3262C75.6068 36.9532 76.0252 35.6854 76.3988 34.0735H76.429C76.8462 35.6854 77.2198 36.9538 77.6074 38.3262H75.1914V38.3262ZM75.8758 32.0161L72.2676 42.4598H73.8189L74.7265 39.6092H77.8764L78.6962 42.4598H80.6968L77.3686 32.0161H75.8758V32.0161ZM82.3812 42.4598V33.417H79.6352V32.0161H86.9151V33.417H84.1714V42.4598H82.3812ZM87.4956 32.0161H89.2736V42.4598H87.4956V32.0161ZM94.7935 41.1449C92.9266 41.1449 92.2706 39.0862 92.2706 37.0868C92.2706 35.163 93.0161 33.3275 94.7935 33.3275C96.5686 33.3275 97.3118 35.163 97.3118 37.0868C97.3118 39.0862 96.6569 41.1449 94.7935 41.1449ZM94.7935 42.6364C97.5227 42.6364 99.2228 40.2059 99.2228 37.0863C99.2228 34.163 97.3461 31.8359 94.7935 31.8359C92.2433 31.8359 90.3584 34.163 90.3584 37.0863C90.359 40.2065 92.062 42.6364 94.7935 42.6364ZM108.129 42.4598H106.832C105.13 40.0566 103.444 37.6685 101.76 34.9695H101.745V42.4598H100.315V32.0161H101.612C103.311 34.4024 104.997 36.7737 106.665 39.4587H106.696V32.0161H108.13V42.4598H108.129ZM111.531 38.3262C111.949 36.9532 112.365 35.6854 112.74 34.0735H112.77C113.188 35.6854 113.56 36.9538 113.947 38.3262H111.531ZM112.218 32.0161L108.608 42.4598H110.161L111.069 39.6092H114.218L115.038 42.4598H117.037L113.709 32.0161H112.218ZM117.557 32.0161H119.335V41.0565H122.869V42.4598H117.557V32.0161ZM70.6877 51.1952V55.5054C69.7319 55.8802 68.7319 56.1469 67.7203 56.1469C64.646 56.1469 62.707 53.7599 62.707 50.6862C62.707 47.8356 64.646 45.3452 67.779 45.3452C68.747 45.3452 69.7173 45.7049 70.3147 46.1517L69.7325 47.3899C69.256 47.0942 68.5082 46.8403 67.8231 46.8403C65.915 46.8403 64.6158 48.3475 64.6158 50.7199C64.6158 53.1946 66.1085 54.6553 67.6453 54.6553C68.1206 54.6553 68.5256 54.5984 68.9004 54.4026V51.1952H70.6877V51.1952ZM77.0908 46.9298H74.1037V49.7926H77.0275V51.1952H74.1037V54.5647H77.6242V55.9691H72.3123V45.5248H77.0908V46.9298ZM82.6102 54.6548C80.7433 54.6548 80.0861 52.5979 80.0861 50.5973C80.0861 48.6746 80.8322 46.8397 82.6102 46.8397C84.3841 46.8397 85.1284 48.6746 85.1284 50.5973C85.1284 52.5979 84.4707 54.6548 82.6102 54.6548ZM82.6102 56.1469C85.3388 56.1469 87.0383 53.7152 87.0383 50.5967C87.0383 47.6735 85.1598 45.3447 82.6102 45.3447C80.0559 45.3447 78.1785 47.6735 78.1785 50.5967C78.1779 53.7158 79.8758 56.1469 82.6102 56.1469V56.1469ZM95.6302 51.1952V55.5054C94.6744 55.8802 93.6773 56.1469 92.6617 56.1469C89.5897 56.1469 87.649 53.7599 87.649 50.6862C87.649 47.8356 89.5897 45.3452 92.7227 45.3452C93.693 45.3452 94.661 45.7049 95.2566 46.1517L94.6744 47.3899C94.1968 47.0942 93.4554 46.8403 92.768 46.8403C90.8558 46.8403 89.5577 48.3475 89.5577 50.7199C89.5577 53.1946 91.051 54.6553 92.5879 54.6553C93.0667 54.6553 93.4676 54.5984 93.8418 54.4026V51.1952H95.6302V51.1952ZM99.0654 46.9298H99.8538C100.91 46.9298 101.509 47.5387 101.509 48.6142C101.509 50.0151 100.66 50.6409 99.8085 50.6856C99.629 50.7036 99.2106 50.7188 99.0654 50.7315V46.9298V46.9298ZM103.599 55.9691L101.492 51.6444C102.641 51.0343 103.301 49.7926 103.301 48.5393C103.301 46.5085 102.06 45.5248 100.061 45.5248H97.2711V55.9691H99.0654V52.0308H99.8701L101.553 55.9691H103.599V55.9691ZM106.552 51.8361C106.969 50.4613 107.387 49.1947 107.761 47.5834H107.79C108.208 49.1947 108.58 50.4613 108.968 51.8361H106.552ZM107.237 45.5248L103.626 55.9691H105.177L106.088 53.1185H109.238L110.054 55.9691H112.056L108.728 45.5248H107.237V45.5248ZM115.412 45.5248H112.622V55.9691H114.413V52.0308H115.217C117.351 52.0308 118.651 50.2998 118.651 48.5393C118.651 46.5079 117.411 45.5248 115.412 45.5248ZM115.161 50.6862C114.975 50.7031 114.538 50.717 114.413 50.7292V46.9298H115.217C116.261 46.9298 116.86 47.5387 116.86 48.6142C116.86 50.0151 116.012 50.6415 115.161 50.6862ZM126.944 55.9691H125.154V50.943H121.437V55.9691H119.666V45.5248H121.437V49.5381H125.154V45.5544H126.944V55.9691ZM128.658 45.5248H130.437V55.9691H128.658V45.5248ZM138.49 47.4207C138.056 47.1517 137.343 46.8397 136.654 46.8397C134.831 46.8397 133.508 48.3469 133.508 50.7193C133.508 53.194 134.969 54.6548 136.7 54.6548C137.334 54.6518 137.954 54.4706 138.49 54.1318L138.984 55.431C138.443 55.8035 137.492 56.1469 136.628 56.1469C133.553 56.1469 131.613 53.7599 131.613 50.6862C131.613 47.8356 133.536 45.3452 136.654 45.3452C137.581 45.3452 138.443 45.7357 139.059 46.1517L138.49 47.4207V47.4207Z" fill="#F9F9F9"/>
         <rect x="0.5" y="0.5" width="175" height="87" rx="15.5" stroke="#29282F"/>
        </svg>
        
        </a>
        </div>
        
    },
    {   
        content: <div>
        <a className='inline-block'  href="repet"> 
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path filrule="evenodd" clipRule="evenodd" d="M42.8232 40.4482V46.7484H61.2522C63.3942 46.7484 66.131 44.7677 66.131 41.4911C66.131 40.1733 66.635 39.3137 65.0861 37.5706L62.7289 34.7776C61.3782 33.5175 62.8902 33.5175 64.0248 33.5175H71.8056V46.7484H77.9763V33.5175H86.2931V27.8513H59.3621C56.0855 27.8513 54.4833 30.9974 54.5735 32.6355C54.6641 34.2735 54.9654 36.3344 57.6882 38.8102C60.1719 41.0678 56.4586 40.4482 56.0855 40.4482H42.8232V40.4482ZM99.9379 27.8513H89.9831L84.4025 46.7489H90.6131L91.6206 44.1028H98.1728L99.1455 46.7489H105.229L99.9379 27.8513V27.8513ZM93.0071 39.5662L95.1492 32.6355L97.1658 39.5662H93.0071V39.5662ZM124.887 40.4482C122.493 40.4482 122.493 39.5662 122.493 39.5662C124.544 39.5662 126.363 36.5775 126.363 33.5175C126.363 30.4576 123.375 27.8513 120.98 27.8513H107.587V46.7489H114.392V40.4487C114.392 40.4487 117.29 43.8508 118.802 45.2369C120.315 46.6229 120.44 46.7489 122.493 46.7489H133.175V40.4487C133.176 40.4482 127.281 40.4482 124.887 40.4482V40.4482ZM118.712 36.0381H114.393V32.6355H118.712C120.693 32.6355 121.035 36.0381 118.712 36.0381ZM42.8232 49.1425H49.7853L51.5494 55.4437L53.1874 49.1425H60.4962L62.3862 55.4437L64.2768 49.1425H70.325L64.7803 68.0446H59.2361L56.8067 59.0973L54.0695 68.0446H48.3993L42.8232 49.1425ZM84.6132 49.2516H74.6584L69.0784 68.1487H75.2884L76.2964 65.5031H82.8491L83.8218 68.1487H89.9059L84.6132 49.2516ZM77.683 60.966L79.825 54.0352L81.8411 60.966H77.683ZM125.013 54.8137C123.88 54.8137 122.644 54.9461 123.995 56.2057L126.353 58.9992C127.901 60.7423 127.876 61.469 127.876 62.7878C127.876 66.0639 124.635 68.0446 122.493 68.0446L107.604 68.1447C105.552 68.1447 105.427 68.0192 103.914 66.6331C102.403 65.2471 99.5041 61.8445 99.5041 61.8445V68.1447H92.6999V49.2476H106.093C108.487 49.2476 111.476 51.8543 111.476 54.9138C111.476 57.9742 109.657 60.9625 107.605 60.9625C107.605 60.9625 108.507 61.8699 110.019 61.8699C111.532 61.8699 117.354 61.8759 117.354 61.8759C117.726 61.8759 121.439 62.4954 118.956 60.2378C116.233 57.7621 115.932 55.7022 115.841 54.0641C115.751 52.4261 117.167 49.143 120.442 49.143H133.177V54.8142H125.013V54.8137V54.8137ZM103.824 57.4339H99.5036V54.0312H103.824C105.804 54.0312 106.146 57.4339 103.824 57.4339Z" fill="#F9F9F9"/>
            <rect x="0.5" y="4.5" width="175" height="87" rx="15.5" stroke="#29282F"/>
            </svg>
                    
        </a>
        </div>
        
    },
    {   
        content: <div>
        <a className='inline-block'  href="repet"> 
             <svg width="177" height="88" viewBox="0 0 177 88" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_201_8311)">
         <path d="M28.5 20H148.5V68H28.5V20Z" fill="#F0141E"/>
         <path d="M130.049 31.1885V23.8378H109.479L106.093 48.3855L102.747 23.8378H95.3295L96.1584 30.3927C95.3033 28.7127 92.2678 23.8378 85.5838 23.8378C85.5394 23.8349 78.157 23.8378 78.157 23.8378L78.1263 59.618L72.7208 23.8378L63.0046 23.8349L57.4116 60.907L57.4148 23.8378H48.1143L44.7627 44.6621L41.4977 23.8378H32.1958V64.1415H39.5213V44.7149L42.854 64.1415H46.7477L50.0333 44.7149V64.1415H64.1544L65.0084 57.9423H70.6935L71.5474 64.1415L85.4124 64.1504H85.4225V64.1415H85.4398V51.0605L87.1376 50.8148L90.6562 64.1504H97.8281L97.8252 64.1415H97.8456L93.2285 48.5151C95.5664 46.7921 98.209 42.4241 97.5058 38.2436V38.2421C97.5144 38.2964 101.865 64.1684 101.865 64.1684L110.393 64.142L116.22 27.6132V64.142H130.048V56.8942H123.486V47.6525H130.048V40.2941H123.486V31.1885H130.049V31.1885ZM65.8712 51.5528L67.884 34.3203L69.9696 51.5528H65.8712ZM87.1611 43.5956C86.5985 43.8651 86.0129 44 85.4398 44.0014V31.039C85.4487 31.039 85.4621 31.0376 85.4765 31.0376C86.0477 31.0332 90.3252 31.2089 90.3252 37.4477C90.3252 40.7112 88.8708 42.7695 87.1611 43.5956V43.5956ZM144.806 56.8875V64.1326H131.314V23.832H138.58V56.8875H144.806Z" fill="#F9F9F9"/>
         </g>
         <rect x="0.5" y="0.5" width="176" height="87" rx="15.5" stroke="#29282F"/>
         <defs>
         <clipPath id="clip0_201_8311">
         <rect width="120" height="48" fill="white" transform="translate(28.5 20)"/>
         </clipPath>
         </defs>
         </svg>
        </a>
        </div>
        
    },
    
]





function Studio(props) {
    return (
        <div className=' pl-6 h-full w-full  ' >
            <Swiper grabCursor ={"true"}  spaceBetween={20} slidesPerView={"auto"}>
                {dataStudio.map((item,index)=> { return (
                    <SwiperSlide className='w-44 '
                    key={index}>
                         {item.content}
                    </SwiperSlide>
                    
                )
                })}
            </Swiper>
        </div>
    );
}


export default Studio