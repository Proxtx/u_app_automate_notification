import { clients, refreshClients } from "../../private/clients.js"; 

  

 export class App { 

   constructor(config) { 

     this.config = config; 

   } 

  

   async notification(title, content) { 

     await refreshClients(); 

     let client = clients[this.config.client]; 

     return ( 

       await client.request("automate_notification", "notification", [ 

         { 

           title, 

           text: content, 

         }, 

       ]) 

     ).result 

       ? "Success" 

       : "Error"; 

   } 

 }
