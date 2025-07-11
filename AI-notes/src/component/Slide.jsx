import { useState,useEffect } from "react"
function Slide(){
    const [slide,setSlide]=useState([])
    const images = [
        { src: 'https://placehold.co/800x400/FF5733/FFFFFF?text=Slide+1', alt: 'A vibrant orange background with text "Slide 1"' },
        { src: 'https://placehold.co/800x400/33FF57/FFFFFF?text=Slide+2', alt: 'A bright green background with text "Slide 2"' },
        { src: 'https://placehold.co/800x400/3357FF/FFFFFF?text=Slide+3', alt: 'A deep blue background with text "Slide 3"' },
        { src: 'https://placehold.co/800x400/FF33A1/FFFFFF?text=Slide+4', alt: 'A vivid pink background with text "Slide 4"' },
      ];
    useEffect(()=>{
        const time = setInterval(()=>{
         setSlide((prev)=> (prev+1)%images.length)
        },3000);
        return ()=>{
            clearInterval(time)
        }
    },[images.length])
    return  (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 font-sans py-40">
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-200">
          
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {images.map((image, index) => (
          
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            </div>
          </div>
        </div>
      );
}
export default Slide;