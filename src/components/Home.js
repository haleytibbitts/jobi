import Partners from "./Partners";
import CatPreview from "./CatPreview";
import TrendingJobs from "./TrendingJobs";
import NewJobs from "./NewJobs";
import GetStarted from "./GetStarted";

const Home = () => {
  return (
    <main className="home">
      <Partners />
      <CatPreview />
      <TrendingJobs />
      <NewJobs />
      <GetStarted />
    </main>
  );
};

export default Home;
