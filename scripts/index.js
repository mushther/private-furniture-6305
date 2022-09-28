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