/**
 * since the task does not provide any explicit guidelines, except
 * that there is an access company records and one should find
 * matching requirnemnts.
 * I create an array of objects
 */

const jobBoard = [
  {
    name: "Company A",
    requirements: "requires an apartment or house, and property insurance"
  },
  {
    name: "Company B",
    requirements: "requires 5 door car or 4 door car, and a driver's license and car insurance"
  },
  {
    name: "Company C",
    requirements: "requires a social security number and a work permit"
  },
  {
    name: "Company D",
    requirements: "requires an apartment or a flat or a house"
  },
  {
    name: "Company E",
    requirements:
      "requires a driver's license and a 2 door car or a 3 door car or a 4 door car or a 5 door car"
  },
  {
    name: "Company F",
    requirements:
      "requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance"
  },
  {
    name: "Company G",
    requirements: "requires a massage qualification certificate and a liability insurance"
  },
  {
    name: "Company H",
    requirements: "requires a storage place or a garage"
  },
  {
    name: "Company J",
    requirements: "doesn't require anything, you can come and start working immediately"
  },
  {
    name: "Company K",
    requirements: "requires a PayPal account"
  }
];

/**
 * A function that accept list of requirement as an array
 */
const jobFinder = listOfRequirements => {
  //validate argument
  if (
    !listOfRequirements ||
    listOfRequirements.constructor !== Array ||
    listOfRequirements.length == 0 ||
    listOfRequirements[0].length === 0
  ) {
    return console.log(
      `list of job requirement required and should be an array. \n Or enter "[doesn't require anything]" as argument`
    );
  }

  // find job
  let companies = [];

  const findCompanies = jobBoard.map(company => {
    const { requirements } = company;

    const providedRequirement = listOfRequirements.join("|") + "|doesn't require anything";

    if (requirements.match(providedRequirement)) {
      companies.push(company);
    }
  });

  /***
   * if no match found  and no comapany that "doesn't require anything"
   * return "No company job for the requirements provided"
   */
  if (companies.length === 0) {
    return console.log("No company job for the requirements provided");
  }

  return console.log(companies);
};

jobFinder(["bike", "driver's license"]);
