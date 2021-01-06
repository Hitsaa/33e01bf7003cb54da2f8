import Constants from "../utils/Constants";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.URLS.apis;

function getExample() {
  return  HttpHelper.get().then(({ }) => ({  }));
};

export const exampleService = {
  getExample
};
