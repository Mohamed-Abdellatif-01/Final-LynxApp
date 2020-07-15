// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

//import * as Kinvey from "kinvey-nativescript-sdk";

/*Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});*/
import axios from "axios";
import * as http from "http";
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

global.isUserLoggedin = false;
global.accessToken = null;
global.userData = null;
global.toRegister = null;
global.selected = null;
export default class BackendService {

    isLoggedIn() {
        return global.isUserLoggedin;
    }

    async login(user) {
        console.log("logging in");
        

          return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/abdelateef/auth/authenticate", // your api url
                data: {
                    email: user.email,
                    password: user.password
                  }
                }).then(result => {
                    var userDetails = null;

                    if(result.data.data.token)
                    {
                        global.userData = result.data.data;
                        global.accessToken = result.data.data.token;
                        global.isUserLoggedin = true;
                        
                    }
                    if(global.userData != null)
                    {
                        return true;
                    }
                    else{
                        return false;
                    }
                }, error => {
                    console.error(error);
                });
        
        //return Kinvey.User.login(user.email, user.password);
    }
    async access(){
        return  axios({ method: "POST", 
        "url": "https://thebaselabs.com/directus/public/abdelateef/auth/authenticate", // your api url
        data: {
            email: "cmabdellateef@std.axcelacademy.co.uk",
            password: "TZbCMgG9t5"
          }
        }).then(result => {
            var userDetails = null;

            if(result.data.data.token)
            {
                // console.log(result.data.data.token);
               global.toRegister = result.data.data.token;
                
            }
            else{
                return false;
            }
        }, error => {
            console.error(error);
        });

    }
    async addUser(user){
        
        return  axios({ method: "POST", 
          "url": "https://thebaselabs.com/directus/public/abdelateef/users", // your api url
          headers: { Authorization: `Bearer ${global.toRegister}`},
          data:{
                first_name: user.firstname,
                last_name: user.lastname,
                email: user.email,
                password: user.password,
                role: 3,
                status: "active"
           }
          }).then(result=>{
              return result.data.data;
              // console.log("Questions ---- ",global.Questions);
          },error => {
              console.error(error);
          });
    }

    async getRequests()
    {
      
        console.log("----&&&&-- in getrequests");
        return  axios({ method: "GET", 
                "url": "https://thebaselabs.com/directus/public/abdelateef/items/questions", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {

                    //console.log("------ "+result.data.data.length);
                    //console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }

    async AskQn(question)
    {
        
        return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/abdelateef/items/questions", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken },
                data: {
                    status:"published",
                    title: question.title,
                    details: question.details
                }
                }).then(result => {

                    // console.log("------ "+result.data.data);
                    //console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async addAnswer(ans)
    {
        
        return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/abdelateef/items/answers", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken },
                data: {
                    status:"published",
                    content: ans,
                    questionid: global.selected
                }
                }).then(result => {

                    // console.log("------ "+result.data.data);
                    //console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
   
    async SingleQ()
    {
        // console.log("----&&&&-- in Single Question");
        return  axios({ method: "GET", 
                "url": 'https://thebaselabs.com/directus/public/abdelateef/items/questions/'
                +global.selected+'?fields=id,details,title,created_on,owner.id,owner.first_name,owner.last_name', // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {
                    // console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async Answers()
    {
        return  axios({ method: "GET", 
                "url": ' https://thebaselabs.com/directus/public/abdelateef/items/answers?filter[questionid] ='
                +global.selected+"&fields=id,content,owner.first_name,owner.last_name, created_on", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {
                    // console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }

    logout() {
        global.isUserLoggedin = false;
        global.accessToken = null;
        global.userData = null;
        return true;
    }

    register(user) {
        //return Kinvey.User.signup({ username: user.email, password: user.password });
    }
}

