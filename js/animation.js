let mapElements=new Map,allElements=document.querySelectorAll("[data-animation]");function getRandomArbitrary(t){if(1==t){let t=50,e=250;return Math.ceil(Math.random()*(e-t)+t)}if(2==t){let t=301,e=600;return Math.ceil(Math.random()*(e-t)+t)}if(3==t){let t=601,e=900;return Math.ceil(Math.random()*(e-t)+t)}if(4==t){let t=901,e=1050;return Math.ceil(Math.random()*(e-t)+t)}if(5==t){let t=1100,e=1200;return Math.ceil(Math.random()*(e-t)+t)}if(6==t){let t=1250,e=1400;return Math.ceil(Math.random()*(e-t)+t)}if(7==t){let t=1500,e=1600;return Math.ceil(Math.random()*(e-t)+t)}}allElements.forEach(t=>{let e=t.getBoundingClientRect().top+window.scrollY;if(e>window.innerHeight+window.scrollY){let a=getRandomArbitrary(+t.getAttribute("data-animation"));t.style.animationDelay=`${a}ms`,t.style.opacity="0",mapElements.set(t,e)}}),window.addEventListener("scroll",()=>{for(let t of mapElements)t[1]<window.scrollY+window.innerHeight&&(t[0].classList.add("anim"),mapElements.delete(t[0]))});