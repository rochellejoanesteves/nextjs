'use client';
import { useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations("Home");

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
      textAlign: "center"
    }}>
      <h1 className="mt-10 font-semibold">Page not found!</h1>
      <p>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page.</p>
      <p>{(t("example1"))}</p>
      <button 
        onClick={() => router.back()} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Go Back
      </button>
    </div>
  );
}
