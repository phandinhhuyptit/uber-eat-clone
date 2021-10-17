import firebase from '../../firebase/firebase';
import { SIGN_IN } from "../constants";

export const register = (email, password, reset) => async (dispatch) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const db = await firebase.firestore();
    await db.collection("users").add({
      email: userCredential?.user?.email,
      phoneNumber: userCredential?.user?.phoneNumber,
      uid: userCredential?.user?.uid,
      photoURL: userCredential?.user?.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch({
      type: SIGN_IN,
      user: {
        email: userCredential?.user?.email,
        phoneNumber: userCredential?.user?.phoneNumber,
        uid: userCredential?.user?.uid,
        photoURL: userCredential?.user?.photoURL,
        accessToken: await userCredential?.user?.getIdToken(),
        refreshToken: userCredential?.user?.refreshToken,
      },
    });

    reset();
  } catch (error) {
    console.log('error register', error);
  }
};

export const login = (email, password, reset) => async (dispatch) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch({
      type: SIGN_IN,
      user: {
        email: userCredential?.user?.email,
        phoneNumber: userCredential?.user?.phoneNumber,
        uid: userCredential?.user?.uid,
        photoURL: userCredential?.user?.photoURL,
        accessToken: await userCredential?.user?.getIdToken(),
        refreshToken: userCredential?.user?.refreshToken,
      },
    });
    reset();
  } catch (error) {
    console.log('error login', error);
  }
};
