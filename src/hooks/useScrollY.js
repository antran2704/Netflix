import { useEffect, useState } from "react"

export function useScrollY() {
    const [scrollY,setScrollY] = useState(0)

    function handleScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setScrollY(scrollY)
    }
  
    useEffect(() => {
      handleScroll()
      window.addEventListener("scroll",handleScroll)
      return () => {
        window.removeEventListener("scroll",handleScroll)
      }
    },[])
  return ([scrollY])
}


export function useViewport() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth)
  useEffect(()=> {
      function handleWidth() {
        const width = window.innerWidth || document.documentElement.clientWidth
        setWindowWidth(width)
      }
      handleWidth()
      window.addEventListener("resize", handleWidth)

      return () => {
        window.removeEventListener("resize", handleWidth)
      }
  },[])
  return [windowWidth]
}