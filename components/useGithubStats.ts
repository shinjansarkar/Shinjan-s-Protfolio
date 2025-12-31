import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useGithubStats() {
  const { data, error, isLoading } = useSWR(
    "/api/github-stats",
    fetcher,
    { refreshInterval: 60000 * 10 } // 10 minutes
  );
  return {
    stats: data,
    isLoading,
    isError: error,
  };
}
