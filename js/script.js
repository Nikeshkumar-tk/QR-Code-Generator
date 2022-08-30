const form=document.getElementById("gen-form")
const qr=document.getElementById("qr-code")
var qR=null;
const Generate=(e)=>{
    e.preventDefault()
    clear()
const url=document.getElementById('url').value
const size=document.getElementById('size').value
if(url===''){
    alert("please enter a url")
}
else{
    showLoading()
    setTimeout(() => {
        hideLoading()
        GenqrCode(url,size)
        setTimeout(()=>{
            const downLoadUrl=document.getElementById("qr-code").querySelector('img').src
            createDownloadbtn(downLoadUrl)
        })
    }, 1000);
    
}
}
const showLoading=()=>{
    document.getElementById("spinner").style.display="block"
}


const hideLoading=()=>{
    document.getElementById("spinner").style.display="none"
}
const GenqrCode=(url,size)=>{
 const qrcode = new QRCode("qr-code", {
        text: url,
        width: size,
        height: size,
       
    });
    qR=qrcode
}
const clear=()=>{
    qr.innerHTML=''
}
const createDownloadbtn=(url)=>{
const link=document.createElement('a')
link.id='download-link'
link.classList='bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
link.href=url
link.download='qR'
link.innerHTML='Download image'
document.getElementById('generated').appendChild(link)

}

form.addEventListener('submit',Generate)