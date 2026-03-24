export type Application = {
  _id: string;
  status: "pending" | "reviewed" | "shortlisted" | "rejected" | "accepted";
  createdAt: string;
  userId: {
    name: string;
    email: string;
  };
  resume: string;
  jobId: {
    _id: string;
    title: string;
    location: string;
    salary: string;
    workMode: string;
    experience: string;
    companyId: {
      _id: string;
      name: string;
      logo?: string;
    };
  };
};
