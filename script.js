var images = [
    {
        url:"https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id:1,
        element:"one"
    },
    {
        url:"https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        id:2,
        element:"two"
    },
    {
        url:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id:3,
        element:"three"
    },
    {
        url:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:4,
        element:"four"
    },
    {
        url:"https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:5,
        element:"five"
    },
    {
        url:"https://images.unsplash.com/photo-1500349812227-3264f5f54181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:6,
        element:"six"
    },
    {
        url:"https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:7,
        element:"seven"
    },
    {
        url:"https://images.unsplash.com/photo-1619038779484-a27362fb82cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:8,
        element:"eight"
    },
    {
        url:"https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:9,
        element:"nine"
    },
    {
        url:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:10,
        element:"ten"
    },
    {
        url:"https://images.unsplash.com/photo-1585256262155-c044dc6ad38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:11,
        element:"eleven"
    },
    {
        url:"https://images.unsplash.com/photo-1496387314164-18b0105f7553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:12,
        element:"twelve"
    },
    {
        url:"https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:13,
        element:"thirteen"
    },
    {
        url:"https://images.unsplash.com/photo-1573739711422-68a9d0aa7d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:14,
        element:"fourteen"
    },
    {
        url:"https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:15,
        element:"fifteen"
    },
    {
        url:"https://images.unsplash.com/photo-1613318282885-2168d00a8d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:16,
        element:"sixteen"
    },
]

var images2 = [
    {
        url:"https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:1,
        element:"one"
    },
    {
        url:"https://images.unsplash.com/photo-1594031633878-c59f0c8c16fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:2,
        element:"two"
    },
    {
        url:"https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:3,
        element:"three"
    },
    {
        url:"https://images.unsplash.com/photo-1615871155271-64f7c939833b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:4,
        element:"four"
    },
    {
        url:"https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
        id:5,
        element:"five"
    },
    {
        url:"https://images.unsplash.com/photo-1510629954389-c1e0da47d414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:6,
        element:"six"
    },
    {
        url:"https://images.unsplash.com/photo-1481391032119-d89fee407e44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:7,
        element:"seven"
    },
    {
        url:"https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:8,
        element:"eight"
    },
    {
        url:"https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:9,
        element:"nine"
    },
    {
        url:"https://images.unsplash.com/photo-1485962093642-5f4386e84429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:10,
        element:"ten"
    },
    {
        url:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:11,
        element:"eleven"
    },
    {
        url:"https://images.unsplash.com/photo-1622536283951-7df53ab72b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:12,
        element:"twelve"
    },
    {
        url:"https://images.unsplash.com/photo-1621188988280-67c8d6e130a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:13,
        element:"thirteen"
    },
    {
        url:"https://images.unsplash.com/photo-1623855245544-fa477b4d9e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id:14,
        element:"fourteen"
    },
    {
        url:"https://images.unsplash.com/photo-1624744968779-35aa3834538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id:15,
        element:"fifteen"
    },
    {
        url:"https://images.unsplash.com/photo-1533137138-ba67dc90d752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        id:16,
        element:"sixteen"
    },
]

var clicked = []

function setmages(){
    var temp = images
    images = images2
    images2 = temp
    clicked = []
}

function imgFunc (){
images.map((e)=>{
   return document.getElementById('container').innerHTML += "<div id="+e.element+" onclick=clickHandle("+e.id+") class='grid-item'>"+
"<img class='image' src="+e.url+` alt=''>${(e.id == clicked.filter((x)=>{return e.id == x}))?" <img class='check' src='https://www.citypng.com/public/uploads/preview/-31622652101fnmwrcny0a.png' alt=''>":""}`+
"</div>"
})
}

imgFunc();

function clickHandle (e){
    if(clicked.filter((x)=>{return e == x}) != e)
    {    
        clicked.push(e);
    }
    else{
        clicked.splice(clicked.indexOf(e), 1)
    }
    if(clicked.length == 16){
        setmages()
    }
    console.log(clicked)
    document.getElementById('container').innerHTML = ""
    imgFunc();
}







