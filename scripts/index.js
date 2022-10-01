/*const getData = async () =>{
        let API = '23df424b0a53b0899f78685966243ee61'
    try{
        let res = await fetch(``);
        let data = res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getData();*/

//<<<<<<<<<<<<<<---------------slidshow--------------------->>>>>>>>>>>>>>>

let slidebarData = [
    {
    image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif.com-gif-maker_1_2000x.gif?v=1663841589"},
    {image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cinema-web_1_2000x.jpg?v=1664348886"},
    {image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-190-_1_1_2000x.png?v=1664173128"},
    {image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SN-Desktop-Banner-Wave-Style_1_2000x.jpg?v=1663914840"},
    {image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner_2_7bfc29a0-7d98-4e13-8d4d-a471acde145f_2000x.png?v=1663829195"},
];

const slidebar = (data) =>{
    
    let slideDiv = document.getElementById("slidebar");
    let img = document.createElement("img");
    
    let i=0;
       img.src = data[i].image_url;
       slideDiv.append(img);
       i++;
    setInterval(() => {
        if(i==4){
            i=0;
        }
       img.src = data[i].image_url;
       slideDiv.append(img);
       
    i++;
    }, 4000);
    
    
}
slidebar(slidebarData);

//<<<<<<<<<<---------------bestsaller----------->>>>>>>>>>>>>
let bestsellerData = [
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_400x.png?v=1657869596",
    title:"boAt Airdopes 141",
    rating:"4.8",
    price:"999",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",
    title:"boAt Rockerz 333",
    rating:"4.9",
    price:"1199",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1-2_400x.png?v=1653637007",
    title:"boAt-watch-wave-neo-stylish-smartwatch",
    rating:"4.6",
    price:"1699",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
    title:"boAt Airdopes 121 v2",
    rating:"4.8",
    price:"929",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CMF.996_400x.png?v=1661155833",
    title:"Xtend Talk",
    rating:"5.0",
    price:"2999",
    }
];

const bestSaller = async (data)=>{
    let category = document.getElementById("bestsaller");
        data.forEach(el => {
        let div  = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image_url;

        let div1= document.createElement("div");
        div1.setAttribute("class","textdiv") 

        let title = document.createElement("p");
        title.innerText=el.title;
        let rating = document.createElement("p");
        rating.innerText=`Rating: ⭐${el.rating}`;
        let price = document.createElement("p");
        price.innerText=`₹${el.price}`;
        let btn = document.createElement("button");
        btn.innerText="ADD TO CART"

        div1.append(title,rating,price,btn);
        div.append(img,div1);
        category.append(div);
    });
}
bestSaller(bestsellerData);


//    <<<<<<<<<<<---------SHOP BY CATEGORY------------->>>>>>>>

let categoryData = [
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_e149ff17-7bd5-45c8-81db-668b35a9c682_150x.png?v=1662980071",
    title:"AIRDOPS TRUE WIRELESS"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-1_new_150x.png?v=1663305252",
    title:"ROCKERZ WIRLESSS"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_new_150x.png?v=1663305235",
    title:"ROCKERZ HEADPHONES"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_new_150x.png?v=1663305091",
    title:"BASSHESDS WIRED"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_ea55ea05-113b-4ca2-b415-736c2739cc59_150x.png?v=1662976773",
    title:"BASSHEADPHONE WIRED HEADPHONES"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_481c8210-c7cf-48af-b767-ad5529e5e1f9_150x.png?v=1663838944",
    title:"IMMORTAL GAMING"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_57157db1-8a35-4db2-97ad-69cb09db3097_150x.png?v=1663838502",
    title:"MISFIT TRIMMERS"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/smartwatches_new_ee36456a-ebda-49f9-9c08-b681ec622b02_150x.png?v=1663838446",
    title:"SMART WATCHES"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_bd8976ab-837d-454a-8e12-53b3c38d79f2_150x.png?v=1663838883",
    title:"STONE SPEAKERS"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/home_audio_150x.png?v=1663305152",
    title:"AAVANTE HOME AUDIO"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_new_150x.png?v=1663305202",
    title:"CHARGERS"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_150x.png?v=1662980890",
    title:"MOBILES ACCESSORIES"
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_150x.png?v=1662980928",
    title:"CAR ACCESSORIES"
    },

];
const category = (data) => {
    let category = document.getElementById("category");
    data.forEach(el => {
        let div  = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image_url;
        let h4 = document.createElement("p");
        h4.innerText=el.title;

        div.append(img,h4);
        category.append(div);
    });
}
category(categoryData);

// <<<<<<<<<<<<<<--------- video apend ------------->>>>>>>>>>
const autoplay = async () =>{

    let data = [
        {
         video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_aNMbCNA29Xi8HUyLtIJkh_1300.mp4?v=11982520568606159882",
         image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_85232e56-016f-4201-8612-d70525d301b5_small.png?v=1663821109",
         title:"boAt Airdopes 190",
         price:"1299",
        },
        { 
         video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_Icbu8Gdl3GYtBy9W97q10_1200.mp4?v=16238232401341532396", 
         image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e934902f-345b-4cc4-80b9-9ef3d77a1f34_small.png?v=1661272676",
         title:"boAt Storm Pro Call",
         price:"1799"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_rfcpupPH91wNHtK3BOvFW_1200.mp4?v=8749322954131352540", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CMF.1028_small.png?v=1661155840",
            title:"boAt Xtend Talk",
            price:"2999"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_rq_O5tqSZIIgR13t0gUaN_800.mp4?v=6083534206712186131", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_05260e43-8f0b-4776-a433-ea2089c7f7e7_small.png?v=1659614550",
            title:"boAt Airdopes 141 Pro",
            price:"1499"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_lUtZiAPq1HANGe2gvJovW_800.mp4?v=2126044101788558141", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_small.png?v=1658294451",
            title:"boAt Wave Select Smartwatch",
            price:"2499"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_-vF35-rQnNyg9d5vdpnyC_800.mp4?v=3477037477854459646", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-1_e66c4515-7594-4726-89d6-e2b311a39c94_small.png?v=1658436784",
            title:"boAt stone 1000v2",
            price:"2999"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_JT5ptn7CC1JX0ufRBgp2y_1200.mp4?v=5011195729603710195", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_small.png?v=1658150489",
            title:"boAt Airpodes 121 PRO",
            price:"1299"
        },
        { 
            video_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_qjLwUylO1VpwhJhIfdKxH_800.mp4?v=286953491841958588", 
            image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Blue_0b68b413-f3ee-4c92-84bc-ba9cd6665463_small.png?v=1657775058",
            title:"boAt Airdopes 131 PRO",
            price:"999"
        },
    ];

    let video_div = document.getElementById("video_div");
    data.forEach(el => {
        let div = document.createElement("div");
        let video = document.createElement("video");
        video.src=el.video_url;
        //  preload="none" loop="true" playsinline="true" autoplay="true" muted="true"
        video.setAttribute("autoplay","true");
        video.setAttribute("preload","none");
        video.setAttribute("loop","true");
        video.setAttribute("playsinline","true");
        video.muted="true";
        let img = document.createElement("img");
        img.src=el.image_url;
        let title = document.createElement("p");
        title.innerText=el.title;
        let price = document.createElement("p");
        price.innerText= `₹${el.price}`;

    div.append(video,img,title,price);
    video_div.append(div);
    });
}
autoplay();
// <<<<<<<<<<<--------------- NewLunch---------------->>>>>>>>>

let newLunchData = [
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/orion_300x.png?v=1664177169",
    title:"boAt Aavante Orion",
    rating:"4.8",
    price:"6999",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_eebd7966-a481-44a9-91a2-bef06d4c0f05_400x.png?v=1663821109",
    title:"boAt Airdopes 190",
    rating:"5.8",
    price:"1299",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/w_300x.png?v=1663758990",
    title:"boAt Airdopes 393 ANC",
    rating:"6.8",
    price:"2599",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245pro4_300x.png?v=1663584969",
    title:"boAt Rockrez 245 Pro",
    rating:"6.7",
    price:"999",
    },
    {
    image_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_4f4984e7-01a2-4398-ae64-a7c021b1eaaf_300x.png?v=1663246010",
    title:"boAt Wave Beat",
    rating:"7.5",
    price:"1399",
    },
];

