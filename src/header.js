import React,{useState} from "react"
function Nav(){
  const col="bg-teal-500"
const[bg,setBg]=useState(col)
const[count,setCount]=useState("1")
const dark=()=>{
  if(count==="1"){
  setBg("bg-gray-900")
   setCount("2")  
}
else{
  setBg("bg-teal-500")
  setCount("1")
}

    document.querySelectorAll('.inverted').forEach((result)=>{
      result.classList.toggle('invert')
    })
}
    return(
        <header class={`text-gray-500 ${bg} body-font`}>
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl xl:block lg:hidden">Memes Maker</span>
    </a>
    <label className="switch" style={{backgroundColor: bg}}>
             <input type="checkbox" onClick={dark}/>
              <span className="slider round"></span>
             </label>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
     
    </div>
  </div>
</header>
    )   
}
export default Nav