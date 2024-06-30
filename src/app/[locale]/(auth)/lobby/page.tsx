"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Title from "@/app/components/title";


const Lobby = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const {locale} = useParams()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push(`/${locale}/login`);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex items-center justify-center flex-col">
      <Title level={1} className="text-4xl mb-4">
       Lobby
      </Title>
    </div>
  );
};

export default Lobby;
