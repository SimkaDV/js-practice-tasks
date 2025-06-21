module.exports = async () => {
    let tryNum = 55 
    
    let left = 0;
    let right = Number.MAX_SAFE_INTEGER;
  
    while (tryNum > 0){
      const setValue = Math.floor((left+right)/2)
      const request = await fetch(`https://game.yandex?value=${setValue}`)
      if (request.ok){
        const res = await request.json()
        if (res.result == "more"){
          left = setValue +1 
          tryNum--
        }else if (res.result == "less"){ 
          right = setValue -1
          tryNum--
        }else {
          return setValue
        }  
      } 
    } throw new Error("You have made too many requests");
  }     