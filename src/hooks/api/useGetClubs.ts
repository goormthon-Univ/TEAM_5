import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

function useGetClubs() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getClubs() {
    setIsLoading(true);
    const response = await instance.get<{}, any>(`/bookClubs`);

    setClubs(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getClubs();
  }, []);

  return { clubs, isLoading };
}

export default useGetClubs;
