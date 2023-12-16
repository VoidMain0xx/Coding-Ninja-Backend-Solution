// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";

const jobModel = mongoose.model("job" , jobSchema)
const ApplyJobModel = mongoose.model("job" , applyJobSchema)

export const createNewJob = async (job) => {
  // Write your code here
  const newJob =  new jobModel(job);
  const savedJob = await newJob.save();
  return savedJob;
};

export const applyJobRepo = async (jobId, userId) => {
  const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
  if (checkIfAlreadyApplied) {
    return false;
  } else {
    // updateApplyJobModel
    await new ApplyJobModel({ jobId, userId }).save();

    // update jobModel applicants
    const filter = { _id: jobId };
    const update = { $push: { applicants: userId } };
    return await jobModel.findByIdAndUpdate(filter, update, {
      new: true,
    });
  }
};

export const findJobRepo = async (_id) => {
  // Write your code here
  const job = await jobModel.findById(_id);
   return job;
};
