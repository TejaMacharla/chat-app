
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDyaCfa_PILli88zGkA9kUZ1E3_4GZ4dsY",
  authDomain: "chat-app-js-94394.firebaseapp.com",
  projectId: "chat-app-js-94394",
  storageBucket: "chat-app-js-94394.appspot.com",
  messagingSenderId: "1034072181999",
  appId: "1:1034072181999:web:9d7f4e306d3b5d7dda5f1a"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

//create methods 

const signup=async(username,email,password)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password);
    const user=res.user
    //store user in firestore database
    await setDoc(doc(db,"users",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:'Hey, There i am using chat app',
      lastSeen:Date.now()
    })
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
    toast.success('User Registered!')
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const login=async(email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
    toast.success('User Successfully logged')
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout=async()=>{
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}


export {signup,login,logout,auth,db}