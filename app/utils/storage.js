export function getToken () {
        let token = localStorage.getItem("token")

        if(token){
            return JSON.parse(token);
        }
         return null;
}

export function setToken(token){
        if(!!token){
            try{
                localStorage.setItem("token",JSON.stringify(token))
            }
            catch(e){
                console.log("Error While Storing Token")
            }
        }
}