'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './page.module.css'; // Import the module CSS

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem('collection_id');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;
    const formData = new FormData(e.target);
    const jsonObject1 = {};
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    jsonObject1['data'] = jsonObject;
    jsonObject1['site'] = SITE;
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(jsonObject1)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      localStorage.setItem('collection_id', responseData.data);
      router.push('/2');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
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
              <div className={`${styles.formGroup} form-group w-100`}>
                <label htmlFor="">Full Name </label>
                <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`${styles.formControl} w-100 form-control`}
                      name="fname"
                      required
                    />
              </div>

              <div className={`${styles.formGroup} form-group w-100`}>
                <label htmlFor="">Mobile Number </label>
                <input
                      type="text"
                      placeholder="Enter your mobile number"
                      className={`${styles.formControl} w-100 form-control`}
                      name="mb"
                      minLength={10}
                      maxLength={10}
                      inputMode="numeric"
                      required
                    />
              </div>

              <div className={`${styles.formGroup} form-group w-100`}>
                <label htmlFor="">Pan Card No. </label>
                <input
                      type="text"
                      className={`${styles.formControl} form-control`}
                      placeholder="Enter your pancard no"
                      name="paanno"
                      required
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      title="invalid pancard number"
                    />
              </div>

              <div className={`${styles.formGroup} form-group w-100 my-3 mb-0 d-flex justify-content-center`}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${styles.submitButton} ${styles.bgPrimary} w-100 btn btn-danger`}
                >
                  Register/Login
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
