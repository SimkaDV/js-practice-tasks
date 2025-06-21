module.exports = async function(input) {
    const result = [];
    
    //функция для прохода по папке
    async function searchFolder(folder){
      //получаю размер папки 
       let size = await new Promise((resolve)=>{
          folder.size((size)=> resolve(size)) 
       }) 
        console.log("Folder size:" , size)
        //цикл, который проходит все элементы папки 
      for(let i = 0; i < size; i++){
          let file = await new Promise((resolve)=>{
             folder.read(i, (file) => resolve(file))
           }) 
          console.log(file)
           
        //проверяем является ли файл стройкой  
          if(typeof file == "string"){
            //проверяет битость файла
            if(file !== "file" && checkDestroiFile(file)){
              result.push(file)
              console.log(result)
            }
          } else if( file !== null && typeof file == "object" && file.read && file.size && file){
            try{
              // рекурсивный обход
              await searchFolder(file)
                
            }
            catch{
              console.log("что-то не так")
            }
          } 
      }
    }
    await searchFolder(input)
  
   // функция для проверки битости файла 
     function checkDestroiFile(str){
      for(let j = 0; j < str.length; j++){
        if (str[j]===str[j+1]){
          return true
        }
      }
      return false
    }
  
    console.log(result)
    return result.sort()
    
}
