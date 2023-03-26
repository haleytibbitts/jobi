// import axios from "axios";

// // const uuidv4 = uuid();
// //   const [companies, setCompanies] = useState([]);
// //   const newDate = new Date().toISOString();
// //   const exp = Math.floor(Math.random() * 10) + 1;
// //   const sal = Math.floor(Math.random() * 1000) + 18;

// //   useEffect(() => {
// //     const fetchCompanies = async () => {
// //     try {
// //     const data = await axios.get(
// //       "https://proxy.junocollege.com/https://discovery.clearbit.com/v1/companies/search",
// //       {
// //         headers: {
// //           'Authorization': "Bearer sk_2062ca72c1782ce5771f109fcd4ded63",
// //         },
// //         params: {
// //           query: 'name:"dropbox"',
// //           limit: 1,
// //         }
// //       }
// //     );
// //     const jobsArray = data.data.results;
// //     setCompanies(jobsArray);
// //   } catch (error) {
// //     alert(error);
// //   }
// // };
// // fetchCompanies();

// //   }, []);

// //   useEffect(() => {
// //     const jobsObject = companies.map((company) => {
// //       return {
// //       id: company.id,
// //       jobTitle: "",
// //       company: company.name,
// //       logo: company.logo,
// //       website: `https://www.${company.domain}`,
// //       facebook: `https://www.facebook.com/${company.facebook.handle}`,
// //       twitter: `https://www.twitter.com/${company.twitter.handle}`,
// //       jobType: "",
// //       expLvl: exp,
// //       salary: sal,
// //       location: `${company.geo.country}, ${company.geo.city}`,
// //       jobCategory: "",
// //       overview: company.description,
// //       datePosted: company.indexedAt,
// //     };
// //     })
// //     jobsObject.forEach((job) => {
// //       const database = getDatabase(firebase);
// //     const jobsRef = ref(database, "allJobs");
// //     push(jobsRef, job);
// //     })
// //   }, [companies])

// export default fetchCompanies;
