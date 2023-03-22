import Partners from "./Partners";
import CatPreview from "./CatPreview";
import TrendingJobs from "./TrendingJobs";
import NewJobs from "./NewJobs";
import GetStarted from "./GetStarted";
import WhyUs from "./WhyUs";
import ClientReviews from "./ClientReviews";
import BlogPreview from "./BlogPreview";
import TopBrands from "./TopBrands";

const Home = () => {
  return (
    <main className="home">
      <Partners />
      <CatPreview />
      <TrendingJobs />
      <NewJobs />
      <GetStarted />
      <WhyUs />
      <ClientReviews />
      <BlogPreview />
      <TopBrands />
    </main>
  );
};

export default Home;
