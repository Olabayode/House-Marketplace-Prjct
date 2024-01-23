import React, { useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
//import Spinner from './Spinner'

function OAuth() {
    //const[loading, setLoading] = useState(true)
  
    const navigate = useNavigate()
    const location = useLocation()

    
  
    useEffect(() =>{
      const auth = getAuth()
      getRedirectResult(auth).then((result) => {
      if(result){
          handleRedirect(result)
      }})
    } ,[])
        
    
  
  
    const onGoogleClick = async() => {
      
      try {
          const auth = getAuth()
          const provider = new GoogleAuthProvider()
          await signInWithRedirect(auth, provider)
          
      } catch (error) {
        toast.error('Could Not Authorize with Google')  
      }
      // if(loading){
      //   return<Spinner/>
      // }
      // setLoading(false)
  
    }


    const handleRedirect = async(result) => {
      const user = result.user
  
      //check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

  
      //if user does not exist
      if(!docSnap.exists()){
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    }
  
    return (
      <div className='socialLogin'>
          <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} With</p>
          <button className="socialIconDiv" onClick={onGoogleClick} >
              <img className='socialIconImg' src={googleIcon} alt="google" />
          </button>
      </div>
    )
  }
  
  export default OAuth