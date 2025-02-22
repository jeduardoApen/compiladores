const MainView =  async (params) => {
  const view = /*html*/ `
     <section class="main-container">

      <div class="w-9/12 flex justify-center flex-col ">
            <div class="w-full">
                  <h2 class="text-center text-white text-2xl font-semibold" >Prueba de analizador léxico</h2>
            </div>

            <div class=" my-4 flex justify-center items-center flex-col">

            <form id="formData" class="w-full flex justify-center" >
               <textarea style="margin:0 auto; width:100%;" id="inputText" name="code" rows="5" cols="40" >
               </textarea>
            </form>

            

            <a class="m-4  px-4 py-2 font-semibold text-sm 
                     bg-cyan-500 
                     text-white rounded-full shadow-sm" 
                     type="submit"

                     id="buttonCheck"
                     
                     
                     >Revisar Texto
            </a>

            

            </div>
      </div>

      <div class="w-9/12">
         <h2 class="text-center text-white text-2xl font-semibold"  >Salida</h2>
         <div class="w-full px-1 py-4 h-80 text-xs bg-white overflow-x-scroll   " id="outputText">
           
         </div>
      
      </div>

    
     </section> 
  `  

  return view
} 

export default MainView