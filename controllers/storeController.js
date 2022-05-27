//using code below as a reference and guide.
/*const Learner=require('./../models/learnerModel')  
exports.getAllLearners = async (request, response) => {
  try{
  const learners=await Learner.find();
    response.status(200).json({
      status: "success",
      data: {
        learners: learners,
      },
    });
  }catch (error){
    response.status(500).json({
      status:'error',
      message:error,
    })
  }
  };
  
// This controller is to create a new learner
exports.createLearner = async (request, response) => {
  try{//tells code to try to do something and if not catch it and tell me why.

  //create our first learner
  const newLearner=await Learner.create(request.body);
    response.status(201).json({
      status: "success",
      data: {
       newLearner: newLearner,
      },
    });
  }catch(error){
    response.status(500).json({
      status:'error',
      message: error,
    })
  }
  };
  
// This controller is to retrieve a single learner
exports.getSingleLearner = async (request, response) => {
  try{
    //find a single learner using its id
  const learner= await Learner.findById(request.params.id);
//response
    response.status(200).json({
      status: "success",
      data: {
        learner: learner,
      },
    });
  }catch(error){
    response.status(500).json({
      status:'error',
      message:error,
    })
  }
  };
  
// This controller is to update a single learner data
exports.updateLearner = async (request, response) => {
  try{
    const updateLearner= await Learner.findByIdAndUpdate(request.params.id, request.body, {new:true});

    response.status(200).json({
      status: "success",
      data: {
        updateLearner,
      },
    });
  }catch(error){
    response.status(500).json({
      status:"error",
      message:error,

    })
  }
  };
  
// This controller is to delete a single learner
exports.deleteLearner = async(request, response) => {
  try{
    await Learner.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: "success",
      data:{},
    });
  }catch(error){
    response.status(500).json({
      status:"error",
      message: error,
    })
  }
  };*/
