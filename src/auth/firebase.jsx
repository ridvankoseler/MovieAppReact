import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//! burası register signup yaptığımız yer
export const createUser = async (email, password, navigate ,displayName) => {
  //?Yeni bir kullanıcı oluşturmak için kull. firebase methodu.
  //navigate i burdan çektik ve hata almadığımızda menüye gitmek için burda kullandık.
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //?Kullanıcı profilini güncellemek için kullanılan firebase methodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    toastSuccessNotify("Registered successfully!");
    navigate("/");
    
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

//!burası login signin yaptığımız yer.
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    // sessionStorage.setItem('user' ,JSON.stringify(userCredential.user))
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    console.log(err)
  }
};

//! burası set an authetication yani kull.bilgisini kontrol edip datayı aldığımız yer.
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    //?kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu.
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      // ...
      setCurrentUser(false);
    }
  });
};

//!Burası logout kısmı
export const logOut = () => {
  signOut(auth);
};


//!Burası google ile otomatik girilirkenki method

//ilk önce firebase.com dan =>Authentication => sign-in-method => enable Google
//?Google ile girişi enable yap.
//=>Authentication => sign-in-method => Authorized domains => add domain
//?projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
export const signUpProvider = (navigate)=>{
  //?Google ile giriş yapılması için kullanılan firebase methodu
  const provider = new GoogleAuthProvider();

  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      navigate('/')
      toastSuccessNotify("Logged out successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
}