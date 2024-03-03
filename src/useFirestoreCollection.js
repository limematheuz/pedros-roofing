import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy as firestoreOrderBy } from "firebase/firestore";
import { db } from "./firebase";

const useFirestoreCollection = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const collectionRef = collection(db, collectionName);
          const collectionQuery = query(collectionRef, firestoreOrderBy('order'));
  
          const snapshot = await getDocs(collectionQuery);
  
          const collectionData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setData(collectionData);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [collectionName]);
  
    return { data, loading, error };
  };
  
  export default useFirestoreCollection;