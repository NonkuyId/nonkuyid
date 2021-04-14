
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCbykpupvS5xdLWfcEJv69c58_cc8MrwTE",
    authDomain: "nonkuy-79a3f.firebaseapp.com",
    projectId: "nonkuy-79a3f",
    storageBucket: "nonkuy-79a3f.appspot.com",
    messagingSenderId: "1081443166341",
    appId: "1:1081443166341:web:0c496a87aecbc200d561ec",
    measurementId: "G-KZ9TGZMKGF"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    const auth = firebase.auth();
    
    
    function signUp(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");
    }
    
    
    
    function signIn(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        
        
        
    }
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
            var email = user.email;
            alert("Active User " + email);
            
            //Take user to a different or home page

            //is signed in
            
        }else{
            
            alert("No Active User");
            //no user is signed in
        }
        
        
        
    });
