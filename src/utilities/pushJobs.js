const jobObject = {
  id: 0,
  companyLogo: "",
  jobTitle: "",
  facebook: "",
  twitter: "",
  jobType: "",
  expLvl: 0,
  salary: "",
  location: "",
  jobCategory: "",
  overview: "",
  jobDescription: "",
  responsibilities: [""],
  reqSkills: [""],
  benefits: [""],
};

const jobGenerator = async (num) => {
  let jobObject = {};
  for (let i = 0; i > num; i++) {
    jobObject = {
      id: 0,
      jobTitle: "",
      company: "",
      facebook: "",
      twitter: "",
      jobType: "",
      expLvl: 0,
      salary: "",
      location: "",
      jobCategory: "",
      overview: "",
      jobDescription: "",
      responsibilities: [""],
      reqSkills: [""],
      benefits: [""],
      datePosted: "",
    };
  }
  const findLogo = async () => {
    const url = new URL("https://www.klazify.com/api/domain_logo");
    url.search = new URLSearchParams({
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODcxMWEwMjU2OTU4YWUwOWFmZTYwM2E2ZDM3ZDc1YmVkNjg1ZTlhYWY3NWYyNTFkNWI1Nzg4NTJhNTNhMzg2MDYwNDljYWU1YjFmODZjNjEiLCJpYXQiOjE2Nzk2NjkwMjcsIm5iZiI6MTY3OTY2OTAyNywiZXhwIjoxNzExMjkxNDI3LCJzdWIiOiIxMDM0MSIsInNjb3BlcyI6W119.sqOtKZdSFjBZiuQZhBlVK7YhBrSqZ_Z2WhGDSXcRFv8rNHlAvLzmpFXVEeNScG_PSjjhriFTxjb4uAmeLpQA7g",
      },
      params: {
        url: `http://${jobObject.company.replace(/\s/g, "")}.com`,
      },
    });

    try {
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };
  console.log(jobObject);
};
